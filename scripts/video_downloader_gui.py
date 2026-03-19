from __future__ import annotations

import os
import queue
import threading
import tkinter as tk
from pathlib import Path
from tkinter import filedialog, messagebox, ttk

from video_downloader import DEFAULT_OUTPUT_DIR, DOWNLOAD_PROFILES, download_url


COOKIE_CHOICES = {
    "不使用浏览器登录态": None,
    "使用 Chrome 登录态": "chrome",
    "使用 Edge 登录态": "edge",
    "使用 Firefox 登录态": "firefox",
    "使用 Brave 登录态": "brave",
}


PROFILE_LABEL_TO_KEY = {
    profile.label: profile.key for profile in DOWNLOAD_PROFILES.values()
}


class VideoDownloaderApp:
    def __init__(self, root: tk.Tk) -> None:
        self.root = root
        self.root.title("URL 视频下载工具")
        self.root.geometry("760x540")
        self.root.minsize(720, 500)

        self.events: queue.Queue[tuple[str, object]] = queue.Queue()
        self.is_downloading = False

        self.url_var = tk.StringVar()
        self.output_var = tk.StringVar(value=str(DEFAULT_OUTPUT_DIR))
        self.profile_var = tk.StringVar(
            value=DOWNLOAD_PROFILES["video_best"].label
        )
        self.cookies_var = tk.StringVar(value="不使用浏览器登录态")
        self.status_var = tk.StringVar(
            value="请输入视频 URL，然后点击“开始下载”。"
        )
        self.progress_var = tk.DoubleVar(value=0.0)

        self._build_layout()
        self.root.after(150, self._poll_events)

    def _build_layout(self) -> None:
        container = ttk.Frame(self.root, padding=16)
        container.pack(fill=tk.BOTH, expand=True)

        header = ttk.Label(
            container,
            text="视频下载工具",
            font=("Microsoft YaHei UI", 18, "bold"),
        )
        header.pack(anchor=tk.W)

        tip = ttk.Label(
            container,
            text="请仅下载你有权保存或使用的平台内容。",
            foreground="#666666",
        )
        tip.pack(anchor=tk.W, pady=(4, 16))

        form = ttk.Frame(container)
        form.pack(fill=tk.X)
        form.columnconfigure(1, weight=1)

        ttk.Label(form, text="视频 URL").grid(row=0, column=0, sticky=tk.W, pady=6)
        ttk.Entry(form, textvariable=self.url_var).grid(
            row=0, column=1, sticky=tk.EW, pady=6
        )

        ttk.Label(form, text="保存目录").grid(row=1, column=0, sticky=tk.W, pady=6)
        output_row = ttk.Frame(form)
        output_row.grid(row=1, column=1, sticky=tk.EW, pady=6)
        output_row.columnconfigure(0, weight=1)

        ttk.Entry(output_row, textvariable=self.output_var).grid(
            row=0, column=0, sticky=tk.EW
        )
        ttk.Button(output_row, text="选择", command=self._choose_output_dir).grid(
            row=0, column=1, padx=(8, 0)
        )
        ttk.Button(output_row, text="打开目录", command=self._open_output_dir).grid(
            row=0, column=2, padx=(8, 0)
        )

        ttk.Label(form, text="下载模式").grid(row=2, column=0, sticky=tk.W, pady=6)
        ttk.Combobox(
            form,
            textvariable=self.profile_var,
            state="readonly",
            values=[profile.label for profile in DOWNLOAD_PROFILES.values()],
        ).grid(row=2, column=1, sticky=tk.EW, pady=6)

        ttk.Label(form, text="登录态").grid(row=3, column=0, sticky=tk.W, pady=6)
        ttk.Combobox(
            form,
            textvariable=self.cookies_var,
            state="readonly",
            values=list(COOKIE_CHOICES.keys()),
        ).grid(row=3, column=1, sticky=tk.EW, pady=6)

        actions = ttk.Frame(container)
        actions.pack(fill=tk.X, pady=(16, 10))

        self.download_button = ttk.Button(
            actions,
            text="开始下载",
            command=self._start_download,
        )
        self.download_button.pack(side=tk.LEFT)

        ttk.Button(actions, text="清空日志", command=self._clear_log).pack(
            side=tk.LEFT, padx=(8, 0)
        )

        ttk.Label(
            container,
            textvariable=self.status_var,
            foreground="#1f3b5b",
        ).pack(anchor=tk.W, pady=(0, 8))

        progress = ttk.Progressbar(
            container,
            variable=self.progress_var,
            maximum=100,
        )
        progress.pack(fill=tk.X, pady=(0, 12))

        self.log_text = tk.Text(
            container,
            wrap=tk.WORD,
            height=18,
            font=("Consolas", 10),
        )
        self.log_text.pack(fill=tk.BOTH, expand=True)
        self.log_text.configure(state=tk.DISABLED)

    def _choose_output_dir(self) -> None:
        selected = filedialog.askdirectory(
            initialdir=self.output_var.get() or str(DEFAULT_OUTPUT_DIR)
        )
        if selected:
            self.output_var.set(selected)

    def _open_output_dir(self) -> None:
        path = Path(self.output_var.get()).expanduser()
        path.mkdir(parents=True, exist_ok=True)
        os.startfile(path)

    def _append_log(self, message: str) -> None:
        self.log_text.configure(state=tk.NORMAL)
        self.log_text.insert(tk.END, message + "\n")
        self.log_text.see(tk.END)
        self.log_text.configure(state=tk.DISABLED)

    def _clear_log(self) -> None:
        self.log_text.configure(state=tk.NORMAL)
        self.log_text.delete("1.0", tk.END)
        self.log_text.configure(state=tk.DISABLED)

    def _start_download(self) -> None:
        if self.is_downloading:
            return

        url = self.url_var.get().strip()
        if not url:
            messagebox.showwarning("缺少 URL", "请先输入要下载的视频地址。")
            return

        output_dir = Path(self.output_var.get()).expanduser()
        output_dir.mkdir(parents=True, exist_ok=True)

        profile_key = PROFILE_LABEL_TO_KEY[self.profile_var.get()]
        cookies_browser = COOKIE_CHOICES[self.cookies_var.get()]

        self.is_downloading = True
        self.download_button.configure(state=tk.DISABLED)
        self.progress_var.set(0)
        self.status_var.set("正在下载，请稍候...")
        self._append_log(f"开始任务: {url}")

        worker = threading.Thread(
            target=self._download_worker,
            args=(url, str(output_dir), profile_key, cookies_browser),
            daemon=True,
        )
        worker.start()

    def _download_worker(
        self,
        url: str,
        output_dir: str,
        profile_key: str,
        cookies_browser: str | None,
    ) -> None:
        try:
            result = download_url(
                url=url,
                output_dir=output_dir,
                profile_key=profile_key,
                cookies_browser=cookies_browser,
                log_callback=lambda msg: self.events.put(("log", msg)),
                progress_callback=lambda payload: self.events.put(
                    ("progress", payload)
                ),
            )
        except Exception as exc:
            self.events.put(("error", str(exc)))
            return

        self.events.put(("done", result))

    def _handle_progress(self, payload: dict) -> None:
        status = payload.get("status")
        if status == "downloading":
            percent_text = payload.get("_percent_str", "").strip().replace("%", "")
            try:
                percent = float(percent_text)
            except ValueError:
                percent = self.progress_var.get()

            self.progress_var.set(percent)

            speed = payload.get("_speed_str", "").strip()
            eta = payload.get("_eta_str", "").strip() or payload.get("eta", "")
            filename = Path(payload.get("filename", "")).name

            text = f"下载中 {percent:.1f}%"
            if speed:
                text += f" | 速度 {speed}"
            if eta:
                text += f" | 剩余 {eta}"
            if filename:
                text += f" | {filename}"
            self.status_var.set(text)
        elif status == "finished":
            self.status_var.set("文件已下载，正在进行合并或转码...")

    def _finish_download(self) -> None:
        self.is_downloading = False
        self.download_button.configure(state=tk.NORMAL)

    def _poll_events(self) -> None:
        try:
            while True:
                event, payload = self.events.get_nowait()
                if event == "log":
                    self._append_log(str(payload))
                elif event == "progress":
                    self._handle_progress(payload)  # type: ignore[arg-type]
                elif event == "error":
                    self._finish_download()
                    self.status_var.set("下载失败。")
                    self._append_log(f"错误: {payload}")
                    messagebox.showerror("下载失败", str(payload))
                elif event == "done":
                    self._finish_download()
                    result = payload  # type: ignore[assignment]
                    output_path = result.get("output_path") or result.get("output_dir")
                    self.progress_var.set(100)
                    self.status_var.set("下载完成。")
                    self._append_log(f"完成: {output_path}")
                    messagebox.showinfo(
                        "下载完成",
                        f"文件已保存到:\n{output_path}",
                    )
        except queue.Empty:
            pass

        self.root.after(150, self._poll_events)


def main() -> None:
    root = tk.Tk()
    style = ttk.Style()
    try:
        style.theme_use("vista")
    except tk.TclError:
        pass

    app = VideoDownloaderApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()

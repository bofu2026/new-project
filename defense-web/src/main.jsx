import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  AudioWaveform,
  BarChart3,
  Blocks,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  DatabaseZap,
  Landmark,
  Network,
  Scale,
  Sparkles,
  Waves,
} from "lucide-react";
import "./styles.css";

const slideImages = Array.from({ length: 32 }, (_, i) => `/slides/page-${String(i + 1).padStart(2, "0")}.jpg`);

const chapters = [
  {
    key: "intro",
    tag: "INTRO",
    title: "发行机制，是加密资产的制度入口",
    kicker: "从“资产是什么”转向“资产如何被发行”",
    body:
      "本文将发行视为网络激励、价值分配、治理权配置和会计确认的共同起点，回答融资信号、宏观波动与制度计量如何被统一理解。",
    metric: "32",
    metricLabel: "页答辩主线",
    image: slideImages[3],
    icon: Network,
  },
  {
    key: "ico",
    tag: "PART I",
    title: "一级市场：ICO 成功的可信信号",
    kicker: "AutoML + SHAP",
    body:
      "在高维特征空间中识别可靠发行信号。结果表明，成功项目依赖可验证的资金背书、披露完整性与身份认证，而不是单纯的营销热度。",
    metric: "86.7%",
    metricLabel: "集成模型准确度",
    image: slideImages[12],
    icon: BrainCircuit,
  },
  {
    key: "p2e",
    tag: "PART II",
    title: "二级市场：P2E 增发的通胀环路",
    kicker: "NK-DSGE 的虚拟经济版本",
    body:
      "代币奖励提高参与度，但过度增发会稀释价值并强化通胀预期。没有传统中央银行时，规则透明度与时间一致性成为稳定虚拟经济的关键。",
    metric: "3",
    metricLabel: "需求 / 供给 / 政策冲击",
    image: slideImages[20],
    icon: Waves,
  },
  {
    key: "accounting",
    tag: "PART III",
    title: "制度层面：发行机制导向的会计框架",
    kicker: "确认、计量与披露",
    body:
      "会计处理应反映资产的经济创生逻辑。PoW、PoS、ICO、P2E 与稳定币的发行机制，分别导向不同的确认时点、计量属性与披露边界。",
    metric: "5",
    metricLabel: "发行机制分类",
    image: slideImages[28],
    icon: Scale,
  },
];

const signals = [
  ["预售资金", "早期市场验证与资金背书", 94],
  ["代币销售信息", "披露完整性与发行透明度", 88],
  ["KYC", "身份认证与合规可信度", 78],
  ["季度募资规模", "市场流动性与外部认可", 72],
  ["白名单 / 硬上限", "更偏营销因素，预测力有限", 36],
];

const loop = [
  "代币增发",
  "奖励增加",
  "玩家行为",
  "NFT 需求",
  "价格与通胀",
  "治理响应",
  "市场预期",
];

const accounting = [
  ["PoW", "算力服务对价", "区块奖励"],
  ["PoS", "质押收益", "控制权判断"],
  ["ICO", "融资安排", "信息披露"],
  ["P2E", "激励发行", "通胀调节"],
  ["Stablecoin", "锚定机制", "赎回权利"],
];

function IssuanceCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles = Array.from({ length: 84 }, (_, i) => ({
      a: (Math.PI * 2 * i) / 84,
      r: 90 + (i % 9) * 24,
      s: 0.00035 + (i % 7) * 0.00008,
      hue: i % 4,
    }));

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.52;
      const cy = height * 0.48;
      const colors = ["#2dd4bf", "#f59e0b", "#f43f5e", "#a3e635"];
      ctx.globalCompositeOperation = "lighter";

      for (let ring = 0; ring < 4; ring += 1) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, 120 + ring * 58, 46 + ring * 28, -0.32, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${0.13 - ring * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      particles.forEach((p, i) => {
        const angle = p.a + t * p.s;
        const wobble = Math.sin(t * 0.001 + i) * 8;
        const x = cx + Math.cos(angle) * (p.r + wobble);
        const y = cy + Math.sin(angle) * (p.r * 0.42 + wobble * 0.4);
        ctx.beginPath();
        ctx.arc(x, y, i % 5 === 0 ? 2.6 : 1.6, 0, Math.PI * 2);
        ctx.fillStyle = colors[p.hue];
        ctx.shadowColor = colors[p.hue];
        ctx.shadowBlur = 16;
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = "source-over";
      const gradient = ctx.createRadialGradient(cx, cy, 12, cx, cy, 260);
      gradient.addColorStop(0, "rgba(255,255,255,0.22)");
      gradient.addColorStop(0.32, "rgba(45,212,191,0.10)");
      gradient.addColorStop(0.68, "rgba(245,158,11,0.07)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="issuance-canvas" ref={ref} aria-hidden="true" />;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max <= 0 ? 0 : window.scrollY / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function Hero() {
  return (
    <section className="hero">
      <IssuanceCanvas />
      <div className="hero-copy">
        <div className="eyebrow">
          <Sparkles size={16} />
          博士学位论文答辩
        </div>
        <h1>加密资产的发行</h1>
        <p className="subtitle">Crypto Assets Issuance</p>
        <p className="thesis">发行机制决定价值分配、风险传导与会计确认</p>
        <div className="hero-meta">
          <span>张博夫</span>
          <span>同济大学经济与管理学院</span>
          <span>指导教师：白云霞 教授</span>
        </div>
      </div>
      <div className="hero-slide">
        <img src={slideImages[0]} alt="答辩封面预览" />
      </div>
      <a className="scroll-cue" href="#map" aria-label="进入答辩路线">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

function ResearchMap() {
  return (
    <section id="map" className="section map-section">
      <div className="section-heading">
        <span>RESEARCH DESIGN</span>
        <h2>一个总问题，拆成三层可回答的机制</h2>
      </div>
      <div className="map-grid">
        {chapters.slice(1).map((item, index) => {
          const Icon = item.icon;
          return (
            <article className="map-node" key={item.key}>
              <div className="node-index">0{index + 1}</div>
              <Icon size={30} />
              <h3>{item.title}</h3>
              <p>{item.kicker}</p>
            </article>
          );
        })}
      </div>
      <div className="throughline">
        <span>微观融资</span>
        <i />
        <span>宏观波动</span>
        <i />
        <span>制度计量</span>
      </div>
    </section>
  );
}

function ChapterPanels() {
  return (
    <section className="section chapter-stack">
      {chapters.map((item) => {
        const Icon = item.icon;
        return (
          <article className="chapter-panel" key={item.key}>
            <div className="chapter-copy">
              <span className="tag">{item.tag}</span>
              <h2>{item.title}</h2>
              <p className="kicker">{item.kicker}</p>
              <p>{item.body}</p>
              <div className="metric">
                <strong>{item.metric}</strong>
                <span>{item.metricLabel}</span>
              </div>
            </div>
            <div className="chapter-visual">
              <Icon className="floating-icon" size={44} />
              <img src={item.image} alt={`${item.title} 原答辩页预览`} />
            </div>
          </article>
        );
      })}
    </section>
  );
}

function SignalLadder() {
  return (
    <section className="section split-section">
      <div className="section-heading compact">
        <span>PART I</span>
        <h2>ICO 成功的“信号阶梯”</h2>
      </div>
      <div className="ladder">
        {signals.map(([name, desc, value]) => (
          <div className="signal-row" key={name}>
            <div>
              <strong>{name}</strong>
              <p>{desc}</p>
            </div>
            <div className="signal-bar">
              <span style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <aside className="quote-panel">
        <BarChart3 size={28} />
        <p>成功项目不是靠“热闹营销”，而是靠可验证的资金和可信度信号。</p>
      </aside>
    </section>
  );
}

function InflationLoop() {
  return (
    <section className="section loop-section">
      <div className="section-heading">
        <span>PART II</span>
        <h2>P2E 发行的自我强化环路</h2>
      </div>
      <div className="loop-orbit">
        {loop.map((item, index) => (
          <div className="loop-item" style={{ "--i": index }} key={item}>
            {item}
          </div>
        ))}
        <div className="loop-core">
          <CircleDollarSign size={42} />
          <strong>准货币政策</strong>
          <span>发行规则 · 预期管理 · 链上监测</span>
        </div>
      </div>
    </section>
  );
}

function AccountingMatrix() {
  return (
    <section className="section accounting-section">
      <div className="section-heading">
        <span>PART III</span>
        <h2>发行机制导向的会计分类框架</h2>
      </div>
      <div className="matrix">
        {accounting.map(([name, focus, output]) => (
          <article key={name}>
            <h3>{name}</h3>
            <p>{focus}</p>
            <span>{output}</span>
          </article>
        ))}
      </div>
      <div className="output-line">
        <CheckCircle2 size={22} />
        确认时点 · 计量属性 · 收入归类 · 损益路径 · 信息披露
      </div>
    </section>
  );
}

function SlideGallery() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => slideImages[index], [index]);
  return (
    <section className="section gallery-section">
      <div className="section-heading compact">
        <span>ORIGINAL DECK</span>
        <h2>原答辩稿 32 页速览</h2>
      </div>
      <div className="gallery">
        <button
          className="gallery-btn"
          type="button"
          onClick={() => setIndex((index - 1 + slideImages.length) % slideImages.length)}
          aria-label="上一页"
        >
          <ChevronLeft size={22} />
        </button>
        <figure>
          <img src={current} alt={`原答辩稿第 ${index + 1} 页`} />
          <figcaption>{String(index + 1).padStart(2, "0")} / 32</figcaption>
        </figure>
        <button
          className="gallery-btn"
          type="button"
          onClick={() => setIndex((index + 1) % slideImages.length)}
          aria-label="下一页"
        >
          <ChevronRight size={22} />
        </button>
      </div>
      <div className="thumb-strip">
        {slideImages.map((src, i) => (
          <button
            type="button"
            className={i === index ? "active" : ""}
            key={src}
            onClick={() => setIndex(i)}
            aria-label={`查看第 ${i + 1} 页`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section className="finale">
      <div className="finale-inner">
        <span>CONCLUSION</span>
        <h2>加密资产发行不是单一融资事件，而是一套制度性机制。</h2>
        <div className="contribs">
          <article>
            <DatabaseZap size={24} />
            <strong>方法贡献</strong>
            <p>可解释 AutoML 识别 ICO 成功因素。</p>
          </article>
          <article>
            <Blocks size={24} />
            <strong>理论贡献</strong>
            <p>NK-DSGE 拓展至元宇宙代币发行。</p>
          </article>
          <article>
            <Landmark size={24} />
            <strong>会计贡献</strong>
            <p>提出机制导向的数字资产分类路径。</p>
          </article>
        </div>
        <div className="qa">
          <BookOpen size={28} />
          <strong>Future Research & Q&A</strong>
        </div>
      </div>
    </section>
  );
}

function App() {
  const progress = useScrollProgress();
  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="topbar">
        <a href="#root" className="brand">
          <AudioWaveform size={18} />
          Crypto Assets Issuance
        </a>
        <div>
          <a href="#map">路线</a>
          <a href="#slides">原稿</a>
        </div>
      </nav>
      <Hero />
      <ResearchMap />
      <ChapterPanels />
      <SignalLadder />
      <InflationLoop />
      <AccountingMatrix />
      <div id="slides">
        <SlideGallery />
      </div>
      <Conclusion />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

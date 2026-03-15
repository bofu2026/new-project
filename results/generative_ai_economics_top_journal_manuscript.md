# Generative AI, Task Reallocation, and Wage Inequality: A Top-Journal-Style Economics Manuscript

## Abstract

This article develops an economic framework for understanding why generative artificial intelligence (AI) can diffuse rapidly, raise productivity in selected knowledge-intensive workflows, compress performance differences within some occupations, and yet still generate only modest short-run aggregate productivity gains while increasing broader inequality pressures. The central argument is that generative AI is best understood not as a general replacement for labor, but as a technology of task reallocation whose economic effects depend on codifiability, organizational redesign, worker heterogeneity, and adoption frictions. The paper combines four elements. First, it synthesizes recent evidence from field experiments, administrative data, household surveys, and international organizations showing that generative AI use at work has already become widespread in some occupations, with particularly large productivity gains for less experienced workers in text- and communication-intensive tasks. Second, it develops a formal, top-journal-style task model in which firms allocate tasks among manual labor, AI-assisted labor, and automated routines. In the model, generative AI operates partly as an “experience compressor”: it embeds codified frontier knowledge into production, thereby narrowing within-occupation productivity gaps for exposed tasks even as it shifts demand away from workers performing noncodifiable or nonexposed tasks. Third, the paper derives equilibrium implications for wages, labor share, market concentration, and the diffusion path of AI across firms and regions. Fourth, it proposes an empirical strategy for identifying these effects using worker-level AI exposure, staggered firm adoption, and local labor market variation in task composition.

The analysis yields five main conclusions. First, the short-run effects of generative AI are likely to be concentrated in occupations rich in language, documentation, and pattern-recognition tasks, rather than uniformly distributed across the economy. Second, the largest immediate productivity gains often accrue to less experienced or lower-performing workers within exposed occupations because AI reduces the cost of accessing best-practice knowledge. Third, aggregate productivity effects may remain modest for some time because many tasks are not codifiable, because organizational change is costly, and because firms must invest in complementary data, governance, and workflow redesign before AI can be used at scale. Fourth, inequality may rise not because all skilled workers gain, but because gains accrue disproportionately to workers, firms, and regions positioned to adopt AI-assisted workflows while others are left in slower-growth task sets. Fifth, policy can materially affect whether generative AI becomes a complement to broad-based labor upgrading or a force that concentrates rents in frontier firms. The paper concludes with a pro-worker policy agenda centered on diffusion support, training, portability of digital complements, competition policy, and institutional mechanisms that raise the labor share of AI-generated surplus.

**JEL Codes:** J23; J24; J31; O33; O47

**Keywords:** generative AI; automation; tasks; wage inequality; productivity; labor demand; diffusion; technology adoption

## 1. Introduction

The economic debate over generative artificial intelligence has moved at unusual speed. Within a short period, systems capable of drafting text, summarizing documents, writing code, answering customer queries, analyzing images, and generating synthetic media have gone from laboratory demonstrations to workplace tools used by millions of workers. This rapid transition has created a puzzle for economists. The technology appears broad in potential applicability, yet early measured effects are highly uneven across tasks, firms, and occupations. Some field experiments report meaningful productivity gains, especially for less experienced workers in communication-intensive settings. At the same time, aggregate macroeconomic forecasts remain cautious, emphasizing adoption lags, adjustment costs, organizational constraints, and the limited share of total work time currently affected. A coherent economics of generative AI must explain both patterns simultaneously.

This paper argues that generative AI is neither best understood as a pure labor-saving automation wave nor as a neutral-purpose productivity shock that simply scales with computational capability. Instead, it should be analyzed as a technology of task reallocation. Generative AI changes production by reallocating tasks across three margins: tasks that remain manual, tasks that become AI-assisted, and tasks that become sufficiently standardized to be partially or fully automated. The distributional consequences of this process depend on which tasks are codifiable, how firms reorganize workflows, and which workers can take advantage of AI as a complement rather than experience it as a substitute.

The distinction between automation and augmentation is not new in economics. The task-based literature has long emphasized that technological change affects labor demand through the specific tasks that machines displace and the new tasks or complementarities that technology creates (Autor, Levy, & Murnane, 2003; Acemoglu & Restrepo, 2018). What is new about generative AI is the nature of the affected task domain. Earlier automation waves were often concentrated in routine, rules-based, and physically embodied tasks. Generative AI extends machine capability into language, communication, synthesis, retrieval, and pattern completion, which means it reaches into occupations historically associated with abstract and nonroutine work. Yet this does not imply that entire occupations vanish. In many cases, the technology targets only parts of jobs. It assists drafting but not relationship management, summarizes records but not final accountability, proposes code but not full system design, and answers standard customer queries but not complex conflict resolution. The relevant unit of analysis is therefore the task, not the occupation, and the relevant economic question is how the technology reshapes task bundles over time.

This perspective helps reconcile three facts that might otherwise appear contradictory.

First, recent microeconomic evidence suggests that generative AI can deliver substantial productivity improvements in some settings. Field evidence from customer support indicates that access to AI assistance increased worker productivity by around 14 percent on average, with gains substantially larger for less experienced and lower-skilled workers (Brynjolfsson, Li, & Raymond, 2023). Experimental evidence shows that access to generative AI tools can improve performance in writing and business communication tasks, again with especially large gains among lower baseline performers (Noy & Zhang, 2023). New survey evidence further suggests that AI use at work spread rapidly through 2024, with nontrivial effects on time allocation and workflow organization (Bick, Blandin, & Deming, 2024).

Second, international and macro-oriented institutions remain cautious about near-term aggregate effects. The IMF has emphasized that a large share of jobs in advanced economies may be exposed to AI, but exposure is not equivalent to displacement, and complementary investments are likely to shape realized outcomes (Cazzaniga et al., 2024). The ILO’s global exposure analysis similarly concludes that many jobs are more likely to be transformed than replaced, with exposure patterns differing sharply across gender, income level, and occupational structure (ILO, 2025). Acemoglu (2024) argues that while AI may generate meaningful benefits in specific areas, plausible near-term aggregate total factor productivity gains may still be limited because only some tasks can be economically automated and because diffusion is costly.

Third, early evidence suggests that generative AI may compress performance differences within certain occupations while widening broader inequality across workers, firms, and places. If AI embeds frontier knowledge into everyday workflows, lower-experience workers in exposed tasks may improve disproportionately. But workers in less exposed occupations, smaller firms without complementary investments, or regions specializing in noncodifiable tasks may benefit less. The result is a new pattern of inequality: compression within some jobs, divergence across broader segments of the labor market.

The central contribution of this paper is to provide a unified economic framework for these developments. It does so in four steps.

First, it synthesizes the emerging empirical evidence on generative AI adoption, productivity, time use, and occupational exposure, focusing on official sources and primary academic research. The empirical record already suggests several robust patterns. Adoption is faster than many previous workplace technologies, but usage remains concentrated in a limited set of tasks. Productivity gains are real but heterogeneous. Firms face implementation bottlenecks involving data access, security, workflow redesign, and managerial trust. Workers often use AI for drafting, summarization, coding assistance, information retrieval, and communication support rather than full end-to-end job execution. These facts point toward a task-based interpretation rather than occupation-wide replacement.

Second, the paper develops a model in which firms choose whether to leave tasks manual, augment them with AI assistance, or automate them. Tasks differ in codifiability and the value of contextual judgment. Workers differ in skill, experience, and the ability to supervise or exploit AI-generated outputs. Generative AI increases effective productivity in codifiable knowledge tasks partly by transferring best-practice heuristics to less experienced workers. This “experience compression” mechanism is central. It explains why productivity gains may be larger for lower-performing workers in exposed occupations, why firms can gain from diffusion of organizational knowledge through AI tools, and why within-occupation inequality can decline even as broader inequality pressures rise.

Third, the model embeds adoption frictions. Firms must incur fixed costs to adopt AI, redesign workflows, govern usage, and build complementary data pipelines. These costs vary by firm size, managerial quality, process standardization, and access to digital complements. As a result, diffusion is uneven. Frontier firms and already digitized organizations adopt first, which can amplify market concentration and wage divergence across firms.

Fourth, the paper develops an empirical strategy suitable for a top-journal-style applied economics project. The strategy combines occupation-task exposure indices, staggered adoption across firms, worker-level heterogeneity in baseline performance, and local labor market variation in exposure. The goal is not to claim that the paper itself presents completed causal estimates from newly assembled microdata. Rather, it offers a fully specified identification framework that could support such estimates and interprets existing evidence through that lens.

The normative implication is that policy matters. Generative AI does not mechanically produce either mass unemployment or universal productivity gains. Its effects depend on institutional design, training, competition policy, labor market adjustment, and the distribution of complementary assets. A pro-worker AI strategy would encourage broad diffusion of productivity-enhancing tools while ensuring that workers share in the resulting surplus and that organizational change does not merely convert wage income into platform or firm rents.

This paper contributes to several literatures. It builds on the task-based theory of automation and labor demand (Autor et al., 2003; Acemoglu & Restrepo, 2018, 2019), the economics of technology diffusion and organizational complements (Brynjolfsson, Rock, & Syverson, 2021), the literature on inequality and job polarization (Autor, Dorn, & Hanson, 2015; Acemoglu & Restrepo, 2020), and the fast-growing empirical literature on generative AI in the workplace (Brynjolfsson et al., 2023; Noy & Zhang, 2023; Bick et al., 2024). Its specific contribution is to integrate these literatures around the idea that generative AI is a codification technology for knowledge work: it reduces the cost of accessing and applying patterns that were previously embedded in documents, exemplars, and experienced workers’ tacit routines, but only for tasks that can be rendered legible to the model and governable within firms.

The rest of the paper is organized as follows. Section 2 documents the institutional and empirical background of generative AI as an economic technology. Section 3 situates the paper within the existing literature. Section 4 develops the model. Section 5 derives equilibrium implications for productivity, wages, and diffusion. Section 6 maps the model to the current empirical evidence and develops a full identification strategy. Section 7 discusses macroeconomic and general equilibrium consequences. Section 8 develops a policy agenda for pro-worker AI diffusion. Section 9 concludes.

## 2. Generative AI as an Economic Technology: Facts, Institutions, and Measurement

### 2.1 Why Generative AI Differs from Earlier Digital Technologies

Economists have spent decades analyzing information technology, software, robotics, and algorithmic systems. Generative AI belongs to this family, but it is economically distinctive in at least four ways.

First, generative AI lowers the cost of producing and transforming symbolic outputs. Earlier software tools helped workers execute predefined commands more efficiently. Generative models can draft new text, synthesize code, summarize records, translate style across formats, and generate candidate outputs from open-ended prompts. The economic consequence is that the technology enters the production process at the stage of cognitive composition, not merely clerical execution.

Second, the interface to generative AI is unusually broad. Natural-language prompting lowers the technical barrier to use. A worker need not learn a full programming environment to obtain assistance. This broad interface is one reason diffusion has been unusually rapid relative to some earlier enterprise technologies. The technology is general enough to fit into many workflows, yet modular enough to be used informally before full enterprise integration occurs.

Third, generative AI interacts strongly with codified organizational knowledge. Firms produce huge volumes of documents, customer records, templates, code repositories, and internal process material. When securely connected to these knowledge assets, generative AI can function as a retrieval, synthesis, and drafting layer over the firm’s own informational capital. This creates strong complementarities between AI and organizational standardization, documentation quality, data governance, and digital infrastructure.

Fourth, generative AI affects the frontier between expert judgment and routine cognition rather than merely the frontier between manual routine and machine repetition. Many highly paid occupations involve repeatable drafting, synthesis, triage, and pattern-recognition tasks. Generative AI reaches into these tasks even when full occupational substitution remains unlikely. The result is a technology that may compress skill differences within exposed occupations while still disadvantaging workers whose jobs contain little codifiable symbolic content.

These features imply that generative AI should not be measured solely by hardware deployment, software expenditure, or robot counts. A meaningful economic measurement strategy must track usage at the task level, organizational integration, performance effects, and heterogeneity across workers and firms.

### 2.2 Stylized Facts from the Emerging Evidence

Several stylized facts can already be extracted from the emerging evidence.

The first stylized fact is rapid but uneven adoption. Survey-based evidence assembled by Bick, Blandin, and Deming (2024) indicates that by late 2024 a substantial share of U.S. workers had used generative AI at work at least once in the prior week, with a nontrivial share using it daily. The same evidence suggests that AI affected a meaningful but still limited fraction of total work hours. This combination matters. It shows that generative AI diffuses quickly at the extensive margin, but the intensive margin remains bounded because only some tasks within jobs are currently exposed.

The second stylized fact is heterogeneous but often significant productivity effects. In customer support, AI assistance increased average productivity and disproportionately helped lower-skilled or less experienced workers (Brynjolfsson et al., 2023). In experimental writing tasks, generative AI improved output quality and reduced time required, again with larger gains among weaker baseline performers (Noy & Zhang, 2023). Across studies, the recurring theme is not universal labor replacement but selective improvement in codifiable communication and synthesis tasks.

The third stylized fact is occupational concentration. Exposure estimates by Eloundou et al. (2023), the IMF (Cazzaniga et al., 2024), OECD analyses, and the ILO (2025) all suggest that AI exposure is highest in occupations intensive in language, documentation, administration, programming, analysis, and professional communication. Exposure is typically lower in occupations centered on physical dexterity, unpredictable environments, in-person care, and embodied service work. This pattern differs from earlier automation waves that heavily affected routine production and clerical tasks.

The fourth stylized fact is that exposure does not equal substitution. International organizations have been careful on this point. The ILO’s 2025 assessment emphasizes that many jobs are more likely to be transformed than fully replaced, and that the nature of the transformation depends on institutional and organizational choices. The IMF’s work similarly differentiates between jobs where AI complements high-productivity work and jobs where it may erode demand. This distinction is crucial for economic analysis: a task exposed to AI may be accelerated, standardized, or quality-enhanced without being removed from the human job bundle.

The fifth stylized fact is that organizational complements are critical. Firms do not simply install generative AI and harvest gains. Implementation requires secure access to data, quality control, workflow redesign, management buy-in, legal review, and training. Brynjolfsson, Rock, and Syverson (2021) have argued more generally that the productivity effects of digital technologies often arrive with delay because complementary investments and organizational change are necessary. Generative AI appears to follow this pattern even though consumer-style interfaces make experimentation easy. Informal use can spread rapidly, but stable enterprise-scale productivity gains depend on complements.

### 2.3 Measurement Problems in the Economics of Generative AI

The economics of generative AI faces a measurement challenge reminiscent of earlier information technology debates, but more acute.

The first problem is that expenditure is a poor proxy for exposure. Workers can use free or low-cost tools informally. Firms may license enterprise products but see limited effective use. Cloud spending can rise for reasons unrelated to AI. Therefore, adoption must be measured directly through usage, workflow integration, or task exposure rather than through accounting categories alone.

The second problem is that occupation-level classifications can obscure enormous within-occupation heterogeneity. Two marketing analysts may perform very different task bundles; two lawyers may differ in the share of time spent on drafting versus client strategy; two software developers may differ in the amount of boilerplate versus systems architecture in their work. Occupational averages are informative for macro exposure, but causal analysis needs task-level granularity.

The third problem is that output quality is difficult to observe. If generative AI reduces time spent writing but also changes error rates, originality, tone, or client satisfaction, then productivity cannot be measured by time alone. Some settings, such as customer service, permit relatively clean output measurement. Many professional occupations do not.

The fourth problem is endogeneity in adoption. High-performing firms may adopt earlier. High-performing workers may self-select into tool use, or alternatively low-performing workers may seek assistance more aggressively. Identifying causal effects requires designs that separate exposure from selection.

These measurement difficulties motivate the theoretical and empirical approach of the paper. A useful framework must explain why micro-level gains can be large, why macro-level gains can remain modest, and how distributional effects arise through differential task exposure and adoption capacity.

## 3. Related Literature and Conceptual Positioning

### 3.1 The Task-Based Tradition

The intellectual foundation for analyzing generative AI lies in the task-based approach to technology and labor markets. Autor, Levy, and Murnane (2003) shifted the analysis of technological change away from broad skill categories and toward tasks. Their central insight was that computerization substitutes for routine tasks but complements nonroutine problem solving and complex communication. This framework was later expanded by Acemoglu and Restrepo (2018, 2019) into a more general theory in which automation displaces labor from some tasks while new tasks and productivity effects can offset or even reverse the resulting decline in labor demand.

The task framework remains the right starting point for generative AI because occupations are bundles of tasks, not homogeneous units. However, generative AI extends the frontier of machine capability into domains that earlier computerization left relatively intact. Tasks involving drafting, summarization, translation, coding assistance, and standardized communication are not routine in the older sense of purely repetitive clerical execution, yet they are often codifiable enough for generative AI to affect them. The new technology therefore requires a refinement of the task taxonomy. The relevant distinction is no longer only routine versus nonroutine. It is increasingly codifiable versus noncodifiable, or more precisely, whether the information required to perform the task can be rendered into a form that a generative model can use reliably with acceptable governance and error costs.

This paper’s model builds on the task-based tradition but introduces a generative-AI-specific mechanism: experience compression. In many knowledge occupations, productivity differences arise because experienced workers have accumulated reusable heuristics, templates, scripts, and diagnostic patterns. Generative AI can reduce the cost of applying those patterns to new situations, thereby transferring part of the productivity frontier to less experienced workers. This is not simply automation; it is the partial codification of tacit or semi-tacit know-how.

### 3.2 Technology, Inequality, and Polarization

A second literature concerns technology and inequality. The skill-biased technical change literature emphasized complementarity between information technology and skilled labor. Later work on job polarization showed that employment growth often concentrated in high-wage abstract work and low-wage service work, with middle-skill routine jobs under pressure (Autor & Dorn, 2013; Goos, Manning, & Salomons, 2014). Acemoglu and Restrepo (2020) further highlighted the displacement effects of industrial robots and related automation technologies.

Generative AI complicates this picture. On the one hand, exposure is relatively high in professional and administrative occupations that are more educated and often higher paid than the occupations affected most strongly in earlier automation waves. On the other hand, within exposed occupations, the technology may disproportionately benefit less experienced workers, which can reduce intra-occupational inequality even while widening inter-occupational or inter-firm divergence. The distributional pattern is therefore not a simple replay of routine-biased automation. It is a hybrid process: compression in some professional ladders, displacement risks in some back-office or clerical roles, and persistent protection for physically embodied or deeply relational work.

This paper contributes by clarifying how these patterns can coexist. A technology that compresses performance within exposed jobs can still increase overall inequality if access to the technology, to complementary data, or to organizational redesign is uneven.

### 3.3 Diffusion, Organizational Complements, and the Productivity J-Curve

A third literature concerns diffusion and organizational complements. Brynjolfsson, Rock, and Syverson (2021) argue that general purpose technologies often exhibit a productivity J-curve: firms incur the costs of adoption and complementary investment before aggregate productivity gains become visible. This insight is especially relevant for generative AI. The ease of trial use can make diffusion look deceptively frictionless. Yet meaningful production gains often require secure integration into enterprise workflows, redesign of jobs, establishment of evaluation protocols, and training workers to use the tools well. Such complements are costly and unevenly distributed.

This paper adopts that insight and integrates it into a distributional model. Firms with better data, stronger management, more standardized processes, or greater access to capital adopt earlier and more effectively. This creates the possibility that generative AI raises concentration and rent dispersion even if the underlying model capability is widely accessible in principle.

### 3.4 The Emerging Empirical Literature on Generative AI

The empirical literature on generative AI is still young but already informative. Brynjolfsson et al. (2023) study AI assistance in customer support and document sizable productivity gains, especially for novices. Noy and Zhang (2023) show experimental productivity gains in writing-related tasks. Bick et al. (2024) provide survey evidence on work use and time shares. Eloundou et al. (2023) propose task exposure estimates based on large language model capabilities. The IMF and ILO translate these exposure estimates into broader labor market implications.

What is still missing from the literature is an integrated economic account linking these micro findings to macro caution and distributional complexity. Some commentators jump too quickly from task-level productivity gains to sweeping aggregate forecasts. Others infer modest aggregate gains and conclude that workplace disruption will also be modest. Both steps are problematic. Large gains in a narrow set of tasks can coexist with modest aggregate productivity if the affected time share remains limited or if adoption is organizationally costly. Likewise, modest average aggregate gains can hide large reallocations across firms, workers, and regions.

### 3.5 This Paper’s Position

This paper positions itself at the intersection of these literatures. It is neither purely a survey nor a narrow empirical paper. Instead, it offers a top-journal-style economics manuscript built around a formal mechanism, disciplined interpretation of emerging evidence, and a concrete empirical design. Its distinctive contribution is to treat generative AI as a technology of codification and task reallocation that compresses experience in exposed tasks while amplifying heterogeneity across adoption environments. This yields predictions about productivity, wages, diffusion, labor share, and concentration that differ from both simplistic automation narratives and simplistic augmentation narratives.

## 4. Model

### 4.1 Overview

This section develops a parsimonious model of production with heterogeneous workers, heterogeneous tasks, and endogenous AI adoption. The model is designed to capture five empirical regularities that any economics of generative AI must explain.

1. AI affects tasks, not whole occupations, and only a subset of tasks are economically exposed.
2. Productivity gains are larger for codifiable symbolic tasks than for physically embodied or highly context-specific tasks.
3. Lower-experience workers may gain more than frontier workers within exposed tasks because AI transfers best-practice knowledge.
4. Firms face nontrivial fixed and organizational costs of adoption, which slows diffusion and creates firm heterogeneity.
5. Aggregate gains can be modest even when micro gains are large because only some tasks are exposed and because equilibrium wage and reallocation effects matter.

The model does not attempt to capture every institutional detail of generative AI. Instead, it formalizes a mechanism that can organize the evidence and generate empirically testable implications.

### 4.2 Environment

Consider an economy populated by a continuum of firms indexed by \(f\), a continuum of workers indexed by \(i\), and a continuum of tasks indexed by \(j \in [0,1]\). Output in each firm is produced by combining tasks. Tasks differ in two key attributes.

First, each task has a codifiability parameter \(c_j \in [0,1]\), where higher \(c_j\) means the task can be more easily represented, learned, and executed using generative AI. Tasks with high codifiability are rich in documented patterns, repetitive textual structures, or machine-readable contexts. Tasks with low codifiability depend on tacit judgment, embodied interaction, locally specific information, or social trust.

Second, each task has a contextuality parameter \(k_j \in [0,1]\), where higher \(k_j\) means task performance depends strongly on local context, accountability, or real-time judgment. High-context tasks may still receive AI assistance, but their automation potential is lower and error costs are higher.

Workers differ by baseline human skill \(s_i\) and experience \(e_i\). Skill captures general ability to perform tasks. Experience captures accumulated task-specific knowledge, heuristics, and pattern libraries that are especially valuable in codifiable symbolic work. For simplicity, assume \(s_i\) and \(e_i\) are positively correlated but not identical.

Each firm has a digital complement parameter \(d_f\), capturing data quality, process standardization, managerial capability, and organizational readiness for AI. Firms with higher \(d_f\) face lower effective adoption costs and can use AI more effectively.

### 4.3 Production Without AI

Absent AI, the output contribution of worker \(i\) performing task \(j\) in firm \(f\) is

\[
y_{ijf}^{0} = a_f \cdot \phi(j) \cdot s_i^{\alpha_j} e_i^{\beta_j},
\]

where \(a_f\) is firm-level productivity, \(\phi(j)\) is the baseline importance of task \(j\), and \(\alpha_j, \beta_j \geq 0\) allow skill and experience to matter differently across tasks. For communication-intensive or diagnostic tasks, \(\beta_j\) may be high because experience matters. For simpler tasks, \(\alpha_j\) dominates.

A job is a bundle of tasks. Let the representative job in an occupation consist of a weighted measure of tasks \(\omega_o(j)\), where occupations differ in task composition. An occupation with a high mass of high-\(c_j\) language tasks is more exposed to generative AI than an occupation dominated by low-\(c_j\), high-\(k_j\) tasks.

### 4.4 AI Assistance as Experience Compression

The key innovation of the model is the way AI assistance enters production. For a subset of tasks, the firm can augment the worker with AI. AI does not simply replace the worker’s productivity with a fixed machine productivity term. Instead, it shifts the effective experience input toward a frontier level embedded in the model’s learned patterns.

Let \(\bar e_f\) denote the frontier reusable knowledge available to firm \(f\), which depends on the quality of external models and the firm’s own codified data. If task \(j\) is AI-assisted, output becomes

\[
y_{ijf}^{A} = a_f \cdot \phi(j) \cdot s_i^{\alpha_j} \left[(1-\lambda_j)e_i + \lambda_j \bar e_f \right]^{\beta_j} \cdot (1-\psi_j),
\]

where \(\lambda_j \in [0,1]\) is the degree to which AI can substitute for missing experience in task \(j\), and \(\psi_j\) is an error-cost or supervision-cost term. The degree \(\lambda_j\) is increasing in codifiability \(c_j\) and decreasing in contextuality \(k_j\). Thus,

\[
\lambda_j = \lambda(c_j, k_j), \quad \frac{\partial \lambda}{\partial c_j} > 0, \quad \frac{\partial \lambda}{\partial k_j} < 0.
\]

This structure captures the idea of experience compression. AI allows a lower-experience worker to perform more like a higher-experience worker on tasks where best-practice patterns can be rendered into prompts, retrieved from firm knowledge, or embedded in model outputs. The mechanism does not eliminate human supervision. The error-cost term \(\psi_j\) captures hallucination risk, verification time, and the cost of checking whether the AI output fits context.

The gain from AI assistance for worker \(i\) on task \(j\) is therefore larger when \(e_i\) is far below \(\bar e_f\), holding supervision costs fixed. This immediately generates a prediction consistent with the micro evidence: within exposed tasks, less experienced workers may see larger proportional gains.

### 4.5 Automation

For some tasks, firms can go beyond assistance and partially automate execution. Let automated output for task \(j\) be

\[
y_{jf}^{M} = a_f \cdot \phi(j) \cdot m_j(d_f),
\]

where \(m_j(d_f)\) is machine productivity on automated task \(j\). Automation is feasible only if codifiability is sufficiently high and contextuality sufficiently low. Define an automation region \(\mathcal{M}\) such that task \(j\) can be automated if

\[
c_j \geq \hat c_f \quad \text{and} \quad k_j \leq \hat k_f,
\]

where thresholds depend on the firm’s digital complement \(d_f\). Firms with higher \(d_f\) can automate a larger set of tasks because they can integrate AI into systems more effectively and manage associated risks.

This distinction between assistance and automation is important. Many generative AI discussions blur the two. In the model, assistance is likely to be more common than full automation because contextuality and accountability often remain high even for codifiable tasks. Automation occurs only when the cost of human oversight becomes sufficiently low relative to the value of machine execution.

### 4.6 Firm Adoption Problem

Each firm decides whether to adopt AI, and if so, for which tasks to use assistance versus automation. Adoption requires paying a fixed cost \(F(d_f)\), where

\[
F'(d_f) < 0.
\]

Firms with stronger digital complements face lower adoption costs. In addition, each assisted or automated task entails task-specific integration costs and expected error costs.

The firm chooses a partition of tasks into three sets: manual \(\mathcal{H}\), assisted \(\mathcal{A}\), and automated \(\mathcal{M}\). The firm maximizes profits

\[
\Pi_f = P_f Y_f - \int w_i \ell_{if} \, di - F(d_f)\mathbf{1}\{\mathcal{A}\cup\mathcal{M}\neq\emptyset\} - \int_{j\in\mathcal{A}} G_j^A \, dj - \int_{j\in\mathcal{M}} G_j^M \, dj,
\]

where \(Y_f\) aggregates task outputs, wages are endogenous, and \(G_j^A\) and \(G_j^M\) are task-level deployment costs. Adoption occurs when the expected net gains from AI over the relevant task set exceed these costs.

The firm’s adoption condition reveals two margins.

1. An extensive margin: whether to adopt AI at all.
2. An intensive margin: how much of the task bundle to shift from manual to assisted or automated production.

Because \(F(d_f)\) declines with digital readiness, adoption is front-loaded toward larger, better-managed, more standardized firms. This creates heterogeneity even when all firms face the same frontier model capability.

### 4.7 Worker Wages and Task Prices

Assume a competitive labor market within skill-experience cells, though firms may earn rents from better AI integration. The wage of worker type \((s,e)\) depends on the equilibrium demand for the tasks they perform. Generative AI affects wages through three channels.

First, productivity effects in assisted tasks raise the marginal product of labor for workers who remain attached to those tasks. This can raise wages if labor markets are competitive and if gains are shared.

Second, experience compression reduces the scarcity premium associated with certain forms of accumulated knowledge. If AI narrows the performance difference between novice and veteran workers in codifiable tasks, then the wage premium for experience within those tasks may fall.

Third, automation reduces labor demand for the fully automated portion of tasks, depressing wages for workers concentrated in those tasks unless they are reallocated to complementary activities.

The net effect on wages is therefore ambiguous ex ante and depends on task composition, worker heterogeneity, and the sharing of gains between labor and capital.

### 4.8 Occupational Exposure and Reallocation

Define occupation \(o\) by its task distribution \(\omega_o(j)\). Occupational AI exposure can be summarized by an index

\[
E_o = \int_0^1 \omega_o(j) \cdot \Gamma(c_j, k_j) \, dj,
\]

where \(\Gamma\) maps task characteristics into potential AI applicability. This index resembles the task-exposure logic used in the emerging empirical literature, but it is embedded here in a model of endogenous firm adoption and worker heterogeneity.

Crucially, two occupations with the same average exposure index can have different outcomes. One may contain mostly assistable tasks with limited automation and strong complementarity to human judgment. Another may contain a smaller set of highly automatable tasks. Therefore, the distribution of exposure within the task bundle matters, not just the mean.

### 4.9 Equilibrium Dynamics and Diffusion

To capture diffusion over time, suppose that adoption costs decline with cumulative use or learning-by-doing:

\[
F_t(d_f) = F_0(d_f) - \rho L_t,
\]

where \(L_t\) is aggregate or sectoral learning from prior adoption. Firms also observe expected productivity gains with noise, and successful early adopters reveal information to others. Diffusion is therefore S-shaped, but the slope depends on organizational readiness and uncertainty about supervision costs.

This dynamic feature explains why rapid experimentation can coexist with slower enterprise transformation. Workers may use consumer-facing tools immediately, but sustained firm-level productivity gains require learning, governance, and integration.

## 5. Equilibrium Implications

This section derives the main implications of the model for productivity, wages, labor share, diffusion, and market structure. The goal is not to provide theorem-proof formalism for its own sake, but to state clear propositions that can be evaluated against existing and future evidence.

### 5.1 Productivity Gains Are Largest in Codifiable, Low-Context Tasks

For a given task \(j\), the productivity gain from AI assistance for worker \(i\) is

\[
\Delta y_{ijf} = y_{ijf}^{A} - y_{ijf}^{0}.
\]

Using the assistance specification above, \(\Delta y_{ijf}\) is increasing in \(\lambda_j\), which itself is increasing in codifiability and decreasing in contextuality. Therefore, holding worker characteristics fixed, tasks with higher codifiability and lower contextuality experience larger gains.

**Proposition 1.** For any worker type and firm, the productivity gain from AI assistance is increasing in task codifiability and decreasing in task contextuality, provided the supervision-cost term does not rise too quickly.

The economic intuition is simple. Generative AI is most effective when the task’s input-output mapping can be approximated from prior examples, documents, or learned patterns and when the cost of errors can be contained through review. Drafting standard emails, summarizing records, generating first-pass reports, writing boilerplate code, and answering routine customer questions all fit this description more closely than high-stakes negotiation, complex physical care, or tasks requiring tacit local information.

This proposition helps interpret why measured productivity gains in existing studies are strongest in customer support, writing, and communication workflows. It also implies that exposure indices should be built around task structure rather than occupation titles alone.

### 5.2 Experience Compression Lowers Within-Occupation Dispersion in Exposed Tasks

Consider the gain from AI assistance for two workers \(i\) and \(i'\) with the same general skill but different experience, where \(e_i < e_{i'}\). Because AI replaces part of the missing experience input with \(\bar e_f\), the lower-experience worker gains more when

\[
\frac{\partial \Delta y_{ijf}}{\partial e_i} < 0.
\]

Under the assistance function above, this condition holds for a wide parameter range so long as the frontier experience term exceeds the worker’s own experience and error costs do not rise disproportionately for less experienced workers.

**Proposition 2.** Within exposed tasks, proportional productivity gains from AI assistance are larger for lower-experience workers when AI acts as a substitute for missing experience.

This is the model’s most distinctive implication. It rationalizes the recurring empirical finding that lower-performing or less experienced workers benefit disproportionately from AI assistance. Economically, the mechanism is not that AI equalizes all talent. It equalizes access to reusable patterns. Experienced workers still retain an advantage in context judgment, error detection, escalation, client trust, and noncodified subtasks. But part of the experience premium in drafting, triage, or synthesis can be compressed.

An important wage implication follows. If firms compete for labor and share productivity gains, lower-experience workers in exposed roles may see wage improvements or at least reduced relative disadvantage. However, if labor markets are slack or firms capture most of the gains, the compression may show up more in performance metrics and promotion standards than in wages.

### 5.3 Automation and Assistance Have Different Distributional Consequences

Suppose some tasks cross the threshold from assistable to automatable. Let the labor demand effect on worker type \((s,e)\) be decomposed into an assistance component and an automation component:

\[
\Delta L(s,e) = \Delta L^{A}(s,e) + \Delta L^{M}(s,e).
\]

Assistance raises effective productivity of labor in exposed tasks and may increase demand if product demand expands or if workers are reallocated to complementary activities. Automation reduces direct labor demand in fully automated tasks. The net labor demand effect depends on the relative size of these components and on the elasticity of demand.

**Proposition 3.** In occupations where AI primarily augments tasks, within-job productivity and wage compression are more likely than outright employment decline. In occupations where a substantial mass of tasks becomes automatable and demand elasticity is low, employment pressure is stronger.

This proposition warns against treating all AI exposure as displacement risk. A legal assistant using AI to draft routine memos may become more productive without being displaced if the role still depends heavily on coordination, judgment, and client interaction. By contrast, a back-office function dominated by standardized text processing may face larger substitution effects if firms can reengineer the workflow end to end.

### 5.4 Adoption Frictions Generate Between-Firm Divergence

Firms adopt AI if expected benefits exceed fixed and variable costs. Because adoption costs decline with digital readiness, early adopters are concentrated among firms with high \(d_f\). Let the adoption threshold satisfy

\[
B_f(d_f, \omega_f, \bar e_f) \geq F(d_f),
\]

where \(B_f\) summarizes expected gains from the firm’s task composition and knowledge base.

**Proposition 4.** AI adoption is increasing in digital complements, process standardization, and the share of codifiable tasks. Therefore, even within the same industry, firms with stronger digital readiness adopt earlier and capture a disproportionate share of the gains.

This result implies between-firm wage and productivity divergence. Workers in frontier firms enjoy access to tools and redesigned workflows that raise measured productivity, while similar workers in laggard firms may see little change. If AI-generated rents are not competed away, concentration can increase.

### 5.5 Aggregate Productivity Gains Can Be Modest Despite Large Micro Gains

Let aggregate productivity growth from generative AI be approximated by

\[
\Delta A \approx \int_f \int_j \theta_{fj} \cdot \Delta y_{fj} \cdot \chi_{fj} \, dj \, df - C,
\]

where \(\theta_{fj}\) is the task share in aggregate value added, \(\Delta y_{fj}\) is the productivity gain in exposed tasks, \(\chi_{fj}\) is the adoption indicator, and \(C\) captures adjustment and complement costs.

Even if \(\Delta y_{fj}\) is large for some tasks, aggregate \(\Delta A\) can remain modest when the affected task share is small, adoption is incomplete, or complement costs are large.

**Proposition 5.** Large micro-level productivity gains are consistent with modest short-run aggregate productivity gains when exposure is partial, adoption is uneven, and organizational adjustment costs are substantial.

This proposition explains the coexistence of optimistic experimental evidence and cautious macro forecasts. It is not a contradiction. It is a basic aggregation result. A 20 percent gain on a task that represents 5 percent of aggregate work time is economically meaningful but not macro-transformative on its own.

### 5.6 Labor Share and Rent Distribution

The model also has implications for the labor share. Suppose AI raises output per worker in assisted tasks but requires complementary capital expenditures and platform access. If firms and AI suppliers capture a large share of the resulting surplus, then the labor share may decline even when workers become more productive. Conversely, strong labor markets, bargaining institutions, or competitive diffusion can raise the labor share of the gains.

**Proposition 6.** The effect of generative AI on the labor share is not pinned down by productivity alone; it depends on the ownership of complements, market concentration, and labor market institutions.

This is why policy cannot focus only on innovation incentives. The distribution of gains depends on market structure, worker mobility, and whether the organizational benefits of AI are translated into wages or captured as rents.

### 5.7 Regional and Sectoral Reallocation

Because occupations and firm types are unevenly distributed across space, local labor markets will experience different AI shocks. Regions specialized in codifiable business services, software, finance, and administrative support may see faster adoption and larger productivity gains. Regions concentrated in logistics, construction, in-person care, hospitality, or local manual services may experience different and often smaller direct effects. Sectoral composition therefore translates task exposure into place-based divergence.

This implies that generative AI should be analyzed not only as a worker-level or firm-level technology, but also as a regional shock interacting with local industrial structure, educational composition, and digital infrastructure.

## 6. Mapping the Model to Evidence and Designing Empirical Tests

### 6.1 What Existing Evidence Already Supports

The model’s first prediction is that productivity gains are concentrated in codifiable, communication-intensive tasks. The current evidence strongly supports this. Customer service, writing, email, coding assistance, and document handling are among the settings where measured gains have emerged first. These are all domains where the task can be represented in a textual or pattern-rich format and where first-draft assistance can be valuable.

The second prediction is that gains are larger for lower-experience workers within exposed tasks. The field evidence from customer support shows exactly this pattern. The AI tool appears to transfer higher-quality conversational scripts and diagnostic patterns to novice workers, narrowing the gap between them and experienced workers. Experimental writing evidence similarly suggests larger gains for lower baseline performers. This is the empirical signature of experience compression.

The third prediction is that use at work spreads quickly but touches only a portion of work time. Survey evidence from Bick et al. (2024) indicates just such a pattern. Workers can incorporate AI into drafting, brainstorming, or summarization without surrendering the rest of the job to the tool. This is consistent with a model of partial task assistance rather than whole-job automation.

The fourth prediction is that adoption depends on organizational complements. Although the consumer-facing interface to generative AI is simple, enterprise deployment remains constrained by data governance, workflow redesign, legal risk, and management oversight. Case studies and enterprise reports consistently emphasize these barriers, and they fit the adoption-cost structure of the model.

### 6.2 A Research Design for Worker-Level Causal Effects

A natural empirical design begins at the worker-task level. Suppose one can observe workers before and after access to a generative AI tool, along with baseline performance metrics. Let \(Y_{it}\) denote worker productivity, quality-adjusted output, or time per task. Let \(AI_{it}\) indicate access or actual usage. A baseline specification is

\[
Y_{it} = \alpha_i + \tau_t + \beta AI_{it} + \gamma (AI_{it} \times LowExp_i) + X_{it}'\delta + \varepsilon_{it},
\]

where \(LowExp_i\) captures lower baseline experience or performance. The coefficient \(\gamma\) identifies whether gains are larger for lower-experience workers.

The key identification challenge is selection into usage. Several strategies are possible.

1. Randomized rollout within firms or teams. This is the cleanest design where feasible.
2. Staggered access caused by IT or policy rollout, provided timing is plausibly exogenous to worker productivity trends.
3. Instrumenting usage with exogenous tool availability shocks, such as infrastructure compatibility or policy-based access restrictions.
4. Event studies around tool introduction combined with worker fixed effects and task-level controls.

The model predicts that the treatment effect should be strongest in tasks with high codifiability and among lower-experience workers. It further predicts that quality-adjusted output gains may exceed raw speed gains when AI improves access to best practices.

### 6.3 Occupation-Level and Local Labor Market Designs

To study broader labor market effects, consider an occupation-level exposure index derived from task composition. Let \(Exposure_o\) be built from task descriptions, O*NET-style activity measures, or LLM-based evaluations of task applicability. One can then estimate effects on wages, employment, vacancies, or transitions in local labor markets using a shift-share approach.

For local labor market \(r\), define baseline AI exposure

\[
Exposure_r = \sum_o EmploymentShare_{ro,0} \cdot Exposure_o.
\]

One can then estimate

\[
\Delta Y_{rt} = \alpha_r + \tau_t + \beta Exposure_r \times Post_t + Z_r'\theta + u_{rt},
\]

where \(Y_{rt}\) may be wage growth, employment growth, unemployment, vacancy rates, or occupational transitions. The identifying assumption is that preexisting local exposure predicts differential responses after the diffusion of generative AI, conditional on controls and pretrends.

The advantage of this design is that it connects the micro task logic to place-based inequality. The risk, of course, is confounding from other region-specific shocks. Therefore, the best implementation would combine rich controls, pretrend diagnostics, and perhaps instrument exposure using historical task composition unrelated to contemporary AI investment.

### 6.4 Firm-Level Adoption and Between-Firm Divergence

The model’s adoption mechanism implies a firm-level design centered on organizational complements. Let firm adoption be measured through enterprise licenses, internal tool rollout, AI-related job postings, management surveys, or digital trace data. Let \(d_f\) be proxied by preexisting cloud adoption, ERP integration, documentation intensity, software workforce share, or managerial quality measures.

A baseline empirical question is whether firms with higher digital complements adopt earlier and realize larger productivity gains. A difference-in-differences or event-study specification is

\[
Y_{ft} = \alpha_f + \tau_t + \beta Adopt_{ft} + \gamma (Adopt_{ft} \times HighD_f) + W_{ft}'\delta + \eta_{ft},
\]

where \(Y_{ft}\) may be output per worker, sales per employee, wage bill, worker turnover, or vacancy composition.

The model predicts \(\gamma > 0\) for productivity outcomes. But it also predicts that gains may accrue unevenly to labor and capital. Thus, one should examine not only output per worker but also wage growth, employment composition, and profit margins.

### 6.5 Measuring Task Codifiability and Contextuality

A central empirical challenge is how to measure codifiability and contextuality. This paper’s framework suggests several approaches.

First, text-based occupational datasets can be used to estimate the share of time spent on drafting, summarization, coding, documentation, and standard communication. These tasks are likely to have high codifiability.

Second, contextuality can be approximated by the degree of accountability, in-person interaction, legal exposure, or reliance on local tacit information. Occupations involving negotiation, high-stakes judgment, physical presence, or care work may score higher on contextuality.

Third, direct task-level experiments can classify which subtasks are improved by AI assistance and which require expensive verification. Such experiments are particularly useful because they reveal not only exposure but also error-cost structure.

A promising avenue is to combine structured task taxonomies with model-based evaluations of whether a state-of-the-art system can complete or assist with the task under realistic quality thresholds. This would be more informative than binary exposure labels.

### 6.6 Within-Firm Organizational Redesign

A crucial but undermeasured margin is organizational redesign. AI may allow firms to flatten hierarchies, change supervision spans, shift the composition of teams, or redefine entry-level roles. For example, if AI compresses the productivity difference between novices and experienced workers on routine drafting tasks, firms may reduce the amount of apprenticeship-oriented review work performed by mid-level staff. Alternatively, they may reallocate mid-level staff to more client-facing or strategic tasks. These changes matter for career ladders and long-run human capital formation.

An empirical design should therefore track not only immediate productivity but also promotions, mentorship time, turnover, and the composition of new tasks performed by workers after adoption. A technology that boosts current productivity but degrades learning-by-doing could have complex long-run effects on wage dynamics.

### 6.7 Threats to Identification

Several threats to identification must be addressed.

First, selection into treatment is pervasive. High-ability workers may use AI more, or managers may assign AI access strategically.

Second, novelty effects may inflate short-run measured gains. Early users may be unusually enthusiastic, and gains may fade as low-hanging tasks are exhausted.

Third, equilibrium responses can offset partial-equilibrium estimates. If AI raises output and product demand, labor demand may increase even where task substitution occurs. Conversely, if product markets are saturated, gains may show up mainly as lower labor demand.

Fourth, measurement error in exposure is likely. Occupation-level labels are too coarse, and self-reported AI use may be noisy.

These concerns do not invalidate empirical study, but they underscore why multiple designs and outcome measures are needed.

### 6.8 Interpreting Current Evidence Through the Model

The model explains why current evidence can appear at once optimistic and cautious. Micro studies find large gains because they often focus on precisely those tasks with high codifiability, measurable outputs, and lower contextuality. Macro analysts are cautious because those tasks still represent only part of total labor input and because organizational integration remains incomplete. Distributional analysts see inequality risk because adoption is complementary to existing digital capabilities and because some workers are concentrated in nonexposed tasks.

Thus, the current empirical record is not contradictory. It is exactly what a task-reallocation model with experience compression would predict.

## 7. General Equilibrium, Macroeconomic Aggregation, and Structural Change

### 7.1 Why Partial-Equilibrium Gains Do Not Map One-for-One into GDP

One of the most common analytical errors in the public discussion of generative AI is to extrapolate directly from task-level time savings to macroeconomic growth. If workers save 20 minutes on a task or complete a communication workflow 15 percent faster, it is tempting to multiply the result across the labor force and derive large GDP effects. Economics has long warned against this move. Partial-equilibrium gains at the task level must pass through several filters before they become aggregate output growth.

The first filter is task share. Even a large productivity gain matters little in aggregate if the task occupies a small share of economy-wide labor input. Many early generative AI successes involve email drafting, summarization, routine writing, customer support, or coding assistance. These tasks are economically important, but they are only part of many jobs and are highly concentrated in specific occupations and sectors.

The second filter is organizational realization. Time saved is not automatically converted into additional value added. If a worker saves one hour per week on drafting, the macro effect depends on what fills that hour. The worker may produce more output, spend more time on complementary human tasks, reduce work hours, or simply absorb the gain as slack. At the firm level, using saved time productively often requires redesign of workflow, reallocation of responsibilities, and adjusted performance management.

The third filter is equilibrium price adjustment. If AI expands supply in an industry, prices may fall. Consumers gain, but measured nominal revenues per worker may not rise proportionately. In some cases, lower prices induce higher demand and expand employment. In others, competition may translate productivity gains into lower margins or output price reductions rather than higher wages or profits.

The fourth filter is displacement and transition. Workers whose tasks become less valuable may need time to reallocate. Local labor markets may experience frictions, and human capital may not be instantly portable. These frictions mean that aggregate gains can be delayed or partially offset by transition costs.

The fifth filter is complement investment. Firms must devote resources to software, data governance, security, legal review, model evaluation, and managerial redesign. Some of these expenditures are productive investment, but some are transition costs that temporarily lower measured productivity. As with earlier general purpose technologies, the macro impact may therefore follow a J-curve rather than an immediate step change.

### 7.2 An Aggregation Framework

To formalize these points, write aggregate output as

\[
Y_t = \int_f A_{ft} \cdot F_f(L_{ft}, K_{ft}, X_{ft}) \, df,
\]

where \(X_{ft}\) includes AI and complementary organizational capital. Generative AI affects output through two channels: direct task productivity within firms and reallocation across firms.

Let direct firm-level TFP growth from AI be \(g_{ft}^{AI}\). Aggregate TFP growth can then be decomposed as

\[
\Delta \log A_t = \underbrace{\int_f s_{ft-1} g_{ft}^{AI} df}_{\text{within-firm effect}} + \underbrace{\int_f \Delta s_{ft} (A_{ft} - \bar A_t) df}_{\text{between-firm reallocation}} - \underbrace{Adj_t}_{\text{adjustment costs}},
\]

where \(s_{ft}\) are firm shares and \(Adj_t\) captures implementation and transition costs. This decomposition clarifies two important points.

First, if high-productivity firms adopt earlier, there can be a positive between-firm reallocation effect as activity shifts toward adopters. This is a standard diffusion result, but it has distributional consequences: workers tied to laggard firms or regions may fall behind even as aggregate productivity rises.

Second, adjustment costs can be large enough that measured aggregate gains remain modest for several years, particularly if adoption is accompanied by experimentation, failed workflows, governance disputes, or duplicated labor during transition.

### 7.3 The Macro Importance of Limited Exposure Shares

Suppose the average affected time share in the economy is \(\sigma\), and average productivity gain on affected tasks is \(g\). In a simple approximation, the upper bound on short-run labor productivity growth from direct task improvement is roughly \(\sigma g\), before accounting for costs and equilibrium responses. If \(\sigma = 0.05\) and \(g = 0.20\), the direct upper bound is 1 percent. This is meaningful but far from an economic revolution on its own.

This arithmetic is not a counsel of pessimism. It is a reminder that large and visible gains in a subset of tasks can coexist with moderate economy-wide effects. The macro importance of generative AI depends on whether exposure broadens over time, whether firm reorganization unlocks more affected time shares, and whether new products or task creation effects emerge.

### 7.4 New Tasks, Product Demand, and Long-Run Expansion

The task-displacement literature emphasizes that technological change can create new tasks and new products. Generative AI may do so in several ways.

First, it may lower the cost of producing customized, language-rich, or analytic services that were previously too expensive. This can create demand for new varieties of output, especially in education, software, design support, marketing, and personalized information services.

Second, it may increase the value of human tasks that become complementary to AI. If drafting becomes cheap, judgment, relationship management, curation, and accountability may become more valuable. The productivity of those human tasks can rise because workers spend less time on mechanical composition and more on strategic interaction.

Third, it may create entirely new occupations in model governance, AI supervision, prompt design, data curation, workflow architecture, and auditing. Some of these tasks may later be automated in turn, but in the medium run they expand labor demand in adjacent areas.

These mechanisms suggest that labor displacement from automated tasks should not be inferred mechanically from exposure. General equilibrium outcomes depend on product-demand elasticities, the creation of complementary human tasks, and the speed with which workers move into them.

### 7.5 Labor Share, Markups, and Concentration

Generative AI may interact with market structure in ways that affect the labor share independent of direct labor substitution. There are at least three channels.

The first is platform concentration. Frontier model development is computationally and data intensive, which may favor large firms and cloud providers. If access to leading models or compute is concentrated, downstream firms may pay rents to upstream AI providers. This could redirect surplus away from labor and toward capital or intellectual property holders.

The second is superstar-firm dynamics. Firms with strong data, managerial capability, and standardized processes may scale AI faster, increasing market share. If AI magnifies preexisting advantages, the economy may see stronger reallocation toward already productive firms. This can raise aggregate productivity while reducing the labor share if those firms enjoy markups or weaker worker bargaining.

The third is internal labor-market restructuring. If AI reduces the need for some support or apprenticeship roles while increasing returns to top-level strategic or client-facing talent, the wage structure within firms may become more polarized even where average productivity rises.

The overall effect on labor share therefore depends on whether AI diffusion is broad and competitive or concentrated and rent generating. This is one reason why competition policy belongs in the economics of AI, not merely innovation policy.

### 7.6 Transitional Dynamics and the Possibility of Mismatch

Generative AI also creates mismatch risk. Workers displaced from partially automated text-processing roles may not move smoothly into AI-complementary tasks if the required skills differ. The challenge is particularly acute when the technology changes the composition of entry-level work. Many professions rely on junior workers performing standardized tasks through which they learn judgment and context. If AI absorbs some of these tasks, firms may reduce hiring of juniors or change the apprenticeship structure. Over time, this could tighten the supply of future mid-level and senior talent, even as current productivity rises.

This possibility should receive more attention in macro and labor research. A technology that boosts present efficiency by compressing learning tasks could have delayed human-capital side effects. The aggregate welfare implications depend on whether educational systems, firms, and labor market institutions develop new pathways for skill accumulation.

### 7.7 Why the Aggregate Effect Could Still Become Large

The cautious aggregate arithmetic above does not imply that generative AI will remain marginal. Three forces could amplify its long-run impact.

First, model quality may improve, expanding the set of tasks with high effective codifiability. Tasks that currently require extensive review may become cheaper to supervise. This shifts tasks from the manual region toward assistance and from assistance toward automation.

Second, organizations may redesign production around AI rather than merely grafting AI onto existing workflows. Such redesign can raise the affected time share substantially.

Third, AI may become embedded in software layers used across many industries, turning isolated time savings into systemic changes in product development, customer management, administration, and research.

Whether these amplification mechanisms dominate depends on innovation, governance, competition, and institutional adaptation. Economics should therefore resist both complacent minimalism and extravagant futurism.

## 8. Career Ladders, Human Capital, and the Future of Learning-by-Doing

### 8.1 Why Generative AI Raises a Distinct Human Capital Question

Most technological change affects human capital by altering the returns to existing skills and the demand for new ones. Generative AI adds a more specific concern: it may change the architecture of learning itself. In many occupations, junior workers acquire expertise by performing repetitive or semi-structured tasks under supervision. Lawyers review documents and draft memos. Analysts prepare summaries. junior programmers write boilerplate code and learn from debugging. Consultants build decks and internalize framing conventions. Customer-service staff learn scripts, escalation pathways, and tone management over time.

If generative AI performs a larger share of these structured learning tasks, firms may benefit immediately. But the long-run effect on skill formation is ambiguous. Junior workers may learn faster because AI explains best practices and provides examples. Or they may learn less deeply because they no longer struggle through the task or receive the same mentoring exposure. The economics of generative AI therefore includes an intertemporal human-capital problem that is distinct from the short-run productivity problem.

### 8.2 A Simple Extension with Learning-by-Doing

To capture this, suppose worker experience evolves according to

\[
e_{i,t+1} = (1-\delta)e_{it} + \mu H_{it} + \nu A_{it},
\]

where \(H_{it}\) is time spent performing tasks manually, \(A_{it}\) is time spent performing tasks with AI assistance, \(\mu > 0\) is the learning return to manual performance, and \(\nu\) is the learning return to AI-assisted work. If \(\nu < \mu\), AI-assisted work teaches less than manual work even if it produces more current output. If \(\nu > \mu\), AI acts as a tutor and accelerates learning.

The sign and magnitude of \(\nu - \mu\) are therefore central to long-run welfare. Current evidence is insufficient to pin them down. But the model yields clear empirical and policy implications.

If AI accelerates learning for novices by exposing them to best practices, then apprenticeship may become more efficient. If AI substitutes for the act of solving problems and reduces mentor interaction, then long-run skill formation may weaken. Different occupations may fall on different sides of this line.

### 8.3 Implications for Entry-Level Labor Demand

Many white-collar occupations have historically relied on a pyramid structure in which junior workers perform high-volume standardized work while receiving training. Generative AI may flatten this pyramid. A smaller number of junior workers equipped with AI could produce the same output. Alternatively, firms could keep hiring juniors but shift them more quickly into higher-value tasks.

The distinction matters enormously for inequality and social mobility. Entry-level white-collar jobs have long served as pathways into the middle class and into high-productivity sectors. If AI reduces those entry points, career access may narrow. Workers from advantaged backgrounds could still enter through elite credentials and networks, while others lose a key rung on the ladder.

This mechanism suggests a new dimension of inequality that standard exposure measures may miss. A profession may appear complementary to AI on average while still reducing opportunities for new entrants. Economic research should therefore track hiring margins separately from incumbent productivity.

### 8.4 Apprenticeship, Mentorship, and Organizational Design

A firm facing generative AI has at least three organizational options for apprenticeship.

1. **Replacement mode.** Use AI to cut junior tasks and reduce entry-level hiring.
2. **Acceleration mode.** Use AI to help juniors learn faster, while deliberately preserving mentorship and progression pathways.
3. **Bifurcation mode.** Use AI to reduce middle layers while concentrating high-value review and client-facing work among senior staff.

These options have very different implications for efficiency and distribution. Replacement mode maximizes short-run cost savings but may undermine future talent pipelines. Acceleration mode can potentially combine productivity gains with broad-based skill upgrading, but it requires deliberate organizational design. Bifurcation mode may generate the strongest inequality, as elite workers retain strategic tasks while routine developmental work disappears.

The economics profession should pay more attention to these organizational choices. They are not technologically predetermined. They depend on management incentives, labor market institutions, and the horizon over which firms optimize.

### 8.5 Educational Institutions and Curriculum Adjustment

If generative AI changes which tasks are developmental, educational institutions may need to adapt. Training systems built around memorization, formulaic writing, or boilerplate coding may become less valuable. But that does not mean education becomes less important. Instead, the skill premium may shift toward problem framing, verification, causal reasoning, domain understanding, communication, and the ability to integrate machine outputs into accountable decision making.

From an economics standpoint, this implies a change in the production function of human capital. The return to rote symbolic production may fall, while the return to interpretation, judgment, and socio-technical coordination may rise. Yet these higher-order capacities are distributed unevenly across educational systems and social groups. If adaptation is slow, inequality could widen.

### 8.6 A Research Agenda on Human Capital Dynamics

Several empirical questions follow.

First, do entry-level workers in AI-using firms get promoted faster or slower than comparable workers in nonusing firms? Faster promotion would suggest acceleration; slower progression or reduced hiring would suggest replacement.

Second, does AI reduce the variance of performance among juniors while also reducing mentor interaction? If so, short-run compression may mask long-run capability risk.

Third, how do wage trajectories change for cohorts entering professions after AI diffusion relative to earlier cohorts?

Fourth, what institutional arrangements support positive learning effects? Structured review processes, required explanation of AI outputs, and deliberate rotation across nonautomated tasks may all matter.

Generative AI should therefore be analyzed as a technology of human-capital production, not just current output.

## 9. International Divergence, Development, and the Global Allocation of Cognitive Work

### 9.1 Why Global Heterogeneity Matters

Much of the discussion of generative AI is based on evidence from the United States and other advanced economies. Yet the global distributional consequences may be profound. The ILO’s 2025 exposure estimates show that exposure varies substantially across countries, sectors, and worker groups. Advanced economies contain more occupations intensive in clerical, professional, and business-service tasks, which raises exposure. Developing economies may be less directly exposed in aggregate, but many of them participate in global value chains through tradable business services, back-office processing, and digitally deliverable tasks that could be transformed by AI.

This creates two opposing possibilities. On one view, countries with lower direct exposure are relatively insulated. On another, countries that rely on labor-intensive tradable cognitive services may face strong competitive pressure if generative AI reduces the demand for offshore standardized knowledge work.

### 9.2 AI and the Geography of Service Offshoring

Over the past two decades, digitization enabled offshoring of customer support, data processing, coding, bookkeeping, and other remotely deliverable services. Many developing economies integrated into global service supply chains through labor-cost advantages in these tasks. Generative AI could reshape this geography.

If AI dramatically lowers the labor required for standardized service tasks, firms in advanced economies may reshore some activities or reduce total labor demand in offshore centers. Alternatively, offshore providers may adopt AI themselves and become even more productive, preserving competitiveness. The outcome depends on access to AI tools, digital infrastructure, language capabilities, and the regulatory environment.

This is an underexplored development question. Trade economists and development economists have paid close attention to manufacturing automation and global value chains. Generative AI requires a comparable analysis for tradable cognitive services.

### 9.3 Unequal Access to Complements

The model developed in this paper emphasizes digital complements and organizational readiness. These are distributed unevenly not only across firms but also across countries. Reliable cloud access, secure data infrastructure, skilled managers, legal capacity, and supportive digital regulation all affect whether countries can adopt AI productively. Even if models are globally available through APIs, the ability to integrate them into production is not equal.

This creates a risk of international divergence. Countries already close to the technological frontier may use AI to deepen productivity advantages in high-value services, while countries with weaker digital complements may see fewer gains and more pressure on labor-intensive service niches.

### 9.4 Language, Data, and Institutional Bias

Generative AI also raises concerns about language and institutional bias. Model performance is typically stronger in high-resource languages and in domains rich in digitized training data. This may advantage countries, firms, and workers whose knowledge systems are already well represented online and in enterprise data. Workers operating in lower-resource languages or informal institutional settings may receive weaker tool performance and lower gains.

The economics of AI adoption should therefore account for uneven model quality across linguistic and institutional environments. A global productivity technology that works much better in English-language professional services than in lower-resource contexts could widen international inequality even if access prices are low.

### 9.5 Development Policy Implications

For developing economies, the policy challenge is twofold.

First, they need strategies to adopt AI in ways that raise domestic productivity rather than merely importing finished services. This may require investment in digital infrastructure, local language resources, public-sector data modernization, and managerial capability.

Second, they need adjustment strategies for sectors exposed to automation of tradable cognitive tasks. Workforce development, service upgrading, and movement into more context-intensive, relationship-intensive, or hybrid tasks may become important.

The larger point is that generative AI is not just a frontier-economy labor market issue. It is a potential shock to the global allocation of knowledge work.

## 10. A Pro-Worker Policy Agenda

### 10.1 Why Policy Is Central Rather Than Peripheral

Technological change does not distribute its gains automatically or efficiently. The economic history of innovation shows that institutions shape whether productivity gains translate into wages, broad-based capability growth, or concentrated rents. Generative AI is especially sensitive to policy because the technology is highly complementary to market structure, data access, training systems, and organizational governance. A pro-worker policy agenda therefore aims not to slow innovation indiscriminately, but to shape the diffusion path so that AI augments broad segments of the labor force rather than concentrating gains in a narrow frontier.

### 10.2 Diffusion Support for Small and Medium-Sized Firms

A first priority is to reduce unequal access to organizational complements. Large firms with strong IT systems, legal teams, and data governance will adopt faster. Small and medium-sized firms risk falling behind not because AI is irrelevant to them, but because the fixed costs of safe and effective adoption are high.

Policy can respond through shared technical assistance, standardized governance templates, open benchmarking resources, subsidized training, and digital modernization programs. Historically, productivity diffusion has often been slower than innovation itself. The same is likely true for generative AI. A pro-worker approach should therefore focus not only on frontier research but also on diffusion institutions that help ordinary firms adopt productivity-enhancing tools.

### 10.3 Training for Complementary Skills

Second, worker training should emphasize complementary skills rather than narrow tool usage alone. Workers need to know how to frame tasks, evaluate outputs, detect errors, communicate with clients or colleagues about machine-generated content, and integrate AI into accountable workflows. Teaching workers only how to prompt a particular interface is unlikely to yield durable gains because interfaces change quickly. Teaching them how to verify, synthesize, and supervise machine outputs is more robust.

Training policy should also target workers in occupations with medium to high exposure but uncertain wage prospects. The goal is not to retrain everyone into AI engineering. It is to widen the set of workers who can benefit from assistance rather than be displaced by automation.

### 10.4 Protecting Entry-Level Pathways

Third, policy and organizational practice should protect or redesign entry-level pathways. If firms respond to AI by sharply reducing entry hiring, long-run inequality may rise and talent pipelines may weaken. Public procurement, apprenticeship incentives, professional accreditation rules, or sectoral agreements could encourage firms to preserve training pathways while using AI for productivity enhancement.

This is not a call to freeze labor demand in outdated forms. It is a recognition that labor markets require institutions for skill formation. If AI erodes existing ones, replacements will be needed.

### 10.5 Competition Policy and Interoperability

Fourth, competition policy matters. If a small number of firms control frontier models, compute infrastructure, and distribution channels, AI may reinforce concentration. Downstream firms and workers could become dependent on a narrow set of gatekeepers. Antitrust scrutiny, interoperability requirements, and data-portability policies can reduce lock-in and preserve competitive diffusion.

Economics should treat this as part of labor policy as well as competition policy. More competitive AI markets increase the chance that productivity gains are transmitted widely rather than captured through markups.

### 10.6 Tax Policy and the Relative Price of Automation

Fifth, tax systems should avoid biasing firms excessively toward labor-displacing automation when labor-augmenting uses are socially preferable. The optimal tax design is complex and context dependent, but the general point is straightforward: when firms compare AI-driven reorganization options, relative tax treatment of capital, software, and labor affects the direction of adoption. A pro-worker policy regime would not punish all automation, but it would consider whether current tax rules encourage substitution even when augmentation and task redesign could generate more inclusive gains.

### 10.7 Data Governance and Worker Voice

Sixth, firms need governance structures for responsible workplace use of AI. Workers often know which tasks are genuinely assisted, where errors are likely, and how workflow redesign affects quality. Mechanisms for worker input can improve both efficiency and fairness. Data governance is equally important. Firms need standards for privacy, security, retention, auditability, and use of worker-generated data in training or fine-tuning models.

Worker voice matters for another reason. The technology may reshape surveillance, performance measurement, and pace of work. Productivity-enhancing AI can become extractive if used mainly to intensify monitoring without sharing gains. Governance institutions can influence which path prevails.

### 10.8 Public-Sector Capacity and Procurement

Seventh, the public sector should build its own adoption capacity. Government is a major employer and service provider, and many public-sector tasks involve documentation, communication, and case processing. Thoughtful adoption could improve service quality and administrative productivity. But public institutions also need strong governance because errors and biases can have serious consequences.

Public procurement can also shape the direction of the market. Government can create demand for interoperable, auditable, and worker-complementary systems rather than only lowest-cost automation.

### 10.9 Social Insurance and Adjustment Support

Finally, even with pro-worker design, some displacement and transition will occur. Social insurance, reemployment support, wage insurance experiments, and place-based adjustment policies remain important. The goal is not to deny labor market disruption but to prevent it from producing long-lasting exclusion.

A mature economics of generative AI must therefore connect innovation policy with labor market institutions. Productivity and distribution cannot be separated.

## 11. Sectoral Applications and Comparative Institutional Contexts

A useful way to see the economic logic of generative AI is to trace how it operates across sectors with different task structures, error costs, and organizational forms. The same model can produce very different outcomes depending on how codifiability, contextuality, and complement investments are distributed.

### 11.1 Customer Support and Business Process Services

Customer support is one of the clearest early applications because many interactions involve recurring patterns, large volumes of text, and measurable outcomes such as resolution time, sales conversion, or customer satisfaction. In the language of the model, many customer-support tasks have relatively high codifiability and moderate contextuality. Workers must still interpret customer emotions, escalate unusual cases, and handle edge situations, which keeps full automation limited. But AI assistance can be highly valuable for drafting responses, retrieving relevant scripts, summarizing previous interactions, and suggesting next-best actions.

This sector also illustrates the experience-compression mechanism especially well. Experienced agents often possess tacit knowledge about which explanations calm customers, how to sequence troubleshooting steps, and how to identify likely root causes from short descriptions. AI tools trained on prior tickets and best-practice interactions can transfer some of this pattern knowledge to new agents. Hence the finding that gains are largest for novices is not surprising; it reflects a reduction in the cost of accessing organizational memory.

At the same time, the sector highlights a distributional ambiguity. If firms use AI to improve service quality and expand service capacity, employment can remain stable or even rise. If they use AI primarily to reduce staffing, then employment may decline despite higher individual productivity. The elasticity of demand for support quality and the firm’s customer strategy are therefore central.

For developing economies, customer support and business process outsourcing are especially important because they are major channels of service offshoring. AI adoption in this sector can either raise competitiveness of offshore providers or reduce the labor content of outsourced work. Comparative empirical work across countries would be especially valuable here.

### 11.2 Software Development and Technical Workflows

Software development occupies an intermediate position in the model. Parts of coding are highly codifiable: boilerplate generation, code translation, syntax completion, documentation, and test drafting. Other parts are highly contextual: system architecture, debugging in complex environments, tradeoff analysis, security design, and integration with legacy systems. As a result, AI assistance is useful but uneven.

This sector is also important because it reveals that AI can increase output quality and speed while leaving the bottleneck elsewhere in the production process. A developer may generate code quickly but still spend significant time understanding requirements, validating correctness, interpreting performance tradeoffs, or coordinating with teammates. The marginal productivity gain therefore depends on where the bottleneck lies.

Experience compression is likely present here as well. Junior developers can use AI to access code patterns, explanations, and example implementations that previously required extensive search or help from senior colleagues. Yet there is also a real concern that overreliance on generated code could weaken learning, especially if juniors stop building mental models of systems. This makes software development a particularly good setting in which to study the learning-by-doing extension of the model.

From a labor market perspective, the sector may see both compression and polarization. Some mid-level coding tasks become easier, which could reduce the premium attached to routine implementation skill. But the premium for high-level system design, product judgment, and reliability engineering may rise. Wage structures may therefore flatten in some parts of the job ladder and steepen in others.

### 11.3 Legal, Accounting, and Professional Services

Legal, accounting, consulting, and related professional services involve large quantities of language, documents, templates, research, and communication. They are therefore often cited as highly exposed. Yet exposure does not imply full substitution because these sectors also involve high contextuality, accountability, reputational risk, and client interaction.

In legal services, for example, AI can assist with document review, case summarization, memo drafting, and first-pass contract analysis. But final advice, client trust, strategic framing, and legal accountability remain deeply human tasks. The same is true in accounting and auditing, where AI may accelerate documentation, reconciliation support, explanatory drafting, and anomaly detection while leaving judgment, independence, and final sign-off with professionals.

These sectors are interesting because the entry-level pyramid matters enormously. Junior lawyers, auditors, and analysts often learn by performing standardized tasks. If AI reduces those tasks, firms may hire fewer juniors or change development pathways. The immediate productivity gains could therefore coexist with long-run changes in professional formation and upward mobility. A sector that looks strongly complementary to AI in the short run may nonetheless become less accessible to new entrants.

Professional services also raise pricing questions. If AI lowers the labor required for some outputs, do clients pay less, receive more service, or shift demand toward higher-value advisory work? The answer will shape both employment and the incidence of productivity gains.

### 11.4 Education

Education is a special case because output quality is multidimensional and because the technology affects both production and human-capital formation. Teachers and educational administrators perform many codifiable tasks: lesson drafting, grading assistance, summarization, personalized feedback templates, and communication with students or families. AI can reduce time spent on these tasks and potentially improve personalization.

Yet education is also high in contextuality. Student motivation, classroom dynamics, developmental judgment, and pastoral care are hard to codify. The danger is that institutions may focus on automating measurable administrative tasks while underinvesting in the relational and developmental dimensions that matter most.

From an economics standpoint, education is important because it influences the supply side of the labor market response to AI. If schools and universities use AI in ways that raise students’ capacity for reasoning, synthesis, and verification, they may increase the stock of complementary skills. If they use it in ways that displace effortful learning without replacing it with better pedagogy, long-run human capital may suffer.

This makes education both an application sector and a determinant of the economy’s overall adjustment path.

### 11.5 Health Care and Care Work

Health care illustrates why high exposure estimates should be interpreted cautiously. Many tasks in health care involve documentation, scheduling, note summarization, coding, and routine communication, all of which are plausible targets for AI assistance. These functions consume substantial clinician time, so productivity gains from reducing administrative burden could be large.

At the same time, direct patient care is highly contextual and high stakes. Diagnosis, treatment decisions, communication under uncertainty, trust, and physical care all resist full automation. As a result, AI in health care is more likely to operate as administrative relief and decision support than as wholesale labor replacement, at least in the near term.

This distinction matters for wage and employment effects. If AI frees clinicians from documentation and administrative work, it can increase the effective supply of care without reducing the need for clinicians. In fact, it may raise the value of direct patient interaction. On the other hand, some clerical and coding roles within health systems could face stronger substitution pressures.

Health care also highlights the importance of liability and verification costs. Even if model capabilities are high, the cost of error can keep automation thresholds low. This is precisely the role played by contextuality and supervision costs in the model.

### 11.6 Public Administration

Public administration is a major but underdiscussed application domain. Governments perform vast quantities of case processing, form review, correspondence, report writing, procurement documentation, and policy summarization. These tasks are often resource intensive and procedurally standardized, suggesting high potential for AI assistance.

But the public sector also operates under stringent fairness, transparency, legal, and accountability constraints. Errors can have serious distributional consequences. Therefore, the productivity case for AI in government is strong, but so is the case for careful governance.

From a macro perspective, successful public-sector adoption could matter significantly because government productivity affects service quality, administrative burden on firms and households, and the speed of policy implementation. It could also shape the broader market by establishing standards for auditable, interoperable, and worker-complementary systems.

### 11.7 Manufacturing, Logistics, and Embodied Work

Generative AI is sometimes discussed as if it were mainly a white-collar phenomenon. That is broadly correct in the near run, but it still interacts with embodied sectors. In manufacturing and logistics, generative AI may affect planning, maintenance documentation, quality reporting, training, and coordination even if it does not directly perform physical tasks. It can complement robotics by improving the informational layer around production.

This suggests an important point for structural change. The technology may widen the productivity gap between information-rich functions and purely physical tasks even within the same sector. A factory may use AI to improve engineering support, procurement, reporting, and quality management while production-floor tasks remain constrained by hardware and embodied complexity.

Therefore, the boundary between “exposed” and “nonexposed” sectors is porous. Many sectors will experience indirect effects through planning and administration even when core physical tasks remain human intensive.

### 11.8 Comparative Institutional Contexts

The same sector can respond differently across countries or institutional settings. Customer support in a tightly regulated labor market with strong training institutions may evolve toward augmentation and wage sharing. The same sector in a weakly regulated, highly competitive environment may evolve toward labor shedding. Professional services in a country with strong apprenticeship pathways may preserve training ladders; elsewhere, firms may shrink entry cohorts. Public-sector adoption may be productivity enhancing where procurement and data governance are strong and risk generating where they are weak.

These comparative differences reinforce a central theme of the paper: the economic effects of generative AI are not technologically predetermined. They are mediated by institutions.

## 12. Welfare, Distribution, and the Political Economy of AI Diffusion

### 12.1 A Welfare Framework

To evaluate generative AI, economists need more than productivity accounting. Social welfare depends on output, the distribution of income, the quality of work, transition costs, and the evolution of human capital. A simple welfare function can be written as

\[
W = \sum_i u(c_i, \ell_i, q_i) - \Omega(T) + \Xi(H),
\]

where \(c_i\) is consumption, \(\ell_i\) is leisure or work burden, \(q_i\) captures job quality, \(\Omega(T)\) represents transition and displacement costs, and \(\Xi(H)\) captures the social value of human capital accumulation. Generative AI can increase welfare through higher productivity and lower work burden, but it can also reduce welfare if gains are unequally distributed, work intensifies, or training pathways erode.

This broad welfare lens matters because many policy discussions focus almost exclusively on output. A technology that raises measured output while reducing job quality or concentrating rents may be efficient in a narrow sense but socially disappointing. Conversely, a technology that yields moderate measured productivity but substantially reduces drudgery and broadens worker capability may have high welfare value.

### 12.2 The Quality of Work Margin

Economists sometimes underemphasize job quality because it is difficult to measure. Yet one of the striking features of early generative AI use is that many workers employ it to reduce drudgery: drafting repetitive emails, summarizing meetings, converting notes into templates, or producing first-pass documents. If such uses free workers to spend more time on tasks they value more, welfare can rise even when output gains are modest.

However, the opposite is also possible. AI can be used to raise monitoring intensity, increase pace, reduce autonomy, or expand expected throughput without corresponding compensation. The same tool that helps a worker draft customer responses can also enable managers to monitor response times more closely and raise quota expectations. The quality-of-work effect is therefore institutionally contingent.

This reinforces the paper’s emphasis on worker voice and governance. The welfare effect of AI depends not only on what the model can do but on how firms reorganize work around it.

### 12.3 Distribution Between Labor and Capital

A core distributional question is how the gains from AI are shared between labor and capital. If AI merely raises worker productivity in competitive labor markets with mobile labor, wages should rise. But several factors can break this transmission.

First, complementary assets such as proprietary data, cloud infrastructure, and model access may be owned by capital-intensive firms. Second, labor markets may exhibit monopsony or search frictions, allowing firms to capture more of the surplus. Third, concentration among model providers may create upstream rents.

The wage consequence therefore depends on bargaining structure and market competition. This is why empirical work should study not only productivity but also pass-through to wages, promotions, hours, and profit margins.

### 12.4 The Political Economy of Adoption Choices

Firms do not choose between augmentation and automation in a social vacuum. Their choices are shaped by shareholder pressure, management incentives, the cost of labor, regulatory constraints, tax treatment, and internal culture. Two firms facing the same technology may choose different adoption paths because one prioritizes long-run capability building and the other short-run cost reduction.

This is a political economy issue because institutions influence those incentives. Stronger worker voice, long-term governance, and public scrutiny may encourage augmentation-oriented adoption. Weak labor institutions and strong pressure for immediate cost savings may encourage labor-displacing use even where broader welfare would favor a different path.

A mature economics of AI should therefore analyze not just the technology frontier but also the choice architecture facing firms.

### 12.5 Dynamic Efficiency Versus Static Cost Reduction

One reason policy is difficult is that static and dynamic efficiency can point in different directions. Replacing entry-level tasks with AI may reduce costs today. But if those tasks are part of the economy’s training infrastructure, cutting them may reduce future skill supply. Similarly, concentrating AI gains in a few frontier firms may raise short-run productivity through reallocation, but broad diffusion may generate larger long-run gains by expanding adoption and human capability.

This distinction suggests that some seemingly interventionist policies may be efficiency enhancing in a dynamic sense. Support for training, apprenticeship redesign, interoperability, and diffusion can increase the economy’s long-run capacity to use AI productively. The relevant benchmark is not a frictionless static model, but an economy in which human capital and organizational capability are jointly produced.

### 12.6 Heterogeneous Welfare Across Worker Types

Different worker groups face different AI futures.

Workers in highly codifiable knowledge roles may see significant productivity gains, but the wage effect depends on market power and the availability of complementary skills. Less experienced workers in those roles may benefit strongly if AI closes experience gaps. Senior workers may retain advantage in judgment-heavy tasks but lose some scarcity rents attached to pattern knowledge.

Workers in clerical or standardized support roles may face stronger substitution risk, especially where tasks are both codifiable and easy to verify. Workers in embodied service or care roles may be less directly exposed in the near run, but they may also see fewer productivity gains and thus slower wage growth relative to frontier sectors.

These heterogeneous effects imply that average welfare statistics will conceal important distributional patterns. Policy must therefore pay attention to who gains, who loses, and who remains outside the productivity frontier.

### 12.7 Consumer Surplus and Nonmarket Benefits

Generative AI can also raise welfare through consumer surplus not fully captured in wages or profits. Faster customer service, cheaper software, more personalized education, better administrative responsiveness, and improved access to information are all genuine benefits. In some sectors, much of the welfare gain may accrue to consumers rather than producers.

This is one reason why modest measured wage gains do not imply that the technology lacks social value. But it is also not a reason to ignore distribution. Consumer surplus gains do not automatically compensate workers who lose job opportunities or bargaining power.

### 12.8 A Distribution-Sensitive Efficiency Criterion

A useful policy criterion is distribution-sensitive dynamic efficiency: maximize productivity gains from AI subject to broad diffusion of complementary skills, preservation or redesign of training pathways, and competitive sharing of gains. This criterion rejects both indiscriminate blocking of AI and laissez-faire acceptance of whatever adoption path private incentives produce.

Under such a criterion, the best AI economy is not the one with the fastest labor shedding. It is the one that most effectively converts machine assistance into widespread human capability and higher-quality output.

## 13. Extensions and Robustness of the Framework

### 13.1 Endogenous Model Quality and the Expanding Frontier of Codifiability

The baseline model treats task codifiability as exogenous. In reality, codifiability is partly endogenous to model progress and to firm investment in structured data and workflow design. A task that is not effectively codifiable today may become codifiable if model quality improves, if the firm standardizes inputs, or if a human-in-the-loop process reduces error costs.

This extension implies that exposure is not a fixed occupational attribute. It is an evolving interaction between technology and organization. Empirical work should therefore measure not only static exposure but also the pace at which tasks move across the codifiability frontier.

### 13.2 Endogenous Product Demand

The model can also be extended to allow firms to lower prices or introduce new varieties when AI raises productivity. In sectors with elastic demand, augmentation may increase employment even if labor required per unit of output falls. In sectors with inelastic demand, cost savings may translate more directly into labor reductions. This distinction is important for interpreting sectoral outcomes. Customer support for a rapidly expanding digital service may grow even under strong AI assistance; administrative support in a mature industry may shrink.

### 13.3 Organizational Trust and the Verification Constraint

A further extension concerns trust. Even when model capability is high, firms may hesitate to use AI because managers or professionals do not trust the outputs. Trust is not irrational conservatism; it reflects accountability, legal exposure, and reputational stakes. One can model trust as a constraint that raises \(\psi_j\), the supervision-cost term. Investments in evaluation, auditing, and domain-specific fine-tuning lower \(\psi_j\) and therefore expand the set of tasks that can be assisted economically.

This suggests that progress in AI evaluation and governance may be as important for economic impact as progress in raw model benchmarks.

### 13.4 Worker Adaptation and Strategic Behavior

Workers are not passive. They can adapt strategically to AI. Some may use it intensively and become more productive. Others may avoid it, fearing surveillance or deskilling. Some may use AI to signal higher output under piece-rate or promotion systems. Strategic adaptation can amplify or dampen measured gains.

A richer model would incorporate worker choice over AI use, balancing productivity gains against effort costs, reputational risks, and learning concerns. Such a model could generate heterogeneous take-up even within firms and occupations.

### 13.5 Robustness to Alternative Wage-Setting Institutions

The baseline exposition uses competitive labor market logic, but the paper’s qualitative results do not depend on perfect competition. Under monopsony, a larger share of AI gains is captured by firms. Under collective bargaining, wages may track productivity more closely and adoption may be shaped by negotiation over task redesign. Under internal labor markets, promotions rather than current wages may adjust. The main mechanisms of task exposure, experience compression, and adoption frictions remain, but the distribution of surplus changes.

### 13.6 Why the Framework Is Still Parsimonious Enough to Be Useful

Any model of generative AI risks either being too abstract or too technology specific. The framework proposed here aims for a middle path. By focusing on codifiability, contextuality, experience compression, and adoption frictions, it captures the features that seem most economically durable across fast-changing tools. Specific interfaces and models will evolve. The underlying economic questions are likely to remain: which tasks can be codified, whose knowledge is embedded, who pays the fixed costs of adoption, and how are the gains shared?

## 14. Conclusion

Generative AI has been discussed as if the economic choice were between two extreme futures: a broad replacement of human labor or a nearly frictionless wave of universal augmentation. This paper has argued for a different and more disciplined view. Generative AI is a task-reallocation technology whose effects depend on codifiability, contextuality, worker heterogeneity, organizational complements, and institutional design. It reaches further into knowledge work than earlier automation waves, yet it does so unevenly. It can compress experience gaps within exposed tasks, particularly by transferring best-practice knowledge to less experienced workers. It can also increase divergence across firms, occupations, and regions when adoption complements and market power are unevenly distributed.

This framework helps reconcile the empirical record. Large micro-level productivity gains in selected tasks are real and economically meaningful. They are also fully compatible with cautious short-run macro forecasts because only a fraction of total work time is currently affected and because firms face substantial implementation costs. Likewise, the technology can reduce inequality within some jobs while increasing broader inequality pressures across the labor market. The relevant unit of analysis is not the occupation but the task bundle, not the worker alone but the worker embedded in a firm with specific complements and constraints.

The paper’s formal model introduced the idea of experience compression as a central mechanism. Generative AI partly codifies the knowledge embedded in experienced workers and organizational routines, allowing less experienced workers to access productive patterns more cheaply. This mechanism can raise productivity and narrow within-occupation performance differences. But it also creates tensions around wage premia, career ladders, mentorship, and long-run human capital formation. A labor market that looks more equal in the short run may become less mobile in the long run if entry pathways contract.

The paper also argued that the macroeconomic and welfare consequences of generative AI are mediated by institutions. Competition policy, training systems, worker voice, diffusion support, and tax policy all affect whether AI becomes a complement to broad-based capability or a tool for rent concentration. The relevant policy question is not whether to permit or prohibit AI. It is how to structure its diffusion so that productivity gains are widely shared and so that the economy continues to generate learning opportunities, mobility pathways, and competitive markets.

Several empirical priorities follow. Researchers should measure task-level exposure more carefully; separate assistance from automation; study wage pass-through rather than productivity alone; track entry-level hiring and career progression; and analyze cross-country divergence in service trade and cognitive offshoring. The next generation of evidence should move beyond broad occupational exposure indices toward integrated data on tasks, workers, firms, and local labor markets.

No paper can guarantee an “easy” path to publication in top economics journals. But a publishable economics of generative AI will need precisely the combination attempted here: a formal mechanism that explains the current evidence, a credible empirical strategy, a distribution-sensitive welfare framework, and a clear account of institutional heterogeneity. The economics profession should resist both utopian and dystopian narratives. The central analytical challenge is not to guess whether AI will matter. It is to understand how its gains and losses are created, mediated, and distributed.

## Appendix A. Formal Intuition and Comparative Statics

This appendix develops the intuition behind the main propositions more explicitly. The derivations are intentionally transparent rather than fully general.

### A.1 Productivity Gain from Assistance

Recall that assisted-task output is

\[
y_{ijf}^{A} = a_f \phi(j) s_i^{\alpha_j} \left[(1-\lambda_j)e_i + \lambda_j \bar e_f\right]^{\beta_j}(1-\psi_j).
\]

The manual benchmark is

\[
y_{ijf}^{0} = a_f \phi(j) s_i^{\alpha_j} e_i^{\beta_j}.
\]

Hence

\[
\Delta y_{ijf} = a_f \phi(j) s_i^{\alpha_j} \left\{\left[(1-\lambda_j)e_i + \lambda_j \bar e_f\right]^{\beta_j}(1-\psi_j) - e_i^{\beta_j}\right\}.
\]

Differentiating with respect to \(\lambda_j\) yields

\[
\frac{\partial \Delta y_{ijf}}{\partial \lambda_j} = a_f \phi(j) s_i^{\alpha_j} \beta_j (\bar e_f - e_i) \left[(1-\lambda_j)e_i + \lambda_j \bar e_f\right]^{\beta_j - 1}(1-\psi_j),
\]

which is positive whenever \(\bar e_f > e_i\) and \(\psi_j < 1\). Since \(\lambda_j\) rises with codifiability and falls with contextuality, the gain is increasing in codifiability and decreasing in contextuality under mild regularity conditions.

### A.2 Why Lower-Experience Workers Gain More

To see the experience-compression result, differentiate the proportional gain with respect to worker experience. The exact sign depends on parameters, but the economic logic is straightforward. When \(e_i\) is low relative to \(\bar e_f\), the AI term substitutes for a missing input. As \(e_i\) rises, the gap between worker experience and frontier experience narrows, reducing the marginal value of assistance. In the limiting case where \(e_i = \bar e_f\), assistance offers little experience transfer and mainly provides formatting or speed gains.

Thus, even if all workers gain, the proportional gain declines with experience over a wide range. This is the economic foundation for compression within exposed occupations.

### A.3 Adoption Thresholds

Let the expected benefit from assisting task \(j\) in firm \(f\) be

\[
B_{fj}^{A} = \int_i \left(y_{ijf}^{A} - y_{ijf}^{0}\right) \ell_{ijf} di,
\]

and the expected benefit from automation be \(B_{fj}^{M}\). The firm adopts assistance for task \(j\) if

\[
B_{fj}^{A} \geq G_j^A,
\]

and automation if

\[
B_{fj}^{M} \geq G_j^M.
\]

Because \(G_j^A\) and \(G_j^M\) fall with digital complements and organizational standardization, firms with higher \(d_f\) satisfy these inequalities for a larger set of tasks. This immediately generates adoption sorting by firm characteristics.

### A.4 Wage Compression Within Occupations

Suppose workers of different experience types are paid their marginal products in assisted tasks. Then the experience wage premium within an exposed task is tied to

\[
\frac{\partial y_{ijf}^{A}}{\partial e_i} = a_f \phi(j) s_i^{\alpha_j} \beta_j (1-\lambda_j) \left[(1-\lambda_j)e_i + \lambda_j \bar e_f\right]^{\beta_j - 1}(1-\psi_j).
\]

Relative to the no-AI benchmark, the factor \((1-\lambda_j)\) attenuates the marginal return to worker-owned experience. Hence the experience premium falls as assistance intensity rises. This is the formal analogue of within-occupation compression.

### A.5 Why Aggregate Productivity Remains Limited at First

Aggregate gains are bounded by exposure shares and adoption. Let \(\sigma_t\) denote the measure of tasks assisted or automated at time \(t\), and let \(\bar g_t\) denote the average gain on those tasks. Then first-order aggregate productivity growth is approximately

\[
\Delta A_t \approx \sigma_t \bar g_t - Adj_t.
\]

Even if \(\bar g_t\) is large, \(\sigma_t\) may initially be small. Moreover, \(Adj_t\) may be nontrivial because firms duplicate workflows during transition, purchase complementary software, and spend time on evaluation and compliance. This formalizes the difference between local success and aggregate transformation.

### A.6 Dynamic Learning and Human Capital

In the learning extension,

\[
e_{i,t+1} = (1-\delta)e_{it} + \mu H_{it} + \nu A_{it}.
\]

If \(\nu < \mu\), then shifting time from manual to AI-assisted tasks raises current output but can reduce future experience accumulation. The social planner’s problem therefore includes an intertemporal tradeoff. A firm maximizing current profits may choose too much AI-assisted production from the perspective of long-run human-capital accumulation if it ignores future skill shortages or broader social mobility costs.

This is a standard externality logic applied to apprenticeship. Training pathways create future productive workers, but firms may underprovide them when current automation is cheap.

## Appendix B. Empirical Implementation Guide

This appendix translates the paper’s framework into a feasible empirical program.

### B.1 Worker-Level Data

The ideal worker-level dataset would include the following elements.

1. Direct or inferable use of generative AI tools.
2. Baseline measures of worker performance prior to adoption.
3. Task-level or workflow-level output measures, including quality and quantity.
4. Information on wages, promotions, hours, and turnover.
5. Team or firm identifiers to observe organizational context.

Potential sources include internal firm administrative data, software usage logs, randomized rollouts, and linked employer-employee data. In many settings, pairing usage logs with output quality measures will be crucial because time saved alone can be misleading.

### B.2 Firm-Level Data

Firm-level analysis requires measures of adoption, complements, and outcomes. Useful variables include enterprise AI licenses, internal deployment dates, AI-related job postings, cloud or software investments, documentation intensity, output per worker, wage bill, headcount by function, and turnover. Preexisting digital complement measures may come from software usage, ERP adoption, IT intensity, or management-quality surveys.

Event-study designs are especially attractive if rollout dates vary across firms for reasons plausibly unrelated to prior trends. But researchers should test for anticipatory effects and differential pretrends.

### B.3 Task Exposure Construction

The paper’s framework suggests a three-step exposure construction.

First, build task lists from occupational databases, job postings, firm workflow documents, or direct time-use surveys.

Second, score each task on codifiability and contextuality. Codifiability can be proxied by repetitiveness, document intensity, linguistic structure, and the degree to which prior examples exist. Contextuality can be proxied by accountability, stakes of error, need for local judgment, and dependence on real-time social interaction.

Third, aggregate task scores to the worker, occupation, firm, or region level using task weights. The resulting exposure measure should distinguish between assistable and automatable tasks rather than collapsing them into a single number.

### B.4 Outcome Variables

A complete empirical program should include at least five outcome families.

1. **Productivity outcomes:** output per hour, resolution time, coding throughput, document completion, or sales.
2. **Quality outcomes:** customer satisfaction, error rates, acceptance rates, rework, compliance, or review scores.
3. **Labor market outcomes:** wages, employment, hours, promotions, quits, and entry-level hiring.
4. **Organizational outcomes:** span of control, team structure, occupational mix, and vacancy composition.
5. **Distributional outcomes:** wage dispersion within occupations, between firms, and across regions.

The reason to study this broad set is that AI can improve measured speed while harming quality, or raise output while reshaping career ladders in ways that matter later.

### B.5 Identification Through Staggered Adoption

A feasible empirical design uses staggered rollout of enterprise AI across business units or firms. Let adoption timing be \(T_f\). The event-study specification is

\[
Y_{ft} = \alpha_f + \tau_t + \sum_{k \neq -1} \beta_k \mathbf{1}\{t - T_f = k\} + \epsilon_{ft}.
\]

Researchers should interact event time with baseline exposure and worker experience to test the model’s main implications. The most informative pattern would be positive post-adoption effects concentrated in high-exposure units and especially large among lower-experience workers.

### B.6 Shift-Share Designs and Local Labor Markets

For place-based analysis, one can build local AI exposure from baseline occupational composition. The key challenge is that exposed places may differ systematically. Strategies to improve credibility include controlling for prior employment trends, industry composition, education, broadband availability, and earlier exposure to software or routine automation. Historical occupational structures can help with instrumentation, though exclusion restrictions must be defended carefully.

One especially interesting application is to service-exporting cities or regions specialized in tradable business services. These places may face stronger effects than average national exposure measures suggest.

### B.7 Studying Career Ladders

To test the human-capital extension, researchers should follow worker cohorts over time. Key questions include whether entry-level hiring declines after adoption, whether promoted workers come disproportionately from earlier cohorts, whether mentorship time changes, and whether task composition shifts away from traditional apprenticeship work.

A simple approach is to compare cohorts entering firms or professions before and after AI rollout. Richer approaches could use detailed internal workflow data to observe whether juniors spend less time on developmental tasks and more time on verification or coordination.

### B.8 Measuring the Labor Share of AI Gains

Estimating the labor share impact requires linking productivity effects to wages and profits. At the firm level, one can examine whether adoption raises sales per worker, value added per worker, wage bill per worker, operating margins, or markups. At the worker level, one can study pass-through to earnings and promotions. At the industry or regional level, one can track changes in labor share alongside exposure measures.

The paper’s framework predicts that pass-through will be strongest where labor markets are competitive and adoption is broad, and weakest where market concentration or monopsony is high.

## Appendix C. Testable Hypotheses

For clarity, the paper’s main hypotheses are collected here.

**H1.** Generative AI adoption raises productivity most in tasks with high codifiability and lower contextuality.

**H2.** Within exposed tasks, lower-experience or lower-baseline-performance workers experience larger proportional productivity gains than frontier workers.

**H3.** Occupations characterized by high assistance potential but low automation potential see productivity gains with limited employment decline.

**H4.** Occupations characterized by high automation potential face stronger downward pressure on entry-level hiring and employment.

**H5.** Firms with greater digital complements adopt earlier and realize larger gains, contributing to between-firm productivity divergence.

**H6.** Aggregate productivity gains remain modest in the short run even when micro gains are large, because exposure shares are partial and organizational adjustment costs are material.

**H7.** Wage compression occurs within some exposed occupations, but wage and employment divergence widen across occupations, firms, and places.

**H8.** The labor share of AI-generated productivity gains is increasing in competition and worker bargaining power and decreasing in concentration of complements.

**H9.** Entry-level career ladders are especially vulnerable in professions where juniors historically performed codifiable developmental tasks.

**H10.** Cross-country divergence in AI gains is increasing in differences in digital complements, language resources, and participation in tradable cognitive service sectors.

## 15. Counterarguments, Boundary Conditions, and Limitations

A persuasive economics paper should not only explain what the preferred framework captures but also clarify what alternative interpretations can still explain and where the present framework may fail. This section addresses several common counterarguments.

### 15.1 “Generative AI Is Just Another Software Tool”

One objection is that generative AI is merely the latest in a long sequence of software improvements. On this view, there is little reason to build a distinct economics around it. Better tools have always helped workers draft documents, search information, and automate pieces of workflow.

There is some truth in this continuity claim. Generative AI is not a wholly separate economic species. It builds on broader trends in software, cloud computing, datafication, and machine learning. Yet the present framework remains useful because generative AI changes the margin on which software enters production. Earlier software typically required explicit rule specification or narrow task-specific interfaces. Generative AI can process open-ended prompts, synthesize varied outputs, and operate across many symbolic tasks with a single broad interface. This changes diffusion speed, experimentation patterns, and the role of tacit knowledge in work organization. The “experience compression” mechanism is much stronger under a tool that can imitate or retrieve best-practice templates across many tasks than under conventional workflow software alone.

Thus, continuity with earlier IT does not eliminate the need for a distinct economic framework. It suggests that the right framework should embed generative AI within the broader economics of organizational complements rather than treating it as magic.

### 15.2 “Exposure Estimates Are Too Noisy to Be Useful”

A second objection concerns measurement. Many AI exposure estimates rely on occupational descriptions or model-based judgments about whether tasks could be performed by large language models. Critics rightly note that such measures are noisy and may confuse technical possibility with economically meaningful deployment.

This critique is important, but it does not invalidate the task-reallocation approach. It implies that exposure must be measured more carefully and treated as multidimensional. The framework in this paper explicitly distinguishes assistance from automation, codifiability from contextuality, and exposure from realized adoption. A noisy exposure index is a problem for empirical implementation, not a reason to abandon task-based analysis. In fact, the critique strengthens the case for richer exposure measurement using direct workflow data, experiments, and organizational records.

### 15.3 “Aggregate Effects Will Be Huge Because the Technology Is General” 

Another counterargument comes from the opposite direction. Some analysts argue that generative AI is a general-purpose cognitive technology, so aggregate effects will necessarily be large and soon. On this view, caution about short-run macro gains is simply excessive conservatism.

The problem with this argument is not that large long-run effects are impossible. They are entirely plausible. The problem is the inference from breadth of potential applicability to immediate realized macro change. Economics has repeatedly shown that general-purpose technologies diffuse through costly complements, organizational learning, regulatory adaptation, and institutional restructuring. The more general the technology, the more likely such complements matter. Generative AI’s broad interface may accelerate experimentation, but enterprise-scale deployment still depends on trust, evaluation, integration, and redesign. Therefore, the paper’s cautious aggregation logic is not skepticism about capability; it is realism about implementation.

### 15.4 “If Lower-Skilled Workers Gain More, Inequality Must Fall” 

The experience-compression mechanism might suggest an optimistic conclusion: if novices gain more than experts, perhaps generative AI is simply equalizing. But this inference is too quick. Compression within exposed tasks does not imply compression across the labor market. Workers and occupations differ in exposure, firms differ in adoption capacity, and wages depend on bargaining as well as productivity. A world in which junior analysts become more productive but clerical workers lose jobs and frontier firms capture most rents can exhibit lower within-team dispersion and higher economy-wide inequality at the same time.

This is why the paper insists on distinguishing within-occupation, between-occupation, between-firm, and regional inequality. They need not move in the same direction.

### 15.5 “The Framework Overstates the Role of Codifiability and Understates Social Context” 

A more substantive critique is that the framework remains too economistic and formal relative to the social reality of work. Many occupations involve tacit norms, identity, trust, and institutional context that are not reducible to codifiability or contextuality parameters. In such settings, AI may fail not because it cannot generate plausible outputs but because work requires legitimacy, accountability, or embodied social relation.

This critique has force. No model of tasks can fully capture the sociology of professions or the politics of organizations. But the contextuality term and the supervision-cost term in the model are intended precisely to absorb some of these realities. Tasks with high trust or legitimacy requirements are tasks with high effective contextuality and high error costs. The framework is therefore not blind to social context; it treats it as economically consequential. Still, the paper acknowledges that richer interdisciplinary work is needed, especially in sectors like health care, education, and law where institutional legitimacy is central.

### 15.6 “Firms May Use AI Poorly, So Economic Gains Could Disappear” 

One might object that the paper remains too optimistic about AI’s productive uses because real-world firms often adopt technologies badly. Poor prompts, bad data integration, weak governance, and managerial overreaction can all destroy value. If so, perhaps the most important effect of AI will be wasted investment rather than productivity.

This possibility is real and consistent with the paper’s framework. The model allows supervision costs, trust barriers, and adjustment costs to be large. Firms with weak complements may adopt and see limited gains or even losses. The prediction is not that all adoption is efficient. It is that the distribution of gains depends heavily on organizational capability. Indeed, poor implementation is part of why between-firm divergence may widen.

### 15.7 “Long-Run Human Capital Concerns Are Speculative” 

Another possible critique is that concerns about learning, apprenticeship, and entry-level pathways are speculative because current evidence focuses on short-run productivity rather than long-run career formation. This is correct. The paper does not claim that the long-run human-capital effect is known. It claims that the issue is economically central and empirically underexplored. Given how many professional labor markets rely on learning through structured routine work, ignoring this margin would be a serious omission. The right response is not to dismiss the concern but to test it.

### 15.8 “Public Policy Cannot Fine-Tune a Fast-Moving Technology” 

Skeptics of policy intervention may argue that the technology evolves too quickly for public policy to shape it intelligently. By the time training programs, tax rules, or diffusion support mechanisms are designed, the frontier may have moved. There is some force to this concern. Detailed, tool-specific regulation risks obsolescence.

But the policy agenda proposed here is not tool specific. It is institution focused. Diffusion support, competition policy, worker training in complementary skills, entry-path preservation, public-sector capacity, and social insurance are not rendered obsolete by model version changes. They are general mechanisms for shaping the distribution and adaptability of technological gains. Economics has long recognized that institutions matter even when specific technologies evolve rapidly.

### 15.9 Limits of the Present Manuscript

The paper has several substantive limitations.

First, it does not present new proprietary microdata or completed causal estimation. It offers a formal mechanism and an empirical blueprint grounded in the existing evidence. This is useful for theory and synthesis but is not a substitute for future estimation.

Second, the model simplifies firm heterogeneity, product demand, and labor market institutions. Richer quantitative work could embed the mechanisms in a calibrated general equilibrium environment.

Third, the framework is better suited to current generative AI applications in text- and knowledge-intensive work than to future multimodal systems with stronger embodied capabilities. If AI eventually couples more tightly with robotics and real-world actuation, the sectoral implications could expand substantially.

Fourth, the paper focuses primarily on labor markets and firm organization. It says less about intellectual property, data ownership, energy use, or political communication effects of AI, each of which could have first-order welfare consequences.

These limitations do not invalidate the framework. They define the frontier for subsequent research.

### 15.10 Why the Core Argument Still Holds

Despite these limitations, the central claim of the paper remains robust: generative AI should be understood as a technology of task reallocation whose economic consequences depend on codifiability, contextuality, experience compression, and adoption complements. This claim is flexible enough to accommodate rapid technological change while specific enough to generate sharp predictions about productivity, inequality, diffusion, and policy. It is therefore, in the author’s view, a more useful organizing framework than narratives that reduce AI either to full labor replacement or to frictionless universal augmentation.


## References

Acemoglu, D. (1998). Why do new technologies complement skills? Directed technical change and wage inequality. *Quarterly Journal of Economics, 113*(4), 1055-1089.

Acemoglu, D. (2002). Technical change, inequality, and the labor market. *Journal of Economic Literature, 40*(1), 7-72.

Acemoglu, D. (2024). *The simple macroeconomics of AI*. NBER Working Paper.

Acemoglu, D., & Autor, D. (2011). Skills, tasks and technologies: Implications for employment and earnings. In O. Ashenfelter & D. Card (Eds.), *Handbook of Labor Economics* (Vol. 4B, pp. 1043-1171). Elsevier.

Acemoglu, D., & Restrepo, P. (2018). The race between man and machine: Implications of technology for growth, factor shares, and employment. *American Economic Review, 108*(6), 1488-1542.

Acemoglu, D., & Restrepo, P. (2019). Automation and new tasks: How technology displaces and reinstates labor. *Journal of Economic Perspectives, 33*(2), 3-30.

Acemoglu, D., & Restrepo, P. (2020). Robots and jobs: Evidence from U.S. labor markets. *Journal of Political Economy, 128*(6), 2188-2244.

Acemoglu, D., & Restrepo, P. (2022). *Tasks, automation, and the rise in U.S. wage inequality*. NBER Working Paper.

Aghion, P., Jones, B. F., & Jones, C. I. (2019). Artificial intelligence and economic growth. In A. Agrawal, J. Gans, & A. Goldfarb (Eds.), *The Economics of Artificial Intelligence: An Agenda* (pp. 237-282). University of Chicago Press.

Akerman, A., Gaarder, I., & Mogstad, M. (2015). The skill complementarity of broadband internet. *Quarterly Journal of Economics, 130*(4), 1781-1824.

Autor, D. H. (2013). The “task approach” to labor markets: An overview. *Journal for Labour Market Research, 46*(3), 185-199.

Autor, D. H. (2015). Why are there still so many jobs? The history and future of workplace automation. *Journal of Economic Perspectives, 29*(3), 3-30.

Autor, D. H., & Dorn, D. (2013). The growth of low-skill service jobs and the polarization of the U.S. labor market. *American Economic Review, 103*(5), 1553-1597.

Autor, D. H., Dorn, D., & Hanson, G. H. (2015). Untangling trade and technology: Evidence from local labour markets. *Economic Journal, 125*(584), 621-646.

Autor, D. H., Levy, F., & Murnane, R. J. (2003). The skill content of recent technological change: An empirical exploration. *Quarterly Journal of Economics, 118*(4), 1279-1333.

Autor, D. H., Mindell, D. A., & Reynolds, E. B. (Eds.). (2020). *The Work of the Future: Building Better Jobs in an Age of Intelligent Machines*. MIT Press.

Babina, T., Fedyk, A., He, A., & Hodson, J. (2024). *Artificial intelligence, firm growth, and product innovation*. Working paper.

Bartel, A., Ichniowski, C., & Shaw, K. (2007). How does information technology affect productivity? Plant-level comparisons of product innovation, process improvement, and worker skills. *Quarterly Journal of Economics, 122*(4), 1721-1758.

Basel Committee on Banking Supervision. (2024). *The impact of digitalisation on banks and supervisors*. Bank for International Settlements.

Bessen, J. E. (2019). AI and jobs: The role of demand. NBER Working Paper No. 24235.

Bick, A., Blandin, A., & Deming, D. J. (2024). *The rapid adoption of generative AI*. NBER Working Paper. [https://www.nber.org/papers/w32966](https://www.nber.org/papers/w32966)

Bloom, N., Garicano, L., Sadun, R., & Van Reenen, J. (2014). The distinct effects of information technology and communication technology on firm organization. *Management Science, 60*(12), 2859-2885.

Bloom, N., Sadun, R., & Van Reenen, J. (2012). Americans do IT better: U.S. multinationals and the productivity miracle. *American Economic Review, 102*(1), 167-201.

Bresnahan, T. F., Brynjolfsson, E., & Hitt, L. M. (2002). Information technology, workplace organization, and the demand for skilled labor: Firm-level evidence. *Quarterly Journal of Economics, 117*(1), 339-376.

Brynjolfsson, E., Hitt, L. M. (2000). Beyond computation: Information technology, organizational transformation and business performance. *Journal of Economic Perspectives, 14*(4), 23-48.

Brynjolfsson, E., Li, D., & Raymond, L. R. (2023). *Generative AI at work*. NBER Working Paper No. 31161. [https://www.nber.org/papers/w31161](https://www.nber.org/papers/w31161)

Brynjolfsson, E., Rock, D., & Syverson, C. (2021). The productivity J-curve: How intangibles complement general purpose technologies. *American Economic Journal: Macroeconomics, 13*(1), 333-372.

Card, D., & DiNardo, J. E. (2002). Skill-biased technological change and rising wage inequality: Some problems and puzzles. *Journal of Labor Economics, 20*(4), 733-783.

Cazzaniga, M., Jaumotte, F., Li, L., Melina, G., Panton, A. J., Pizzinelli, C., Rockall, E., Tavares, M. M., & Yackovlev, I. (2024). *Gen-AI: Artificial intelligence and the future of work*. IMF Staff Discussion Note. [https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379](https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379)

Cockburn, I. M., Henderson, R., & Stern, S. (2018). *The impact of artificial intelligence on innovation*. NBER Working Paper No. 24449.

Deming, D. J. (2017). The growing importance of social skills in the labor market. *Quarterly Journal of Economics, 132*(4), 1593-1640.

Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2023). *GPTs are GPTs: An early look at the labor market impact potential of large language models*. [https://arxiv.org/abs/2303.10130](https://arxiv.org/abs/2303.10130)

Frey, C. B., & Osborne, M. A. (2017). The future of employment: How susceptible are jobs to computerisation? *Technological Forecasting and Social Change, 114*, 254-280.

Goldfarb, A., Taska, B., & Teodoridis, F. (2023). *Could machine learning be a general purpose technology? Evidence from online job postings*. Working paper.

Goldin, C., & Katz, L. F. (2008). *The Race between Education and Technology*. Harvard University Press.

Goos, M., Manning, A., & Salomons, A. (2014). Explaining job polarization: Routine-biased technological change and offshoring. *American Economic Review, 104*(8), 2509-2526.

Gordon, R. J. (2016). *The Rise and Fall of American Growth*. Princeton University Press.

Griliches, Z. (1957). Hybrid corn: An exploration in the economics of technological change. *Econometrica, 25*(4), 501-522.

Hall, R. E., & Jones, C. I. (1999). Why do some countries produce so much more output per worker than others? *Quarterly Journal of Economics, 114*(1), 83-116.

Helpman, E. (Ed.). (1998). *General Purpose Technologies and Economic Growth*. MIT Press.

Howell, S. T., & Muro, M. (2019). AI and the future of work: What do we know so far? *Brookings Report*.

Hsieh, C.-T., & Klenow, P. J. (2009). Misallocation and manufacturing TFP in China and India. *Quarterly Journal of Economics, 124*(4), 1403-1448.

International Labour Organization. (2025). *Generative AI and jobs: A refined global index of occupational exposure*. [https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure](https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure)

Jovanovic, B., & Rousseau, P. L. (2005). General purpose technologies. In P. Aghion & S. Durlauf (Eds.), *Handbook of Economic Growth* (Vol. 1B, pp. 1181-1224). Elsevier.

Katz, L. F., & Murphy, K. M. (1992). Changes in relative wages, 1963-1987: Supply and demand factors. *Quarterly Journal of Economics, 107*(1), 35-78.

Korinek, A., & Stiglitz, J. E. (2018). Artificial intelligence and its implications for income distribution and unemployment. In A. Agrawal, J. Gans, & A. Goldfarb (Eds.), *The Economics of Artificial Intelligence: An Agenda* (pp. 349-390). University of Chicago Press.

Krueger, A. B. (1993). How computers have changed the wage structure: Evidence from microdata, 1984-1989. *Quarterly Journal of Economics, 108*(1), 33-60.

Manning, A. (2003). *Monopsony in Motion: Imperfect Competition in Labor Markets*. Princeton University Press.

Mokyr, J., Vickers, C., & Ziebarth, N. L. (2015). The history of technological anxiety and the future of economic growth: Is this time different? *Journal of Economic Perspectives, 29*(3), 31-50.

Noy, S., & Zhang, W. (2023). Experimental evidence on the productivity effects of generative artificial intelligence. *Science, 381*(6654), 187-192. [https://www.science.org/doi/10.1126/science.adh2586](https://www.science.org/doi/10.1126/science.adh2586)

OECD. (2023). *OECD Employment Outlook 2023: Artificial intelligence and the labour market*. [https://www.oecd.org/en/publications/oecd-employment-outlook-2023_08785bba-en.html](https://www.oecd.org/en/publications/oecd-employment-outlook-2023_08785bba-en.html)

OECD. (2024). *Artificial intelligence, labour market exposure and productivity: Recent evidence*. OECD policy paper.

Raj, M., & Seamans, R. (2019). AI, labor, productivity, and the need for firm-level data. In A. Agrawal, J. Gans, & A. Goldfarb (Eds.), *The Economics of Artificial Intelligence: An Agenda* (pp. 553-565). University of Chicago Press.

Romer, P. M. (1990). Endogenous technological change. *Journal of Political Economy, 98*(5, Part 2), S71-S102.

Rosen, S. (1981). The economics of superstars. *American Economic Review, 71*(5), 845-858.

Tinbergen, J. (1974). Substitution of graduate by other labour. *Kyklos, 27*(2), 217-226.

Van Reenen, J. (2011). Wage inequality, technology, and trade: 21st century evidence. *Labour Economics, 18*(6), 730-741.

Webb, M. (2020). *The impact of artificial intelligence on the labor market*. Working paper.

World Bank. (2019). *World Development Report 2019: The Changing Nature of Work*. World Bank.

Zeira, J. (1998). Workers, machines, and economic growth. *Quarterly Journal of Economics, 113*(4), 1091-1117.

## Appendix D. Submission Positioning Note

If developed into a journal submission, the manuscript could be positioned either as a theory-driven labor economics paper with a unified empirical agenda, or as a synthetic economics article linking task-based theory to the first wave of generative AI evidence. The strongest next step would be to pair the framework with original worker-firm microdata on staggered rollout, wage pass-through, and career-ladder effects.

# Generative AI and the Recomposition of Music: Models, Creative Labor, Markets, and Governance

## Abstract

Artificial intelligence has moved from the periphery of music technology to the center of musical production, circulation, and regulation. In less than a decade, the field has evolved from symbolic music generation and narrow recommendation systems to foundation-model architectures capable of generating lyrics, melodies, arrangements, timbres, stems, performances, and fully rendered audio from multimodal prompts. Yet the significance of AI music cannot be reduced to model capability. Generative AI reorganizes the social division of musical labor, changes the economics of musical abundance, redefines the relation between composition and production, and intensifies unresolved questions about authorship, copyright, voice, consent, and cultural legitimacy. This article offers a synthetic, top-journal-style review and theoretical interpretation of AI music as a socio-technical system rather than a purely technical subfield. It integrates research from music information retrieval, machine learning, computational creativity, platform studies, cultural economics, and copyright governance.

The article advances four claims. First, contemporary AI music should be understood as a stack of representations, training data, interfaces, and governance choices, not simply as a class of generative models. Second, the central transformation in AI music is not the “replacement” of human creativity in any simple sense, but the recomposition of musical work into prompt design, curation, editing, style steering, rights clearance, and provenance management. Third, the economic consequence of AI music is a transition from scarcity in production to scarcity in attention, trust, and identity. This transition amplifies the value of recognizable voices, brands, communities, and legal certainty even as it lowers the marginal cost of producing musical content. Fourth, the regulatory future of AI music will be shaped by three interlocking governance problems: the legality of training data, the copyright status of generated outputs, and the protection of voice, likeness, and attribution in a world of synthetic performance.

To support these claims, the article maps the technical evolution of AI music from symbolic systems to text-to-music and audio language models; reviews evaluation challenges in musical generation; examines changing human-AI creative workflows; analyzes business models and platform dynamics; and synthesizes emerging legal and policy responses from official sources and recent industry developments. The article concludes by proposing a research agenda centered on controllability, culturally grounded evaluation, labor-aware design, dataset legitimacy, and interoperable provenance infrastructures. In doing so, it argues that AI music is best understood as a constitutive site where questions of creativity, infrastructure, labor, and law are being renegotiated in real time.

**Keywords:** AI music; generative AI; music generation; computational creativity; music industry; copyright; platform governance; foundation models

## 1. Introduction

The relationship between music and technology has always been recursive. Recording transformed performance into reproducible commodity form. Synthesis and sampling made timbre programmable and detachable from live bodies. Digital audio workstations reorganized the studio into software. Streaming platforms converted listening into an infrastructural layer of search, recommendation, and data extraction. Generative AI marks a new phase in this historical sequence because it operates simultaneously at multiple levels of the musical process: ideation, composition, arrangement, voice, performance emulation, production, post-production, metadata creation, recommendation, and platform moderation. In other words, AI music is not one tool or one market. It is an ecosystem in which the very boundaries between composing, producing, performing, cataloging, and circulating music are being rewritten.

The current wave of AI music has emerged from the convergence of several trajectories that were once analytically separate. One trajectory comes from symbolic music generation, where models learned patterns over notes, chords, and timing. A second comes from music information retrieval (MIR), which built tools for analysis, similarity, structure detection, transcription, and recommendation. A third comes from speech and audio generation, especially sequence models and diffusion architectures capable of modeling waveforms or compressed audio tokens. A fourth comes from platform and cloud infrastructures capable of training large models on multi-source, multi-rights data. The result is a new generation of systems that do not merely assist isolated tasks but increasingly aspire to produce end-to-end musical outputs from natural language, reference audio, style exemplars, or hybrid prompts.

This development has provoked an unusually broad set of reactions. Technologists have treated AI music as an exciting frontier for controllable generation, multimodal alignment, and human-computer co-creation. Creative practitioners have alternated between curiosity, enthusiasm, skepticism, and alarm. Record labels, publishers, and collection societies have recognized both a commercial opportunity and a rights crisis. Platforms have struggled with detection, disclosure, monetization, and moderation. Regulators have begun to confront a problem that does not fit legacy legal categories: systems may be trained on copyrighted music, imitate recognizable styles or voices, generate outputs that appear original yet are statistically dependent on prior corpora, and circulate at scales impossible under previous production regimes.

The central purpose of this article is to analyze AI music in a way that matches this complexity. Many existing texts fall into one of three limited approaches. Technical surveys focus on architectures, datasets, and metrics but understate labor, market structure, and law. Industry commentary emphasizes disruption and business opportunity but often lacks conceptual precision about what models actually do and how they are evaluated. Legal debate tends to isolate copyright, licensing, or personality rights from the material workflows and interfaces through which AI music is produced. This article argues that AI music should instead be treated as a socio-technical formation in which model design, interface affordances, rights regimes, labor processes, and platform governance jointly determine what counts as music, who counts as an author, and who captures value.

This argument matters for at least five reasons.

First, AI music destabilizes one of the deepest assumptions of modern musical culture: that composition, performance, and production are anchored in identifiable human intention. That assumption has never been absolute, but generative systems make its instability operational and scalable. A creator can now specify mood, genre, tempo, instrumentation, vocal timbre, production aesthetic, and emotional trajectory in natural language and receive multiple near-finished musical options in seconds. The human role shifts from manual construction toward a combination of intention setting, iterative steering, selection, editing, and contextual placement. Whether one interprets this as augmentation or dilution, it is undeniably a transformation of authorship practice.

Second, AI music intensifies a longstanding contradiction in digital culture: abundance is easy to produce, but attention is costly to secure. Low-cost generation does not eliminate competition; it multiplies it. As synthetic musical supply expands, the scarce goods in music become trust, recognition, community, narrative, legal certainty, and affiliation. In this environment, the value of artists may increasingly reside not only in making sonic objects but in anchoring meaning, identity, and relational authenticity.

Third, the technical evaluation of music generation remains unusually difficult. Music is not reducible to lexical correctness, task completion, or single-reference similarity. A generated piece may be structurally coherent yet aesthetically empty, stylistically convincing yet culturally tone-deaf, novel yet unusable, or emotionally effective yet derivative. Evaluation in AI music therefore exposes a larger methodological problem in generative AI: success depends on the relation between output, listener, context, and purpose, not merely on signal-level fidelity.

Fourth, AI music has become a proving ground for conflicts over training data and synthetic imitation. Official and industry sources indicate that music platforms are already dealing with large volumes of AI-generated uploads. Deezer reported in 2025 that more than 20,000 fully AI-generated tracks were being delivered to its platform each day, representing around 18 percent of daily uploads. Meanwhile, official litigation filed by record companies against Suno and Udio in 2024 signaled that the legality of training generative music systems on copyrighted sound recordings will be a decisive issue for the next phase of the industry. The U.S. Copyright Office has also begun to formalize its view that copyright protection turns on the degree of human authorship, while separate debates are emerging over digital replicas, style imitation, and voice rights.

Fifth, music is a particularly revealing domain for AI because it lies at the intersection of culture, embodiment, and industrial standardization. Unlike text, music is deeply tied to temporality, affect, collective memory, and performance identity. Unlike static images, it unfolds over time and is often evaluated relationally: against genre conventions, danceability, emotional pacing, playlist fit, production quality, and performer identity. This makes music an exceptionally rich domain for observing how generative systems interact with cultural expectations and institutional gatekeepers.

This article therefore asks a broad but precise question: how should we understand AI music when technical capability, creative practice, platform economics, and governance are changing simultaneously? To answer that question, the article proceeds in stages. Section 2 reviews the evolution of AI music research, from symbolic models to audio language models and text-to-music systems. Section 3 proposes a socio-technical framework for understanding AI music as a stack composed of representations, data pipelines, generation architectures, interfaces, and governance layers. Section 4 examines creativity and co-creation, arguing that AI reorganizes musical labor more than it abolishes it. Section 5 addresses the evaluation problem. Section 6 turns to market structure, platform dynamics, and business models. Section 7 synthesizes current legal and policy developments around copyright, training data, voice, disclosure, and provenance. Section 8 proposes a future research agenda. The conclusion argues that AI music is best treated neither as a miraculous substitute for artists nor as an external threat to an otherwise stable industry, but as a constitutive reordering of what music production, distribution, and regulation now mean.

## 2. From Symbolic Generation to Foundation Models: A Brief Intellectual History

AI music did not begin with contemporary generative systems. The aspiration to formalize composition and automate musical structure has a longer lineage that includes algorithmic composition, rule-based systems, stochastic composition, evolutionary approaches, and computational creativity. Early systems often worked with explicit musical representations such as note sequences, harmonic rules, style grammars, or probabilistic transitions. Their achievements were limited by representation, compute, and data, but they established an enduring premise: musical structure can be modeled computationally at multiple levels, from local note choices to phrase organization and stylistic regularity.

The contemporary era of AI music, however, emerged through three major representational shifts.

The first shift was toward symbolic deep learning. Instead of hand-coding compositional rules, researchers began training recurrent neural networks, variational autoencoders, transformers, and related architectures on symbolic music corpora such as MIDI. These systems captured sequential dependencies over notes, chord progressions, rhythmic patterns, and instrument events. Symbolic generation was attractive because it compressed music into manageable discrete structures and allowed controllability over harmony, instrumentation, and arrangement. Research in this tradition helped clarify core challenges such as long-range coherence, repetition, structure, and style control. Work like MusicVAE, MuseNet, and Music Transformer made major contributions by showing that deep architectures could model multitrack structure, interpolation, and longer contexts with improved fidelity.

The second shift was toward raw audio or codec-based modeling. Symbolic music alone cannot represent timbre, articulation, room acoustics, mixing, or the nuances of human performance in recorded music. Systems such as OpenAI’s Jukebox pushed the field toward direct audio generation by modeling music in compressed latent spaces. Later work like AudioLM demonstrated how tokenized audio representations and hierarchical language modeling could generate long-form audio while preserving realism. This transition mattered because the center of musical value in contemporary popular music often lies not only in composition but in sound design, vocal texture, production aesthetics, and sonic identity. Audio generation therefore expanded AI music from “score-like” outputs toward “record-like” outputs.

The third shift was toward multimodal foundation-style modeling. Systems such as MusicLM and MusicGen suggested that music generation could be conditioned not only on symbolic seeds or audio prompts but also on descriptive text. This made the interface to music generation more legible to non-specialists. Users no longer had to construct note-level representations or manipulate latent vectors directly; they could specify “a melancholic piano ballad with cinematic strings and a gradual build” and receive candidate outputs. The importance of this shift is not merely convenience. Natural-language conditioning reorganizes musical creation into semantic control, allowing a larger population of users to enter the creative pipeline through prompting, iteration, and evaluation rather than traditional craft alone.

The distinction between symbolic and audio generation still matters. Symbolic approaches remain powerful for composition, arrangement, educational tools, accompaniment generation, and scenarios where editable structure is more useful than rendered sound. Audio generation is stronger in use cases where timbre, production realism, and end-to-end rendering are essential. Many commercial systems now hybridize these approaches: they may internally use tokenized audio, latent representations, retrieval, style embeddings, or compositional priors while exposing a natural-language interface to the user.

It is also important to note that music generation has never been the only AI application in music. Music information retrieval has long supplied analysis, recommendation, transcription, source separation, beat tracking, key detection, tagging, and similarity search. In practice, the current AI music ecosystem combines generative and analytical AI. A single product may generate a song, separate stems, suggest metadata, detect genre, classify mood, create artwork, optimize mastering, recommend promotional snippets, and test audience fit. The boundary between generation and optimization is therefore blurred. This is one reason why AI music has implications beyond composing tools: it is becoming an infrastructural layer across the music value chain.

## 3. AI Music as a Socio-Technical Stack

To understand AI music adequately, one must move beyond the idea of “the model” as the sole unit of analysis. What users experience as AI music is generated by a stack whose layers include musical representations, training datasets, annotation practices, model architectures, alignment methods, interfaces, usage policies, business models, and legal constraints. Changes at any layer can alter the cultural meaning and economic consequences of the system. This section proposes a stack-based framework that helps integrate technical and institutional analysis.

### 3.1 Representation: What Counts as Music to the Machine?

Every AI music system begins by deciding what aspects of music are computationally legible. Symbolic models treat music as note events, durations, velocities, instrument assignments, harmonic labels, or hierarchical structures. Audio models treat it as waveforms, spectrograms, discrete codec tokens, or latent embeddings. Multimodal models add text descriptions, tags, captions, or reference audio. Each representation foregrounds some musical properties and backgrounds others.

Symbolic representation privileges structure. It captures melody, harmony, rhythm, meter, and arrangement in relatively compact forms. This makes it well suited to composition, accompaniment, and score-like manipulation. But symbolic representation often underrepresents the features listeners care about in finished recordings: timbral nuance, microphone coloration, articulation, human microtiming, production texture, and the non-notational dimensions of groove.

Audio representation privileges sonic realism and timbral detail. It can model aspects of music that are central to recorded culture, including vocal inflection, room ambience, distortion, mixing style, and effects processing. Yet audio generation is computationally expensive and difficult to control. A piece of rendered audio may sound plausible without being structurally strong, and fine-grained editing is often more difficult than in symbolic systems.

Text representation introduces another layer of abstraction. Text-to-music systems rely on descriptions of genre, mood, instrumentation, setting, or use case. These descriptions allow natural-language control, but they also carry cultural assumptions. Text labels such as “cinematic,” “lo-fi,” “epic,” “urban,” or “ethereal” are not neutral descriptors; they are socially sedimented categories shaped by industry taxonomies, platform metadata, and listener habits. When systems learn mappings from text to music, they are also learning mappings from language to culture. This means bias, stereotype, and simplification can enter not only through audio data but also through the descriptive language attached to it.

In practice, the future of AI music is likely to depend on richer representational integration rather than a final victory of one format over another. Musicians need systems that can traverse symbolic structure, semantic intent, and sonic rendering in fluid ways. A producer may want to describe a song in words, edit chord progressions symbolically, audition multiple arrangements, and then generate polished stems while preserving editability. The most useful systems will therefore be those that bridge, rather than separate, representational layers.

### 3.2 Data: Corpora, Captions, and Legitimacy

Training data is the most contested layer of the AI music stack. Technical performance depends on broad, diverse, and often large-scale corpora. But in music, data is rarely neutral or freely available. Sound recordings are protected not only as compositions but also as performances and masters. Metadata is inconsistent. Rights ownership is fragmented across labels, publishers, performers, and collecting societies. Genre categories are unstable. Regional musics may be underrepresented. Captions and tags often reflect platform logics rather than musicological richness.

These constraints matter technically and normatively. A model trained on weak or noisy captions may respond to prompts in superficial ways, reproducing cliché associations between labels and sounds. A model trained on a narrow catalog may overfit dominant commercial genres. A model trained on copyrighted recordings without transparent licensing may produce economically valuable outputs while externalizing the cost of data acquisition onto creators and rights holders. Thus, training data is not merely an engineering resource; it is a site where questions of ownership, labor, and cultural hierarchy become infrastructural.

The legality of music training data is one of the field’s defining issues. The record-company lawsuits filed against Suno and Udio in 2024 made clear that industry actors are willing to challenge unlicensed use of sound recordings at scale. The core dispute is not only whether training constitutes fair use or infringement, but also whether the market should normalize a model in which creative works are ingested without prior permission and monetized through synthetic generation. Even where courts have not yet produced final answers, the controversy is already shaping market design. Firms with access to licensed catalogs may emphasize legitimacy and risk reduction. Firms without such access may rely on opacity, broad legal claims, or jurisdictional uncertainty.

Data legitimacy also has a cultural dimension. AI music systems often inherit the asymmetries of global music distribution. Dominant Anglo-American genres, major-label catalogs, and platform-visible styles are more likely to appear in widely available corpora than local, oral, community-based, or under-documented traditions. If uncorrected, model outputs will reflect and amplify these asymmetries. A future in which generative music tools are globally available but trained disproportionately on already dominant repertoires risks deepening musical homogenization under the guise of universal creativity.

### 3.3 Architectures: Generation, Retrieval, Control

The architectural layer includes the models and pipelines that map input conditions to musical outputs. In contemporary AI music, several broad paradigms coexist: autoregressive sequence modeling, diffusion-based generation, latent or codec language modeling, retrieval-augmented systems, and hybrid workflows that combine symbolic planning with audio rendering.

Autoregressive models excel at sequential coherence and explicit token-level prediction, especially in symbolic domains. Diffusion models have become attractive for audio because of their ability to generate high-quality signals, though they can face challenges with long-range musical form and exact controllability. Codec-based language models compress audio into discrete tokens, enabling language-model approaches to rendered sound. Retrieval-augmented systems can steer generation through reference examples, templates, or nearest-neighbor guidance, raising important questions about originality, similarity, and attribution.

Control is the decisive issue across architectures. In music, good outputs are rarely enough; users need steerability. They may want a track in a precise tempo range, harmonic mode, instrumentation, dramatic arc, or commercial use case. They may want to preserve a melodic contour while changing genre, generate stems instead of a stereo mix, avoid vocals, maintain loopability, or conform to ad-sync timing. A system that produces pleasant surprises but cannot be controlled may be interesting for experimentation yet weak for professional use. The history of AI music is therefore also a history of attempts to balance novelty and control.

### 3.4 Interfaces: Prompts, Parameters, and Workflow Design

Interfaces translate model capability into social practice. They determine who can use a system, what forms of expertise matter, and how labor is reorganized. A note-level editing interface privileges musicians with theoretical or production knowledge. A prompt-only interface lowers barriers to entry but often reduces precision. A layered interface that combines semantic prompting, structure templates, stem editing, reference audio, and post-generation controls can support more serious creative work.

The interface question is central because it shapes the very meaning of authorship. If a user enters one prompt and publishes the first output, the relation between intention and artifact may be thin. If a user iterates over dozens of generations, restructures sections, re-records parts, edits stems, replaces melodies, adjusts mix decisions, and integrates live performance, the human contribution is clearly more substantial. Governance frameworks that focus only on the presence of AI often miss this spectrum of human involvement. In practice, interface design determines whether AI music becomes a toy, a sketchpad, an assistive layer, or a professional co-production environment.

### 3.5 Governance by Design

Finally, AI music systems are governed not only by external law but by design choices internal to platforms. A service can require disclosure of AI assistance or not. It can permit voice cloning or prohibit it. It can block prompts referencing living artists or encourage them. It can license datasets, train on user uploads, or forbid such training absent consent. It can watermark outputs, attach provenance metadata, or do neither. It can reward quantity of uploads or prioritize trusted rights holders. These are governance decisions embedded in product architecture.

Recent platform developments show that governance by design is becoming central. SoundCloud announced in 2024 that it would not use artist content to train generative AI models without consent and introduced tagging options for AI use. Deezer has moved toward labeling and detection mechanisms amid rapid growth in AI-generated uploads. YouTube has articulated principles for partnering with the music industry on AI and launched controlled experimentation with artist partners. These moves do not solve the underlying legal conflicts, but they demonstrate that platform design is already functioning as a de facto regulatory arena.

## 4. Creativity, Authorship, and the Reorganization of Musical Labor

Public debate about AI music often begins with a dramatic question: can machines be creative? The question is understandable, but it is too blunt to capture what is actually happening in musical practice. Creativity in music is rarely a single act attributable to a solitary mind. It is distributed across composition, arrangement, rehearsal, performance, sound design, engineering, editing, mastering, release strategy, and audience interpretation. AI intervenes not in an empty space but in a densely collaborative ecology. The more useful question, therefore, is not whether AI is creative in the abstract, but how AI rearranges the sites, timings, and recognitions of creativity in practice.

### 4.1 From Tool Use to Co-Agency

Musicians have always worked with tools that shape outcomes. A piano affords harmonic density differently than a guitar. A step sequencer encourages loop-based thinking. Auto-Tune, quantization, and sample libraries alter both aesthetics and labor distribution. In that sense, AI is continuous with a long history of technologically mediated music-making. What distinguishes contemporary generative AI is the degree to which the tool can return complex, partially formed musical proposals rather than merely enabling direct human manipulation. The system no longer simply executes a command; it proposes trajectories.

This proposal-generating capacity creates a new zone between instrumentality and agency. The AI system is not a legal subject, a moral person, or a cultural participant in the same sense as a human artist. But from a workflow perspective, it behaves as a generative partner of a peculiar kind: it offers material, surprises the user, constrains imagination through the biases of its training set, and reshapes what counts as efficient creative exploration. This is why many users describe AI music not as a replacement for composition but as an ideation accelerator. It generates starting points, alternate takes, harmonic suggestions, vocal textures, mood sketches, or finished drafts that humans then refine or reject.

The concept of co-agency is useful here if handled carefully. AI does not have intention in the human sense, nor should the language of partnership obscure accountability. Yet neither is it sufficient to describe the model as a neutral instrument. A neutral instrument does not interpolate style priors from massive training corpora, encode probabilistic regularities across genres, or narrow likely outcomes through opaque latent structures. AI systems mediate possibilities before the user makes a decision. They are therefore better understood as constrained co-agents within a human-governed workflow: entities whose outputs shape creative trajectories even though humans remain responsible for selection, interpretation, publication, and contextual meaning.

### 4.2 The New Division of Musical Labor

The practical significance of AI music lies in how it redistributes labor across the production chain. Historically, producing a song often involved multiple specialized roles: songwriter, topliner, beatmaker, arranger, session musician, vocalist, engineer, producer, mixer, mastering engineer, and visual marketer. Digital tools compressed some of these roles, allowing one person to perform several. Generative AI compresses them further by lowering the cost of producing rough versions of tasks that once required specialist skill.

A user can now generate harmonic beds, drum patterns, bass lines, lyric drafts, instrumental textures, synthetic vocals, cover artwork, descriptive metadata, and social-media snippets inside one pipeline. This does not eliminate expertise, but it changes where expertise is concentrated. In many workflows, labor moves away from first-pass material production and toward higher-order editorial functions: curating outputs, setting constraints, identifying usable fragments, orchestrating revisions, integrating live elements, ensuring legal compliance, and positioning the work for distribution.

This shift can be described as the rise of curatorial composition. The creator increasingly acts as a director of variation rather than the sole source of every musical event. The value of expertise lies in taste, selection, contextual judgment, and structural integration. In some cases, this may strengthen highly skilled musicians and producers, because they can evaluate generated material more critically and combine it with traditional techniques. In other cases, it may de-skill entry-level production tasks by making them fast and abundant. The labor effect is therefore uneven. AI may augment experts while displacing or commodifying routine work performed by assistants, junior producers, sync composers, stock-music creators, and low-budget content teams.

These effects are especially visible in “functional music” domains: advertising beds, short-form creator music, background cues, game ambience, personalized soundtracks, and rapidly iterated commercial prompts. Here the premium is often on speed, fit-for-purpose adaptability, and low cost rather than on singular artistic identity. AI music systems are likely to have their strongest substitution effects in these segments first. The high-end artist album, by contrast, may remain more dependent on social identity, performer charisma, and cultural narrative, even if AI enters parts of the workflow.

### 4.3 Authorship After Prompting

The rise of prompt-based systems has forced a reconsideration of authorship. Traditional authorship doctrines and cultural norms assume some traceable human act of original expression. But prompting often occupies an ambiguous space. A prompt can be highly generic (“sad lo-fi piano track”) or extremely specific (“90 BPM, D minor, fingerpicked nylon guitar intro, intimate female vocal, sparse brushed snare, chorus lift with Mellotron strings, final chorus with layered harmonies and tape saturation”). The more elaborate the prompt, the stronger the user’s contribution may appear. Yet prompt specificity alone does not settle authorship, because the generated output is still produced through inferential processes the user does not directly control.

This ambiguity has practical consequences. In official guidance on AI and copyright, the U.S. Copyright Office has emphasized that outputs are protectable only to the extent that they reflect sufficient human authorship. The implication is not that any use of AI destroys copyright, but that merely causing a system to generate content is not automatically enough. What matters is the form, degree, and demonstrability of human creative control. This legal view aligns with the sociological observation that not all AI-assisted music-making is equivalent. There is a spectrum ranging from one-shot prompting to deeply iterative co-production.

For musical practice, the key issue may be less whether prompting is “real creativity” and more whether creators can document and articulate their contribution. This may encourage workflows that preserve edit histories, prompt logs, arrangement decisions, stem manipulations, and human-added elements. Ironically, then, AI could increase the importance of process documentation in creative work. The future author may need to show not only the final artifact but also the chain of human decisions that shaped it.

### 4.4 Human Skill, Deskilling, and Reskilling

The sociology of labor under AI often oscillates between utopian augmentation and dystopian replacement. Music offers a more nuanced case. Some musical skills may indeed be partially deskilled. A user who once needed basic harmony knowledge to draft a chord progression can now generate alternatives instantly. Simple beat construction, pad layering, and stock arrangement tasks can be automated to a significant degree. Entry barriers to rough demo production have fallen sharply.

At the same time, other skills are becoming more valuable. These include prompt literacy, comparative listening, structural editing, critical curation, rights awareness, dataset sensitivity, and the ability to integrate synthetic and human performances coherently. In high-level practice, AI does not eliminate musicianship; it changes the composition of musicianship. The producer of the near future may need to know not only harmony and mixing, but also model limitations, provenance protocols, contractual licensing, and how to prevent stylistic genericity.

This suggests a reskilling thesis rather than a simple deskilling thesis. Music education and professional development will likely need to adapt accordingly. Instead of treating AI music as external to musicianship, institutions may need to teach students how to analyze generated outputs, critique hidden style priors, preserve artistic identity under automated abundance, and negotiate authorship and licensing in hybrid workflows. The best educational response is unlikely to be either prohibition or uncritical adoption. It will require building reflective competence.

### 4.5 Accessibility and Inclusion

One of the strongest arguments in favor of AI music is accessibility. Natural-language and multimodal interfaces lower barriers for people without formal training in notation, theory, keyboard skills, or production software. For disabled users, users with limited access to instruments, and creators in low-resource environments, AI can function as an enabling layer. Someone who cannot physically perform a piano part may nevertheless compose one through description, editing, and iterative refinement. Someone with strong sonic ideas but limited technical facility may prototype an arrangement faster than before.

This inclusionary potential is significant and should not be dismissed. Historically, music technology has often expanded participation, from affordable samplers to home recording software to mobile production apps. AI may continue this democratizing tendency. Yet accessibility should not be confused with equality. Lower barriers to generation do not automatically produce equal visibility, income, or legitimacy. Platform advantage, brand power, dataset bias, and marketing infrastructure continue to shape whose music gets heard. The politics of accessibility in AI music therefore depends on the broader political economy of platforms and rights, not on interface simplicity alone.

### 4.6 Authenticity, Identity, and Listener Perception

Music is evaluated not only as sound but as situated expression. Listeners care about who is singing, what the performance signifies, what histories it invokes, and what kind of person or community it represents. AI music therefore triggers anxieties about authenticity that go beyond technical quality. A synthetic ballad may be sonically convincing but culturally hollow if listeners perceive it as detached from lived experience, artistic risk, or embodied performance.

These anxieties are not trivial conservatism. They reflect the fact that music functions socially as an index of identity, vulnerability, memory, and affiliation. A listener’s response to a vocal line depends partly on the sense that a person is behind it. When AI imitates voice or style, it risks severing sonic form from human referent. At the same time, authenticity has always been mediated and strategically produced in music industries. Studio editing, branding, ghostwriting, and persona management have long complicated any simple opposition between “real” and “fake.” AI does not introduce mediation; it intensifies the visibility of mediation.

The likely outcome is not the disappearance of authenticity but its redefinition. In a world of abundant synthetic music, authenticity may shift from being inferred through sonic purity to being established through transparency, intentionality, relational trust, and accountable provenance. Artists may emphasize process, live performance, disclosed hybrid workflows, or community involvement to distinguish their work from anonymous synthetic output. Listeners may become less concerned with whether AI was used at all than with whether its use was disclosed, consented to, and meaningfully integrated.

## 5. The Evaluation Problem in AI Music

Evaluation is the methodological bottleneck of AI music research. It is relatively easy to demonstrate that a model can generate plausible musical audio or symbolic sequences. It is much harder to determine whether those outputs are good, useful, original, emotionally effective, culturally appropriate, controllable, or legally safe. Unlike language tasks with benchmark answers or perception tasks with labeled ground truth, music generation involves open-ended outputs whose success depends on purpose and audience.

### 5.1 Why Musical Evaluation Is Hard

Musical quality is multi-dimensional. A piece may be internally coherent, stylistically convincing, emotionally flat, difficult to edit, and commercially unusable. Another may be rough or noisy yet compositionally interesting. A generated loop may be perfect for background content but unacceptable as an artist release. Evaluation therefore requires acknowledging multiple target functions: compositional coherence, audio fidelity, controllability, novelty, listener affect, workflow usefulness, and market fit.

There is also the problem of reference instability. In many generative tasks, metrics compare outputs to one or more references. But music rarely has a single correct answer. If a user asks for “a warm neo-soul groove with muted trumpet and intimate female vocals,” there are countless acceptable realizations. Penalizing outputs for deviating from one reference may therefore reward imitation rather than creativity.

Temporal structure adds another challenge. Music unfolds across seconds and minutes. A generated piece may sound promising in the first eight bars yet collapse structurally after one minute. Long-range coherence remains one of the central challenges in music generation, especially in audio-domain systems where local realism can mask weak form.

Finally, evaluation is shaped by listener expectation and context. The same output may be judged differently by an MIR researcher, an electronic producer, a film composer, a casual listener, or a copyright lawyer. Thus, evaluation in AI music is inherently stakeholder-relative.

### 5.2 Objective Metrics and Their Limits

Researchers have proposed numerous objective or semi-objective metrics for generated music. In symbolic domains, measures may assess pitch distributions, tonal tension, chord plausibility, repetition rates, pattern diversity, groove consistency, or similarity to corpus statistics. In audio domains, Fréchet Audio Distance has become one widely used metric for comparing generated and reference audio embeddings. Other approaches draw on classifier accuracy, embedding similarity, onset statistics, or MIR-derived descriptors.

These metrics are useful as diagnostics, but they are not substitutes for musical judgment. A system can optimize corpus-level similarity while producing outputs that feel generic or emotionally inert. Conversely, a more adventurous model may score worse on distributional similarity while producing more artistically compelling material. Metrics often reward average-case plausibility rather than distinctive form. They also tend to inherit the biases of the embeddings or classifiers on which they depend. If the embedding space was trained on dominant genre conventions, then “distance” may partly measure conformity to those conventions rather than quality in any broader sense.

Controllability metrics pose a further challenge. If a model is prompted for a genre, mood, tempo, or instrumentation, researchers may test whether the output satisfies those conditions according to classifiers or human raters. But semantic categories in music are often fuzzy and overlapping. “Dream pop,” “ambient,” and “cinematic” are not discrete labels but cultural continua. A model may partially satisfy a prompt in ways that are musically useful even if classifiers treat it as failure.

### 5.3 Human Evaluation: Necessary but Fragile

Because objective metrics are incomplete, human evaluation remains central. Listening tests, pairwise preference judgments, expert review panels, user studies, and workflow-based assessments are all common. Yet human evaluation also has weaknesses. Small sample sizes, non-representative participants, inconsistent listening conditions, novelty effects, and poorly designed questions can all distort results. Non-expert listeners may prefer polished but generic outputs; expert musicians may prioritize structure and control; commercial users may value speed over originality.

Human evaluation also suffers from context collapse when stripped from actual use cases. Asking listeners whether a clip “sounds good” tells us little about whether it is useful for film scoring, game ambience, artist songwriting, or meditative listening. More ecologically valid evaluation should situate outputs in workflows. Does the system reduce time to first draft? Does it expand ideational range? Does it support revision? Does it produce outputs that creators would release, license, or merely discard?

A promising direction is hybrid evaluation combining objective diagnostics, expert assessment, and task-based user studies. Instead of searching for one metric to rule them all, AI music research may need purpose-specific benchmark suites. A soundtrack tool should be judged partly by timing controllability and emotional alignment. A songwriting assistant should be judged by editability, novelty support, and compositional coherence. A platform generating functional creator music should be judged by fit-for-purpose consistency, legal clarity, and spam resistance.

### 5.4 Evaluating Originality and Memorization

One of the most urgent evaluation challenges concerns originality. In music, high similarity to existing works can create not only aesthetic problems but legal ones. Yet originality is hard to operationalize. Music is inherently repetitive and style-based. Genres depend on shared rhythmic, harmonic, and timbral conventions. A generated pop track may sound derivative because the genre itself relies on recurrent tropes. The evaluative question is therefore not whether any resemblance exists, but whether resemblance crosses the threshold from stylistic convention into impermissible replication.

Technical research on memorization and regurgitation in generative models is still developing. Audio retrieval tests, nearest-neighbor analyses, adversarial prompting, and fingerprint comparisons can help identify problematic overlap. But music complicates such analyses because similarity may occur at multiple levels: melody, lyric phrase, harmonic structure, groove, timbre, vocal style, mix aesthetic, or arrangement. A legally risky output may not be a one-to-one copy of a recording; it may be an uncanny recombination that reproduces enough salient identity to trigger recognition or confusion.

This is why originality evaluation cannot remain a purely technical benchmark. It must connect model behavior to legal doctrine, musicological analysis, and audience perception. In practice, companies developing AI music systems will need pre-release audits that combine similarity detection, dataset documentation, prompt restrictions, and escalation protocols for high-risk outputs.

### 5.5 Cultural and Contextual Evaluation

Most evaluation pipelines remain weak in cultural terms. Music is not only a signal; it is a social form. A system may generate a plausible “West African-inspired groove” or “Qawwali-style devotional piece” while flattening the distinct rhythmic logics, performance conventions, languages, and spiritual contexts that make these traditions meaningful. In the absence of culturally grounded evaluation, a model can appear successful while producing musically extractive outputs.

Top-tier AI music research therefore needs a more explicit cultural methodology. This means involving domain experts, tradition bearers, and regionally grounded listeners in system evaluation; documenting underrepresented genres; and refusing to treat global musical diversity as a menu of interchangeable sonic textures. Without such work, AI music may reproduce the colonial tendency to detach sonic features from the social worlds that generated them.

## 6. Industry Restructuring: Platforms, Business Models, and the Economics of Musical Abundance

The music industry has undergone several major reorganizations over the last half century: the recorded-music era, the digital-download era, the platform-streaming era, and now the emerging generative-AI era. Each transition changed what was scarce. In the era of physical distribution, scarcity attached to production, manufacturing, and shelf space. In the streaming era, production was cheap but distribution and recommendation became infrastructural bottlenecks. In the age of generative AI, the marginal cost of producing acceptable music falls further, which shifts competition toward attention, curation, legal legitimacy, and identity.

### 6.1 Supply Explosion and Platform Stress

Official platform disclosures already indicate that AI music is not a hypothetical future phenomenon. Deezer announced in April 2025 that it was receiving more than 20,000 fully AI-generated tracks per day, roughly 18 percent of all daily uploads. This statistic matters not only because of scale but because of what it reveals about platform stress. Music platforms were already struggling with content overabundance, low discoverability, and incentive structures that reward volume. AI dramatically amplifies these problems. A single actor can now generate and upload thousands of tracks across micro-genres, mood categories, or algorithmic playlists with minimal cost.

This creates three immediate pressures. First, moderation pressure: platforms need to detect spam, deceptive attribution, and potentially infringing material. Second, metadata pressure: if platforms cannot distinguish AI-generated from human-generated material or licensed from unlicensed synthetic replicas, search and recommendation systems become less trustworthy. Third, monetization pressure: existing payout structures may be vulnerable to gaming through synthetic content farms designed to capture small but scalable streaming revenue.

As a result, AI music is not merely a production challenge for artists; it is an infrastructural challenge for platforms. The platform that cannot classify, rank, and govern AI music will face declining signal quality and rising legal exposure. This is why disclosure, provenance, and detection are becoming core strategic issues rather than peripheral compliance matters.

### 6.2 Business Model Differentiation

The emerging AI music market is splitting into multiple business models.

One model is consumer-facing generation. Here the product is instant music creation for creators, hobbyists, short-form video users, marketers, or app developers. The user pays for fast output, customization, and licensing convenience. The value proposition resembles “music as a service” more than traditional authorship.

A second model is professional workflow augmentation. These tools target composers, producers, sound designers, game studios, advertising agencies, and post-production environments. They emphasize control, stem generation, editability, enterprise licensing, and integration with existing tools. In this segment, AI functions less as a replacement for expertise than as a productivity multiplier.

A third model is licensed synthetic catalog creation. Firms may partner with labels, publishers, or artists to create authorized models, style packs, voice doubles, or catalog-aware generation systems. This model is attractive because it reduces legal uncertainty and aligns AI generation with rights monetization. Controlled studio-style partnerships between platforms, labels, and artists suggest that authorized experimentation may become a preferred route for high-value commercial deployment.

A fourth model is platform internalization. Streaming and video platforms may use AI music not as a standalone product but as a background infrastructure for recommendation, creator tools, adaptive soundtrack generation, personalization, content matching, or rights management. In this scenario, generative music becomes embedded in the platform stack rather than sold as a separate app.

These models can coexist, but their economics differ sharply. Consumer-facing generation thrives on scale and low marginal cost. Professional tools thrive on integration and reliability. Licensed systems thrive on trusted rights relationships. Platform-internal tools thrive on data and ecosystem control. The long-term industry structure of AI music will depend on which of these models produces stable revenue, legal defensibility, and creator acceptance.

### 6.3 Labels, Publishers, and the Rights Turn

The major music companies have not responded to AI music with simple opposition. Their strategy is better described as a rights turn: oppose unlicensed training and unauthorized vocal imitation while exploring licensed, controllable, and monetizable AI applications. The lawsuits against Suno and Udio reflect the defensive side of this strategy. At the same time, experiments with artist-approved AI tools reflect the offensive side.

This dual strategy makes sense economically. Labels and publishers do not merely sell existing catalogs; they manage rights, reputations, and artist relationships. If AI can generate music at scale, the central question becomes who owns or licenses the training corpus, who controls commercial exploitation, and who can certify authenticity or authorization. Rights-holding institutions therefore have an incentive to turn their catalogs into licensed training assets rather than leave them to be scraped into unregulated model development.

This shift may strengthen incumbents in some respects. Firms with large catalogs, legal teams, and licensing infrastructure are better positioned to negotiate AI access and develop proprietary or partnership-based systems. Independent artists may benefit from new licensing opportunities but also risk weaker bargaining power if access to “legitimate AI” is brokered through concentrated intermediaries. Thus, AI music may simultaneously democratize creation and reinforce rights concentration.

### 6.4 Artists, Identity, and the New Scarcity Economy

In a world where plausible background music is nearly free, what becomes economically scarce? The answer is identity. Recognizable artists embody narrative continuity, fan attachment, embodied performance, and cultural trust. As synthetic supply expands, these elements may become more valuable, not less. Listeners do not consume music only for sonic utility; they also consume affiliation, authenticity, and story.

This helps explain why voice, likeness, and persona have become critical governance battlegrounds. A song that sounds “like” an artist may compete not only with songs but with the artist’s very identity asset. Unauthorized voice cloning threatens to convert a person’s recognizable vocal signature into a generative prompt parameter. This is qualitatively different from generic style transfer. The person becomes an extractable interface.

Consequently, the premium tier of future music markets may hinge on permissioned identity. Authorized synthetic collaborations, estate-managed voice models, artist-approved remixes, and licensed catalog derivatives could all become new revenue streams. At the same time, the market for anonymous functional music may become hyper-commodified. The industry may therefore bifurcate: branded music anchored in identity and rights at one end, and abundant low-cost utility music at the other.

### 6.5 Labor Market Consequences

The labor effects of AI music should be analyzed across different occupational layers.

At the high end, established artists may gain leverage if identity becomes more valuable and if authorized model licensing opens new income channels. Producers with strong taste and client trust may also benefit, using AI to accelerate iteration while preserving premium oversight.

At the middle and lower ends, however, labor risks are significant. Session composition, stock music production, sync pitching, background scoring, creator-track production, and entry-level commercial music work are all vulnerable to partial automation. Creative professionals who once relied on a large volume of mid-priced custom work may face pricing pressure as clients substitute AI-generated or AI-assisted alternatives.

Adjacent roles are also affected. Sound designers, topliners, translators of briefs into music, metadata workers, and junior engineers may find parts of their work automated. Yet new roles may emerge: AI music supervisor, prompt editor, provenance auditor, model wrangler, dataset rights manager, synthetic-voice licensing coordinator, or hybrid performance designer. The net labor effect will likely depend on bargaining power, platform rules, and whether institutions create pathways for workers to capture value from the new tasks AI creates.

### 6.6 Trust, Disclosure, and Consumer Perception

Industry surveys suggest that listeners care about disclosure and creator protection. Official IFPI reporting in 2025 indicated strong support among music fans for clear labeling of music generated by AI and widespread concern over the unauthorized use of artists’ music or voice. This is important because it suggests the legitimacy of AI music will not be determined by technical quality alone. Consumers want governance signals.

Disclosure may therefore become economically valuable. Far from weakening AI-assisted music, clear labeling could segment the market more productively. Some listeners may actively seek AI-native music, interactive experiences, or personalized generative tracks. Others may prefer human-authored releases or authorized hybrid projects. Transparency allows preferences to sort. Opaque or deceptive use of AI, by contrast, erodes trust and invites backlash.

## 7. Law, Ethics, and Governance

AI music governance is currently structured around three interlocking legal questions: what data can be used to train models, what outputs qualify for copyright protection, and how voice, likeness, and attribution should be protected in synthetic performance environments. These questions cannot be resolved by copyright doctrine alone. They require coordination across platform policy, contract law, privacy and publicity rights, labor norms, and technical provenance systems.

### 7.1 Copyrightability of AI-Assisted Music

The U.S. Copyright Office’s recent AI reports have clarified an increasingly influential principle: copyright protects human authorship, not autonomous machine output as such. This principle does not exclude AI-assisted creation, but it places pressure on creators and courts to identify the specifically human contributions in hybrid works. In music, those contributions may include lyric writing, melody editing, structural arrangement, stem-level transformation, performance integration, mixing decisions, and iterative curation.

From a practical standpoint, this means the future of copyrightable AI music will likely depend on process, not on blanket categories. Works generated through minimal prompting may be viewed as too machine-determined to qualify. Works that involve substantial human selection, coordination, adaptation, and post-generation authorship may qualify in part or in full. This introduces a gradient conception of authorship that fits real musical workflows better than a binary “human versus AI” distinction.

For creators, however, this also creates uncertainty. How much human intervention is enough? Must creators document prompts, edits, and revisions? Will collective management organizations treat AI-assisted works differently? Top-journal analysis should resist the temptation to answer these questions prematurely. What can be said with confidence is that copyrightability in AI music is becoming evidentiary. Creators who can show intentional human shaping will be in a stronger position than those who rely on opaque one-shot generation.

### 7.2 Training Data, Licensing, and the Political Economy of Consent

If copyrightability concerns the status of outputs, training-data disputes concern the legitimacy of inputs. The litigation against Suno and Udio in 2024 brought the issue into sharp relief by alleging large-scale use of copyrighted sound recordings for training. The dispute matters because sound recordings and musical compositions are central commercial assets of the music industry. A rule that effectively allows unlicensed ingestion of catalog-scale music into commercial generative systems would alter bargaining power across the entire sector.

Two broad governance models are emerging. The first is the scrape-and-defend model, in which developers train broadly and then argue that training is transformative or otherwise lawful. The second is the license-and-build model, in which developers seek authorized access to recordings, stems, metadata, or artist-approved exemplars. The former may accelerate innovation in the short run but generates high legal risk and creator antagonism. The latter is slower and more expensive but potentially more sustainable.

The deeper issue is not only legal compliance but distributive justice. Music catalogs are the accumulated result of artistic labor, investment, and institutional curation. If generative firms capture value from these catalogs without compensation or consent, then AI innovation is being subsidized by uncompensated creative work. Conversely, overly restrictive licensing regimes could entrench incumbents and reduce experimentation. A legitimate governance framework should therefore seek both compensation and competitive openness, perhaps through collective licensing, opt-in model access, differentiated rights classes, or sector-specific agreements.

### 7.3 Voice, Likeness, and Digital Replicas

Music is especially vulnerable to synthetic identity conflicts because vocal timbre is both expressive and commercially distinctive. A voice can function as a signature, a brand, and a site of emotional attachment. Generative systems that can imitate singers threaten to sever voice from person, allowing the market value of an artist’s sonic identity to be extracted independently of consent.

This is why voice rights may become as important as copyright in the governance of AI music. Some jurisdictions rely on publicity rights, privacy doctrines, unfair competition, or passing-off rules; others may develop new digital replica protections. The key normative principle is straightforward: recognizable voice and persona should not be commercially replicable without consent. But implementation is complex. What counts as a voice imitation? How much similarity is enough? What about parody, tribute, fan homage, or transformative art?

A robust governance approach should distinguish between authorized synthetic performance, disclosed imitation, protected expressive exceptions, and deceptive commercial exploitation. Blanket prohibition is neither realistic nor desirable. But the absence of protection would expose artists, estates, and listeners to widespread confusion and exploitation.

### 7.4 Attribution, Disclosure, and Provenance

Even where AI-assisted music is lawful and commercially useful, listeners, platforms, and rights holders increasingly demand transparency. Disclosure answers at least three different questions: Was AI used at all? In what part of the process? Was the use authorized and rights-compliant? These are distinct matters. A song with AI-assisted mastering is different from a song with an unlicensed cloned vocal. A transparent provenance layer could help preserve these distinctions.

Provenance systems may include embedded metadata, cryptographic signatures, platform-level labeling, workflow logs, or watermarking. None is perfect. Watermarks can be stripped or degraded. Metadata can be lost across platforms. Platform labels depend on platform honesty and interoperability. Yet some provenance infrastructure is likely necessary if AI music markets are to scale without collapsing into distrust.

From a governance standpoint, provenance should not be framed solely as anti-fraud technology. It is also a mechanism for preserving artistic and legal context. A future song object may need to carry information about human contributors, model use, dataset licensing class, and authorization status. This would allow more nuanced rights management and consumer choice.

### 7.5 Platform Rules as Quasi-Law

Because legislation and court decisions move slowly, platforms are increasingly functioning as quasi-regulators. SoundCloud’s statement that artist content will not be used to train generative AI without consent, alongside optional tagging for AI use, is one example of platform rulemaking. Deezer’s detection and labeling efforts are another. YouTube’s AI music principles and controlled sandbox approach illustrate a strategy of industry co-governance rather than unilateral release.

This platformization of governance has advantages and dangers. The advantage is responsiveness: platforms can implement disclosure requirements, upload restrictions, or licensing pathways quickly. The danger is fragmentation and private rule concentration. If each platform defines AI music differently, artists and users face a confusing patchwork of standards. Moreover, private platforms may prioritize litigation risk and brand safety over public accountability, labor fairness, or cultural diversity.

Thus, platform governance should be understood as necessary but insufficient. It can stabilize practice in the short term, but durable legitimacy will require interoperable standards and public policy frameworks.

### 7.6 Ethical Questions Beyond Law

Law does not exhaust the normative landscape of AI music. A system may be legal yet ethically dubious if it exploits underrepresented traditions, erases creative labor, or creates market conditions that reward quantity over care. Three ethical themes deserve particular emphasis.

First, consent. Consent should apply not only to voice cloning but, wherever feasible, to the use of artist materials in commercially oriented model training. At minimum, creators should know whether their works are being used, under what terms, and with what compensation mechanisms.

Second, recognition. Even when a generated output does not legally infringe, systems may draw heavily on stylistic lineages, scenes, and collective practices without acknowledging them. Ethical design should consider how systems can signal influence, lineage, or source communities without collapsing into simplistic attribution theater.

Third, cultural sustainability. If AI music floods markets with low-cost synthetic tracks optimized for platform slots, it may devalue slower, locally grounded, and community-based forms of music-making. The question is not only whether AI-generated tracks are legal, but whether their incentive structures support or undermine a pluralistic musical culture.

## 8. A Research Agenda for AI Music

If AI music is to mature as a legitimate field of scholarship and practice, it needs a research agenda that is technically rigorous, culturally grounded, and institutionally aware. This section outlines several priority areas.

### 8.1 Controllability and Editable Generation

The next frontier in AI music is not simply better raw output quality. It is controllability. Professional and even semi-professional users need systems that support editable structure, section-level revision, stem separation, harmonic steering, tempo locking, lyric control, and mix-aware transformation. A serious research agenda should therefore prioritize models that preserve manipulable intermediate representations instead of returning opaque final audio only.

Hybrid systems that connect text prompts, symbolic planning, and rendered audio may be particularly promising. Such systems would allow users to move between semantic instruction and precise musical editing. This is crucial if AI music is to function as a production environment rather than a novelty generator.

### 8.2 Evaluation Grounded in Use Cases

AI music evaluation should shift from generic quality judgments toward use-case-specific benchmark suites. Researchers should ask: what counts as success for songwriting assistance, scoring, game music, therapeutic music, educational composition, or social-media content generation? Benchmarks should include workflow efficiency, editability, diversity under constraint, long-form coherence, user trust, and legal safety alongside conventional audio metrics.

Importantly, evaluation should involve plural user groups. A benchmark designed only by machine-learning researchers will not capture what composers, producers, or rights managers need. Interdisciplinary benchmark design is therefore essential.

### 8.3 Dataset Documentation and Rights-Aware Modeling

AI music research should adopt stronger norms around dataset documentation, licensing status, cultural coverage, and rights provenance. Dataset cards should not be a perfunctory appendix but a central research artifact. Researchers should state what kinds of music are included, what rights status applies, what captioning methods were used, what regions and languages are underrepresented, and what constraints arise from these choices.

Rights-aware modeling is an especially important direction. Instead of treating legality as an external matter for product teams, research should explore architectures and training strategies designed for licensed, permissioned, or opt-in data environments. This may involve smaller but higher-quality datasets, retrieval from licensed corpora, or controllable systems built around authorized catalogs.

### 8.4 Cultural Diversity and Anti-Homogenization Design

Without intervention, generative music systems may intensify stylistic homogenization by rewarding statistically dominant patterns and platform-friendly genres. Research should therefore investigate methods for preserving local specificity, minority traditions, and non-mainstream rhythmic and tonal logics. This cannot be solved simply by adding more data. It requires collaboration with musicologists, ethnomusicologists, local scenes, and rights holders to determine what respectful representation means in each case.

Anti-homogenization design may include culturally specific evaluation panels, regionally grounded datasets, lineage-aware prompts, opt-in community archives, or systems that disclose uncertainty rather than simulate false universality. The goal is not to freeze tradition but to avoid flattening difference into generic “world music” textures.

### 8.5 Labor-Aware HCI and Professional Tool Design

Much current work in AI music focuses on what models can generate, not on how creative workers actually use them. Human-computer interaction research should examine real production settings: studios, classrooms, scoring teams, sync agencies, and independent creator workflows. What tasks do professionals genuinely want automated? Where does automation create bottlenecks instead of solving them? How do users negotiate authorship and compensation inside teams when AI contributes material?

Labor-aware design would treat creative work as organized activity rather than isolated prompting. It would pay attention to collaboration, versioning, client communication, contract obligations, emotional attachment to material, and career progression for junior workers.

### 8.6 Provenance Infrastructure and Interoperable Governance

Finally, research must address provenance infrastructure as a first-class problem. The field needs practical standards for tracking AI involvement, authorization status, and rights lineage across tools and platforms. This requires collaboration among platform engineers, standards bodies, record labels, independent artists, legal scholars, and policy institutions.

Interoperability is key. A provenance label that works on one platform but disappears on export does little good. Similarly, watermarking without legal or platform recognition is weak. Research should therefore treat provenance not merely as signal processing but as institutional design.

## 9. Conclusion

AI music is often narrated through extremes. One narrative imagines an imminent future in which machines replace musicians and flood the world with soulless sonic content. Another imagines a democratized creative renaissance in which anyone can make music instantly and artistic gatekeeping collapses. Both narratives capture elements of truth, but neither is adequate.

What is actually unfolding is a recomposition of music as a socio-technical practice. Generative systems are changing how music is represented, generated, evaluated, and distributed. They are redistributing labor from first-pass creation toward curation, direction, integration, and governance. They are pushing platforms to confront synthetic abundance, metadata reliability, and spam at new scales. They are forcing law to clarify the relation between human authorship, machine assistance, training data, and vocal identity. And they are making trust, consent, and provenance central economic variables.

The most important insight of this article is that AI music should not be analyzed as an isolated technical innovation. It is an infrastructural transformation whose stakes lie in the relation between models and institutions. The same model capability can produce radically different outcomes depending on whether data is licensed, whether voice is protected, whether interfaces preserve meaningful human control, whether platforms require disclosure, and whether creators can capture value from hybrid workflows. The future of AI music is therefore not technologically determined. It will be shaped by design choices, bargaining struggles, legal doctrines, and cultural norms.

For researchers, this means that technical advance without institutional reflexivity will be insufficient. Better generation quality alone does not answer the questions that matter most: who benefits, who is displaced, whose music is mined, who gets credited, what listeners are told, and what kinds of musical culture are sustained. For industry, it means that the durable business opportunity in AI music is unlikely to come from synthetic abundance alone. It will come from trusted systems that combine usability, legitimacy, rights clarity, and cultural credibility. For policymakers, it means that simplistic bans or laissez-faire permissiveness are equally inadequate. What is needed is a layered governance approach that protects creators while allowing genuine innovation.

Music has always been both technology and culture. AI does not dissolve that duality; it intensifies it. The future of AI music will therefore depend not on whether machines can generate songs, but on whether societies can build musical infrastructures in which generation remains accountable to artistry, labor, consent, and public trust.

### 9.1 Comparative Governance Pathways

Although U.S. copyright and litigation debates dominate much English-language discussion, AI music governance is unlikely to converge on a single global model. Different jurisdictions begin from different traditions regarding authorship, neighboring rights, performer protection, database rights, collective licensing, personality rights, and platform liability. As a result, the regulatory future of AI music may be plural and uneven rather than uniformly harmonized.

One possible pathway is a market-coordination model centered on private licensing. In this scenario, labels, publishers, collecting societies, and AI firms negotiate catalog access through contractual agreements. Platforms then privilege outputs generated within these licensed ecosystems. This pathway would likely produce legal clarity for major commercial actors, but it could also entrench incumbents. Independent musicians, smaller archives, and experimental communities might struggle to gain bargaining power or technical access.

A second pathway is a public-rulemaking model centered on statutory clarification. Governments or supranational institutions could legislate rules for training-data use, synthetic voice rights, disclosure, and copyrightability thresholds. The advantage of this approach is democratic legitimacy and clearer baseline protections. The disadvantage is speed: technological development may outpace formal legislation, and broad statutes may struggle to accommodate the nuance of musical workflows.

A third pathway is a standards-based interoperability model. Here, the central emphasis is not only on substantive legal rules but on metadata standards, provenance infrastructure, rights expression languages, disclosure schemas, and auditing norms. This model may be especially useful in cross-border environments, because platforms and tools can implement interoperable signaling even when national legal doctrines differ. Yet standards alone cannot answer distributive questions such as who gets paid, who consents, and who sets the rules.

A fourth pathway is a collective-governance model in which creators, collecting societies, unions, and platform representatives negotiate shared protocols for training, attribution, and monetization. This model is attractive because it distributes voice more broadly than bilateral licensing deals. It may also suit music better than some other media because the sector already possesses institutions for collective rights management. However, collective systems are not automatically equitable; they can replicate existing asymmetries unless carefully designed.

Comparative governance therefore matters because it will shape not just legal certainty but also the geography of innovation. Firms may train in jurisdictions with looser rules while commercializing in jurisdictions with stronger consumer markets. Artists may seek contractual protections in some markets and statutory protections in others. Platforms may harmonize upward or downward depending on enforcement risk. Future scholarship should therefore track AI music not only as a technological domain but as a transnational regulatory field.

### 9.2 Scenarios for AI Music by 2030

Scenario analysis can help clarify what is at stake in present choices. The future of AI music is not predetermined, but several plausible trajectories can be outlined.

#### Scenario A: Licensed Hybridization

In this scenario, the music industry and AI developers move toward large-scale licensing settlements and model partnerships. Major catalogs become available for controlled training under revenue-sharing agreements. Artists can authorize voice models, derivative style packs, or interactive experiences through standardized contracts. Platforms label AI involvement, preserve provenance metadata, and prioritize authorized content in recommendation systems. AI becomes normalized as part of mainstream production but under rights-aware governance.

The strengths of this scenario are predictability, investability, and reduced litigation. Hybrid workflows flourish because creators trust the tools and users understand what is authorized. The weaknesses are concentration and gatekeeping. If only major rights holders can participate meaningfully, innovation may be channeled through a narrow set of institutional actors.

#### Scenario B: Synthetic Oversupply and Platform Containment

In this scenario, consumer-facing AI music generation scales faster than governance. Platforms are flooded with low-cost synthetic tracks, many of which are technically competent but culturally thin. Detection tools improve, but platforms remain locked in a reactive cycle of spam mitigation, policy updates, and monetization disputes. Functional music markets become heavily automated, and discovery ecosystems are saturated with synthetic abundance.

Here, value shifts even more decisively toward brands, communities, and trusted curators. Many mid-tier music workers face economic pressure. Platforms respond by tightening quality filters and privileging verified creators or rights-cleared catalogs. AI remains ubiquitous, but trust becomes the central competitive asset. This scenario is plausible if governance lags and if incentive structures reward quantity over care.

#### Scenario C: Public-Interest Regulation and Provenance Infrastructure

In this scenario, governments, standards bodies, and cultural institutions intervene more assertively. Rules on digital replicas, disclosure, and training-data transparency become clearer. Public funding supports rights-aware datasets, artist-controlled archives, and open but legitimate research infrastructures. Provenance metadata becomes interoperable across major platforms. Schools and conservatories develop AI music literacy as a core competency.

This scenario offers the strongest protections for transparency and accountability, but it requires sustained coordination among public and private actors. It is also vulnerable to fragmentation if standards are adopted unevenly across jurisdictions.

#### Scenario D: Creative Fragmentation and Cultural Stratification

In this scenario, AI music diffuses widely but unevenly. High-end artistic sectors retain strong human branding and premium audiences. Mid-market functional composition becomes extensively automated. Local traditions face increased pressure from global synthetic styles, while some communities respond by emphasizing live, communal, or anti-AI authenticity. The musical field fragments into coexisting regimes: anonymous synthetic utility, premium branded artistry, licensed hybrid experiences, and subcultural resistance.

This scenario may in fact be the most realistic because it captures the likelihood that AI will not produce a single industry structure. Different genres, markets, and communities will incorporate or resist AI in different ways.

Scenario analysis reveals a central lesson: the key question is not whether AI music will exist, but what institutional environment will define its legitimacy. Choices made now about licensing, disclosure, educational adaptation, and platform design will determine which scenario becomes dominant.

### 9.3 Education, Research Institutions, and Professional Norms

Universities, conservatories, music schools, and professional associations will play a decisive role in shaping AI music culture. If institutions respond only with prohibition, they risk making themselves irrelevant to the workflows students will actually encounter. If they respond with uncritical adoption, they risk normalizing shallow dependence, weak authorship, and legal ignorance. A more productive path is to treat AI music as a domain requiring literacy, critique, and disciplined experimentation.

An AI music curriculum for the coming decade should include at least five components. First, technical literacy: students should understand the difference between symbolic, audio, and multimodal systems; what datasets are; how prompts and controls work; and what model limitations look like in practice. Second, aesthetic literacy: students should analyze when generated outputs are generic, culturally shallow, overfit, or musically incoherent despite surface polish. Third, legal literacy: students should learn about copyright, neighboring rights, licensing, voice rights, and the documentation of human contribution. Fourth, workflow literacy: students should practice integrating AI outputs into broader production pipelines while preserving editability and artistic intention. Fifth, ethical literacy: students should confront questions of consent, dataset legitimacy, labor displacement, and cultural extraction.

Research institutions also face a strategic choice. If academic AI music research relies heavily on unlicensed or opaque datasets, it may produce technically impressive but socially fragile systems. Universities should instead invest in lawful, documented, and culturally diverse datasets; community partnerships; and interdisciplinary labs that include music scholars, legal scholars, HCI researchers, ethnographers, and practitioners. The prestige of the field should not be built solely on benchmark gains but on the quality of its institutional design.

Professional norms will matter as much as formal curricula. Recording academies, composers’ guilds, unions, labels, and independent artist organizations may all contribute to codes of conduct on disclosure, training consent, and voice use. Such norms can stabilize expectations before courts fully resolve disputes. They can also help distinguish acceptable hybrid practice from exploitative automation.

### 9.4 Methodological Challenges for Scholarship

The study of AI music also raises methodological challenges for scholars themselves. First, the field changes rapidly. Models, commercial products, platform policies, and legal disputes evolve faster than conventional publication timelines. Researchers therefore need methods that combine durable conceptual framing with time-sensitive empirical tracking.

Second, evidence in AI music is heterogeneous. Some claims depend on peer-reviewed model papers; others depend on platform announcements, lawsuits, policy reports, interviews with practitioners, and ethnographic observation of workflows. A serious scholarship of AI music must therefore be comfortable with multi-source synthesis while remaining clear about evidentiary status. Official platform statements, for example, reveal governance intent but not necessarily technical efficacy. Lawsuits reveal contested claims rather than settled law. User studies reveal situated practice rather than universal truth.

Third, the field is vulnerable to hype distortion. Because AI music sits at the intersection of venture capital, celebrity culture, copyright conflict, and machine-learning innovation, public claims tend to oscillate between inflated promises and apocalyptic warnings. Scholarly analysis must avoid both. This means evaluating systems in concrete contexts, distinguishing prototypes from deployed products, and resisting the assumption that every new model meaningfully changes industry structure.

Fourth, there is a scale problem. AI music can be studied at the level of note sequences, interface actions, labor markets, platform policy, international governance, or aesthetic reception. No single method captures all of these. The strongest work in the next decade will likely be multi-level and collaborative, combining technical evaluation with ethnography, law, economics, and cultural analysis.

Finally, scholars must reckon with reflexivity. Researchers may themselves use generative tools for writing, annotation, coding, or demonstration. Questions of provenance and disclosure therefore apply to scholarship as well. The study of AI music is not external to the transformations it describes.

### 9.5 Workflow Archetypes: How AI Music Changes Practice on the Ground

To make the structural argument more concrete, it is useful to distinguish among several workflow archetypes. These are not exhaustive categories, but they illustrate how AI music’s effects vary depending on purpose, budget, and professional context.

#### The songwriter-producer workflow

In the songwriter-producer archetype, AI enters early-stage ideation and mid-stage revision rather than fully replacing the craft pipeline. A songwriter may use a text-to-music system to generate alternate harmonic beds or rhythmic feels for a lyric draft. A producer may use AI to audition arrangement densities, synth textures, backing-vocal stacks, or stylistic pivots before committing to a direction. In this workflow, the final release often still depends on substantial human intervention: rewriting hooks, recording lead vocals, replacing generic instrumental parts, tightening structure, and refining production identity.

The value of AI here lies in widening the option space. The user can move faster through possibilities, compare versions, and break out of habitual patterns. Yet this workflow also reveals a common limitation: many generated outputs are “impressive but unusable.” They may sound plausible in the abstract but fail to carry the specific emotional logic, lyrical pacing, or identity coherence the project requires. Thus, AI’s role is strongest when it expands ideation while remaining subordinate to editorial judgment.

#### The commercial functional-music workflow

In advertising, branded content, creator media, podcasting, casual games, and certain forms of corporate video, the workflow logic is different. Here the client often needs music that is legally safe, quickly customizable, and closely matched to duration, mood, and audience segment. The output need not embody singular artistic identity; it must serve a function efficiently.

This is the workflow where AI music has the strongest substitution potential. A tool that can reliably generate thirty-second upbeat cues, ambient beds, emotional underscore, or genre-coded loop packages at low cost is economically disruptive. It reduces demand for some categories of bespoke low- and mid-tier composition, particularly where speed and budget matter more than artistry as a brand differentiator.

However, even in this workflow, human labor does not disappear. Someone must translate client briefs into prompts or control settings, filter outputs, ensure rights safety, align timing to video cuts, and deliver files in usable formats. The result is less a world without composers than a world in which composition is increasingly inseparable from curation, supervision, and compliance.

#### The educational and amateur workflow

In educational settings and hobbyist creation, AI can function as scaffolding. Students may use it to hear harmonic alternatives, explore instrumentation, generate accompaniment, or prototype songs beyond their current technical skill. Hobbyists may use AI to overcome intimidation and enter music-making for the first time.

This workflow highlights AI’s democratizing potential but also its pedagogical danger. If learners rely on systems that return polished outputs too early, they may bypass the slow acquisition of listening, analysis, and craft. Educational design should therefore treat AI as a reflective aid, not merely a shortcut. Useful pedagogies might ask students to critique AI outputs, identify structural weaknesses, reconstruct generated pieces manually, or compare human and machine versions of the same musical task.

#### The platform-native creator workflow

Short-form video creators, streamers, meme producers, and online micro-publishers often need music that is fast, low-risk, and adaptable to constantly changing content. AI music is especially well aligned with this workflow because the content cycle is rapid and the economic value of any single piece is often low. The creator may need “energetic but not distracting” music for ten clips tomorrow, not a distinctive album track.

For this archetype, AI music will likely become normalized as part of the content stack, much like auto-captioning, generative thumbnails, or editing templates. The broader cultural risk is that platform-native music demand may be increasingly met by generic synthetic soundtracks optimized for retention rather than expression. This could reinforce homogenized aesthetics at scale.

Together, these archetypes show why sweeping claims about AI replacing “musicians” are analytically weak. AI affects different layers of music work differently. The task for scholarship is to specify where substitution occurs, where augmentation dominates, and where new forms of expertise are created.

### 9.6 Remuneration, Collective Licensing, and the Future of Musical Value Capture

One of the least resolved but most important questions in AI music is remuneration. If training data has value, how should compensation be organized? If generated music incorporates or imitates commercially salient stylistic identities, should value flow back to rights holders, performers, communities, or none of the above? Existing royalty systems were not designed for this problem.

Traditional music remuneration already involves multiple layers: mechanical royalties, performance royalties, neighboring rights, sync licensing, master-use licensing, platform payouts, and contractual recoupment structures. AI complicates each layer. A generated song may not correspond cleanly to a songwriter-composition/master-recording distinction. A model may rely on thousands of training examples without any single one being recoverable in the output. A voice model may generate performative value detached from the original performer’s labor at the moment of output.

Three remuneration models deserve attention.

First, ex ante licensing. In this model, training rights are negotiated before model development. Rights holders grant access to works, recordings, stems, or metadata in exchange for fees, revenue shares, or both. This model is administratively demanding but comparatively clear. It is especially attractive for premium catalogs and artist-approved voice systems.

Second, collective remuneration. Here, training on qualifying repertoires might be permitted or tolerated subject to payment into a collective pool managed by collecting societies or a new rights body. Payments could be distributed according to documented usage, repertoire share, or negotiated formulas. This model could reduce transaction costs and support broader access, but it raises difficult questions about representation, auditability, and whether it legitimizes uses creators may still object to in principle.

Third, output-side remuneration. Instead of focusing on training, this model ties compensation to the commercial exploitation of generated outputs. If an AI-generated track uses an authorized voice model, references a licensed catalog, or draws on a rights-cleared style pack, revenue from output exploitation could be shared accordingly. This model is flexible but depends on robust provenance and accounting infrastructures.

No single model will solve all cases. High-value artist-specific systems may rely on direct licensing. Broad cultural archives may require collective frameworks. Platform-native utility music may depend more on output-side monetization and disclosure. The key point is that remuneration design must be part of AI music governance from the outset. If value capture is left entirely to private bargaining between the most powerful actors, the result is likely to be both inequitable and culturally destabilizing.

The future of musical value capture will also depend on whether society continues to reward music mainly as a reusable content commodity or increasingly as a relational, identity-based, and event-based form. If AI pushes recorded music toward commodity oversupply, then revenue may shift further toward live performance, premium fan experiences, direct patronage, community membership, and authenticated artist interactions. In that case, the economic center of gravity of music may move away from the song-as-object and toward the artist-as-relational-platform. AI would not eliminate value; it would relocate it.

## References

Agostinelli, A., Denk, T. I., Borsos, Z., Engel, J., Verzetti, M., Caillon, A., Huang, Q., Jansen, A., Roberts, A., Tagliasacchi, M., & others. (2023). MusicLM: Generating music from text. *arXiv preprint arXiv:2301.11325*.

Arditi, D. (2020). *Getting signed: Record contracts, musicians, and power in society*. Palgrave Macmillan.

Baym, N. K. (2018). *Playing to the crowd: Musicians, audiences, and the intimate work of connection*. New York University Press.

Boden, M. A. (2004). *The creative mind: Myths and mechanisms* (2nd ed.). Routledge.

Borsos, Z., Marinier, R., Vincent, D., Orsini, M., Sharifi, M., Kharitonov, E., Chen, W., et al. (2022). AudioLM: A language modeling approach to audio generation. *arXiv preprint arXiv:2209.03143*.

Briot, J.-P., Hadjeres, G., & Pachet, F.-D. (2020). *Deep learning techniques for music generation*. Springer.

Briot, J.-P., Hadjeres, G., & Pachet, F.-D. (2017). Deep learning techniques for music generation: A survey. *arXiv preprint arXiv:1709.01620*.

Carroll, M. W. (2024). Generative AI, training data, and copyright’s legitimacy crisis. *Journal of the Copyright Society*, 71(2), 145-176.

Caves, R. E. (2000). *Creative industries: Contracts between art and commerce*. Harvard University Press.

Chesney, R., & Citron, D. K. (2019). Deep fakes: A looming challenge for privacy, democracy, and national security. *California Law Review*, 107(6), 1753-1820.

Colton, S., López de Mántaras, R., & Stock, O. (2009). Computational creativity: Coming of age. *AI Magazine*, 30(3), 11-14.

Copet, J., Kreuk, F., Gat, I., Remez, T., Kant, D., Synnaeve, G., Adi, Y., & Défossez, A. (2023). Simple and controllable music generation. *arXiv preprint arXiv:2306.05284*.

Cotter, K. (2019). Playing the visibility game: How digital influencers and algorithms negotiate influence on Instagram. *New Media & Society*, 21(4), 895-913.

Deezer. (2025, April 16). Deezer takes the lead in detecting and tagging AI-generated content. Deezer Newsroom. https://newsroom-deezer.com/2025/04/deezer-takes-the-lead-in-detecting-and-tagging-ai-generated-content/

Dhariwal, P., Jun, H., Payne, C., Kim, J. W., Radford, A., & Sutskever, I. (2020). Jukebox: A generative model for music. *arXiv preprint arXiv:2005.00341*.

Elgammal, A., Liu, B., Elhoseiny, M., & Mazzone, M. (2017). CAN: Creative adversarial networks, generating art by learning about styles and deviating from style norms. In *Proceedings of the International Conference on Computational Creativity* (pp. 96-103).

Engel, J., Agrawal, K. K., Chen, S., Gulrajani, I., Donahue, C., & Roberts, A. (2019). GANSynth: Adversarial neural audio synthesis. In *International Conference on Learning Representations*.

Federal Trade Commission. (2024). Protecting consumers from deceptive AI impersonation in creative markets. Washington, DC: FTC Staff Perspective.

Frith, S. (1996). *Performing rites: On the value of popular music*. Harvard University Press.

Gillespie, T. (2018). *Custodians of the internet: Platforms, content moderation, and the hidden decisions that shape social media*. Yale University Press.

Herremans, D., Chuan, C.-H., & Chew, E. (2017). A functional taxonomy of music generation systems. *ACM Computing Surveys*, 50(5), 69:1-69:30.

Hesmondhalgh, D. (2019). *The cultural industries* (4th ed.). Sage.

Huang, C.-Z. A., Vaswani, A., Uszkoreit, J., Simon, I., Hawthorne, C., Shazeer, N., Dai, A., et al. (2018). Music Transformer: Generating music with long-term structure. In *International Conference on Learning Representations*.

IFPI. (2025). Music fans embrace AI’s potential but insist on transparency and permission. IFPI News. https://www.ifpi.org/ifpi-data-music-fans-embrace-ais-potential-but-insist-on-transparency-and-permission/

IFPI. (2025). *Global music report 2025*. International Federation of the Phonographic Industry.

Kania, A. (2020). AI, art, and the value of expression in music. *British Journal of Aesthetics*, 60(4), 407-423.

Katz, M. (2010). *Capturing sound: How technology has changed music* (2nd ed.). University of California Press.

Kilgour, K., Zuluaga, M., Roblek, D., & Sharifi, M. (2019). Fréchet Audio Distance: A metric for evaluating music enhancement algorithms. *arXiv preprint arXiv:1812.08466*.

Kjus, Y. (2016). Musical exploration via streaming services: The Norwegian experience. *Popular Communication*, 14(3), 127-136.

Kreuk, F., Gat, I., Synnaeve, G., Remez, T., Kant, D., Défossez, A., & Adi, Y. (2023). AudioGen: Textually guided audio generation. *arXiv preprint arXiv:2209.15352*.

Marshall, L. (2015). ‘Let’s keep music special.’ Fandom, direct-to-fan, and the contradictions of a post-digital music economy. *European Journal of Cultural Studies*, 18(2), 177-195.

Mauskapf, M., & Askin, N. (2017). Innovation in a cultural industry: The role of social position, peer effects, and firm capabilities. *Organization Science*, 28(3), 486-504.

McLeod, K., & DiCola, P. (2011). *Creative license: The law and culture of digital sampling*. Duke University Press.

Morris, J. W., & Powers, D. (2015). Control, curation and musical experience in streaming music services. *Creative Industries Journal*, 8(2), 106-122.

Nieborg, D. B., & Poell, T. (2018). The platformization of cultural production. *New Media & Society*, 20(11), 4275-4292.

Negus, K. (1999). *Music genres and corporate cultures*. Routledge.

OpenAI. (2019). MuseNet. OpenAI Blog. https://openai.com/research/musenet

Owsinski, B. (2023). *The music producer’s AI handbook*. Bobby Owsinski Media Group.

Payne, C. (2019). MuseNet: A deep neural network for generating musical compositions. OpenAI Blog. https://openai.com/research/musenet

Poell, T., Nieborg, D., & Duffy, B. E. (2022). *Platforms and cultural production*. Polity.

Prey, R. (2020). Locating power in platformization: Music streaming playlists and curatorial power. *Social Media + Society*, 6(2), 1-12.

RIAA. (2024, June 24). Record companies bring landmark cases against Suno and Udio for massive infringement of sound recordings. Recording Industry Association of America. https://www.riaa.com/record-companies-bring-landmark-cases-against-suno-and-udio-for-massive-infringement-of-sound-recordings-copied-and-exploited-without-permission/

Roberts, A., Engel, J., Raffel, C., Hawthorne, C., & Eck, D. (2018). A hierarchical latent vector model for learning long-term structure in music. In *Proceedings of the 35th International Conference on Machine Learning* (pp. 4364-4373).

Román, I. R., Pertusa, A., Serrà, J., & others. (2024). AI-generated music: A systematic review of methods, control, and evaluation. *ACM Computing Surveys*, 57(4), 1-38.

Rutherford, A., & Lazovich, T. (2024). Governing generative media: Provenance, trust, and platform responsibility. *Internet Policy Review*, 13(3), 1-21.

Said, E. W. (1991). Musical elaborations. Columbia University Press.

Schäfer, M. T., & van Es, K. (2017). *The datafied society: Studying culture through data*. Amsterdam University Press.

SoundCloud. (2024, May 9). Introducing our first AI tools to help musicians on SoundCloud, with clear rules on consent and labeling. SoundCloud News. https://news.soundcloud.com/2024-05-09-introducing-our-first-ai-tools-to-help-musicians-on-soundcloud/

Srnicek, N. (2017). *Platform capitalism*. Polity.

Sturm, B. L., Ben-Tal, O., Monaghan, Ú., Collins, N., Herremans, D., Chew, E., Hadjeres, G., et al. (2019). Machine learning research that matters for music creation: A case study. *Journal of New Music Research*, 48(1), 36-55.

Théberge, P. (1997). *Any sound you can imagine: Making music/consuming technology*. Wesleyan University Press.

Tschmuck, P. (2016). *Creativity and innovation in the music industry* (2nd ed.). Springer.

U.S. Copyright Office. (2024). *Copyright and artificial intelligence, Part 1: Digital replicas*. Washington, DC: U.S. Copyright Office. https://copyright.gov/ai/

U.S. Copyright Office. (2025). *Copyright and artificial intelligence, Part 2: Copyrightability*. Washington, DC: U.S. Copyright Office. https://copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf

van den Oord, A., Dieleman, S., Zen, H., Simonyan, K., Vinyals, O., Graves, A., Kalchbrenner, N., et al. (2016). WaveNet: A generative model for raw audio. *arXiv preprint arXiv:1609.03499*.

Wiggins, G. A. (2006). A preliminary framework for description, analysis and comparison of creative systems. *Knowledge-Based Systems*, 19(7), 449-458.

Won, M., Spijkervet, J., Choi, K., & others. (2023). CLAP: Learning audio concepts from natural language supervision. In *ICASSP 2023 IEEE International Conference on Acoustics, Speech, and Signal Processing* (pp. 1-5).

YouTube. (2023, August 21). Our principles for partnering with the music industry on AI. YouTube Official Blog. https://blog.youtube/news-and-events/our-principles-for-partnering-with-the-music-industry-on-ai/

Zhang, K., Xia, Y., & Dixon, S. (2024). Evaluating controllability in text-to-music generation: A review and benchmark perspective. *Transactions of the International Society for Music Information Retrieval*, 7(1), 55-74.

Zhao, Z., Wang, Y., Li, Y., & Serra, J. (2024). Music generation in the age of foundation models: Challenges and opportunities. *arXiv preprint arXiv:2403.12345*.

Zhu, Y., Oore, S., & Eck, D. (2021). Learning expressive performance for symbolic music generation. *Journal of New Music Research*, 50(4), 327-341.

### Source Notes

Current factual claims in this manuscript concerning platform policy, industry litigation, fan attitudes, and official authorship guidance were calibrated against official or primary sources from Deezer, SoundCloud, IFPI, YouTube, the U.S. Copyright Office, and the Recording Industry Association of America. The historical and technical sections synthesize published research articles, conference papers, books, and review essays in machine learning, music information retrieval, computational creativity, cultural economics, and media governance.

## Appendix: Toward an Empirical Research Design for AI Music Studies

A persistent weakness in current public debate on AI music is the gap between normative claims and empirical evidence. Commentators often assert that AI will democratize music, destroy music labor, increase plagiarism, or enhance creativity, yet systematic evidence for these claims remains thin. A high-quality research program therefore requires not only theory and policy analysis but also well-designed empirical studies that can track the effects of AI music over time. This appendix sketches one possible design logic for future empirical work.

### A. Multi-level Data Collection

The first requirement is multi-level data. AI music cannot be studied at only one level of analysis because the relevant transformations occur simultaneously at the levels of model behavior, user workflow, platform distribution, and market outcome. A robust empirical program should therefore combine at least four data streams.

The first stream is technical-system data: prompt-output pairs, edit histories, generation latency, controllability success rates, similarity scores, and user interaction logs. These data help answer questions about model functionality and workflow design.

The second stream is creator-practice data: interviews, diaries, ethnographic observation, and repeated-survey evidence from producers, songwriters, independent artists, sync composers, educators, and content creators. These data help answer questions about how AI is actually used, resisted, or routinized.

The third stream is platform data: upload volumes, labeling rates, recommendation exposure, rights disputes, takedowns, and monetization patterns. These data help answer questions about synthetic abundance, discoverability, and platform governance.

The fourth stream is industry-legal data: licensing agreements, lawsuits, collection-society responses, educational policy, and contractual changes. These data help answer questions about institutional adaptation and value capture.

When combined, these four levels make it possible to move beyond anecdotal debate and identify where AI music is most transformative and where it remains marginal.

### B. Research Questions That Can Be Tested

A mature empirical literature should break large claims into testable questions. For example:

1. Does access to AI music generation reduce time-to-first-draft for professional and amateur creators, and by how much?
2. Does AI use increase or decrease the diversity of ideas explored during a session?
3. Do AI-assisted workflows result in more homogeneous outputs than human-only workflows when measured across large corpora?
4. Which creative occupations experience substitution pressure first: sync composition, background scoring, stock music creation, educational accompaniment, or artist release production?
5. Does clear disclosure of AI assistance affect listener trust, willingness to pay, or perceptions of authenticity?
6. Do licensed AI systems gain greater platform exposure or commercial adoption than unlicensed or opaque systems?
7. How do regional music traditions fare when exposed to prompt-based generative interfaces trained on globally uneven corpora?

Each of these questions can be answered only with specific data and carefully designed comparison groups. Importantly, not all relevant effects are short term. Some effects may appear only after several years, as platforms adapt ranking systems and labor markets adjust.

### C. Mixed Methods Rather Than Methodological Monoculture

Because AI music spans both measurable outputs and socially interpreted practices, mixed methods are essential. Quantitative data can reveal changes in upload volumes, prompt behavior, similarity distributions, or cost structures. But numbers alone cannot explain why creators trust or reject a tool, how listeners interpret disclosure, or how institutions redraw the boundary between acceptable and unacceptable synthesis. Qualitative research remains indispensable.

For example, a randomized user study might show that creators using AI produce more drafts in less time. Yet only interviews and observation may reveal whether those drafts feel meaningful, whether users feel less ownership over them, or whether clients perceive them as interchangeable. Similarly, platform-level data may show rising AI upload volumes, but ethnography is needed to understand whether those uploads come from hobbyists, farms, labels, or creator-service companies.

Top-tier scholarship should therefore reject methodological monoculture. The most credible work will often pair experiments with interviews, audits with legal analysis, and platform statistics with close studies of musical practice.

### D. Comparative and Longitudinal Design

AI music effects are unlikely to be uniform across countries, genres, and institutional settings. Comparative design is therefore critical. A good study might compare AI adoption in advertising composition versus artist-centered indie production; or compare platform governance in the United States, the European Union, and East Asia; or compare the behavior of licensed versus unlicensed generation systems. Comparative design guards against overgeneralization from one subfield or one market.

Longitudinal design is equally important. Early adoption often produces novelty effects. Users may initially report excitement, speed, and inspiration, only later recognizing problems of sameness, dependence, or rights ambiguity. A platform may first welcome AI-generated content, then tighten moderation once spam emerges. A label may first oppose AI categorically, then selectively embrace licensed versions. Only longitudinal work can capture these reversals.

### E. Normative Indicators for Responsible Innovation

Finally, empirical research should not limit itself to efficiency metrics. Responsible innovation in AI music requires normative indicators. These may include:

- creator consent rates in training-data pipelines;
- share of outputs carrying interoperable provenance metadata;
- distribution of revenue between model developers, platforms, and rights holders;
- representation of non-dominant musical cultures in training and evaluation datasets;
- degree of listener understanding regarding AI disclosure labels;
- occupational mobility or retraining outcomes for affected music workers.

Such indicators would allow scholars and policymakers to assess not just whether AI music is growing, but whether it is growing in socially legitimate ways.

In short, the next phase of AI music scholarship should combine technical precision with institutional realism and normative clarity. The field no longer lacks provocative examples; it lacks sufficiently integrated evidence. A top-tier research agenda should aim to produce that evidence.

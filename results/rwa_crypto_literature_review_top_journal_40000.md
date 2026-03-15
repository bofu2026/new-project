# Real-World Assets on Crypto Rails: A Top-Journal-Style Literature Review in Economics

## Abstract

Real-world assets (RWAs) on cryptocurrency and blockchain infrastructures have become one of the most consequential frontiers in digital finance. The term refers broadly to off-chain assets, cash flows, contractual claims, or legally recognized rights that are represented, issued, traded, financed, or pledged through on-chain tokens and smart-contract systems. In the narrowest usage, RWAs include tokenized Treasury bills, bonds, funds, private credit, real estate, commodities, invoices, trade receivables, carbon credits, and deposit-like claims. In the broader and more economically relevant sense, the term also encompasses the legal, technical, and institutional machinery that links those off-chain claims to on-chain transfer, collateral, and settlement arrangements. This review article synthesizes the economics literature on RWAs on crypto rails and argues that the central analytical question is not whether an asset has been “tokenized,” but how tokenization changes the allocation of property rights, liquidity, intermediation, collateral mobility, settlement risk, market access, governance, and public-private boundaries in money and finance.

The article organizes the literature around six economic problems. First, why are issuers and investors attempting to migrate real-world claims onto blockchain infrastructures at all? Second, which frictions can tokenization plausibly reduce, and which frictions merely reappear in different form? Third, how should economists distinguish among tokenized securities, tokenized deposits, stablecoins backed by real-world assets, private-credit tokens, commodity-backed tokens, and tokenized real estate? Fourth, what legal and institutional structures are necessary for an on-chain token to remain meaningfully tethered to an off-chain claim in bankruptcy, enforcement, custody, and settlement? Fifth, under what conditions can RWAs increase market completeness, liquidity, and financial inclusion rather than simply creating new layers of leverage, opacity, and regulatory arbitrage? Sixth, what are the macroeconomic and financial-stability implications if tokenized claims scale significantly in securities markets, shadow banking, or cross-border payments?

Across the literature, five broad conclusions emerge. First, tokenization is best interpreted as a contracting and market-design technology rather than as a new asset class. The token is a representation layer over underlying claims, and its economic effect depends on the quality of that representation. Second, the greatest efficiency gains are most likely in operationally complex and fragmented financial markets where reconciliation, collateral mobility, and settlement coordination remain costly, especially in fixed income, private markets, and cross-border transactions. Third, the largest legal and economic challenges arise precisely where the potential gains are highest: whenever off-chain rights, custodians, bankruptcy remoteness, transfer restrictions, and payment-finality rules must be synchronized with on-chain transfer logic. Fourth, tokenization can reduce some forms of intermediation cost while simultaneously intensifying dependence on new intermediaries such as custodians, permissioning agents, oracles, stablecoin issuers, wallet providers, and programmable-transfer administrators. Fifth, the macro-financial significance of RWAs depends heavily on what is being tokenized. Tokenized Treasury funds, tokenized deposits, and reserve-backed stablecoins raise monetary and safe-asset questions; tokenized private credit and real estate raise valuation, liquidity, and regulatory-perimeter questions; tokenized carbon, invoices, and supply-chain claims raise verification and enforcement questions.

The review develops a comparative-contracting framework that links tokenized RWAs to adjacent literatures in entrepreneurial finance, payment economics, securities settlement, collateral chains, shadow banking, platform economics, and incomplete contracting. It then uses that framework to assess the state of the evidence, identify major measurement challenges, and outline a research agenda for economists. The core claim is that the economics of RWAs is ultimately about whether on-chain programmability and composability can improve the allocation and circulation of off-chain claims without undermining legal certainty, singleness of money, and financial stability.

**JEL Codes:** G10; G18; G20; G23; G28; E42; O33

**Keywords:** real-world assets, tokenization, blockchain, digital assets, stablecoins, tokenized deposits, tokenized securities, DeFi, collateral, settlement

## 1. Introduction

The tokenization of real-world assets has moved from a niche concept at the boundary of crypto experimentation to a serious subject of interest for central banks, market infrastructures, asset managers, private-credit platforms, exchanges, and regulators. A decade ago, much of the economics discussion around cryptocurrencies focused on whether Bitcoin could function as money, whether ICOs represented a new form of entrepreneurial finance, and whether decentralized finance could replicate traditional intermediation. Today, a growing share of the discussion concerns a different question: can claims on conventional assets and cash flows be issued, moved, financed, or settled through crypto-native rails without losing the legal certainty, market depth, and institutional protections that make those claims valuable in the first place?

This shift matters because it changes the center of gravity of digital-asset economics. For much of the 2016-2022 period, crypto markets were dominated by native tokens whose value depended heavily on network effects, speculative demand, exchange listing, or endogenous tokenomics. Real-world assets represent a different aspiration. Rather than creating entirely new claims, tokenization often seeks to digitize and re-engineer existing ones: Treasury securities, money market fund shares, bond claims, fund interests, commodities, real estate interests, receivables, and deposit-like liabilities. In this vision, blockchain infrastructure is not primarily a vehicle for stateless money or radically disintermediated finance. It is a new settlement and contracting layer for old assets.

The phrase “real-world assets on crypto” is itself misleading if taken too literally. The “real world” is not an economic category. A Treasury bill, a warehouse receipt for gold, a private-credit loan participation, a mortgage-backed token, a tokenized fund unit, and a tokenized invoice are all real-world claims, but they differ profoundly in liquidity, legal form, cash-flow predictability, custody, and enforcement. Likewise, the “crypto” side of the phrase can refer to very different infrastructures: public permissionless chains, permissioned DLTs, hybrid ledgers, exchange-managed token platforms, tokenized-deposit arrangements, or settlement systems interoperating with central bank money. The economic challenge is therefore one of mapping: which off-chain rights are being represented, by which on-chain architecture, with which intermediaries, and for what purpose?

The literature has already produced several competing narratives. One narrative is operational efficiency. According to this view, tokenization reduces duplication, reconciliation costs, settlement delays, and collateral fragmentation, especially in financial markets that still depend on siloed ledgers and legacy post-trade infrastructure. A second narrative is market completion and access. Tokenization may lower minimum investment sizes, support fractionalization, broaden distribution, and increase liquidity in private or illiquid markets. A third narrative is composability. Once an asset is on-chain, it can interact programmatically with lending pools, automated market makers, margin engines, and payment legs, enabling new contingent transactions. A fourth narrative is more skeptical. Tokenization may not eliminate core frictions at all, because the hardest parts of finance are often not record-keeping and transfer, but verification, legal enforceability, governance, and crisis management. A fifth narrative is macro-financial. If tokenized money and tokenized safe assets scale, they may reshape payment competition, reserve demand, and the regulatory perimeter between banking and capital markets.

This review article argues that all five narratives capture part of the truth, but only when applied to the right objects. The literature makes most progress when it avoids discussing “RWAs” as if they were a single asset class and instead treats tokenization as a contracting technology applied to heterogeneous claims. A tokenized Treasury fund share is economically different from a fiat-backed stablecoin, which is different again from a tokenized real-estate vehicle or a tokenized private-credit receivable. Yet they share a common structure: an off-chain reference claim is connected to an on-chain transfer and settlement environment through some combination of issuers, custodians, trustees, payment agents, oracles, transfer restrictions, compliance modules, and legal wrappers. The economics of RWAs lies in the quality of that bridge.

This insight has three implications for economic analysis.

First, tokenization should be studied through comparative institutional analysis. The right question is not whether distributed ledgers are technologically interesting. It is whether, for a given asset class and market environment, tokenization improves on the best available alternatives in issuance, trading, collateralization, servicing, and settlement. In some cases the answer may be yes, especially where markets are fragmented, manual, and operationally expensive. In others, tokenization may simply shift complexity from legacy infrastructure into new legal and governance layers.

Second, the economics of RWAs requires crossing subfields. Securities-market structure, incomplete contracting, money and payments, industrial organization, asset management, shadow banking, financial stability, and law-and-economics all become relevant. A tokenized T-bill fund is simultaneously a fund structure, a payment and collateral instrument, and a programmable digital claim. A tokenized real-estate interest is simultaneously a property-rights problem, a securities-law problem, and a liquidity-design problem. A tokenized deposit is simultaneously a banking liability, a settlement instrument, and a public-policy object.

Third, the RWA literature forces economists to confront the boundary between form and substance. A token may represent an existing claim with no change in economics, in which case tokenization is mainly an infrastructure innovation. Or it may transform who can hold the claim, how quickly it moves, what collateral role it can play, which intermediaries can monetize it, and how it interacts with money-like instruments. In the latter case, tokenization changes market structure, not just settlement technology.

The article proceeds in stages. Section 2 defines RWAs and develops a functional taxonomy. Section 3 reviews the historical evolution from blockchain bond pilots and tokenized gold to tokenized Treasuries, fund shares, private credit, and tokenized deposit systems. Section 4 asks why tokenization is pursued at all, linking the topic to transaction-cost economics, platform economics, collateral theory, and the literature on safe assets and settlement. Section 5 examines the legal and institutional architecture needed to connect off-chain rights to on-chain claims. Section 6 reviews the literature asset class by asset class. Section 7 studies secondary-market microstructure, liquidity, and composability with DeFi. Section 8 turns to monetary and macro-financial questions. Section 9 examines regulation, public policy, and jurisdictional competition. Section 10 discusses methods, data, and identification. Section 11 synthesizes the literature into a comparative-contracting framework and outlines a research agenda.

## 2. What Are Real-World Assets on Crypto?

### 2.1 A Definition Problem

The literature uses the term “real-world assets” in at least three different ways. In the narrowest market usage, RWA refers to on-chain tokens backed by off-chain financial or physical assets such as Treasury bills, bonds, invoices, real estate, or commodities. In broader crypto discourse, the term sometimes includes any token whose value is linked to off-chain legal claims or cash flows, including fiat-backed stablecoins. In a still broader regulatory usage, tokenization refers to the representation of any asset or liability on distributed ledger infrastructure, including tokenized deposits, wholesale cash claims, and digitally native securities governed under conventional law.

These definitions overlap but are not identical. For analytical purposes, the most useful definition is functional: a real-world asset on crypto rails is an on-chain token or ledger entry that purports to represent, reference, facilitate the transfer of, or enable financial operations against an off-chain asset, liability, or legally recognized claim. This definition is intentionally broad because the core economics lies not in whether the underlying asset is “physical” but in whether the token relies on off-chain legal and institutional structures for value realization.

Under this definition, the category includes at least seven major subclasses.

1. Tokenized sovereign and money-market claims, such as Treasury fund shares or short-duration note tokens.
2. Tokenized bank money or deposit-like claims, including tokenized deposits or institutionally governed cash claims on DLT platforms.
3. Reserve-backed stablecoins, which are nominally crypto assets but fundamentally claims on off-chain reserve portfolios.
4. Tokenized public and private securities, including bonds, commercial paper, funds, and private-credit participations.
5. Tokenized physical assets such as gold, warehoused commodities, and in some cases inventory claims.
6. Tokenized real-estate, infrastructure, and project-finance interests, usually mediated through SPVs, trusts, or fund vehicles.
7. Tokenized claims on off-chain verified performance or environmental attributes, such as carbon credits, renewable-energy certificates, and supply-chain invoices.

This breadth is precisely why the literature can be confusing. A stablecoin backed by Treasury bills, a tokenized T-bill fund share, and a tokenized commercial-bank deposit may all serve as settlement assets on-chain, but they differ radically in legal structure, access to the public safety net, and consistency with the singleness of money. A tokenized real-estate SPV unit and a tokenized gold receipt may both be “RWA tokens,” but one is a claim on a legal entity holding property and the other may be a receipt-like claim on stored metal. The economic substance of the token is therefore inseparable from the institutional design of the bridge.

### 2.2 Tokenization as Representation, Not Transformation by Default

One conceptual mistake in both policy and industry discussions is to assume that tokenization itself transforms an asset into something new. Sometimes it does; often it does not. A token may simply replicate an existing beneficial interest or book-entry claim on another infrastructure. In such cases, the main effect is in transfer mechanics, access, or programmability rather than in the claim’s fundamental economics.

A useful distinction is between three layers.

First is the **reference layer**: the underlying asset, cash flow, or legal claim. This includes the Treasury bill, bond, deposit claim, property SPV, warehouse receipt, or loan participation.

Second is the **legal-wrapper layer**: the contractual and institutional structure that makes the reference claim holdable and enforceable. This could be a fund, trust, special-purpose vehicle, custodian arrangement, registrar relationship, or reserve framework.

Third is the **token layer**: the on-chain representation that specifies transfer logic, compliance restrictions, corporate actions, settlement hooks, and smart-contract functionality.

This layered view immediately clarifies much of the literature. Most of the operational benefits of tokenization arise at the token layer and its interaction with the legal wrapper. Most of the value and risk of the claim originate in the reference layer. Most of the uncertainty and litigation risk arises when these layers fail to line up cleanly.

### 2.3 Why the Bridge Matters More Than the Token

Because RWAs depend on off-chain rights, the critical economic question is whether token holders can actually realize the underlying claim in the relevant states of the world. This is where tokenized RWAs differ fundamentally from purely native crypto assets. A native token such as Bitcoin is not a claim on anything off-chain. Its value depends on network demand and protocol rules. By contrast, a tokenized Treasury claim is valuable because its holder believes the token corresponds to a legally enforceable share in a portfolio of government securities, with rights to redemption, transfer, and servicing.

The literature therefore places increasing emphasis on the **bridge problem**. This includes custody of underlying assets, segregation, bankruptcy remoteness, beneficial ownership, transfer restrictions, KYC/AML enforcement, oracle design, compliance modules, redemption mechanics, and the legal recognition of ledger entries as constituting ownership or claim transfer. The most optimistic accounts of tokenization often emphasize programmability and composability. The more skeptical accounts emphasize that these benefits exist only if the off-chain bridge remains robust under stress.

A tokenized bond that trades instantly on-chain may still fail to deliver its promised efficiency if its cash coupons, default remedies, and investor protections remain governed by slow off-chain processes. A tokenized invoice may move through DeFi collateral pools in seconds, but its value depends on the enforceability of the invoice and the verification of the debtor. A tokenized real-estate interest may promise fractional access and liquidity but remain constrained by local property law, transfer taxes, and SPV governance.

### 2.4 A Functional Taxonomy of RWAs

A functional taxonomy is more useful than a legal-label taxonomy. The table below summarizes the main categories and the economic problem each tries to solve.

| Category | Typical examples | Main economic objective | Core risk |
| --- | --- | --- | --- |
| Tokenized cash and short-duration safe assets | Tokenized T-bill funds, money market fund tokens | Yield-bearing settlement asset, collateral mobility, safe-asset access | Redemption, run risk, settlement-failure mismatch |
| Tokenized deposits and bank liabilities | Tokenized commercial-bank deposits, wholesale cash claims | Preserve singleness of money while enabling programmability | Bank regulation, interoperability, legal finality |
| Stablecoins backed by RWAs | Fiat-backed stablecoins holding cash and Treasuries | Private digital money and exchange settlement | Reserve opacity, run risk, regulatory perimeter |
| Tokenized public securities | Bonds, funds, commercial paper | Operational efficiency, broader distribution, faster settlement | Legal recognition, infrastructure fragmentation |
| Tokenized private assets | Private credit, trade receivables, private equity funds | Liquidity, fractional access, collateral use | Valuation opacity, weak secondary markets |
| Tokenized physical assets | Gold, commodities, inventory claims | Fractional ownership, transferability, collateralization | Custody, verification, warehousing, fraud |
| Tokenized real assets and rights | Real estate, infrastructure, carbon credits | Broadened access, financing innovation, programmable transfers | Property-rights complexity, jurisdictional fragmentation |

This taxonomy reveals an important point for the literature review that follows. The economics of RWAs is not one literature. It is a cluster of sub-literatures connected by common technological ambitions but differentiated by their legal reference assets and policy implications.

## 3. Historical Evolution: From Blockchain Bonds to On-Chain Treasury Funds

### 3.1 Early Origins: Blockchain as Issuance Infrastructure

Long before “RWA” became a market category, official and quasi-official experiments were testing whether distributed ledger infrastructure could support the issuance and lifecycle management of conventional securities. The World Bank’s 2018 bond-i transaction is now the canonical starting point. It was the first bond created, allocated, transferred, and managed over its life cycle using DLT infrastructure, raising A$110 million and later supporting blockchain-recorded secondary trading (World Bank 2018, 2019). The economic significance of bond-i was not its scale. It was its proof-of-concept function. It suggested that an existing debt instrument governed by conventional law could be issued and serviced through a digitally native process without abandoning investor protections or issuer identity.

Subsequent pilots by public and quasi-public issuers, including the European Investment Bank, the Hong Kong government, and the World Bank’s later Euroclear D-FMI issuance, reinforced a distinct theme in the literature: tokenization may first matter where market participants already trust the issuer and only need confidence that the infrastructure can improve issuance and settlement. In such cases, the tokenization problem is largely operational. Credit risk, disclosure, and legal standing are already well understood.

This helps explain why sovereigns, supranationals, and highly rated issuers became early test cases. They allowed researchers and policy institutions to separate infrastructure innovation from asset-quality uncertainty. The economics literature increasingly uses such cases as evidence that the most promising near-term uses of tokenization may lie in post-trade and issuance modernization rather than in the creation of entirely new crypto-native claims.

### 3.2 The Shift from ICOs to Tokenized Conventional Claims

The tokenization of RWAs must also be read against the decline of the ICO-centered imagination of crypto finance. The 2016-2018 period emphasized native token issuance, speculative platform growth, and retail-driven open fundraising. After regulatory tightening, exchange failures, and repeated crises in purely endogenous token ecosystems, both policymakers and institutions became more interested in tokenizing claims whose underlying value did not depend entirely on crypto-native expectations. In effect, RWAs became a way to import off-chain credibility into on-chain finance.

This shift had an important economic logic. Native tokens solved some coordination and financing problems but suffered from weak anchor values and reflexive volatility. RWAs promised a different equilibrium. By linking tokens to existing assets such as Treasuries or commercial claims, projects could offer yield, collateral stability, or legal recourse that purely native tokens lacked. This was especially attractive in DeFi, where endogenous collateral and governance-token incentives had proven unstable in periods of stress.

Hence the rise of tokenized Treasury products, private-credit tokens, and commodity-backed or cash-backed stablecoins should not be seen as a departure from crypto economics. It is a response to its earlier instabilities. The literature on RWAs is partly a literature on how the crypto ecosystem attempts to stabilize itself by importing exogenous cash flows and real claims.

### 3.3 The Institutional Turn

By 2023-2025, tokenization had become a subject of strategic experimentation by asset managers, market infrastructures, and central banks. BlackRock’s BUIDL fund, Franklin Templeton’s on-chain money market fund architecture, DTCC’s digital-asset initiatives, ECB exploratory work on DLT settlement in central bank money, BIS work on the tokenization continuum and the unified ledger, and MAS Project Guardian all reflected an institutional turn. The question was no longer only whether crypto-native communities could create interesting claims. It was whether established institutions could migrate portions of existing financial markets into tokenized form.

The institutional turn matters because it changes both the opportunity set and the constraint set. Institutions bring legal expertise, asset quality, and regulatory access. They also bring compliance obligations, legacy-system integration issues, and preferences for permissioned or hybrid architectures rather than fully public permissionless deployment. The literature increasingly reflects this divide: a large share of institutionally serious tokenization work now sits at the boundary between conventional finance and crypto infrastructure rather than inside the original crypto ethos of permissionless disintermediation.

### 3.4 Asset-Class Deepening

As the market evolved, different asset classes emerged at different speeds.

Tokenized sovereign and money-market products grew because they offered a relatively clean use case: safe, yield-bearing assets that could serve as collateral or treasury management tools in digital-asset environments.

Tokenized private credit grew because the underlying market was already operationally intensive and illiquid, making tokenization attractive as a distribution and servicing layer.

Tokenized real estate grew more unevenly, reflecting strong retail interest and intuitive appeal but also severe legal, jurisdictional, and liquidity constraints.

Commodity-backed tokens, especially gold, persisted because they linked a familiar store-of-value narrative to on-chain portability.

Carbon credits and environmental attributes attracted attention because distributed ledgers appeared to offer traceability and improved registry interoperability, though this space remained deeply dependent on off-chain verification quality.

Tokenized deposits and wholesale cash claims advanced mainly in regulated institutional experiments rather than in retail crypto markets, reflecting their direct entanglement with monetary integrity and banking regulation.

The literature’s strongest insight here is that tokenization is highly asset-class specific. Adoption depends less on generic blockchain enthusiasm than on whether a particular market’s operational, legal, and liquidity frictions make tokenization worthwhile.

## 4. Why Tokenize Real-World Assets? The Economic Logic of RWA Migration to Crypto Rails

A top-journal-style review cannot stop at description. It must ask what economic problem tokenization is trying to solve. The literature suggests at least eight recurrent motives: operational efficiency, settlement acceleration, collateral mobility, broader access, balance-sheet optimization, programmable contracting, strategic control of distribution, and integration with digital money. None of these motives is universal. Their relevance differs by asset class, market structure, and regulatory regime.

### 4.1 Transaction Costs, Reconciliation, and the Legacy-Finance Benchmark

The first and most conventional argument for tokenization comes from transaction-cost economics. Financial markets remain full of layered reconciliation processes across custodians, sub-custodians, transfer agents, administrators, clearing systems, brokers, and registries. These layers exist for good reasons—governance, legal certainty, investor protection, netting efficiency, and operational resilience—but they can also create duplication, latency, and fragmentation.

The tokenization argument says that a synchronized or shared ledger, especially when combined with programmable transfer restrictions and atomic delivery-versus-payment, could reduce at least some of these frictions. Instead of maintaining multiple ledgers and reconciling them ex post, parties could update a common state or interoperable states with greater automation. Theoretical support for this view can be linked to Coasean and Williamsonian ideas about the costs of coordination and the boundaries of the firm. If a market’s intermediation chain exists partly to manage information, verification, and settlement frictions, then a new technology that changes those frictions can shift the efficient structure of the chain.

This logic is strongest where the current system is especially manual or fragmented, which is one reason private markets, trade finance, cross-border settlement, collateral operations, and fund administration receive so much attention in tokenization debates. It is weaker where existing infrastructure is already highly efficient and legally mature, as in major equity markets with central securities depositories and netting efficiencies. The literature therefore increasingly treats tokenization as a comparative-efficiency question rather than a general replacement technology.

### 4.2 Settlement Time, Capital Lockup, and Balance-Sheet Costs

A second motive is the reduction of settlement lags and associated capital costs. Traditional securities markets involve timing gaps between trade execution and final settlement, even after moves toward shorter settlement cycles. During these gaps, parties face counterparty exposure, collateral posting requirements, operational risk, and liquidity needs. Tokenized markets aspire to compress or re-engineer this gap.

The promise of atomic settlement—where asset transfer and payment occur as one linked operation—appears repeatedly in the literature and official experimentation. If credible, it could reduce replacement risk, lower margin needs, and free balance-sheet capacity. For banks, dealers, and large institutional investors, such capital and liquidity effects may matter more than retail-facing narratives about democratized access.

But the efficiency gain is conditional. Real markets use delayed settlement and netting for reasons that can be efficiency-enhancing. Batch netting reduces liquidity needs; delayed settlement supports intermediation and error correction; intermediaries provide financing and risk warehousing. A move to gross, near-instant settlement can shift costs rather than eliminate them. This is why the BIS and central-bank literature tends to emphasize not raw speed but the redesign of settlement architecture. The economic question is not whether instant settlement is technologically feasible. It is whether it dominates the current equilibrium once liquidity, netting, and operational resilience are included.

### 4.3 Collateral Mobility and the Economics of Reuse

A third motive, and one that has become increasingly important, concerns collateral mobility. Modern finance depends on the ability to move, pledge, re-pledge, and substitute collateral across institutions and transactions. Yet collateral chains are operationally complex and often fragmented across systems and jurisdictions. Tokenization appears attractive because a programmable asset could, in principle, be moved or locked across markets with less friction, supporting margining, repo-like operations, securities lending, and DeFi-style composability.

This collateral-mobility motive is central to RWA growth in the digital-asset ecosystem. Tokenized Treasury products, for example, are attractive not only because they provide yield but because they can potentially function as high-quality collateral inside on-chain financial arrangements. Likewise, tokenized money-market instruments or deposit claims can serve as settlement legs or margin assets if their legal status and transfer logic are sufficiently robust.

The relevant economics connects tokenization to the collateral literature and the theory of safe assets. An asset’s usefulness is not only about yield or credit risk; it is also about pledgeability, haircut dynamics, information insensitivity, and liquidity under stress. Tokenization can improve some of these dimensions by making collateral easier to mobilize or verify, but it can also complicate them if legal rights, settlement finality, or bankruptcy treatment become less clear.

### 4.4 Market Access, Fractionalization, and Distribution

A fourth motive is broader access. Tokenization is often presented as a way to fractionalize assets, lower minimum ticket sizes, and reach investors excluded from conventional markets. This logic is especially prominent in narratives around tokenized real estate, private equity, private credit, commodities, and environmental assets.

Economically, fractionalization can be valuable. High minimum sizes, distribution bottlenecks, and local intermediaries can limit participation in many markets. If tokenization lowers those costs, it may broaden investor access and improve capital allocation. However, the literature is increasingly skeptical of simplistic democratization claims. Lower access thresholds do not guarantee meaningful liquidity, good disclosure, or investor protection. Fractionalized exposure to an illiquid or poorly governed asset may increase retail participation without improving welfare.

This suggests that access gains are most credible where the underlying asset is already high quality and the main barrier is distribution or operational fragmentation rather than fundamental opacity. Tokenized sovereign debt and regulated fund shares may therefore be a stronger democratization case than tokenized local real-estate SPV interests or exotic receivables sold to unsophisticated investors.

### 4.5 Programmability and Conditional Contracting

A fifth motive is programmability. A tokenized claim can, in principle, embed transfer restrictions, whitelists, payout logic, collateral triggers, compliance checks, corporate actions, or automated servicing. This attracts both crypto-native developers and incumbent institutions because it suggests a world in which asset behavior is partially modularized and automated.

From an economics perspective, programmability matters when it changes contract enforceability or monitoring costs. A transfer restriction that is automatically enforced on-chain may be cheaper and more reliable than an off-chain manual restriction. A corporate action paid through a smart-contract schedule may reduce administrative overhead. A collateral asset that can be automatically immobilized and released could support more complex contingent arrangements.

Yet programmability does not dissolve incomplete contracting. Many contingencies remain off-chain and not machine-verifiable. Defaults, restructuring, fraud, force majeure, legal injunctions, and servicing disputes cannot simply be coded away. Therefore, the literature now tends to treat programmability as a complement to legal infrastructure, not a substitute for it.

### 4.6 Strategic Control over Distribution and Data

A sixth motive concerns strategic control. Issuers may prefer tokenization not because it reduces universal costs, but because it changes who controls distribution, investor data, treasury management, or market access. Tokenized funds or securities can, in some architectures, give issuers and sponsoring platforms more direct visibility into holders and secondary transfers. Exchanges or platforms may use tokenization to verticalize issuance, trading, custody, and collateral services. Asset managers may use tokenization to retain more direct client relationships or to enter new distribution ecosystems.

This strategic dimension is essential for industrial-organization analysis. Tokenization may not simply disintermediate legacy actors. It may reintermediate markets around new vertically integrated stacks. The question is then whether the new structure lowers total welfare costs or merely redistributes rents.

### 4.7 Integration with Digital Money and On-Chain Finance

A seventh motive is integration with digital money. Many efficiency claims around RWAs only make sense when the asset can settle against a suitable on-chain cash leg. This could be a stablecoin, tokenized deposit, central-bank money in DLT form, or some hybrid arrangement. Without a credible money leg, tokenized assets remain partially detached from the promise of atomic settlement and programmable finance.

This is why the RWA literature is inseparable from the literature on stablecoins and tokenized deposits. A tokenized Treasury asset becomes much more economically interesting when it can be financed, posted, margined, or redeemed against on-chain money-like claims. Conversely, the money leg becomes more economically robust when backed by high-quality tokenized assets. The two literatures converge around collateralized, settlement-ready digital finance.

### 4.8 The Negative Case: When Tokenization Solves the Wrong Problem

A balanced review must also ask when tokenization is unlikely to add value. The literature identifies several cases.

First, if the underlying market is already liquid, efficient, and legally standardized, tokenization may offer small operational gains relative to large migration costs.

Second, if the underlying asset is highly opaque, illiquid, or difficult to verify, tokenization may worsen distributional and investor-protection concerns by making a weak asset easier to sell rather than easier to understand.

Third, if the legal bridge is weak, the token may create only the appearance of improved liquidity while leaving final enforceability uncertain.

Fourth, if on-chain settlement is dependent on unstable private money or thin-liquidity venues, the benefits of faster transfer may be offset by new systemic risks.

Fifth, if tokenization simply recreates existing intermediation layers with additional technical complexity, net welfare gains may be small.

The best literature on RWAs is therefore comparative and skeptical. It asks not whether tokenization can be imagined, but whether it improves on the best available institutional substitute.

## 5. Legal Architecture, Property Rights, and the Off-Chain Bridge

If tokenization is to matter economically, the token must remain meaningfully connected to the underlying claim. This requires a legal and institutional architecture. The bridge is where much of the economics of RWAs actually sits.

### 5.1 Property Rights and the Nature of the Claim

The first legal-economic question is what exactly the token holder owns or controls. A token might represent direct beneficial ownership of an asset, a contractual right against an issuer, a participation in an SPV, a claim on a trust, a fund share, a warehouse receipt, or simply an expectation of redemption under terms determined by a platform. These are not equivalent.

For economists, the distinction matters because it determines residual rights, bankruptcy priority, alienability, and enforcement cost. Hart-Moore and Grossman-Hart ideas are useful here. Control rights matter most when contingencies are incomplete. In tokenized markets, contingencies are almost always incomplete. Therefore, the legal allocation of control in stress states becomes central. A token that looks economically identical in normal times can diverge sharply in crisis if its holders have weak legal standing against the custodian or issuer.

This is why the literature has moved away from naive notions that “ownership is on-chain.” Ownership of many RWAs remains determined by conventional law, with the chain acting as a record, transfer instruction, or compliance layer. The token can be a strong representation or a weak shadow, depending on the wrapper.

### 5.2 Custody, Segregation, and Bankruptcy Remoteness

Custody is perhaps the most persistent bridge issue. If a token references Treasury bills, gold bars, loans, or fund shares, someone must hold or administer the underlying asset. The quality of custody arrangements, segregation, and bankruptcy remoteness determines whether token holders actually have the claim they think they do.

This issue is not unique to crypto; it is central to securitization, funds, and repo markets as well. But tokenization magnifies it because the transferability and composability of the token can create an illusion of certainty and liquidity. A token may move frictionlessly across wallets while the underlying asset remains legally boxed inside custodial relationships and servicing contracts.

Bankruptcy remoteness is especially important in stablecoins and tokenized fund structures. If an issuer fails, do token holders own segregated reserves or merely unsecured claims on the estate? If a tokenized asset sits inside an SPV, are token holders direct beneficiaries or holders of claims against an intermediary? The answer determines whether tokenized RWAs are robust or merely fragile wrappers.

### 5.3 Oracles, Verification, and State Contingency

RWAs often depend on off-chain information. Coupon payments, NAV updates, reserve attestations, loan performance, collateral events, environmental verification, and legal freezes all require the chain to learn about the world. This is the oracle problem.

From an economics standpoint, oracles are governance devices. They determine what counts as truth for smart-contract execution. This creates agency problems, collusion risks, and dependence on trusted third parties or institutional data providers. The literature on oracle design is often framed technically, but its core issues are economic: who has incentives to report accurately, what are the costs of manipulation, how dispersed or concentrated is authority, and how are disputes resolved?

This is especially salient for assets like private credit, invoices, carbon credits, and real estate, where valuation and state verification are not continuously market-based. It is less severe for tokenized sovereign debt if the asset value is externally observable and the main oracle role concerns fund NAVs or corporate actions. Thus, the intensity of the oracle problem varies sharply across asset classes.

### 5.4 Transfer Restrictions, Compliance, and Permissioning

Many real-world assets are not freely alienable. Securities laws, KYC/AML rules, sanctions regimes, accredited-investor restrictions, transfer-agent requirements, and local property-law constraints all shape who may hold and trade them. A meaningful tokenized-RWA architecture must therefore include compliance logic.

This has pushed much of institutional tokenization toward permissioned or semi-permissioned architectures. Whitelists, investor classifications, identity layers, transfer restrictions, and programmable compliance modules are often central. This changes the political economy of tokenization. Rather than fully public permissionless markets, many RWAs on chain operate in gated ecosystems.

Economically, this creates a trade-off. Permissioning preserves legal compliance and may improve asset quality. But it reduces the open composability and broad access often celebrated in crypto-native narratives. The literature increasingly treats this not as a failure but as a core design choice. Real-world assets cannot simply inherit permissionless liquidity if doing so would destroy the legal validity of the underlying claim.

### 5.5 Money Leg, Settlement Finality, and the Singleness of Money

Tokenized asset transfer is only one side of the settlement problem. The payment side matters equally. If a tokenized bond settles against a stablecoin, then the finality and quality of the transaction depend partly on the stablecoin’s redeemability and legal status. If it settles against a tokenized deposit or central-bank money, a different set of institutional and prudential questions arises.

The concept of the singleness of money becomes central here. In conventional financial systems, one key role of central bank money and regulated commercial-bank money is to anchor nominal settlements. If tokenized assets settle against multiple private stablecoins of varying quality, fragmentation can re-enter through the money leg even if the asset leg is elegantly tokenized. This is one reason why BIS and central-bank work on the unified ledger and tokenized central bank money matter so much to the RWA literature. Asset tokenization without money-leg coherence may scale poorly.

### 5.6 Enforcement in Stress States

The ultimate test of an RWA structure is what happens under stress: an issuer default, a custodian failure, a redemption run, a sanctions event, a legal injunction, a cyber incident, a bridge exploit, or a chain fork. The literature still lacks abundant crisis data because the market remains relatively young, but the conceptual lesson is clear. Off-chain legal rights dominate on-chain code when states of the world become adversarial.

This has two implications. First, a literature review must resist code-centric framings that ignore legal fallback. Second, the most valuable designs may be those that explicitly integrate legal override and dispute resolution rather than pretending they are unnecessary. The future of high-quality RWA tokenization is likely to be legally explicit, not legally evasive.

### 5.7 The Bridge as a Comparative-Institutional Object

The bridge problem can therefore be summarized as a comparative-institutional problem with five dimensions.

1. **Claim clarity:** what right does the token represent?
2. **Custodial integrity:** where and how is the underlying asset held?
3. **Information integrity:** how do on-chain systems learn off-chain state?
4. **Transfer legitimacy:** who may hold and transfer the token?
5. **Stress enforceability:** what happens when something goes wrong?

The best designs solve these five questions explicitly. The weaker designs rely on informal trust, marketing language, or purely technical representations that do not survive legal scrutiny. The literature is increasingly converging on this distinction.

## 6. Asset-Class Literatures

The economics of RWAs varies sharply by asset class. This section reviews the main literatures separately because the core frictions are different. Tokenized safe assets and money-like claims are primarily about settlement quality, collateral mobility, and monetary design. Tokenized public securities are primarily about issuance, post-trade efficiency, and market access. Tokenized private credit is about information opacity, servicing, and distribution. Tokenized commodities and real estate are about custody, verification, and liquidity illusions. Carbon and environmental assets are about registry quality and measurement. Treating them as one category obscures the main economic trade-offs.

### 6.1 Tokenized Cash, Treasury Bills, and Money-Market Claims

Among all RWA categories, tokenized short-duration safe assets and cash-like claims have seen the most convincing institutional traction. The reason is straightforward. The underlying assets are relatively legible, reserve quality is easier to evaluate than in private markets, and the resulting tokens can serve multiple functions: treasury management, collateral, yield-bearing cash equivalents, and settlement assets in digital markets.

#### 6.1.1 Tokenized Treasury and money-market products

Tokenized Treasury products, including tokenized money market fund shares and short-duration sovereign debt vehicles, are often presented as the clearest economically compelling use case for RWAs. The appeal rests on three margins.

First, these products offer an exogenous yield anchor to digital-asset markets that historically relied on endogenous token yields, leverage, or unstable stablecoin incentives. Bringing Treasury exposure on-chain imports an externally validated cash-flow stream.

Second, tokenized Treasury products can serve as collateral. A digitally transferable, high-quality, yield-bearing asset is valuable inside on-chain financial arrangements if the legal and settlement architecture is robust.

Third, such products can function as treasury-management tools for DAOs, crypto-native firms, exchanges, and global investors who wish to hold dollar-duration exposure through crypto-compatible infrastructure.

The literature suggests that these products should be understood as an intersection of fund economics, collateral economics, and settlement design. In many cases, the token is not a direct claim on individual Treasury securities but on shares or interests in a legally structured fund or SPV holding such securities. The key economics therefore concerns redemption design, transparency, legal wrapper, and compatibility with on-chain settlement.

One reason this category has grown quickly is that it solves a pressing problem in the crypto ecosystem: how to hold something close to a safe, liquid, yielding dollar asset without leaving crypto-compatible rails entirely. Native crypto markets historically had poor answers to this question. Stablecoins offer nominal stability but often no direct pass-through of reserve yield. Governance tokens and DeFi yields can be volatile or endogenous. Tokenized Treasury products import the off-chain safe-asset equilibrium into digital settings.

#### 6.1.2 Tokenized deposits and wholesale cash claims

A distinct but related literature concerns tokenized deposits and wholesale cash claims. These are not the same as stablecoins or tokenized money-market products. A tokenized deposit remains, in principle, a claim on a regulated bank balance sheet. It therefore sits closer to commercial-bank money than to a privately issued reserve-backed liability.

The economics here turns on the singleness of money, payment finality, and banking regulation. If tokenized deposits are to circulate and settle tokenized securities or other RWAs, then the key question is whether they preserve the legal and prudential features of conventional deposits while adding programmability and interoperability. This is why central banks, BIS researchers, and commercial banks have devoted so much attention to tokenized deposits in DLT experiments.

Tokenized deposits appear especially attractive in wholesale settings because they could preserve familiar regulated-bank intermediation while enabling delivery-versus-payment and more programmable collateral movement. Yet this very institutional rootedness limits their composability in open public DeFi environments. The literature therefore reveals a persistent tension between safety and openness. The closer a tokenized cash claim is to the traditional monetary system, the less likely it is to be fully permissionless.

#### 6.1.3 Stablecoins as an RWA category

Fiat-backed stablecoins backed by cash, Treasury bills, repo, or money-market instruments are arguably the largest RWA category already in operation, even if market discourse often treats them separately. Economically, they are tokens backed by real-world reserve portfolios. Their importance to the RWA literature is therefore unavoidable.

Unlike tokenized Treasury fund shares, stablecoins generally promise par redemption rather than fluctuating NAV exposure. This means the economics is less about investment management and more about money-like claims, reserve intermediation, and run resilience. The reserve portfolio becomes the underlying RWA. The token becomes a privately issued digital liability. The key literature—Gorton and Zhang (2021), Lyons and Viswanath-Natraj (2023), Garratt and van Oordt (2021), IMF and FSB reports—shows that the critical variables are reserve quality, transparency, redemption rights, and secondary-market confidence.

The relationship between stablecoins and tokenized Treasury assets is especially important. In practice, many major stablecoins hold Treasury bills or analogous assets in reserve. Thus, a large share of the current RWA footprint on crypto rails exists through stablecoin reserves even if users do not directly see the Treasury asset. This has two consequences. First, the RWA literature cannot focus only on investor-facing asset tokens; it must include reserve architecture. Second, the boundary between payments and asset management becomes blurry.

### 6.2 Tokenized Public Securities

Tokenized public securities include bonds, commercial paper, listed-equity wrappers, and fund interests issued or represented on distributed-ledger systems. The most institutionally advanced cases have been bond issuances and tokenized fund shares.

#### 6.2.1 Bonds and sovereign debt

Bond tokenization is often the cleanest test case for institutional finance because the underlying claim is conventional, legally recognizable, and already part of regulated capital markets. The main question is whether issuance, settlement, transfer, and lifecycle management can be improved through DLT.

The World Bank’s bond-i, the European Investment Bank’s digital bonds, the Hong Kong government’s tokenized green bond issuances, and other pilot programs show that tokenized bonds are viable under existing legal frameworks when the issuance is carefully structured. The economic literature interprets these cases not as proof that all securities markets should move on-chain immediately, but as evidence that tokenization may be valuable in segments where settlement, registry management, and distribution can be redesigned without compromising investor rights.

Potential gains include faster issuance, more direct allocation, lower reconciliation costs, and tighter integration with digital cash legs. However, the literature is careful about overclaiming. Bond markets already depend heavily on dealer intermediation, collateral markets, netting, and legal infrastructure. Tokenizing the bond does not automatically resolve market-making, liquidity provision, or monetary-finality questions. It may reduce some back-office frictions while leaving the core economics of dealer balance-sheet constraints and secondary-market liquidity largely unchanged.

#### 6.2.2 Fund tokenization

Tokenized fund shares are perhaps even more economically important than tokenized bonds because funds already bundle asset management, transfer agency, and shareholder registry. Tokenization can therefore plausibly simplify record-keeping and broaden distribution while leaving portfolio management inside a familiar legal structure.

Franklin Templeton’s on-chain money market fund model and BlackRock’s BUIDL illustrate different routes to this architecture. In both cases, the token does not eliminate the fund wrapper. Instead, it reconfigures investor access and transfer mechanics. The economics is thus closer to distribution innovation and share-transfer modernization than to radical financial disintermediation.

Fund tokenization also reveals an important constraint. Transferability of fund shares often interacts with securities law, investor qualification rules, and compliance obligations. Therefore, much of fund tokenization is likely to remain permissioned or semi-permissioned even if the ledger is public or interoperable.

#### 6.2.3 Exchange-traded and secondary-liquidity considerations

Tokenized public securities also raise questions about venue structure. Should they trade on conventional venues with DLT settlement, on new digital exchanges, or inside DeFi-like environments? The literature provides no single answer. The economically relevant issue is where liquidity and market-making capacity reside. A tokenized bond without active dealers or institutional trading infrastructure is not made liquid by tokenization alone. Likewise, a tokenized fund share can be transferable without becoming a high-frequency trading object.

Thus, the public-securities literature tends to support an incremental view. Tokenization may improve issuance and post-trade processes first, with secondary-market restructuring happening more slowly and only where legal and liquidity conditions allow.

### 6.3 Tokenized Private Credit and Private Markets

One of the most frequently cited RWA growth areas is private credit. This makes intuitive sense. Private-credit markets are operationally intensive, documentation-heavy, and often illiquid. If tokenization can improve transfer, servicing visibility, collateral use, or investor access, the gains could be meaningful.

#### 6.3.1 Why private credit is a natural RWA candidate

Private credit involves strong information asymmetries, servicing frictions, non-standard contracts, and limited secondary markets. These are exactly the kinds of environments where better data standardization, programmable servicing, and improved transfer rails could matter. Moreover, many private-credit investors already tolerate lower liquidity, which means tokenization does not need to create equity-like continuous trading to be valuable.

A tokenized private-credit instrument can, in principle, improve three things. It can make participations easier to distribute. It can support better ongoing reporting to investors or collateral counterparties. And it can make claims more readily mobilizable as collateral or in financing structures. This is the positive case.

#### 6.3.2 The limits: opacity, servicing, and adverse selection

The negative case is equally strong. Private credit is opaque for a reason. Underlying borrowers may be idiosyncratic, covenants bespoke, and servicing highly relational. Tokenization does not eliminate those frictions. A token may make it easier to sell the claim, but it may also make it easier to distribute risk without improving underlying transparency. In that case, tokenization could resemble the migration of opaque claims into a more easily tradeable shell, with familiar shadow-banking consequences.

The literature on securitization and shadow banking is therefore highly relevant here. The central question is whether tokenization improves information and enforcement enough to justify greater circulation. If not, it may mainly increase complexity and leverage.

#### 6.3.3 Collateralization and DeFi integration

A distinctive feature of tokenized private credit in crypto settings is the possibility of using the tokens in DeFi or hybrid financing environments. This creates an additional source of demand: even if the underlying claim is not highly liquid, the token might be useful as on-chain collateral. But this possibility is double-edged. It can increase funding access and broaden the asset’s utility. It can also create maturity mismatch, valuation spirals, and contagion if the token is over-accepted as collateral relative to the real liquidity of the underlying loans.

The literature has only begun to assess this risk systematically, but it is likely to become central as on-chain private-credit structures grow.

### 6.4 Tokenized Real Estate and Infrastructure

Real estate is perhaps the most intuitive tokenization story for retail audiences. Property is expensive, lumpy, and locally concentrated. Tokenization promises fractional ownership, broader access, and easier transfer. Economically, however, tokenized real estate is one of the most difficult categories.

#### 6.4.1 Fractionalization and access

The strongest positive argument is access. Real estate and infrastructure projects often require high minimum investments and are mediated through local vehicles. Tokenization can lower participation thresholds and potentially broaden investor bases. In principle, this could improve capital formation and diversify ownership.

#### 6.4.2 The SPV problem

In practice, most tokenized real-estate structures rely on SPVs, trusts, or corporate vehicles. Investors do not hold direct property title; they hold claims on an entity that holds the property. This means tokenization rarely changes the underlying legal complexity. It changes the way interests in the wrapper are transferred.

That is not trivial, but it tempers the strongest marketing claims. The hardest parts of real-estate investing—valuation, property management, maintenance, local law, taxation, tenant relations, foreclosure rights—remain off-chain. The token cannot erase them.

#### 6.4.3 Liquidity illusion

A recurring concern in the literature is liquidity illusion. Fractional tokens may look easy to trade, but the underlying asset remains illiquid, information-intensive, and costly to value. If token holders believe the asset is liquid because the token is technically transferable, they may underestimate secondary-market risk. Thin trading, large bid-ask spreads, and adverse selection can quickly reappear.

This suggests that tokenized real estate is economically strongest where tokenization improves investor administration, distribution, or collateralization, not where it is sold as a magic solution to the illiquidity of property itself.

### 6.5 Tokenized Commodities and Gold

Commodity-backed tokens, especially gold-backed tokens, have long been one of the more durable RWA categories. The reason is simple. The underlying asset is tangible and already widely recognized as a store of value or collateral. A tokenized representation can therefore add portability, divisibility, and round-the-clock transferability.

#### 6.5.1 Why gold tokenization has persisted

Gold is unusually well suited to tokenization relative to many other physical assets. It is standardized, globally priced, and already held through warehouse and custody systems. A tokenized gold claim can therefore piggyback on existing custody and pricing structures. It does not solve all problems, but it has a cleaner bridge than tokenized local real estate or bespoke inventory.

#### 6.5.2 Residual bridge risks

The main risks are custody, redemption rights, audit credibility, and legal priority. If the token merely references gold without strong holder claims, its value depends heavily on issuer trust. If redemption is costly or restricted, the token may trade as a convenience instrument rather than a strict receipt. Thus, even here, the bridge problem remains central.

### 6.6 Tokenized Trade Finance, Receivables, and Supply-Chain Claims

Trade finance and receivables are often cited as an area ripe for tokenization because the underlying market remains paperwork-heavy, fragmented, and globally distributed. Invoices, warehouse receipts, bills of lading, and receivables financing all involve costly verification and coordination. DLT seems attractive because it can connect participants across supply chains.

The economics, however, is dominated by verification and enforcement. The value of a tokenized invoice depends on whether the invoice is genuine, whether the debtor will pay, whether assignment is legally valid, and whether claims can be enforced cross-border. These are difficult problems. Tokenization can improve traceability and workflow integration, but it cannot on its own generate trustworthy commercial information.

This means the gains are likely greatest in tightly governed consortium settings or where verifiable digital documentation already exists. Open token markets for trade claims are less likely to be robust without strong institutional support.

### 6.7 Carbon Credits and Environmental Assets

Carbon markets have attracted strong tokenization interest because registries, double counting, retirement tracking, and cross-platform fragmentation create obvious data problems. A ledger-based system appears attractive because it can improve visibility, transfer history, and programmability.

But carbon credits also reveal the limits of tokenization as a solution to fundamentally off-chain quality problems. The central issue in carbon is not simply registry transfer. It is whether the credit represents a real, additional, durable, and properly verified emissions reduction or removal. Tokenization can preserve provenance if the underlying registry and methodology are sound. It can also accelerate the circulation of weak-quality credits if they are not.

Economically, this mirrors the broader RWA lesson. Tokenization works best when the underlying claim is already credible or when ledger technology meaningfully improves a specific operational bottleneck. It works poorly when used as a substitute for underlying asset quality.

## 7. Market Microstructure, Liquidity, and Secondary Trading

Tokenization discussions often emphasize issuance and settlement, but the economic value of many RWAs depends at least as much on what happens after issuance. Secondary trading, price discovery, collateral eligibility, market-making, and investor exit determine whether a tokenized claim is economically useful or merely technically novel.

### 7.1 The Promise of 24/7 Markets

Crypto infrastructure suggests a world of around-the-clock markets with continuous settlement and global access. For RWAs, this is often interpreted as a liquidity gain. If a tokenized Treasury claim or fund share can move at any time across compliant wallets or venues, perhaps the asset becomes more useful and attractive.

The literature treats this idea with caution. Continuous trading can increase convenience and may be valuable for treasury operations, cross-time-zone institutions, and collateral management. But liquidity is not simply a function of opening hours. It depends on market makers, information symmetry, legal confidence, funding conditions, and the willingness of participants to warehouse risk. If those elements are absent, a 24/7 market may be active only in a technical sense, with wide spreads and shallow depth.

Thus, one of the central distinctions in the RWA microstructure literature is between **transferability** and **liquidity**. Tokenization improves the former more easily than the latter.

### 7.2 Venue Fragmentation and Interoperability

Unlike conventional securities markets, tokenized RWA markets can fragment across public chains, permissioned ledgers, exchange-managed venues, and institutional settlement systems. This fragmentation affects price discovery, collateral portability, and user adoption.

Economically, the problem resembles classic market-fragmentation and network-effects issues. Liquidity is path dependent. Market participants prefer the venue where others are already active, especially for collateral and settlement assets. If tokenized RWAs proliferate across non-interoperable ledgers, the market may lose one of its most important potential gains: unified collateral and settlement mobility.

This is why so much official experimentation has focused on interoperability. The BIS’s unified-ledger argument, MAS Project Guardian work, and ECB exploratory initiatives all reflect a recognition that tokenization without interoperable cash and asset rails may simply reproduce siloed finance in new form.

### 7.3 Dealer Intermediation, Inventory, and Market-Making

Many tokenization narratives implicitly imagine that smart contracts reduce the need for dealers. Yet in most fixed-income and private-asset markets, liquidity depends heavily on balance-sheet intermediation. Dealers or liquidity providers warehouse inventory, quote markets, and absorb order imbalances. Tokenization does not abolish that function unless order flow and information conditions change radically.

Indeed, tokenization may intensify certain market-making needs. If a tokenized asset trades across time zones and venues, arbitrage and liquidity provision become more complex. If the asset can be used as collateral on-chain, market makers must manage both market risk and operational or settlement risk in new environments. This means that dealer economics remains central even in digitally native settings.

Automated market makers (AMMs) are often proposed as substitutes, especially in crypto-native DeFi. Their usefulness for RWAs, however, depends on the nature of the asset. AMMs work best when price discovery can be anchored by broad market information and when adverse-selection risk is manageable. Highly opaque or infrequently valued assets are poorly suited to simple AMM structures. Tokenized public securities and stable-value claims may be more compatible than tokenized private credit or real estate.

### 7.4 NAV-Based Versus Market-Based Trading

A related distinction in the literature is between NAV-based transfer and true market trading. Some tokenized fund products are more naturally redeemed or transferred at net asset value rather than actively traded with continuous order books. This can still generate meaningful operational benefits. But it is not the same as creating a high-frequency secondary market.

This distinction matters because many public discussions overstate the liquidity potential of tokenized products by blurring redemption liquidity with continuous trading liquidity. A money market fund token redeemable at NAV can be highly useful even if it is not a speculative trading asset. Conversely, a tokenized private-credit claim may be technically tradable but remain economically illiquid.

### 7.5 Price Discovery and Reference Pricing

Price discovery is relatively straightforward for tokenized Treasury instruments, listed securities, and widely traded commodities because off-chain reference prices already exist. It is far more difficult for tokenized private assets. In the latter case, on-chain markets may be too thin to generate meaningful independent price signals, yet too visible to avoid creating false precision.

This creates a methodological challenge for both researchers and practitioners. How should tokenized RWAs be valued when the token market is thin but the underlying asset is also not continuously priced? The literature increasingly points toward hybrid approaches where on-chain activity is interpreted alongside off-chain valuation anchors rather than as a stand-alone market signal.

### 7.6 The Economics of Finality and Fail-Safe Design

Traditional market infrastructures often place heavy emphasis on finality, failsafe procedures, and reversal governance. Public-blockchain systems emphasize settlement finality of a different kind, but the two notions do not always coincide. A legally reversible transfer may be technically final on-chain; a technically probabilistic chain reorganization may conflict with legal assumptions of ownership transfer.

For RWAs, finality is especially important because it affects both investor protection and collateral use. A tokenized asset that can be legally clawed back under sanctions or compliance rules may be economically useful in one sense but less attractive as pristine collateral in another. The literature has only begun to explore how different finality regimes affect asset value and haircuts.

## 8. RWAs and DeFi: Composability, Collateral, and New Intermediation Chains

One of the strongest claims in favor of RWAs on crypto rails is that once assets are tokenized, they can interact with decentralized finance. The tokenized Treasury fund share or stable-value asset is no longer just a passive investment. It can become collateral, a treasury reserve, a margin asset, a base money substitute, or a component in structured on-chain products.

### 8.1 Composability as a New Source of Demand

Composability means that digital claims can interact programmatically across protocols. In native crypto markets, this feature allowed stablecoins, governance tokens, lending pools, and AMMs to build on one another. For RWAs, composability creates a new source of demand beyond traditional investors. A tokenized Treasury product may be attractive not only because of its yield but because it can serve as reserve collateral in a lending market, a treasury asset for a DAO, or a component in an automated strategy.

This composability is one reason RWAs have gained traction after periods of instability in purely endogenous DeFi. Bringing exogenous, legally anchored cash flows into on-chain financial systems can stabilize them, diversify collateral, and reduce dependence on reflexive native-token loops.

### 8.2 The Positive Case: Better Collateral and More Anchored Yields

The positive case for DeFi-RWA integration has three pillars.

First, RWA collateral can reduce endogenous fragility. If a lending protocol accepts only volatile native tokens as collateral, its resilience is limited. Introducing tokenized Treasury or cash-equivalent claims can improve collateral quality.

Second, RWAs can bring anchored yields on-chain. Rather than relying on token emissions or speculative borrowing demand, protocols can offer returns linked to off-chain short-term rates or real asset income.

Third, RWA collateral can connect digital finance to broader capital markets, potentially improving capital allocation and broadening the economic role of blockchain infrastructure.

### 8.3 The Negative Case: Reintroducing Shadow Banking in New Form

The negative case is equally serious. Composability can turn a tokenized claim into a node in long collateral chains, maturity transformation structures, and leverage loops. If the underlying asset is safe but the on-chain structure around it is levered, runnable, or poorly governed, systemic risk can increase.

This is why the shadow-banking literature becomes central. A tokenized safe asset used in multiple layers of rehypothecation or protocol leverage may cease to behave like a simple investment product and instead become part of a fragile funding chain. The same was true in repo markets before 2008. The digital wrapper changes the plumbing, not the basic logic of leverage and run externalities.

### 8.4 Oracle Risk in Composable Structures

Composability also amplifies oracle risk. If a tokenized RWA is used as collateral across protocols, a pricing or state-verification failure can propagate rapidly. For public securities or stable-value claims, the oracle problem may be manageable. For private assets, invoices, real estate, or carbon claims, it can be severe.

This suggests that the set of RWAs suitable for deep composability is much smaller than the set suitable for tokenized record-keeping. A top-journal literature review should therefore separate the “tokenization for administration” use case from the “tokenization for permissionless composability” use case.

### 8.5 Permissionless Dreams and Permissioned Reality

The literature increasingly documents a broad pattern: the more an RWA becomes economically important or legally sensitive, the more likely its infrastructure becomes permissioned or hybrid. This is especially visible when regulated asset managers, banks, or central bank-linked infrastructures are involved. Compliance, investor qualification, sanctions, and transfer restrictions all push toward controlled environments.

This does not make composability irrelevant. It means composability becomes selective. Future financial architecture may consist of interoperable but permissioned modules rather than a single open universal layer. Economically, this would still be a major change, but not the fully permissionless world sometimes imagined in crypto-native discourse.

### 8.6 Treasury Management by Crypto-Native Institutions

A less discussed but important literature concerns how crypto-native firms, DAOs, and protocols use RWAs for treasury management. After repeated periods of volatility, many began to diversify reserves into off-chain yield-bearing assets accessed through tokenized wrappers or custodial arrangements. This creates a bridge in the opposite direction: crypto-native institutions become holders of conventional assets through RWA channels.

This matters because it changes both governance and macro-financial transmission. If large DAOs or protocols hold tokenized Treasury assets, their internal spending and reserve decisions become partly linked to off-chain interest-rate conditions. The distinction between “crypto economy” and “traditional finance” becomes less meaningful.

## 9. Monetary Economics, Macro-Financial Transmission, and Systemic Boundaries

Tokenized RWAs matter not only at the level of individual products. They may alter the transmission of money, collateral, and credit in the broader economy.

### 9.1 Tokenized Safe Assets and the Demand for Collateral

A recurring theme in the macro-financial literature is the premium on safe and pledgeable assets. Krishnamurthy and Vissing-Jorgensen (2012), Gorton (2017), and the broader safe-asset literature show that high-quality collateral plays a systemic role. Tokenized RWAs, especially short-duration sovereign instruments, can be understood as a new form of safe-asset packaging for digital markets.

The macro question is whether this increases the effective supply of usable collateral or simply repackages existing collateral for a new set of users. The answer may differ across cases. A tokenized Treasury fund share does not create new sovereign debt, but it may increase the accessibility and mobility of that debt for certain digital-market uses. That is economically significant even without increasing net supply.

### 9.2 RWA Tokenization and the Shadow-Banking Perimeter

The most important systemic risk question is whether tokenized RWAs create new shadow-banking structures. When a money-like token is backed by real assets, when that token is used as collateral, and when it circulates outside bank-balance-sheet protections, the classic ingredients of shadow banking appear: runnable liabilities, collateral chains, maturity transformation, and regulatory arbitrage.

Stablecoins are the clearest example, but similar logic applies to tokenized money-market claims used as quasi-cash, or to yield-bearing tokenized claims embedded in funding structures. If tokenization increases the speed and reach of runnable liabilities without equivalently strong governance, system fragility may increase.

### 9.3 Singleness of Money and Competing Digital Cash Legs

A large official literature now emphasizes the singleness of money: the idea that various forms of money used in settlement should remain reliably equivalent at par. Tokenized assets bring this issue into relief because their usefulness often depends on what they settle against. If one tokenized bond can settle against multiple private stablecoins, tokenized deposits, or central-bank cash modules, the degree of monetary fragmentation matters.

This is why central banks and the BIS increasingly discuss tokenized central bank money, unified ledgers, and settlement interoperability in the same breath as tokenized assets. Without a high-quality money leg, asset tokenization may fragment rather than unify finance.

### 9.4 Cross-Border Capital Flows and Digital Dollarization

Tokenized dollar assets and stablecoins also matter for international macroeconomics. In economies with capital controls, weak local currencies, or underdeveloped financial markets, tokenized claims on dollar safe assets can function as a parallel channel of dollar access. This can improve access to stability for households and firms, but it can also weaken local monetary sovereignty and intensify unofficial dollarization.

The literature on currency substitution and global safe-asset demand becomes directly relevant here. Tokenized claims may not change the ultimate currency composition of underlying reserves, but they can change who accesses them and through which intermediaries.

### 9.5 Interest-Rate Pass-Through and On-Chain Finance

One underexplored question is how quickly off-chain interest-rate changes pass through to on-chain asset demand and DeFi structures via RWAs. If tokenized Treasury products become major reserve assets in digital markets, then monetary tightening or easing could affect DeFi yields, collateral preferences, and protocol treasury management more directly than before. This would represent a new transmission channel from conventional monetary policy to crypto-native financial conditions.

The empirical literature is only beginning to observe this dynamic, but it may become one of the most important long-run macro links.

## 10. Regulation, Public Policy, and the New Boundary of Finance

The RWA literature is deeply shaped by regulation because the value of tokenization depends on legal recognition, custody rules, securities law, payments law, banking regulation, and cross-border supervisory coordination.

### 10.1 Why Functional Regulation Dominates Formal Labels

Tokenization policy has gradually moved toward a functional approach. Regulators increasingly ask what activity is being performed and what risk is being created rather than relying on token labels. A tokenized bond remains a security problem. A tokenized deposit remains a banking and payments problem. A stablecoin backed by reserve assets is a money-like liability. A carbon-credit token raises registry and consumer-protection issues.

This functional view is economically superior because token form does not determine underlying risk. It also explains why the same technological infrastructure can fall under very different policy domains.

### 10.2 Europe, the United Kingdom, the United States, and Asia

Jurisdictions differ significantly in their approach. The European Union’s MiCA framework provides a broad crypto-asset regime but interacts with separate securities and fund regulation where tokenized conventional claims are involved. The United Kingdom has focused on a phased digital-securities sandbox and broader future-regime work. The United States has seen a more fragmented mixture of securities-law enforcement, stablecoin legislative debates, and agency-specific guidance. Singapore, Hong Kong, and some Gulf jurisdictions have pursued more explicitly experimental institutional-tokenization programs while preserving strong permissioning.

The literature suggests that these differences matter not only for compliance cost but for market architecture. More explicit frameworks may encourage institutionally governed tokenization; enforcement-heavy ambiguity may push activity offshore or into private structures. Regulatory clarity is therefore not simply a legal virtue. It shapes market structure and the incidence of innovation.

### 10.3 Public-Sector Experiments and the Role of Central Banks

Central banks and public institutions have become central to the tokenization literature not because they want to endorse every form of crypto, but because tokenized assets intersect with wholesale settlement, collateral markets, and the future of money. ECB trials, BIS projects, and MAS Project Guardian all treat tokenization as a public-interest matter in market infrastructure.

This public-sector involvement has two economic effects. First, it lowers coordination costs for institutional adoption by signaling acceptable design principles. Second, it narrows the set of architectures likely to scale in regulated markets. Fully permissionless retail-first models may remain important in crypto-native contexts, but much systemically important tokenization is likely to emerge through public-private institutional channels.

### 10.4 Regulation as Market Design

A final lesson from the policy literature is that regulation is itself a form of market design. Rules about transferability, wallet eligibility, reserve composition, disclosure, governance, and settlement money determine which tokenization equilibria are feasible. Therefore, the economics of RWAs cannot treat regulation as an external constraint. It is part of the endogenous design of the market.

## 11. Adjacent Economic Literatures: What RWAs Borrow from Older Finance and Monetary Theory

One reason the RWA literature is analytically rich is that almost every element of tokenization has a predecessor in economic history or theory. What is new is not the existence of transferable claims, reserve-backed liabilities, SPVs, warehousing, collateral chains, or platform subsidies. What is new is the recombination of these elements with digitally native transfer rails, programmable restrictions, and crypto-compatible settlement. Understanding RWAs therefore requires integration with adjacent literatures rather than a stand-alone “blockchain” theory.

### 11.1 Securitization and Structured Finance

A first adjacent literature is securitization. Tokenization and securitization are not identical, but they are often cousins. Both involve the repackaging and distribution of claims. Both can increase market access, funding flexibility, and balance-sheet efficiency. Both can also create opacity, moral hazard, and maturity mismatch if the underlying claims are hard to value or monitor.

The pre-crisis securitization literature emphasized several themes that map directly onto RWAs. One theme is the tension between distribution and screening. When claims can be distributed widely, originators may have weaker incentives to maintain underwriting quality unless contractual and reputational mechanisms restore discipline. Another theme is information hierarchy: senior claims or short-term liabilities can become information insensitive in good states, but not in stress states. A third theme is collateral chains and the role of safe-looking instruments in market liquidity.

These themes are highly relevant to tokenized private credit, tokenized receivables, and even tokenized money-market claims used in DeFi. If tokenization expands the circulation of claims without improving screening or legal enforceability, the result may resemble a digital version of familiar shadow-banking fragility. Conversely, if tokenization genuinely improves transparency, servicing, or collateral management, it could represent a better securitization technology.

This comparative perspective helps discipline a common rhetorical move in RWA markets: because the token is on-chain, the claim is assumed to be more transparent. That inference is unwarranted. A securitized claim can be opaque even if the wrapper is digitally traceable. What matters is the observability of the underlying asset, the incentives of originators, and the enforceability of servicing and payment rules.

### 11.2 Shadow Banking and Information-Insensitive Debt

A second adjacent literature is shadow banking. The core shadow-banking mechanism involves the creation of short-term or highly liquid liabilities against collateral pools outside the full perimeter of bank regulation. The resulting claims can appear safe and money-like until doubts about backing, liquidity, or legal support trigger runs.

Tokenized stablecoins, tokenized money-market claims, and some tokenized safe-asset structures map naturally into this literature. They are often designed to be liquid, transferable, and collateral-usable. Their economic function can therefore converge with the creation of private near-money. The relevant analytical tools come from Diamond-Dybvig, Gorton-Pennacchi, Gorton’s safe-asset work, and more recent analyses of run-prone market-based finance.

The shadow-banking analogy is especially useful because it highlights a general principle: the more successful a tokenized claim becomes as a money-like instrument, the more its core economics shifts away from “asset tokenization” in the narrow sense and toward liquidity transformation, reserve management, and backstop expectations. This is why stablecoins backed by Treasury bills are not merely investment wrappers. They are shadow-money structures with asset-management legs.

The same literature also warns against the belief that transparency alone prevents runs. Even when reserves are disclosed, redemption can still be destabilizing if holders expect others to run first or if legal access to reserves is uncertain. Thus, better data is helpful but not sufficient.

### 11.3 Payments Economics and the Role of Settlement Assets

Payments economics provides a third crucial benchmark. Tokenization is often sold as a settlement innovation, yet settlement quality depends not only on the asset token but on the payment leg, finality rules, and interoperability of infrastructures. Kahn and Roberds, Rochet and Tirole, and the broader payment-card and settlement literature help clarify why these details matter.

In many RWA applications, the real efficiency gain comes from synchronizing asset transfer and payment finality. A tokenized bond that still settles through clunky off-chain payment processes loses much of its appeal. Conversely, an on-chain payment token without high-quality tokenized assets may have limited institutional use. The two sides are complementary.

This complementarity explains the strategic importance of tokenized deposits, wholesale CBDC experiments, and stablecoins in RWA development. It also shows why payment economics and asset-management economics cannot be separated in this domain. The value of the tokenized asset is partly determined by the quality of the tokenized money it settles against.

### 11.4 Safe Assets, Convenience Yield, and Collateral Services

A fourth adjacent literature is the economics of safe assets and convenience yield. Treasury bills and other short-term safe claims do not matter only because of their coupon. They matter because they provide convenience services: liquidity, collateral usability, safe store-of-value characteristics, and information insensitivity. Tokenized versions of these assets may inherit and modify these properties.

The literature on safe-asset scarcity and convenience yield suggests that financial systems value instruments that can move easily through funding and settlement networks. Tokenization can enhance some of those services by increasing transferability or composability. But it can also degrade them if legal uncertainty or technological fragmentation increases effective haircuts or reduces confidence in enforceability.

This suggests a useful research framing. Tokenization should be evaluated not only by transaction-fee savings or settlement speed, but by how it changes the convenience yield of the underlying claim. A tokenized Treasury asset that becomes easier to mobilize as collateral may carry a different effective convenience value than an ordinary fund share, even when backed by the same securities.

### 11.5 Asset Management, Fund Structure, and Distribution Economics

A fifth adjacent literature is asset management. Many successful RWA structures are economically close to funds: investors buy tokenized interests in portfolios managed by regulated or semi-regulated intermediaries. The key frictions are then around transfer agency, fund administration, distribution, and investor servicing.

This matters because tokenization in asset management may be less about displacing managers and more about reconfiguring distribution, investor record-keeping, and share transfer. The relevant benchmarks become mutual-fund economics, ETF design, money-market fund regulation, and private-fund access rather than classic crypto issuance.

The asset-management literature also raises a question of scale. Large asset managers may be particularly well positioned to benefit from tokenization because they already possess the legal infrastructure, product credibility, and reserve access needed to issue robust tokenized products. This means that tokenization could increase concentration in asset management rather than democratizing it. The literature has only started to address this possibility.

### 11.6 Platform Economics, Network Effects, and Gatekeeping

A sixth adjacent literature concerns platforms and multisided markets. Tokenized RWA systems typically involve issuers, custodians, wallets, compliant investors, exchanges, settlement providers, oracle services, and often stablecoin or bank-money providers. These are platform ecosystems with strong network effects. The more accepted a given tokenized asset or settlement token is, the more useful it becomes.

This has two consequences. First, market concentration is likely. Winner-take-most dynamics can emerge in stablecoins, tokenized-fund platforms, tokenized-collateral systems, or issuer-distribution networks. Second, vertical integration becomes a strategic question. A platform that controls issuance, custody, exchange access, and payment rails may internalize efficiencies but also extract rents.

The platform-economics lens helps explain why tokenization may not reduce intermediation overall. It can shift value to new gatekeepers rather than eliminating gatekeeping. That is especially clear in exchange-linked stablecoin ecosystems and permissioned tokenization networks.

### 11.7 Incomplete Contracts and the Persistence of Human Governance

A seventh adjacent literature is incomplete contracting. In many crypto narratives, smart contracts are framed as substitutes for human governance. The economics literature is more skeptical. Smart contracts can automate verifiable contingencies, but many important contingencies are not machine-verifiable. Default, fraud, force majeure, servicing discretion, sanctions, restructuring, and legal injunctions all require off-chain judgment.

This means that tokenized RWA systems inevitably sit atop incomplete contracts. Someone governs the wrapper, chooses the oracle, authorizes exceptions, handles legal conflict, and interprets ambiguous states. The right question is therefore not whether human governance disappears, but whether tokenization changes its scope, cost, or accountability.

Incomplete-contract theory helps discipline extreme claims on both sides. It explains why tokenization can be valuable without being self-sufficient, and why legal and administrative institutions remain central even in highly automated systems.

### 11.8 Corporate Governance and Treasury Politics

An eighth adjacent literature comes from corporate governance. Tokenized systems often have treasuries, voting rights, delegated governance, and agency conflicts. This is obvious in DeFi, but it is also relevant to tokenized funds, stablecoin issuers, and special-purpose vehicles. Treasury management, reserve composition, disclosure, and conflicts of interest all influence value.

The governance literature suggests that transparency is not a full substitute for control rights, monitoring, or incentive alignment. A tokenized structure may publish wallet balances or reserve attestations and still embody serious governance flaws. This is particularly important for stablecoins and permissioned tokenized products where the issuer retains substantial discretion over operations, reserve management, and access.

### 11.9 Monetary History and Private Issuance

A ninth adjacent literature is monetary history. From private bank notes to money-market mutual funds and e-money, the history of finance includes repeated episodes in which private institutions issue claims that perform money-like functions. The RWA literature, especially around stablecoins and tokenized deposits, can learn from that history. The key lessons are that par is a political and institutional achievement, not a technological attribute; that credibility depends on backing and governance; and that the state eventually reasserts itself when private liquidity instruments become systemic.

This does not imply that private tokenized money is doomed. It implies that its economics should be understood historically and institutionally, not just technologically.

### 11.10 What Is Actually Novel?

Taken together, these adjacent literatures suggest that almost every component of RWAs has a familiar predecessor. What is new lies in the digital recombination: programmable transfer restrictions, 24/7 cross-platform accessibility, on-chain composability, instantaneous visibility of some state variables, and the possibility of integrating investment assets directly into collateral and payment networks used by global digital actors.

This novelty is neither trivial nor absolute. It is enough to justify a distinct literature, but not enough to abandon older economic frameworks. The most useful RWA scholarship therefore treats blockchain as a new institutional technology that recombines longstanding functions of finance rather than as an entirely separate economy.

## 12. Governance, Industrial Organization, and the New Intermediation Stack

Tokenization is often marketed as disintermediation, yet the literature increasingly shows the opposite: a reconfiguration of intermediation. The old stack of custodians, registrars, administrators, dealers, transfer agents, payment intermediaries, and compliance operators is not simply deleted. It is reassembled into a new stack of wallet providers, smart-contract administrators, issuers, legal trustees, whitelisting agents, identity providers, reserve managers, oracle operators, exchanges, stablecoin issuers, and settlement coordinators.

### 12.1 Why Intermediation Returns

Intermediation returns because finance is not merely about recording ownership. It is about information production, legal enforcement, liquidity provision, compliance, and crisis absorption. Tokenization changes the technical environment in which these functions are performed, but it does not eliminate the need for them.

This point is especially visible in institutionally serious RWA projects. The most robust structures usually involve more explicit governance, not less. They specify custodians, trustees, legal wrappers, transfer controls, servicing agents, and reserve disclosures in ways that many crypto-native designs initially tried to avoid. The result is a richer but more obviously intermediated market.

### 12.2 Vertical Integration and Platform Power

The industrial-organization literature suggests that when new markets emerge around network effects and compliance complexity, vertically integrated platforms often gain advantage. In RWAs, the most obvious candidates are large exchanges, global asset managers, major custodians, banks, and settlement infrastructures. These actors can combine issuance, custody, compliance, trading access, stable settlement tokens, and analytics.

Vertical integration may generate real efficiencies. A platform that controls both issuance and compliant distribution can reduce search costs and improve coordination. A bank or infrastructure provider that controls the cash leg and the asset leg can support better settlement. But vertical integration also raises concerns about foreclosure, rent extraction, data control, and dependence on a small number of tokenization hubs.

This is a major open area for research. Much of the current literature is still too focused on product-level efficiency and not focused enough on evolving market structure.

### 12.3 Permissioning, Identity, and Access Control

Because real-world claims carry legal restrictions, many RWA systems are built around permissioning. Identity becomes part of market design. Who is allowed to hold the token? Who may transfer it to whom? What happens if a wallet is compromised or a holder becomes sanctioned?

These are not merely compliance questions. They affect liquidity, investor composition, cross-border access, and the possibility of using the asset in DeFi. A highly permissioned token may be safer and more legally coherent but less composable and less liquid. A lightly permissioned token may be more open but legally fragile.

This trade-off is central to the industrial organization of RWAs because identity and compliance modules can become strategic bottlenecks. Whoever controls the permissioning layer influences market access.

### 12.4 Oracle Providers and Information Intermediation

RWAs require information intermediaries. NAV data, reserve attestations, coupon schedules, default triggers, property records, and carbon-certification events must be fed into token systems. This creates a market for oracles and data certifiers.

The economics here resembles other information-intermediation markets. Reputation, governance, liability, and conflict-of-interest rules matter. A small number of trusted oracle or data providers could become systemically important, especially if multiple RWA protocols depend on them. This is another way in which tokenization can concentrate rather than disperse power.

### 12.5 Stablecoins and Tokenized Money as Infrastructural Gatekeepers

In many tokenized markets, the most important intermediary may not be the asset issuer but the provider of the settlement asset. Stablecoins and tokenized deposit systems can function as infrastructural gatekeepers because they determine what cash leg is acceptable, interoperable, and liquid. This gives issuers of digital money substantial indirect power over the RWA ecosystem.

The literature on platform leverage suggests that such infrastructural control can shape entry and competition downstream. For example, if a stablecoin issuer or banking consortium becomes the default settlement layer for tokenized funds and bonds, it may influence which assets gain traction, how collateral moves, and which protocols can integrate.

### 12.6 Governance Failures and Crisis Management

When things go wrong, governance becomes salient. A tokenized fund may need to freeze transfers. A stablecoin may need to process redemptions under stress. An oracle failure may require administrative override. A sanctions event may require wallet restrictions. These moments reveal that governance is not incidental—it is the hidden backbone of the system.

The literature increasingly emphasizes that robust RWA systems must specify crisis governance ex ante. Who can pause? Who can reverse? Under what legal authority? How are token holders informed and protected? Such governance design influences not only safety but asset value, because holders price expected behavior in crisis.

## 13. Empirical Methods, Data, and Identification Problems

The RWA literature has advanced quickly in descriptive and policy terms, but causal empirical work remains relatively limited. This is partly because the market is young, data are fragmented, and many institutionally important projects are private or semi-private. Nonetheless, a clearer methods agenda is beginning to emerge.

### 13.1 The Measurement Problem

The first challenge is definitional measurement. What counts as an RWA? Should stablecoins be included if they are backed by reserves? Should tokenized fund shares and tokenized deposits be grouped with tokenized private credit? Different market dashboards produce different answers. This complicates comparisons over time and across studies.

A useful empirical literature needs a functional taxonomy similar to the one developed in this review. At minimum, datasets should identify the underlying asset class, legal wrapper, settlement token, level of permissioning, issuer type, redemption rights, and whether the token is public-chain native or only DLT-represented.

### 13.2 On-Chain Data and Its Limits

On-chain data is often celebrated as uniquely rich. It does provide remarkable visibility into transfers, holdings, and protocol interactions. But on-chain visibility can be misleading in RWA contexts because the underlying assets, legal contracts, and investor identities are partly or largely off-chain. A token transfer may be visible while the economically crucial event—reserve deterioration, property dispute, default, or legal freeze—remains hidden.

The best empirical work will therefore combine on-chain data with issuer disclosures, legal filings, reserve reports, regulatory sources, and where possible institutional datasets from custodians, fund administrators, or market infrastructures.

### 13.3 What Should Count as Success?

The literature sometimes uses market capitalization or token outstanding value as a proxy for success. That is understandable but incomplete. A tokenized asset can scale in nominal terms and still fail economically if it has weak liquidity, poor legal enforceability, or limited practical use. More informative outcomes include settlement efficiency, spread reduction, collateral reusability, investor diversification, reserve transparency, redemption resilience, governance quality, and cross-border accessibility.

Different asset classes also require different outcome measures. For tokenized fund shares, administration costs and redemption flexibility may matter. For stablecoins, peg stability and reserve quality matter. For tokenized private credit, servicing performance and secondary-market depth matter. For tokenized carbon, registry integrity and retirement quality matter.

### 13.4 Identification Through Regulatory Shocks

One promising research strategy is to exploit regulatory changes. When jurisdictions adopt tokenization sandboxes, stablecoin rules, or securities-token frameworks, the relative cost of certain RWA structures changes. Comparing issuance, migration, or asset growth across jurisdictions before and after such changes can help identify how sensitive tokenization is to legal clarity and compliance burden.

The challenge is that regulatory changes are often endogenous to market development and may coincide with broader crypto shocks. Nonetheless, carefully designed difference-in-differences or event-study approaches could be valuable, especially for Europe, the United Kingdom, Singapore, Hong Kong, and selected U.S. developments.

### 13.5 Identification Through Infrastructure Changes

A second research strategy is to exploit infrastructure events such as exchange integrations, wallet support, tokenized fund launches, new settlement links, or the introduction of tokenized cash legs. If the usability of an RWA product depends strongly on infrastructure access, then such changes may reveal the relative importance of settlement, custody, and venue effects.

This is especially promising for tokenized Treasury products and stablecoins, where ecosystem integrations can materially affect demand.

### 13.6 Structural and Comparative Designs

A third strategy is comparative institutional analysis, either qualitative or structural. Researchers can compare matched asset classes or matched markets that differ in operational complexity and legal clarity. The key question is where tokenization actually improves net welfare relative to conventional infrastructure.

Examples include comparing tokenized and non-tokenized fund distribution, tokenized and conventional bond issuance costs, or tokenized and conventional collateral mobility in specific institutional settings. Although clean causal identification is difficult, carefully specified structural comparisons may still be highly informative.

### 13.7 A Practical Empirical Agenda

A practical next-generation empirical agenda might focus on five questions.

1. Do tokenized short-duration safe assets measurably reduce treasury-management frictions or collateral costs for crypto-native institutions?
2. Do tokenized fund or bond structures reduce issuance and lifecycle costs for issuers compared with conventional alternatives?
3. Does tokenization improve actual liquidity in private markets, or mainly create the appearance of improved transferability?
4. How does the choice of settlement leg—stablecoin, tokenized deposit, or conventional cash bridge—affect adoption and pricing?
5. Under stress, which design features best predict redemption resilience and legal clarity?

These are questions that economics is well equipped to answer, provided data improve.

## 14. Institutional Experiments and Case-Based Lessons

Because the RWA field is young, a significant portion of the evidence comes from institutional experiments, pilots, and controlled launches rather than from mature market equilibria. These case studies are not a substitute for theory or causal evidence. But they are economically valuable because they reveal where large institutions believe tokenization can plausibly deliver gains, and what design compromises they consider necessary.

### 14.1 World Bank bond-i and the Early Public-Issuer Experiments

The World Bank’s bond-i remains a foundational case because it established an early benchmark for what legally robust tokenized issuance could look like. The bond was not a crypto-native asset designed for retail speculation. It was a conventional debt obligation issued under a digitally enabled lifecycle. The economic importance of bond-i lies in the separation it enabled between credit risk and infrastructure experimentation. Because the World Bank is a highly credible issuer, analysts could focus on operational and settlement questions without conflating them with issuer-quality concerns.

The literature has drawn three lessons from bond-i. First, tokenization can coexist with conventional legal architecture. Second, tokenization value in high-quality fixed-income markets is initially more likely to come from process and post-trade redesign than from radical market restructuring. Third, institutional adoption often begins where the legal wrapper is already trusted and where the token is not expected to carry the full burden of proving underlying value.

These lessons are important because they contrast sharply with early ICO-era assumptions that tokenization’s main value lay in bypassing conventional institutions. In the bond-i world, tokenization is additive to institutional credibility, not a substitute for it.

### 14.2 European Investment Bank Digital Bonds

The European Investment Bank’s digital bond issuances further reinforced this pattern. EIB transactions used regulated bank and market-infrastructure partners, and they explored how DLT can support issuance, registration, and settlement under highly institutional conditions. Economically, they matter because they show that even in mature bond markets there remains a belief that issuance and settlement can be made more modular, automated, and synchronized.

At the same time, these cases show how cautious large issuers are. They often rely on a small number of highly trusted intermediaries, limited investor sets, and carefully controlled technical designs. The literature interprets this as evidence that the migration path for significant tokenized securities is likely to be gradual and institutionally thick rather than immediately open and permissionless.

### 14.3 Hong Kong Government Tokenized Green Bonds

The Hong Kong government’s tokenized green bond issuances added another dimension: policy-linked thematic issuance. Here tokenization was not just a post-trade technology pilot but also part of a broader state-led digital-finance agenda. Green bonds are already disclosure intensive and linked to reporting standards, which makes them interesting tokenization candidates. On one hand, their lifecycle reporting could be improved by better digital infrastructure. On the other hand, they remain deeply dependent on off-chain verification of environmental use and impact.

The lesson is that tokenization is especially well suited to assets whose lifecycle events are complex but structured. The more repetitive and documentable the administrative burden, the more likely tokenization can help. But the underlying certification problem remains off-chain.

### 14.4 Euroclear D-FMI and the Integration with Existing Market Infrastructure

The World Bank’s later digital-native note through Euroclear’s D-FMI and other linked initiatives show another route for tokenization: upgrading existing market infrastructures rather than bypassing them. This route is highly significant in economic terms because much of finance’s efficiency depends on central securities depositories, custodians, and settlement conventions. If tokenization is to scale in mainstream markets, it may do so through upgraded incumbents rather than through entirely new crypto-native venues.

This perspective changes how economists should think about competition. The relevant contest may not be “crypto versus traditional finance,” but rather which incumbent infrastructures successfully absorb tokenization into their operating model.

### 14.5 MAS Project Guardian

Project Guardian is one of the most intellectually important institutional programs because it explicitly links tokenized assets, tokenized liabilities, and DeFi-style architectures in a regulated setting. Singapore’s approach has been to test whether the beneficial features of composability and programmable finance can be retained while preserving strong governance and permissioning.

Economically, Project Guardian matters because it demonstrates that the most serious institutional interest in tokenization is not confined to simple issuance modernization. It extends to integrated markets in which tokenized funds, bonds, deposits, and FX legs might interact programmatically. This is effectively a public-private test of whether some of DeFi’s coordination gains can be transferred into conventional finance without importing its full instability.

The key lesson from the literature emerging around such programs is that composability is real but conditional. It is strongest where legal clarity, whitelisted participation, and trusted settlement tokens are present. This suggests a future in which institutional digital finance is modular and programmable but not universally permissionless.

### 14.6 BIS Projects and the Unified-Ledger Debate

BIS work on the tokenization continuum and the unified ledger is especially important because it provides the most explicit official macro-financial framework for thinking about RWAs. The basic insight is that tokenization should not be treated as isolated asset innovation. It should be seen as part of a larger redesign of the relationship between money, securities, and settlement infrastructure.

The unified-ledger view holds that the major gains from tokenization come when tokenized assets and tokenized money coexist on interoperable or unified platforms. Only then can atomic settlement, conditional execution, and coordinated asset-movement logic deliver their full benefits. Economically, this is a strong claim. It implies that tokenizing assets without solving the money and interoperability problem yields only partial gains.

The literature’s response to this view is mixed but broadly respectful. On one hand, the unified-ledger approach captures an important complementarity. On the other hand, critics note that a unified infrastructure could also centralize power, reduce competition, or introduce new single points of governance. Thus, tokenization’s future may involve a tension between efficiency through integration and resilience through diversity.

### 14.7 ECB Exploratory Work on DLT Settlement

The ECB’s exploratory work on new technologies for wholesale central-bank-money settlement reflects a similar concern from the euro-area perspective. Tokenized assets become much more relevant if they can settle in central bank money or close equivalents. The ECB work is therefore significant less for any single pilot result than for the policy principle it embodies: tokenized asset markets cannot be analyzed separately from settlement-money design.

This perspective is especially important for economists because it highlights the public-good dimension of settlement infrastructure. Private tokenization can innovate at the asset layer, but public institutions still shape the quality and legitimacy of the settlement anchor.

### 14.8 Commercial-Bank and Exchange Experiments

Commercial banks and exchanges have conducted numerous tokenization experiments, from JPMorgan’s Onyx and deposit-token initiatives to SIX Digital Exchange, DBS digital initiatives, and collateral-mobility pilots. These cases show that major intermediaries view tokenization not merely as a way to issue retail crypto products, but as a means to improve intragroup collateral operations, repo-like transfers, digital-bond issuance, and treasury management.

The industrial-organization lesson is important. Large institutions may adopt tokenization first where it lowers internal costs or strengthens client stickiness, not where it disintermediates them. This is consistent with economic history: new infrastructure is often first used to improve incumbent coordination rather than to destroy incumbency.

### 14.9 Asset-Manager Product Launches

Asset-manager launches such as Franklin Templeton’s on-chain fund infrastructure and BlackRock’s BUIDL matter because they take tokenization from pilot status to actual product distribution. They show that the market for tokenized short-duration safe assets is not hypothetical. It is developing under recognizable fund structures and among globally significant financial institutions.

These launches also illustrate two deeper economic points. First, distribution power matters. The institution that can combine legal credibility, underlying-asset access, and digital distribution is well positioned to dominate the segment. Second, tokenization in asset management may be evolutionary rather than revolutionary. The fund remains the fund; what changes is the investor interface, transfer mechanism, and perhaps collateral usability.

### 14.10 Carbon, Climate, and Development-Oriented Pilots

A wide array of pilots have also targeted carbon credits, climate-related instruments, supply-chain receivables, and development-finance structures. These are economically important because they focus on asset classes where documentation, provenance, and cross-border coordination are central. Yet they also reveal the limits of technological optimism. In areas such as carbon, the hardest problem is often not transfer or record-keeping but the quality and credibility of the underlying claim.

The literature increasingly interprets these cases as proving a broader point: tokenization works best when it complements a reasonably high-quality institutional base. It works poorly as a substitute for it.

### 14.11 Lessons Across Cases

Taken together, the institutional experiments suggest six lessons.

First, high-quality issuers and highly standardized assets are the easiest place to start.

Second, tokenization gains are strongest when the cash leg and the asset leg are considered together.

Third, interoperability is more important than pure on-chain novelty.

Fourth, legal clarity and transfer governance remain central even in technologically sophisticated systems.

Fifth, asset managers, banks, and infrastructures are likely to remain core intermediaries.

Sixth, the strongest use cases are often operational and collateral-related rather than purely retail-trading related.

These are sober conclusions, but they make the literature more useful. They move it away from slogans and toward comparative institutional analysis.

## 15. Historical Analogies, Welfare Criteria, and the Normative Debate

The RWA literature is not only descriptive and technical. It is normative. Implicit in almost every paper or policy report is a judgment about whether tokenization is socially useful, privately rent seeking, systemically dangerous, or some combination of the three. Making those criteria explicit is essential.

### 15.1 The Wrong Benchmark Problem

A recurring source of confusion in the literature is the use of inconsistent benchmarks. A critic may compare tokenized RWAs to an idealized, fully safe, fully efficient conventional market. A defender may compare them to the actual frictions of fragmented, expensive, or exclusionary finance. These are not the same benchmark, so the resulting conclusions differ.

The right welfare benchmark should be comparative and asset specific. Tokenized Treasury claims should be compared with the best available treasury-management and collateral alternatives. Tokenized deposits should be compared with conventional deposits, wholesale settlement systems, and stablecoins. Tokenized private credit should be compared with standard private-credit distribution and securitization channels. Tokenized carbon claims should be compared with existing registry infrastructures. Without that discipline, arguments about tokenization often become rhetorical rather than analytical.

### 15.2 Access Versus Protection

One of the central normative tensions in RWA discussions is between broader access and stronger protection. Tokenization can lower participation thresholds and increase reach. But broadening access to weakly understood, illiquid, or legally complex assets may not increase welfare. The history of finance repeatedly shows that distribution expansion without commensurate information and governance can create harm.

This does not mean access is irrelevant. It means that democratization claims must be asset specific. Tokenized access to short-duration high-quality sovereign products may be welfare enhancing in ways that tokenized access to opaque local real-estate SPVs may not be.

### 15.3 Efficiency Versus Resilience

Another normative tension is between efficiency and resilience. Tokenization promises faster settlement, tighter synchronization, and reduced duplication. But tightly coupled systems can also transmit shocks faster, reduce slack, and create new forms of dependency. A market with atomic settlement and composable collateral may be efficient in normal times and brittle in stressed times.

This trade-off is familiar from the history of payments, supply chains, and financial engineering. The literature on RWAs needs to assess not only mean cost reduction but tail resilience. In many cases, the socially optimal architecture may deliberately preserve some redundancy and governance friction.

### 15.4 Public Versus Private Control of the Settlement Layer

The RWA literature also revives an old normative issue in monetary economics: how much of the settlement and money layer should remain public or publicly anchored? Tokenized assets can, in principle, settle against private stablecoins, bank tokens, or central-bank-linked instruments. These options differ not only technically but politically. They assign different roles to the state, commercial banks, and nonbank issuers.

The literature has not settled this question. But a broad official consensus is emerging that if tokenized markets become systemically important, the public interest in settlement integrity and singleness of money will intensify. This suggests that the long-run equilibrium for large-scale tokenized finance may be neither fully private nor fully public, but hybrid.

### 15.5 Inclusion, Development, and Cross-Border Use

A large share of pro-tokenization rhetoric emphasizes inclusion, especially in emerging markets or among underserved investor groups. This possibility is real. Programmable, low-minimum, cross-border claims could broaden access to safe assets and investment products. But inclusion is not automatic. Wallet access, legal enforceability, currency risk, digital identity, and consumer protection all matter.

Moreover, greater access to foreign-currency safe assets can weaken domestic financial intermediation or monetary sovereignty. The development literature therefore needs to evaluate inclusion alongside possible displacement of local institutions.

### 15.6 The Governance Externality

A final normative issue concerns governance externalities. Some tokenized systems create private infrastructures that can become de facto market standards. If a stablecoin becomes the dominant settlement asset for tokenized markets, or if a handful of asset managers dominate tokenized Treasury products, then private governance choices can have systemic consequences. Competition policy and public oversight become relevant not because tokenization failed, but because it succeeded.

### 15.7 A Practical Welfare Criterion

A practical welfare criterion for RWAs should ask four questions.

1. Does tokenization reduce meaningful operational or market frictions relative to the best available alternative?
2. Does it preserve or improve legal certainty and investor protection?
3. Does it enhance or undermine resilience under stress?
4. How are the gains and rents distributed across users, intermediaries, and public institutions?

This criterion is more useful than generic optimism or skepticism. It allows different tokenized asset classes to receive different evaluations, which is exactly what the literature increasingly demands.

## 16. Theoretical Strands in the RWA Literature

Although the RWA literature is younger than the broader cryptocurrency literature, it has already developed several recognizable theoretical strands. These strands overlap, but separating them clarifies what each explains.

### 16.1 Tokenization as Cost-Reducing Infrastructure Innovation

The first strand treats tokenization primarily as infrastructure modernization. Here the focus is on issuance costs, reconciliation, settlement, transfer agency, and collateral administration. The implicit model is that legacy finance contains avoidable processing frictions and tokenization can lower them.

This strand is strongest in official and institutional work around bond issuance, wholesale settlement, and fund administration. Its weakness is that it sometimes underplays legal and strategic frictions. But it remains the most credible near-term pathway for high-quality public-market assets.

### 16.2 Tokenization as Market-Access Expansion

The second strand treats tokenization as a way to broaden market access and lower minimum investment thresholds. Fractionalization and digital distribution play the leading role here. This strand is strongest in real estate, funds, commodities, and some retail-oriented Treasury products.

Its strength is that it highlights distribution and inclusion. Its weakness is that it can overstate liquidity improvements and understate information problems. Economically, it is most compelling when the underlying asset is high quality and the main barrier is indeed access rather than opacity.

### 16.3 Tokenization as Collateral and Monetary Innovation

The third strand treats tokenization as a way to improve the mobility of high-quality collateral and integrate assets with digital money. This strand is central to tokenized Treasuries, stablecoins, tokenized deposits, and institutional DeFi. It emphasizes settlement complementarity, convenience yield, collateral chains, and safe-asset demand.

This strand is likely to become increasingly important because it links RWAs to the broader architecture of financial markets rather than to niche investment products alone.

### 16.4 Tokenization as New Shadow Banking

The fourth strand is skeptical. It argues that tokenization often reproduces familiar shadow-banking structures under new technological wrappers. Reserve-backed tokens become runnable liabilities, tokenized private assets become more easily distributed opaque claims, and leverage chains become faster and more modular. In this view, the main novelty is speed and form, not economic substance.

This strand is especially important for stablecoins and highly composable RWA structures. Its strength is that it grounds the discussion in historical financial fragility. Its weakness is that it can understate genuine operational or access gains.

### 16.5 Tokenization as Platform Strategy

The fifth strand emphasizes strategic control by exchanges, asset managers, banks, and settlement networks. Tokenization is not only about reducing cost; it is about capturing distribution, data, and ecosystem control. This strand highlights industrial organization and the possibility that tokenization will reinforce platform concentration.

### 16.6 Tokenization as Public-Private Co-Production

A sixth strand, strongest in central-bank and BIS work, views tokenization as a public-private coordination problem. Assets, money, identity, compliance, and settlement must all align. In this perspective, the most important question is how public anchors of trust—law, central-bank money, regulated intermediaries—interact with private innovation.

This is arguably the strand most likely to shape systemically important markets, because large-scale RWA use is unlikely to develop entirely outside public institutions.

## 17. International Political Economy and Jurisdictional Divergence

Tokenization is not unfolding in a single legal or monetary space. It is developing across jurisdictions with very different traditions in securities law, banking supervision, data governance, capital controls, and public attitudes toward private digital money. A serious economics review must therefore address the international political economy of RWAs.

### 17.1 Why Jurisdiction Matters So Much

In conventional securities markets, jurisdiction matters because it shapes disclosure, investor rights, taxation, and market infrastructure. In tokenized markets, jurisdiction matters even more because the claim may move globally while the legal rights, reserve assets, custody arrangements, and enforcement remedies remain local. Tokenization therefore multiplies cross-border legal interfaces.

This has three economic consequences.

First, the jurisdiction of issuance affects asset quality. A tokenized deposit claim issued in one jurisdiction may not be functionally comparable to a similar-looking token in another if banking protections, insolvency rules, or AML standards differ.

Second, jurisdiction affects transferability and market access. Some tokens may be globally visible on-chain but legally inaccessible or non-transferable to large classes of investors.

Third, jurisdiction affects institutional trust. A tokenized claim backed by a well-known regulated institution in a credible legal system may enjoy a trust premium relative to an otherwise similar token backed by opaque offshore structures.

### 17.2 The European Path

Europe’s approach has emphasized framework building. MiCA provides a crypto-asset regime, while securities, fund, payment, and banking law continue to govern tokenized conventional claims. The economic implication is that the European path is likely to favor institutionally legible tokenization rather than lightly regulated public issuance. This may reduce some forms of experimentation but increase the quality and durability of products that do launch.

The EU path also reflects a broader European preference for regulated market infrastructures and legal harmonization. If successful, it could make Europe relatively strong in compliant tokenized funds, bond issuance, and regulated stable-value instruments. The trade-off is that heavy compliance requirements may entrench large incumbents and reduce open-entry experimentation.

### 17.3 The United States: Fragmented Authority, Strong Capital Markets

The United States has perhaps the deepest capital markets and the most influential dollar-based safe assets, which gives it enormous potential relevance for RWAs. At the same time, its regulatory approach has often been fragmented across agencies and issue domains. Securities-law enforcement, stablecoin debate, state-level money-transmitter frameworks, banking guidance, and agency litigation have together created a less unified policy environment than in Europe.

Economically, this fragmentation has a mixed effect. On one hand, legal uncertainty can slow open issuance and encourage institutional caution. On the other hand, strong underlying capital markets and the centrality of Treasury securities make U.S.-linked asset tokenization highly attractive. This is one reason tokenized Treasury products and dollar-backed stablecoins have become so central globally even when regulatory clarity remains incomplete.

A deeper political-economy point is that the United States may exert influence on tokenized markets even without a single comprehensive tokenization law, simply because dollar assets and U.S. financial institutions remain dominant reference points.

### 17.4 The United Kingdom and the Sandbox Model

The United Kingdom’s digital-securities sandbox and broader tokenization initiatives represent a more experimental institutional style. Rather than trying to settle every legal question ex ante, the sandbox model allows controlled experimentation under supervision. This can be economically useful because it lowers the informational cost of regulation. Regulators learn by observing real use cases, and institutions gain confidence through structured pilots.

The sandbox model may be particularly well suited to tokenization because the domain is heterogeneous. Different asset classes raise different legal and prudential issues. A controlled experimentation regime can therefore be more adaptive than a single static framework.

### 17.5 Singapore, Hong Kong, and the Managed-Innovation Strategy

Singapore and Hong Kong have pursued what might be called a managed-innovation strategy. They have encouraged institutional experimentation while maintaining strong licensing and governance expectations. Project Guardian, tokenized green-bond work, and related initiatives illustrate this balance.

Economically, this strategy is attractive because it targets the likely high-value segments of tokenization—wholesale markets, asset management, collateral mobility, and cross-border finance—without depending on uncontrolled retail-first expansion. The trade-off is that these ecosystems may become highly permissioned and institutionally gated.

### 17.6 Emerging Markets, Capital Controls, and Dollar Access

In emerging markets, the RWA story is different again. Tokenized dollar assets and reserve-backed stablecoins can provide access to a perceived store of value and settlement instrument where domestic financial systems are weaker or more constrained. This can be welfare improving for users seeking stability or global market access. It can also create macroeconomic tension by increasing unofficial dollarization and weakening domestic intermediation.

Tokenized Treasury products and dollar-backed stablecoins therefore have a geopolitical dimension. They may spread dollar exposure through private digital channels in ways that bypass or dilute traditional banking and capital-account controls. This suggests that the economics of RWAs intersects with the international monetary system much more directly than many early crypto debates did.

### 17.7 Jurisdictional Competition and Regulatory Incidence

The literature on jurisdictional competition in crypto has so far focused more on exchanges, ICOs, and stablecoins than on RWAs specifically. But the same logic applies. If one jurisdiction provides legal clarity for tokenized funds or tokenized deposits while another does not, issuance and infrastructure development may migrate accordingly. The costs and benefits of regulation then depend on incidence: who ultimately bears the compliance burden, and who captures the gains from clarity?

A possible equilibrium is global concentration of tokenized RWA issuance in a few legally clear and institutionally credible jurisdictions, even if the investor base and wallet infrastructure are globally distributed. This would resemble the geography of some conventional offshore financial centers, but on crypto rails.

### 17.8 Public Power and the Future Boundary of Private Markets

An important undercurrent in the international literature is that tokenization may shift the boundary between private and public power without eliminating either. Private issuers, platforms, and custodians build the systems; public institutions anchor legality, money, and prudential backstops. The most systemically important RWA markets are therefore likely to emerge from negotiated public-private arrangements rather than pure spontaneous crypto-native evolution.

This is one reason why the future of RWAs may be less about whether states “embrace crypto” and more about whether they are willing to let private digital claims plug into core financial infrastructure under publicly shaped rules.

## 18. Historical Analogies and the Limits of Technological Exceptionalism

The RWA literature gains clarity when it is placed in historical context. Tokenization is often discussed as unprecedented, but modern finance has repeatedly created new representational layers over underlying claims. Warehouse receipts, book-entry securities, depository receipts, fund shares, securitized claims, money-market mutual-fund shares, repo collateral, and e-money all involved the layering of tradable or settlement-useful claims over other assets. Tokenization is new in some ways, but it belongs to a long history of representation, circulation, and abstraction in finance.

### 18.1 From Warehouse Receipts to Book-Entry Systems

One useful analogy is the warehouse receipt. A receipt allows the claim on a stored physical asset to circulate more easily than the asset itself. Tokenized commodity claims often look economically similar, especially when they rely on vaulting or warehousing. The main economic issue is not the representation technology alone but the credibility of storage, inspection, and redemption.

A second analogy is the shift from paper securities to book-entry systems. Modern securities markets already rely on indirect holding systems, central securities depositories, custodians, and electronic records. Tokenization extends this logic but changes where the ledger resides and how programmable the transfer process can be. In this sense, tokenized securities are evolutionary. The novelty lies in interoperability, programmability, and the possibility of integrating assets with new forms of money and collateral logic.

### 18.2 Money-Market Funds and Stablecoins

Stablecoins backed by Treasury bills strongly resemble money-market structures in some respects. Both offer claims intended to remain near par while investing in short-duration safe assets. Both can become important in cash management and collateral use. Both raise run-risk and reserve-transparency concerns. The history of money-market-fund regulation is therefore highly relevant to stablecoin analysis.

The key difference is that stablecoins combine this asset-management logic with payment-network logic and often operate outside the traditional wrapper of securities-law investor protections. This makes them simultaneously more flexible and more politically sensitive.

### 18.3 Securitization and the Distribution of Opacity

Tokenized private credit and receivables also invite comparison with securitization. Both aim to make claims more distributable. Both can broaden investor access and funding. Both can also distribute opacity if underlying information quality does not improve. The history of securitization therefore provides a cautionary lesson for the RWA literature: digitization of the wrapper is not a substitute for underwriting, servicing quality, or legal enforceability.

### 18.4 Platform Subsidies and Tokenized Access

Tokenization of RWAs sometimes resembles platform subsidy design more than conventional asset management. A tokenized product may be distributed into a broader ecosystem to attract users, liquidity providers, or treasury managers. This is especially true when asset tokens are integrated into DeFi applications. The economics then overlaps with platform theory: the tokenized asset is valuable partly because it solves a coordination problem for other market participants.

### 18.5 Constitutional Political Economy and Governance by Distribution

When tokenized systems attach governance rights to holdings or rely on protocol treasuries, historical analogies extend beyond finance into political economy. Distribution becomes constitutional. Who receives tokens, who controls reserves, and who governs updates are not just incidental design questions. They shape the long-run polity of the system.

This analogy is especially apt for DeFi-connected RWA structures and DAOs that manage tokenized off-chain exposures. Here tokenization does not simply represent assets; it builds institutions around them.

### 18.6 What the Analogies Show

The point of these analogies is not to deny novelty. It is to avoid technological exceptionalism. The literature becomes more rigorous when it asks which familiar problem tokenization is addressing: representation, settlement, liquidity transformation, collateral mobilization, distribution expansion, or governance redesign. Once that is specified, older theory becomes usable again.

At the same time, the analogies also show what is genuinely novel. Tokenization can combine representation, settlement, collateral use, and conditional transfer in one programmable layer. That recombination can alter who holds assets, how quickly they move, and how they interact with money and leverage. Historical analogies clarify the pieces; they do not erase the significance of the new configuration.

## 19. Synthesis: Core Propositions of the RWA Literature

A large literature review becomes most valuable when it distills a diverse field into a set of propositions that clarify where consensus exists, where disagreement remains, and what the next generation of empirical work should test. The RWA literature is now mature enough for such synthesis.

### 19.1 Proposition 1: Tokenization Is a Contracting Technology, Not an Asset Class

The first and most fundamental proposition is that tokenization should be treated as a contracting and infrastructure technology rather than as an asset class. The economic object is the underlying claim together with its legal wrapper and transfer environment. The token is a representational and operational layer. Whether tokenization adds value depends on how that layer changes rights, transferability, collateral services, and intermediation costs.

This proposition is important because it helps unify what would otherwise appear to be disconnected debates. Tokenized deposits, tokenized fund shares, commodity-backed tokens, stablecoins, tokenized real estate, and tokenized carbon credits are not siblings because they all “use blockchain.” They are siblings because they all involve the migration of off-chain claims into an on-chain representational and settlement environment. The right first-order analytical move is therefore comparative institutional analysis, not technological taxonomy.

### 19.2 Proposition 2: The Highest-Quality Use Cases Start with High-Quality Underlyings

The second proposition is that tokenization tends to work best where the underlying asset is already relatively high quality, legally legible, and standardized. Sovereign debt, money market instruments, regulated fund interests, and certain deposit-like claims are the clearest examples. This is not because these assets need tokenization most urgently in some absolute sense. It is because their underlying quality allows infrastructure questions to be isolated and solved without being overwhelmed by asset-quality uncertainty.

This proposition helps explain why tokenized Treasuries, tokenized funds, and official-sector bond pilots have gained traction while many tokenized real-estate or tokenized private-asset retail schemes have struggled. The tokenization layer can improve transfer, settlement, and access more credibly when the reference claim is already strong.

### 19.3 Proposition 3: The Hardest Problem Is the Bridge, Not the Chain

A third proposition, increasingly visible across the literature, is that the central challenge for RWAs is the bridge between off-chain rights and on-chain state. Custody, segregation, bankruptcy remoteness, redemption rights, oracles, compliance, and crisis governance determine whether the token remains economically meaningful. Once this is recognized, many optimistic and pessimistic narratives look too simple.

Optimists often underweight the bridge because they focus on the ease of minting a token. Pessimists sometimes underweight it too, because they interpret all tokenization failures as evidence that the technology is useless rather than that the bridge was badly designed. The literature’s more mature position is that bridge design is the field.

### 19.4 Proposition 4: Settlement Efficiency Requires a High-Quality Money Leg

The fourth proposition is that tokenized asset efficiency depends critically on the settlement asset. Tokenized RWAs become much more economically significant when paired with trustworthy tokenized money or cash claims. Without a credible money leg, the promise of atomic settlement, intraday collateral mobility, and programmable finance remains partial.

This proposition explains why central banks, BIS researchers, and regulated institutions are so focused on the interface between tokenized assets and tokenized money. It also explains why stablecoins, tokenized deposits, and wholesale-cash experiments are not side issues in the RWA literature. They are central.

### 19.5 Proposition 5: Tokenization Reconfigures, Rather Than Eliminates, Intermediation

A fifth proposition is that tokenization generally changes the form of intermediation more than it removes it. Custodians, legal wrappers, oracle providers, wallet infrastructures, compliance agents, exchanges, and settlement operators remain central. New gatekeepers emerge where old ones recede.

This proposition is especially important for industrial organization. If tokenization scales, it may strengthen the relative power of asset managers, large banks, infrastructure providers, and dominant settlement-token issuers rather than dispersing it broadly. Efficiency gains and concentration may therefore arrive together.

### 19.6 Proposition 6: Composability Is Real but Selective

The sixth proposition is that composability is one of tokenization’s most distinctive potential benefits, but only a subset of assets is suitable for deep composability. High-quality short-duration assets and well-governed settlement claims can plausibly support broader on-chain use as collateral, treasury assets, or programmable reserves. Opaque private claims, highly local property interests, and verification-intensive environmental assets are less likely to support safe open composability.

This proposition matters because it resists two common errors. One is the belief that all tokenized claims should become DeFi-legible. The other is the belief that none can. The literature points instead toward selective composability, with asset quality and bridge robustness as key determinants.

### 19.7 Proposition 7: Access Gains and Liquidity Gains Are Not the Same

A seventh proposition is that broader access and greater liquidity should not be conflated. Tokenization can lower minimum investment sizes and expand distribution even if secondary markets remain thin. This can still be valuable. But it does not solve illiquidity by itself. The literature on tokenized real estate, private credit, and receivables repeatedly returns to this point.

A useful way to restate the proposition is that tokenization is better at reducing **entry frictions** than at creating **market depth** out of nothing. Where liquidity already exists or can plausibly be supported, tokenization may enhance it. Where liquidity is absent because the underlying claim is hard to value or monitor, tokenization alone is unlikely to transform the equilibrium.

### 19.8 Proposition 8: Stablecoins Are the Largest Existing RWA System

An eighth proposition, underappreciated in some parts of the RWA discourse, is that reserve-backed stablecoins are already the largest and most systemically relevant instance of RWA tokenization. Their reserves consist of real-world cash and short-duration securities. Their tokens circulate globally. Their design directly affects payment competition, collateral structure, and macro-financial transmission.

This proposition broadens the field. It means that the economics of RWAs is not merely about securities modernization or access to tokenized funds. It is also about the rise of private digital liabilities backed by conventional assets.

### 19.9 Proposition 9: Public and Private Infrastructures Will Likely Co-Evolve

The ninth proposition is institutional. The most systemically important RWA markets are likely to emerge from co-evolution between public infrastructures and private tokenization layers. Public institutions anchor legality, finality, and monetary integrity. Private institutions experiment with interfaces, distribution, settlement design, and asset packaging.

This proposition suggests that the long-run equilibrium is unlikely to be either pure crypto-native disintermediation or complete state monopolization of digital finance. Hybrid architectures are more plausible.

### 19.10 Proposition 10: The Right Research Benchmark Is Comparative Welfare

The tenth and final proposition is methodological. The literature should evaluate tokenization relative to the best available alternative for each asset class and use case, not against a generalized ideal. This benchmark discipline is essential if the field is to move from descriptive enthusiasm or descriptive skepticism toward cumulative economics.

## 20. A Forward-Looking Research Agenda

The RWA literature is still young. Its next phase should be shaped by a small number of core research programs rather than by ever more fragmented product commentary.

### 20.1 Comparative Efficiency Studies

The first program should compare tokenized and non-tokenized infrastructures within the same asset class. Where do issuance costs actually fall? Where do settlement or administrative frictions measurably decline? Which gains arise from technology and which from product redesign? These questions are answerable in settings such as tokenized bonds, tokenized funds, and tokenized collateral operations if researchers gain access to institutional data.

### 20.2 RWA Collateral and Macro Transmission

A second program should study the role of tokenized safe assets in digital collateral systems. How do tokenized Treasury products change reserve management for DAOs, exchanges, and crypto-native firms? Do they reduce endogenous instability or create new leverage channels? How do rate changes pass through from conventional short-term markets to on-chain demand?

### 20.3 Stablecoin and Tokenized-Deposit Competition

A third program should examine competition among stablecoins, tokenized deposits, and potentially public digital-money instruments. The literature needs clearer models and evidence on which use cases favor each design and what their coexistence means for monetary singleness, bank funding, and payment competition.

### 20.4 Governance and Market Power

A fourth program should examine who controls tokenized markets as they scale. Which actors become infrastructural bottlenecks? Does tokenization increase the power of large asset managers, banks, exchanges, or wallet ecosystems? How concentrated are oracle and compliance layers? This is a central but underdeveloped industrial-organization frontier.

### 20.5 Legal Design and Crisis Behavior

A fifth program should focus on crisis states. The literature has many design claims but still limited evidence on what happens under default, sanctions, legal disputes, cyber incidents, or redemption runs. Event studies around stablecoin depegs, custody incidents, or legal interventions can help, but more institutional case analysis is needed.

### 20.6 Emerging Markets and Cross-Border Use

A sixth program should connect tokenized dollar assets and stablecoins to international macroeconomics. Under what conditions do tokenized claims improve access to safe assets, and under what conditions do they intensify unofficial dollarization or weaken local financial systems? The answers may differ sharply across countries.

### 20.7 Private Markets, Carbon, and Verification-Intensive Assets

A seventh program should examine the most difficult tokenization categories: private credit, receivables, real estate, and environmental assets. These areas will test whether tokenization can improve information and enforcement, or whether it mainly redistributes opaque claims through more marketable wrappers.

## 21. Conclusion

The literature on real-world assets on crypto rails has moved beyond the initial excitement phase in which tokenization was treated as a generic cure for financial friction. It has also moved beyond the equally simplistic reaction that tokenization is mere repackaging with no economic value. The strongest current work supports a more nuanced view.

Tokenization is an institutional technology that can reduce some operational and market frictions, especially where assets are standardized, settlement is costly, and collateral mobility matters. It can broaden access, increase programmability, and import high-quality external cash flows into digital markets. It can also create new legal complexity, strengthen new intermediaries, and amplify shadow-banking or run dynamics when money-like claims scale.

The central analytical lesson of the literature is that the token itself is never the whole object. The economic object is the claim-plus-bridge-plus-settlement environment. Once that is recognized, the field becomes clearer. Tokenized Treasuries, stablecoins, tokenized deposits, tokenized funds, private-credit tokens, real-estate wrappers, and carbon-credit tokens can all be placed on a common analytical map without collapsing their differences.

The future of RWAs will not be determined by technology alone. It will be shaped by legal design, monetary architecture, platform competition, investor protection, public-private coordination, and the comparative advantages of incumbent and crypto-native institutions. For economists, this makes RWAs unusually fertile terrain. They expose the evolving boundaries between money, securities, platforms, and property rights in a digitally mediated financial system.

The next decade of research will need to determine not simply whether tokenization grows, but which forms of tokenization deserve to grow. That is the question on which the welfare significance of the field ultimately turns.

## Appendix A. Extended Analytical Taxonomy of RWA Structures

This appendix expands the taxonomy used in the main text and is designed as a practical guide for future empirical and theoretical work.

### A.1 Dimension 1: Nature of the Reference Asset

The first dimension is the underlying reference asset. The literature should distinguish at least the following:

1. Sovereign short-duration claims.
2. Regulated-bank liabilities.
3. Fund shares or pooled investment vehicles.
4. Public securities.
5. Private securities and loan participations.
6. Physical commodities and warehouse claims.
7. Property or infrastructure SPV claims.
8. Receivables and trade-finance claims.
9. Environmental or verification-based rights.

This distinction matters because different asset classes carry different combinations of pricing transparency, legal complexity, and collateral utility.

### A.2 Dimension 2: Nature of the Legal Wrapper

The second dimension is the legal wrapper. A token can represent:

1. A direct beneficial interest.
2. A trust interest.
3. An SPV or corporate-entity share.
4. A contractual redemption right against an issuer.
5. A fund share.
6. A depository or custodian receipt.
7. A notional reference claim with no direct asset ownership.

This dimension is critical because two tokens referencing the same asset can be radically different in bankruptcy or governance terms.

### A.3 Dimension 3: Nature of the Transfer System

The third dimension is the transfer system. The token can live on:

1. A public permissionless chain.
2. A permissioned DLT.
3. A hybrid chain with whitelisting.
4. A centralized exchange ledger with blockchain-adjacent features.
5. An interoperable institutional network.

Transfer architecture affects who can hold the claim, how liquidity forms, and how legal override or reversibility works.

### A.4 Dimension 4: Nature of the Money Leg

The fourth dimension is settlement money. The transaction can settle in:

1. A private stablecoin.
2. A tokenized deposit.
3. Central-bank money in DLT form.
4. Off-chain conventional fiat via delayed linkage.
5. Another tokenized asset or collateral arrangement.

Because settlement quality is central to RWA economics, this dimension should appear in all empirical taxonomies.

### A.5 Dimension 5: Permissioning and Compliance Structure

The fifth dimension is access control. Relevant variables include whether investors are whitelisted, whether secondary transfers are restricted, whether identity is embedded at the wallet level, and whether compliance is enforced on-chain or off-chain.

This dimension strongly affects liquidity, cross-border reach, and DeFi compatibility.

### A.6 Dimension 6: Redeemability and Exit Path

The sixth dimension is how holders exit. Is the token redeemable at NAV? Redeemable for a fixed amount? Tradable only in secondary markets? Redeemable only through intermediaries? Subject to notice periods? Exit design affects run risk and liquidity perception.

### A.7 Dimension 7: Oracle and State-Update Dependence

The seventh dimension is informational dependence. How often must off-chain state be updated? How much of the token’s operation depends on price feeds, reserve attestations, servicer reports, or legal certification? Assets with heavy oracle dependence face distinct fragilities.

### A.8 Dimension 8: Governance and Emergency Control

The eighth dimension is who can intervene. Can transfers be frozen? Can redemptions be paused? Can metadata be changed? Can an issuer blacklist wallets? Governance rights matter for both resilience and censorship risk.

### A.9 Why the Taxonomy Matters

This extended taxonomy is not merely classificatory. It can structure data collection, empirical work, prudential assessment, and welfare analysis. The literature would advance substantially if tokenized products were coded systematically along these eight dimensions.

## Appendix B. Testable Hypotheses for Future Research

To make the literature cumulative, future papers should move toward common testable hypotheses.

### B.1 Operational-Efficiency Hypotheses

**H1.** Tokenization reduces issuance and lifecycle costs most for highly standardized instruments with documentation-heavy but repetitive processes.

**H2.** Tokenization reduces settlement and collateral costs only when paired with a high-quality tokenized money leg or closely synchronized conventional payment process.

### B.2 Liquidity and Access Hypotheses

**H3.** Tokenization increases investor participation and lowers effective minimum investment size more reliably than it increases deep secondary-market liquidity.

**H4.** Tokenized private and illiquid assets exhibit larger access effects than liquidity effects.

### B.3 Collateral and DeFi Hypotheses

**H5.** Tokenized sovereign and money-market claims become disproportionately important in on-chain ecosystems because they jointly deliver yield and collateral quality.

**H6.** The value of tokenized safe assets to crypto-native institutions rises with conventional short-term interest rates and with instability in endogenous DeFi yields.

### B.4 Governance and Industrial-Organization Hypotheses

**H7.** RWA market share will concentrate in platforms that combine issuance, custody, compliant distribution, and settlement integration.

**H8.** Permissioned tokenization architectures will outperform fully open architectures in legally complex asset classes, even if they sacrifice composability.

### B.5 Macro-Financial Hypotheses

**H9.** Growth in tokenized dollar safe assets increases the sensitivity of on-chain financial conditions to conventional monetary policy.

**H10.** Stablecoin and tokenized-safe-asset growth can raise demand for Treasury bills and other reserve assets without necessarily increasing the net supply of safe assets.

### B.6 International and Development Hypotheses

**H11.** Tokenized dollar assets and stablecoins have larger adoption effects in jurisdictions with weaker local currencies or less accessible domestic safe assets.

**H12.** The welfare effects of RWA access in emerging markets are increasing in the quality of digital identity and consumer-protection infrastructure and decreasing in the severity of monetary-policy conflict with local authorities.

## Appendix C. Comparative Scorecard by Asset Class

This appendix offers a synthetic scorecard for how the literature evaluates different RWA categories.

### C.1 Tokenized sovereign and money-market assets

**Operational gain potential:** high.

**Legal complexity:** moderate.

**Liquidity potential:** high if institutionally integrated.

**DeFi composability:** moderate to high when wrappers are robust.

**Systemic importance:** high.

**Main risk:** transformation into unstable money-like collateral chains.

### C.2 Tokenized deposits

**Operational gain potential:** high in wholesale markets.

**Legal complexity:** high but well understood within banking law.

**Liquidity potential:** high inside regulated networks.

**DeFi composability:** low to moderate unless regulation evolves.

**Systemic importance:** very high.

**Main risk:** fragmentation or competition with other settlement assets if singleness of money weakens.

### C.3 Stablecoins backed by RWAs

**Operational gain potential:** high for digital settlement.

**Legal complexity:** high.

**Liquidity potential:** high with network scale.

**DeFi composability:** very high.

**Systemic importance:** very high.

**Main risk:** run dynamics, reserve opacity, concentration.

### C.4 Tokenized public securities and funds

**Operational gain potential:** moderate to high.

**Legal complexity:** moderate.

**Liquidity potential:** depends on incumbent market structure.

**DeFi composability:** limited in permissioned settings, selective in hybrid settings.

**Systemic importance:** potentially high.

**Main risk:** overpromising retail-facing transformation where benefits are mainly back-office.

### C.5 Tokenized private credit

**Operational gain potential:** moderate.

**Legal complexity:** high.

**Liquidity potential:** low to moderate.

**DeFi composability:** dangerous if overextended.

**Systemic importance:** rising.

**Main risk:** circulation of opaque claims through new wrappers.

### C.6 Tokenized real estate

**Operational gain potential:** moderate.

**Legal complexity:** very high.

**Liquidity potential:** often overstated.

**DeFi composability:** low.

**Systemic importance:** currently low.

**Main risk:** liquidity illusion and retail misperception.

### C.7 Tokenized commodities

**Operational gain potential:** moderate.

**Legal complexity:** moderate.

**Liquidity potential:** moderate when the underlying asset is standardized.

**DeFi composability:** moderate.

**Systemic importance:** limited but persistent.

**Main risk:** custody and redemption uncertainty.

### C.8 Tokenized carbon and environmental assets

**Operational gain potential:** moderate in registry coordination.

**Legal complexity:** high.

**Liquidity potential:** uncertain.

**DeFi composability:** low to moderate.

**Systemic importance:** currently low.

**Main risk:** weak underlying verification masked by digital traceability.

## 22. General Equilibrium Scenarios and Long-Run Market Structure

Most of the current literature remains partial equilibrium. It asks whether a given tokenized product reduces some friction, broadens access, or improves collateral usage. But if RWAs grow meaningfully, they may reshape market structure, funding patterns, and the relationship between public and private money. This section sketches the main long-run scenarios discussed, implicitly or explicitly, in the literature.

### 22.1 Scenario One: Tokenization as Back-Office Modernization

In the first scenario, tokenization improves issuance, transfer, and settlement processes while leaving the broad structure of finance intact. Asset managers continue to manage funds, banks continue to provide deposits and wholesale funding, central securities depositories and market infrastructures adapt, and public money remains the anchor of settlement. Tokenized products exist, but mostly as upgraded wrappers inside incumbent institutional systems.

This scenario is probably the most plausible near-term baseline for public securities and wholesale markets. It produces efficiency gains without major disruption. Its main economic question is whether those gains are large enough to justify migration costs and system redesign.

### 22.2 Scenario Two: Tokenized Asset Growth with Stablecoin-Dominated Settlement

In the second scenario, tokenized assets grow significantly, but the settlement leg is dominated not by tokenized deposits or central-bank-linked solutions, but by large private stablecoins. In this world, tokenized Treasuries, funds, private-credit products, and other claims interact heavily with private digital money. The result could be a highly innovative but also highly privatized market infrastructure.

The economic risks are clear. Concentration could intensify around a handful of settlement-token issuers. Monetary singleness could be strained if stablecoins diverge in quality or access. Shadow-banking structures could deepen if yield-bearing assets and money-like liabilities become tightly coupled without strong public safeguards.

Yet the efficiency gains could also be large. Private issuers may innovate faster than public institutions. If reserves are high quality and governance robust, private money legs may support substantial asset-market modernization. The literature is divided on this scenario because it hinges on whether private digital money can remain credible at scale.

### 22.3 Scenario Three: Public-Private Hybrid Infrastructures

In the third scenario, which many official reports implicitly favor, tokenized assets settle through public-private hybrid architectures. Tokenized deposits, wholesale CBDC interfaces, or central-bank-money-linked modules coexist with regulated asset-token platforms. Permissioning, interoperability, and legal finality are embedded from the start.

Economically, this scenario aims to preserve the public anchor of money while capturing some benefits of tokenized asset transfer and programmable finance. It also likely preserves a stronger role for banks and regulated infrastructures. Its cost may be slower innovation, more complex governance, and reduced openness.

This scenario may dominate in wholesale markets and institutionally important securities systems even if more open tokenization persists elsewhere.

### 22.4 Scenario Four: Fragmented Parallel Markets

In a fourth scenario, tokenized markets remain fragmented. Public institutions, banks, asset managers, stablecoin issuers, public chains, and permissioned ledgers all tokenize overlapping claims using non-interoperable infrastructures. Assets are technically tokenized, but liquidity, collateral, and settlement remain siloed.

This scenario is plausible if coordination fails or if legal fragmentation remains high. Economically, it could still deliver localized efficiency gains, but it would undercut some of tokenization’s strongest promised benefits, especially collateral mobility and cross-platform settlement. It could also produce a highly complex supervisory landscape.

### 22.5 Scenario Five: Tokenization as a New Layer of Financialization

A fifth and more critical scenario emphasizes financialization. In this view, tokenization mainly makes it easier to circulate, collateralize, and speculate on claims without necessarily improving underlying production or market access. Tokenized private credit, tokenized real estate, and tokenized environmental claims could become new vehicles for leverage and distribution rather than for genuine efficiency.

This concern is not imaginary. Much of finance’s history involves innovations that lowered transaction costs while also expanding leverage and complexity. Tokenization could follow the same path if asset quality, legal protections, and prudential oversight do not keep pace.

### 22.6 Which Scenario Is Most Likely?

The literature suggests that different asset classes may settle into different scenarios. Public fixed-income markets may lean toward back-office modernization or public-private hybrids. Stablecoins may push toward private-settlement dominance unless public alternatives improve. Private credit and other opaque claims may oscillate between niche utility and over-financialization. Emerging-market use cases may be driven by cross-border access and unofficial dollarization.

Thus, the long-run equilibrium is likely to be heterogeneous rather than singular. That heterogeneity makes comparative institutional analysis even more important.

## Appendix D. Case-Based Mini Reviews of Major RWA Segments

This appendix offers concise mini reviews of the most important RWA segments in order to make explicit where the literature is thick, where it is thin, and what each segment teaches.

### D.1 Tokenized Treasury Funds and Short-Duration Sovereign Products

The literature on tokenized Treasury products sits closest to mainstream asset management and collateral economics. These products are often structurally simple relative to other RWAs: the underlying assets are highly standardized, their pricing is observable, and their credit quality is strong. The tokenization margin therefore centers on distribution, transfer, and collateral use rather than on asset verification.

A recurring finding in both policy work and industry evidence is that tokenized Treasury products become especially attractive when conventional short-term interest rates rise. Higher rates make the opportunity cost of holding non-yielding stablecoins or idle cash-like claims more visible. Tokenized T-bill products can then function as a bridge between crypto-native treasury management and conventional safe-asset yield.

The economic question for future research is not whether these products are useful in a narrow sense. They clearly are for some institutions. The deeper question is whether their on-chain form generates durable efficiencies beyond convenience and whether those efficiencies persist once compliance, custody, and cash-leg costs are fully counted.

### D.2 Stablecoins Backed by Treasury and Cash Reserves

Stablecoins backed by Treasury bills and cash are simultaneously payment instruments, settlement devices, and reserve-backed RWA wrappers. Their market growth has already made them one of the most important real-world-asset structures in existence.

The literature emphasizes that their economic significance derives from composability and monetary use rather than from portfolio choice alone. Users do not primarily hold major stablecoins as investment funds. They hold them as exchange media, collateral, and digital cash. The reserve assets matter because they support that function and generate issuer revenues.

This creates a powerful but delicate equilibrium. If reserve backing is strong and redemption credible, stablecoins can provide real utility. If not, they can become unstable quasi-money. The policy literature now largely treats them as systemically relevant enough to require a distinct regulatory framework. That tells us that the RWA debate has already crossed into macro-financial terrain.

### D.3 Tokenized Deposits and Wholesale Cash Claims

The tokenized-deposit literature is still emerging, but it may be one of the most consequential areas in the long run. Banks and public institutions are exploring whether regulated deposit money can be represented in tokenized form and used inside more programmable or interoperable settlement environments.

This area is analytically important because it forces a direct comparison with stablecoins. Both aim to provide digital cash legs for tokenized markets. But they differ in legal identity, prudential oversight, and relationship to the monetary system. The comparative economics of tokenized deposits and stablecoins is therefore likely to become a major research frontier.

### D.4 Tokenized Public Bonds

Tokenized public bonds have so far functioned mainly as institutional pilots and modernization experiments. The literature is cautiously positive. It does not claim that tokenization transforms credit risk or investor demand. Instead, it suggests that issuance mechanics, registry management, and settlement coordination may improve.

The open question is scale. Will these gains remain niche proofs of concept, or will they justify migration by major sovereign and corporate issuers? The answer likely depends on whether tokenized cash and interoperable post-trade environments develop in parallel.

### D.5 Tokenized Private Credit

Private credit is one of the most discussed but least settled RWA segments. The positive case is intuitive: documentation-heavy, illiquid, difficult-to-distribute claims may benefit from better digital servicing and transfer mechanisms. The negative case is equally strong: those same claims may be poor candidates for broad circulation because their quality is hard to observe.

The literature has not yet resolved this tension. Future work will need to separate genuine servicing and distribution improvements from the temptation to make opaque claims appear liquid simply because they are tokenized.

### D.6 Tokenized Real Estate

Real-estate tokenization remains a popular narrative because it speaks directly to retail intuitions about fractionalization and access. Yet the literature is skeptical of the strongest claims. Tokenization rarely changes the local legal and managerial complexity of property. It usually wraps claims in SPVs or trust structures and changes only the transfer layer.

That does not make it useless. Tokenization can still improve distribution and administrative efficiency. But it suggests that tokenized real estate is more likely to evolve as a niche distribution innovation than as a radical transformation of property markets.

### D.7 Tokenized Gold and Commodity Claims

Gold-backed tokens persist because they combine a familiar store-of-value asset with the portability of digital transfer. The bridge problem is easier than for many other physical assets because custody and pricing infrastructure already exist. Still, the main risk remains redemption and custody credibility. The economic literature would benefit from more systematic comparisons between tokenized commodity claims and existing ETF or depository structures.

### D.8 Carbon and Environmental Assets

Environmental-asset tokenization has attracted interest because registries and double-counting problems create obvious information frictions. Yet this segment also reveals the sharp limit of tokenization: the token cannot fix weak underlying verification. If the environmental claim is low quality, tokenization may simply accelerate its circulation. Therefore, the segment is analytically important as a cautionary case.

## Appendix E. Empirical Research Templates

This appendix provides more detailed templates for future empirical work.

### E.1 Design 1: Regulation as a Difference-in-Differences Shock

Suppose a jurisdiction introduces a tokenized-securities sandbox, a stablecoin regime, or a specific tokenized-fund rule. Researchers can compare issuance volume, asset growth, spreads, investor composition, or venue concentration before and after the change relative to matched jurisdictions without a similar regime. Key controls would include local crypto-market conditions, broader financial trends, and asset-class exposure.

This design is especially promising for Europe, the United Kingdom, Singapore, Hong Kong, and selected U.S. state-level changes.

### E.2 Design 2: Infrastructure Integration Events

A second design exploits discrete integrations: a major exchange listing of a tokenized fund, a wallet-support expansion, a new settlement-token bridge, or a custodian partnership. Such events can affect usage, liquidity, and collateral demand for a tokenized asset. Event studies can estimate changes in on-chain turnover, spreads, issuance growth, or reserve holdings.

The challenge is endogeneity—integrations often occur because demand is already rising. But careful event-window design and matched comparisons may still yield informative evidence.

### E.3 Design 3: Matched Tokenized and Non-Tokenized Products

A third design compares tokenized and non-tokenized versions of economically similar products. Examples include tokenized and conventional short-duration fund claims, tokenized and conventional bond issuance processes, or tokenized and non-tokenized private-credit distribution arrangements. The aim would be to compare cost, settlement time, investor composition, and liquidity.

This design is operationally difficult because tokenized products are often not perfect twins of conventional ones. But where matches can be constructed, the comparison could be highly informative.

### E.4 Design 4: Stress Episodes and Redemption Behavior

A fourth design focuses on stress. Stablecoin depegs, exchange freezes, custody disputes, sanctions events, and large redemption windows can reveal the true architecture of tokenized claims. Researchers should study who runs, how quickly liquidity evaporates, how reserves are liquidated, and whether legal or administrative controls dominate on-chain logic.

These episodes may provide some of the best available evidence because they reveal the true hierarchy of rights and governance.

### E.5 Design 5: Treasury Behavior of Crypto-Native Institutions

A fifth design examines how crypto-native firms and DAOs allocate reserves across stablecoins, native tokens, tokenized Treasuries, and other RWA products. Such analysis could illuminate whether RWAs genuinely stabilize digital ecosystems or merely create new forms of exposure.

A panel of DAO treasuries, exchange reserves, or publicly disclosed digital-asset firms could be informative, especially when linked to interest-rate cycles and crypto-volatility episodes.

### E.6 Design 6: Cross-Border Adoption and Dollarization

A sixth design studies where tokenized dollar assets and stablecoins are adopted most strongly. By linking on-chain activity proxies, exchange flows, local financial frictions, inflation, and capital-account conditions, researchers could test the hypothesis that RWAs spread faster where local safe-asset access is weak.

This would connect the RWA literature to development economics and international macroeconomics.

## Appendix F. Conceptual Comparison: Stablecoins, Tokenized Deposits, and Tokenized Safe-Asset Funds

A recurring source of confusion in both policy and market discourse is the conflation of three distinct objects: reserve-backed stablecoins, tokenized deposits, and tokenized safe-asset fund shares. All can appear to users as dollar-linked digital instruments. But their economics differs materially.

### F.1 Stablecoins

Stablecoins are private digital liabilities, usually issued by nonbank entities or specially structured firms, backed by reserves. They promise par or near-par value and derive utility from transferability and network effects. Their economics is closest to private money, shadow banking, and payment-platform competition.

### F.2 Tokenized Deposits

Tokenized deposits remain bank liabilities. Their economics is therefore closer to regulated commercial-bank money, even when the representation layer is technologically new. The main potential gain is programmability and settlement integration, not the creation of a new monetary claim class.

### F.3 Tokenized Safe-Asset Fund Shares

Tokenized safe-asset fund shares are investment claims, not money liabilities. They may be low volatility and redeemable at NAV, but they are not necessarily par claims. Their economics lies in asset management, collateral use, and treasury operations rather than in pure payments.

### F.4 Why the Distinction Matters

These differences matter for regulation, runs, and welfare analysis. A user seeking a transaction asset may value par redemption and network acceptance. A treasury manager may value yield and collateral quality more. A wholesale settlement system may value legal finality and prudential oversight. Conflating the three objects obscures the design choices facing both markets and policymakers.

## Appendix G. Extended Literature Map by Economics Subfield

This appendix maps the RWA literature into broader economics subfields. The purpose is not merely bibliographic. It is to show how future work can build cumulative bridges rather than reinventing concepts under crypto-specific vocabulary.

### G.1 Corporate Finance and Security Design

Corporate-finance theory enters the RWA field whenever tokenization changes claim design, payout structure, or control rights. For tokenized funds and tokenized securities, the relevant questions include: does the token alter residual-claim structure, transfer restrictions, payout timing, or investor governance? For tokenized private credit and SPV-based real-estate structures, the relevant issues include leverage, agency conflicts, cash-flow waterfalls, and the disciplining role of legal priority.

The corporate-finance literature suggests that investors value clarity around priority, payout, governance, and dilution. Tokenization can improve some dimensions—for example, by clarifying transfers or automating some lifecycle functions—but it can also worsen others if wrapper structures become more complex or if secondary-market demand masks weak governance.

This subfield also helps highlight an underappreciated issue: tokenization can change the boundary between balance-sheet finance and distributed claims. An asset manager may prefer a tokenized fund share structure over direct issuance because it preserves managerial control while enhancing digital distribution. A private-credit originator may prefer tokenized participations because they broaden distribution without fully public securities registration. These are classical contracting choices in new form.

### G.2 Banking and Monetary Economics

Banking and monetary economics enter the RWA field through stablecoins, tokenized deposits, wholesale settlement, reserve composition, and the singleness of money. The key questions include: which digital claims function like money, how redeemability is stabilized, whether par can be sustained, and how private liabilities interact with central-bank anchors.

This literature contributes several important concepts: runs, liquidity transformation, information-insensitive debt, reserve quality, and public backstops. These are crucial because many RWA structures derive value not from their coupon alone but from their use as liquid claims. Stablecoins are the most obvious example, but tokenized short-duration safe assets used as quasi-cash in digital ecosystems can raise related questions.

Banking theory also introduces the possibility that tokenization could alter bank funding. If tokenized deposits and stablecoins compete effectively for transaction balances or institutional collateral demand, the liability side of the financial system could shift. This question remains open, but it is central to long-run welfare and regulation.

### G.3 Asset Pricing and Safe-Asset Demand

Asset-pricing theory enters through convenience yield, liquidity premia, collateral services, and the valuation of money-like assets. Tokenized safe assets may carry different effective convenience yields than non-tokenized versions if their transferability or collateral usability is higher. Conversely, legal or technological uncertainty may reduce convenience.

This creates a fruitful asset-pricing question: do tokenized sovereign and cash-equivalent products command distinct pricing because of their digital utility? If so, under what conditions? Empirical work in this area remains thin, but it could become important as tokenized Treasury products scale.

### G.4 Market Microstructure

Market microstructure theory is essential for RWAs because many claims are thinly traded, fragmented, or highly dependent on market-making. Tokenization can change order-flow composition, settlement risk, venue design, and arbitrage conditions. Public-chain trading introduces additional issues such as MEV, cross-venue fragmentation, on-chain transparency, and wallet concentration.

A central insight from market microstructure is that transparency and immediacy do not automatically improve welfare. Too much pre-trade transparency can reduce dealer willingness to warehouse risk; too little transparency can impair price discovery. Tokenized RWA markets must find new equilibria in these dimensions, especially when institutional participants coexist with public-chain observers.

### G.5 Industrial Organization

Industrial-organization theory becomes relevant because tokenized markets are platforms. Issuers, custodians, money-leg providers, exchanges, wallet providers, oracle operators, and compliance vendors form multisided ecosystems. Network effects imply concentration. Vertical integration can create efficiency or foreclosure. Data control can generate rents.

Future RWA research should more systematically model platform power. Which nodes in the tokenization stack are likely to be commoditized, and which become natural bottlenecks? Does interoperability reduce or reinforce concentration? How do public institutions alter these incentives? These are classical IO questions in a new domain.

### G.6 Law and Economics

Law-and-economics work is indispensable because so much of RWA value depends on the legal bridge. Contract enforceability, insolvency treatment, beneficial ownership, transfer recognition, and regulatory classification are not peripheral—they are central state variables in the asset’s value function.

The law-and-economics contribution is especially important in separating technological possibility from institutional feasibility. A token can move on-chain even when the underlying legal claim remains ambiguous. The economics of such ambiguity is often not captured in purely technical writing.

### G.7 Development and International Economics

Development economics and international macroeconomics matter because tokenized safe assets and stablecoins can change cross-border access to savings instruments and dollar exposure. In countries with weak local financial infrastructure, tokenized claims may improve access to relatively safe or liquid instruments. But they may also undermine local intermediation or intensify external-currency dependence.

This creates a development trade-off the literature has only begun to study. The right benchmark is not the ideal domestic financial system, but the actual alternatives available to users. In some cases tokenized assets may be a genuine welfare improvement; in others, they may deepen structural dependence.

### G.8 Public Economics and Constitutional Design

Public economics enters the RWA discussion in at least two ways. First, public institutions shape the legal and monetary infrastructure that makes high-quality tokenization possible. Second, tokenized systems with treasuries, voting, and emergency controls create mini-constitutional orders whose design affects distribution and resilience.

This suggests that some of the most interesting future work may lie at the intersection of public economics and financial design. How should public policy allocate control between central banks, commercial banks, asset managers, and nonbank issuers in tokenized markets? How should public law treat private digital infrastructures that become systemically important?

### G.9 Organization Economics and Intra-Firm Adoption

An additional, often underexplored, subfield is organization economics. Large institutions adopting tokenization must redesign workflows, compliance, treasury operations, and client onboarding. The gains from tokenization therefore depend on complementary organizational investments, much like earlier information technologies.

This suggests that a productivity J-curve may apply in tokenized finance just as it did in enterprise software and digital operations more broadly. Institutions may incur migration and integration costs before realizing benefits. Researchers should therefore be cautious about evaluating tokenization too early or only through pilot results.

### G.10 Why the Subfield Map Matters

The literature map matters because it prevents fragmentation. RWA research can easily splinter into narrow product studies, policy memos, and legal commentary. A top-journal-quality economics literature review should instead show the common analytical grammar across subfields. That grammar is what allows future research to cumulate rather than merely proliferate.

## Appendix H. Policy-Design Matrix by RWA Category

This appendix develops a policy-design matrix for major RWA classes. The point is not to prescribe one universal framework but to clarify how different policy concerns dominate in different segments.

### H.1 Tokenized Sovereign and Money-Market Products

**Primary policy concern:** investor protection and settlement integrity.

**Secondary concern:** whether the product is used as quasi-money or collateral at scale.

**Policy design need:** clear fund or securities-law treatment, robust custody, redemption clarity, high-quality disclosure, and strong interoperability with compliant settlement rails.

**What should not be overemphasized:** retail-style fraud narratives when the main issue is often market infrastructure.

### H.2 Tokenized Deposits

**Primary policy concern:** banking-law consistency and monetary singleness.

**Secondary concern:** interoperability and settlement architecture.

**Policy design need:** explicit recognition of deposit status, prudential treatment, operational resilience, and rules for use in tokenized asset settlement.

**What should not be overemphasized:** treating tokenized deposits as just another crypto asset.

### H.3 Reserve-Backed Stablecoins

**Primary policy concern:** run resilience, reserve quality, and redemption rights.

**Secondary concern:** payment-system competition and systemic concentration.

**Policy design need:** reserve rules, transparency, segregation, redemption governance, and oversight of systemically significant issuers.

**What should not be overemphasized:** formal labels that obscure money-like functionality.

### H.4 Tokenized Private Credit

**Primary policy concern:** opacity, valuation, and servicing quality.

**Secondary concern:** collateral use and leverage spillovers.

**Policy design need:** disclosure tailored to private-market risk, clear servicing standards, transfer restrictions suitable to investor sophistication, and prudential caution around use as broadly accepted collateral.

**What should not be overemphasized:** promises of retail liquidity.

### H.5 Tokenized Real Estate

**Primary policy concern:** legal clarity of SPV or trust structures and consumer understanding of actual rights.

**Secondary concern:** marketing of fractional illiquidity as if it were true liquidity.

**Policy design need:** strong disclosure on wrapper structure, redemption limitations, governance, local tax and property-law exposure, and realistic treatment of secondary-market claims.

**What should not be overemphasized:** technological transferability as a proxy for economic liquidity.

### H.6 Tokenized Commodities

**Primary policy concern:** custody, auditability, and redemption integrity.

**Secondary concern:** market abuse if token trading detaches from underlying custody reality.

**Policy design need:** warehouse and custodian standards, redemption disclosure, and clear treatment of claim priority.

### H.7 Tokenized Carbon and Environmental Rights

**Primary policy concern:** integrity of the underlying credit or environmental claim.

**Secondary concern:** double counting across registries and chains.

**Policy design need:** registry interoperability, quality assurance, retirement and cancellation clarity, and safeguards against cosmetic tokenization of low-quality credits.

### H.8 Cross-Cutting Policy Insight

Across all categories, the same policy lesson recurs: the higher the value of the underlying claim and the more systemically relevant the use case, the more the market converges toward legally explicit, permission-aware, institutionally anchored designs. This is not a sign that tokenization failed. It is a sign that serious finance remains institutionally embedded.

## Appendix I. Extended Research Questions by Asset Class

This appendix offers a more granular agenda for scholars who want to work in specific RWA segments.

### I.1 Sovereign and Money-Market Tokenization

1. Do tokenized sovereign products reduce treasury-management frictions for crypto-native institutions?
2. How large are the operational-cost differences relative to conventional fund distribution?
3. Does tokenized collateral reduce haircuts or funding costs in digital markets?
4. How does the choice of settlement leg affect adoption?

### I.2 Stablecoins

1. Which reserve disclosures best predict peg resilience?
2. How do redemption frictions affect convenience yield?
3. Do stablecoin markets exhibit winner-take-most dynamics because of exchange integration?
4. How does growth in stablecoin reserves affect demand for short-duration public debt?

### I.3 Tokenized Deposits

1. What use cases favor tokenized deposits over stablecoins?
2. Can tokenized deposits scale outside closed institutional systems?
3. How do banks price the strategic value of tokenized liability issuance?
4. What are the implications for deposit competition and bank funding?

### I.4 Public Securities

1. Do tokenized bonds materially reduce issuance or settlement cost?
2. How much of the gain comes from DLT itself versus simplified process redesign?
3. Are investors willing to pay for DLT-enabled transparency or programmability?
4. How does legal standardization affect the adoption curve?

### I.5 Private Credit

1. Does tokenization improve distribution quality or just increase circulation of opaque claims?
2. How should tokenized private credit be valued when secondary markets are thin?
3. Under what conditions can private-credit tokens be accepted as collateral safely?
4. Does on-chain reporting improve monitoring relative to conventional LP/GP structures?

### I.6 Real Estate

1. When does tokenization improve distribution without generating liquidity illusion?
2. How should welfare be evaluated for fractionalized property claims sold to retail investors?
3. What SPV and trust structures best protect holders under stress?
4. Are there asset subclasses—commercial, residential, infrastructure—where tokenization is more viable?

### I.7 Commodities and Carbon

1. Does tokenized warehousing reduce financing frictions in commodity markets?
2. Which audit and redemption models best support commodity-token credibility?
3. Can tokenization improve carbon-market integrity, or only transfer and tracking?
4. What happens when environmental claims are composed into collateral or trading structures?

## Appendix J. Detailed Mini Case Studies and Their Economic Lessons

This appendix revisits a set of widely cited RWA and tokenization cases in more detail. The goal is not to provide exhaustive institutional history, but to extract the economic lesson each case offers for the literature.

### J.1 World Bank bond-i

The World Bank’s bond-i is often invoked as proof that tokenized securities are feasible. That is true, but too shallow. The more important economic lesson is that tokenization gains are easiest to observe when issuer quality is already beyond question. bond-i worked as a laboratory precisely because the credit risk and legal standing of the issuer were not the variables under test. The market could therefore isolate questions of issuance workflow, ledger coordination, investor allocation, and lifecycle management.

This matters for the literature because it helps separate infrastructure effects from asset-quality effects. Many tokenization failures or controversies involve both weak infrastructure and weak underlying claims, making interpretation difficult. bond-i is cleaner. It shows that if the underlying claim is robust and the legal framework explicit, tokenization can enter as a process innovation rather than an act of speculative trust.

A second lesson concerns scale. bond-i did not prove that all debt markets should immediately migrate on-chain. It proved that the costs of experimentation are manageable and that the benefits of controlled issuance innovation may be real. For economists, this is a reminder that institutional adoption often proceeds by local proof rather than by wholesale replacement.

### J.2 European Investment Bank Digital Bonds

EIB’s digital bond issuances reinforce the same lesson but add another: cooperation among established institutions matters. These bonds typically involved major banks, regulated infrastructures, and clearly defined roles. Economically, they show that tokenization may diffuse through institutional consortia rather than through market entry by entirely new firms.

This has implications for competition and welfare. Coordination among incumbents can lower uncertainty and support high-quality execution. But it can also reduce contestability and reinforce the power of large infrastructures. The literature should therefore evaluate not only whether such experiments succeed, but who gains control over the resulting market architecture.

### J.3 Hong Kong Government Tokenized Green Bonds

The Hong Kong tokenized green bonds are especially interesting because they combine conventional debt issuance, digital infrastructure, and thematic reporting obligations. Green bonds already involve a richer informational lifecycle than plain fixed-income instruments, including reporting on use of proceeds and environmental categories. Tokenization can potentially make those reporting and tracking functions more structured.

The main economic lesson is that tokenization can be particularly attractive for assets with complex but rule-bound lifecycle events. It is not just about transfer speed. It is about reducing coordination and verification costs over the full asset life. That said, tokenization does not make environmental claims true. It only changes how they are administered. This distinction is crucial and generalizes well beyond green bonds.

### J.4 MAS Project Guardian

Project Guardian is one of the clearest demonstrations that serious tokenization research now focuses on integrated market design rather than isolated products. By exploring tokenized bonds, deposits, funds, and FX or settlement interactions, the initiative places RWAs inside a broader architecture of programmable finance.

The economic lesson here is that tokenization value is complementary. A tokenized asset becomes more useful when tokenized money and interoperable transfer logic are present. Put differently, many of the strongest potential gains from RWAs are second-order gains that require multiple layers of modernization to occur together.

This also means that pilot results should be interpreted carefully. A tokenized asset without a strong money leg may show only modest gains. That does not necessarily imply the full architecture lacks value. It may simply mean the complementary pieces are missing.

### J.5 BIS Unified-Ledger Work

The BIS work on the tokenisation continuum and the unified ledger is conceptually important because it elevates the debate from product innovation to system design. The literature on RWAs often starts with “what assets should be tokenized?” BIS reframes the question as “how should tokenized assets, tokenized money, and institutional roles interact?”

The economic value of this reframing is substantial. It encourages researchers to think in general equilibrium rather than partial equilibrium. A tokenized market is not just an issuer plus investors. It is an ecosystem involving settlement media, compliance, governance, and collateral practices. The unified-ledger idea may or may not be the final institutional answer, but it has raised the analytical level of the field.

### J.6 Franklin Templeton and On-Chain Fund Shares

Franklin Templeton’s tokenized fund efforts illustrate a pragmatic route to tokenization. Rather than reinventing investment management, the structure uses on-chain representation to modernize how investors access and transfer fund interests. The underlying portfolio remains familiar. The legal wrapper remains familiar. What changes is record-keeping and transfer architecture.

Economically, this is one of the strongest real-world cases because it demonstrates how tokenization can fit into existing regulated finance without requiring ideological commitments to crypto-native design. It also underlines a broader lesson: some of the most successful tokenization will likely look operationally boring. That is not a weakness. It is often a sign of institutional fit.

### J.7 BlackRock’s BUIDL and the Rise of Tokenized Treasury Reserves

BlackRock’s BUIDL has become emblematic of a different lesson: tokenization can succeed when it meets a specific demand from digital-native markets. Crypto-native firms, DAOs, exchanges, and investors needed yield-bearing, high-quality, dollar-linked assets compatible with blockchain-based operations. A tokenized Treasury-oriented fund structure addressed that need directly.

The main economic significance of BUIDL is not symbolic. It reveals that the marginal user of tokenized safe assets may not be a retail investor seeking novelty, but an institution or protocol seeking a treasury and collateral instrument. This shifts the RWA literature away from democratization rhetoric and toward collateral and treasury economics.

### J.8 Stablecoin Reserve Structures as Hidden RWA Systems

The stablecoin market offers a case study in how some of the largest RWA structures are hidden in plain sight. When a stablecoin issuer holds billions of dollars in Treasury bills and cash equivalents, it has effectively created one of the largest tokenized reserve structures in digital finance. Yet users often perceive the product only as a payments token.

The lesson is that RWA analysis must sometimes look through the front-end use case to the back-end balance sheet. An apparently simple transaction token can be a large, systemically important reserve-intermediation machine. This is why stablecoin analysis belongs centrally within the RWA literature rather than at its edge.

### J.9 Tokenized Private-Credit Platforms

Tokenized private-credit platforms are useful case studies because they expose both the promise and the danger of RWA tokenization. The promise lies in streamlined distribution, better digital reporting, and potential collateral use. The danger lies in the circulation of opaque, illiquid claims through instruments that may appear easier to trade than the underlying economics justify.

This case study points to a more general rule: tokenization is most socially ambiguous when it combines operational innovation with weakly observable underlying risk. Such settings deserve especially careful empirical and prudential analysis.

### J.10 Tokenized Real-Estate Schemes

Real-estate tokenization schemes are often the easiest to explain to retail audiences, yet many have struggled to achieve durable market depth. The reason is not that the technology fails to divide ownership. It is that the underlying asset remains location specific, management intensive, and legally complex.

The economic lesson is that tokenization can reduce some frictions without solving the reasons an asset is illiquid in the first place. If the value of the property remains hard to observe and if investor rights are mediated through an SPV, then tokenization is likely to be a distribution and administration innovation more than a liquidity revolution.

### J.11 Carbon-Token Projects

Carbon-token projects show how tokenization can be overcredited for solving quality problems that it does not solve. When underlying carbon credits are controversial, heterogeneous, or methodologically weak, putting them on-chain may improve transfer and tracking while doing little for credibility. In some cases, tokenization can even worsen market quality by making it easier to circulate low-integrity credits.

This is an important negative case. It illustrates that tokenization succeeds best when it complements a strong underlying claim rather than trying to manufacture one.

### J.12 Case-Study Synthesis

These cases reinforce four cross-cutting lessons.

First, high-quality underlyings and strong legal wrappers are the easiest place for tokenization to generate durable gains.

Second, the largest economic benefits often come from integration with settlement and collateral use rather than from flashy retail trading.

Third, tokenization is often adopted by incumbents to improve institutional workflows rather than to abolish them.

Fourth, the more opaque the underlying asset, the more tokenization risks becoming a distribution technology for uncertainty rather than a solution to it.

## Appendix K. Extended Glossary of Core Concepts in the RWA Literature

This glossary is included because the RWA field uses overlapping terms that often conceal different economic objects.

### K.1 Tokenization

Representation of an existing or newly created claim through a digital token or ledger entry, usually with transfer logic, compliance hooks, and potentially programmable lifecycle functionality.

### K.2 Real-World Asset (RWA)

In the economic sense used in this review, an on-chain token or ledger entry linked to an off-chain asset, liability, or legally recognized claim.

### K.3 Tokenized Deposit

A digitally represented claim on a commercial bank that remains, in legal and prudential terms, a bank deposit.

### K.4 Stablecoin

A digital token designed to maintain a relatively stable nominal value, usually backed by reserves, collateral, or stabilization mechanisms.

### K.5 Tokenized Fund Share

A token representing an interest in an investment fund or similar pooled vehicle, typically redeemable under the terms of the fund rather than at an issuer-defined par.

### K.6 Atomic Settlement

A settlement process in which transfer of the asset and transfer of the payment leg are linked such that one does not occur without the other.

### K.7 Composability

The ability of digital claims and smart contracts to interact programmatically across applications or markets.

### K.8 Bridge Risk

The risk that the off-chain claim, legal wrapper, or information process fails to remain faithfully connected to the on-chain token.

### K.9 Permissioned Tokenization

Tokenized systems in which access, transfer, or participation is restricted through identity, whitelisting, or other governance controls.

### K.10 Singleness of Money

The principle that money used in settlement should remain reliably exchangeable at par regardless of form, maintaining a coherent nominal anchor for the financial system.

### K.11 Oracle

A mechanism or institution that provides off-chain information to on-chain systems for valuation, state updates, or contract execution.

### K.12 Treasury Tokenization

Use of tokenized safe assets or cash-like claims by institutions, protocols, or DAOs to manage reserves, earn yield, or support collateral operations.

### K.13 Liquidity Illusion

The mistaken belief that an asset is economically liquid because its token wrapper is technically transferable.




## Appendix L. Extended Debates and Unresolved Controversies in the RWA Literature

The RWA literature has matured enough that the frontier is no longer the elementary question of whether tokenization is possible. The harder and more interesting questions concern what exactly tokenization changes, under what institutional conditions the gains are durable, and when the resulting structures reproduce older fragilities in new technical forms. This appendix synthesizes the major unresolved controversies that cut across finance, monetary economics, industrial organization, law and economics, and political economy.

### L.1 Does Tokenization Solve Fragmentation or Merely Relocate It?

One of the most common claims in practitioner narratives is that tokenization solves market fragmentation by placing assets on shared rails. The literature is more cautious. Fragmentation in finance arises from multiple sources: legal heterogeneity, incompatible custody practices, settlement timing differences, identity and compliance segmentation, informational opacity, and varying rights of recourse across jurisdictions. Shared technical standards can reduce one type of fragmentation, but they do not automatically harmonize the others.

This matters because the economic comparison is often framed incorrectly. The relevant benchmark is not the most cumbersome legacy workflow but the best-performing regulated infrastructure already available for the relevant asset class. For actively traded government bonds, existing market infrastructure is already highly efficient for core institutional users. For private credit, small-ticket trade finance, or fragmented beneficial ownership records, by contrast, the baseline can be much less efficient. Tokenization therefore does not have a single treatment effect. It has heterogeneous effects that depend on where the incumbent frictions lie.

The literature increasingly suggests that tokenization frequently relocates fragmentation rather than eliminating it. A platform may unify transfer logic while simultaneously introducing new boundaries between chains, between permissioned and public systems, between native and wrapped claims, or between technically mobile tokens and legally immobile rights. In such settings, the question becomes whether the new fragmentation is cheaper or more manageable than the old. This is an empirical question, not an ideological one.

### L.2 Access Expansion versus Screening and Suitability

Another persistent controversy concerns democratization. RWA advocates often describe tokenization as a path toward broader investor participation through smaller minimum investments, continuous access windows, and faster transfers. The literature on household finance and information asymmetry provides reasons for both optimism and caution. Smaller minimum denominations can indeed widen access, but access itself is not welfare maximizing if the underlying claims are complex, illiquid, or difficult to value.

The deeper issue is that many traditional market frictions are not purely technological nuisances. Some are governance devices. Transfer restrictions, accreditation rules, lockups, and intermediary screening can partly reflect attempts, however imperfect, to match assets with appropriate investors, control adverse selection, and manage redemption or run risk. Tokenization can weaken those frictions by design. Whether this is beneficial depends on whether alternative information and governance technologies are strong enough to replace them.

The RWA literature has not yet settled this tradeoff. In some asset classes, such as highly standardized short-duration sovereign exposures, broader digital access is easier to defend. In others, such as private credit, real estate interests tied to complex SPVs, or environmental claims with disputed quality, broader access may expand participation in claims that remain hard to understand and even harder to liquidate in stress. The tension between inclusion and investor protection is thus central rather than peripheral.

### L.3 Are RWAs a New Funding Channel or a New Balance-Sheet Interface?

A surprisingly important debate is whether RWA tokenization should be conceptualized primarily as a financing innovation or as a balance-sheet and treasury innovation. Early discussions often framed tokenization as a new fundraising channel. Recent market developments suggest that, for many institutional use cases, the more important application is balance-sheet management. Tokenized Treasury funds, tokenized deposits, reserve-backed stablecoins, and treasury-management products for DAOs or crypto-native firms function less as fundraising novelties than as programmable balance-sheet instruments.

This reframing has major implications for theory. If tokenization is primarily a funding technology, the key literatures concern entrepreneurial finance, disclosure, adverse selection, and investor matching. If it is primarily a balance-sheet interface, the more relevant literatures concern safe assets, payments, collateral, treasury demand, money-like claims, and settlement finality. The field increasingly points toward the second interpretation for its most economically significant applications.

That does not mean fundraising applications are unimportant. Rather, it means that the largest and most durable RWA segment may be the one that links regulated asset pools to digital balance-sheet management. In that world, the central empirical outcomes are not just issuance volume and investor adoption. They include reserve demand, collateral re-use, redemption behavior, intermediation margins, and substitution between bank deposits, money market instruments, and tokenized safe claims.

### L.4 Composability versus Hidden Leverage

A core innovation in the crypto literature is composability: the ability of assets and contracts to interact across applications without bespoke bilateral contracting at every step. Applied to RWAs, composability is often treated as a pure efficiency gain. Yet the history of financial innovation suggests that enhanced transferability and modularity often go together with greater chain complexity and hidden leverage.

This is where the RWA debate overlaps with older shadow-banking and structured-finance literatures. Once tokenized claims can be posted as collateral, re-used across lending protocols, embedded in automated strategies, or relied upon as reserve assets for other instruments, the system may generate exposure chains that are difficult to observe in real time. Composability can reduce coordination costs in normal times while increasing opacity of contagion channels in stress. What appears on one screen as an elegantly interoperable collateral graph may, from a prudential perspective, be a rapidly transmitting fragility network.

The economic question is therefore not whether composability exists, but whether its benefits exceed the costs of leverage multiplication and informational complexity. The answer is likely to differ between wholesale environments with strong identity, collateral control, and prudential supervision, and open environments where leverage can build through loosely monitored pathways. Much of the future empirical agenda in RWAs concerns measuring these chain effects rather than merely describing token transfers.

### L.5 Does Public-Chain Settlement Matter Economically?

The literature is sharply divided on the significance of public blockchains for RWA markets. One view holds that open infrastructure is essential because it creates interoperability, auditability, and innovation from permissionless entry. Another view sees public chains as largely incidental: if the relevant claims remain heavily regulated, access-controlled, and dependent on legal institutions, then the durable gains may be realizable on permissioned systems or hybrid architectures without exposing critical financial functions to public-chain governance and congestion dynamics.

From an economics perspective, the choice hinges on complementarities. Public chains may add value when a broad ecosystem of wallets, liquidity venues, collateral applications, and developer tools matters for user demand. They matter less when the main use case is controlled institutional settlement among known entities. This suggests a sorting equilibrium rather than a winner-take-all outcome. Retail-adjacent or cross-application use cases may gravitate toward more open environments, while core prudential settlement and regulated wholesale workflows may remain more permissioned.

The unresolved point is whether the coexistence of these architectures is stable. If the most liquid users and programmable applications cluster on public chains while the highest-quality legal wrappers remain on closed systems, the resulting split may itself become a source of inefficiency. Future research should examine when hybrid bridges create socially valuable interoperability and when they create systemic weak points.

### L.6 Are Stablecoins Peripheral to the RWA Story or Central to It?

A recurring mistake in public discussion is to treat stablecoins and RWAs as separate topics. Economically, they are deeply connected. Reserve-backed stablecoins are often among the largest practical examples of tokenized claims linked to off-chain safe assets. Their reserve portfolios frequently include Treasury bills, repo exposures, bank deposits, and other short-duration instruments. In that sense, stablecoins are not outside the RWA story; they are a major RWA architecture with a monetary front end.

The literature has only begun to integrate this point fully. Stablecoin research typically asks about par stability, reserve adequacy, redemption mechanics, and regulatory classification. RWA research asks about tokenization, settlement, collateral use, and investor access. These are two angles on overlapping balance-sheet realities. Once this overlap is recognized, several new questions emerge. How do stablecoin reserve choices affect demand for tokenized safe assets? Under what conditions do tokenized Treasury funds substitute for stablecoin reserves rather than complement them? Do stablecoins expand or compress intermediation margins relative to tokenized deposits or tokenized money market products?

This convergence may prove one of the most consequential themes in the literature. It shifts the center of gravity from novelty claims about tokenized houses or artworks toward the far more economically important question of how digitally transferable balance-sheet claims interact with money and safe assets.

### L.7 The Boundary between Tokenization and Securitization

RWAs are frequently marketed as if they were fundamentally different from earlier forms of financial engineering. The literature is increasingly skeptical of such exceptionalism. Many tokenized structures closely resemble familiar devices: SPV-issued notes, fund interests, warehouse financing arrangements, receivable securitization, or custody-mediated beneficial ownership claims. What changes is not always the economic essence of the claim but the transfer layer, the distribution model, and the monitoring interface.

This does not make tokenization irrelevant. A small change in transfer architecture can have large economic consequences if it affects the investor base, collateral usability, operational costs, or speed of state verification. But the securitization analogy remains useful for identifying old problems in new clothing. The history of securitization teaches that transferability and tranching can mobilize funding while also diffusing responsibility for underwriting quality. If tokenization makes it easier to circulate claims than to evaluate them, then it may recreate familiar vulnerabilities under a different technical vocabulary.

An important unresolved issue is whether tokenization can improve on traditional securitization by lowering verification costs enough to sustain market quality. Better data pipelines, machine-readable covenants, programmable waterfalls, and near-real-time reporting may reduce some historical frictions. Yet none of these gains is automatic, and each depends on the integrity of the information bridge.

### L.8 Liquidity Creation versus Liquidity Theater

Practitioner discourse often equates 24/7 transferability with liquidity. Economic theory urges caution. Liquidity includes immediacy, depth, resilience, and low price impact. A tokenized wrapper can make transfer technically easier without guaranteeing market depth, valuation confidence, or a committed dealer base. In illiquid asset classes, the rhetoric of seamless tradability can become a form of liquidity theater: visible transaction capability without reliable two-sided market support.

The literature suggests several reasons why this gap persists. First, many underlying assets remain idiosyncratic and information-intensive. Second, legal claims may still require off-chain processes for enforcement or settlement. Third, secondary demand may be shallow if the most natural investors intend to hold to maturity. Fourth, continuous trading windows can fragment order flow rather than deepen it. The result is a token that looks more liquid than the underlying economics warrant.

This issue is especially important for policy because illusory liquidity can encourage maturity transformation by perception rather than by formal design. Investors who believe they can exit at will may behave differently from investors who understand that liquidity is conditional. The more tokenization succeeds in making long-duration or opaque claims look money-like, the more prudential concerns about runs and fire-sale dynamics become salient.

### L.9 Incumbent Capture versus Open Entry

A persistent normative claim in crypto circles is that tokenization should lower barriers to entry and weaken incumbent control. Much of the institutional evidence points in a different direction. The most durable RWA initiatives have often been led by incumbent asset managers, banks, regulated exchanges, official-sector consortia, or large infrastructure providers. This pattern may not be accidental. RWA systems depend heavily on legal enforceability, custody quality, investor trust, and regulatory coordination, all of which favor entities with organizational capital and reputational assets.

This generates a tension in the literature. Open-entry infrastructure may support innovation at the application layer, but high-value off-chain claims often require concentrated governance and compliance capacity. The likely outcome is not disintermediation in a strong sense, but reintermediation through a new stack. Some incumbents may lose rents if post-trade and reconciliation costs fall, yet others may gain new rents from operating permissioning, identity, custody, reserve management, or token-agent functions.

This political economy matters because distributional outcomes affect adoption paths. If tokenization primarily strengthens large incumbents, then public-policy support may depend less on decentralization narratives and more on demonstrable efficiency or resilience gains. Conversely, if regulatory design entrenches a small number of gatekeepers, innovation may narrow even as technical infrastructure modernizes.

### L.10 Does Tokenization Make Money More Contestable?

The rise of tokenized claims also reopens classical monetary questions. If households and firms can hold digitally transferable claims linked to government securities, money market portfolios, stablecoin reserves, or bank liabilities through user-friendly interfaces, the boundary between money and investment becomes more contestable. This could intensify competition for deposits, alter bank funding structures, and change the relative demand for different forms of money-like claims.

The economic literature has not yet resolved whether this contestability is welfare enhancing. On one hand, more contestable money-like markets can reduce rents, expand product quality, and discipline inefficient incumbents. On the other hand, they may weaken deposit franchise stability, increase flow sensitivity, and accelerate the migration of liquidity into less protected or more run-prone claims. The answer likely depends on which tokenized products scale and how consistently par convertibility or redemption rights are enforced.

RWAs therefore should not be analyzed only as capital-market instruments. They are part of a broader contest over the architecture of short-term balance-sheet claims. In that respect, the field intersects with long-running debates over money market funds, repo, shadow banking, narrow banking, and central bank digital money.

### L.11 Measurement Pitfalls and the Problem of Double Counting

Empirical claims about RWA growth are often far noisier than the public narrative suggests. Some datasets count only tokens directly linked to financial assets. Others include stablecoins, wrapped assets, tokenized funds, or tokenized deposits. Some market dashboards count the face value of assets represented on-chain, while others report circulating token market value, total value locked, or protocol-level holdings. In many cases the same underlying exposure can appear multiple times across products or chains.

This measurement problem is not trivial. It affects both academic inference and public policy. If RWA growth is overstated because of double counting, policymakers may infer systemic significance too early. If it is understated because major reserve structures or private-chain deployments are excluded, scholars may miss an important migration in market structure. Good empirical work therefore requires explicit treatment of issuance, outstanding circulation, beneficial ownership, reserve holdings, and cross-chain representation as separate concepts.

Measurement pitfalls also arise on the liability side. A token may be fully outstanding on-chain while the underlying claim sits in a pooled omnibus vehicle. Alternatively, multiple on-chain wrappers may reference a common off-chain reserve pool. Without careful balance-sheet mapping, the analyst cannot infer leverage, encumbrance, or redemption robustness.

### L.12 The Role of Law as Product Design

One of the most important conceptual shifts in the literature is the recognition that law is not merely an external constraint on tokenization. It is part of product design. The ranking of claims in insolvency, the segregation of reserve assets, the duties of custodians, the enforceability of tokenholder rights, and the treatment of beneficial ownership are not after-the-fact compliance details. They are economically constitutive of the instrument itself.

This insight has two implications. First, engineering-focused analyses that treat the legal wrapper as a static background condition are incomplete. Second, legal differences can explain divergent adoption outcomes even when technical systems appear similar. Two tokenized products that look nearly identical at the interface layer may present materially different economic exposures because their legal entitlements differ.

The law-as-design perspective also helps explain why official-sector and regulated-institution experiments have advanced rapidly in some segments. High-quality tokenization may require legal simplification and standardization as much as code quality. From this angle, the central policy challenge is not simply to permit innovation but to create claim structures that remain intelligible under stress and insolvency.

### L.13 Is the Future Retail, Institutional, or Infrastructural?

Public narratives about crypto often center on retail users, but much of the RWA literature increasingly points toward institutional or infrastructural use cases as the likely growth center. Tokenized funds, collateral mobility, post-trade automation, intra-group liquidity management, programmable corporate treasury tools, and settlement integration among regulated institutions may scale faster than retail trading in tokenized buildings or invoices.

This possibility matters because it changes welfare metrics. Retail narratives emphasize access and inclusion. Institutional narratives emphasize cost reduction, collateral efficiency, operational resilience, and cross-system interoperability. Infrastructural narratives go further, focusing on the architecture of money, settlement, and market plumbing. The same technology can be judged very differently depending on which of these baselines is used.

The literature has not yet determined which trajectory will dominate. A plausible outcome is a layered equilibrium in which institutional and infrastructural uses account for most economic value while retail applications remain more visible in public discourse. If so, scholarly attention should shift away from novelty examples and toward the quieter but more consequential restructuring of financial back ends.

### L.14 The Political Economy of Standards

Finally, a crucial unresolved topic concerns standards. Tokenization gains are often said to depend on interoperability, but interoperability itself is not a natural state. It is produced through governance choices over data formats, messaging, legal standardization, identity modules, compliance interfaces, custody norms, and acceptable settlement assets. These choices shape who can enter, who bears integration costs, and who captures the rents from coordination.

The economics of standards suggests that early movers can entrench architectures that are locally efficient but socially suboptimal if switching costs later become high. This is especially relevant in RWAs because market participants may converge on standards embedded jointly in code, contracts, and regulation. The political economy of standard setting is therefore likely to be one of the decisive arenas of competition in the next phase of RWA development.

Taken together, these debates imply that the RWA field should not be reduced to a binary dispute between enthusiasts and skeptics. The central analytical task is to identify which frictions are genuinely reduced, which are merely moved, which risks become more visible, which become harder to observe, and how distributional consequences shape the direction of adoption.

## Appendix M. Integrated Research Design Agenda for the Economics of RWAs

This appendix translates the review into a more explicit empirical agenda. A mature literature review should not only summarize claims but also clarify how those claims can be tested. The RWA field remains methodologically young, partly because many high-profile projects are recent, data are fragmented, and important activity takes place in private or permissioned environments. Nonetheless, the core questions are increasingly tractable with careful design.

### M.1 Measuring Issuance, Outstanding Exposure, and Effective Economic Scale

The first challenge is basic measurement. Researchers need to distinguish among at least five concepts: issuance volume, currently outstanding token supply, beneficial ownership concentration, reserve or collateral holdings connected to the token, and effective economic use. A tokenized fund can have substantial issuance but limited secondary trading. A tokenized private-credit note can have modest circulation but large economic significance if widely pledged as collateral. A stablecoin can function as a major RWA channel because of its reserve portfolio even though end users do not experience it as an investment product.

The empirical literature should therefore avoid one-number summaries of “RWA market size.” Instead, it should build modular balance-sheet maps. For each product category, the researcher should identify the legal issuer, the reserve or asset pool, the on-chain representation, redemption rights, transfer restrictions, and any collateral or composability uses. Only then can issuance statistics be interpreted economically.

Measurement also requires temporal discipline. Tokens can be minted and burned quickly. TVL-style snapshots may overstate durable usage if balances are transient or circular. Event-level datasets should distinguish between standing balances and transactional churn. Where possible, researchers should construct flow measures alongside stock measures, especially for settlement-oriented products.

### M.2 Event Studies around Issuance, Upgrades, and Regulatory Announcements

One of the most practical empirical strategies in the field is the event study. Market responses to token launches, chain migrations, reserve-disclosure changes, listing announcements, collateral integrations, or regulatory statements can reveal how investors value different design choices. The advantage of event studies is that they fit a market where institutional changes are discrete and often publicly timestamped.

Several identification cautions are necessary. First, many crypto markets trade continuously and globally, so window construction must account for time-zone overlap and concurrent market events. Second, tokenization announcements often come bundled with broader partnerships or financing news. Third, the relevant outcome variable may depend on the claim type. For tokenized safe-asset products, changes in balances, mint-redemption flows, yield spreads, or on-chain collateral usage may be more informative than token prices.

Still, well-designed event studies can answer important questions. Do investors reward stronger legal segregation of reserves? Does on-chain transparency reduce required spreads? Do chain migrations alter liquidity or concentration? How do official-sector pilot announcements affect the relative valuations of private issuers operating in similar niches? These questions are central and feasible.

### M.3 Difference-in-Differences Designs Using Staggered Regulatory Change

Jurisdictional divergence is one of the richest sources of quasi-experimental variation in the RWA landscape. Different legal systems are moving at different speeds on stablecoin regulation, digital securities frameworks, fund-tokenization permissions, digital identity, custody rules, and tax treatment. This staggered change invites difference-in-differences and triple-differences designs.

A natural setup compares affected issuers or products in reforming jurisdictions with similar entities in slower-moving ones. The outcomes of interest can include issuance growth, balance migration across chains, investor-base composition, yield spreads, redemption patterns, secondary trading activity, and product survival. A third difference can exploit product type, distinguishing tokenized safe assets from tokenized private assets or institutional from retail-facing products.

The challenge, as always, is parallel trends. Jurisdictions that reform early may differ systematically in financial sophistication, policy priorities, or domestic industry structure. Researchers should combine DiD with matching, synthetic controls, or institutional narrative evidence to strengthen interpretation. Even so, the staggered-regulation design is likely to be one of the most productive empirical strategies in the next generation of work.

### M.4 Structural Models of Adoption under Complementarity

Many of the field’s central claims involve complementarities. Tokenized assets become more useful when tokenized money exists, when compliant wallets are widespread, when custody is integrated, and when collateral applications are available. Reduced-form methods alone may struggle to isolate these network interactions. Structural models of platform adoption or two-sided market participation can help.

An appropriate structural model would treat issuers, investors, service providers, and settlement media as interdependent adoption nodes. The issuer values tokenization more when investors are present and settlement is efficient. Investors value participation more when trusted issuers are available and liquidation routes exist. Service providers invest more when both sides scale. Such models can quantify tipping behavior, multiple equilibria, and the welfare effects of standardization.

These models also clarify why many pilots underperform na?ve expectations. If complementarities are strong, isolated pilots may reveal little about the welfare of a more complete ecosystem. Conversely, they can reveal where the weakest complementary link lies. Structural estimation using pilot data, partnership networks, and flow data could therefore make a substantial contribution.

### M.5 Microstructure Analysis of Secondary Trading

A mature RWA literature will need much more careful microstructure work. Claims about improved liquidity should be evaluated using standard measures: turnover, bid-ask spreads, market depth, resilience after order imbalances, and inventory management by intermediaries. For asset classes where quoted spreads are not always observable, researchers can infer transaction costs from trade sequences, dealer behavior, or redemption and minting patterns.

The key comparative question is not whether a tokenized asset trades more frequently than a non-tokenized analog in absolute terms, but whether tokenization changes trading quality conditional on the asset’s information environment, natural holder base, and legal transferability. In some settings, the most relevant outcome may be not secondary trading volume but reduced settlement fails, lower reconciliation costs, or faster collateral mobilization. Microstructure analysis therefore needs to be tied carefully to the function of the instrument.

### M.6 Balance-Sheet Substitution and the Competition for Short-Term Funds

One of the field’s most important but underexplored questions is how RWA products affect the composition of short-term savings and treasury holdings. Do tokenized Treasury funds attract balances that would otherwise sit in stablecoins, bank deposits, or money market funds? Do tokenized deposits defend bank funding franchises by making deposits more programmable? Does the availability of a yield-bearing on-chain safe asset increase the sensitivity of digital cash balances to interest-rate differentials?

These questions lend themselves to panel regressions at daily or weekly frequency using balances, yields, mint-redemption flows, and market rates. Researchers can test whether balances respond to rate changes, regulatory news, custody integrations, or changes in available DeFi collateral use. The broader goal is to map a tokenized version of the money-demand and safe-asset-substitution literature.

### M.7 Stress Episodes and the Economics of Redemption

The RWA field will be judged not only by its performance in normal times but by how structures behave under stress. Stress episodes include market selloffs, custody outages, chain congestion, depegging events, collateral liquidations, sanctions or compliance shocks, and rapid rate moves. Such episodes allow researchers to observe redemption demand, secondary-market discounts, settlement frictions, and flight-to-quality behavior.

An especially valuable direction is to compare products that are economically similar but legally or operationally different. For example, one can compare reserve-backed tokens with different segregation rules, or tokenized Treasury products with different redemption channels. Stress data often reveal which design features matter when the margin for error disappears.

### M.8 Governance Data and the Organizational Economics of Tokenization

A great deal of RWA economics depends on organizational design. Who can freeze transfers? Who approves whitelists? Who updates smart contracts? Who chooses custodians? Who can change valuation methods or oracle sources? These are governance questions, yet they are often absent from market datasets. Future research should build governance datasets that code control rights and change mechanisms across major RWA protocols and issuers.

Such data would allow scholars to test whether stronger governance concentration improves trust and adoption or instead depresses composability and secondary use. The answer may differ by investor type. Institutions may prefer more centralized control if it reduces legal uncertainty. Crypto-native users may value reduced discretionary control. Governance datasets would help clarify which tradeoff is priced where.

### M.9 Chain Choice, Bridge Design, and Interoperability Outcomes

Another underdeveloped empirical theme concerns chain choice. Why do some issuers deploy on public chains, some on private chains, and others across multiple networks? What happens to liquidity, custody concentration, or collateral usage when an issuer expands from one chain to another? How do bridges or canonical wrappers affect market confidence?

These questions can be studied using issuer-level or product-level panels. The outcomes can include balances by chain, trading concentration, user-base overlap, failure incidents, and cost proxies. Chain selection is not merely a technical issue; it is an economic decision involving governance, settlement risk, user reach, and interoperability strategy. Better empirical work here would substantially improve the literature.

### M.10 Development, Inclusion, and the Geography of Access

Claims that RWA tokenization will aid financial inclusion are plausible in some contexts but unproven in most. Researchers should move beyond anecdote by measuring who actually gains access. Do smaller firms obtain funding at lower cost? Do investors in emerging markets gain exposure to assets previously unavailable to them? Or do most gains accrue to already sophisticated institutions that benefit from improved back-end tooling?

The appropriate methods may combine account-level data, surveys, field evidence, and jurisdictional comparisons. Importantly, inclusion should be measured against feasible local alternatives rather than an idealized global benchmark. In some environments, tokenization may expand access meaningfully. In others, the main barriers may remain legal, informational, or macroeconomic rather than technological.

### M.11 Accounting, Auditing, and Verification as Empirical Variables

A distinctive feature of RWA research is that verification quality may itself be an explanatory variable. Audit frequency, reserve attestation quality, public reporting granularity, and disclosure timeliness likely affect adoption and pricing. Economists should therefore engage more directly with accounting and auditing variables. A product with the same underlying asset exposure but stronger reserve verification may exhibit narrower spreads, lower redemption volatility, or greater institutional take-up.

This opens a productive interdisciplinary bridge. The economics of tokenization cannot be understood fully without attention to the informational infrastructure that supports trust. In many cases, the core welfare gains from tokenization may come not from on-chain transferability alone but from better integration between ledgers and auditable reporting.

### M.12 Welfare Evaluation beyond Volume Metrics

Finally, the empirical literature needs better welfare criteria. Issuance volume and TVL are crude indicators. A large tokenized market can be privately profitable while socially ambiguous if it amplifies opacity, creates unstable money-like claims, or shifts risk toward less protected investors. Conversely, a relatively small tokenized market can be socially valuable if it reduces settlement risk, improves resilience, or lowers fixed costs in under-served segments.

Future research should therefore evaluate RWAs along multiple welfare dimensions: operational efficiency, price discovery, investor protection, funding access, resilience under stress, contestability of financial services, and systemic externalities. A top-journal literature review should insist on this broader evaluative framework because the field’s most important effects may not be captured by growth statistics alone.

## Appendix N. Extended Integrative Synthesis by Economics Subfield

The literature on RWAs is often discussed as if it were a niche within crypto studies. A more accurate description is that it is a meeting point for several large traditions in economics. Each tradition highlights different margins of change and different risks of misunderstanding. This appendix draws those connections more explicitly.

### N.1 Corporate Finance and Security Design

From the perspective of corporate finance, tokenization is part of the broader question of how cash-flow and control rights are packaged and sold. The key issues include adverse selection, pledgeability, investor monitoring, and the matching of securities to investor clientele. RWAs matter because they may lower issuance and distribution costs for some claims, but they may also weaken the institutional frictions that historically compensated for information problems.

This perspective is especially useful for private credit, receivables, real estate claims, and tokenized funds. It highlights that the central problem is often not whether a claim can be transferred but whether the transfer mechanism preserves sufficient information and incentive alignment for outside investors to price it sensibly. In this tradition, tokenization is a modification to the technology of financing, not an escape from classical contracting problems.

### N.2 Financial Intermediation and Safe-Asset Theory

From the standpoint of financial intermediation, the most important RWA developments concern short-term safe claims. Tokenized deposits, reserve-backed stablecoins, tokenized Treasury products, and other cash-like instruments belong in the literature on money-like liabilities, collateral, and liquidity creation. The relevant questions concern par convertibility, run risk, collateral quality, re-use, and the interaction between public and private money.

This subfield reminds us that convenience yield, not just nominal return, drives demand for safe assets. A tokenized safe claim may command demand because it is easily mobilized, transferable, and operationally integrated, even if the underlying portfolio is familiar. The RWA literature’s intersection with safe-asset theory is therefore central, especially as digital balance sheets become more programmable.

### N.3 Monetary Economics and the Hierarchy of Money

Monetary economics contributes a framework for understanding how tokenized claims fit into a hierarchy of money. Some claims aspire to par status; others are clearly investment products. Some depend on state backing more directly; others rely on private reserves and governance. RWAs challenge the analyst to ask whether tokenization alters the hierarchy itself or merely changes the interfaces through which users access familiar layers.

This lens is crucial for evaluating stablecoins, tokenized deposits, wholesale settlement assets, and any product designed to function as cash collateral or treasury reserves. It directs attention to convertibility, finality, singleness of money, and the conditions under which private digital claims become macro-financially important.

### N.4 Industrial Organization and Platform Competition

RWA markets are also platform markets. Issuers need custody, compliance, distribution, wallet compatibility, settlement support, and access to users. Chains compete. Custodians compete. Fund managers, token agents, oracles, and interface providers compete. Network effects are therefore pervasive. The industrial-organization literature helps explain why early standards, installed user bases, and control over complementary services matter so much.

This perspective also clarifies why some tokenization markets may become concentrated. If interoperability is incomplete and trust is costly, users may gravitate toward large platforms with established reputations. Such concentration may increase efficiency in some dimensions while reducing contestability in others. The IO lens therefore complements the field’s legal and prudential analysis.

### N.5 Law and Economics of Property, Bankruptcy, and Delegation

Law and economics enters the RWA field through property rights, bankruptcy remoteness, custody, and delegation. A token that appears identical at the interface level may embody very different legal rights depending on whether assets are segregated, whether tokenholders have direct claims, and how insolvency is handled. This is not peripheral metadata. It is part of the economic definition of the instrument.

This subfield helps explain why tokenization may be easier for some assets than for others. Claims with standardized legal foundations and clear recourse are simpler to digitize credibly. Claims with ambiguous ownership, heterogeneous documentation, or context-heavy enforcement are harder. Much of RWA economics is therefore about translating legal complexity into market design.

### N.6 International Economics and Jurisdictional Competition

RWAs are inherently cross-border because digital rails weaken the salience of geography at the interface level even when the underlying legal claims remain local. This creates fertile ground for research on jurisdictional competition, regulatory arbitrage, capital mobility, and currency hierarchy. Different jurisdictions may attempt to attract issuance, custody, or settlement activity by offering favorable legal frameworks, tax treatment, or regulatory clarity.

International economics also highlights the geopolitical stakes. If tokenized dollar claims, dollar reserve products, and dollar-denominated settlement assets continue to dominate, tokenization may deepen existing currency hierarchies rather than flatten them. Conversely, official-sector tokenization efforts in other currency areas may be partly motivated by a desire to preserve monetary autonomy in a digitally integrated world.

### N.7 Development Economics and State Capacity

The development angle is often underdeveloped in mainstream RWA discussion. Yet state capacity, legal infrastructure, cadastral systems, identity systems, and payment access all shape what tokenization can realistically achieve. In weak-state environments, tokenization may promise leapfrogging but confront basic deficiencies in enforceability. In stronger institutional settings, it may reduce costs at the margin without transforming access dramatically.

This lens also disciplines overly generic claims about inclusion. A tokenized claim is useful only if the surrounding institutions support verification, dispute resolution, and redemption. Development economics therefore suggests that the value of tokenization depends strongly on complementarities with public infrastructure.

### N.8 Information Economics and the Cost of Verification

At a deeper level, the RWA literature is about the organization of verification. Who verifies what, when, and at what cost? Can some verification tasks be automated? Which tasks remain relational or judgment-intensive? How much can transparency substitute for intermediation, and where does it fail?

This framing cuts across asset classes. In tokenized Treasury products, verification of underlying asset quality may be relatively cheap; the challenge lies more in legal and operational design. In private credit or real estate, verification of asset quality and cash-flow realization is harder. This explains why tokenization is not equally transformative everywhere. Assets that are already information-light and operationally standardized are more amenable to efficient tokenization than those whose value depends heavily on local knowledge or discretionary management.

### N.9 Political Economy and Distributional Conflict

Finally, political economy explains why technically plausible systems may scale slowly or unevenly. Tokenization redistributes rents among custodians, registrars, brokers, banks, fund administrators, exchanges, and technology providers. It can also alter surveillance capacity, compliance burdens, and the bargaining power of regulators versus private issuers. These distributional consequences influence both market adoption and policy choices.

The political-economy lens is particularly useful for understanding why some of the most institutionally attractive RWA applications advance through consortia, pilots, and incumbent alliances rather than through fully open competition. Technology does not enter a vacuum. It enters sectors with established rent structures and regulatory bargains.

### N.10 A Unifying Interpretation

The unifying interpretation across these subfields is that RWAs are best understood as a new interface layer for old economic problems. They are not old finance with no changes, but neither are they free of inherited constraints. They alter the costs of transfer, verification, and coordination, sometimes enough to change market structure, yet they remain tied to the underlying realities of claim quality, legal enforceability, and monetary hierarchy.

This is why the most persuasive scholarship in the area has moved away from binary judgments. The right question is not whether tokenization is revolutionary in the abstract. It is where, for whom, and through which institutional complements it becomes a meaningful improvement over existing arrangements.

## Appendix O. Extended Agenda of Testable Propositions for Future Scholarship

This final appendix collects a broader set of propositions that emerge from the literature review. The purpose is not to predict a single future path for RWAs but to identify claims that can be falsified. The field will progress fastest if it replaces slogans with cumulative empirical testing.

### O.1 Proposition on Asset Simplicity

Tokenization should scale first and most durably in assets with high legal clarity, low information asymmetry, standardized cash-flow rights, and strong compatibility with collateral or treasury use. This predicts relatively faster adoption in short-duration sovereign-backed claims, regulated fund shares, and institutional cash-management products than in heterogeneous real estate or opaque receivable pools.

### O.2 Proposition on Complementarity

The value of tokenized assets should rise nonlinearly with the availability of tokenized money, compliant wallets, custody integration, and collateral venues. In isolated environments tokenization yields modest gains; in integrated environments it produces larger reductions in settlement and coordination costs.

### O.3 Proposition on Governance Preference Heterogeneity

Institutional users should prefer RWA structures with stronger governance concentration, clearer freeze and whitelist functions, and more legible legal control rights than crypto-native users do. This predicts a segmentation equilibrium in which some products optimize for institutional trust while others optimize for open composability.

### O.4 Proposition on Yield Sensitivity

Balances in tokenized safe-asset products should respond more strongly to policy-rate changes than balances in transaction-motivated stablecoins, especially when wallet and collateral usability are similar. If true, tokenized Treasury products may become an interest-sensitive layer of digital cash management.

### O.5 Proposition on Stress Sorting

During market stress, users should migrate toward products with stronger reserve transparency, shorter asset duration, and more reliable redemption channels. This implies that the design details of attestation, segregation, and redemption should become more strongly priced in stress than in normal periods.

### O.6 Proposition on Liquidity Illusion

For illiquid underlyings, secondary-market trading metrics of tokenized wrappers should overstate true exit capacity relative to economically comparable open-end or interval structures. In other words, visible transferability will not reliably translate into depth when valuation becomes uncertain.

### O.7 Proposition on Incumbent Advantage

Holding asset quality constant, issuers with stronger reputational capital, regulatory permissions, and custody networks should attract disproportionate balances in RWA markets. This predicts concentration and supports the view that tokenization may reintermediate rather than fully disintermediate finance.

### O.8 Proposition on Standard-Setting Power

Entities controlling technical and legal standards should capture durable rents even if pure transaction fees compress. The economic value will migrate toward coordination points such as custody, identity, collateral eligibility, and canonical issuance frameworks.

### O.9 Proposition on Stablecoin-RWA Convergence

As tokenized safe-asset products mature, the distinction between “payments tokens” and “investment RWAs” should blur at the treasury and institutional margin. Products may compete more directly for the same digital cash balances, especially when settlement interfaces converge.

### O.10 Proposition on Regulatory Clarity

Clear legal treatment of tokenized funds, deposits, custody, and redemption rights should increase institutional participation more than generic “pro-innovation” rhetoric does. This predicts especially large adoption responses to targeted legal certainty rather than broad political signaling.

### O.11 Proposition on Cross-Border Currency Hierarchy

Unless countered by official-sector alternatives, tokenization is likely to reinforce the international role of the dollar by making dollar safe assets and reserve products more accessible on digital rails. Competing currency areas may need public or quasi-public tokenized infrastructures to offset this gravitational pull.

### O.12 Proposition on Verification Economics

The welfare gains from tokenization should be larger when on-chain transfer logic is paired with high-quality off-chain data integration, attestation, and audit processes. Code and verification are complements, not substitutes. Weak verification should sharply reduce the net gains even when technical transfer is efficient.

### O.13 Proposition on Developmental Heterogeneity

Tokenization should yield the largest relative inclusion gains where existing market access is poor but core legal enforceability and digital identity are sufficiently strong. Where legal enforcement is weak or macro instability dominates, tokenization alone should have limited inclusion effects.

### O.14 Proposition on Regulatory Endogeneity

Regulation should respond not only to market size but to the degree to which tokenized products become money-like, collateral-relevant, or retail-facing. This implies that two markets of equal size may provoke very different regulatory responses depending on their systemic embedding.

### O.15 Proposition on Long-Run Equilibrium

The likely long-run equilibrium is neither full migration of finance on-chain nor simple collapse back into legacy systems. More plausibly, finance develops a layered architecture in which certain asset classes and settlement functions become deeply tokenized while others remain largely conventional. The empirical challenge is to identify which layers move and why.


## Appendix P. Failure Modes, Negative Cases, and Long-Run Equilibrium Paths

A literature review risks overstating the case for a technology if it focuses only on successful pilots and prominent institutional initiatives. The economics of RWAs also requires careful attention to projects that stalled, use cases that failed to scale, and settings in which tokenization produced little observable welfare gain. Negative evidence is especially valuable in this field because technological narratives naturally privilege visibility and novelty. This appendix therefore asks a harder question: when does tokenization disappoint, and what does disappointment reveal about the underlying economics?

### P.1 Why Many Tokenization Projects Stall after the Demonstration Phase

A recurring pattern in the market is the successful pilot that fails to become a scaled business line. The reasons are often economically mundane in the best sense of the term. First, the incumbent process may already work well enough that the marginal efficiency gain from tokenization does not justify organizational change. Second, the users who would need to change behavior may not be the same entities that capture the savings. Third, regulatory or legal uncertainty can impose fixed costs that are hard to amortize at small scale. Fourth, a tokenized asset without compatible settlement assets, custody, reporting, and distribution channels may remain an isolated object with little practical advantage over a database entry.

These frictions mean that the demonstration problem and the adoption problem are distinct. A pilot can prove technical feasibility while saying very little about whether a credible business model exists. This is not unique to tokenization. Many financial technologies have shown attractive local efficiencies without overcoming coordination costs at the system level. The RWA literature benefits from recognizing that failure to scale is itself informative. It often reveals where complementarities are missing or where incumbent institutional arrangements are stronger than outsider narratives assume.

### P.2 The Importance of Distribution, Not Just Issuance

Another lesson from mixed outcomes is that issuance is only half of the market-making problem. Many tokenized structures can be created; far fewer achieve durable distribution. Distribution requires wallet support, custody acceptance, onboarding processes, legal documentation, tax treatment, reporting workflows, and in many cases a clear investor use case. A tokenized instrument with no natural distribution channel may remain a technical curiosity.

This helps explain why institutional RWA initiatives increasingly center on products that already have identifiable users. Treasury-management products for crypto-native firms, tokenized fund shares for existing wealth or distribution networks, and institutional settlement pilots for known counterparties are easier to place than generic tokenized fractions of heterogeneous assets. In effect, tokenization scales when it plugs into an existing demand channel, not when it assumes demand will materialize because the wrapper is innovative.

### P.3 When the Underlying Asset Is the Wrong Candidate

The field also teaches that not every asset is improved by tokenization. Some assets derive their illiquidity from deep economic features rather than administrative inconvenience. Real estate is a classic example. Dividing exposure into smaller claims does not remove the need for management, local legal enforcement, maintenance, valuation judgment, and transaction-specific due diligence. Likewise, private or idiosyncratic receivables may remain difficult to value even if represented by transferable tokens. Carbon-linked claims may remain contested if the underlying environmental integrity is uncertain.

These negative cases are not embarrassing exceptions. They are analytically valuable because they show that tokenization works best where the underlying claim is already relatively standardized and where the main bottlenecks involve transfer, coordination, or settlement rather than deep uncertainty about value. In this respect, the RWA literature converges with a broader economic lesson: technology tends to improve systems whose core informational problems are already manageable.

### P.4 Why Institutional Products Often Outperform Retail Narratives

A major asymmetry in the literature is that public attention often focuses on retail-facing examples, whereas much of the strongest evidence points toward institutional or infrastructural applications. This asymmetry reflects visibility. Retail examples are easy to narrate, but institutional improvements are often more economically significant. A tokenized fund share that reduces reconciliation costs, improves transferability across custodians, and fits within existing compliance channels may generate more durable social value than a retail experiment in tokenized collectibles or fractionalized property exposure.

The key reason is that institutions can supply what tokenization needs most: coordinated adoption. They can align custody, reporting, settlement, compliance, and governance at the same time. Retail markets, by contrast, often expose tokenization to the hardest problems at once: suitability, speculative demand, fragile secondary liquidity, and weak common standards. It is therefore not surprising that the first robust equilibrium may be one in which institutions adopt tokenization quietly while retail narratives remain aspirational.

### P.5 Shadow-Banking Analogies and the Risk of Recreating Old Fragilities

Negative evidence also matters because tokenization can reproduce older patterns of fragility in digitally accelerated form. The shadow-banking literature is instructive here. Financial innovation often begins as a sensible response to genuine frictions: collateral inefficiency, maturity mismatch, informational delays, or balance-sheet constraints. Over time, however, structures that appear efficient in normal periods can become fragile when investors discover that liquidity, convertibility, or valuation certainty was contingent all along.

RWAs are susceptible to a similar dynamic when tokenized claims become widely used as reserve assets, collateral, or quasi-money without equally robust transparency and backstop arrangements. The danger is not that every tokenized claim becomes systemically risky, but that some claims may be granted a degree of transactional privilege inconsistent with their underlying risk. Once that occurs, the system may display the familiar pattern of shadow banking: money-like convenience in good times and abrupt differentiation under stress.

This does not imply that tokenization is destined to fail. It implies that the prudential lessons of previous market-based finance cycles remain relevant. The appropriate response is not blanket prohibition but product-specific design, transparency, and boundary-setting.

### P.6 Exit, Redemption, and the Politics of Backstops

An underappreciated failure mode concerns the politics of support. Traditional financial systems often work because users believe, sometimes correctly and sometimes not, that important institutions and infrastructures will not be allowed to fail abruptly. Tokenized systems complicate this expectation. Some products are explicitly private and should not expect support. Others are operated by regulated entities whose reputational and prudential commitments make support more plausible. Still others sit in a gray zone where users infer safety from branding, reserve composition, or institutional partnerships even when formal backstops are absent.

The economics of exit and redemption therefore deserves more attention. How quickly can users redeem? At what price? Through which intermediaries? Are redemptions discretionary, rule based, or capacity constrained? Under what conditions can transfers continue while redemptions are impaired? These questions shape whether a tokenized claim behaves like a cash substitute, an investment fund, or something in between. Failure to answer them clearly may itself be a source of instability.

### P.7 Geography, Currency Hierarchy, and the Future of Offshore Finance

RWAs may also reshape the geography of finance in ways that are not immediately visible from product-level analysis. Historically, offshore finance emerged through combinations of legal arbitrage, currency hierarchy, informational advantages, and institutional specialization. Tokenization may lower some costs of distance while intensifying competition over legal domicile, reserve location, and settlement standards.

One possibility is that tokenized finance reinforces existing offshore structures by making dollar-linked claims easier to distribute globally through compliant digital rails. Another possibility is that jurisdictions with strong legal systems but small domestic markets become disproportionately influential by offering favorable tokenization frameworks. In both cases, tokenization does not abolish geography. It changes which layers of geography matter most. The place where the token trades may become less important than the place where the reserve sits, where the issuer is chartered, where insolvency is adjudicated, and where key service providers are supervised.

This is why the RWA literature belongs partly within international political economy. The field is not simply about product innovation; it is also about competition over the legal and monetary architecture of cross-border claims.

### P.8 Long-Run Equilibrium I: Layered Hybridization

The most plausible long-run equilibrium is layered hybridization. In this scenario, tokenization becomes a normal part of financial infrastructure for selected asset classes and workflows, but legacy institutions remain central. Banks continue to intermediate credit and provide core money services. Funds continue to manage portfolios. Central banks continue to anchor the monetary system. What changes is the interface layer linking claims, data, and settlement.

Under layered hybridization, some markets experience meaningful gains in settlement speed, reconciliation, collateral mobility, and programmability, while others remain largely unchanged. Public chains, permissioned ledgers, and conventional databases coexist, with bridges and standards mediating among them. This outcome is institutionally conservative but economically significant. It is also consistent with the evidence so far.

### P.9 Long-Run Equilibrium II: Concentrated Platform Finance

A second equilibrium is concentrated platform finance. Here, a relatively small number of large issuers, chains, custodians, and infrastructure providers dominate tokenized market activity. Their advantage comes from reputation, compliance scale, network effects, and standard-setting power. Innovation continues, but mostly at the edges of systems controlled by large gatekeepers.

This equilibrium could be efficient in some respects. Users may benefit from standardization and trusted infrastructure. Yet concentration also raises concerns about rents, interoperability lock-in, data control, and public-private dependence in critical financial functions. The welfare evaluation would then hinge on whether regulation successfully preserves contestability while allowing scale economies to operate.

### P.10 Long-Run Equilibrium III: Segmented Monetary Layers

A third equilibrium is segmented monetary layering. In this world, different tokenized claims serve different monetary and collateral roles: some remain narrow transaction tokens; some evolve into treasury-management products; some become core wholesale settlement instruments; and others remain ordinary investment wrappers with little monetary function. Rather than converging toward a single dominant tokenized form, the system differentiates sharply by use case.

This equilibrium may be more stable than a one-size-fits-all architecture because it respects the heterogeneity of user needs and prudential constraints. But it also requires clear legal taxonomy. If products are left economically ambiguous, users and regulators may misclassify them, increasing instability. The segmented-layers view therefore reinforces the importance of classification, disclosure, and product-specific oversight.

### P.11 Long-Run Equilibrium IV: Cyclical Enthusiasm and Retrenchment

A less optimistic but historically grounded possibility is cyclical enthusiasm and retrenchment. Tokenization attracts waves of optimism, scaling particularly when rates, risk appetite, and digital-asset valuations are favorable. In stress periods, however, weak structures unwind, liquidity evaporates, and the market retrenches toward a smaller core of highly regulated products. This pattern would resemble earlier cycles in financial innovation, where broad experimentation gradually gives way to a more constrained but more durable post-crisis architecture.

If this is the path, then today’s diversity of experiments should not be interpreted as a stable destination. Instead, it may be the exploratory phase from which a narrower institutional equilibrium eventually emerges. Scholars should therefore treat current product variety not as proof of long-run pluralism but as evidence about selection under uncertainty.

### P.12 What Negative Cases Teach the Positive Literature

The final lesson is methodological. Failed or stalled projects are not mere footnotes to success stories. They identify the boundaries of the technology’s comparative advantage. They show where legal complexity dominates, where demand is too weak, where complementarities are missing, where governance is misaligned, or where transferability is overvalued relative to verification. A strong economics of RWAs must therefore learn as much from disappointment as from scale.

For that reason, future literature reviews should pay closer attention to product mortality, inactive token contracts, undertraded markets, and discontinued pilots. Such evidence helps discipline the field and prevents technological possibility from being mistaken for economic inevitability.

Across these negative cases and equilibrium paths, the broader implication of the review is that tokenization is most likely to endure not as a universal substitute for finance, but as a selective reorganization of verification, settlement, collateral management, and access under continuing legal and monetary constraints. That framing helps reconcile why the most durable RWA use cases are often institutionally conservative even when the surrounding rhetoric is technologically radical.

## References

Aldasoro, Inaki, Sebastian Doerr, Leonardo Gambacorta, Rodney Garratt, and Priscilla Koo Wilkens. 2023. “The tokenisation continuum.” *BIS Bulletin* No. 72.

Bank for International Settlements. 2023. “III. Blueprint for the future monetary system: improving the old, enabling the new.” *Annual Economic Report 2023*.

Bank for International Settlements. 2025. “III. The next-generation monetary and financial system.” *Annual Economic Report 2025*.

Bank for International Settlements. 2025. *Leveraging Tokenisation for Payments and Financial Transactions*.

Bank for International Settlements and Committee on Payments and Market Infrastructures. 2024. *Tokenisation in the Context of Money and Other Assets: Concepts and Implications for Central Banks*.

Committee on Payments and Market Infrastructures, Bank for International Settlements, International Monetary Fund, and World Bank. 2023. *Exploring Multilateral Platforms for Cross-Border Payments*.

European Central Bank. 2025. *The Eurosystem’s Exploratory Work on New Technologies for Wholesale Central Bank Money Settlement*.

European Central Bank. 2025. “Eurosystem expands initiative to settle DLT-based transactions in central bank money.” Press release, February 20.

European Investment Bank. 2021. “EIB issues its first ever digital bond on a public blockchain.” Press release, April 28.

European Investment Bank. 2022. “EIB innovates further with Project Venus, the first euro-denominated digital bond on a private blockchain.” Press release, November 29.

European Parliament and Council of the European Union. 2022. *Regulation (EU) 2022/858 of the European Parliament and of the Council of 30 May 2022 on a Pilot Regime for Market Infrastructures Based on Distributed Ledger Technology*.

European Securities and Markets Authority. 2022. *Report on the DLT Pilot Regime*.

European Securities and Markets Authority. 2024. *Letter to EU Institutions on DLT Pilot Regime Implementation*.

European Securities and Markets Authority. 2025. *Report on the Functioning and Review of the DLT Pilot Regime*.

Franklin Templeton. 2024. “Franklin Templeton Announces Availability of Peer-to-Peer Transfers for Franklin OnChain U.S. Government Money Fund.” Press release, April 25.

Franklin Templeton. 2025. *Prospectus: Franklin OnChain U.S. Government Money Fund*.

Garratt, Rodney, and Hyun Song Shin. 2023. “Stablecoins versus tokenised deposits: implications for the singleness of money.” *BIS Bulletin* No. 73.

Hong Kong Monetary Authority. 2023. “HKSAR Government’s Inaugural Tokenised Green Bond Offering.” Press release, February 16.

Hong Kong Monetary Authority. 2024. “HKSAR Government’s Digital Green Bonds Offering.” Press release, February 7.

Kaousar Nassr, Iota. 2021. “Understanding the tokenisation of assets in financial markets.” *OECD Going Digital Toolkit Notes* No. 19.

Leung, Victor, Jason Wong, Arthur Ying, and Wallace Wan. 2023. “An Assessment on the Benefits of Bond Tokenisation.” *Hong Kong Institute for Monetary and Financial Research Research Memorandum* 04/2023.

Monetary Authority of Singapore and Bank for International Settlements. 2023. *Project Guardian: Enabling Open and Interoperable Networks*.

Monetary Authority of Singapore. 2022. “Yes to digital asset innovation, no to cryptocurrency speculation.” Speech by Ravi Menon, August 29.

Monetary Authority of Singapore. 2025. “Project Guardian advances asset tokenisation through industry collaboration.” Press release, March 24.

OECD. 2025. “Tokenisation of assets and distributed ledger technologies in financial markets: Potential impediments to market development and policy implications.” *OECD Business and Finance Policy Papers* No. 75.

Panetta, Fabio. 2023. “For a few cryptos more: the wild west of crypto finance.” Speech, April 24.

Shin, Hyun Song. 2023. “Blueprint for the future monetary system.” Speech at the BIS Innovation Summit, February 22.

World Bank. 2018. “World Bank Prices First Global Blockchain Bond, Raising A$110 Million.” Press release, August 10.

World Bank. 2019. “World Bank and CBA Partner to enable Secondary Bond Trading recorded on Blockchain.” Press release, August 15.

World Bank. 2024. “World Bank partners with Swiss National Bank and SIX Digital Exchange to advance digitalization in capital markets.” Press release, May 14.

Adhami, Saied, Giancarlo Giudici, and Stefano Martinazzi. 2018. “Why Do Businesses Go Crypto? An Empirical Analysis of Initial Coin Offerings.” *Journal of Economics and Business* 100: 64-75.

Agrawal, Ajay, Christian Catalini, and Avi Goldfarb. 2014. “Some Simple Economics of Crowdfunding.” *Innovation Policy and the Economy* 14 (1): 63-97.

Akerlof, George A. 1970. “The Market for ‘Lemons’: Quality Uncertainty and the Market Mechanism.” *Quarterly Journal of Economics* 84 (3): 488-500.

Allen, Franklin, and Douglas Gale. 1998. “Optimal Financial Crises.” *Journal of Finance* 53 (4): 1245-1284.

Allen, Franklin, and Douglas Gale. 2000. *Comparing Financial Systems*. Cambridge, MA: MIT Press.

Amsden, Ryan, and Denis Schweizer. 2018. “Are Blockchain Crowdsales the New ‘Gold Rush’? Success Determinants of Initial Coin Offerings.” *Small Business Economics* 52 (4): 1149-1163.

Armstrong, Mark. 2006. “Competition in Two-Sided Markets.” *RAND Journal of Economics* 37 (3): 668-691.

Auer, Raphael. 2019. “Beyond the Doomsday Economics of ‘Proof-of-Work’ in Cryptocurrencies.” BIS Working Papers No. 765.

Bank for International Settlements. 2018. *Annual Economic Report 2018*.

Bank for International Settlements. 2021. *Annual Economic Report 2021*.

Bank for International Settlements. 2022. *Annual Economic Report 2022*.

Bank for International Settlements. 2023. *Annual Economic Report 2023*.

Bank for International Settlements. 2024. *Annual Economic Report 2024*.

Bank of England. 2021. *New Forms of Digital Money*. Discussion Paper.

Bank of England and HM Treasury. 2023. *The Digital Pound: A New Form of Money for Households and Businesses?* Consultation Paper.

Baur, Dirk G., KiHoon Hong, and Adrian D. Lee. 2018. “Bitcoin: Medium of Exchange or Speculative Assets?” *Journal of International Financial Markets, Institutions and Money* 54: 177-189.

Belleflamme, Paul, Thomas Lambert, and Armin Schwienbacher. 2014. “Crowdfunding: Tapping the Right Crowd.” *Journal of Business Venturing* 29 (5): 585-609.

Benedetti, Hugo, and Leonard Kostovetsky. 2021. “Digital Tulips? Returns to Investors in Initial Coin Offerings.” *Journal of Corporate Finance* 66: 101786.

Benkler, Yochai. 2002. “Coase’s Penguin, or, Linux and the Nature of the Firm.” *Yale Law Journal* 112 (3): 369-446.

Biais, Christophe, Julien Bisiere, Matthieu Bouvard, and Catherine Casamatta. 2019. “The Blockchain Folk Theorem.” *Review of Financial Studies* 32 (5): 1662-1715.

Bonneau, Joseph, Andrew Miller, Jeremy Clark, Arvind Narayanan, Joshua A. Kroll, and Edward W. Felten. 2015. “SoK: Research Perspectives and Challenges for Bitcoin and Cryptocurrencies.” In *2015 IEEE Symposium on Security and Privacy*, 104-121.

Bordo, Michael D., and Andrew T. Levin. 2017. “Central Bank Digital Currency and the Future of Monetary Policy.” NBER Working Paper 23711.

Brunnermeier, Markus K., Harold James, and Jean-Pierre Landau. 2019. “The Digitalization of Money.” NBER Working Paper 26300.

Brunnermeier, Markus K., and Lasse Heje Pedersen. 2009. “Market Liquidity and Funding Liquidity.” *Review of Financial Studies* 22 (6): 2201-2238.

Budish, Eric. 2018. “The Economic Limits of Bitcoin and the Blockchain.” NBER Working Paper 24717.

Bullmann, Dirk, Jonas Klemm, and Andrea Pinna. 2019. “In Search for Stability in Crypto-Assets: Are Stablecoins the Solution?” ECB Occasional Paper No. 230.

Caillaud, Bernard, and Bruno Jullien. 2003. “Chicken and Egg: Competition among Intermediation Service Providers.” *RAND Journal of Economics* 34 (2): 309-328.

Carstens, Agustín. 2019. “The Future of Money and Payments.” Speech at the Central Bank of Ireland.

Catalini, Christian, and Joshua S. Gans. 2016. “Some Simple Economics of the Blockchain.” NBER Working Paper 22952.

Catalini, Christian, and Joshua S. Gans. 2018. “Initial Coin Offerings and the Value of Crypto Tokens.” NBER Working Paper 24418.

Cheah, Eng-Tuck, and John Fry. 2015. “Speculative Bubbles in Bitcoin Markets? An Empirical Investigation into the Fundamental Value of Bitcoin.” *Economics Letters* 130: 32-36.

Chiu, Jonathan, and Thorsten V. Koeppl. 2019. “The Economics of Cryptocurrencies—Bitcoin and Beyond.” Bank of Canada Staff Working Paper 2019-40.

Cong, Lin William, and Zhiguo He. 2019. “Blockchain Disruption and Smart Contracts.” *Review of Financial Studies* 32 (5): 1754-1797.

Cong, Lin William, Ye Li, and Neng Wang. 2021. “Tokenomics: Dynamic Adoption and Valuation.” *Review of Financial Studies* 34 (3): 1105-1155.

Corbet, Shaen, Brian Lucey, Andrew Urquhart, and Larisa Yarovaya. 2019. “Cryptocurrencies as a Financial Asset: A Systematic Analysis.” *International Review of Financial Analysis* 62: 182-199.

Dang, Tri Vi, Gary Gorton, Bengt Holmstr?m, and Guillermo Ordo?ez. 2015. “Ignorance, Debt, and Financial Crises.” Yale University mimeo.

Diamond, Douglas W. 1984. “Financial Intermediation and Delegated Monitoring.” *Review of Economic Studies* 51 (3): 393-414.

Diamond, Douglas W., and Philip H. Dybvig. 1983. “Bank Runs, Deposit Insurance, and Liquidity.” *Journal of Political Economy* 91 (3): 401-419.

Easley, David, Maureen O’Hara, and Soumya Basu. 2019. “From Mining to Markets: The Evolution of Bitcoin Transaction Fees.” *Journal of Financial Economics* 134 (1): 91-109.

European Banking Authority. 2019. *Report with Advice for the European Commission on Crypto-Assets*.

European Central Bank. 2012. *Virtual Currency Schemes*.

European Central Bank. 2015. *Virtual Currency Schemes: A Further Analysis*.

European Central Bank. 2022. “Crypto-Assets and Decentralised Finance: Functions and Financial Stability Implications.” *Financial Stability Review*, May.

European Commission. 2020. *Digital Finance Strategy for the EU*.

European Parliament and Council of the European Union. 2023. *Regulation (EU) 2023/1114 on Markets in Crypto-Assets (MiCA)*.

Evans, David S., and Richard Schmalensee. 2016. *Matchmakers: The New Economics of Multisided Platforms*. Boston: Harvard Business Review Press.

Farhi, Emmanuel, and Jean Tirole. 2012. “Collective Moral Hazard, Maturity Mismatch, and Systemic Bailouts.” *American Economic Review* 102 (1): 60-93.

Financial Stability Board. 2020. *Addressing the Regulatory, Supervisory and Oversight Challenges Raised by “Global Stablecoin” Arrangements*.

Financial Stability Board. 2022. *Assessment of Risks to Financial Stability from Crypto-Assets*.

Financial Stability Board. 2023. *Global Regulatory Framework for Crypto-Asset Activities*.

Fisch, Christian. 2019. “Initial Coin Offerings (ICOs) to Finance New Ventures.” *Journal of Business Venturing* 34 (1): 1-22.

Foley, Sean, Jonathan R. Karlsen, and Tālis J. Putni??. 2019. “Sex, Drugs, and Bitcoin: How Much Illegal Activity Is Financed through Cryptocurrencies?” *Review of Financial Studies* 32 (5): 1798-1853.

Friedman, Milton, and Anna J. Schwartz. 1963. *A Monetary History of the United States, 1867-1960*. Princeton, NJ: Princeton University Press.

Gans, Joshua S., and Hanna Halaburda. 2015. “Some Economics of Private Digital Currency.” In *Economic Analysis of the Digital Economy*, edited by Avi Goldfarb, Shane M. Greenstein, and Catherine E. Tucker, 257-276. Chicago: University of Chicago Press.

Garratt, Rodney, and Maarten van Oordt. 2021. “Stablecoins as Crypto Safe Assets.” Bank of Canada Staff Working Paper 2021-58.

Goldstein, Itay, Hao Jiang, and David T. Ng. 2017. “Investor Flows and Fragility in Corporate Bond Funds.” *Journal of Financial Economics* 126 (3): 592-613.

Goldstein, Itay, and Ady Pauzner. 2005. “Demand-Deposit Contracts and the Probability of Bank Runs.” *Journal of Finance* 60 (3): 1293-1327.

Gompers, Paul A. 1995. “Optimal Investment, Monitoring, and the Staging of Venture Capital.” *Journal of Finance* 50 (5): 1461-1489.

Gorton, Gary. 2010. *Slapped by the Invisible Hand: The Panic of 2007*. Oxford: Oxford University Press.

Gorton, Gary. 2017. “The History and Economics of Safe Assets.” *Annual Review of Economics* 9: 547-586.

Gorton, Gary, and George G. Pennacchi. 1990. “Financial Intermediaries and Liquidity Creation.” *Journal of Finance* 45 (1): 49-71.

Gorton, Gary, and Jeffery Zhang. 2021. “Taming Wildcat Stablecoins.” NBER Working Paper 29691.

Grossman, Sanford J., and Oliver D. Hart. 1986. “The Costs and Benefits of Ownership: A Theory of Vertical and Lateral Integration.” *Journal of Political Economy* 94 (4): 691-719.

Harvey, Campbell R., Ashwin Ramachandran, and Joey Santoro. 2021. *DeFi and the Future of Finance*. Hoboken, NJ: Wiley.

Hart, Oliver. 1995. *Firms, Contracts, and Financial Structure*. Oxford: Oxford University Press.

Hart, Oliver, and John Moore. 1990. “Property Rights and the Nature of the Firm.” *Journal of Political Economy* 98 (6): 1119-1158.

He, Zhiguo, and Wei Xiong. 2012. “Rollover Risk and Credit Risk.” *Journal of Finance* 67 (2): 391-430.

HM Treasury. 2023. *Future Financial Services Regulatory Regime for Cryptoassets*.

Holmstr?m, Bengt. 1979. “Moral Hazard and Observability.” *Bell Journal of Economics* 10 (1): 74-91.

Holmstr?m, Bengt. 2015. “Understanding the Role of Debt in the Financial System.” *BIS Working Papers* No. 479.

Holmstr?m, Bengt, and Jean Tirole. 1997. “Financial Intermediation, Loanable Funds, and the Real Sector.” *Quarterly Journal of Economics* 112 (3): 663-691.

Howell, Sabrina T., Marina Niessner, and David Yermack. 2020. “Initial Coin Offerings: Financing Growth with Cryptocurrency Token Sales.” *Review of Financial Studies* 33 (9): 3925-3974.

Huberman, Gur, Jacob D. Leshno, and Hamid N. Moallemi. 2021. “Monopoly Without a Monopolist: An Economic Analysis of the Bitcoin Payment System.” *Review of Economic Studies* 88 (6): 3011-3040.

International Monetary Fund. 2021. *Global Financial Stability Report, October 2021*.

International Monetary Fund. 2022. *Global Financial Stability Report, April 2022*.

International Monetary Fund. 2023. *Global Financial Stability Report, April 2023*.

International Monetary Fund. 2024. *Global Financial Stability Report, April 2024*.

International Organization of Securities Commissions. 2022. *Crypto-Asset Roadmap for 2022-2023*.

International Organization of Securities Commissions. 2023. *Policy Recommendations for Crypto and Digital Asset Markets*.

Jensen, Michael C. 1986. “Agency Costs of Free Cash Flow, Corporate Finance, and Takeovers.” *American Economic Review* 76 (2): 323-329.

Jensen, Michael C., and William H. Meckling. 1976. “Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure.” *Journal of Financial Economics* 3 (4): 305-360.

Kahn, Charles M., and William Roberds. 2009. “Why Pay? An Introduction to Payments Economics.” *Journal of Financial Intermediation* 18 (1): 1-23.

Kaplan, Steven N., and Per Str?mberg. 2003. “Financial Contracting Theory Meets the Real World: An Empirical Analysis of Venture Capital Contracts.” *Review of Economic Studies* 70 (2): 281-315.

Katz, Michael L., and Carl Shapiro. 1985. “Network Externalities, Competition, and Compatibility.” *American Economic Review* 75 (3): 424-440.

Katz, Michael L., and Carl Shapiro. 1986. “Technology Adoption in the Presence of Network Externalities.” *Journal of Political Economy* 94 (4): 822-841.

Kiviat, Trevor I. 2015. “Beyond Bitcoin: Issues in Regulating Blockchain Transactions.” *Duke Law Journal* 65 (3): 569-608.

Kiyotaki, Nobuhiro, and Randall Wright. 1989. “On Money as a Medium of Exchange.” *Journal of Political Economy* 97 (4): 927-954.

Krishnamurthy, Arvind, and Annette Vissing-Jorgensen. 2012. “The Aggregate Demand for Treasury Debt.” *Journal of Political Economy* 120 (2): 233-267.

Laffont, Jean-Jacques, and Jean Tirole. 1993. *A Theory of Incentives in Procurement and Regulation*. Cambridge, MA: MIT Press.

Lerner, Josh. 1994. “The Syndication of Venture Capital Investments.” *Financial Management* 23 (3): 16-27.

Lerner, Josh, and Jean Tirole. 2002. “Some Simple Economics of Open Source.” *Journal of Industrial Economics* 50 (2): 197-234.

Liu, Yukun, and Aleh Tsyvinski. 2021. “Risks and Returns of Cryptocurrency.” *Review of Financial Studies* 34 (6): 2689-2727.

Lyons, Richard K., and Ganesh Viswanath-Natraj. 2023. “What Keeps Stablecoins Stable?” *Journal of International Money and Finance* 131: 102777.

Makarov, Igor, and Antoinette Schoar. 2020. “Trading and Arbitrage in Cryptocurrency Markets.” *Journal of Financial Economics* 135 (2): 293-319.

Makarov, Igor, and Antoinette Schoar. 2022. “Cryptocurrencies and Decentralized Finance (DeFi).” *Brookings Papers on Economic Activity* Fall: 141-215.

Milgrom, Paul, and John Roberts. 1990. “The Economics of Modern Manufacturing: Technology, Strategy, and Organization.” *American Economic Review* 80 (3): 511-528.

Mollick, Ethan. 2014. “The Dynamics of Crowdfunding: An Exploratory Study.” *Journal of Business Venturing* 29 (1): 1-16.

Morris, Stephen, and Hyun Song Shin. 2003. “Global Games: Theory and Applications.” In *Advances in Economics and Econometrics*, edited by Mathias Dewatripont, Lars Peter Hansen, and Stephen Turnovsky, 56-114. Cambridge: Cambridge University Press.

Myers, Stewart C. 1977. “Determinants of Corporate Borrowing.” *Journal of Financial Economics* 5 (2): 147-175.

Myers, Stewart C., and Nicholas S. Majluf. 1984. “Corporate Financing and Investment Decisions When Firms Have Information That Investors Do Not Have.” *Journal of Financial Economics* 13 (2): 187-221.

Nakamoto, Satoshi. 2008. “Bitcoin: A Peer-to-Peer Electronic Cash System.” White paper.

OECD. 2020. *The Tokenisation of Assets and Potential Implications for Financial Markets*. OECD Blockchain Policy Series.

Parker, Geoffrey, and Marshall Van Alstyne. 2005. “Two-Sided Network Effects: A Theory of Information Product Design.” *Management Science* 51 (10): 1494-1504.

President’s Working Group on Financial Markets, Federal Deposit Insurance Corporation, and Office of the Comptroller of the Currency. 2021. *Report on Stablecoins*.

Rajan, Raghuram G., and Luigi Zingales. 1998. “Power in a Theory of the Firm.” *Quarterly Journal of Economics* 113 (2): 387-432.

Rochet, Jean-Charles, and Jean Tirole. 2002. “Cooperation among Competitors: Some Economics of Payment Card Associations.” *RAND Journal of Economics* 33 (4): 549-570.

Rochet, Jean-Charles, and Jean Tirole. 2003. “Platform Competition in Two-Sided Markets.” *Journal of the European Economic Association* 1 (4): 990-1029.

Rochet, Jean-Charles, and Xavier Vives. 2004. “Coordination Failures and the Lender of Last Resort: Was Bagehot Right after All?” *Journal of the European Economic Association* 2 (6): 1116-1147.

Saleh, Fahad. 2021. “Blockchain Without Waste: Proof-of-Stake.” *Review of Financial Studies* 34 (3): 1156-1190.

Sch?r, Fabian. 2021. “Decentralized Finance: On Blockchain- and Smart Contract-Based Financial Markets.” *Federal Reserve Bank of St. Louis Review* 103 (2): 153-174.

Schilling, Linda, and Harald Uhlig. 2019. “Some Simple Bitcoin Economics.” *Journal of Monetary Economics* 106: 16-26.

Signori, Andrea, and Silvio Vismara. 2018. “Does Success Bring Success? The Post-Offering Lives of Equity-Crowdfunded Firms.” *Journal of Corporate Finance* 50: 575-591.

U.S. Securities and Exchange Commission. 2017. *Report of Investigation Pursuant to Section 21(a) of the Securities Exchange Act of 1934: The DAO*.

U.S. Securities and Exchange Commission. 2019. *Framework for “Investment Contract” Analysis of Digital Assets*.

Vismara, Silvio. 2018. “Information Cascades among Investors in Equity Crowdfunding.” *Entrepreneurship Theory and Practice* 42 (3): 467-497.

Weber, Beat. 2016. “Bitcoin and the Legitimacy Crisis of Money.” *Cambridge Journal of Economics* 40 (1): 17-41.

Williamson, Oliver E. 1988. “Corporate Finance and Corporate Governance.” *Journal of Finance* 43 (3): 567-591.

World Bank. 2019. *World Development Report 2019: The Changing Nature of Work*.

Yermack, David. 2015. “Is Bitcoin a Real Currency? An Economic Appraisal.” In *Handbook of Digital Currency*, edited by David Lee Kuo Chuen, 31-43. London: Academic Press.

Yermack, David. 2017. “Corporate Governance and Blockchains.” *Review of Finance* 21 (1): 7-31.

Zetzsche, Dirk A., Douglas W. Arner, and Ross P. Buckley. 2020. “Decentralized Finance.” *Journal of Financial Regulation* 6 (2): 172-203.




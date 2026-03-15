# Accounting for Cryptoassets at the Boundary of Cash, Commodities, and Intangibles: A Taxonomy-Based Framework under U.S. GAAP and IFRS

## Abstract

Cryptoassets have exposed a structural weakness in contemporary financial reporting: the architecture of accounting standards was not designed for bearer digital items that are globally tradable, technologically programmable, and economically heterogeneous, yet capable of being held for treasury management, customer intermediation, protocol participation, settlement, fundraising, and speculative investment. For more than a decade, standard setters responded to this development by forcing many cryptoassets into pre-digital categories, especially indefinite-lived intangible assets under U.S. GAAP and intangible assets or inventory under IFRS. Those classifications were not neutral technical choices. They embedded assumptions about control, realization, impairment, and verifiability that systematically misdescribed the economics of many cryptoasset positions. The adoption of FASB Accounting Standards Update No. 2023-08 marked an important corrective by moving certain fungible cryptoassets to fair value measurement through net income, but the broader problem remains unresolved. IFRS continues to rely primarily on the 2019 IFRS Interpretations Committee agenda decision that directs most cryptocurrency holdings to IAS 38 unless they are held for sale in the ordinary course of business, in which case IAS 2 may apply. Neither framework adequately captures the diversity of stablecoins, wrapped tokens, staking positions, utility tokens, nonfungible tokens, or issuer-side obligations.

This article argues that the central accounting problem is one of taxonomy. “Cryptoasset” is not an economically meaningful accounting category unless it is decomposed according to the nature of the rights embedded in the token, the source of value, the mode of settlement, and the way the token is used by the reporting entity. Building on the conceptual frameworks of the FASB and the IASB, recent standard-setting developments, and the emerging literature on digital assets, the article advances a top-journal-style normative analysis with four contributions. First, it shows why historical reliance on intangible-asset accounting generated asymmetry, income statement distortions, and weak comparability. Second, it compares the post-2023 U.S. GAAP model with the current IFRS model and demonstrates that both are only partial solutions. Third, it develops a taxonomy-based framework that distinguishes bearer cryptoassets, claim-based tokens, utility or access tokens, validation-related tokens and rewards, wrapped and bridged tokens, and nonfungible digital rights. Fourth, it proposes recognition, measurement, presentation, and disclosure principles tailored to each class rather than a single catch-all accounting answer.

The article concludes that fair value through profit or loss is generally the most decision-useful basis for bearer cryptoassets with observable market prices, but not because all cryptoassets are alike. Rather, fair value is appropriate when the token behaves economically like a globally traded bearer instrument with no enforceable contractual claim on an issuer. By contrast, tokens that confer legally enforceable redemption rights should be assessed under financial instrument logic; utility tokens should be analyzed through contract and prepayment frameworks; and nonfungible or thinly traded items require more cautious measurement and stronger disclosure. The paper also identifies unresolved standard-setting issues involving staking, internally generated tokens, custody obligations, derecognition, and the interaction between audited financial reporting and proof-of-reserves disclosures. The broader implication is that accounting for cryptoassets should move from residual classification toward principle-based differentiation grounded in rights, risks, and use.

**Keywords:** cryptoassets; cryptocurrency; accounting standards; U.S. GAAP; IFRS; fair value; intangible assets; stablecoins; staking; disclosure

## 1. Introduction

The accounting debate over cryptoassets is often framed as a narrow technical question: should Bitcoin and similar tokens be classified as cash, inventory, financial instruments, or intangible assets? That framing understates the significance of the issue. The rise of cryptoassets has revealed a deeper mismatch between contemporary economic innovation and the inherited categories of financial reporting. Existing accounting architecture was largely built around a world in which assets were physical, claims-based, centrally issued, or at least embedded in relatively stable legal and institutional forms. Cryptoassets do not fit comfortably within that world. Some are bearer digital commodities with no issuer-specific claim. Some are tokenized representations of contractual rights. Some function as access rights to future services. Some emerge as rewards for validation activities carried out within decentralized protocols. Some are wrapped claims on assets that reside on other blockchains or in other legal wrappers. Some are nonfungible records that may or may not embody intellectual property rights, membership rights, or nothing beyond a cryptographically unique identifier. To ask for “the” accounting treatment of cryptoassets is therefore to ask the wrong first-order question.

The more fundamental question is what economic features should determine accounting recognition, measurement, presentation, and disclosure when the object being accounted for is digitally native, technologically mutable, often legally ambiguous, and economically heterogeneous. This article answers that question by arguing that cryptoasset accounting should be built on a taxonomy of rights and uses rather than a residual fallback to legacy categories. The need for such a framework has become more urgent, not less, as the market has matured. Public companies, asset managers, exchanges, payment firms, mining and staking operators, custodians, and increasingly nonfinancial corporations have all had reason to confront the accounting consequences of holding, issuing, safeguarding, lending, pledging, or receiving cryptoassets. At the same time, standard setters have moved only incrementally. Under pre-2023 U.S. GAAP, many cryptocurrency holdings were accounted for as indefinite-lived intangible assets, which meant downward impairment when price declines became observable but no upward adjustment until sale. Under IFRS, the 2019 IFRS Interpretations Committee agenda decision directed most cryptocurrency holdings to IAS 38, Intangible Assets, or IAS 2, Inventories, depending on business model. Those answers reduced immediate uncertainty but created conceptual and measurement tensions that remain visible today.

The FASB’s issuance of Accounting Standards Update No. 2023-08, *Accounting for and Disclosure of Crypto Assets*, is the most consequential recent development in the field. The new guidance requires certain cryptoassets to be measured at fair value with changes recognized in net income each reporting period, with enhanced disclosure around significant holdings and activity. It applies only to a subset of fungible cryptoassets meeting specific criteria, but it nonetheless marks a clear departure from the earlier indefinite-lived intangible model. The move reflects a growing recognition that impairment-only treatment is poorly suited to highly volatile, actively traded assets for which current value rather than historical cost is central to user decision making (FASB, 2023a). Yet the update also leaves major areas unresolved. It does not establish a comprehensive accounting framework for all digital assets. It excludes many economically important items, including nonfungible tokens, various internally generated tokens, and assets that do not fall squarely within the scope criteria. Nor does it resolve difficult questions about staking rewards, wrapped tokens, unit of account, principal-versus-agent considerations in intermediation, or issuer-side accounting for token sales.

IFRS faces a different but equally significant challenge. The 2019 IFRS Interpretations Committee decision was analytically coherent within the logic of existing standards: cryptocurrencies are not cash because they are not widely accepted as a medium of exchange; they are not monetary assets because they do not represent a right to receive a fixed or determinable number of currency units; and they are not financial assets because they do not arise from a contract that creates enforceable rights against another party. Therefore, for most holders, they fall into IAS 38, unless they are held for sale in the ordinary course of business, in which case IAS 2 applies (IFRS Interpretations Committee, 2019). The problem is not that this reasoning is internally inconsistent. The problem is that it pushes a technologically novel and economically diverse set of items into a residual category designed for patents, licenses, software, brands, and other nonmonetary assets lacking physical substance. IAS 38 was not written with decentralized bearer tokens, programmable redemption rights, or token-based governance systems in mind. The fact that cryptoassets can often be made to fit the definition of an intangible asset does not establish that intangible-asset accounting is decision useful for all economically significant subclasses.

This article develops a normative argument with practical implications for standard setters, preparers, auditors, and users of financial statements. Its core claim is that cryptoasset accounting should be organized around four analytical questions. First, does the token embody an enforceable claim against an identifiable counterparty, or is it a bearer instrument whose value depends primarily on market exchangeability and protocol credibility? Second, what is the entity’s economic use of the token: treasury reserve, trading inventory, settlement medium, access right, collateral, customer intermediation asset, or validation-related asset? Third, does the market for the token provide sufficiently observable pricing and orderly turnover to support recurring fair value measurement? Fourth, what technological and legal contingencies affect control, transferability, recoverability, and settlement? Once those questions are asked explicitly, it becomes clear that a single accounting answer for “cryptoassets” is neither conceptually defensible nor operationally efficient.

The paper makes four contributions. First, it synthesizes the institutional evolution of cryptoasset accounting under U.S. GAAP and IFRS and shows that the apparent divergence between them masks a common problem: both frameworks are struggling to map new digital forms onto categories built for older asset structures. Second, it situates the accounting treatment of cryptoassets within broader accounting theory by examining how definitions of assets, monetary items, financial instruments, intangibles, and inventories interact with questions of measurement relevance, conservatism, stewardship, and verifiability. Third, it proposes a taxonomy-based model that differentiates major token types and links those types to recognition and measurement consequences. Fourth, it outlines a disclosure architecture focused on rights, custody, liquidity, valuation inputs, protocol risk, and regulatory risk, thereby extending the debate beyond balance sheet classification alone.

The argument is intentionally broader than the treatment of Bitcoin on a corporate treasury balance sheet, although that issue remains important. The real policy challenge is not merely whether one highly liquid token should be carried at fair value. It is whether accounting can develop a coherent language for economic objects that sit at the intersection of software, markets, payment systems, contractual rights, and community governance. In that sense, cryptoassets are a stress test for accounting thought. They force standard setters to confront questions that conventional classifications could long leave implicit: What makes an asset monetary? When should legal form dominate technological form, and when should economic function prevail? How should accounting respond when control is established by cryptographic key management rather than possession of paper title or registration in a central ledger? What disclosure is required when liquidity depends not only on market depth but also on exchange reliability, bridge integrity, smart contract code, validator incentives, and jurisdictional enforcement?

The analysis proceeds as follows. Section 2 explains why cryptoassets challenge the architecture of existing accounting standards by examining the underlying attributes of digital bearer and tokenized assets. Section 3 analyzes the evolution of U.S. GAAP from the pre-ASU 2023-08 impairment model to the current fair value approach and identifies the issues that remain unresolved. Section 4 turns to IFRS and evaluates the continuing reliance on IAS 38 and IAS 2, including the implications of the IFRS Interpretations Committee agenda decision and the IASB’s more recent willingness to reconsider the adequacy of IAS 38 for new forms of intangible assets. Section 5 develops the conceptual accounting analysis. Section 6 sets out a taxonomy-based framework covering bearer cryptoassets, claim-based tokens, utility tokens, wrapped tokens, validation-related positions, and nonfungible digital rights. Section 7 addresses disclosure, internal control, and assurance issues, with attention to recent regulatory developments including the SEC’s rescission of Staff Accounting Bulletin No. 121 through Staff Accounting Bulletin No. 122. Section 8 considers standard-setting and regulatory implications. Section 9 concludes by arguing that cryptoasset accounting should move from residual classification to differentiated principles grounded in rights, risks, and economic use.

## 2. Why Cryptoassets Challenge the Architecture of Accounting Standards

### 2.1 Cryptoassets Are Not One Economic Object

The term “cryptoasset” is analytically convenient but economically blunt. It groups together instruments that differ in legal structure, settlement mechanism, source of value, governance arrangement, and relationship to identifiable counterparties. Bitcoin and Ether are commonly treated as paradigmatic cryptoassets, yet even between those two examples there are important differences in network function, transaction fee economics, validation structure, and the ecosystem of derivative and staking-related uses. Stablecoins differ further. Some purport to offer redemption against fiat currency or short-duration reserve assets held by an identifiable issuer. Others rely on overcollateralization in smart contracts. Others have historically tried to maintain a peg through endogenous stabilization mechanisms and market incentives rather than through legally enforceable claims on segregated assets. A token issued in connection with a software platform may function primarily as prepayment for services, as a governance mechanism, or as a speculative instrument that traders purchase with no intention of consuming any underlying service. Nonfungible tokens can represent artwork, game items, memberships, deeds, or merely pointers to off-chain content subject to platform-specific conditions. The finance literature has described major cryptoassets in sharply different ways, alternately emphasizing payment potential, speculative demand, portfolio diversification, and market-friction-driven price discovery (Yermack, 2015; Baur, Hong, & Lee, 2018; Corbet, Lucey, Urquhart, & Yarovaya, 2019; Liu & Tsyvinski, 2021; Makarov & Schoar, 2020).

Accounting standards operate by classification. They ask whether an item is cash, a receivable, inventory, property, plant and equipment, an investment, an intangible asset, a derivative, or something else. Classification matters because it determines recognition thresholds, measurement bases, impairment rules, income statement effects, disclosure obligations, and often audit procedures. The classification task becomes difficult when the item being classified does not map naturally onto the assumptions embedded in traditional categories. A cryptoasset may be highly liquid like a marketable security yet lack the contractual claim structure that would make it a financial asset. It may behave economically like a traded commodity yet be held in digital wallets subject to control through cryptographic keys. It may be recorded on a public ledger with perfect transaction traceability yet be associated with severe legal uncertainty regarding ownership, recoverability, or regulatory treatment. It may be software-native and thus seem intangible, but unlike many intangibles it can be sold in standardized units on deep global markets, marked to market in real time, and used in treasury or collateral management.

The accounting tension begins, therefore, with heterogeneity. If cryptoassets are heterogeneous, then the goal of standard setting cannot simply be to identify the one existing category that fits “crypto.” Instead, the goal should be to identify the economically relevant dimensions along which different tokens and token-related positions vary. This is the foundation for the taxonomy proposed later in the paper.

### 2.2 Four Attributes That Distinguish Cryptoassets from Legacy Asset Classes

Four attributes recur across cryptoasset markets and explain why legacy accounting categories strain under their weight.

First, many cryptoassets are digitally native bearer items. Control is established not by contractual registration in a centralized ledger but by the ability to direct transfers through possession or control of private keys or equivalent cryptographic authority. From an accounting perspective, this raises unusual issues of control evidence, segregation, custodial dependence, and recoverability. A reporting entity may have economic exposure to tokens that it does not control directly because a custodian or exchange holds them in omnibus wallets. Conversely, it may appear to control tokens on-chain while remaining unable to realize value because of sanctions, platform insolvency, protocol halts, or smart contract restrictions.

Second, many cryptoassets derive value without conferring an enforceable claim against a counterparty. This is the crucial reason why the IFRS Interpretations Committee concluded that holdings of cryptocurrencies are not financial assets under IAS 32. The economic significance of a bearer token may be undeniable, but the holder does not possess a contractual right to receive cash or another financial asset from an issuer. That feature places such tokens outside some of the most developed measurement and disclosure regimes in modern accounting, which are built around contractual claims and obligations. As a result, accounting is forced into residual categories even when the asset behaves in markets more like a traded financial position than like a traditional indefinite-lived intangible.

Third, cryptoassets are technologically programmable. Smart contracts can determine redemption rules, collateral mechanics, transfer restrictions, vesting schedules, governance rights, protocol fee flows, or staking rewards. This programmability means that legal rights and economic outcomes may depend jointly on code, off-chain legal documents, exchange rules, governance votes, and network adoption. Accounting classification cannot responsibly ignore legal form, but neither can it assume that the economically relevant terms of the asset are fully captured in a conventional contract. In some cases the critical terms reside in smart contract code or community governance mechanisms that may change over time.

Fourth, cryptoasset markets combine high-frequency price discovery with discontinuous liquidity and infrastructure risk. For major tokens, quoted prices may be available across many venues around the clock. Yet observed prices may differ meaningfully across exchanges, currencies, and market conditions. Markets can fragment by jurisdiction, settlement venue, or collateral regime. Thinly traded tokens can exhibit quoted prices with little real depth. Bridge failures, exchange suspensions, or smart contract exploits can impair realizability even when a notional market price exists. This means that fair value accounting for cryptoassets is both attractive and difficult: attractive because current market value is often central to economic decision making, difficult because market structure and principal market determination are less straightforward than for many traditional securities.

### 2.3 Why Cash, Inventory, and Intangible-Asset Labels Each Capture Only Part of the Picture

The temptation to classify certain cryptoassets as cash has persisted since Bitcoin’s early years, but the conceptual obstacles are substantial. Cash is normally understood as legal tender or demand deposits readily usable to settle obligations. The IFRS Interpretations Committee explicitly concluded that cryptocurrency is not cash because it is not widely used as a medium of exchange and is not issued by a jurisdictional authority or other party capable of requiring acceptance in settlement (IFRS Interpretations Committee, 2019). Even where a token is colloquially described as “digital cash,” accounting requires greater specificity. Economic volatility alone is not decisive, because even volatile foreign currencies remain cash. The core problem is that most bearer cryptocurrencies do not provide the holder with a claim denominated in a currency unit backed by an institutional monetary system. Stablecoins complicate this analysis, but only some stablecoins may credibly approximate monetary claims, and even then classification should depend on enforceable redemption structure rather than marketing language.

Inventory is a more plausible label in certain settings, especially for broker-traders, market makers, or entities whose ordinary activities involve purchasing and reselling tokens. IAS 2 already contains a broker-trader exception permitting fair value less costs to sell for commodity broker-traders. This logic can be extended to certain crypto intermediation businesses. But inventory classification is entity-specific and business-model-dependent. It may be appropriate for a trading firm and inappropriate for a treasury holder of the same token. Inventory also does not solve the broader classification problem for entities holding cryptoassets as reserve assets, collateral, ecosystem participation assets, or long-term speculative positions.

The intangible-asset label has historically been the residual answer because many cryptoassets are identifiable, nonmonetary, and lack physical substance. Under that logic, they fit IAS 38 and, under pre-2023 U.S. GAAP practice, often Subtopic 350-30 as indefinite-lived intangible assets. Yet the residual fit is precisely what generates dissatisfaction. A category designed to account for patents, trademarks, licenses, and similar rights does not necessarily produce decision-useful results for actively traded digital bearer instruments. Intangible-asset accounting is especially strained when the asset’s value is realized continuously through market exchange rather than through use in generating future cash flows. The resulting measurement rules can yield severe asymmetry: impairment losses recognized when prices fall, but gains recognized only on sale, even when the market value has recovered or greatly increased by period end. Such asymmetry may be defensible for many internally generated or thinly traded intangibles. It is much harder to defend for assets whose economic significance to users lies precisely in their current market value and liquidity.

### 2.4 The Standard-Setting Problem Is Not Merely Technical but Conceptual

Much of the public discussion presents cryptoasset accounting as if standard setters were simply “behind” innovation and needed to catch up by writing a rulebook. There is some truth in that criticism, but it misses the conceptual difficulty. Standard setters are not just responding to a new asset class. They are deciding how accounting categories should respond when legal rights, technological architecture, and market behavior no longer move together neatly. Traditional accounting categories have often relied on the relative stability of certain pairings: financial assets involve contractual claims; inventory involves items held for sale; intangible assets involve nonphysical sources of future benefit often lacking active markets; cash involves monetary units recognized as settlement media. Cryptoassets disrupt those pairings. A noncontractual bearer token may trade in deep, globally visible markets more like a commodity or security than like a typical intangible. A token may promise stability without creating a financial asset in accounting terms because the purported support mechanism is not legally enforceable. A protocol may distribute rewards through code-driven validation rather than through bilateral contracts. An exchange may safeguard customer assets in ways that create operational and legal risk exposure not easily described through traditional custody narratives.

For this reason, the cryptoasset debate is also a debate about what accounting categories are for. Are they meant to preserve continuity and comparability by forcing new phenomena into established definitions until overwhelming pressure requires a separate standard? Or should they evolve sooner when technological innovation exposes repeated failure in the relevance of existing measurement outcomes? The FASB’s shift in 2023 suggests one answer: when a residual classification becomes decision-usefulness-defeating, targeted intervention is warranted. The continuing IFRS debate suggests another: existing standards can sometimes be stretched, but that very stretching reveals limits in the architecture of older frameworks. The most productive path is neither immediate proliferation of highly specific token rules nor indefinite reliance on residual categories. It is a principles-based taxonomy grounded in rights, economic use, and measurement attributes.

## 3. U.S. GAAP: From Indefinite-Lived Intangible Assets to Targeted Fair Value Measurement

### 3.1 The Pre-2023 Default: Indefinite-Lived Intangible Accounting by Analogy

Before the FASB acted directly, U.S. GAAP contained no cryptoasset-specific standard for holders. Practice converged around the view that many cryptocurrencies should be accounted for as indefinite-lived intangible assets. The logic was straightforward. These assets were identifiable and lacked physical substance. They were not cash equivalents because they were not readily convertible into known amounts of cash with insignificant risk of value change. They were not inventory unless held by entities for resale in the ordinary course. They were generally not financial assets because they did not represent a contractual right to receive cash or another financial instrument. As a result, preparers, auditors, and industry guidance largely treated holdings such as Bitcoin as indefinite-lived intangible assets under Subtopic 350-30. The AICPA’s Digital Assets practice aid reinforced that view and became a focal implementation source in the absence of direct FASB guidance.

That classification had immediate operational appeal. It offered an existing codification home, fit the definitional language reasonably well, and was conservative in the face of legal and technological novelty. But the measurement consequences quickly proved controversial. Indefinite-lived intangibles are initially recorded at cost and subsequently tested for impairment. If the fair value drops below carrying amount, an impairment loss is recognized. If fair value later recovers, upward remeasurement is not permitted. Gains are realized only upon sale. For a volatile, actively traded asset, this meant the financial statements could become economically stale almost immediately. A company could hold a cryptoasset through a period of sharp volatility, record impairment when prices fell intra-period or by reporting date, and then continue to report the impaired carrying amount even if the price rebounded strongly before issuance of the next financial statements. The balance sheet would understate current economic value, while net income would reflect asymmetric losses without symmetric recognition of gains.

Several consequences followed from this accounting asymmetry.

First, comparability suffered across entities and periods. Two companies with identical economic exposure could report meaningfully different carrying amounts depending on acquisition dates, interim price paths, and sale timing. A firm that acquired a token at a market peak and held through a decline would lock in a low carrying amount after impairment; another that purchased later at a lower price could report a similar or even higher carrying amount despite holding the same quantity of the same token. Period-to-period income comparisons were similarly distorted because realized gains depended partly on historical carrying amounts shaped by previous impairments rather than by economically current prices.

Second, the impairment model weakened the informativeness of the balance sheet for treasury holders, investment entities, and users seeking to assess liquidity or collateral capacity. In many cases, users cared precisely about the current liquidation value of cryptoassets and the entity’s exposure to price changes. Historical cost net of impairment conveyed little of that information. Preparers often tried to compensate through non-GAAP measures or footnote disclosures, but doing so only underscored the inadequacy of recognition and measurement within the primary statements.

Third, the impairment model created a subtle management problem. It did not necessarily invite widespread manipulation, but it did create opportunities for earnings timing through sales of appreciated cryptoassets. Because gains were recognized only on disposal, entities could influence reported results by choosing when to realize gains against a backdrop of already impaired carrying amounts. The resulting financial statement effects did not mirror the economic management of exposure, which often centered on holding or hedging positions rather than on generating accounting gains through selective disposition.

Fourth, the asymmetry complicated stewardship analysis. Conservative accounting is often defended as protecting users against overstatement. Yet conservatism is not an unqualified virtue when it systematically impairs relevance for assets whose market values are central to current decision making. Cryptoassets exposed this tension vividly. Preparers complained not simply because fair value accounting would report more gains, but because the existing model failed to represent risk exposure consistently. A balance sheet that captures only downside recognition while ignoring recovered or appreciated value may be conservative, but it is not necessarily neutral or decision useful.

The old model was sometimes justified by appeal to volatility. If cryptoasset prices are highly unstable, then perhaps prudence requires waiting for realization. But that argument misses an important point. Volatility is not itself a reason to reject fair value when market price is the most economically relevant attribute. Public equities can be volatile; exchange-traded commodities can be volatile; derivatives can be extremely volatile. Accounting does not respond by defaulting all such positions into impairment-only models. The real issue is whether observable current value provides better information than historical cost for the asset in question. For many major cryptoassets, the answer became increasingly difficult to deny.

### 3.2 Why the Indefinite-Lived Intangible Model Persisted So Long

The persistence of the old U.S. GAAP treatment was not merely bureaucratic inertia. It reflected a deeper discomfort with writing specialized guidance for a market perceived by many as volatile, partially speculative, and institutionally unsettled. Standard setters are understandably wary of overfitting standards to a rapidly evolving object whose legal status may change. Moreover, because cryptoassets did not create straightforward contractual rights, they fell outside the most mature fair value accounting infrastructures in GAAP, which often concern financial instruments. Fair value measurement under Topic 820 could still apply if another standard required or permitted it, but until ASU 2023-08 there was no specific standard directing that outcome for most cryptoasset holdings.

There was also a philosophical question. If an asset is not a financial instrument, and if its source of value lies partly in network adoption and market sentiment, should accounting elevate market price to the primary measurement basis? Some observers argued that doing so would make financial statements overly sensitive to speculative swings. Others worried about the reliability of market prices derived from fragmented exchanges, offshore venues, or markets vulnerable to manipulation. These concerns were not trivial. But the choice was never between perfect reliability and imperfect relevance. It was between an increasingly artificial historical-cost-plus-impairment model and a fair value approach that more faithfully represented how market participants and corporate decision makers actually evaluated these assets.

By the early 2020s, the pressure for change intensified because cryptoassets had moved beyond retail speculation into corporate treasuries, custodial platforms, investment products, and financial intermediation. Users increasingly expected the primary financial statements to communicate current exposure, not merely acquisition cost net of impairment. The accounting treatment had become a barrier not only to comparability but also, in the view of some preparers, to rational financing and treasury decisions.

### 3.3 ASU 2023-08: A Significant but Bounded Reform

In December 2023 the FASB issued Accounting Standards Update No. 2023-08, *Accounting for and Disclosure of Crypto Assets*. The update marked a pivotal change by requiring entities to measure qualifying cryptoassets at fair value each reporting period, with changes recognized in net income (FASB, 2023a). The standard applies only when six scope criteria are met: the asset must meet the definition of an intangible asset under the Codification glossary; it must not provide the asset holder with enforceable rights to, or claims on, underlying goods, services, or other assets; it must reside on a distributed ledger based on blockchain or similar technology; it must be secured through cryptography; it must be fungible; and it must not be created or issued by the reporting entity or its related parties. The amendments are effective for fiscal years beginning after December 15, 2024, including interim periods within those years, with early adoption permitted.

The FASB’s solution is notable for its precision. It does not say that all digital assets are fair value assets. It instead identifies a subset of cryptoassets whose economic features, in the Board’s view, justify recurring fair value remeasurement. The scope criteria are important because they reveal the conceptual logic of the standard. Fair value is deemed appropriate primarily for fungible bearer-like cryptoassets that lack enforceable claims on an underlying issuer or counterparty. In other words, the Board targeted the very subclass for which the indefinite-lived intangible model had become most visibly distorted.

The standard also improves disclosure. Entities must separately present cryptoassets measured under the new guidance from other intangible assets on the balance sheet. They must disclose significant holdings, changes during the reporting period, and additional information about restrictions or disposal rights. These requirements respond to a persistent user complaint: even when entities disclosed cryptoasset exposures in narrative form, the lack of balance sheet prominence and standardized footnote detail limited comparability and analytical usefulness.

Conceptually, ASU 2023-08 is best understood as a decision-usefulness intervention rather than a comprehensive theory of digital assets. The FASB did not redefine cryptoassets as financial instruments. It did not conclude that such assets are cash equivalents or commodities in a legal sense. Instead, it recognized that for a defined subset of cryptoassets, fair value with changes in earnings provides more relevant information than cost minus impairment. This is an important precedent. It suggests that standard setters need not wait for perfect legal or economic analogies to legacy asset classes before choosing a measurement basis that better matches how users evaluate an asset.

### 3.4 The Merits of the New U.S. GAAP Model

The benefits of ASU 2023-08 are substantial.

First, it restores symmetry to the recognition of gains and losses for in-scope cryptoassets. That alone improves comparability across firms and across periods. Carrying amounts now track current market values rather than being anchored to acquisition dates and impairment history. Income statement effects reflect period-to-period changes in value rather than realized gains over previously impaired bases.

Second, the fair value model aligns accounting with economic use for many holders. When a company maintains cryptoassets as treasury reserves, collateral pools, or investment positions, management and investors typically focus on current value, liquidity, and exposure to price changes. The balance sheet and income statement should reflect those concerns more directly.

Third, the new model reduces the need for workarounds. Under the old regime, entities often relied heavily on non-GAAP measures, supplemental tables, or earnings call explanations to convey what users regarded as the “real” economics of their holdings. Better primary statement recognition reduces dependence on such auxiliary communication channels.

Fourth, the standard creates a more coherent disclosure environment for in-scope assets. Separate presentation from other intangibles acknowledges that bearer cryptoassets with active markets are analytically different from conventional indefinite-lived intangible assets such as trademarks or perpetual licenses.

Fifth, the change has an indirect governance benefit. When primary financial statements better reflect actual economic exposure, boards, audit committees, and risk managers can discuss treasury and risk management policies using reported measures that are closer to internal decision metrics. This does not solve risk management, but it reduces the gap between accounting outputs and operational reality.

### 3.5 What ASU 2023-08 Does Not Solve

Precisely because ASU 2023-08 is targeted, important questions remain open.

The first unresolved issue is scope exclusion. Nonfungible tokens are outside the standard because fungibility is one of the criteria. Yet NFTs can be economically significant, especially for platforms, gaming ecosystems, digital rights businesses, and investment vehicles. Their markets are thinner and less standardized than those of major cryptocurrencies, which may justify more cautious measurement. But the standard offers little guidance beyond pushing entities back toward general GAAP analysis. A similar problem arises for certain wrapped tokens, liquidity pool positions, tokenized receivables, or assets with embedded claims. These may fail one or more scope conditions even though they are economically important and often actively traded.

Second, the standard does not address initial recognition comprehensively. The FASB explicitly noted that the amendments do not address recognition, initial measurement, or derecognition. Purchased cryptoassets may still seem straightforward, but complexity arises when assets are received through staking rewards, mining, airdrops, forks, customer incentives, or noncash consideration in revenue contracts. Determining when the entity has obtained control, what measurement date is appropriate, and whether the inflow is revenue, other income, inventory production, or something else can materially affect reported results.

Third, unit-of-account questions remain. A single token holding may be split across wallets, exchanges, or custodians, subject to differing restrictions, settlement frictions, or counterparty risks. Should fair value always be measured at the token level using the most observable quoted price, or should adjustments reflect restrictions, venue-specific realizability, or large-position liquidity considerations? Topic 820 provides general fair value principles, but crypto markets introduce recurring practical tensions over principal market identification, volume aggregation, and the relevance of exchange-specific prices in fragmented 24/7 markets.

Fourth, internally generated or self-issued tokens remain difficult. The scope criterion excluding assets created or issued by the reporting entity or its related parties is conceptually sensible because self-issued items raise issuer-side rather than simple holder-side questions. Yet the exclusion means that one of the most economically complex areas in digital asset markets remains largely unaddressed. Token issuers may sell tokens to raise capital, promise future ecosystem services, reserve tokens for treasury purposes, or distribute tokens to users and validators. Determining whether such arrangements resemble equity, liabilities, deferred revenue, or something hybrid is not solved by ASU 2023-08.

Fifth, the standard does not resolve presentation and performance subtleties. Changes in fair value go through net income, but analysts may still need to distinguish operating exposures from treasury or investment exposures. A platform whose ordinary activities involve intermediation in cryptoassets presents different informational needs from a manufacturer that holds Bitcoin as a reserve asset. Accounting can require common measurement while still leaving open important questions about line-item presentation, segment reporting, and management discussion of performance.

Sixth, transaction costs and ancillary expenditures remain implementation challenges. The updated AICPA practice aid issued in 2025 indicates that questions continue to arise about wrapped tokens, NFTs, transaction costs, and income statement classification even after the new standard (AICPA & CIMA, 2025). This is a useful reminder that fair value measurement solves only part of the problem. The classification of fees, gas charges, validator commissions, and platform-specific costs can still materially affect recognition and performance analysis.

### 3.6 Custody and Intermediation: From SAB 121 to SAB 122

Any serious account of U.S. cryptoasset accounting must also consider safeguarding obligations. Many entities do not simply hold cryptoassets for their own account; they safeguard them for customers. In 2022 the SEC staff issued Staff Accounting Bulletin No. 121, which directed entities safeguarding cryptoassets for platform users to recognize a liability and a corresponding asset measured initially and subsequently at the fair value of the safeguarded cryptoassets. The bulletin was controversial because it effectively brought custodial exposure onto the balance sheet in a manner unlike many traditional custody arrangements. Critics argued that it imposed unusually burdensome capital and reporting consequences, especially for banks and broker-like institutions.

In January 2025, however, the SEC staff rescinded SAB 121 through Staff Accounting Bulletin No. 122. SAB 122 directs entities to consider existing contingency guidance under ASC 450-20 or IAS 37, as applicable, when evaluating obligations to safeguard cryptoassets held for platform users (SEC, 2025). The rescission is significant for two reasons. First, it shows that accounting for cryptoassets is not only about the recognition and measurement of holdings but also about operational risk, legal obligation, and customer protection in intermediation settings. Second, it highlights the instability that can arise when staff-level responses move faster than broader standard-setting consensus. SAB 121 and its rescission do not by themselves settle the conceptual question of when safeguarding obligations give rise to recognized liabilities. But the episode illustrates that the boundaries of cryptoasset accounting extend beyond balance sheet classification of owned tokens.

### 3.7 Interim Assessment of the U.S. Path

The U.S. path is therefore mixed but directionally important. The FASB has corrected one of the clearest failures in prior accounting by moving a defined set of cryptoassets to fair value through net income. That change meaningfully improves relevance and comparability for bearer-like fungible cryptoassets held by reporting entities. Yet U.S. GAAP still lacks an integrated framework for the broader universe of digital assets and token-related obligations. What exists now is a more sensible core treatment for a narrow class plus a patchwork of general principles, practice aids, and regulatory responses for everything else. That is better than before, but it is not enough for a maturing market that increasingly includes stablecoins, tokenized claims, validation rewards, customer custody, and issuer-side token economics.

## 4. IFRS: Intangible Assets, Inventory, and the Limits of Residual Classification

### 4.1 The 2019 IFRS Interpretations Committee Agenda Decision

The modern IFRS treatment of cryptocurrency holdings is anchored in the March 2019 agenda decision of the IFRS Interpretations Committee, *Holdings of Cryptocurrencies*. The Committee addressed whether a holding of cryptocurrency meets the definition of cash or a financial asset and, if not, which standard applies. Its conclusion has become foundational. Cryptocurrency is not cash because it is not widely accepted as a medium of exchange and does not create a central monetary claim. It is not a financial asset because it does not provide the holder with a contractual right to receive cash or another financial asset. It is also not a monetary asset because it does not embody a right to receive a fixed or determinable number of units of currency. Therefore, a holding of cryptocurrency is an intangible asset within the scope of IAS 38 unless it is held for sale in the ordinary course of business, in which case IAS 2 applies. For broker-traders of commodities, IAS 2 permits measurement at fair value less costs to sell (IFRS Interpretations Committee, 2019).

The Committee’s reasoning is disciplined and faithful to the structure of existing IFRS. It begins with definitional analysis, rejects superficially appealing but conceptually weak analogies, and routes the item to the standards most consistent with those definitions. This is often presented as a virtue of principle-based accounting: the framework can absorb new phenomena without constant rulemaking. In one sense, that claim is validated by the agenda decision. IFRS did not require a new cryptocurrency standard in order to provide an answer. The existing definitions could be applied.

But the adequacy of the answer is another matter. Principle-based accounting is valuable only if the resulting accounting outcomes remain decision useful. A residual classification can be conceptually available and yet substantively unsatisfactory. The IFRS position that cryptocurrencies are intangible assets for most holders is defensible at the level of definition. The harder question is whether IAS 38 provides an appropriate measurement and disclosure environment for major bearer cryptoassets and whether IAS 2 adequately covers broker-trader contexts involving digital tokens rather than physical commodities.

### 4.2 IAS 38 and the Problem of Fit

IAS 38 defines an intangible asset as an identifiable nonmonetary asset without physical substance. Many cryptoassets fit that definition. They are separable, nonphysical, and nonmonetary in the IFRS sense. However, the definition is only the starting point. The real issue concerns subsequent measurement and performance reporting.

Under IAS 38, intangible assets are initially measured at cost. Subsequently, an entity may choose either the cost model or the revaluation model, but the revaluation model is available only if there is an active market. If the revaluation model is used, increases in carrying amount are generally recognized in other comprehensive income and accumulated in equity as a revaluation surplus, unless they reverse a prior decrease recognized in profit or loss. Decreases are recognized in profit or loss to the extent they exceed any revaluation surplus for the asset. Assets with indefinite useful lives are not amortized but are tested for impairment.

At first glance this appears more flexible than pre-2023 U.S. GAAP because upward revaluation is at least possible when an active market exists. For major cryptocurrencies traded on liquid exchanges, active market conditions may in many cases be satisfied. Yet several limitations remain.

The first limitation is conceptual awkwardness. Revaluation under IAS 38 was not designed with globally traded bearer cryptoassets as the central use case. The model sits uneasily between historical cost conservatism and selective current value updating. For an asset whose economic significance is continuous market exchangeability, routing value changes through other comprehensive income rather than profit or loss may or may not align with user needs depending on the context. If the entity holds the token as a treasury or investment position, current period profit or loss effects may be more informative than OCI-based revaluation reserves.

The second limitation is operational heterogeneity. IAS 38 permits the cost model as well as revaluation. This means similar cryptoasset holdings may still be reported differently depending on accounting policy choices, the entity’s assessment of active market conditions, and local practice environments. The resulting diversity may preserve formal flexibility at the cost of cross-firm comparability.

The third limitation concerns scope spillovers. Once the intangible-asset label is accepted as the default answer, the temptation is to extend it across very different token types even when their economics differ materially. A redeemable fiat-backed stablecoin with strong legal rights is not economically the same as a nonclaim-based bearer token. Yet absent more specific guidance, both may drift into generalized “digital asset” discussions in practice. That risks under-theorizing the role of enforceable claims, embedded obligations, and redemption structures.

### 4.3 IAS 2 for Broker-Traders: Useful but Incomplete

Where cryptoassets are held for sale in the ordinary course of business, IAS 2 applies. For broker-traders of commodities, inventories may be measured at fair value less costs to sell, with changes recognized in profit or loss. This is an important route for exchanges, market makers, and certain intermediation businesses. It acknowledges that current market value is central for trading inventory and that cost-based measurement is often unhelpful when positions are turned over quickly.

However, IAS 2 does not eliminate the broader classification challenge. First, it is entity-specific and business-model-specific. The same token may be inventory for one entity and an intangible asset for another. That is not inherently problematic, but it means the standard answers only a subset of cases. Second, broker-trader accounting under IAS 2 was developed in commodity contexts and assumes a degree of institutional clarity about what the broker-trader is holding, for whom, and under what settlement mechanisms. Digital asset exchanges and decentralized finance platforms complicate that picture because tokens may be custodied, rehypothecated, lent, or technically controlled through arrangements that do not map neatly onto conventional inventory narratives.

### 4.4 Why IFRS Still Faces a Relevance Problem

The strongest defense of the current IFRS position is that it is principled, internally coherent, and flexible enough to permit revaluation when appropriate. Yet this defense only partially answers the relevance critique. The issue is not whether IFRS can classify cryptoassets. It plainly can. The issue is whether the standards it reaches were built to describe the economic reality of modern digital asset markets.

Consider the reporting needs of users analyzing a company that holds a significant position in a major bearer cryptoasset. They care about market value, liquidity, concentration, custody risk, restriction on disposal, and exposure to regulatory and protocol events. IAS 38 can capture some of this through revaluation and disclosure, but it does so indirectly and inconsistently. Consider instead a company holding stablecoins subject to issuer redemption terms, reserve structures, and counterparty exposures. Treating these instruments merely as intangible assets may obscure the importance of contractual enforceability and reserve quality. Consider a staking-intensive entity whose returns depend on protocol participation, lock-up periods, slashing risk, and market pricing of rewards. Neither IAS 38 nor IAS 2 by themselves offer a rich vocabulary for those economics.

In this sense, IFRS’s challenge mirrors U.S. GAAP’s older challenge: residual classification can produce a formally correct answer that remains economically underdeveloped. The difference is that IFRS retains more room for policy choice and revaluation, whereas U.S. GAAP historically imposed impairment asymmetry more directly. But flexibility is not synonymous with adequacy.

### 4.5 Signs of Reconsideration at the IASB

The IASB has shown signs of recognizing that IAS 38 may require reconsideration in light of newer forms of intangible assets and new ways of using them. In January 2026 the Board discussed work related to intangible assets and specifically noted the value of examining newer types of intangible assets as test cases. This development matters because it implies that the cryptoasset problem is part of a larger standard-setting issue. Intangible-asset accounting has long been criticized for failing to capture economically significant nonphysical assets in a manner that balances relevance, comparability, and verifiability. Cryptoassets are not the only stress case, but they are an unusually visible one because market values are often observable and the mismatch between accounting category and economic function can be dramatic.

If IAS 38 is revisited more fundamentally, cryptoassets should play a prominent role in that reconsideration. They offer a particularly sharp test of whether the residual category of intangible assets is doing too much conceptual work. A standard built for brands, patents, and licenses may not be the right primary home for tradable bearer assets with active markets and real-time price discovery.

### 4.6 Comparing U.S. GAAP and IFRS After ASU 2023-08

Post-2023, the divergence between U.S. GAAP and IFRS is more than technical, but less than absolute.

For bearer-like fungible cryptoassets without enforceable rights, U.S. GAAP now requires fair value through net income if the scope criteria are met. IFRS generally still routes the same holdings to IAS 38, with cost or revaluation depending on accounting policy and active market assessment. As a result, U.S. GAAP currently provides a clearer and more decision-useful measurement model for many major cryptoasset holdings. It places current value directly into earnings and requires separate balance sheet presentation. IFRS, by contrast, preserves more discretion but also more heterogeneity.

For trading inventory, both frameworks can support current value measurement, though through different routes. For claim-based tokens or issuer-linked instruments, both frameworks still require case-by-case analysis because existing crypto-specific guidance is limited. For nonfungible assets, internally generated tokens, staking-related positions, and custody obligations, neither framework yet provides a fully mature architecture.

The common lesson is that standard-setting has progressed, but only along the easiest dimension: the accounting for fungible bearer cryptoassets held by entities as assets. The harder dimensions remain. These include the accounting for rights-rich tokens, hybrid arrangements, protocol-generated inflows, intermediation exposures, and issuer-side obligations. A coherent framework must therefore move beyond the question of whether “cryptocurrency” is an intangible asset and instead ask which economic features should determine accounting outcomes.

## 5. Conceptual Accounting Analysis: Recognition, Measurement, and the Limits of Legacy Categories

### 5.1 The Asset Definition and the Problem of Control

Any accounting framework for cryptoassets must begin with the definition of an asset. Both the IASB and FASB conceptual frameworks emphasize present economic resources controlled by the entity as a result of past events. Cryptoassets test this definition in a distinctive way because control is often established technologically rather than through familiar legal or physical channels. The entity that can direct the use of a token and obtain the resulting economic benefits may be the entity that holds the relevant private keys, the entity that has enforceable rights against a custodian, or, in some cases, an entity whose practical ability to access the asset is constrained despite apparent ownership.

This matters because crypto markets have made “control” a less intuitive concept for accountants accustomed to central registries, custodial statements, or paper title. In a self-custody arrangement, private key management may be the decisive control mechanism. In a qualified custody arrangement, legal rights against the custodian and segregation practices may determine whether the reporting entity truly controls the tokens. In omnibus wallets, the entity may be exposed to operational and insolvency risk even if on-platform balances show a specific token quantity. In smart contract environments, tokens may be escrowed, staked, bridged, or locked in ways that constrain transfer while preserving some economic rights. Thus, control analysis for cryptoassets is simultaneously legal, technological, and practical.

The first conceptual implication is that recognition cannot rest on simplistic possession analogies. A token visible on-chain is not necessarily controlled by the reporting entity if the entity lacks the capacity to direct its transfer or enjoy the benefits without another party’s cooperation. Conversely, an entity may control an economic interest in tokens not directly visible in its own wallet if enforceable custodial rights are robust. Accounting for cryptoassets therefore requires a richer evidentiary model of control, including wallet governance, custodian agreements, access protocols, segregation, on-chain verification procedures, and contingency analysis for lost or compromised keys.

The second implication is that derecognition can be equally complex. If a token is pledged, wrapped, lent, posted to a liquidity pool, or transferred into a protocol with conditional withdrawal rights, has the entity surrendered control, partially surrendered control, or merely encumbered the asset? Traditional financial asset accounting has tools for transfers and secured borrowings, but those tools were not written with smart contract escrow, validator lock-ups, or bridge mint-burn structures in mind. The resulting ambiguity affects whether an entity reports an asset, a receivable, a collateralized transfer, or a new derivative-like position.

### 5.2 Monetary, Nonmonetary, and the Accounting Relevance of Enforceable Claims

The classification of cryptoassets has often turned on whether they are monetary assets or financial assets. This debate matters because monetary and financial classifications unlock richer accounting infrastructures: impairment models for receivables, fair value options, hedge accounting, contractual cash flow analysis, and detailed disclosure regimes. Yet many cryptoassets sit outside these infrastructures because they lack the requisite claim structure.

A monetary asset generally involves a right to receive a fixed or determinable number of currency units. A financial asset involves cash, an equity instrument of another entity, or a contractual right to receive cash or another financial asset. Bitcoin does not meet these definitions. The holder does not possess a contractual claim against an issuer for redemption at a fixed amount. This is why both U.S. GAAP practice and the IFRS Interpretations Committee resisted classifying cryptocurrencies as financial assets. From a legal-form perspective, that conclusion is sound.

But accounting policy should not stop at legal-form exclusion. The more important question is what follows once a token falls outside contractual-claim categories. If the answer is always “treat it as an intangible asset,” accounting risks obscuring economically meaningful distinctions among noncontractual positions. A bearer cryptoasset with a deep market, quoted prices, and treasury use is not economically identical to a trademark. The absence of a contractual claim does not imply the absence of a market-based economic resource whose current value is central to users’ decisions.

This is where enforceable claims become the pivot of a more useful taxonomy. Tokens with legally enforceable redemption or settlement rights should not be grouped with nonclaim-based bearer tokens simply because both are digitally native. A fiat-backed stablecoin redeemable one-for-one from a regulated issuer, subject to clearly documented rights and reserve arrangements, may have a stronger claim to financial-asset-like analysis than an algorithmic token whose peg depends on incentives and market confidence. A wrapped token that gives the holder a claim on a custodian or protocol-managed reserve is economically distinct from a native network token. Similarly, tokenized securities, tokenized deposits, or tokenized fund shares should be analyzed through the rights they embody, not through the fact that they are recorded on distributed ledgers.

The conceptual error of early cryptoasset accounting was not merely that it preferred historical cost to fair value. It was that it allowed the absence of one traditional attribute, namely contractual claim status, to overwhelm all other economically relevant attributes. Once that happened, residual classification did too much work.

### 5.3 Measurement Bases: Cost, Fair Value, and the Question of What Users Need to Know

Accounting debates over cryptoassets often collapse into a binary opposition between cost and fair value. But the conceptual issue is subtler. The choice of measurement basis should depend on what information about the asset is most relevant to users and what degree of verifiability can reasonably be achieved. In the case of major bearer cryptoassets, the argument for fair value is powerful because current market value is often the central economic attribute. These assets are bought, sold, pledged, and evaluated in real time on global markets. For many holders, the economic significance of the asset lies not in consumption or in use over time, but in exchangeability, liquidity, and market exposure.

Historical cost with impairment may still convey some stewardship information. It records the sacrifice made to acquire the asset and recognizes subsequent declines in value. But for highly liquid bearer tokens it provides a poor basis for assessing current resource position, solvency buffers, treasury strategy, or risk exposure. Fair value, by contrast, captures both upside and downside changes as they occur and thus better reflects the economics of holding the asset.

The strongest objections to fair value concern reliability rather than relevance. Crypto markets are fragmented. Prices vary by venue. Some exchanges are lightly regulated or subject to manipulation concerns. Liquidity can disappear in stress events. These points are important, but they are not unique to cryptoassets. Fair value accounting has long dealt with questions of observable inputs, principal market determination, and valuation adjustments under imperfect market conditions. Topic 820 and IFRS 13 provide methodologies for hierarchies of inputs and valuation when quoted prices are unavailable or disorderly. The presence of measurement complexity is not an argument for avoiding fair value altogether. It is an argument for disciplined market selection, enhanced disclosure, and careful unit-of-account analysis.

Still, fair value should not be universal. For nonfungible tokens, highly illiquid governance tokens, thinly traded ecosystem rights, or tokens whose economics depend heavily on idiosyncratic use rather than broad market exchange, cost with impairment or tightly constrained revaluation may remain more appropriate. Similarly, tokens representing prepayments for future services may be better understood through the logic of contract assets or prepaid expenses than through free-standing fair value remeasurement. The crucial point is that measurement should follow economic substance, not technological branding.

### 5.4 Prudence, Neutrality, and the Failure of Asymmetric Impairment for Bearer Tokens

One reason intangible-asset accounting persisted for cryptoassets is the longstanding appeal of prudence. When an asset class is volatile and institutionally uncertain, it may seem safer to recognize losses promptly and gains only when realized. This instinct has deep roots in accounting thought. Yet the cryptoasset case shows that prudence can shade into distortion when applied without regard to the nature of the asset.

Asymmetric impairment for actively traded bearer tokens is problematic for at least three reasons.

First, it violates neutrality. A neutral representation should not be deliberately biased toward one direction of price movement when both gains and losses are economically relevant and observable. If a company’s token holdings appreciate materially, that appreciation is often decision useful regardless of whether management has sold the assets. Users evaluating liquidity, leverage capacity, and risk exposure need to know current value, not just historical cost net of impairments.

Second, asymmetric impairment weakens faithful representation by severing carrying amount from realizable value. In a highly liquid market, the entity could often sell the asset for an amount very different from the reported figure. The balance sheet becomes less a statement of current resources than a historical artifact shaped by past price troughs.

Third, asymmetric impairment can undermine stewardship analysis rather than improve it. Suppose management acquires a large bearer cryptoasset position and then experiences a sharp market downturn followed by partial recovery. Under impairment-only accounting, the financial statements may record the loss but ignore the recovery, even if management’s holding decision ultimately preserved value. That is not prudent stewardship reporting; it is incomplete reporting.

None of this means prudence has no role. Prudence remains relevant when markets are thin, rights are unclear, or valuation is highly model dependent. But the presence of prudence does not justify a blanket refusal to recognize changes in fair value for assets whose market prices are central, observable, and economically consequential.

### 5.5 Unit of Account, Principal Market, and the Special Difficulties of 24/7 Fragmented Trading

Cryptoasset accounting raises a distinctive problem in the application of fair value frameworks: determining the relevant market and unit of account in always-open, fragmented, multi-venue trading environments. For many tokens there is no single national exchange or central quotation source equivalent to traditional securities markets. Prices may differ across centralized exchanges, decentralized exchanges, over-the-counter markets, and custodial platforms. Trading may occur against multiple quote currencies. On-chain prices may be affected by slippage, gas fees, and pool depth. Off-chain prices may reflect custodian convenience or local regulatory constraints.

Under general fair value principles, an entity should identify the principal market or, absent that, the most advantageous market to which it has access. In crypto markets, identifying “access” itself may be nontrivial. A corporate treasury may trade only through approved custodians or exchanges meeting internal compliance standards. A broker-dealer affiliate may have access to broader venues. A token position may be locked on one chain and require bridging before it can be sold elsewhere. Some holdings may be legally transferable but operationally inaccessible during lock-up periods or unstaking windows. All of these factors can affect realizable value.

The problem is intensified by aggregation. A quoted market price may exist for a token, but the entity’s total position may exceed typical market depth on approved venues. Traditional fair value measurement often resists block discounts when the unit of account is the individual instrument. Yet crypto markets raise recurring questions about whether a position-specific adjustment is ever appropriate when liquidation would move price materially or when market depth is unstable. The answer may differ by framework and circumstance, but the broader lesson is that fair value for cryptoassets requires more than pulling a spot price from a data feed.

For this reason, disclosure is essential. Preparers should explain pricing sources, principal market determination, restrictions on transfer, concentration by venue, and the extent to which quoted prices reflect accessible orderly transactions. Such disclosure does not replace measurement, but it allows users to evaluate the reliability and portability of reported fair values.

### 5.6 Income Statement Geography: Operating Performance or Nonoperating Exposure?

Even if fair value is accepted for some cryptoassets, a further question arises: where should value changes appear in performance reporting? ASU 2023-08 routes changes in fair value through net income for in-scope assets. That choice improves transparency and avoids parking economically significant volatility outside earnings. Yet not all entities hold cryptoassets for the same purpose. For a miner, staking operator, exchange, market maker, or token-focused investment company, cryptoasset gains and losses may be closely connected to ordinary activities. For a manufacturing firm holding Bitcoin as a treasury reserve, they may be peripheral to core operations.

The issue here is less about recognition than about analytical presentation. Standard setters may reasonably require common recognition in profit or loss while expecting disaggregation in line items, segment disclosures, or management discussion and analysis. The accounting system should not suppress volatility merely because some users prefer smoother earnings. But it should help users distinguish between operating margins and market exposure where doing so improves analysis.

A related challenge concerns validation rewards, airdrops, and other token-based inflows. If a staking operator receives rewards as part of its ordinary activities, recognition may resemble revenue or inventory output. If a non-core treasury participant occasionally receives protocol rewards, other income may be more appropriate. This is another reason why cryptoasset accounting cannot be solved solely at the level of asset classification. Income statement geography matters for interpretation of performance.

### 5.7 The Role of Disclosure in a Domain of Rapid Technological Change

Because cryptoassets evolve faster than accounting standards, disclosure inevitably carries unusual weight. Measurement answers alone cannot communicate the full economic risk of a token position. Users need to know whether the token is native or wrapped, whether redemption rights are enforceable, whether assets are self-custodied or held by third parties, whether holdings are restricted or encumbered, whether value depends on a bridge or oracle, whether staking exposes the entity to slashing, and whether legal claims exist in insolvency. Standard financial statement captions are too coarse to carry all of that information.

This does not mean disclosure can substitute indefinitely for recognition reform. For years, preparers used footnotes to patch the deficiencies of impairment accounting. But the right lesson is not that disclosure always suffices. It is that disclosure should complement a classification and measurement system capable of differentiating economic substance. The taxonomy developed in the next section aims to do exactly that.

## 6. A Taxonomy-Based Accounting Framework for Cryptoassets

The preceding analysis suggests that the phrase “accounting for cryptoassets” obscures more than it clarifies. A more useful approach is to classify token-related positions according to the rights they embody, the source of value, and the entity’s economic use. This section develops a taxonomy-based framework and links each category to recognition, measurement, and disclosure consequences. The proposed framework is not intended as a rigid codification proposal for every token ever issued. Rather, it offers a principles-based map that can guide standard setting and practice in a field where surface-level technological labels are often misleading.

### 6.1 Overview of the Proposed Taxonomy

The taxonomy proposed here distinguishes six principal categories on the holder side, plus a separate issuer-side analytical dimension.

| Category | Core economic feature | Typical examples | Proposed primary accounting logic |
| --- | --- | --- | --- |
| Bearer cryptoassets | No enforceable claim on issuer; value derives from exchangeability, scarcity, network adoption, and utility within the protocol | Bitcoin, Ether in treasury holdings | Fair value through profit or loss when observable markets exist |
| Claim-based tokens | Token embodies legally enforceable redemption or underlying asset rights | Certain fiat-backed stablecoins, tokenized securities, tokenized deposits | Financial instrument or claim-based accounting aligned to underlying rights |
| Utility or access tokens | Token primarily provides access to goods, services, or ecosystem usage | Platform access tokens, prepaid service tokens | Prepayment/contract-right logic for holders; deferred revenue/contract obligation logic for issuers |
| Wrapped and bridged tokens | Token represents a mediated claim on an underlying asset held elsewhere | Wrapped BTC, bridged stablecoins | Accounting driven by underlying claim and bridge/custody structure |
| Validation-related assets and rewards | Value linked to staking, validation, mining, or protocol participation | Staked tokens, staking rewards, mining inventory | Separate treatment for base asset, locked positions, and rewards; fair value or inventory logic depending role |
| Nonfungible digital rights | Unique or near-unique digital items with heterogeneous rights and illiquid markets | NFTs linked to art, memberships, licenses, in-game assets | Cost less impairment unless active market is demonstrably robust; intensive disclosure |

The categories are not mutually exclusive in every fact pattern. A token can migrate economically over time. A governance token may trade as a bearer asset while also granting protocol voting rights. A stablecoin may look claim-based in marketing but function like a nonclaim speculative token if redemption rights are weak or practically inaccessible. A utility token may trade heavily and be held for speculation by some users, even if its designed purpose is consumption. Therefore, the taxonomy should be applied based on the reporting entity’s rights and use, not solely on the issuer’s narrative.

### 6.2 Category One: Bearer Cryptoassets

#### 6.2.1 Economic characteristics

Bearer cryptoassets are the clearest candidates for a distinct accounting model. Their defining characteristic is that the holder does not possess an enforceable contractual claim against an issuer or counterparty. Value arises from the token’s exchangeability, acceptance within a network or market ecosystem, perceived scarcity, settlement utility, and expected future demand. Bitcoin is the paradigmatic example. Ether is similar in many holding contexts, although the economics of network fees and staking introduce additional dimensions. Many widely traded layer-one tokens and other fungible native tokens may also fall in this category when held outside special contractual arrangements.

What matters accounting-wise is that these tokens are both bearer-like and market-oriented. Holders often evaluate them through current market price, liquidity, and portfolio exposure. They are not consumed through use in the same way as software licenses or customer lists. Nor do they create contractual claims like receivables or bonds. Their economic significance lies precisely in the ability to sell, transfer, pledge, or deploy them at current market value.

#### 6.2.2 Recognition and initial measurement

For purchased bearer cryptoassets, initial recognition should generally occur when the reporting entity obtains control over the tokens, measured at cost including directly attributable acquisition costs. Control should be assessed based on the entity’s practical ability to direct transfer and enjoy benefits, considering wallet governance, custodial arrangements, and settlement finality. Where acquisition occurs through noncash exchange, the initial measurement should reflect the fair value of the consideration given or the asset received, depending on the applicable framework and which measure is more reliably determinable.

Entities should separately evaluate gas fees and transaction charges. Some may be directly attributable acquisition costs and thus capitalized initially. Others may be better treated as period expenses if they relate more to transfer, custody setup, or operational friction than to acquiring the asset itself. Standard setters could usefully clarify this issue because crypto markets generate recurrent low-level costs that may be material in high-volume environments.

#### 6.2.3 Subsequent measurement

For bearer cryptoassets with observable, accessible markets, the strongest accounting answer is fair value through profit or loss. This is the central normative conclusion of the article. The case rests on economic relevance, not on any metaphysical claim that cryptoassets are “really” financial instruments. Current value is decision useful because these assets are held and evaluated as market-exchangeable stores or vehicles of value. Their balance sheet significance depends on what they could be sold for, pledged for, or used to settle at current conditions, not on amortized cost or one-sided impairment history.

This conclusion aligns with the direction of ASU 2023-08 for qualifying U.S. GAAP assets. Under IFRS, it would imply either a stronger use of revaluation in appropriate cases or, more fundamentally, future standard-setting that routes such assets into profit-or-loss fair value treatment rather than leaving them within IAS 38’s more awkward architecture. The rationale resembles fair value treatment for commodity-like positions and investment assets whose market price is central to users’ analysis.

#### 6.2.4 Presentation and disclosure

Bearer cryptoassets should be presented separately from conventional intangible assets. Disclosure should include quantity held, fair value hierarchy or pricing source information, custody arrangements, encumbrances, geographic or venue concentration of liquidity, and any material restrictions on transfer or sale. If holdings are concentrated in a small number of exchanges or custodians, users should know that. If the fair value depends on markets not legally or operationally accessible to the entity, that fact should also be disclosed.

If the entity uses bearer cryptoassets in treasury management, it should explain the policy objective: reserve diversification, payment facilitation, customer activity support, speculative investment, or collateral management. Standardized captions alone cannot convey whether the holding is incidental or strategically central.

#### 6.2.5 When fair value may be inappropriate

Not all bearer tokens justify automatic fair value treatment. Thinly traded governance tokens, low-liquidity ecosystem tokens, and assets with highly unreliable market data may require cost-based approaches with impairment or constrained valuation techniques. The policy point is not “fair value for everything on a blockchain.” It is “fair value where the token’s economics are market-based and the market evidence is sufficiently robust.” This distinction is essential if standard setters wish to avoid replacing one overgeneralization with another.

### 6.3 Category Two: Claim-Based Tokens and Stablecoins

#### 6.3.1 Why stablecoins are accounting-important

Stablecoins sit at the center of a major conceptual divide. Some market participants treat them as crypto versions of cash. Others treat them as instruments whose accounting should remain within existing financial asset or intangible asset categories depending on legal structure. The debate cannot be resolved by volatility or branding. The relevant accounting question is whether the token embodies an enforceable right to receive cash, another financial asset, or a claim on underlying reserves.

A fiat-backed stablecoin issued by an identifiable entity that promises redemption at par subject to legally documented terms may be economically closer to a short-duration claim than to a nonclaim bearer token. If the holder has a contractual right to redeem the token for fiat currency and the issuer is obliged to honor that redemption, then claim-based analysis becomes highly relevant. By contrast, a token marketed as stable but supported only by market incentives, algorithmic mechanisms, or discretionary reserve practices may lack the enforceable rights necessary for financial-asset classification. In that case, it may remain closer to a bearer or residual-category asset despite the peg aspiration.

#### 6.3.2 Accounting should turn on rights, not labels

This is the single most important principle for stablecoin accounting: legal and practical redemption rights matter more than the token’s intended price target. An accounting framework that classifies all stablecoins together would repeat the mistake made with “cryptoassets” generally. The mere fact that a token aims to maintain one unit of value does not make it cash, cash equivalent, or even a financial asset. Conversely, if a token does provide a legally enforceable right to receive fiat currency and if reserve structures, priority rights, and redemption terms are clear, then failing to treat it through a claim-based framework would understate the relevance of those rights.

Accordingly, standard setters should require preparers to analyze at least the following elements for stablecoins and other claim-based tokens:

1. The existence and legal enforceability of redemption rights.
2. The identity and legal standing of the issuer or obligor.
3. Reserve asset composition, segregation, and bankruptcy remoteness.
4. The timing, fees, thresholds, and operational conditions of redemption.
5. The extent to which rights are direct to the token holder versus mediated through exchanges or intermediaries.
6. Jurisdictional enforceability and regulatory regime.

If a stablecoin provides a robust redemption claim, the holder’s asset may be closer to a receivable-like or deposit-like instrument than to an intangible asset. Measurement could then follow claim-based logic, potentially at amortized cost or fair value depending on business model and applicable standards. If the token is readily redeemable at par and used as a settlement medium, cash-equivalent analysis may arise, though standard setters should approach that conclusion cautiously given residual operational and legal frictions.

#### 6.3.3 Implications for tokenized financial claims

The same logic extends beyond stablecoins to tokenized securities, tokenized fund units, tokenized deposits, and other digital wrappers around conventional financial rights. In such cases the distributed ledger is a recording and transfer technology, not the primary source of economic substance. Accounting should look through the token form to the underlying legal claim. If the token represents a bond, equity security, deposit claim, or fund unit, then existing financial instrument or investment accounting should generally apply, with additional disclosure only where the tokenization architecture creates distinct custody, transfer, or legal risks.

The main policy implication is that a cryptoasset standard should not become a silo isolating tokenized financial claims from the rest of accounting. The challenge is not to write exotic new guidance for every token, but to distinguish when tokenization changes economic substance and when it merely changes form.

#### 6.3.4 Disclosure implications

Claim-based tokens require richer counterparty and legal-rights disclosure than bearer cryptoassets. Users need to know who stands behind the token, what reserve assets exist, what priority rights holders have, whether redemption can be suspended, and whether transferability differs from redeemability. A token that trades close to par on secondary markets may still pose meaningful accounting and risk differences from cash if redemption is restricted, delayed, or contingent. Absent such disclosure, reported carrying amounts can create a false sense of liquidity equivalence.

### 6.4 Category Three: Utility and Access Tokens

#### 6.4.1 Economic substance varies by holder and issuer

Utility tokens are often described as digital coupons, access rights, or payment instruments for future ecosystem services. But in practice they span a wide range of arrangements. Some genuinely function like prepayments for computing resources, transaction capacity, or application services. Others are speculative instruments with only notional consumption use. Still others blend access rights with governance or reward features. Accounting must therefore separate designed purpose from actual enforceable rights and actual use by the reporting entity.

From the holder’s perspective, a utility token may economically resemble a prepaid asset if it gives the holder the right to obtain future goods or services and the holder intends to consume those services. In that case, classifying the token as a free-standing investment asset may be less informative than treating it through contract or prepayment logic. The key question is whether the token entitles the holder to a specific or determinable service stream and whether the issuer has an obligation to provide that service.

From the issuer’s perspective, token sales may create deferred revenue, contract liabilities, financial liabilities, or, in some cases, equity-like residual interests depending on the rights conveyed. This is one of the most unsettled areas in digital asset accounting and a central reason why cryptoasset standard-setting cannot focus only on holder accounting.

#### 6.4.2 Holder accounting for consumptive utility tokens

Where a reporting entity purchases tokens primarily for internal use in obtaining future services, the strongest accounting answer is to treat the expenditure as a prepaid asset or contract-related right, subject to expense recognition as services are consumed. This would apply, for example, when tokens are required to access network computing capacity, storage, or specific application services and the entity acquires them for operational use rather than speculative resale.

Measurement after recognition should reflect the nature of the underlying service right. If the right is consumed as services are used, amortization or expense recognition should mirror consumption. If the token can also be traded and the entity holds more than immediately needed for use, the excess portion may need separate analysis as an investment or inventory position. In some cases bifurcation may be appropriate where a token bundle includes both a service right and a tradable residual position.

#### 6.4.3 When utility tokens are in fact investment assets

Many so-called utility tokens are bought primarily for speculation. The holder may have no genuine intention to consume any service. The token’s market price may depend more on expected demand growth and ecosystem narratives than on near-term service consumption. In such cases, treating the token as a prepaid asset would be economically misleading. The reporting entity is not prepaying for services; it is taking a market position.

This highlights an important general principle: accounting for tokens should depend not only on the issuer’s formal characterization but also on the holder’s rights and business model. The same token could be a prepaid asset to one entity and inventory or an investment-like cryptoasset to another. Accounting systems already tolerate this kind of business-model dependence in other domains, and there is no reason to resist it here.

#### 6.4.4 Issuer accounting challenges

For issuers, utility-token sales raise difficult questions about whether proceeds represent revenue received in advance, a liability to deliver future services, a financing arrangement, or a residual claim analogous to equity. The answer should turn on the promised obligations, refund terms, governance rights, transferability, and legal documentation, not on token industry terminology. If the issuer has a present obligation to deliver future goods or services, contract liability logic is often appropriate. Revenue would then be recognized as performance obligations are satisfied. If token holders possess no enforceable service rights and proceeds are nonrefundable, the case for liability treatment weakens and equity-like or other residual classifications may arise, though careful analysis remains necessary.

In practice, many token issuances are hybrid. They may simultaneously fund platform development, promise future ecosystem utility, and create tradable market instruments. Existing revenue and liability frameworks can accommodate some of this complexity, but standard-setting guidance would be valuable, especially for distinguishing customer-like arrangements from capital-raising arrangements.

### 6.5 Category Four: Wrapped and Bridged Tokens

#### 6.5.1 Why wrappers complicate accounting

Wrapped and bridged tokens illustrate why technological form alone cannot determine accounting. A wrapped token is typically issued to represent an underlying asset held elsewhere, such as wrapped Bitcoin on another blockchain. Bridged tokens may be minted or released when assets are locked on one chain and represented on another. These arrangements aim to increase interoperability, but they create layered rights, risks, and accounting questions.

The central accounting issue is what exactly the holder controls. Does the wrapped token provide a legally enforceable claim on an underlying reserve held by an identifiable custodian? Is redemption automated but legally ambiguous? Does the bridge rely on a set of validators, a smart contract, a centralized operator, or some hybrid structure? Can the holder actually redeem one-for-one, and under what conditions? If the wrapper breaks, does the holder have a claim against anyone?

Without answers to these questions, accounting by mere analogy to the native underlying asset can be dangerous. Wrapped BTC is not necessarily accounting-equivalent to native BTC. Economically, the holder of the wrapped token is exposed not only to Bitcoin price but also to bridge integrity, custodian solvency, redemption mechanics, and governance. That additional layer of risk may affect classification, disclosure, and perhaps even measurement if market pricing reflects a meaningful spread or redemption uncertainty.

#### 6.5.2 Proposed accounting treatment

Wrapped and bridged tokens should be analyzed by decomposing the position into two dimensions: exposure to the underlying asset and exposure to the wrapping mechanism. If the wrapped token provides a robust, enforceable, and continuously exercisable claim on the underlying asset held by a credible custodian, then accounting may resemble claim-based token treatment with disclosure about wrapper risk. If redemption is technically possible but legally weak, the token may remain closer to a bearer cryptoasset whose value depends partly on market confidence in the wrapper.

In all cases, disclosure should address the identity of the custodian or bridge, the mechanism by which the underlying asset is secured, redemption constraints, smart contract dependency, and any historical or known vulnerabilities. Standard setters may eventually conclude that these tokens require specific disclosure tags because their risk is systematically layered and not captured by token name alone.

### 6.6 Category Five: Nonfungible Digital Rights

#### 6.6.1 NFTs are a category of labels, not a category of rights

Nonfungible tokens are perhaps the clearest illustration of why crypto accounting should not follow technological labels. An NFT is a tokenization method that creates or records uniqueness, not a stable category of underlying economics. One NFT may point to digital art, another may confer membership benefits, another may represent an in-game item, another may embody a license, and another may merely reference content stored off-chain with limited enforceable rights. Two tokens can share the NFT label while having almost nothing in common economically.

Because the rights vary so dramatically, holder accounting must begin by identifying what, if anything, the token legally or practically entitles the holder to obtain. If the NFT is simply a tradable collectible whose value depends on market sentiment and community recognition, it may resemble a highly illiquid investment-like digital asset. If it conveys rights to use content or obtain access to a platform, it may be better analyzed as a contract-related or prepaid asset. If it represents ownership or licensing of intellectual property rights, existing intangible asset and licensing frameworks may be relevant. The token itself is rarely the whole story.

#### 6.6.2 Proposed measurement approach

For most NFTs, cost less impairment is the safer default unless an active market can be demonstrated with unusual clarity. The reason is not that NFTs are unimportant. It is that their markets are typically thin, heterogeneous, and vulnerable to non-orderly pricing. Observable quoted prices often do not satisfy the spirit of active market assumptions because each token is unique or near-unique and comparable transactions may be sparse. Fair value can still be relevant for specific NFTs held in liquid collection markets or by entities whose ordinary activities involve trading such items, but standard setters should be cautious about broad fair value mandates in this space.

Where an NFT is held for internal use or access rights rather than investment, subsequent accounting should follow the underlying economic benefit. A membership NFT used over a one-year term might be expensed over that term. A software access NFT could resemble a prepaid service arrangement. A royalty-bearing NFT that entitles the holder to cash flows from specific IP exploitation may instead require receivable or intangible-right analysis.

#### 6.6.3 Disclosure needs

NFT disclosure should focus on rights, restrictions, and marketability rather than just carrying amount. Preparers should disclose whether the token conveys intellectual property rights, access rights, or no legally enforceable rights beyond transfer of the token itself. They should disclose where associated digital content resides, whether links are mutable, whether royalties or transfer fees apply, and how valuation was determined. Without such information, users may mistake a nominally valuable NFT for a legally robust asset when it is in fact a highly contingent digital pointer.

### 6.7 Category Six: Validation-Related Positions, Mining, and Staking Rewards

### 6.7.1 Why validation activities resist simple analogies

Mining and staking bring cryptoassets into existence or transfer them to participants through protocol rules rather than through ordinary bilateral exchange. This creates accounting difficulty because the reporting entity may receive tokens without purchasing them from a counterparty in the traditional sense. The inflow may resemble revenue from ordinary activities, inventory production, an exchange for validation services, or even a gain from participation in a protocol. Moreover, the underlying base asset may be locked, delegated, or placed at risk of slashing, complicating control and derecognition analysis.

The existing accounting literature and practice have not fully converged on these issues. Some miners and staking providers have treated rewards as revenue, especially when validation is a core business and customers or network participation arrangements resemble a service model. Others have emphasized that there may be no conventional customer under revenue standards, suggesting other income or asset-recognition approaches. A useful normative framework should begin by separating three questions: how to account for the base asset committed to validation; when and how to recognize newly received rewards; and how to classify the resulting income statement effect.

#### 6.7.2 Accounting for base assets committed to staking

When a reporting entity stakes tokens that it already owns, the first question is whether the original tokens remain recognized. In many proof-of-stake arrangements, the entity does not surrender all economically relevant control. It may lock the tokens for a period, delegate validation rights, or become subject to protocol withdrawal conditions, but it still retains the residual claim to the tokens and to associated rewards absent slashing or other penalties. In such cases the base asset should generally remain recognized, with separate disclosure of restrictions, encumbrances, and lock-up periods. The economics resemble an encumbered asset rather than an outright disposal.

However, not all staking arrangements are alike. Some involve transferring tokens into smart contracts or pooled arrangements that create distinct tokenized claims, liquid staking tokens, or withdrawal receipts. In those cases derecognition analysis becomes more complex. If the entity exchanges a native token for a new wrapped or derivative position embodying different rights, accounting may need to treat the original asset as derecognized and the new position as a claim-based or wrapped token. The decisive factors are whether the entity still controls the original asset directly, whether the new instrument is merely a receipt or a new asset, and whether the transfer exposes the entity to different counterparties or protocol risks.

#### 6.7.3 Recognition of staking rewards

The strongest general principle is that staking rewards should be recognized when the reporting entity obtains control of the reward tokens and the amount can be measured reliably, typically at fair value on the date of control. This resembles recognition of noncash consideration received for participation in network validation. The fair value at receipt provides a sensible initial measurement basis because it captures the economic inflow at the point control is obtained.

The harder issue is performance classification. If staking is part of the entity’s ordinary activities, recognition as revenue may be appropriate, though careful analysis is needed because the existence of a “customer” under conventional revenue standards may be contestable. If the arrangement does not fit neatly into revenue guidance, the credit could instead be recognized as other operating income or another appropriate income category reflecting business context. The key is disaggregation and clarity. Financial statement users need to understand whether the entity’s earnings depend materially on token rewards, whether those rewards are volatile, and how subsequent remeasurement of held tokens affects results.

#### 6.7.4 Mining activity and inventory logic

Mining raises similar but not identical issues. Commercial miners expend resources such as electricity, hardware depreciation, and hosting services to obtain block rewards and transaction fees. One plausible accounting approach is to treat mined tokens as inventory or produced digital commodities recognized when control is obtained, with production costs accumulated and performance reflected through revenue on sale. Another approach is to recognize the tokens at fair value upon receipt with a corresponding credit reflecting consideration for validation activity, after which any held balance is measured under the relevant cryptoasset model.

The preferable approach depends partly on the nature of the business. If the entity’s ordinary activity is operating mining infrastructure to obtain tokens for sale, inventory logic has intuitive appeal because the business is in substance producing units for resale. Yet if the tokens are immediately marketable and their value at receipt is central to performance analysis, fair value at recognition may provide better information than historical production cost alone. A hybrid model may therefore be appropriate: recognize mined tokens at fair value when control is obtained, with a corresponding revenue or other income entry depending on business model, while separately disclosing production costs and margins. This avoids understating the economic inflow at receipt while preserving insight into cost structure.

#### 6.7.5 Slashing, lock-ups, and protocol contingencies

Validation-related accounting must also address downside contingencies. Staked assets may be subject to slashing, delayed withdrawal, or protocol change. Mining may depend on network difficulty adjustments, reward halvings, or concentration in pool operators. These features affect impairment assessment, fair value, and risk disclosure. At a minimum, entities engaged in significant validation activities should disclose lock-up periods, conditions triggering penalties, counterparties or pools involved, and the extent to which the reported assets are immediately realizable.

### 6.8 Issuer-Side Accounting: Token Sales, Treasury Tokens, and Ongoing Obligations

### 6.8.1 Why issuer accounting cannot be an afterthought

Most accounting discussions focus on token holders because holding Bitcoin or Ether on a balance sheet is visible and immediately controversial. But issuer-side accounting may be even more important conceptually. When an entity issues tokens, it may be raising funds, pre-selling services, creating governance rights, or distributing instruments intended to circulate independently of the issuing legal entity. Determining whether issuance proceeds are revenue, liabilities, equity, or some hybrid obligation is central to faithful reporting. Yet existing standards do not provide a comprehensive digital-asset-specific architecture for these questions.

A key principle should govern issuer accounting: proceeds from token issuance should not be treated as immediate income merely because the instrument is novel or because traditional equity categories do not fit comfortably. The accounting must reflect the obligations, if any, that the issuer has assumed and the rights, if any, that token holders possess.

### 6.8.2 A proposed issuer-side decision tree

A useful decision tree for issuer accounting proceeds as follows.

First, does the token create a present obligation for the issuer to deliver cash, another financial asset, or a variable number of its own equity instruments? If yes, liability accounting under financial instrument principles is likely appropriate.

Second, does the token obligate the issuer to provide future goods or services to token holders? If yes, contract liability or deferred revenue logic may be appropriate, with revenue recognized as performance obligations are satisfied.

Third, does the token represent a residual interest in the issuing entity itself, such that token holders participate in residual net assets without a contractual obligation on the issuer to transfer economic resources? If yes, equity classification may be relevant, though many tokens marketed as “governance” instruments do not actually satisfy this condition in a legally robust way.

Fourth, if the token does not clearly create a financial liability, contract liability, or equity instrument, the entity should not default automatically to day-one revenue recognition. Instead, it should assess whether proceeds represent a form of nonowner financing tied to ongoing ecosystem commitments, development obligations, or market-making responsibilities. Standard setters may need to develop specific residual guidance for such cases because current frameworks can leave an uncomfortable gap.

The practical importance of this framework is that many token issuers retain substantial ongoing responsibilities even when legal documentation is incomplete. They may continue protocol development, maintain reserves, support redemption mechanisms, or provide platform services essential to token value. Financial reporting that recognizes issuance proceeds immediately as income while ignoring those economic obligations would be misleading.

### 6.8.3 Treasury tokens and self-issued assets

One especially important point concerns self-issued or self-created tokens held by the issuer. A reporting entity should not recognize an asset simply because it has minted its own tokens and those tokens trade in external markets. This principle is implicit in the FASB’s exclusion of assets created or issued by the reporting entity or related parties from ASU 2023-08. Self-issuance does not generate an asset in the same way that printing one’s own share certificates does not create assets on the issuer’s balance sheet. What matters is not the market price of the token in the abstract but whether the entity has acquired a distinct economic resource from another party.

This issue becomes important in token treasury strategies where issuers reserve a large supply of native tokens for future ecosystem use, grants, or stabilization. Those holdings may be economically relevant, but their accounting cannot mirror the holder accounting of external investors. Disclosure may be needed to explain supply overhang, treasury policy, vesting, and token release schedules, yet recognition of self-created treasury tokens as assets would generally be inappropriate.

### 6.8.4 Secondary obligations: buybacks, stabilization, and reserve support

Issuer-side accounting also becomes difficult where token issuers implicitly or explicitly support market value through reserve management, buyback commitments, or stabilization operations. If an issuer undertakes legally enforceable redemption or support obligations, liability or provision accounting may be triggered. If support practices are discretionary but strongly expected by the market, disclosure may still be necessary even absent liability recognition. The line between economic compulsion and legal obligation is especially important in stablecoin and algorithmic-token contexts, where market participants often assume support mechanisms that may be weaker than they appear.

### 6.9 Synthesis: Why Taxonomy Improves Both Theory and Practice

The value of the proposed taxonomy is not merely classificatory neatness. It improves accounting theory by re-centering rights and economic use rather than technological branding. It improves practice by giving preparers and auditors a structured path through questions that otherwise appear bespoke and ad hoc. Most importantly, it reduces the risk that one measurement solution designed for a visible subclass, such as fair value for fungible bearer cryptoassets, will be inappropriately generalized to all digital assets.

The framework also helps explain why current standards feel fragmentary. ASU 2023-08 solves the bearer-token problem better than prior U.S. GAAP. IAS 38 and IAS 2 offer partial answers under IFRS. But neither framework by itself provides a taxonomy broad enough to handle stablecoins, wrapped tokens, validation rewards, and issuer-side obligations coherently. A rights-based taxonomy can.

## 7. Disclosure, Internal Control, and Assurance

### 7.1 Why Recognition and Measurement Are Not Enough

Even an improved classification system will not make cryptoasset reporting decision useful unless it is paired with robust disclosure and credible assurance. The reason is simple: for cryptoassets, economic risk often lies in the gap between the nominal token balance and the actual conditions under which the reporting entity can access, transfer, redeem, or realize value from that balance. Traditional asset captions conceal too much. Two entities may report the same quantity of the same token at the same fair value while facing radically different risk depending on whether the assets are self-custodied, concentrated at a single exchange, posted as collateral, locked in staking, wrapped through a bridge, or subject to redemption frictions.

This is why the debate over cryptoasset accounting should not be reduced to fair value versus cost. Recognition and measurement tell users what asset is reported and at what amount. Disclosure tells users what that amount means, how secure it is, and how quickly it can be converted into economic benefit. In a domain of rapid technological change, disclosure also becomes the first place where new risk categories become visible before standard setters have time to codify them.

### 7.2 A Disclosure Architecture for Cryptoasset Reporting

A coherent disclosure architecture should address at least six pillars.

| Disclosure pillar | Questions users need answered |
| --- | --- |
| Rights and legal form | What rights does the token convey? Is there redemption, service access, governance, collateral, or no enforceable claim? |
| Custody and control | Who controls the private keys? Are assets self-custodied, custodied by third parties, or held through omnibus structures? |
| Transferability and encumbrance | Are assets pledged, locked, staked, bridged, or otherwise restricted? What are the withdrawal conditions? |
| Valuation and market access | Which pricing sources are used? What is the principal or accessible market? How liquid is the reported position? |
| Protocol and technology risk | Does value depend on smart contracts, bridges, validators, or oracles? What technological failure points exist? |
| Regulatory and jurisdictional exposure | Are holdings or related activities affected by licensing, sanctions, pending litigation, or jurisdictional restrictions? |

These disclosures should not be treated as boilerplate. Their purpose is to help users distinguish between superficially similar token balances that differ materially in risk profile. For example, a balance of fiat-backed stablecoins on a regulated exchange differs economically from the same nominal balance held through a thinly capitalized offshore intermediary. A reported position in staked Ether differs from an immediately withdrawable Ether balance if unstaking periods or slashing risks are material. A wrapped token balance differs from a native token balance if bridge functionality or custodian solvency is uncertain.

### 7.3 Custody, Existence, and Rights Assertions

From an assurance perspective, cryptoassets put unusual pressure on the existence and rights-and-obligations assertions. On-chain verification can confirm that specific wallet addresses hold specified token balances at a point in time. But on-chain visibility is not equivalent to audit completion. The harder question is whether the reporting entity controls those addresses or has enforceable rights to the assets represented. A public ledger can show where tokens are, but not always who legally owns them, who controls the keys, or whether the assets are encumbered by side agreements, custodial terms, or insolvency risks.

As a result, evidence gathering for cryptoassets often requires combining on-chain procedures with more conventional audit evidence: confirmations from custodians, review of wallet governance protocols, inspection of legal agreements, evaluation of segregation controls, and testing of internal authorization procedures over transfers. The existence of blockchain records can improve traceability, but it does not eliminate the need for entity-level control testing. In some respects it increases that need because the consequences of key compromise, address mismanagement, or faulty access controls can be immediate and irreversible.

The rights assertion is especially challenging when assets are held through exchanges or custodians that pool user assets. The reporting entity may have a contractual claim to a quantity of tokens but not to specific identifiable on-chain units. In insolvency scenarios, segregation quality and legal treatment become critical. This means preparers should disclose not only token quantities but also custody structures and legal arrangements relevant to ownership and recovery.

### 7.4 Fair Value Disclosure in Fragmented Markets

If fair value measurement is adopted, disclosure must confront the realities of crypto market microstructure. Major tokens may trade on many venues with differing liquidity, fees, settlement arrangements, and regulatory regimes. Thinly traded tokens may show quoted prices on platforms with minimal depth. Decentralized exchange prices may reflect liquidity pools susceptible to temporary distortions. Some markets operate continuously across weekends and holidays, raising questions about valuation cut-off and closing price selection.

Users therefore need more than a period-end price. They need to understand which market or composite source was used, whether the market was accessible to the entity, whether prices were adjusted for restrictions, and how valuation judgments were made when quoted prices across venues differed materially. Disclosures akin to fair value hierarchy narratives should be adapted for cryptoassets, with emphasis on exchange concentration, access restrictions, and the relationship between quoted prices and realizable value.

For large positions, disclosure should also address concentration relative to observable market depth. This is not to demand fire-sale accounting. It is to acknowledge that a quoted price for one unit does not by itself communicate the liquidity characteristics of a position that is large relative to normal turnover on approved venues.

### 7.5 Proof of Reserves Is Not Financial Reporting

One of the more important conceptual clarifications in the digital asset ecosystem concerns proof-of-reserves disclosures. After several high-profile exchange failures, market participants increasingly called for on-chain or attestation-based demonstrations that custodians or platforms held sufficient assets. Such disclosures can be useful, but they are not substitutes for audited financial statements. Proof of reserves generally shows assets, often at a moment in time, but may not fully show liabilities, encumbrances, related-party arrangements, legal rights of customers, or the quality of internal controls. Nor does it necessarily address whether the entity’s obligation structure, risk exposures, or governance processes are sound.

Accounting scholars should view proof of reserves as an instructive parallel reporting device rather than a replacement for established financial reporting. It highlights a demand for timelier, more technically grounded evidence in environments where digital assets can be moved instantly and opacity can be disastrous. But it also demonstrates why financial reporting remains necessary: users do not need asset snapshots alone; they need integrated information about claims, liabilities, obligations, controls, and going-concern implications.

### 7.6 Internal Control Priorities

Cryptoasset reporting quality depends heavily on internal controls. The most important control areas include the following.

1. Key management and access governance. Entities need robust controls over creation, storage, use, rotation, and recovery of private keys or equivalent authorization credentials. Multisignature arrangements, hardware security modules, segregation of duties, and emergency access protocols can materially affect risk.

2. Wallet reconciliation and completeness. Entities should reconcile wallet balances to the general ledger, custodian reports, and transaction records, including treatment of pending transactions, fees, and failed transfers.

3. Authorization of transfers and smart contract interactions. Because unauthorized transfers are typically irreversible, control over approvals, whitelist management, and protocol interactions is central.

4. Counterparty and custodian oversight. Exchange and custodian concentration risk, legal review of custody terms, service organization reports, and contingency planning are vital.

5. Valuation governance. Pricing-source selection, cut-off policies, treatment of outlier prices, and review of thin-market positions require formal governance rather than ad hoc data pulls.

6. Event monitoring. Forks, airdrops, staking changes, bridge incidents, sanctions actions, and regulatory developments can alter recognition, measurement, or disclosure obligations quickly.

These are not merely operational matters. Weak controls undermine the credibility of reported balances and make assurance more costly. Strong controls, by contrast, improve the feasibility of both current accounting and future standard-setting innovation.

### 7.7 The Relevance of SAB 122 and the Limits of Balance-Sheet Visibility for Safeguarding Risk

The SEC staff’s rescission of SAB 121 through SAB 122 is instructive because it shows how difficult it is to reflect safeguarding risk in financial statements. SAB 121 had forced visibility by requiring a recognized liability and corresponding asset for obligations related to safeguarding customer cryptoassets. SAB 122 restored reliance on existing contingency frameworks. Neither approach is conceptually complete on its own. The first risked overgeneralization and inconsistency with traditional custody analogies; the second risks leaving economically significant safeguarding exposures underrepresented in primary statements unless disclosure is robust.

The broader lesson is that accounting for intermediation risk in crypto markets cannot rely solely on asset and liability recognition thresholds. Where legal obligations, operational dependencies, reputational commitments, and rapid-withdrawal dynamics interact, disclosures about custody practices, reserve structures, customer asset segregation, and contingency planning remain essential regardless of the liability model ultimately adopted.

### 7.8 Assurance as a Future Research and Standard-Setting Frontier

Cryptoasset assurance deserves greater attention in accounting research. Existing audit methodologies can be extended to digital assets, but the field also poses novel questions. How should auditors evaluate governance over multisignature wallets? What level of on-chain analytics competence is necessary for high-quality audits? How should assurance address smart contract code risk when the financial statement amounts depend on code-governed rights? To what extent can continuous or near-real-time attestations complement periodic financial reporting? These are not merely technical matters for audit specialists. They shape the credibility and future institutionalization of cryptoasset accounting.

## 8. Standard-Setting and Regulatory Implications

### 8.1 The Case for a Rights-Based Standard-Setting Agenda

The strongest implication of this article is that standard setters should abandon the search for a single accounting home for all cryptoassets. The relevant agenda is not “Should crypto be an intangible asset?” but rather “Which token-related rights and uses warrant distinct accounting treatment?” A rights-based standard-setting agenda would begin by identifying the features that actually drive accounting differences: enforceable claims, redemption structure, fungibility, market observability, service obligations, technological encumbrances, and business model.

This approach would produce more stable accounting than technology-specific rulemaking. Crypto markets evolve quickly. New token labels emerge, but the underlying economic questions are relatively durable. Does the holder have a claim on someone else? Is the asset primarily a market-traded bearer item? Does the token entitle the holder to services? Has the issuer assumed an ongoing obligation? Those questions will remain relevant even as specific protocols change.

### 8.2 What U.S. GAAP Should Do Next

For U.S. GAAP, ASU 2023-08 is a strong beginning but not a complete endpoint. The next steps should include at least five clarifications.

First, the FASB should develop guidance for tokens outside current scope, especially wrapped tokens, certain stablecoins, and significant nonfungible or rights-bearing digital assets. Not all require fair value, but all require clearer classification principles.

Second, the Board should address initial recognition and derecognition in digital-asset-specific contexts, including staking rewards, mining rewards, airdrops, forks, and transfers into protocols or wrappers. The absence of direct guidance in these areas creates comparability problems precisely where practice diversity is most likely.

Third, U.S. GAAP should clarify presentation and disaggregation for entities whose ordinary activities involve cryptoassets. Routing all fair value changes through net income is useful, but line-item transparency and segment disclosures are still necessary.

Fourth, the FASB should consider whether safeguarding obligations and customer-asset risks require disclosure enhancements even if recognition continues to rely on contingency guidance. The SAB 121/SAB 122 episode demonstrated that users need structured information about these exposures.

Fifth, standard setters should coordinate with valuation and audit practice to ensure that fair value measurement for cryptoassets is operationally robust. Without disciplined conventions for accessible market determination, pricing-source hierarchy, and restricted-asset adjustments, even a conceptually superior measurement basis can yield inconsistent outcomes.

### 8.3 What IFRS Should Do Next

For IFRS, the first need is conceptual honesty about the limits of IAS 38 as a default home for cryptoassets. The standard can classify them, but that does not mean it always measures them well. The IASB should therefore evaluate whether a distinct measurement model is needed for bearer cryptoassets with active markets, even if such assets remain outside the formal definition of financial instruments.

A second priority is clearer guidance for claim-based tokens. If a stablecoin or tokenized claim confers enforceable redemption rights, the accounting should not be obscured by a generic “digital asset” label. IFRS should encourage or require analysis that looks through token form to underlying rights.

A third priority is issuer accounting. Token issuers continue to face uncertainty over whether proceeds represent deferred revenue, liabilities, equity, or something else. This is not a peripheral issue. In many digital ecosystems, issuer accounting determines whether reported performance is meaningful at all.

A fourth priority is disclosure modernization. Even if the IASB does not immediately adopt a separate cryptoasset standard, it can improve practice by specifying digital-asset disclosures around custody, restrictions, market access, rights, and technological dependencies. Such an approach would be consistent with IFRS’s emphasis on principle-based disclosure while still addressing information deficits evident in practice.

### 8.4 Regulatory Coordination Beyond Accounting Standards

Accounting for cryptoassets cannot be isolated from broader regulation. Prudential treatment, market conduct rules, stablecoin reserve regulation, insolvency law, and custody requirements all affect the economic meaning of token balances. The Basel Committee’s 2022 prudential framework for cryptoasset exposures, for example, illustrates that regulators already distinguish among token types based on risk characteristics. Accounting should not mechanically copy prudential categories, but it should learn from the underlying insight: token heterogeneity matters institutionally.

Similarly, securities law and payments regulation can change whether a token is economically closer to a claim, a commodity, a prepaid right, or an intermediation obligation. Standard setters need not wait for total regulatory harmonization, but they should remain attentive to how legal developments affect the substance of rights conveyed by tokens.

### 8.5 Avoiding Two Equal and Opposite Mistakes

Future standard setting should avoid two opposite errors.

The first error is over-assimilation: forcing all cryptoassets into existing categories regardless of resulting measurement distortion. This was the problem with broad reliance on indefinite-lived intangible accounting.

The second error is exceptionalism: assuming every digital token requires sui generis accounting just because it uses blockchain technology. That path would generate complexity without principle.

The appropriate middle path is selective differentiation. Standard setters should preserve the discipline of existing frameworks where tokenization is merely a new form of old rights, but they should create targeted solutions where digital bearer structures and protocol-based arrangements create recurring failures of relevance or comparability.

### 8.6 Implications for Preparers and Audit Committees

Preparers should not wait passively for perfect standards. They can improve reporting quality now by adopting a structured internal classification framework, documenting rights and business-model assessments, strengthening disclosure around custody and restrictions, and ensuring that audit committees understand the difference between nominal token balances and economically accessible value. Audit committees, in turn, should challenge management on valuation sources, key management controls, concentration risks, and the consistency of policy choices across token categories.

The broader governance message is that cryptoasset accounting is not a niche technical problem delegated to treasury or controller teams. It is a board-level issue whenever token exposures become material, because the associated risks span liquidity, operations, compliance, reputation, and financial reporting credibility.

## 9. Research Agenda

The cryptoasset accounting debate has moved quickly in practice but remains relatively underdeveloped in academic accounting research. The field offers unusually rich opportunities for theory-building, empirical testing, and interdisciplinary work.

### 9.1 Value relevance after ASU 2023-08

The most immediate research question concerns the consequences of the FASB’s fair value model. Does fair value measurement for bearer cryptoassets improve value relevance, analyst forecast quality, comparability, or debt contracting? Studies grounded in the value-relevance literature on fair value reporting (for example, Barth, 2006; Landsman, 2007; Penman, 2007) can examine whether the new standard reduces reliance on non-GAAP adjustments and whether market participants price crypto exposures differently once balance sheet carrying amounts become current.

### 9.2 Cross-regime reporting differences

A second agenda concerns divergence between U.S. GAAP and IFRS. How do firms with similar crypto exposures report differently under the two regimes? Does IFRS flexibility generate useful tailoring or undesirable comparability loss? Do firms strategically select accounting policies under IAS 38 in ways associated with incentives, governance, or capital market pressures? These questions are especially important for multinational groups and for investors comparing entities across jurisdictions.

### 9.3 Control and assurance in digital environments

A third agenda concerns internal control and auditing. What governance structures over wallets, custodians, multisignature arrangements, and smart contract interactions are associated with fewer control deficiencies or more credible reporting? Can assurance methodologies incorporate on-chain evidence efficiently without overstating its scope? How do users understand proof-of-reserves attestations relative to audited financial statements? These questions sit at the intersection of auditing, information systems, and financial reporting.

### 9.4 Classification of stablecoins and tokenized claims

A fourth agenda concerns claim-based tokens, especially stablecoins. Researchers can examine whether stablecoin holders and issuers are reported in ways that reflect underlying rights, reserve transparency, and redemption mechanics. Market events in stablecoin history make clear that “stability” is not an accounting category. The broader economics literature likewise stresses that reserve quality and redemption credibility, rather than nominal peg design alone, determine whether a stablecoin behaves like a credible monetary claim (Gorton & Zhang, 2021). The field needs evidence on how reporting differences map to underlying legal and reserve structures and whether users can distinguish robust claim-based tokens from weaker quasi-monetary instruments.

### 9.5 Issuer accounting and earnings quality

A fifth agenda concerns token issuers. Token sales create fertile ground for studying revenue recognition, liability classification, and earnings quality. Prior finance research on initial coin offerings shows that token issuance has already operated as a meaningful financing channel, which makes the accounting characterization of issuance proceeds especially consequential (Howell, Niessner, & Yermack, 2020). When do issuers recognize proceeds, and how do those choices relate to ongoing obligations, governance rights, or legal form? Are some token issuances economically closer to customer prepayments, some to financing arrangements, and some to residual claims? Because issuers often operate in rapidly evolving ecosystems, the risk of reporting outcomes that overstate current performance is substantial.

### 9.6 Measurement under illiquidity and market fragmentation

A sixth agenda concerns fair value measurement under fragmented and always-open markets. How should accessible market determination be operationalized? Do composite price feeds outperform single-venue prices for financial reporting? When do quoted prices cease to be representative of realizable value for concentrated positions? These questions extend beyond cryptoassets. They can inform fair value accounting more broadly in digitized, multi-venue markets.

### 9.7 Accounting thought and the future of intangible assets

Finally, cryptoassets offer a broader theoretical opportunity. They make visible a longstanding limitation in intangible-asset accounting: the mismatch between economically important nonphysical resources and categories designed for a different industrial era. Research on intangibles, conservatism, and fair value has long debated relevance versus verifiability (Lev, 2001; Watts, 2003). Cryptoassets sharpen that debate because they are nonphysical yet often highly tradable, technologically observable, and economically significant. Studying them can therefore contribute not only to digital-asset accounting but also to the future architecture of accounting for intangible and hybrid resources more generally.

## 10. Conclusion

Cryptoassets have become an accounting stress test because they sit at the boundary of several categories without fitting cleanly into any one of them. They can behave like marketable bearer commodities, contractual claims, prepaid service rights, governance instruments, or digitally unique rights depending on their design and on how the reporting entity uses them. The historical tendency to collapse this diversity into a single residual category, especially intangible assets, produced accounting outcomes that were often formally defensible yet economically weak.

The FASB’s move to fair value through net income for certain fungible bearer cryptoassets is a significant improvement and an important acknowledgment that impairment-only accounting failed decision usefulness. But it is only a partial solution. IFRS remains more reliant on residual classification through IAS 38 and IAS 2, and both regimes still lack comprehensive answers for stablecoins, wrapped tokens, validation rewards, nonfungible assets, issuer obligations, and safeguarding risk.

This article has argued that the right path forward is taxonomy, not exceptionalism and not over-assimilation. Accounting should differentiate cryptoasset positions according to enforceable rights, source of value, market observability, technological encumbrances, and business use. Bearer cryptoassets with observable markets should generally be measured at fair value through profit or loss. Claim-based tokens should be analyzed through financial-instrument logic. Utility tokens should be treated through contract and prepayment frameworks when that reflects substance. Nonfungible and thinly traded rights require more cautious measurement and stronger disclosure. Issuer-side token accounting must focus on obligations, not industry vocabulary.

The broader implication is that cryptoassets are not just another niche standard-setting topic. They expose a more general challenge for accounting in a digitized economy: how to report nonphysical resources whose economic significance depends on networks, code, market design, and layered rights structures. If accounting can respond well here, it will not only improve cryptoasset reporting. It will also advance the wider project of adapting financial reporting to the architecture of the digital economy.

### 8.7 Illustrative Applications of the Framework

To show the practical value of the taxonomy, this subsection applies the framework to five stylized fact patterns. The purpose is not to exhaust every detail but to demonstrate how rights, use, and market structure change the accounting answer.

#### Case 1: Corporate treasury holdings of Bitcoin

Assume a listed manufacturing company purchases Bitcoin as part of a treasury diversification strategy. The tokens are held with a qualified custodian, are not pledged, and are freely transferable. The company does not use Bitcoin in its operations, does not lend the tokens, and does not provide crypto-related services to customers.

Under the framework proposed in this article, the holding is a bearer cryptoasset. It conveys no enforceable claim against an issuer, but it trades in deep markets and is held precisely for exposure to current market value. Initial recognition occurs when control passes to the company, at cost including directly attributable acquisition costs. Subsequent measurement should be fair value through profit or loss, with separate balance sheet presentation from conventional intangible assets. Disclosure should address the quantity held, pricing source, custodian, concentration risk, and treasury purpose.

This outcome differs sharply from historical U.S. GAAP impairment treatment and, in many cases, from IFRS cost-model treatment under IAS 38. The difference is not cosmetic. Users analyzing the company’s liquidity and capital allocation decisions need current-value information, not an impairment-scarred historical amount.

#### Case 2: Holdings of a redeemable fiat-backed stablecoin

Assume a payments company holds a significant balance of a fiat-backed stablecoin used to facilitate customer settlements. The token is issued by a regulated entity that publishes reserve reports and grants verified institutional holders a contractual right to redeem one-for-one into U.S. dollars, subject to ordinary settlement cut-offs and anti-money-laundering checks.

The accounting analysis should begin with the rights, not the token’s market reputation. If the redemption right is legally enforceable and the issuer is obliged to deliver fiat currency, then the token resembles a claim-based instrument. Depending on the applicable accounting framework and business model, the asset may be analyzed using financial-instrument logic rather than as a generic intangible asset. If redemption at par is highly reliable and the instrument is used for short-term settlement, cash-equivalent analysis might be considered, though only with caution and only if the relevant framework’s criteria are actually met.

The key disclosure issues here are reserve quality, counterparty identity, direct versus intermediary redemption rights, and any mismatch between market transferability and redemption access. A token trading consistently at par is not automatically equivalent to cash. What matters is the legal and operational pathway by which par can be realized.

#### Case 3: A utility token acquired for cloud-computing consumption

Assume a software company purchases a token that gives access to a decentralized storage network. The company buys the token not for speculation but because it plans to consume the storage service over the next eighteen months. The token is transferable, but the company’s acquisition decision is based on service access rather than investment return.

In this case, holder accounting should reflect the consumptive purpose. The token economically resembles a prepaid right to future services. Recognition at cost is appropriate when control is obtained, but subsequent accounting should not default to free-standing investment treatment merely because the token is tradable. Expense recognition should track consumption of the underlying service benefit. If the company later accumulates additional tokens beyond operational need and begins trading them, the excess position may require separate classification as inventory or an investment-like cryptoasset.

This case illustrates why business model matters. The same token could be a prepaid asset for one entity and a speculative bearer-style position for another.

#### Case 4: Ether committed to staking with periodic rewards

Assume a digital infrastructure company holds Ether and stakes a portion of it directly through validators. The base Ether remains subject to protocol withdrawal delays, and the company receives periodic reward tokens. It also occasionally uses a liquid-staking arrangement that issues a derivative receipt token.

The accounting analysis must separate the base asset from the rewards and from any derivative receipt token. If the staked Ether remains under the company’s economic control subject to lock-up, it should generally remain recognized as the base bearer cryptoasset, with disclosure of encumbrance, lock-up period, and slashing risk. Reward tokens should be recognized when control is obtained, initially at fair value. Whether the corresponding credit is revenue or other income depends on whether validation is part of ordinary activities.

If the company instead converts Ether into a liquid-staking token that embodies different rights and transferability, derecognition of the original asset and recognition of a new wrapped or claim-based position may be appropriate. The analysis therefore turns on legal and technological substance, not merely on the fact that the company is “staking.”

#### Case 5: Wrapped Bitcoin used in decentralized finance

Assume an investment vehicle holds wrapped Bitcoin on a secondary blockchain in order to deploy it in decentralized finance applications. Redemption into native Bitcoin depends on a bridge or custodian arrangement. The wrapped token trades actively, but bridge security has become a known market concern.

The underlying economic exposure is partly to Bitcoin price and partly to bridge or wrapper integrity. Accounting that treats the asset as identical to native Bitcoin would be incomplete. If the wrapped token gives the holder a robust and enforceable claim on underlying Bitcoin, claim-based accounting with strong disclosure may be appropriate. If the wrapper is mainly a market convention with weaker legal enforceability, the token may be closer to a bearer-style asset with layered technological risk. In either case, disclosures must address redemption mechanics, counterparty exposure, bridge dependency, and whether quoted prices reflect those risks.

These illustrations demonstrate the practical advantage of a taxonomy-based framework. Once the analyst focuses on rights, use, and market structure, the accounting treatment becomes more coherent than when one begins with the blanket question of how to account for “crypto.”

## Appendix A. Core Accounting Propositions

The argument of the article can be summarized in five normative propositions. First, cryptoassets should not be treated as a single accounting object. Classification must begin with the rights embedded in the token and the way the reporting entity uses it. Second, fungible bearer cryptoassets with observable and accessible markets should generally be measured at fair value through profit or loss because current market value is the central economic attribute users need. Third, tokens that convey legally enforceable redemption or underlying asset claims should be analyzed through financial-instrument or claim-based logic rather than being grouped with nonclaim bearer assets. Fourth, utility and access tokens should be accounted for through contract and prepayment frameworks when the holder’s primary purpose is consumption and when the issuer has service obligations. Fifth, disclosure and assurance are not supplementary luxuries in crypto reporting; they are core mechanisms for conveying custody, encumbrance, technological dependency, and market-access risk.

These propositions are intentionally general so that they can survive changes in token branding and market fashion. The accounting system does not need a separate rule for every protocol. It needs a principled way to distinguish bearer value, contractual claims, service rights, validation-related inflows, and issuer obligations. That is the level at which durable standard setting should operate.



## References

AICPA & CIMA. (2025). *Accounting for and Auditing of Digital Assets* (updated practice aid).

Barth, M. E. (2006). Including estimates of future cash flows in today’s accounting measures. *Accounting Horizons, 20*(3), 271-285.

Basel Committee on Banking Supervision. (2022). *Prudential treatment of cryptoasset exposures*. [https://www.bis.org/bcbs/publ/d545.htm](https://www.bis.org/bcbs/publ/d545.htm)

Baur, D. G., Hong, K., & Lee, A. D. (2018). Bitcoin: Medium of exchange or speculative assets? *Journal of International Financial Markets, Institutions and Money, 54*, 177-189.

Chou, J., Agrawal, A., & Birt, J. (2022). The financial statement effects of cryptocurrency holdings and transactions. *Australian Accounting Review, 32*(3), 528-546.

Corbet, S., Lucey, B., Urquhart, A., & Yarovaya, L. (2019). Cryptocurrencies as a financial asset: A systematic analysis. *International Review of Financial Analysis, 62*, 182-199.

Financial Accounting Standards Board. (2010). *Statement of Financial Accounting Concepts No. 8: Conceptual Framework for Financial Reporting*.

Financial Accounting Standards Board. (2023a). *Accounting Standards Update No. 2023-08, Intangibles—Goodwill and Other—Crypto Assets (Subtopic 350-60): Accounting for and Disclosure of Crypto Assets*.

Financial Accounting Standards Board. (2023b). *Accounting for and disclosure of crypto assets* (project page). [https://www.fasb.org/projects/project-details/accounting-for-and-disclosure-of-crypto-assets](https://www.fasb.org/projects/project-details/accounting-for-and-disclosure-of-crypto-assets)

Gorton, G., & Zhang, J. (2021). *Taming wildcat stablecoins*. NBER Working Paper No. 29691.

Howell, S. T., Niessner, M., & Yermack, D. (2020). Initial coin offerings: Financing growth with cryptocurrency token sales. *Review of Financial Studies, 33*(9), 3925-3974.

IASB. (2026). *IASB Update: January 2026*.

IFRS Foundation. (2018). *Conceptual Framework for Financial Reporting*. [https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/](https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/)

IFRS Foundation. (2025a). *IAS 2 Inventories*. [https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/](https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/)

IFRS Foundation. (2025b). *IAS 38 Intangible Assets*. [https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/](https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/)

IFRS Interpretations Committee. (2019). *Holdings of Cryptocurrencies* (agenda decision). [https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2024/issued/ias38.html#id-83293](https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2024/issued/ias38.html#id-83293)

Landsman, W. R. (2007). Is fair value accounting information relevant and reliable? Evidence from capital market research. *Accounting and Business Research, 37*(sup1), 19-30.

Lev, B. (2001). *Intangibles: Management, Measurement, and Reporting*. Brookings Institution Press.

Liu, Y., & Tsyvinski, A. (2021). Risks and returns of cryptocurrency. *Review of Financial Studies, 34*(6), 2689-2727.

Makarov, I., & Schoar, A. (2020). Trading and arbitrage in cryptocurrency markets. *Journal of Financial Economics, 135*(2), 293-319.

Nakamoto, S. (2008). *Bitcoin: A Peer-to-Peer Electronic Cash System*. [https://bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf)

Penman, S. H. (2007). Financial reporting quality: Is fair value a plus or a minus? *Accounting and Business Research, 37*(sup1), 33-44.

Ramassa, P., Leoni, G., & Giovannoni, E. (2022). Accounting for cryptocurrencies: Evidence from Italy. *Meditari Accountancy Research, 35*(7), 1598-1625.

U.S. Securities and Exchange Commission. (2022). *Staff Accounting Bulletin No. 121*. [https://www.sec.gov/oca/staff-accounting-bulletin-121](https://www.sec.gov/oca/staff-accounting-bulletin-121)

U.S. Securities and Exchange Commission. (2025). *Staff Accounting Bulletin No. 122*. [https://www.sec.gov/oca/staff-accounting-bulletin-122](https://www.sec.gov/oca/staff-accounting-bulletin-122)

Watts, R. L. (2003). Conservatism in accounting Part I: Explanations and implications. *Accounting Horizons, 17*(3), 207-221.

Yermack, D. (2015). Is Bitcoin a real currency? An economic appraisal. In D. L. K. Chuen (Ed.), *Handbook of Digital Currency: Bitcoin, Innovation, Financial Instruments, and Big Data* (pp. 31-43). Academic Press.

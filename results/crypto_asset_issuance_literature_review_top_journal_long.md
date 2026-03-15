# The Economics of Crypto-Asset Issuance: An AER-Style Review Article

## Abstract

Crypto-asset issuance has become one of the most distinctive financial innovations of the past decade. Between the first wave of initial coin offerings (ICOs), the rise of exchange-mediated token launches, the growth of proof-of-stake token creation, the spread of airdrops and retroactive distributions, and the emergence of fiat-backed stablecoins, digital-token issuance has evolved far beyond a narrow story of speculative fundraising. In economic terms, crypto-asset issuance bundles together financing, user acquisition, governance allocation, monetary design, and market microstructure in ways that differ fundamentally from equity, debt, and conventional platform subsidies. This review article synthesizes the economics literature on crypto-asset issuance and organizes it around five questions. First, why do entrepreneurs, protocol designers, exchanges, and reserve managers issue crypto assets rather than rely on traditional financing instruments? Second, how do different issuance mechanisms allocate cash-flow rights, control rights, usage rights, and liquidity? Third, what information frictions, agency problems, and commitment problems shape issuance outcomes? Fourth, how has regulation altered the comparative advantage of different issuance forms? Fifth, what are the broader implications of crypto issuance for market structure, monetary competition, and financial stability?

The article argues that the central economic feature of crypto-asset issuance is that it collapses several margins that are usually separated in traditional finance. A token sale can simultaneously raise capital, create a secondary market, subsidize early adopters, allocate governance power, and precommit a future supply schedule. A stablecoin issuer can simultaneously issue a payment instrument, create demand for reserve assets, and transform redemption design into a run-risk problem. A proof-of-stake protocol can simultaneously finance security, distribute rents, and determine political influence inside the protocol. These combined functions help explain both the appeal and the fragility of crypto issuance. They also explain why the economics literature has moved away from treating tokens simply as unregulated securities or digital commodities.

Across the literature, four broad conclusions emerge. First, token issuance is most economically attractive when project value depends on bootstrapping network adoption, rewarding complements, or creating a tradable claim before a platform is mature. Second, the same features that make token issuance powerful also create unusually severe information asymmetries, governance distortions, and manipulation risks because financing occurs under weak disclosure and high retail participation. Third, reserve-backed and endogenous monetary forms of issuance, especially stablecoins, create quasi-banking structures whose fragility depends on asset quality, redemption rules, and market confidence. Fourth, regulation has shifted issuance away from open ICOs toward private placements, offshore venues, exchange launchpads, and jurisdiction-specific structures, but it has not removed the underlying economic demand for tokenized issuance. The article concludes with a research agenda on comparative contracting, issuance design, welfare, and the international political economy of token-based finance.

**JEL Codes:** G18; G23; G24; G28; O16

**Keywords:** crypto assets, token issuance, ICOs, stablecoins, proof of stake, airdrops, platform finance, regulation

## I. Introduction

The rise of crypto assets created a new way to issue claims, rights, and incentives at scale. Starting with Bitcoin, digital tokens were initially understood either as technological curiosities or as stateless monetary experiments. Yet by the late 2010s, token issuance had become a large-scale financing channel. Start-ups, protocol teams, exchanges, and decentralized projects issued tokens to raise capital, coordinate user adoption, allocate governance, compensate validators, and create internal media of exchange. The first wave of initial coin offerings raised billions of dollars with remarkably light intermediation. Later waves added exchange-led launches, decentralized exchange offerings, governance token distributions, retroactive airdrops, and fiat-backed stablecoin issuance. Even after the ICO boom faded and regulatory scrutiny intensified, the underlying economic question remained: why issue a token at all?

That question matters because crypto-asset issuance is not simply the digital version of equity issuance. The economic logic is different in several respects. First, tokens can be issued before a platform or network is fully built, allowing entrepreneurs to finance development by selling access, speculative upside, or governance claims tied to a future ecosystem. Second, tokens can circulate immediately on secondary markets, creating liquidity and price discovery at a much earlier stage than is normal in venture finance. Third, issuance often serves as an adoption subsidy: early users, developers, validators, liquidity providers, or community members receive tokens whose value depends on later network growth. Fourth, token supply rules are programmable. Issuers can precommit, at least in principle, to issuance schedules, vesting, burns, staking rewards, and treasury allocations. Fifth, some crypto issuance generates not only financial claims but also quasi-monetary instruments, as in the case of stablecoins.

The result is that crypto-asset issuance lies at the intersection of entrepreneurial finance, industrial organization, corporate governance, payments economics, and monetary economics. It resembles entrepreneurial fundraising because many early token sales financed risky platform ventures. It resembles two-sided market design because token issuance often aims to bootstrap users and complements simultaneously (Rochet and Tirole 2003). It resembles corporate governance because token distributions shape who votes, who captures rents, and who controls protocol upgrades (Yermack 2017; Biais et al. 2019). It resembles banking and monetary issuance because stablecoins create redeemable claims backed by reserve assets. It resembles mechanism design because issuance rules influence incentives long after the initial sale.

This review article synthesizes that literature and proposes a unifying perspective. The key claim is that crypto-asset issuance should be understood as the sale or programmed distribution of a multi-dimensional claim bundle. Unlike conventional securities, crypto assets often combine some or all of the following elements: a financing claim on future project success; a usage right within a digital network; a governance vote; a liquidity instrument; a speculative object; and an intertemporal transfer rule encoded in protocol design. The literature is therefore best organized not around legal labels such as “security token” or “utility token,” but around the underlying economic functions of issuance.

The article contributes in four ways. First, it presents a taxonomy of issuance forms and maps them to the financing and coordination problems they are intended to solve. Second, it reviews the main theoretical mechanisms proposed in the literature, especially those related to platform bootstrapping, information asymmetry, commitment, endogenous liquidity, and protocol security. Third, it synthesizes the empirical evidence on ICO performance, exchange intermediation, stablecoin issuance, and regulatory substitution. Fourth, it identifies major open questions for economics, including welfare evaluation, long-run market structure, and the interaction between token issuance and state-backed money.

The discussion is intentionally broader than the first ICO boom. Restricting the analysis to ICOs alone now misses much of the field. Crypto issuance today includes at least six economically distinct forms. One is public token sales used to raise capital. A second is exchange-mediated issuance, where centralized exchanges certify, market, or distribute tokens to their users. A third is protocol-native issuance through mining or staking rewards, where new tokens compensate validators and secure the network. A fourth is airdrop issuance, where tokens are distributed to users, developers, or liquidity providers to stimulate adoption or decentralize governance. A fifth is reserve-backed issuance, where a firm issues a stablecoin redeemable for fiat or reserve assets. A sixth is tokenized issuance of claims that more closely resemble conventional securities or fund shares. Each form solves a different problem, and each has different informational and regulatory implications.

The article proceeds as follows. Section II develops a taxonomy and brief historical evolution of crypto-asset issuance. Section III asks why firms and protocols issue tokens rather than relying on equity, debt, venture capital, or conventional platform subsidies. Section IV examines the main issuance mechanisms and the economic logic of their design. Section V studies information asymmetries, agency problems, and market manipulation. Section VI turns to stablecoins and the economics of reserve-backed issuance. Section VII examines regulation and jurisdictional competition. Section VIII discusses broader monetary and macro-financial implications. Section IX outlines a research agenda and concludes.

## II. Taxonomy and Historical Evolution of Crypto-Asset Issuance

### A. From Native Coins to Financing Tokens

The first major crypto asset, Bitcoin, was not issued through a conventional capital raise. Instead, it was created through a protocol-native issuance process in which miners received newly minted coins in exchange for expending computational resources to secure the network. This was a radical departure from both corporate finance and state monetary issuance. New units were distributed according to an algorithmic schedule rather than through managerial discretion, underwriting, or central bank policy. In economic terms, Bitcoin embedded seigniorage into a decentralized security mechanism.

Ethereum expanded the design space by combining an initial sale with an ongoing protocol-native issuance system. The Ethereum presale helped finance development and coordinate early supporters, while subsequent issuance compensated validators and later stakers. This hybrid model established an important template. A project could raise funds before launch, then use continuing token issuance to secure and govern the platform after launch. The token was simultaneously a financing instrument, a usage medium, and eventually a governance object.

The ICO boom of 2016-2018 generalized this template. Start-ups issued tokens, often framed as “utility” tokens, to raise capital for protocols, exchanges, applications, and infrastructure. In many cases, the token had no mature network utility at the time of sale. Buyers were effectively betting on future platform growth, exchange listing, and speculative demand. The ease of global online distribution, combined with crypto-native payment rails, dramatically reduced issuance frictions relative to traditional venture or public equity finance. Howell, Niessner, and Yermack (2020) document that ICOs funded very early-stage ventures and often substituted for conventional financing in settings where disclosure and investor protection were weak.

### B. The Proliferation of Issuance Forms

The post-ICO period saw a proliferation of issuance mechanisms.

First, centralized exchanges developed initial exchange offerings (IEOs) and launchpads. These formats reintroduced intermediation. Exchanges screened projects, marketed offerings to their user base, and often controlled initial listing and distribution. Economically, this solved a certification problem that had become acute after the ICO wave revealed widespread fraud, low-quality projects, and severe adverse selection.

Second, decentralized exchange infrastructure enabled initial decentralized exchange offerings (IDOs) and liquidity-bootstrapping pools. These mechanisms linked issuance directly to automated market makers and on-chain liquidity. Rather than selling a fixed number of tokens through a single centralized event, projects could shape price discovery dynamically through pool design, bonding curves, or distribution rules.

Third, governance token issuance became central to decentralized finance (DeFi). Protocols distributed tokens to users, developers, lenders, borrowers, traders, or liquidity providers in order to decentralize control, reward early adoption, and align incentives. Such issuance was not always primarily a financing event. It often resembled a combination of user acquisition, political enfranchisement, and rent distribution.

Fourth, airdrops and retroactive distributions emerged as a distinct strategy. Instead of selling tokens upfront, projects distributed them to early users, developers, or ecosystem participants after a platform had gained some traction. This can be understood as a substitute for customer acquisition spending, a way to decentralize governance, or a response to regulation by avoiding an overt public sale.

Fifth, stablecoin issuance became economically central. Here the issuer’s problem differs sharply from entrepreneurial fundraising. A stablecoin issuer creates a redeemable or quasi-redeemable digital liability backed by reserve assets, overcollateralization, or algorithmic stabilization mechanisms. This is not merely financing; it is private money creation, reserve intermediation, and payment-network construction.

### C. A Functional Taxonomy

A useful economic taxonomy distinguishes issuance by function rather than by surface technology.

| Issuance form | Core economic function | Typical mechanism | Main economic problem solved |
| --- | --- | --- | --- |
| Public token sale | Early-stage financing plus market creation | ICO, public sale, SAFT-linked launch | Raise capital and pre-price future network claims |
| Exchange-mediated sale | Financing with delegated certification and distribution | IEO, launchpad | Reduce adverse selection and listing uncertainty |
| Protocol-native issuance | Compensate validators and secure consensus | Mining, staking, validator rewards | Fund security and distribute seigniorage |
| Airdrop or retroactive distribution | User acquisition, governance decentralization, ecosystem reward | Airdrop, retroactive grant | Bootstrap participation and political legitimacy |
| Reserve-backed issuance | Create redeemable digital payment claim | Fiat-backed stablecoin minting | Supply settlement asset and capture reserve rents |
| Tokenized claims issuance | Digitize conventional financial claims | Security token, tokenized fund share | Lower transfer frictions and widen market access |

This taxonomy clarifies why crypto issuance cannot be reduced to one legal or financial category. The same digital infrastructure can be used to solve financing, payments, governance, or security problems. The economics of issuance varies accordingly.

### D. Historical Phases

It is useful to divide the evolution of crypto issuance into four phases.

The first phase was protocol-native issuance, dominated by Bitcoin and early proof-of-work networks. The main economic question was how to secure a decentralized ledger without a central issuer.

The second phase was the ICO era, when token sales became a prominent entrepreneurial finance channel. The main questions concerned disclosure, investor protection, platform bootstrapping, and whether tokens could legitimately finance software networks.

The third phase was the intermediation and DeFi phase, characterized by exchange launchpads, governance tokens, liquidity mining, and airdrops. The central issue became how issuance rules shaped adoption, liquidity, and control in ecosystems that were already partially operational.

The fourth phase is the payments and institutionalization phase, dominated by stablecoins, tokenized financial claims, and regulation-driven segmentation across jurisdictions. Here the main questions concern reserve quality, monetary substitution, prudential oversight, and the boundary between capital markets and payment systems.

This historical sequence is helpful not because phases are cleanly separated, but because it shows a broad shift in the function of issuance. Early crypto issuance was about creating scarce digital native assets and funding protocols. Later issuance increasingly became about intermediation, monetary design, and institutional integration.

## III. Why Issue Crypto Assets?

The most important economic question is not how tokens are issued, but why rational projects choose token issuance in the first place. Traditional finance already offers equity, debt, venture capital, crowdfunding, and platform subsidies. Token issuance must therefore create value by solving a problem those instruments solve poorly.

### A. Financing Under Severe Contracting Frictions

A natural starting point is entrepreneurial finance under asymmetric information. In the classic logic of Myers and Majluf (1984), financing choices respond to information asymmetry and adverse selection. Start-ups with little collateral, uncertain future cash flows, and high intangible intensity often rely on venture capital or staged private finance. Crypto ventures share some of these features, but they also differ. Many projects aim to build open protocols or platforms whose value depends not only on future cash flow, but on ecosystem adoption and secondary-market belief. In such settings, token issuance can sell an asset whose value is linked to future network usage even when conventional residual cash-flow rights are hard to specify.

Catalini and Gans (2018), together with related work on blockchain-based financing and token design, argue that token sales can create value when they help coordinate adoption in a platform setting (Cong and He 2019; Fisch 2019). A token can act as both financing instrument and medium for future network participation. Selling tokens today can therefore pre-finance network development while simultaneously dispersing claims to future users or speculators who help support the ecosystem. This is a different logic from conventional securities issuance, where financing and user coordination are usually separated.

Howell, Niessner, and Yermack (2020) emphasize another advantage: token sales can finance ventures that are earlier, less tangible, and less institutionally legible than the kinds of firms that access traditional public markets. Empirical work by Adhami, Giudici, and Martinazzi (2018) and Fisch (2019) similarly shows that issuer characteristics and token design are tightly linked to fundraising success. In this sense, token issuance can be understood as a high-risk, low-disclosure financing technology particularly suited to ventures that lack conventional verifiable assets but can tell a compelling network-growth story.

### B. Bootstrapping Network Effects

Many crypto projects are platforms or protocols with strong network effects. Their value depends on attracting developers, validators, users, liquidity providers, or complementary applications. Traditional platform strategies often solve this through subsidies, pricing asymmetry, venture finance, or exclusive contracting. Token issuance adds another instrument: distribute or sell a claim whose value rises with platform success.

The economic advantage is that tokens can make user adoption an investment-like activity, effectively transforming one side of a platform market into early residual claimants on future network scale. Early users are not merely consumers receiving a subsidy; they may become claimants on future ecosystem success. This changes incentives in at least three ways.

First, it can attract users even before the platform has developed strong intrinsic utility because speculative upside partly substitutes for current usage value.

Second, it can reward complements such as developers and liquidity providers without requiring cash compensation. Tokens transfer upside rather than immediate cash.

Third, it can create a liquid secondary market that continuously prices platform expectations, making the network itself a tradable object of belief.

This helps explain why many projects chose tokens even when equity finance was available. Equity would have funded the company, but it would not have simultaneously turned users into tradable stakeholders in a shared ecosystem.

### C. Commitment Through Rule-Based Supply

Another attraction of token issuance is the possibility of rule-based commitment. Traditional firms can promise dilution limits, dividend policies, or governance protections, but such commitments are often revisable. Token supply schedules, vesting rules, staking rewards, and burn mechanisms can be encoded more transparently and, in some cases, more credibly. Whether this credibility is always real is another matter, but the economic appeal is clear. Entrepreneurs can try to convince users and investors that future supply, treasury releases, or incentive distributions will follow known rules rather than managerial discretion.

This is especially relevant in network settings where future dilution can undermine adoption. If users fear that the issuing team will flood the market with new tokens or extract rents through treasury control, they may be reluctant to participate. Programmable supply creates an imperfect but sometimes powerful commitment device.

### D. Separating Usage Rights from Cash-Flow Rights

Token issuance also allows projects to separate usage rights from formal corporate cash-flow rights. A token may grant access to block space, transaction validation, storage, governance, or protocol fee discounts without granting conventional equity. For founders, this can be attractive because it finances development without immediately surrendering traditional corporate control. For buyers, it can be attractive because the token’s value is tied directly to ecosystem growth rather than to the issuing corporation’s residual profits alone.

This separability has two implications. One is legal and regulatory: issuers may attempt to frame tokens as non-securities or hybrid instruments. The other is economic: token buyers may care less about conventional accounting claims and more about adoption, exchange listing, and utility within the protocol. That shifts both the investor base and the information environment.

### E. Liquidity Creation at an Unusually Early Stage

Conventional entrepreneurial finance is illiquid. Venture capital claims are locked up, private shares trade rarely, and even public listings occur only after significant development. Token issuance compresses this timeline. A project can raise funds at an early stage and create tradable secondary-market liquidity almost immediately. This liquidity is economically important.

It increases investor demand by offering exit opportunities. It generates market signals about project viability. It enables speculation, which can amplify adoption narratives. It also creates temptation for short-termism, manipulation, and extractive founder behavior. The literature increasingly recognizes that early liquidity is both a key benefit and a key source of fragility in token issuance.

### F. Regulatory Arbitrage and Jurisdictional Flexibility

A final reason to issue tokens is regulatory arbitrage. This term should not be understood narrowly as evasion. More generally, it means that token issuance can be structured across jurisdictions, legal forms, and distribution mechanisms in ways that differ from tightly regulated securities issuance. Open online sales, offshore entities, exchange-mediated distribution, airdrops, and private SAFT arrangements all emerged partly because issuers sought to access global investor and user demand under uncertain or fragmented regulation.

This flexibility expanded the feasible set of financing structures. It also magnified consumer protection and enforcement problems. From an economic standpoint, regulation has therefore been endogenous to issuance design from the beginning.

## IV. Issuance Mechanisms and Their Economic Logic

### A. ICOs and Public Token Sales

The ICO was the first large-scale entrepreneurial issuance mechanism in crypto markets. A project sold tokens directly to buyers, often in exchange for Ether or Bitcoin, and used the proceeds to finance development. In theory, ICOs offered a remarkably efficient package: global access, low intermediation costs, immediate marketability, and the possibility of aligning users with the network’s future success. In practice, they often operated under thin disclosure, weak legal accountability, and heavy retail participation.

The economics literature has identified three core features of ICOs.

First, ICOs combined financing and market creation. A token sale did not merely raise funds; it simultaneously created a holder base with a direct interest in the token’s aftermarket performance.

Second, ICOs often sold claims before utility existed. This made them economically closer to highly speculative forward contracts on network growth than to conventional utility prepayments. The fact that many tokens were labeled “utility tokens” did not change this basic economic reality.

Third, ICOs internalized liquidity into the financing contract. Because exchange listing and secondary trading were expected quickly, investors cared not only about fundamental network use but about near-term marketability. This meant that token-sale design often catered as much to listing dynamics and speculative demand as to long-run platform value.

Howell, Niessner, and Yermack (2020) show that ICO-financed ventures were significantly earlier stage and more opaque than firms financed through traditional venture channels. This helps explain both the growth of the market and its dysfunction. The market expanded because token issuance solved a real financing problem for ventures that could not easily access conventional capital. But it also attracted low-quality issuers who benefited from the same weak screening.

### B. SAFTs and Private Placement Variants

As regulators increased scrutiny, some projects moved from open public sales toward private placement structures, especially SAFTs (Simple Agreements for Future Tokens). In economic terms, these arrangements separated financing from public token distribution. Accredited or sophisticated investors funded the project ex ante, often with the expectation that tokens would be delivered later when the network was live.

This resembles conventional staged finance more closely than an ICO, but the underlying economic attraction remains token-specific. Investors are funding a future network claim rather than simply purchasing equity. The shift toward SAFT-like structures can therefore be understood as regulatory substitution. It did not eliminate the demand for token-based financing. It changed the investor set and intertemporal sequencing.

From a welfare perspective, private placements reduce retail exposure to the most opaque early-stage risk. But they may also concentrate upside among sophisticated investors while leaving retail users to enter later through secondary markets.

### C. Exchange-Mediated Issuance: IEOs and Launchpads

The rise of IEOs and exchange launchpads responded to a classic lemons problem. Once low-quality ICOs proliferated, investors found it difficult to distinguish credible projects from opportunistic issuers. Centralized exchanges stepped into this gap by acting as certifiers, marketers, and distributors.

The economic logic is straightforward. Exchanges possess reputation, listing power, and customer access. By attaching their brand to a sale, they can partly solve the screening problem and reduce search costs for investors. They also benefit because successful launchpads attract trading volume, listing fees, and customer engagement.

This intermediation is not costless. It can create conflicts of interest. Exchanges may prioritize volume over quality, extract substantial rents, or use launchpads to reinforce market power. Yet the move from ICOs to exchange-mediated issuance reveals a deeper point: even in ostensibly disintermediated markets, certification and distribution are valuable. Crypto markets did not abolish intermediation; they reorganized it.

### D. IDOs and Liquidity-Bootstrapping Pools

Decentralized exchange offerings and liquidity-bootstrapping pools took issuance further toward on-chain market design. Instead of issuing through a fixed sale administered by a centralized intermediary, projects seeded liquidity in automated market makers or used dynamic pricing rules to distribute tokens.

The attraction of these mechanisms is that they merge issuance and price discovery directly. If a project launches through a liquidity pool, distribution and market formation happen simultaneously. This can reduce reliance on centralized exchanges and make access more permissionless. It can also amplify manipulation if liquidity is thin, if insiders dominate early trading, or if design rules are poorly understood by retail participants.

Economically, these mechanisms underscore that token issuance is as much a market-design problem as a financing problem. The designer chooses not only how many claims to sell, but how trading begins, who gets access first, how slippage and price impact work, and what information the initial market reveals.

### E. Protocol-Native Issuance Through Mining

Mining-based issuance solves a different problem from fundraising. In proof-of-work systems, newly issued tokens compensate miners for providing computational resources that secure the ledger. Issuance here is the financing of security. The protocol effectively taxes future dilution and uses that seigniorage to purchase consensus.

Budish (2018) highlights the economic limits of proof-of-work security. Because attack incentives scale with the value secured by the chain, security expenditure must also scale, which can generate high resource costs. In this framework, issuance is not a one-time financing event. It is a continuing subsidy necessary to sustain decentralized verification.

This yields a useful general lesson. Token issuance can finance ongoing public goods inside a protocol, not just initial development. Security, liquidity, and governance participation can all be purchased through issuance when no centralized budget authority exists.

### F. Proof-of-Stake Issuance

Proof of stake changes the economics of security issuance. Instead of paying miners to burn electricity, the protocol pays validators or stakers who lock tokens and bear slashing risk. Saleh (2021) shows that proof of stake can provide security without the same resource waste as proof of work, but it changes the distributional structure. Security rents now accrue to those who hold and stake the token, which can reinforce concentration if token ownership is already unequal.

This makes proof-of-stake issuance an important governance mechanism as well as a security mechanism. The issuance schedule affects not only inflation and validator incentives, but also the long-run distribution of political power inside the protocol. A protocol that pays high staking rewards may secure itself more effectively, but it may also entrench insiders or large holders.

### G. Airdrops and Retroactive Issuance

Airdrops are one of the most economically interesting but under-theorized forms of issuance. Rather than selling tokens for cash, a project distributes them to users, developers, contributors, or liquidity providers. This can serve several distinct functions.

One function is customer acquisition. Airdrops resemble platform subsidies or loyalty rewards. They encourage participation and create immediate goodwill.

A second function is governance decentralization. By distributing tokens to active users rather than private investors alone, a project can claim a broader political base for protocol governance.

A third function is regulatory substitution. If a direct public sale is legally risky, a project may prefer retroactive distribution after the network is operational.

A fourth function is credible reward for complementors. Developers, traders, and liquidity providers can be compensated with upside claims rather than cash. This is especially useful for cash-constrained protocols.

Economically, airdrops reveal that issuance is often a substitute for spending. Instead of paying for growth in dollars, projects pay in claims on future network value. The open question is whether this creates genuine participation or merely rent-seeking behavior by users who optimize for future token rewards. The literature on “liquidity mining” and incentive farming suggests that the answer is mixed.

### H. Stablecoin Issuance as Private Money Creation

Stablecoin issuance departs most sharply from the ICO paradigm. Here the issuer creates a digital claim meant to maintain a stable value, usually against the U.S. dollar. Economic analysis of stablecoin issuance must therefore draw less from venture finance and more from monetary economics, banking, and the theory of runs.

The key distinction is between reserve-backed and endogenous stabilization models. A fiat-backed stablecoin is issued against reserve assets, often short-term safe instruments. In this case, the issuer resembles a narrow bank or money-market intermediary. It earns revenue from reserve assets, provides payment and settlement convenience, and faces run risk if reserve quality or redemption credibility is questioned. Gorton and Zhang (2021) argue that stablecoins can resemble historical wildcat banking when backing and redemption are opaque or weak.

Algorithmic or endogenous stablecoins rely less on reserve assets and more on collateral rules, arbitrage, or expectation management. Their issuance is economically fragile because stability depends more directly on confidence in the mechanism itself. Episodes of collapse in such designs underscore that issuance rules and redemption design are not minor technicalities. They are the essence of the instrument.

Stablecoin issuance also creates macro-financial externalities. Large issuers generate demand for Treasury bills and other reserve assets; they create payment instruments that may substitute for bank deposits in some settings; and they transmit confidence shocks rapidly across crypto and traditional markets.

### I. Tokenized Securities and Hybrid Claims

Finally, tokenized issuance of conventional financial claims deserves mention, even though the economics literature is still thinner here. A tokenized bond, fund share, or equity-like claim does not derive its importance from platform bootstrapping. Its attraction lies in lower transfer frictions, programmability, broader market access, and potentially shorter settlement chains.

Economically, this form of issuance is less revolutionary than ICOs or stablecoins because the underlying claim already exists in traditional finance. But it matters because it shows the generality of token infrastructure. Issuance technology can be separated from underlying claim design. The resulting welfare gains then depend on whether tokenization meaningfully reduces intermediation costs or merely repackages existing finance under a new label.

## V. Information Asymmetries, Agency Problems, and Market Manipulation

If token issuance solves real financing and coordination problems, it also creates unusually severe informational and agency frictions. The literature converges on this point. Crypto issuance often occurs when projects are highly intangible, disclosure is weak, legal recourse is limited, and secondary-market liquidity arrives early. These are ideal conditions for adverse selection and moral hazard.

### A. Adverse Selection in Token Markets

Akerlof’s (1970) market-for-lemons logic is especially relevant to ICO-era token markets. Investors struggled to distinguish credible projects from low-quality issuers because many tokens were sold based on white papers, online communities, and roadmap claims rather than audited financials, verifiable product-market fit, or enforceable governance rights.

This problem was intensified by three features.

First, many token buyers were retail investors with limited ability to screen technical claims.

Second, issuers could market globally and pseudonymously, reducing the disciplinary role of local reputation and legal enforcement.

Third, early exchange listing created opportunities for issuers or insiders to benefit from short-term hype even if the project’s long-run prospects were poor.

These frictions help explain why intermediation later returned through exchanges, venture-backed launches, and private placements. Markets demanded screening, but crypto-native issuance had initially minimized it.

### B. Moral Hazard After the Sale

Moral hazard is also severe because issuers often retain treasury tokens, founder allocations, or governance advantages after a sale. Once funds are raised, investors face several risks: project teams may abandon development, divert treasury resources, dilute holders through later issuance, manipulate secondary-market expectations, or redesign governance in ways that favor insiders.

Traditional securities law mitigates such problems through disclosure, fiduciary duty, governance rules, and enforcement. Token markets often rely instead on smart-contract transparency, informal norms, vesting schedules, and community governance. These mechanisms are not irrelevant, but they are weaker and more heterogeneous.

Vesting and lockups are especially important. They serve as partial commitment devices to reduce immediate insider dumping. Yet they are only one margin. Founders may still control treasury decisions, governance processes, validator structures, or information release.

### C. The Role of White Papers, Code, and Open Source Transparency

Some observers initially argued that open-source code and on-chain transparency could substitute for conventional disclosure. The economics literature has treated this claim more cautiously. Code transparency can be valuable, but most investors cannot evaluate code directly. Even sophisticated investors may struggle to infer business viability, governance risk, or regulatory exposure from code alone.

Similarly, on-chain transaction transparency does not fully reveal off-chain control, side agreements, reserve quality, or marketing practices. Transparency in one dimension does not eliminate asymmetric information in others.

### D. Secondary-Market Manipulation and Wash Trading

Because token issuance often depends on early secondary-market liquidity, market manipulation becomes economically central. Issuers and insiders benefit if prices rise after issuance because higher prices validate the project, attract users, and increase the value of retained allocations. This creates incentives for wash trading, coordinated promotion, thin-liquidity price support, and exchange-mediated distortions.

The crypto market microstructure literature, including work by Makarov and Schoar (2020), shows that fragmented trading venues, weak surveillance, and cross-market frictions create substantial scope for mispricing and manipulation. For issuance, the implication is immediate: the quality of the secondary market is part of the financing contract. A token’s value at issuance depends not only on fundamentals but on the anticipated integrity of its aftermarket.

### E. Certification and Reputation

The return of certification mechanisms in crypto issuance can be interpreted through classic delegated-monitoring logic. Exchanges, venture capital investors, market-makers, auditors, and sometimes prominent crypto personalities all play certification roles. Their value arises because they reduce the cost of belief formation for dispersed investors and users.

Yet crypto certification is itself fragile. Certifiers may have conflicts of interest; reputation may be noisy; and some certifiers derive revenue from trading volume rather than long-run project quality. This means that token issuance often shifts from one layer of moral hazard to another rather than eliminating the problem outright. In this respect, crypto issuance resembles an extreme version of entrepreneurial finance under weak verification rather than a frictionless technological replacement for intermediation.

### F. Why “Utility Token” Is Not an Economic Solution

One of the most consequential lessons of the ICO era is that labeling a token a “utility token” does not solve the economic problems of securities issuance. A token may have some future utility and still function economically as a speculative financing instrument today. If buyers purchase primarily because they expect appreciation or early liquidity rather than because they need the token for immediate use, information asymmetry and investor-protection concerns remain central.

Economics therefore favors a functional analysis: what rights are sold, what expectations motivate buyers, how cash flows and control evolve, and what information asymmetries govern the sale? Legal labels may matter for regulation, but they are not the right analytical starting point.

## VI. Stablecoin Issuance and the Economics of Digital Money

Stablecoins deserve separate treatment because they are the clearest case in which crypto issuance creates something closer to private money than to entrepreneurial finance.

### A. What Stablecoin Issuers Actually Do

A stablecoin issuer typically performs four economic functions. It issues a digital claim intended to trade near par. It invests the backing assets or collateral. It manages redemption and settlement. And it operates, explicitly or implicitly, as a payments-network intermediary. The issuer therefore resembles a narrow bank, a money-market intermediary, a payment firm, and a technology platform all at once.

This multifunctionality is why stablecoins matter beyond crypto trading. Their growth affects reserve-asset demand, payment architecture, monetary substitution, and financial stability. It also means that the relevant literature is not only on token sales, but also on money demand, bank runs, and shadow banking.

### B. Reserve-Backed Stablecoins

Reserve-backed stablecoins are the most straightforward form. Users bring fiat or equivalent assets; the issuer mints tokens; reserves are held in cash or safe short-duration instruments; users can redeem at par, at least in principle. The issuer’s profit comes from reserve income, fees, and network scale.

The economics of issuance here turn on reserve quality, transparency, and redemption design. If reserves are safe and segregation is strong, the stablecoin approximates a narrow digital deposit. If reserves are risky, maturity-mismatched, or opaque, the structure becomes fragile. Gorton and Zhang (2021) show that this fragility resembles pre-regulatory private-money episodes where par claims depended on confidence in backing.

Reserve-backed issuance also raises industrial-organization questions. Scale matters because a widely accepted stablecoin becomes more useful in settlement, trading, and collateralization. This can create winner-take-most dynamics, especially when network effects interact with exchange integration and geographic reach.

### C. Endogenous and Algorithmic Stablecoin Issuance

Algorithmic or endogenous stablecoins attempt to achieve stability through overcollateralization, arbitrage incentives, elastic supply, or dual-token structures. Economically, they replace direct high-quality backing with mechanism design. Their success therefore depends on whether market participants believe the mechanism will continue working in stressed conditions.

The collapse of several such designs demonstrated a core lesson: when redemption credibility depends on endogenous token value rather than exogenous safe assets, issuance becomes reflexive. Confidence sustains the peg, but the peg also sustains confidence. This can work temporarily; it is fragile in runs.

The broader implication for the literature is that issuance design cannot be evaluated only by ordinary-times efficiency. Off-equilibrium redemption demand and crisis dynamics are fundamental.

### D. Stablecoins as Collateral and Monetary Infrastructure

Stablecoins are not only payment claims; they are also key collateral assets in decentralized and centralized crypto markets. This raises the stakes of issuance design. A loss of confidence in a major stablecoin can impair settlement, leverage, collateral chains, and market functioning simultaneously.

This is one reason why stablecoin economics belongs in macro-financial analysis. Issuance scale changes the structure of dollar demand, Treasury-bill demand, and risk transmission across markets. Large issuers create quasi-money that competes with or complements bank deposits, especially in environments with capital controls, weak local currencies, or strong demand for dollar access.

### E. Seigniorage and Competition with Banks

Stablecoin issuance also raises a classical question: who captures seigniorage or the return on money-like liabilities? In the banking system, deposit funding combined with asset returns generates intermediation income. Stablecoin issuers capture an analogous spread when they invest reserves and provide redeemable digital liabilities. If the scale becomes large, this creates competition with banks and with public monetary authorities.

The economics literature has only begun to analyze this systematically. But the central issue is clear. Stablecoin issuance is not merely a crypto-market convenience. It is a contest over the issuance of liquid claims and the rents associated with them.

## VII. Regulation, Jurisdictional Competition, and the Reorganization of Issuance

The history of crypto-asset issuance cannot be understood without regulation. Regulation has not simply constrained issuance; it has reshaped its form, location, and investor base. In economic terms, regulation changes the relative cost of different issuance mechanisms and therefore induces substitution across structures.

### A. The Early Regulatory Shock

The ICO wave initially grew under legal ambiguity. Many issuers claimed their tokens were not securities because they conferred utility, governance, or access rights rather than conventional cash-flow claims. Regulators, especially in the United States, increasingly rejected formal labels in favor of economic substance. The SEC’s 2017 DAO Report and later staff statements signaled that token sales could fall under securities law when purchasers expected profit based on managerial efforts. This did not end token issuance, but it changed its equilibrium.

The regulatory shock had at least four effects.

First, issuance migrated away from open U.S.-facing public sales toward offshore jurisdictions and geofenced offerings.

Second, issuers shifted toward private placements, SAFTs, and venture-backed token launches.

Third, exchanges and other intermediaries gained importance as compliant or semi-compliant distribution channels.

Fourth, some projects substituted airdrops, retroactive governance distributions, or “fair launch” narratives for explicit capital raises.

This substitution pattern is itself evidence that token issuance solves an underlying economic demand. If token issuance had no value beyond regulatory arbitrage, one would expect the market simply to disappear under scrutiny. Instead, it changed form.

### B. Functional Regulation Versus Formal Labels

A recurring theme in the regulatory debate is whether tokens should be classified by legal form or by economic function. Economics strongly supports the latter approach. A token may have utility and still function as an investment claim at issuance. A stablecoin may be technologically novel and still function economically as a deposit-like redeemable claim. A governance token may be politically framed as decentralized while still conveying concentrated control and insider rents.

Functional regulation matters because different issuance forms create different externalities. Entrepreneurial token sales raise investor-protection and disclosure questions. Stablecoin issuance raises run-risk and prudential questions. Validator-reward issuance raises competition and governance questions. Airdrops raise tax, disclosure, and fair-distribution questions. Treating all crypto issuance as one legal problem is therefore analytically weak.

The challenge is to apply function-based regulation without erasing the distinctive economic mechanisms of tokens. A token that bootstraps a network is not identical to a common share, even if both may involve speculative investment. Similarly, a reserve-backed stablecoin is not identical to a bank deposit, even if both are runnable money-like liabilities. Good regulation must therefore map functional similarities without denying design differences.

### C. Jurisdictional Competition

Crypto issuance is unusually sensitive to jurisdictional competition because issuance and trading are highly mobile. A project can incorporate in one country, market globally online, list on offshore exchanges, and distribute tokens to users in many jurisdictions. This mobility has two economic consequences.

First, regulation in one major jurisdiction can re-route issuance rather than eliminate it. The most regulated locations may lose the most open issuance formats, while more permissive jurisdictions attract incorporation, exchange listing, or foundation structures.

Second, regulatory fragmentation raises compliance costs and may privilege larger or better-capitalized issuers able to navigate multiple regimes. In this sense, strict regulation can both reduce outright fraud and increase barriers to entry.

The European Union’s Markets in Crypto-Assets Regulation (MiCA), by creating a more explicit framework for issuers and service providers, may reduce some forms of legal ambiguity even as it raises compliance obligations. The United States, by contrast, has often relied more on enforcement and case-by-case interpretation. These differing approaches influence not only legal outcomes but the geography of issuance.

### D. Exchange Intermediation as Regulatory Adaptation

The rise of exchange launchpads can also be seen as a regulatory adaptation. Centralized exchanges possess KYC systems, marketing channels, listing standards, and cross-border user networks. When direct public offerings become legally riskier, exchange-mediated offerings can partially absorb that role. Economically, exchanges then become hybrid underwriters, certifiers, and market makers.

This is important because it concentrates power. A small number of large exchanges can shape which projects get distribution, which tokenomics become standard, and which users receive early access. The evolution from “permissionless” public sales toward exchange-mediated issuance thus creates a new political economy of access and rent extraction.

### E. Regulation of Stablecoin Issuance

Stablecoins have pushed regulators toward a different policy frame. Here the central concerns are reserve quality, redemption rights, governance, anti-money-laundering compliance, and systemic importance. FSB and BIS reports increasingly emphasize a “same activity, same risk, same regulation” principle for crypto-asset activities, while stablecoin regulation in many jurisdictions is moving closer to payments and prudential oversight than to capital-markets disclosure alone (FSB 2023; BIS 2023).

This distinction reflects the economics. Stablecoins are not merely risky investments sold to willing speculators. They are potentially money-like liabilities that can circulate widely and create run externalities. The regulatory benchmark therefore shifts from investor protection to systemic resilience.

### F. The Welfare Ambiguity of Regulation

Regulation produces both gains and losses. Stronger disclosure, reserve rules, and enforcement can reduce fraud, improve confidence, and discipline low-quality issuers. At the same time, heavy compliance burdens can entrench incumbents, push activity offshore, or favor large intermediaries over smaller open-source teams.

This welfare ambiguity suggests that the right regulatory question is not whether to regulate crypto issuance, but how to do so without destroying the specific social gains token issuance might create in platform bootstrapping, open-network financing, or lower-cost transferability. The answer is likely to differ across issuance forms.

## VIII. Monetary, Macro-Financial, and Industrial-Organization Implications

The literature on crypto issuance has increasingly recognized that the aggregate implications differ by issuance type. ICOs and governance tokens matter primarily for entrepreneurial finance, innovation, and market structure. Stablecoins and reserve-backed issuance matter for payments, safe-asset demand, and financial stability. Protocol-native issuance matters for digital public goods and the industrial organization of verification.

### A. Crypto Issuance as a New Capital-Market Layer

Token issuance creates a new capital-market layer with unusually low barriers to global distribution. This can expand access to financing for risky or nontraditional ventures. From a welfare perspective, that is potentially valuable. Many digital public-goods projects or open protocols do not fit neatly into the corporate forms favored by venture capital and public equity markets.

But the same low barriers can lower average project quality and intensify speculative waves. Crypto issuance can therefore generate an extensive-margin increase in financing along with a deterioration in average screening. Economically, this resembles an expansion of entrepreneurial finance under extreme disintermediation: some genuinely novel ventures get funded, but so do many low-quality imitators.

An open research question is whether the social value of this financing margin is positive on net. The answer depends on the extent to which token markets fund innovation that would otherwise be starved of capital versus simply reallocating speculative capital to low-quality projects.

### B. Stablecoin Issuance and Safe-Asset Demand

Large reserve-backed stablecoins create significant demand for short-duration safe assets, particularly U.S. Treasury bills and repo-like instruments. This links crypto issuance directly to traditional monetary plumbing. If stablecoin demand rises, issuers accumulate reserves; if redemptions surge, they liquidate reserves. At scale, this can affect funding markets and Treasury demand composition.

The broader implication is that stablecoin issuance should be analyzed partly as a new form of safe-asset transformation. Even when fully backed, it intermediates between users who want tokenized dollar liquidity and the reserve assets that generate return for issuers. This resembles narrow banking more than entrepreneurial token finance.

### C. Dollarization and International Use

Stablecoin issuance can also amplify digital dollarization. In countries with weak local currencies, capital controls, or underdeveloped banking systems, dollar-linked stablecoins provide a quasi-dollar asset that is easier to access than traditional U.S. banking products. This increases the international reach of dollar-denominated private liabilities.

Economically, this has ambiguous effects. It can improve access to stable value and lower transaction frictions. It can also weaken local monetary sovereignty and increase reliance on external private issuers. The international political economy of stablecoin issuance is therefore not simply a crypto-market matter. It belongs to the broader literature on currency substitution and financial globalization.

### D. Competition Between Banks, Exchanges, and Protocols

Crypto issuance also redistributes rents across intermediaries. In payments, stablecoin issuers compete with banks for money-like liabilities and with card or payment networks for settlement activity. In entrepreneurial finance, token sales and exchange launchpads compete with venture capital and sometimes with crowdfunding. In market infrastructure, decentralized issuance and liquidity pools compete with centralized exchanges while often remaining dependent on them for access and credibility.

The result is not disintermediation in a simple sense. It is reintermediation. New intermediaries emerge: exchanges, custodians, staking providers, oracle operators, stablecoin issuers, launchpad platforms, and governance delegates. Understanding crypto issuance therefore requires industrial-organization analysis of platform power, vertical integration, and network effects.

### E. Protocol Issuance and the Financing of Digital Public Goods

Protocol-native issuance finances something close to a digital public good: shared ledger security, open infrastructure, or network maintenance. Traditional public-goods problems arise because no single firm can easily appropriate the benefits of decentralized infrastructure. Token issuance partially solves this by internalizing the upside into a tradable asset.

In effect, a protocol says: buy or earn the token today, and you receive upside if the public good becomes widely used tomorrow. This is a novel financing mechanism for open infrastructure. But it also creates a persistent tension between public-good provision and speculative extraction. Security, governance, and infrastructure are funded by dilution and token appreciation, which can favor large holders or early insiders.

### F. Reflexivity and Boom-Bust Dynamics

A recurring feature of crypto issuance is reflexivity. Token prices influence perceptions of project quality; those perceptions influence adoption, validator incentives, developer attention, and the value of retained treasuries; these in turn influence prices. This feedback loop makes issuance unusually boom-bust prone.

In entrepreneurial token markets, rising prices make treasury reserves more valuable, improve exchange access, and attract users. In stablecoins, confidence supports the peg, and the peg supports confidence. In proof-of-stake systems, token prices affect the real value of security and the attractiveness of staking. Reflexivity is therefore not peripheral. It is built into the economics of token issuance.

## IX. Open Questions and Research Agenda

Despite rapid growth in the literature, the economics of crypto-asset issuance remains incomplete. Several questions are especially important.

### A. Comparative Contracting

Why is token issuance superior to equity, debt, venture finance, or platform subsidies in some settings and inferior in others? Existing theory provides partial answers, especially around network bootstrapping and commitment, but comparative empirical evidence remains limited. Future work should compare matched ventures that use different financing forms and study their development, governance, and user-adoption outcomes.

### B. Welfare and Screening

Did crypto issuance expand socially valuable innovation finance, or mainly dilute screening and increase fraud? This is a central welfare question. The answer likely varies across waves and mechanisms. ICOs, exchange launchpads, stablecoins, and airdrops should not be evaluated as if they were one market.

### C. Issuance Design and Long-Run Governance

Tokenomics is still understudied in a rigorous economic sense. Supply schedules, vesting, treasury governance, validator rewards, burns, and delegated voting all shape long-run outcomes. More theory and evidence are needed on how issuance design affects concentration, protocol adaptation, rent extraction, and user trust.

### D. Airdrops, Fair Launches, and Distributional Legitimacy

Airdrops and “fair launch” narratives raise basic political-economy questions. When do retroactive distributions create genuine legitimacy and broad participation, and when do they simply reward sophisticated sybil farmers, insiders, or capital-rich actors? The economics of distributional legitimacy in decentralized networks is a wide-open research area.

### E. Stablecoins, Banking, and Public Money

Stablecoin issuance now sits close to the frontier between private and public money. Important questions include whether stablecoins complement or substitute for bank deposits, how reserve rules affect competition and run risk, whether central bank digital currency would crowd them out, and how international use shapes capital-flow dynamics.

### F. Jurisdictional Competition and Regulatory Incidence

We know that regulation changes issuance form, but we know much less about incidence. Who ultimately bears the cost of stricter issuance regimes: issuers, exchanges, users, or downstream innovators? Does regulatory clarity encourage higher-quality issuance and lower financing costs, or mainly increase concentration among compliant intermediaries?

### G. Tokenized Claims and Mainstream Finance

Finally, the literature on tokenized securities and tokenized fund claims remains thin relative to the scale of institutional interest. If tokenization becomes a serious infrastructure layer for conventional finance, the economics of issuance may shift away from speculative bootstrapping and toward settlement efficiency, collateral mobility, and programmable compliance.

## X. Conclusion

Crypto-asset issuance should not be viewed as a single market event or legal classification problem. It is an economic technology for distributing claims, incentives, governance rights, and money-like liabilities under digital market conditions. Its appeal lies in the way it combines functions that traditional finance usually separates: raising capital, building a user base, creating secondary-market liquidity, financing protocol security, and, in some cases, issuing private digital money.

This multifunctionality explains both the power and the fragility of crypto issuance. It can finance ventures too early, too intangible, or too network-dependent for conventional channels. It can align users with platform growth, compensate complements in upside rather than cash, and precommit supply rules more transparently than many traditional structures. But it also magnifies adverse selection, moral hazard, manipulation, and regulatory arbitrage. The early arrival of liquidity encourages speculation and weakens long-horizon screening. The weak separation between financing and governance can entrench insiders or distort political legitimacy. Stablecoin issuance can create large quasi-banking structures subject to runs and macro-financial spillovers.

The literature now makes clear that token issuance is not a degenerate corner of securities law. It is a distinct economic phenomenon whose interpretation changes across settings. ICOs are best understood through entrepreneurial finance and platform theory. Exchange launchpads through delegated certification. Protocol-native issuance through public-goods finance and industrial organization of verification. Airdrops through user acquisition and political distribution. Stablecoins through monetary economics and shadow banking. Tokenized securities through settlement and market-structure economics.

A top-journal research agenda should therefore move beyond the question of whether crypto assets are “real” or “mere speculation.” The relevant questions are comparative and institutional: when token issuance outperforms conventional contracting, how issuance design shapes incentives and governance, how regulation changes equilibrium form, and how private digital issuance interacts with public monetary systems. Those questions are not just about crypto. They are about the future boundaries of finance, money, and platform organization in a digitally mediated economy.




## XI. A Comparative-Contracting Framework

A useful way to synthesize the literature is to ask when token issuance should dominate four alternative instruments: equity, debt, platform subsidy, and bank-like redeemable liabilities. The answer depends on which friction is most severe.

### A. Token Issuance Versus Equity

Equity is attractive when investors can evaluate residual cash-flow rights, governance is enforceable, and user adoption can be stimulated through ordinary product-market strategy. Token issuance becomes relatively attractive when project value depends heavily on network growth that is hard to contract over in equity form, when early liquidity is valuable, and when users themselves are part of the production function. In those settings, equity underprices the option value of network bootstrapping because it separates financing from participation.

But equity remains superior when disclosure quality matters more than user alignment, when governance must be legally robust, or when managerial accountability is central. This suggests a simple prediction: token issuance should be relatively more prevalent in projects with stronger network effects, weaker tangible assets, and higher complementor dependence.

### B. Token Issuance Versus Debt

Debt is poorly suited to many crypto-native projects because there is often little pledgeable collateral, cash flow is distant or uncertain, and project success depends on ecosystem adoption rather than stable operating income. Token issuance shifts compensation toward contingent upside rather than fixed repayment. It therefore relaxes financing pressure at the cost of dilution and market volatility.

This implies that token issuance should outperform debt where uncertainty is extremely high and upside is diffuse across future network participants. By contrast, once cash flows stabilize and assets become verifiable, debt or hybrid financing should become relatively more attractive. This transition is visible in the maturation of some crypto firms, which increasingly use conventional debt, venture capital, or equity once their business models become more legible.

### C. Token Issuance Versus Platform Subsidies

Traditional platforms often subsidize one side of the market using venture funding or retained earnings. Token issuance can replicate this subsidy while preserving cash. Instead of paying users, developers, or liquidity providers in dollars, the platform pays them in claims on future ecosystem value. This is efficient when the platform is cash constrained and when recipients are willing to bear project risk.

However, token subsidies also create distortions. Recipients may farm rewards rather than provide durable participation. Speculative demand may overwhelm genuine usage. This yields another prediction: token-based subsidy is most effective when platform value rises strongly with early participation and when participation is hard to buy with standard contracts, but it is least effective when actors can cheaply fake or transiently provide the targeted behavior.

### D. Stablecoin Issuance Versus Bank Liabilities

Stablecoins are best compared not with venture finance but with narrow bank liabilities or money-market fund shares. Their comparative advantage lies in digital transferability, programmability, and integration with crypto-native settlement infrastructure. Their weakness lies in governance, redemption design, and the lack of public safety nets.

Stablecoin issuance should therefore be most competitive where users value digital transferability and global accessibility more than deposit insurance, and where issuers can credibly maintain backing. It should be least stable where reserves are opaque, redemption is uncertain, or confidence can run faster than reserves can be liquidated.

### E. A Simple Set of Comparative Predictions

The comparative-contracting perspective yields a compact set of predictions for future research.

First, token issuance should be more common when project success depends on early network adoption and complementor coordination.

Second, exchange or venture intermediation should become more important when the cost of adverse selection rises.

Third, airdrops and retroactive issuance should substitute for public token sales when regulation increases the cost of overt fundraising but not the value of broad token distribution.

Fourth, reserve-backed issuance should concentrate because confidence and liquidity are scale-sensitive.

Fifth, proof-of-stake issuance should create stronger wealth-concentration concerns than proof-of-work issuance because security rents accrue directly to large token holders.

These predictions illustrate why the economics of crypto issuance is ultimately comparative. The key question is not whether tokens are novel in a technological sense, but when they are a better contracting technology than the instruments they compete with.

## XII. Theoretical Strands in the Economics of Cryptocurrency Issuance

The literature on cryptocurrency issuance is now broad enough that a useful review must separate several theoretical strands. Although these strands overlap in practice, they begin from different frictions, use different benchmarks, and produce different welfare criteria. Bringing them together is important because much of the disagreement in the public debate reflects movement across models without explicit acknowledgment. A paper written from the viewpoint of entrepreneurial finance asks whether token sales can fund high-risk projects more efficiently than venture capital. A paper written from platform economics asks whether token issuance is a superior subsidy and coordination device for bootstrapping network effects. A paper written from monetary economics asks whether some issuers create unstable private money. A paper written from mechanism design asks how issuance rules alter strategic incentives over time. These are not the same question.

### A. Entrepreneurial Finance, Venture Capital, and Crowdfunding

One strand of the literature treats token issuance as a new form of entrepreneurial finance. The central comparison is with venture capital, angel finance, crowdfunding, and eventually public equity. In this strand, the starting point is that many crypto ventures are highly intangible, technologically uncertain, and hard to evaluate using ordinary accounting or collateral criteria. This makes financing difficult under standard models of asymmetric information and moral hazard (Akerlof 1970; Myers and Majluf 1984; Holmstrom and Tirole 1997). Token issuance appears attractive because it creates a tradeable claim on project upside without requiring mature cash flows, audited statements, or enforceable corporate-control rights.

Howell, Niessner, and Yermack (2020) provide the most influential empirical contribution in this literature. They show that ICO-financed ventures were extremely early stage, often more speculative and less institutionally developed than firms financed through standard venture channels. The result can be interpreted in two ways. One is optimistic: token issuance expands the financing frontier for high-risk innovation. The other is pessimistic: token issuance relaxes screening too much and therefore funds excessive low-quality entry. Both interpretations appear in subsequent work.

Several papers sharpen the entrepreneurial-finance mechanism. Adhami, Giudici, and Martinazzi (2018) argue that ventures are more likely to use ICOs when their business models involve high token velocity, strong community orientation, and limited access to conventional finance. Fisch (2019) emphasizes the complementarity between token design and entrepreneurial characteristics, especially in platform contexts. Amsden and Schweizer (2018) analyze determinants of ICO success and show that disclosure, technological ambition, and token design influence fundraising outcomes. In a closely related spirit, Momtaz (2020a, 2020b) argues that the structure of token offerings can be understood through standard entrepreneurial-finance frictions, but with far weaker investor protection and faster marketability.

This literature also reveals an unresolved tension. Venture capital performs intensive screening, staged financing, and governance. Token issuance dramatically weakens those functions, especially in open ICOs. The question is therefore whether the benefits of scale, global access, and user alignment outweigh the loss of screening. Put differently, token issuance resembles a move from relationship-based finance toward market-based finance at an unusually early venture stage. That is precisely why it feels innovative and dangerous at the same time.

Crowdfunding provides another benchmark. ICOs share important features with reward-based and equity crowdfunding: dispersed investors, project narratives, online communities, and reliance on soft information. But tokens differ in a crucial respect. They generally create immediate or expected secondary-market liquidity. That greatly increases speculative demand and shortens investor horizons. In crowdfunding, backers often receive a product, symbolic participation, or illiquid securities. In token issuance, backers often receive an instrument whose aftermarket may matter as much as the underlying venture. This difference pushes crypto issuance toward a hybrid of crowdfunding and public-market speculation.

### B. Platform Economics and Two-Sided Market Design

A second strand of the literature treats cryptocurrency issuance through the lens of platform economics. The central problem here is not merely capital raising. It is how to bootstrap network effects when users, developers, validators, and complementary service providers will participate only if they expect others to join. The relevant benchmark is the two-sided or multi-sided platform literature (Rochet and Tirole 2003; Parker and Van Alstyne 2005; Evans and Schmalensee 2016).

Catalini and Gans (2016, 2018) are foundational in this tradition. Their argument is that blockchain tokens can help solve the adoption problem in distributed networks by reducing verification costs and by creating a market-based asset whose value depends on future platform use. A token sale can therefore do three things at once: raise money, coordinate expectations, and subsidize early adoption. The token becomes a financing instrument for the entrepreneur and a speculative-cum-usage claim for early users.

Cong and He (2019) and Cong, Li, and Wang (2021) deepen this logic by showing how tokens can facilitate decentralized coordination and smart-contract execution in environments where on-chain activity creates verifiable state transitions. In these models, issuance is not merely a balance-sheet event. It is part of the platform’s mechanism design. Distribution rules influence not only who captures value but who has incentives to build complementary applications, provide liquidity, or participate in governance.

The platform perspective is especially useful for understanding why many tokens were economically meaningful even when they looked legally thin. A token might not convey traditional residual cash-flow rights, but it could still affect platform launch because it gave early participants upside exposure to the network’s growth. That can be more valuable than formal equity if the main margin is user coordination rather than corporate profit distribution. The same perspective also explains why token issuance and exchange listing are so tightly connected. In platform settings, liquid prices are themselves part of the coordination process. A rising token price can attract developers, media attention, and liquidity providers, reinforcing the network effect.

Yet the platform literature also identifies a pathology. When speculative demand becomes too dominant, token prices may reflect narratives disconnected from actual usage. In that case the token ceases to be an efficient coordination device and becomes a volatility amplifier. One can interpret parts of the ICO era, and many later DeFi governance-token waves, through this lens.

### C. Mechanism Design, Commitment, and Dynamic Tokenomics

A third strand of the literature focuses on mechanism design. Here the key question is how the initial and ongoing supply of tokens should be structured to solve dynamic incentive problems. Tokenomics, in this perspective, is not marketing. It is the contract.

Yermack (2017) and Biais et al. (2019) provide an early bridge between blockchains and governance economics. They emphasize that governance and distribution are inseparable in token systems. Treasury allocations, vesting schedules, validator rewards, delegation rules, and burn mechanisms all influence future bargaining power and rent extraction. Unlike standard corporate securities, where governance and financing are partly separated across share classes, boards, and law, token systems often encode them in one evolving mechanism.

Proof-of-work and proof-of-stake issuance models fit naturally here. In Budish (2018), token issuance is a way to buy security, but the security expenditure must be large enough to deter attack. In Saleh (2021), proof of stake changes the mechanism by making security depend on stake ownership and slashing. In both cases, the issuance rule affects who has incentive to secure the system and how expensive that security is. Thus, protocol-native issuance is a classic incentive-design problem, not simply a monetary schedule.

The same logic extends to liquidity mining and airdrops. When a DeFi protocol issues governance tokens to liquidity providers, it is attempting to buy a state variable: depth, activity, and user commitment. But because liquidity providers can be mobile and mercenary, the incentive problem is dynamic. Rewarding usage today may not create durable participation tomorrow. This has led to a growing literature that implicitly combines contest theory, subsidy design, and repeated-game reasoning, even when the formal models are still thin.

### D. Monetary Economics and Private Money

A fourth strand analyzes issuance as private money creation. This is most obvious in stablecoins but also relevant to highly liquid exchange or settlement tokens. The benchmark here is not venture finance or platform subsidies. It is the theory of money-like liabilities, safe assets, shadow banking, and runs.

Gorton and Zhang (2021) place stablecoin issuance squarely in the historical tradition of private money. Their core insight is that a redeemable digital claim backed by reserves resembles earlier forms of privately issued money and inherits their fragilities unless backing, redemption, and regulation are robust. This moves the literature away from simplistic claims that stablecoins are just another crypto token. Lyons and Viswanath-Natraj (2023) similarly analyze what keeps stablecoins stable and find that reserve credibility and arbitrage conditions are central.

From a monetary perspective, issuance design determines the nature of the liability. A fully reserved fiat-backed stablecoin with transparent backing resembles a narrow claim on safe assets. An algorithmic stablecoin resembles a reflexive promise whose value depends on confidence and arbitrage capacity. An overcollateralized crypto-backed stablecoin resembles a leveraged claim with margin-call dynamics. These are different economic objects even if they all trade under the name “stablecoin.”

This literature also connects issuance to safe-asset demand, international dollarization, and payments competition. Once a stablecoin issuer accumulates large reserves in Treasury bills or repo-like assets, issuance affects the composition of money demand and short-term funding markets. The economics of issuance therefore scales from micro design to macro-financial relevance.

### E. Law-and-Economics and Regulatory Substitution

A fifth strand, increasingly important, studies how regulation changes issuance form. This is not merely a legal literature. It is fundamentally about comparative institutional choice. Once token sales become costly or risky under one regime, issuers migrate toward offshore sales, private placements, exchange launchpads, airdrops, or delayed governance distributions. Regulation therefore changes the incidence and architecture of issuance rather than simply suppressing it.

This dynamic is especially visible after the SEC’s DAO Report and subsequent U.S. enforcement trajectory. Open ICOs declined, but issuance did not disappear. It reorganized around venture-backed launches, non-U.S. entities, exchange-led distributions, and airdrops. From an economics standpoint, this is a textbook example of regulatory substitution. The literature has not fully quantified the welfare effects of this shift, but the directional pattern is clear: stricter securities-style enforcement reduced one issuance margin while increasing the relative value of alternative forms.

### F. Industrial Organization of Exchanges, Wallets, and Intermediaries

A final theoretical strand treats issuance as embedded in market structure. Tokens are rarely distributed into a frictionless world. Centralized exchanges, wallet providers, market makers, custodians, launchpads, oracles, and analytics platforms all affect whether issuance succeeds. This means that token issuance can reinforce the power of intermediaries even in an ecosystem rhetorically committed to decentralization.

The most obvious example is the evolution from ICOs to IEOs and launchpads. Exchanges became gatekeepers, replacing some of the pure disintermediation of early token sales with a new layer of certification and rent extraction. Stablecoin issuers similarly depend on exchange distribution, custody relationships, and jurisdictional reach. Airdrops often target wallets or on-chain users, but the eventual liquidity and adoption still depend on venues and interfaces. In this sense, the economics of issuance is inseparable from the industrial organization of crypto market infrastructure.

## XIII. Empirical Evidence on Token Sales, Exchange Launches, and Post-Issuance Outcomes

Compared with the theoretical literature, the empirical literature began with a narrower focus on ICOs. Over time it widened to cover aftermarket performance, exchange intermediation, governance-token distributions, and stablecoins. Three broad empirical questions dominate: who issues, who buys, and what happens after issuance?

### A. Who Issues?

Early empirical work studied the determinants of ICO choice and fundraising success. Adhami, Giudici, and Martinazzi (2018) find that issuer characteristics, token utility, and business-model features help explain which ventures pursue ICOs. Amsden and Schweizer (2018) report that white-paper quality, technical transparency, and community building correlate with fundraising success. Fisch (2019) shows that project characteristics, token rights, and distribution features shape outcomes. Momtaz (2020a, 2020b) places these patterns within a broader entrepreneurial-finance perspective, emphasizing that ICO issuers were unusually early, intangible, and risky.

Several studies also highlight geography and institutional arbitrage. ICO issuers often clustered in jurisdictions with permissive token regulation, strong legal flexibility, or active crypto communities. This pattern is consistent with the regulatory-substitution view. Ventures did not choose token issuance in an institutional vacuum. They chose it where it was operationally and legally feasible.

A separate empirical question concerns sector. Many token issuers were not generic start-ups but platforms, exchanges, infrastructure protocols, gaming projects, and financial applications where adoption externalities were central. This supports the argument that token issuance is especially attractive when users, developers, or validators are essential complements rather than passive customers.

### B. Who Buys?

The buyer side of token issuance is harder to observe directly, but the literature points to a mixed investor base. Early markets were dominated by crypto-native retail investors, high-net-worth participants, and specialized funds. Over time, venture capital and institutional crypto funds became more important, especially in private-placement and post-ICO settings.

This matters because buyer composition changes the function of issuance. A sale to dispersed retail participants resembles speculative crowdfunding with thin screening. A sale to venture funds via SAFT or private allocation resembles staged private finance plus delayed token distribution. A governance-token airdrop to active users resembles a political and incentive distribution more than a capital raise. Much of the empirical literature initially treated these as one market, which blurred important distinctions.

The role of retail investors is particularly significant for underpricing, hype, and manipulation. When tokens are sold or expected to list into retail-heavy markets, marketing narratives, social-media activity, and exchange-access expectations can have unusually strong effects on valuation. This contributes to the literature on crypto sentiment and issuance waves.

### C. How Much Do Issuers Raise?

Token issuance displayed a strikingly fat-tailed fundraising distribution. A small number of large projects raised extraordinary sums, while many others raised little or failed. Howell, Niessner, and Yermack (2020) document large average raises relative to issuer maturity. This was part of what made the ICO boom so economically important. Token markets allowed very early-stage ventures to raise amounts that, in traditional settings, would typically require venture syndication or repeated rounds.

This pattern can be interpreted as evidence of efficiency or exuberance. On the one hand, projects with strong network narratives could overcome capital constraints. On the other hand, large raises weakened discipline by front-loading financing before product-market fit or enforceable milestones existed. The literature increasingly favors a mixed interpretation: token issuance relaxed financing constraints but often overdid so.

### D. What Predicts Issuance Success?

Empirical studies identify several recurring predictors of issuance success.

1. **Disclosure and documentation quality.** Better white papers, more detailed roadmaps, and clearer token-allocation descriptions are associated with stronger outcomes.
2. **Technical credibility.** Open-source code, identifiable teams, and visible developer activity generally help.
3. **Intermediation and certification.** Venture backing, exchange support, prominent advisors, or credible auditors increase fundraising success.
4. **Community and social attention.** Social-media following and online engagement matter, though this can reflect both genuine network-building and hype.
5. **Token design.** Vesting, supply caps, use-case clarity, and governance rights influence valuation.
6. **Jurisdiction.** Legal environment and geofencing affect access to investors and post-sale operations.

The deeper point is that success in token issuance depends on a blend of project fundamentals and market-design variables. This differs from standard equity issuance, where the security itself is usually separable from user-adoption strategy. In token markets, the contract and the go-to-market strategy are intertwined.

### E. Aftermarket Performance and Underpricing

One of the most robust empirical findings is that many token offerings displayed significant initial returns or underpricing once listed. Benedetti and Kostovetsky (2021), among others, emphasize that ICO investors often earned large early gains on paper, though long-run performance was much weaker and highly dispersed. This resembles IPO underpricing superficially, but the mechanisms differ.

IPO underpricing is often explained by bookbuilding, information production, and issuer-investor bargaining. ICO underpricing is more closely linked to speculative demand, exchange-listing anticipation, limited float, social-media hype, and thin early markets. The underpricing literature therefore suggests that crypto issuance is a market-making event as much as a financing one. Projects can deliberately design scarcity, lockups, and circulating-supply constraints to shape aftermarket dynamics.

Longer-horizon evidence is less flattering. Many tokens underperformed, experienced severe drawdowns, or lost meaningful liquidity. This supports the view that initial market euphoria often exceeded fundamental delivery. It also reinforces the importance of intermediation and screening: projects that could obtain exchange support, retain active communities, or deliver usable products generally fared better than those that relied mainly on narrative momentum.

### F. Fraud, Failure, and Non-Completion

A literature on scam risk and non-completion emerged quickly because many token issuers never delivered functioning products or meaningful utility. Some were outright fraudulent; others were simply ventures that failed after raising capital. The distinction matters for welfare analysis, but both are relevant to investors and policymakers.

The empirical challenge is identifying intent. A failed venture in a high-risk innovation market is not the same as fraud. Yet the prevalence of incomplete delivery, abandoned development, or insider extraction was much higher than in conventional public securities markets. This is another reason why the economics literature increasingly views ICOs as a financing technology with unusually weak ex post discipline.

### G. Exchange Listing, Intermediation, and Certification

A major development in the empirical literature is the growing importance of exchange listing. Exchange support influences issuance success, liquidity, and perceived legitimacy. In practice, many tokens derive a large share of early value from the expectation of centralized exchange listing rather than immediate product use. This creates a triangular relationship among issuer, exchange, and investor.

Exchange launchpads partly internalize this relationship. By screening and distributing the token, the exchange reduces uncertainty for buyers and raises expected liquidity. But it also gains bargaining power. The empirical literature is still catching up to the importance of this intermediation layer, especially in the post-ICO market structure.

### H. Venture Capital and the Institutionalization of Issuance

A striking change after the ICO boom was the deeper involvement of venture capital and specialized crypto funds. Private token rounds, SAFTs, token warrants, treasury investments, and exchange-backed launches all point toward institutionalization. This has two implications.

First, issuance increasingly resembles traditional private finance followed by public token distribution. Second, the distribution of upside changes. Retail buyers may enter later, after sophisticated investors have obtained preferential allocations, vesting protections, or governance influence.

This institutionalization may improve screening but worsen equality of access. The literature has not yet fully resolved whether this trade-off is welfare improving.

### I. Airdrops, Liquidity Mining, and User Incentives

Empirical work on airdrops and liquidity mining is still developing, but several stylized facts are already visible. Token distributions can attract rapid user growth, liquidity provision, and social attention. They can also attract short-term mercenary capital, wash usage, and sybil behavior. The central empirical question is therefore persistence: do incentives create durable adoption or only temporary metric inflation?

Some DeFi episodes suggest that issuance can buy liquidity but not loyalty. When rewards end, participation collapses. Other cases suggest that well-targeted distributions can create enduring user ownership and governance legitimacy. The difference likely depends on whether token rewards complement genuine usage or merely subsidize extractable activity. This is an important frontier for future empirical work because it bears directly on whether airdrop issuance is socially productive or mostly redistributive hype.

## XIV. Governance, Tokenomics, and the Political Economy of Distribution

One of the most important advances in the literature has been to treat issuance not as a single date event, but as the beginning of a dynamic political economy. Once a token exists, questions of governance, treasury control, supply expansion, delegation, and insider influence become central. In other words, tokenomics is not just the economics of initial distribution. It is the economics of who governs the system after distribution.

### A. Initial Allocation and Long-Run Control

Traditional finance distinguishes relatively clearly between financing claims and governance arrangements. Crypto systems often do not. A project’s initial token allocation to founders, foundations, venture funds, community pools, validators, and future incentive programs shapes both wealth and voice. Because governance rights are often attached to token holdings, concentration at issuance can translate directly into political concentration later.

The literature has increasingly emphasized this problem. Yermack (2017) and Biais et al. (2019) note that blockchains do not abolish governance; they transform it. Token systems often claim to be decentralized, yet their actual voting power may be heavily concentrated among insiders, foundations, exchanges, or large funds. This means that the rhetoric of “community ownership” must be tested against actual distribution data and decision rules.

A simple but powerful point follows: issuance is constitutional. The initial token map influences future amendment power, treasury use, validator incentives, and the practical ability of outsiders to challenge insiders. In this sense, cryptocurrency issuance resembles the founding allocation of voting rights in a new polity.

### B. Vesting, Lockups, and Credible Commitment

The literature on vesting and lockups can be read as a literature on imperfect commitment. Because founders and insiders often retain large token allocations, outside buyers fear immediate dumping or opportunistic treasury use. Vesting schedules, cliffs, and lockups respond to this concern. They are analogues of lockup agreements in IPOs, but they matter even more because token markets can become liquid much earlier and because ongoing issuer obligations are weaker.

Economically, vesting solves only part of the problem. It can reduce short-term insider exit risk. But it does not eliminate manipulation incentives, governance capture, or later dilution. A project can honor vesting and still extract value through treasury management, side deals, new incentive emissions, or governance redesign. This is why serious analysis of tokenomics must go beyond vesting charts and consider the whole intertemporal policy rule of the protocol or issuing organization.

### C. Governance Tokens and Delegated Control

Governance tokens became central during the DeFi expansion. These tokens were often presented as a path toward decentralization, giving users and liquidity providers formal influence over protocol upgrades, treasury spending, fee policies, and partnerships. Yet the empirical governance literature suggests turnout is low, delegation is concentrated, and insiders or specialized delegates often dominate.

This raises a classic collective-action problem. Small token holders are rationally passive. The cost of voting and evaluating proposals often exceeds the private benefit, especially when holdings are small. Large holders, exchanges, and organized delegates therefore acquire disproportionate influence. The result is a governance structure that is formally open but practically concentrated.

The economic implications are important. First, governance-token issuance can create an illusion of decentralization that helps marketing and regulation while leaving control with insiders. Second, delegation can be efficient by concentrating expertise, but it also creates a new intermediary class. Third, low turnout can make governance vulnerable to coalition building, vote buying, or treasury capture.

A mature literature review must therefore resist a common simplification. Governance-token issuance is not automatically democratizing. It is a mechanism whose effects depend on turnout costs, delegation technology, information quality, and distribution concentration.

### D. Treasury Governance and Public-Finance Analogies

Many protocols hold large treasury allocations in native tokens, stablecoins, or other assets. These treasuries finance grants, audits, liquidity programs, market-making, insurance funds, and ecosystem development. In economic terms, this creates a proto-fiscal state. The token community must decide how to tax, spend, save, and redistribute resources.

This analogy to public finance is useful. Protocol governance faces familiar problems: concentrated interest groups, low voter participation, soft budget constraints, and principal-agent problems in delegated administration. Yet unlike states, protocols often lack coercive taxation power or well-developed administrative law. Their fiscal capacity depends on treasury token values, emissions, or fee capture. That makes treasury policy highly procyclical. In booms, treasuries look flush and protocols spend aggressively. In downturns, their budget capacity collapses.

The issuance literature has only begun to connect token treasuries to public-finance theory. But the connection is promising because it reveals how issuance creates future fiscal institutions as well as present financing.

### E. Fair Launches, Founderless Narratives, and Distributional Legitimacy

The notion of a “fair launch” occupies a special place in crypto discourse. A project claims legitimacy by minimizing insider pre-allocation, avoiding venture capture, or distributing tokens through open participation such as mining, staking, or broad airdrops. Economically, the appeal is clear. If a token system derives value from community belief and participation, then distributional legitimacy can itself be a productive asset.

But fair launch is not a simple category. Mining-based distribution may appear open but still favor those with capital or technical capacity. Airdrops may appear egalitarian but can be captured by sophisticated sybil farmers. Liquidity mining may reward capital-rich participants more than ordinary users. Thus, “fairness” is endogenous to mechanism design and market structure. The literature would benefit from more explicit welfare criteria for evaluating launch legitimacy.

### F. Token Burns, Buybacks, and Payout Analogies

Some token systems use burns, fee rebates, or buyback-like mechanisms to support value. These are often analogized to dividends or repurchases, but the comparison is imperfect. Burns can reduce supply without transferring cash directly. Fee-sharing tokens may create quasi-cash-flow rights, but the enforceability and sustainability of those rights vary. Buybacks may be discretionary or automatic, transparent or opaque.

The economic literature has not yet converged on how to classify these designs. One productive approach is to ask which problem the mechanism is solving. If burns are meant to align token value with network usage, they may be closer to commodity-scarcity mechanisms. If fee sharing creates an expectation of ongoing payout, the token begins to resemble a residual-claim instrument. These distinctions matter for both valuation and regulation.

### G. Tokenomics as Macroeconomic Policy Inside Protocols

At the protocol level, supply schedules, staking rewards, issuance cuts, and burn rates resemble macroeconomic policy. They affect inflation, saving incentives, validator returns, and treasury capacity. Governance decisions over these variables can therefore be analyzed as political business cycles inside a digital economy.

For example, high staking rewards may improve security in the short run but dilute passive holders and transfer value toward large stakers. Low issuance may support token prices but reduce incentives for participation or ecosystem growth. Treasury spending may accelerate development but concentrate patronage. The literature increasingly recognizes that tokenomics is not a one-shot design choice. It is an ongoing distributional struggle over the evolution of the protocol economy.

## XV. Stablecoin Evidence, Market Structure, and Monetary Competition

Because stablecoins have become central to crypto markets and increasingly relevant to global payments, the empirical literature on their issuance deserves treatment beyond the theoretical discussion above. The most important questions concern peg stability, reserve quality, run dynamics, market power, and international use.

### A. What Do We Know About Stability?

Lyons and Viswanath-Natraj (2023) show that stablecoin stability depends heavily on redemption credibility, arbitrage, and secondary-market liquidity. Par is not a technological property. It is an equilibrium outcome supported by confidence in backing and convertibility. This makes stablecoin issuance a credibility business.

Empirical evidence also suggests that stablecoins differ materially from one another. Fiat-backed stablecoins with widely perceived reserve quality tend to exhibit tighter pegs and deeper market use. Others show recurring deviations, especially under stress. Algorithmic or endogenous models proved much more fragile. The collapse of Terra-Luna, for example, became a focal event not only because of its scale but because it revealed how reflexive issuance structures fail under redemption pressure.

The stablecoin literature therefore reinforces a general theme of this review: surface labels conceal deep economic heterogeneity. Two instruments can both call themselves stablecoins while embodying entirely different risk structures.

### B. Reserve Transparency and Information Production

Reserve-backed stablecoins rely heavily on information production. Users and counterparties need to believe that reserves exist, are high quality, and are legally accessible for redemption. This has led to a growing empirical and policy literature on attestations, audits, reserve composition, and disclosure frequency.

From an economic perspective, the key issue is not only whether reserves exist, but what claims token holders have on them under stress. Segregation, bankruptcy remoteness, maturity profile, and redemption queues all matter. In this sense, stablecoin issuance resembles money-market fund economics after the 2008 crisis and narrow-banking debates before that. High-quality backing can reduce run risk, but only if users understand the legal and operational pathway to redemption.

This is where policy reports from the BIS, FSB, IMF, and central banks add value to the literature. They increasingly treat stablecoins not as speculative side instruments but as potentially systemic money-like liabilities. That shift in framing is itself evidence of economic maturation.

### C. Secondary-Market Use and Exchange Dependence

A striking empirical regularity is that stablecoin demand is heavily linked to exchange ecosystems. Stablecoins function as quote currencies, collateral, settlement assets, and bridge instruments across venues and blockchains. This creates a strong complementarity between stablecoin issuers and centralized exchanges.

Economically, this matters in three ways. First, scale and adoption are path dependent because integration with major exchanges sharply increases usefulness. Second, exchange stress can feed back into stablecoin demand and depegging risk. Third, large exchanges may exert bargaining power over issuers, influencing fee structures, listings, and user access.

This exchange dependence is one reason why stablecoins are both payment instruments and market-infrastructure tools. Their growth cannot be understood through payments theory alone.

### D. Stablecoins and the Dollar System

The literature increasingly notes that dollar-linked stablecoins extend the reach of the dollar into digitally native and cross-border environments. In jurisdictions with inflation, capital controls, or weak banking systems, they can function as accessible synthetic dollars. This makes stablecoin issuance part of the international monetary system.

There are at least three economic consequences. First, stablecoins may increase de facto dollarization. Second, they may alter the composition of short-term dollar liabilities held outside the banking system. Third, they may create a privately intermediated international dollar channel that sits partly outside traditional prudential architecture.

This line of research is still young, but it matters because it relocates the debate from “crypto markets” to “global money and payments.” Once stablecoin issuance is large enough, the questions become macroeconomic.

### E. Market Concentration and Winner-Take-Most Dynamics

Stablecoin markets show strong concentration. A small number of issuers dominate circulation and trading. This should not be surprising. Money-like instruments exhibit network effects: the more widely accepted the instrument, the more useful it becomes. Liquidity begets liquidity, and integrations with exchanges, wallets, and DeFi protocols reinforce incumbency.

The industrial-organization consequence is that stablecoin issuance may become winner-take-most unless regulation or interoperability changes the competitive landscape. Concentration can increase efficiency through standardization but also create systemic dependence on a small number of issuers. This is another place where the literature on payments, platforms, and banking should be integrated more explicitly.

### F. Public Alternatives and the Future of Issuance

Stablecoin research is now increasingly linked to debates over central bank digital currency and regulated tokenized deposits. If public or tightly supervised alternatives emerge, the comparative advantage of private stablecoin issuance may shrink in some domains and remain strong in others. The likely equilibrium is not pure displacement but segmentation. Private issuers may remain strong where programmability, cross-platform integration, or global reach matter most, while public options may dominate where legal certainty and safety are critical.

This suggests that the long-run economics of stablecoin issuance will depend not only on crypto-market dynamics but on the evolution of public digital money.

## XVI. Data, Measurement, and Identification Challenges in the Issuance Literature

A field can accumulate many papers without yet converging methodologically. The literature on cryptocurrency issuance remains in that stage. There is substantial descriptive and correlational work, a growing body of theory, and selected event studies, but many central questions remain hard to identify causally.

### A. Classification Problems

The first challenge is classification. Tokens differ by rights, issuance mechanism, reserve structure, exchange access, governance, and geography. Yet datasets often classify them coarsely as ICOs, utility tokens, governance tokens, or stablecoins. These labels are not neutral. They can obscure the very economic heterogeneity the literature needs to explain.

A top-journal research agenda should move toward function-based classification. At minimum, future datasets should distinguish whether the token sale raised capital, whether the token had live utility at issuance, whether governance rights existed, whether there was immediate exchange support, whether founders retained large allocations, and whether ongoing issuance rules were active.

### B. Endogeneity of Issuance Choice

The second challenge is endogeneity. Projects choose token issuance when it suits their financing constraints, user-acquisition problems, legal options, and founder incentives. Therefore, comparing token-financed ventures with venture-backed or equity-financed ventures is difficult. Differences in outcomes may reflect project selection rather than the effect of issuance itself.

This suggests several empirical strategies. One is to exploit regulatory shocks that changed the cost of public token issuance in some jurisdictions but not others. Another is to study exchange-listing or launchpad rules that affected access to certification. A third is to examine protocol-level rule changes or exogenous changes in reserve regulation for stablecoins. Each strategy is imperfect, but all are preferable to naive cross-sectional comparisons.

### C. Measuring Success

The third challenge is defining success. Token issuance can be judged by fundraising volume, aftermarket returns, developer activity, user adoption, liquidity, governance participation, or long-run product delivery. These outcomes do not always move together. A token can have spectacular short-run returns and little durable utility. Another can fund meaningful infrastructure and still underperform in speculative markets.

This multidimensionality is especially problematic when studies use near-term return performance as the main dependent variable. If token issuance is partly about network bootstrapping or reserve-backed payments, then market returns are only one outcome among several. A mature literature should therefore use broader success metrics.

### D. Off-Chain Versus On-Chain Evidence

A major advantage of the crypto domain is that some behavior is visible on-chain. Token flows, treasury balances, governance votes, and certain usage metrics can be observed more directly than in many traditional settings. But on-chain evidence is incomplete. Exchange custody, market-making agreements, reserve assets, off-chain side letters, legal claims, and identity remain partially hidden.

This creates a recurring empirical trap. Researchers may overemphasize what is measurable on-chain and underweight off-chain determinants of issuance outcomes. The best work in the field increasingly combines on-chain data with legal, organizational, and market-structure information.

### E. Welfare Measurement

Welfare analysis is particularly difficult. Did token issuance fund valuable open infrastructure or mostly transfer wealth across speculative cohorts? Did a stablecoin improve payment access or mainly create shadow-banking risk? Did an airdrop create genuine governance legitimacy or merely subsidize sophisticated claimants? Each question requires counterfactuals that are hard to observe.

This is why the comparative-contracting framework developed earlier is useful. Welfare should be assessed relative to feasible alternatives: venture finance, equity issuance, traditional subsidies, bank deposits, or payment networks. Without that benchmark, critiques and defenses of token issuance often talk past each other.

### F. A Concrete Empirical Agenda

Three empirical directions appear especially promising.

First, regulation-based designs can identify how issuance form changes when legal constraints tighten or relax. This can help separate the demand for tokenized issuance from the effects of specific legal structures.

Second, matched comparisons between token-financed and non-token-financed ventures can illuminate when tokens actually improve capital access, user growth, or long-run survival.

Third, event studies and structural analyses of stablecoin depegs, reserve disclosures, and exchange integration can identify the determinants of private-money credibility.

A fourth direction, more institutional and political-economic, would study how governance distributions translate into real control over protocol treasuries and rule changes. This would bridge issuance research with modern corporate-governance economics.

## XVII. Toward a General Economics of Cryptocurrency Issuance

The literature reviewed here suggests that cryptocurrency issuance should ultimately be treated not as a quirky niche of speculative finance but as a general problem of digital claim design under weak centralized enforcement. Once framed this way, the field opens into a broader economics.

First, cryptocurrency issuance is about **front-loaded tradability**. Claims can become liquid before projects are mature. This changes investor composition, discipline, and speculation.

Second, it is about **programmable distribution**. Supply rules, vesting, treasury allocations, and validator rewards can be specified more explicitly than in many traditional contracts.

Third, it is about **combined financing and coordination**. Tokens can raise capital while simultaneously subsidizing users, developers, validators, or complements.

Fourth, it is about **governance through distribution**. The initial allocation of claims shapes future political power in a way unusually visible to outside observers.

Fifth, in the stablecoin domain, it is about **private monetary issuance**. The same token infrastructure that finances ventures can also issue liquid claims that compete with deposits and payment instruments.

These five features make cryptocurrency issuance economically novel even when individual components resemble older forms. Crowdfunding, bank-note issuance, platform subsidies, public-goods finance, and corporate governance all have long histories. What is distinctive is their digital recombination.

That recombination also explains why the field is hard to regulate and hard to evaluate. A rule designed for capital raising may affect user coordination. A rule designed for consumer protection may alter exchange intermediation. A rule designed for payment stability may reshape global dollar access. The multifunctionality of token issuance is therefore not an incidental complication. It is the central fact of the domain.

A top economic-journal literature review should end on that note. The most productive future research will likely come from scholars willing to cross subfields: entrepreneurial finance with platform economics, monetary economics with industrial organization, governance with mechanism design, and regulation with international political economy. Cryptocurrency issuance is one of the clearest cases in modern finance where those literatures genuinely need each other.

## XVIII. Historical Analogies and Adjacent Economic Literatures

A literature review at top-journal standard should not treat cryptocurrency issuance as if it arose from nowhere. One of the most useful ways to discipline interpretation is to compare token issuance to older forms of financing, private money creation, and platform coordination. Such analogies should not be pushed too far, but they help identify what is genuinely new and what is a recombination of familiar economic mechanisms.

### A. Joint-Stock Analogies and Their Limits

There is a temptation to compare token issuance with early joint-stock or highly speculative public offerings. The analogy has some merit. In both cases, investors funded uncertain ventures with limited verifiable information, secondary markets mattered for investor participation, and legal institutions were still adapting. The analogy captures the speculative openness of ICO-era issuance and the way broad public participation arrived before mature disclosure norms.

But the analogy breaks down in an important respect. A token is often not a pure residual claim on a business enterprise. It may embed usage rights, governance rights, or settlement functionality that have no close analogue in ordinary shares. This means that token buyers are not simply buying early-stage equity under legal ambiguity. They are buying a composite instrument whose value may depend on platform adoption, exchange support, and future mechanism design.

The right lesson from joint-stock history is therefore institutional, not literal. New tradable claims often emerge before governance and disclosure regimes are fully settled. The early phase can be both innovative and disorderly. That pattern fits crypto issuance well.

### B. Free Banking, Private Money, and Shadow Banking

The analogy to private money is much stronger in the stablecoin domain. Historical episodes of private note issuance, free banking, and later money-market-fund-like structures are directly relevant. Gorton and Zhang (2021) explicitly invoke the wildcat-banking tradition, but the broader connection runs through the economics of information-insensitive debt, short-term safe assets, and run-prone privately issued liabilities (Diamond and Dybvig 1983; Gorton and Pennacchi 1990; Dang, Gorton, and Holmstrom 2015; Holmstrom 2015).

Stablecoin issuance differs technologically from nineteenth-century bank notes, but the core economic question is strikingly similar: under what conditions can a privately issued, redeemable claim circulate near par and be trusted by holders? The answer depends on reserve quality, information production, convertibility, and the expected response to runs. In this sense, stablecoins belong not only to the literature on crypto but to the modern literature on shadow banking and safe-asset demand.

This analogy also clarifies why some policy responses have converged toward prudential regulation. If an issuer creates money-like liabilities at scale, the main concern is no longer simply fraud at issuance. It is systemic resilience under redemption stress.

### C. Crowdfunding, Community Finance, and Speculative Participation

Token issuance also overlaps with the economics of crowdfunding. In both settings, dispersed participants finance early-stage projects online under substantial information asymmetry. Community formation and narrative are central. However, token issuance departs from conventional crowdfunding in two critical ways.

First, liquidity and tradability arrive much earlier. This means funders are not only supporters or long-horizon investors; they are also potential short-horizon traders. Second, the financed object is often an ecosystem rather than a firm. Participants may expect value from secondary-market demand, usage growth, or future governance influence rather than simply from profits.

These differences give crypto issuance a more reflexive dynamic than standard crowdfunding. A successful token sale is itself a public signal that can stimulate further adoption, which in turn affects token value. Crowdfunding usually lacks that liquid feedback loop. Thus, the comparison is useful, but only if one treats token issuance as crowdfunding plus endogenous market creation.

### D. IPOs, Underpricing, and Market-Making

The literature on IPOs offers another instructive comparison. Like IPOs, token sales often exhibit underpricing, staged investor access, lockups, and a close relationship between issuance and the construction of an aftermarket. Yet the mechanism differs sharply. In IPOs, underpricing is generally linked to information production, bookbuilding, and the intermediation role of underwriters. In tokens, underpricing more often reflects scarcity design, speculative demand, exchange-listing expectations, and fragmented markets.

This difference matters because it changes the welfare interpretation. IPO underpricing can be part of an equilibrium that incentivizes truthful revelation or compensates investors for information production. Token underpricing often looks more like a side effect of weak float, hype, or deliberate market design to attract attention. That does not mean it is always inefficient. But it means that one should not import IPO logic mechanically into token markets.

The rise of exchange launchpads pushes the analogy closer again. Once centralized exchanges act as underwriters, marketers, and initial liquidity providers, token sales begin to resemble hybrid IPO-venture events. The literature would benefit from studying this comparison more explicitly.

### E. Platform Subsidies, Loyalty Points, and Internal Currencies

Another adjacent literature concerns platform subsidies and loyalty instruments. Airlines issue miles, gaming platforms issue in-game currencies, and digital platforms subsidize users or developers to solve chicken-and-egg problems. Token issuance resembles these practices when the token functions as a reward, discount instrument, or internal medium for transactions.

But crypto tokens differ because they are often openly tradeable and speculation is part of the design rather than an unintended side effect. A platform can use a token not only to subsidize users but also to externalize financing onto them. This makes the token stronger than a coupon and more volatile than a traditional loyalty point.

The comparison is still useful, especially for airdrops and liquidity mining. It shows that part of crypto issuance is simply the latest and most financialized version of platform subsidy design. The open question is whether tradability makes the subsidy more efficient by revealing value or less efficient by attracting rent-seeking rather than real adoption.

### F. Public Goods and Collective Financing

Many crypto projects claim to finance open infrastructure that would otherwise be underprovided. This places token issuance adjacent to the literature on public goods and collective financing. Protocol-native issuance can be read as a way of monetizing future network value to fund present infrastructure. Instead of relying on taxation, philanthropy, or centralized venture capture, a protocol issues tokens and lets the market capitalize expected future usage.

This is a genuine innovation if it works. It would represent a new way to finance open digital commons. But the comparison also reveals the difficulty. Public-goods finance is always vulnerable to capture, free riding, and overstatement of social value. Token markets can add speculative amplification and governance concentration to these familiar problems.

From this perspective, the central empirical question is whether token issuance funds socially valuable infrastructure that would otherwise be undersupplied, or whether it mainly privatizes speculative gains around nominally open systems. The answer is unlikely to be uniform across cases.

### G. Club Goods, Excludability, and Token Value

A useful microeconomic way to interpret some crypto issuance is through club goods. Many networks are not pure public goods. They provide services to participating users, and access can be priced or gated through token ownership, fees, or staking. In such cases, issuance creates not only a financing instrument but an excludability mechanism.

This helps explain why tokens can have value even without formal cash-flow rights. If token ownership grants access to block space, governance rights, discounted services, or staking returns, then it creates a club-like position in the network. The economics of such clubs is quite different from the economics of corporate equity. It depends on congestion, access rules, and the value of participation.

This line of reasoning is still underdeveloped in the literature, but it offers a promising bridge between token economics and broader microeconomic theory.

### H. Political Economy and Constitutional Design

A final analogy is to constitutional political economy. Initial issuance allocates not just wealth but future amendment power. A protocol’s genesis distribution, treasury structure, and governance thresholds are akin to a constitutional settlement. Later disputes over emissions, forks, validator requirements, or treasury spending resemble constitutional politics.

This is not just metaphor. In many networks, token holders vote on parameters that affect taxation-like fees, public spending-like grants, and constitutional-like protocol upgrades. The economic analysis of issuance should therefore ask not only whether the sale raised money efficiently, but whether the initial constitutional order is likely to produce stable and legitimate long-run governance.

If this sounds unusually broad for a finance topic, that is precisely the point. Cryptocurrency issuance is one of the few domains in modern economics where questions of finance, money, governance, and constitutional design genuinely meet in one instrument.

### I. What Is Actually New?

The analogies above show that almost every component of cryptocurrency issuance has an economic predecessor: entrepreneurial finance, crowdfunding, private money, platform subsidies, IPO underpricing, public-goods financing, or constitutional allocation. The novelty lies in the recombination.

Crypto issuance makes claims digital, globally transferable, rapidly marketable, and often programmable. It allows the same claim to participate in financing, usage, governance, and collateralization. That recombination increases flexibility but also complexity. For economists, the lesson is to avoid two errors. One is exceptionalism, which treats crypto issuance as so new that older theory is useless. The other is reductionism, which forces tokens entirely into preexisting categories and misses how the combination changes incentives.

A literature review at top-journal standard should instead use older theories as modular benchmarks. Some token designs are best understood as speculative platform finance. Others are best understood as fragile private money. Others remain little more than digitized versions of existing securities. The best research will identify which benchmark applies, when, and with what welfare consequences.

## XIX. Synthesis, Propositions, and a Forward-Looking Research Program

A review article is most useful when it does more than summarize papers. It should leave the reader with a tighter analytical map than the literature currently provides. This section therefore distills the prior discussion into a set of synthetic propositions about cryptocurrency issuance and then outlines the most promising directions for future research.

### A. Proposition 1: Cryptocurrency Issuance Is Most Valuable When Financing and Adoption Are Jointly Constrained

The first proposition is that token issuance has its strongest comparative advantage when a project faces both a financing problem and a network-coordination problem. Standard equity can raise funds, but it does little to make users, developers, validators, or liquidity providers internalize future platform growth. Traditional subsidies can attract users, but they require cash and do not create tradeable upside. Token issuance dominates when the same instrument can fund development and recruit complements.

This proposition helps explain why token issuance flourished in infrastructure protocols, exchanges, DeFi applications, and gaming or metaverse projects rather than in ordinary businesses with separable users and investors. It also yields a clear empirical prediction: token-financed projects should outperform non-token-financed peers particularly when network externalities are strong and complementor participation is essential.

### B. Proposition 2: Early Liquidity Is Both the Great Advantage and the Great Distortion of Token Issuance

The second proposition is that the most distinctive feature of token issuance is not digital settlement, but early tradability. A token can become liquid while the underlying project is still immature. This dramatically expands the investor base and increases fundraising capacity. It also shortens horizons, increases hype sensitivity, and weakens ex post discipline.

The implication is that one should analyze crypto issuance through the economics of market formation as much as through the economics of contracting. Issuance design determines not only who funds the project, but how soon a speculative public market emerges around it. Exchange access, float restrictions, vesting, and market-making are therefore not peripheral. They are part of the financing technology itself.

### C. Proposition 3: The Economic Function of the Token Matters More Than the Legal Label

A third proposition, repeatedly confirmed in the literature, is that utility-token, governance-token, or stablecoin labels do not by themselves identify economic substance. A token sold as a utility token may function as a speculative financing claim. A governance token may function as a concentrated insider-control instrument. A stablecoin may function as private money, collateral, or simply a quote asset depending on reserves and market use.

This proposition has methodological force. Researchers should classify issuance by claim structure, redemption design, governance consequences, and market role rather than by marketing label. It also has regulatory force. Functional analysis is economically superior to formal naming conventions.

### D. Proposition 4: Intermediation Reappears Wherever Information Problems Become Severe

Crypto markets began with a strong anti-intermediation ethos, yet the literature shows that intermediation reappears quickly. Exchanges, launchpads, venture funds, market makers, custodians, auditors, and analytics providers all emerged as responses to information asymmetry and liquidity needs. This suggests a general proposition: disintermediated issuance is not a stable equilibrium when adverse selection is severe and secondary-market liquidity matters.

The important follow-up question is not whether intermediation returns, but what kind of intermediation returns. Exchange launchpads solve some screening problems while creating new concentration and conflict-of-interest problems. Private rounds solve retail-protection concerns while concentrating upside. Stablecoin regulation may improve resilience while entrenching large issuers. These are empirical and political-economy questions, not just legal ones.

### E. Proposition 5: Stablecoin Issuance Is the Point Where Crypto Finance Becomes Monetary Economics

The fifth proposition is that stablecoin issuance should be analyzed primarily as private money creation. Entrepreneurial-finance analogies become secondary once an issuer is creating redeemable dollar-linked liabilities backed by reserve assets. The relevant economics is then about runs, reserve quality, payment adoption, and competition with banks and public money.

This proposition helps unify a literature that is often fragmented between “crypto finance” and “payments policy.” Stablecoins are where those domains meet. The most important research questions concern not only depegs and reserves, but also international use, safe-asset demand, integration with Treasury markets, and the evolving relationship between private issuers and public digital-money initiatives.

### F. Proposition 6: Tokenomics Is Governance by Other Means

The sixth proposition is that tokenomics should be analyzed as governance design. Supply schedules, vesting, staking rewards, treasury allocations, and burn policies all affect the balance of power inside the protocol or ecosystem. They determine who captures future rents and who has the ability to rewrite rules. This means that issuance is not completed when the tokens are sold or distributed. It continues through every subsequent treasury or emission decision.

This proposition creates a bridge between the issuance literature and broader work in political economy, public finance, and corporate governance. A protocol treasury can be studied like a fiscal institution. Voting turnout can be studied like shareholder or political participation. Delegates can be studied like intermediated governance agents. There is enormous scope for work at those intersections.

### G. A Structured Empirical Agenda

The literature is now broad enough that future work should move from descriptive accumulation toward structured causal programs. Four empirical programs look especially promising.

First, **comparative financing studies** should test when token issuance genuinely expands access to capital relative to venture or equity finance, and whether projects funded this way are more innovative, more fragile, or simply more speculative.

Second, **regulation-shock designs** should identify how issuance form changes when legal treatment changes. This could illuminate not only compliance behavior but the true elasticity of demand for tokenized issuance.

Third, **governance-distribution studies** should analyze whether broad token distributions actually produce broad control. This requires linking on-chain voting, delegation, treasury decisions, and real protocol outcomes.

Fourth, **stablecoin macro studies** should connect issuance, reserve composition, peg dynamics, and cross-border use to wider financial conditions. The key challenge will be to integrate crypto-native data with money-market and international-finance data.

A fifth program, cutting across the others, would focus on **launch design and market quality**. How do different mechanisms—ICOs, IEOs, IDOs, bonding curves, airdrops, private rounds—affect price discovery, concentration, manipulation risk, and long-run utility? This question is central because design heterogeneity is one of the field’s defining features.

### H. Normative Questions the Literature Has Not Yet Settled

Despite rapid progress, several normative questions remain unsettled.

One is whether token issuance is socially efficient primarily because it funds otherwise underfinanced innovation, or privately lucrative primarily because it enables speculative capitalization of uncertain future network narratives. Another is whether broad token distribution creates meaningful decentralization or mainly a veneer of legitimacy over concentrated control. A third is whether private stablecoin issuance increases payment competition and financial inclusion or mostly creates a new layer of shadow banking around the dollar system.

These questions cannot be answered by technology alone. They are institutional and comparative. The right counterfactual matters. A crypto critic comparing tokens to an idealized securities market may conclude they are deeply deficient. A crypto defender comparing them to no financing, weak banking access, or absent open-infrastructure funding may conclude they are valuable. Both may be right in their own benchmark. The literature needs more explicit benchmark discipline.

### I. Why the Topic Belongs in Economics Rather Than Only in Finance or Law

A final synthesis point is that cryptocurrency issuance belongs centrally in economics because it forces the integration of subfields that are often too separated. Finance alone cannot explain adoption subsidies or private-money effects. Monetary economics alone cannot explain governance-token distributions. Platform economics alone cannot explain reserve-backed runs. Legal analysis alone cannot explain why issuers keep inventing substitutes around constraints.

This is why the topic is analytically rich. It is one of the rare domains in which financing, market design, money, governance, and regulation are all visibly co-determined by one issuance instrument. For economics, that makes cryptocurrency issuance not a side show, but a valuable natural laboratory for understanding how digital technologies reshape claim design.

### J. Closing Synthesis

The literature has already moved far beyond the early question of whether tokens are “just scams” or “the future of finance.” A better question is this: under what conditions does digitally native issuance outperform the contracts and institutions it seeks to replace? The review suggests a disciplined answer.

Cryptocurrency issuance is strongest when it internalizes network externalities, rewards complements, mobilizes dispersed demand, and funds open infrastructure that ordinary capital markets struggle to price. It is weakest when legal rights are opaque, governance is concentrated, reserve design is fragile, and speculative liquidity overwhelms real use. The policy and research task is therefore not to treat all issuance alike, but to separate the designs that create durable economic value from those that merely redistribute attention and risk.

That separation will define the next phase of the literature. It is also likely to define the next phase of the market itself.
## References

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

Dang, Tri Vi, Gary Gorton, Bengt Holmström, and Guillermo Ordoñez. 2015. “Ignorance, Debt, and Financial Crises.” Yale University mimeo.

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

Foley, Sean, Jonathan R. Karlsen, and Tālis J. Putniņš. 2019. “Sex, Drugs, and Bitcoin: How Much Illegal Activity Is Financed through Cryptocurrencies?” *Review of Financial Studies* 32 (5): 1798-1853.

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

Holmström, Bengt. 1979. “Moral Hazard and Observability.” *Bell Journal of Economics* 10 (1): 74-91.

Holmström, Bengt. 2015. “Understanding the Role of Debt in the Financial System.” *BIS Working Papers* No. 479.

Holmström, Bengt, and Jean Tirole. 1997. “Financial Intermediation, Loanable Funds, and the Real Sector.” *Quarterly Journal of Economics* 112 (3): 663-691.

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

Kaplan, Steven N., and Per Strömberg. 2003. “Financial Contracting Theory Meets the Real World: An Empirical Analysis of Venture Capital Contracts.” *Review of Economic Studies* 70 (2): 281-315.

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

Schär, Fabian. 2021. “Decentralized Finance: On Blockchain- and Smart Contract-Based Financial Markets.” *Federal Reserve Bank of St. Louis Review* 103 (2): 153-174.

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


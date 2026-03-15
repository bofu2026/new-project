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
## References

Adhami, Saied, Giancarlo Giudici, and Stefano Martinazzi. 2018. “Why Do Businesses Go Crypto? An Empirical Analysis of Initial Coin Offerings.” *Journal of Economics and Business* 100: 64-75.

Akerlof, George A. 1970. “The Market for ‘Lemons’: Quality Uncertainty and the Market Mechanism.” *Quarterly Journal of Economics* 84 (3): 488-500.

Bank for International Settlements. 2023. *Annual Economic Report 2023*.

Biais, Christophe, Julien Bisiere, Matthieu Bouvard, and Catherine Casamatta. 2019. “The Blockchain Folk Theorem.” *Review of Financial Studies* 32 (5): 1662-1715.

Budish, Eric. 2018. “The Economic Limits of Bitcoin and the Blockchain.” NBER Working Paper 24717.

Catalini, Christian, and Joshua S. Gans. 2016. “Some Simple Economics of the Blockchain.” NBER Working Paper 22952.

Catalini, Christian, and Joshua S. Gans. 2018. “Initial Coin Offerings and the Value of Crypto Tokens.” NBER Working Paper 24418.

Cong, Lin William, and Zhiguo He. 2019. “Blockchain Disruption and Smart Contracts.” *Review of Financial Studies* 32 (5): 1754-1797.

Corbet, Shaen, Brian Lucey, Andrew Urquhart, and Larisa Yarovaya. 2019. “Cryptocurrencies as a Financial Asset: A Systematic Analysis.” *International Review of Financial Analysis* 62: 182-199.

European Parliament and Council of the European Union. 2023. *Regulation (EU) 2023/1114 on Markets in Crypto-Assets (MiCA)*.

Financial Stability Board. 2023. *Global Regulatory Framework for Crypto-Asset Activities*.

Fisch, Christian. 2019. “Initial Coin Offerings (ICOs) to Finance New Ventures.” *Journal of Business Venturing* 34 (1): 1-22.

Gorton, Gary, and Jeffery Zhang. 2021. “Taming Wildcat Stablecoins.” NBER Working Paper 29691.

Howell, Sabrina T., Marina Niessner, and David Yermack. 2020. “Initial Coin Offerings: Financing Growth with Cryptocurrency Token Sales.” *Review of Financial Studies* 33 (9): 3925-3974.

Lyons, Richard K., and Ganesh Viswanath-Natraj. 2023. “What Keeps Stablecoins Stable?” *Journal of International Money and Finance* 131: 102777.

Makarov, Igor, and Antoinette Schoar. 2020. “Trading and Arbitrage in Cryptocurrency Markets.” *Journal of Financial Economics* 135 (2): 293-319.

Myers, Stewart C., and Nicholas S. Majluf. 1984. “Corporate Financing and Investment Decisions When Firms Have Information That Investors Do Not Have.” *Journal of Financial Economics* 13 (2): 187-221.

Rochet, Jean-Charles, and Jean Tirole. 2003. “Platform Competition in Two-Sided Markets.” *Journal of the European Economic Association* 1 (4): 990-1029.

Saleh, Fahad. 2021. “Blockchain Without Waste: Proof-of-Stake.” *Review of Financial Studies* 34 (3): 1156-1190.

U.S. Securities and Exchange Commission. 2017. *Report of Investigation Pursuant to Section 21(a) of the Securities Exchange Act of 1934: The DAO*.

U.S. Securities and Exchange Commission. 2019. *Framework for “Investment Contract” Analysis of Digital Assets*.

Yermack, David. 2017. “Corporate Governance and Blockchains.” *Review of Finance* 21 (1): 7-31.


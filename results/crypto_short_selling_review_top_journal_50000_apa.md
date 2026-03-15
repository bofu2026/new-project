# Shorting Cryptocurrency: A Top-Journal-Style Literature Review

## Abstract

This article reviews the economics of short selling in cryptocurrency markets. Although the public debate on crypto has long focused on speculation, bubbles, and retail enthusiasm, the growth of crypto derivatives, margin lending, over-the-counter borrowing, structured products, and decentralized finance has made short exposure central to the market’s institutional maturation. The review argues that crypto shorting is not a narrow trading topic. It is a unifying lens for understanding price discovery, disagreement, arbitrage, leverage, collateral transformation, market manipulation, liquidity spirals, and the relationship between private digital money and modern financial intermediation. The paper first maps the classic finance literature on short-sale constraints, limits to arbitrage, and derivatives introduction into the crypto setting. It then synthesizes research on the evolution of crypto shorting infrastructure, including spot margin, futures, perpetual swaps, options, basis trades, tokenized inverse products, and synthetic positions in decentralized finance. A central conclusion is that shorting in crypto differs from shorting in conventional securities because the cash leg, the collateral leg, and the market structure are all unusually endogenous. Stablecoins, exchange credit, rehypothecation, cross-venue fragmentation, governance risk, and liquidation engines often matter as much as the directional thesis itself. The review next examines what the literature says about whether shorting disciplines overvaluation, whether it instead amplifies volatility through leverage and liquidations, and how short-sale mechanisms affect welfare when the underlying asset lacks conventional cash flows. It also considers regulatory and policy issues, including market integrity, access asymmetries, disclosure gaps, leverage controls, and the boundary between crypto-native and regulated financial infrastructures. The final sections propose an integrated research agenda spanning asset pricing, market microstructure, banking and monetary economics, industrial organization, law and economics, and financial stability. Across these domains, the broad message is that shorting is indispensable for understanding the transition of crypto from a one-sided speculative ecosystem toward a more complete, but also more fragile, financial system.

**Keywords:** cryptocurrency, short selling, derivatives, perpetual swaps, futures, basis trades, market microstructure, limits to arbitrage, DeFi, financial stability

## 1. Introduction

Short selling occupies an awkward place in the political economy of financial markets. It is often blamed for accelerating price declines, undermining confidence, or profiting from distress. At the same time, modern finance theory treats the ability to take negative views as essential for price discovery, hedging, and the efficient allocation of capital. A market in which participants can buy but cannot easily sell short is structurally asymmetric. Optimists can express their beliefs directly. Pessimists must either stay out, bear risk through imperfect substitutes, or wait for prices to fall. The resulting prices may reflect the valuations of the most enthusiastic or least constrained investors rather than a balanced aggregation of information.

This asymmetry is especially important in cryptocurrency markets. For much of crypto’s early history, direct negative exposure was difficult to obtain. Investors could buy spot coins on exchanges, but borrowing and lending markets were shallow, derivatives were fragmented or legally inaccessible, and custodial or settlement arrangements were fragile. In that environment, disagreement about intrinsic value often translated into one-sided participation. Skeptics could write essays, avoid buying, or sell existing holdings, but they could not easily implement scalable short positions. This created a setting unusually suited to classic theories of overpricing under short-sale constraints. If disagreement is high and pessimists face frictions, prices may be driven by the marginal optimist.

Over time, however, crypto markets developed more complete shorting technologies. Centralized exchanges introduced margin lending, futures, and later perpetual swaps. Institutional venues expanded over-the-counter borrowing and basis trading. Options markets added convex short exposure. Stablecoin growth improved the cash leg needed to margin derivatives. Prime brokers and custodians began to support cross-venue strategies. At the same time, decentralized finance created a parallel world of collateralized borrowing, automated liquidations, synthetic assets, and on-chain leverage. These changes transformed shorting from a peripheral tactic into a central organizing mechanism of crypto market structure.

Yet crypto shorting is not simply the migration of familiar financial instruments onto new assets. The literature suggests that several features of crypto fundamentally alter the economics of shorting. First, many crypto assets have no conventional cash flows, making valuation unusually sensitive to narratives, network expectations, and liquidity conditions. Second, the liabilities used to collateralize short positions are often themselves private digital instruments, especially stablecoins, whose own safety and liquidity are endogenous. Third, much of the trading takes place on fragmented venues with heterogeneous governance, disclosure, legal enforceability, and liquidation design. Fourth, leverage is often embedded in derivatives and collateral chains rather than transparent in balance-sheet reporting. Fifth, the same exchange or protocol may simultaneously provide custody, financing, price benchmarks, and liquidation infrastructure, concentrating operational and governance risk.

These features mean that shorting in crypto sits at the intersection of several literatures that are often studied separately. It belongs to the classic finance literature on short-sale constraints, disagreement, and limits to arbitrage. It belongs to the market microstructure literature on informed trading, fragmentation, and price discovery. It belongs to the banking and monetary literature because stablecoins, rehypothecation, and collateral quality shape the feasibility of short exposure. It belongs to the industrial-organization literature because exchange competition, platform design, and network effects structure access to leverage. It belongs to law and economics because many positions depend on contractual enforceability, custody, bankruptcy treatment, and the legal status of collateral. And it belongs to the financial-stability literature because leveraged shorting interacts with margin spirals, fire sales, and run-like dynamics.

The goal of this review is therefore broader than summarizing a few papers about betting against Bitcoin. The paper treats shorting as a window into the architecture of crypto finance. It asks five large questions. First, what does established theory predict about markets in which pessimists face high frictions, and how well do those predictions fit crypto? Second, how have institutional mechanisms for shorting evolved, and what distinguishes spot borrowing, futures, perpetual swaps, options, structured products, and decentralized synthetic positions? Third, what has the empirical literature learned about the effect of shorting on prices, volatility, bubbles, basis dynamics, and informational efficiency? Fourth, how do funding liquidity, collateral transformation, and platform governance shape the supply of short exposure? Fifth, what regulatory and research agendas emerge once shorting is placed at the center rather than the edge of crypto market analysis?

The review proceeds as follows. Section 2 explains why shorting is analytically central in crypto and identifies the main economic functions of negative exposure. Section 3 revisits the classic short-sale and limits-to-arbitrage literature, emphasizing how its core insights travel into markets with no clear fundamental anchors. Section 4 traces the institutional evolution of crypto shorting from primitive borrowing arrangements to global derivatives complexes and DeFi-native synthetic positions. Section 5 compares the major instruments. Sections 6 through 13 synthesize empirical and theoretical work on price discovery, overpricing, leverage, liquidations, basis trades, stablecoin collateral, DeFi shorting, and manipulation. Section 14 reviews the regulation and governance of crypto short selling. Section 15 considers systemic and macro-financial implications. The concluding sections propose an integrated research agenda and an evaluative framework for judging whether more complete shorting is socially beneficial in digital asset markets.

The paper takes a deliberately expansive view of the literature. It includes studies directly about cryptocurrencies and shorting, but also draws on adjacent work in futures markets, banking, shadow banking, platform economics, and the history of speculative markets. This is necessary because crypto shorting remains younger than the established literatures that illuminate it. A convincing review must therefore do more than catalog empirical findings. It must build a conceptual bridge between classic theories of disagreement and arbitrage, the institutional particularities of crypto trading, and the emerging evidence from digital markets.

## 2. Why short selling is central to the economics of cryptocurrency

To many market participants, shorting appears to be merely one trade among many: a directional wager that prices will decline. The literature suggests a much richer interpretation. Shorting performs at least six economic functions in cryptocurrency markets.

The first is informational. Where beliefs diverge sharply, short selling allows pessimistic information to enter prices. Crypto markets are unusually prone to extreme disagreement because valuation often depends on uncertain future adoption, protocol governance, network effects, regulatory treatment, and macro narratives about money or technology. In such settings, excluding or burdening pessimists can materially distort prices.

The second function is insurance. Miners, token treasuries, market makers, venture investors, and payment processors often have long exposure to crypto prices through operations or inventory. Their ability to hedge downside risk depends on the availability of liquid shorting instruments. A market with insufficient negative exposure capacity may therefore impair real activity within the crypto ecosystem itself.

The third function is arbitrage. Many crypto assets trade on multiple venues and in multiple forms, including spot, futures, perpetual swaps, options, wrapped assets, and synthetic tokens. Relative-value traders need the ability to short one leg while buying another. If shorting is costly or venue-specific, price wedges can persist longer than standard no-arbitrage models would predict.

The fourth function is governance discipline. In conventional equities, short sellers may help discipline overvalued firms or expose fraud. In crypto, where token issuers, exchanges, and protocols often make ambitious claims without the disclosure standards of public companies, negative traders can serve as decentralized skeptics. This role is imperfect and sometimes predatory, but it remains important.

The fifth function is market completion. Crypto markets initially offered mainly spot speculation. As shorting tools grew, crypto finance started to resemble a fuller financial system with forwards, futures, swaps, options, lending, collateral chains, structured notes, and treasury management. Studying shorting therefore reveals not just price pessimism, but the broader maturation of financial intermediation.

The sixth function is systemic transmission. Because shorting often uses leverage and collateral, it creates channels through which price moves translate into margin calls, liquidations, stablecoin demand, exchange credit stress, and cross-venue contagion. In that sense, shorting helps determine not only who wins or loses from price declines but how shocks travel through the system.

These functions imply that the question “Does crypto allow shorting?” is too narrow. The more useful question is how different shorting mechanisms alter information aggregation, hedging capacity, arbitrage efficiency, and systemic fragility. A shallow borrowing market may permit some negative views without supporting institutional hedging. A deep perpetual-swap market may improve price discovery while simultaneously increasing leverage and liquidation risk. A DeFi lending protocol may expand access while creating new oracle dependencies. The literature’s challenge is to analyze these tradeoffs jointly.

Crypto is also a particularly revealing setting because it exposes the supply side of shorting with unusual clarity. In equity markets, shorting typically requires someone to lend shares, and the institutional machinery of securities lending is well established, if not always transparent. In crypto, the supply of borrowable assets, the form of collateral, and the venue enforcing contracts are all more visibly endogenous. Shorting capacity depends on exchange design, stablecoin availability, collateral acceptance, risk engines, custody arrangements, and sometimes governance votes. This makes crypto a valuable laboratory for studying how financial infrastructure shapes the feasibility and price of negative exposure.

Finally, shorting is central because the public controversy around crypto has always involved claims of overvaluation, bubbles, and manipulation. If a market is thought to be persistently overvalued, one immediate question is whether skeptics can actually trade against it. If they cannot, then high prices need not imply collective irrationality. They may instead reflect institutional asymmetry. Conversely, if shorting becomes deep and scalable but extreme mispricing persists, that is a more serious challenge to simple constraint-based explanations. The development of crypto shorting thus provides a natural experiment in how markets evolve as pessimistic capital becomes more organized.

## 3. Theoretical foundations: Short-sale constraints, disagreement, and limits to arbitrage

The classic starting point for any discussion of shorting is the observation that markets with heterogeneous beliefs need not aggregate information symmetrically when pessimists are constrained. Miller’s disagreement framework remains especially influential because it offers a simple intuition: if investors disagree and short selling is difficult, prices will be set disproportionately by optimists. Subsequent work on information asymmetry, noise trader risk, and limits to arbitrage complicated this picture, but the central point remains powerful. Constraints on negative positions can create overpricing, not because all participants are irrational, but because bearish views are harder to express than bullish ones.

Crypto markets look, at first glance, like a near-ideal environment for such effects. Belief dispersion is high. Investor bases are heterogeneous. Narratives of adoption or technological destiny can create strong optimism. Direct fundamental anchors are weak or contested for many tokens. And historically, shorting was either unavailable or concentrated on a limited number of venues. These conditions are precisely those under which disagreement-based overpricing theories become most plausible.

However, the crypto setting also forces extensions of the classic framework. In standard equities, even if pessimists are constrained, expected cash flows from firms provide at least a loose anchor for long-run valuation. In crypto, many assets are valued through a combination of scarcity narratives, network expectations, governance rights, fee claims, staking rewards, monetary hopes, and speculative resale value. This makes the notion of “overpricing” itself harder to operationalize. A price may exceed the valuation of many skeptics without clearly violating a conventional discounted cash flow model, because no universally accepted cash flow stream exists in the first place.

This difficulty does not invalidate the theory. It instead shifts the analytical task. Rather than asking whether crypto prices exceed an objective intrinsic value, the literature often asks whether easier shorting reduces extreme run-ups, narrows cross-venue price discrepancies, weakens bubble-like dynamics, or accelerates the incorporation of negative information. In that sense, the short-sale constraint literature in crypto is often about market quality and information processing rather than strict mispricing against a known benchmark.

A second theoretical pillar comes from the limits-to-arbitrage literature. Even when pessimists can identify overvaluation, they may be unable or unwilling to exploit it if arbitrage is risky, capital intensive, or subject to noise trader reversals. This is crucial for crypto, where momentum, retail sentiment, social media coordination, and platform-specific frictions can all produce sustained departures from simple valuation heuristics. A trader who correctly believes an asset is overvalued may still lose money if the path of prices is explosive and margin constraints force early exit.

Crypto makes these limits unusually acute. First, the leverage supporting long sentiment can itself intensify before collapsing, worsening the timing problem for shorts. Second, venue risk matters. A short position may be economically correct yet operationally vulnerable if the exchange becomes insolvent, freezes withdrawals, or alters collateral rules. Third, collateral is often denominated in volatile assets or private money substitutes such as stablecoins, introducing additional layers of basis risk. Fourth, funding rates on perpetual swaps can become punitive when bearish positions are crowded or when exchange incentives change.

The literature on noise trader risk, synchronization risk, and funding constraints therefore travels naturally into crypto. When arbitrageurs fear they are early rather than wrong, they may rationally limit position size. If they also fear that funding or venue conditions will deteriorate before prices normalize, constraints become even tighter. This suggests that the deepening of crypto shorting should not be expected to eliminate exuberance entirely. More complete shorting can reduce asymmetry while still leaving substantial room for speculative overshooting.

A third theoretical tradition concerns derivatives introduction. When a new futures or options market opens on an underlying asset, what happens to spot prices and volatility? Competing views exist. One view holds that derivatives improve price discovery by allowing informed pessimists and hedgers to trade, thereby reducing overvaluation and dampening distortions. Another view emphasizes the possibility of increased speculation, leverage, and strategic trading. In crypto, both mechanisms are plausible. The launch of Bitcoin futures, the rise of perpetual swaps, and the growth of options have all been studied through this lens.

A fourth theoretical strand involves market completion and welfare. In incomplete markets, agents may bear more risk than they prefer or abstain from participation altogether. Shorting instruments can improve welfare by allowing hedging and risk sharing. Yet they can also increase fragility if they encourage leverage, maturity mismatch, or correlated liquidation behavior. In crypto, this duality is especially pronounced because the infrastructure facilitating hedging often also facilitates highly leveraged speculation. The social value of shorting therefore depends not only on the existence of negative instruments but on how they are embedded within collateral and risk-management systems.

A fifth theoretical strand concerns the industrial organization of trading platforms. If exchanges control listing, leverage limits, collateral types, bankruptcy waterfalls, and liquidation engines, then shorting capacity becomes partly a platform product. Different exchanges may strategically design contracts to attract order flow, sometimes emphasizing accessibility over prudential robustness. This platform-competition perspective helps explain why shorting in crypto may be abundant in gross notional terms yet uneven in reliability and institutional quality.

Taken together, the theoretical literature implies that crypto shorting should be analyzed not as a binary variable but as a multi-dimensional institutional bundle. The existence of a short instrument is only the beginning. Researchers must ask who can access it, at what cost, with what collateral, under what liquidation rules, on which venues, and against which benchmarks. Each of these dimensions affects how strongly shorting disciplines prices and how much systemic risk it creates.

## 4. The institutional evolution of crypto shorting

The earliest crypto markets were structurally long-only. Participants acquired coins through mining, peer-to-peer trades, or spot exchanges, but there were few scalable mechanisms for expressing a negative view. Borrowing markets were thin, legal agreements were often informal, and the operational infrastructure needed for margining, netting, and liquidation was rudimentary. In this environment, skepticism was easier to voice than to monetize.

This changed gradually in stages. The first stage involved informal and over-the-counter borrowing arrangements. Large holders could lend coins directly to counterparties for fees, allowing some primitive shorting. These arrangements, however, were relationship based and difficult to scale. Counterparty risk was high, settlement practices varied, and there was little standardized infrastructure for collateral management.

The second stage came with centralized exchange margin trading. Exchanges began allowing users to borrow assets or stable collateral and take leveraged spot positions. This represented a major advance because the exchange could intermediate lending supply, manage margin, and automate liquidation. Yet exchange margin was still limited by the supply of borrowable assets and by the exchange’s own balance-sheet and risk appetite. Shorting became more accessible, but it remained venue specific and operationally fragile.

The third stage was the emergence of standardized futures. Cash-settled and physically settled futures opened the possibility of taking negative exposure without directly borrowing spot coins. Futures were especially important for institutional participants, who often preferred regulated or semi-regulated contract structures and more legible collateral arrangements. Futures also changed the informational role of shorting by creating public term structures, basis relationships, and arbitrage opportunities between spot and derivative markets.

The fourth stage, and arguably the most transformative, was the rise of perpetual swaps. Perpetuals solved a practical problem in crypto: many users wanted leveraged directional exposure without managing contract expiry. By using funding payments to tether derivative prices to spot benchmarks, perpetual swaps created a highly scalable instrument for both long and short speculation. They became central to crypto trading because they combined accessibility, leverage, and continuous price alignment. But they also embedded shorting within a new set of institutional mechanisms: funding rates, mark prices, liquidation cascades, insurance funds, and auto-deleveraging rules.

The fifth stage involved the deepening of options markets. Options enabled short exposure with convex payoffs, volatility trading, and more sophisticated hedging of inventories or structured products. They also allowed institutions to construct downside protection or relative-value strategies without mechanically participating in the same liquidation channels as perpetual-swap traders.

The sixth stage was the emergence of prime brokerage, multi-venue collateral management, and more sophisticated arbitrage infrastructure. Larger participants began to treat crypto shorting less as isolated exchange activity and more as an integrated treasury and risk-management problem. They borrowed spot in one venue, posted collateral in another, financed positions through stablecoins, and managed basis across exchanges and over-the-counter markets. This stage brought crypto closer to a recognizable institutional market, though one still subject to unusual legal and operational risks.

The seventh stage was the development of decentralized finance. Lending protocols, collateralized stablecoins, synthetic asset platforms, decentralized perpetual exchanges, and tokenized treasury products created on-chain routes to short exposure. DeFi did not replace centralized markets, but it expanded the design space. Traders could borrow tokens against overcollateralized positions, mint synthetic dollar or inverse exposures, or short through decentralized perpetual protocols using algorithmic funding and oracle-based liquidations.

Each stage changed not only access to bearish trades but the nature of bearish risk. In primitive OTC borrowing, the central concern was counterparty default. In exchange margin trading, it was exchange governance and liquidation design. In futures markets, basis and collateral management became central. In perpetuals, funding-rate dynamics and liquidation engines mattered enormously. In DeFi, the quality of oracles, smart contracts, governance, and collateral volatility became core concerns. The institutional history of crypto shorting is therefore a history of shifting constraints rather than simple liberalization.

This evolution also altered who could short. Early markets favored insiders with access to borrowable inventory or bilateral relationships. Exchange margin expanded access to sophisticated retail traders. Regulated futures opened the door to some institutional capital. Perpetuals massively broadened participation globally, though often outside the most tightly regulated jurisdictions. DeFi, in turn, offered permissionless access in principle but often required technical literacy and tolerance for smart-contract risk. The literature should therefore be alert to distributional questions: easier shorting for whom, on what terms, and with what protections?

Finally, the institutional history suggests that crypto shorting is path dependent. The dominance of perpetual swaps in many markets was not preordained by textbook finance. It reflected the particular needs of a global, always-open, collateral-driven market with a large speculative retail base and limited legacy intermediation. That dominance matters because the perpetual-swap design itself shapes the empirical literature on funding, liquidations, and market quality. A review of crypto shorting must therefore treat contract design as endogenous to the market’s social and institutional context.

## 5. The instruments of crypto shorting

### 5.1 Spot borrowing and margin shorts

The most conceptually straightforward way to short a cryptocurrency is to borrow the asset, sell it in the spot market, and later repurchase it for return to the lender. This mirrors classic equity shorting. The economic logic is simple, but the practical implementation in crypto differs in several ways.

In equity markets, securities lending is supported by a mature institutional ecosystem of custodians, prime brokers, beneficial owners, and legal conventions. In crypto, especially outside the most regulated institutional channels, borrowing arrangements have historically been less standardized. Exchanges often internalize the lending market, matching borrowers to lenders or supplying leverage from pooled inventory. The borrower’s exposure therefore depends heavily on the exchange’s operational robustness and contractual design.

Spot-margin shorts matter because they are a relatively pure expression of negative demand. They are not tied to a derivative basis in the same way as futures or perpetuals. They therefore offer a benchmark for how costly it is to borrow pessimism directly. Borrow fees, collateral haircuts, and recall risk all reveal the scarcity value of short exposure. When borrow becomes expensive or unavailable, that is evidence of constraint even if derivatives markets remain active.

At the same time, spot shorting in crypto can be less scalable than derivatives-based shorting. The supply of lendable assets may be concentrated among exchanges, large holders, funds, or custodians. Borrowers may face sudden fee changes, inventory shortages, or withdrawal frictions. Physical delivery and settlement across venues can be operationally demanding, especially when blockchain congestion or custody frictions intervene. For these reasons, spot shorting often becomes the infrastructure layer beneath relative-value strategies rather than the dominant retail instrument.

### 5.2 Futures markets

Futures contracts transformed crypto shorting by allowing traders to take negative exposure without locating and borrowing the underlying asset. In principle, this lowers a major friction identified in the short-sale literature. In practice, futures introduce new variables: margin rules, basis risk, term structure, settlement design, and the quality of the reference rate.

The literature on futures introduction asks whether these markets improve price discovery or destabilize the underlying. In crypto, futures matter especially because they create a venue where informed skepticism can scale more easily than in spot borrow markets. Cash-settled futures are particularly important for institutions that do not wish to manage crypto custody or physical settlement risk. Physically settled contracts, by contrast, can tighten the link to the underlying asset and support more direct arbitrage.

Futures also create a rich empirical object in the basis. When futures trade above spot, below spot, or move with varying sensitivity to market conditions, researchers gain information about funding pressures, inventory, hedging demand, and the price of leverage. A trader shorting via futures is not only expressing a directional view but choosing a maturity, a settlement mechanism, and a collateral structure.

### 5.3 Perpetual swaps

Perpetual swaps are perhaps the signature instrument of crypto shorting. They are economically similar to futures but have no expiration date. Instead, periodic funding payments between longs and shorts help tether the derivative price to the spot index. If the perpetual trades above spot, longs typically pay shorts; if it trades below spot, shorts pay longs. This design allows continuous leverage while avoiding contract rollover.

From the standpoint of shorting, perpetuals have three major consequences. First, they lower access costs dramatically. Traders can open short positions continuously on major exchanges with standardized contract structures. Second, they create a public price for directional crowding through the funding rate. Third, they embed shorting inside an automated liquidation ecosystem, where mark prices, collateral maintenance, insurance funds, and auto-deleveraging rules matter as much as directional skill.

The literature increasingly treats perpetuals not merely as speculative tools but as institutional architecture. Funding payments are a market-based mechanism for equilibrating directional demand, yet they can also become volatile or distorted under stress. If longs are structurally crowded, shorting may earn positive funding carry even without a strong bearish view. If shorts become crowded or collateral conditions tighten, funding may reverse. Perpetual markets therefore blur the line between directional trading, carry trading, and liquidity provision.

### 5.4 Options and structured downside exposure

Options expand the design space of shorting. A trader can buy puts, sell calls, construct collars, or combine options with spot and futures to create downside exposure with varying gamma and vega profiles. In markets with high implied volatility and large crash risk, options can be expensive, but they also allow exposure to tail events without the same mechanical liquidation path as leveraged futures.

Options matter for at least three reasons. First, they provide downside insurance to holders who do not wish to reduce spot exposure. Second, they allow institutions to express negative convexity views in a more risk-bounded manner than outright shorts. Third, the implied-volatility surface contains information about crash expectations, demand for protection, and the term structure of bearish sentiment.

Structured products add another layer. Exchanges, market makers, and wealth platforms sometimes package downside exposure through notes, principal-protected structures, or yield-enhancement strategies that embed option positions. These products can expand effective shorting capacity indirectly, though often with reduced transparency for end users.

### 5.5 Tokenized inverse products and synthetic shorts

Some markets have attempted to offer inverse tokens or synthetic instruments that appreciate when the underlying crypto asset falls. In theory, such products democratize short exposure. In practice, they raise questions about path dependence, daily rebalancing, issuance governance, and hidden leverage. Many inverse or leveraged tokens function more like derivatives wrappers than simple short positions.

The literature on these products is still developing, but the general lesson from finance is familiar: instruments marketed as simple inverse exposure often involve complex dynamic hedging and can perform unexpectedly over longer horizons. Their importance in crypto lies less in aggregate notional volume than in what they reveal about product innovation in a market with persistent demand for accessible bearish exposure.

### 5.6 Decentralized lending, synthetic assets, and on-chain perpetuals

DeFi has created additional paths to shorting. One route is collateralized borrowing: a trader posts one asset, borrows another, sells the borrowed asset, and hopes to repurchase more cheaply later. Another route is synthetic-asset issuance, where overcollateralized positions mint tokens that track inverse or dollar exposures. A third route is decentralized perpetual exchanges that replicate perpetual-swap logic using smart contracts, liquidity pools, or off-chain order books with on-chain settlement.

On-chain shorting differs from centralized exchange shorting in several respects. Identity constraints are weaker or absent, smart contracts replace some intermediary functions, collateral is usually overcollateralized, and liquidations depend heavily on oracle design. The result is greater openness in some dimensions but also new fragilities. If the oracle fails, if governance changes the rules, or if collateral drops sharply, shorting outcomes can diverge from those on centralized venues.

### 5.7 Comparative interpretation

These instruments should not be treated as interchangeable. Spot shorts, futures, perpetuals, options, inverse tokens, and DeFi positions differ in collateral requirements, liquidity, basis exposure, governance, and path dependence. The literature’s most important task is therefore comparative: which instruments better support information aggregation, which support hedging, which attract speculative leverage, and which transmit systemic stress? A mature review of crypto shorting must keep this heterogeneity in view.

## 6. Derivatives introduction, price discovery, and the informational role of shorting

A core question in the literature is whether the development of shorting infrastructure improves price discovery. The issue matters in all asset classes, but it is especially acute in crypto because the market’s early one-sidedness led many observers to suspect that prices reflected speculative enthusiasm rather than balanced information aggregation.

The simplest hypothesis is that easier shorting should reduce overpricing by allowing negative views into the market. If a crypto asset is overpriced because skeptics cannot trade effectively, then the introduction of futures, perpetual swaps, or deeper borrow markets should moderate price levels or at least prevent extreme upside deviations from persisting. A related hypothesis is that derivatives should improve informational efficiency, causing prices to incorporate news faster and reducing the gap between venues.

The empirical record is nuanced. Several studies on the introduction of Bitcoin futures and other derivative venues suggest that derivatives markets have at times improved price discovery and created stronger links between spot and forward prices. Futures markets can aggregate institutional information, facilitate hedging, and generate more disciplined arbitrage relationships. At the same time, derivatives also create new speculative channels. When leveraged directional trading becomes easier, the gross volume of informed and uninformed trading may rise together.

This ambiguity is not surprising. Price discovery is not a simple property of one venue. It emerges from interactions among spot markets, derivatives, stablecoin markets, over-the-counter desks, market makers, and cross-exchange arbitrageurs. A futures contract may improve information processing if professional traders can use it efficiently, but the gains may be limited if collateral fragmentation or withdrawal constraints prevent rapid arbitrage. Likewise, perpetual swaps may lead spot markets in price discovery during some periods because they attract the fastest information-sensitive traders, yet they may also generate noisy short-term moves because of leverage and liquidation mechanics.

An important literature examines which venue leads and which follows. In some periods, major futures or perpetual venues appear to incorporate information before spot exchanges. In others, large spot venues or stablecoin-denominated markets dominate. The answer often depends on market state. During quiet periods, institutional derivatives may lead because they aggregate risk-management and macro information efficiently. During euphoric retail phases, highly leveraged perpetual venues may lead because they capture speculative order flow first. During stress, the causality can become circular as spot moves trigger derivative liquidations, which feed back into spot prices through arbitrage and collateral sales.

Shorting is central to these patterns because it broadens the set of traders who can participate in price formation. If a market allows only long demand, price discovery is structurally biased. Once derivatives deepen, skeptical institutions, hedgers, and relative-value traders can transmit different information sets. However, the improvement in price discovery is conditional on contract quality. Poor benchmark design, weak collateral, or excessive exchange discretion can compromise the informational value of derivatives.

The literature also stresses the distinction between directional and relative-value information. A bearish macro trader may short Bitcoin because of global liquidity conditions, while an arbitrageur may short the futures contract only because the basis is too rich relative to spot. Both contribute to price efficiency, but in different ways. The first directly expresses negative information about the asset’s broad value. The second enforces cross-market consistency. Crypto derivatives may therefore improve price discovery even when many participants are not taking a fundamental view on the asset itself.

Another dimension concerns transparency. Perpetual funding rates, open interest, liquidation statistics, implied volatility surfaces, and basis measures all provide public signals about positioning. These data do not eliminate uncertainty, but they create a richer informational environment than a purely spot market. In that sense, the rise of shorting instruments expands the observable state variables of crypto finance. Researchers can study not only prices, but the conditions under which negative exposure is costly, crowded, or unstable.

Yet greater observability has side effects. Public funding rates and open-interest data can encourage crowded meta-trading, where participants position around expected liquidations or squeezes rather than fundamentals. The market becomes more legible, but not necessarily more stable. Price discovery in crypto is therefore inseparable from strategic interaction among traders who observe the same leverage indicators.

The most persuasive conclusion from this literature is that shorting improves the potential for informational efficiency but does not guarantee it. Whether the effect is strong depends on the institutional completeness of the market. The better the connections among spot, derivatives, funding, and settlement, the more likely that shorting will discipline prices rather than simply create an additional speculative arena.

## 7. Short-sale constraints, overpricing, and bubble dynamics in crypto markets

No topic links crypto to classical finance theory more directly than the question of overpricing under short-sale constraints. Since the earliest Bitcoin booms, critics have argued that crypto prices reflect speculative mania, ideological enthusiasm, or reflexive narratives rather than sober assessment. The short-sale literature provides one possible mechanism: even if many investors are skeptical, prices can remain elevated if those investors cannot trade their views effectively.

This mechanism is especially plausible in the early years of crypto. Spot markets were retail dominated. Borrowing was limited. Many institutional investors lacked legal or operational access. Derivatives were underdeveloped. In such a setting, exuberant capital could push prices far above what a more balanced market might support. The skeptics were not necessarily absent; they were just constrained.

The crucial question is whether the subsequent expansion of shorting materially reduced these dynamics. Some evidence suggests it did, at least partially. The introduction of futures and the growth of perpetuals appear to have made downside views more tradable. This should, in theory, narrow the gap between enthusiastic and skeptical valuations. Yet crypto booms have persisted even in the presence of deep derivatives markets. This suggests that short-sale constraints are only part of the story.

Several explanations are compatible with this observation. First, disagreement may remain so large that even scalable shorting does not fully offset optimistic capital. Second, arbitrageurs may face the classic limits to arbitrage problem: prices can rise irrationally for longer than their financing horizon allows. Third, crypto markets may generate new forms of short constraint through funding rates, collateral scarcity, exchange risk, and squeeze dynamics. Fourth, some traders who can short may prefer relative-value or market-neutral strategies to outright directional bets, reducing the effective supply of bearish capital.

Another important point is that the concept of a bubble is harder to define in crypto than in assets with well-established cash flows. A token can look wildly overvalued relative to one narrative and still appear plausible under another if expected network adoption changes enough. This makes the short-sale constraint literature in crypto less about proving bubbles in the strictest sense and more about identifying the institutional conditions under which prices become unusually sensitive to optimistic narratives.

Empirically, the literature often studies episodes where borrowing costs spike, derivatives bases become extreme, or perpetual funding turns persistently one sided. Such episodes suggest that negative exposure is scarce relative to long demand. In these conditions, prices may indeed reflect optimistic dominance. Yet the opposite can also happen. During panics, shorts can become crowded, funding can swing in their favor or against them, and downward momentum can be amplified. The one-sidedness of crypto markets is not permanently long biased once shorting infrastructure deepens; it can become state dependent.

This state dependence is important for bubble theory. Early-stage crypto bubbles may be driven by long-only asymmetry. Later-stage bubbles may be sustained not because shorting is impossible, but because it is risky to fight momentum in a market with reflexive leverage. Traders who believe prices are too high may still stay small because they fear squeezes, collateral calls, or exchange failure. The mechanism shifts from direct prohibition to dynamic constraint.

The literature also explores the role of token-specific characteristics. Assets with weaker derivatives coverage, thinner borrow markets, or less institutional attention may remain more vulnerable to optimism-driven overpricing than highly liquid benchmark assets such as Bitcoin and Ether. This implies a hierarchy of constraint. The largest assets may have relatively complete shorting infrastructure, while smaller tokens remain functionally one sided despite the existence of generalized derivatives venues.

A further issue is whether shorting disciplines fraud and low-quality projects. In theory, easier negative exposure should help price bad assets down faster. In practice, shorting obscure or thinly traded tokens can be difficult, expensive, or dangerous, especially when on-chain governance, concentrated ownership, or manipulation risks are high. Thus the disciplining role of shorting may be strongest where markets are already more institutionally complete. This creates a paradox: the projects most in need of skeptical pricing may be the hardest to short.

Overall, the literature indicates that short-sale constraints have likely mattered greatly for crypto pricing, particularly in earlier market stages and in thinner assets. But the development of shorting infrastructure has not made crypto a frictionless two-sided market. Constraints have been transformed rather than eliminated. Understanding overpricing in crypto therefore requires moving beyond a simple long-only versus short-enabled dichotomy toward a richer view of funding, venue, and liquidation risk.

## 8. Basis, funding, and the pricing of negative exposure

One of the most distinctive contributions of the crypto literature is the centrality of basis and funding variables to the economics of shorting. In many traditional asset markets, funding matters, but it is often less visible to outside observers. In crypto, basis and funding rates are public, salient, and continuously discussed by traders. They function as prices of imbalance between longs and shorts, and thus as real-time indicators of the scarcity or abundance of negative exposure.

The futures basis, defined broadly as the difference between futures and spot prices, reflects more than directional expectations. It can embed financing conditions, collateral quality, convenience yields from holding spot, institutional access asymmetries, custody frictions, and hedging demand. A persistently positive basis may indicate strong demand for leveraged long exposure, limited ability to short through spot borrowing, or high value to holding spot inventory. A negative basis may reflect bearish demand, scarcity of balance-sheet capacity among arbitrageurs, or stress in collateral markets.

Perpetual funding rates provide an even more direct measure. When longs pay shorts over extended periods, the market is signaling that leveraged long exposure is relatively abundant and must compensate the marginal short for taking the other side. In this sense, positive funding can be interpreted as a premium earned by supplying bearish capacity. But that premium is not free. It compensates traders for counterparty risk, squeeze risk, collateral volatility, and the possibility that prices continue rising even as longs overpay for leverage.

The literature on basis and funding has therefore become one of the clearest windows into the economics of shorting in crypto. It shows that bearish exposure is priced, not merely available or unavailable. Traders shorting a perpetual are entering a joint position in price direction, funding carry, exchange governance, and collateral management. A market-neutral basis trader, for example, may buy spot and short a perpetual to harvest positive funding. Economically, that strategy supplies short exposure to the market even if the trader has no bearish view on the asset’s long-run price.

This insight has several implications. First, the supply of shorting is endogenous to carry conditions. If funding becomes sufficiently attractive, capital enters to provide the short leg. Second, the capacity of that capital depends on balance-sheet and operational frictions. Even an attractive basis may persist if custodial, regulatory, or venue constraints prevent arbitrageurs from scaling. Third, funding conditions can reverse rapidly, turning a profitable short-carry environment into a costly one. The risk of regime change is therefore central to strategy choice.

The literature also suggests that basis and funding are useful state variables for broader market quality. Extremely positive funding often coincides with exuberant sentiment, crowded long leverage, and vulnerability to correction. Extremely negative funding may indicate panic, short crowding, or balance-sheet stress. Yet these relationships are not mechanical. Funding can remain elevated for long periods in trending markets, and traders who interpret it too simplistically may underestimate path risk.

Stablecoins complicate this picture further. Because many derivatives are margined in dollars or dollar-like tokens, the demand for stable collateral influences funding and basis dynamics. If stablecoin supply tightens or confidence in key stablecoins weakens, the effective cost of maintaining short or arbitrage positions can rise even without large moves in the underlying asset. Thus basis is partly a monetary variable inside crypto, not merely a derivative-pricing variable.

From a theoretical standpoint, basis and funding make crypto a particularly revealing setting for studying the market price of pessimism. In equity shorting, borrow fees are the most direct measure of short scarcity. In crypto, funding rates and cross-market bases serve a similar role at much larger scale. They tell us when the market is paying traders to hold short exposure and when it is charging them for the privilege. A literature review focused on shorting must therefore place funding economics near the center rather than treat it as a technical footnote.

## 9. Leverage, liquidation engines, and short squeezes

If basis and funding describe the price of negative exposure, liquidation engines describe its dynamics under stress. One of the defining features of crypto markets is the centrality of automated liquidation. Exchanges and protocols continuously monitor collateral ratios and force position reductions when maintenance thresholds are breached. This design allows large-scale leveraged trading without the slower manual margining of older markets, but it also creates distinctive feedback loops.

Short positions can be squeezed in familiar ways. If the price of the underlying rises sharply, shorts face losses, margin calls, and forced buybacks. In leveraged perpetual or futures markets, these buybacks can become endogenous demand, pushing prices even higher and triggering additional liquidations. The basic logic resembles short squeezes in other markets, but the crypto setting adds several amplifiers: higher leverage, continuous trading, public liquidation levels, algorithmic execution, and sometimes thinner order books outside top assets.

The literature emphasizes that crypto short squeezes are not just behavioral events driven by narrative or coordination. They are also mechanical outcomes of contract design. The mark-price methodology, maintenance margin schedule, insurance fund rules, auto-deleveraging system, and cross-margin policies all shape how losses are socialized and how quickly positions are closed. A trader considering a short position is therefore taking a view not only on price direction but on the microstructure of forced exit.

This matters for the classic limits-to-arbitrage argument. A short seller may believe an asset is overvalued and still avoid or limit the position because a squeeze can force exit before prices revert. The more transparent and concentrated the liquidation infrastructure, the easier it may be for other traders to anticipate or exploit such pressure. In crypto, where exchanges often publish aggregate positioning and liquidations are widely tracked, strategic interaction around squeezes becomes part of normal market behavior.

The same mechanics can also work in reverse. Long liquidations during sharp declines can intensify downward moves, benefiting existing shorts in the short run while also creating broader market stress. Thus shorting in crypto is linked to liquidation spirals on both sides of the market. A robust negative-exposure ecosystem can improve price efficiency under normal conditions but may also heighten fragility when leverage is excessive.

An important literature studies the distribution of liquidations across venues and the interaction between centralized and decentralized markets. Because traders hedge and finance positions across multiple exchanges, forced exits in one venue can spill over to others through arbitrage and collateral transfers. In DeFi, liquidations are triggered by oracle prices and executed through on-chain auctions or backstop mechanisms, adding another layer of interdependence. The systemic significance of shorting therefore depends on cross-venue networks rather than isolated contract mechanics.

Short squeezes also highlight the political economy of market design. Platforms may compete by offering high leverage, low initial margins, or accessible contract structures that attract volume. But these same features can make squeezes more violent. Traders may rationally prefer deep, well-capitalized venues, yet volume can still migrate toward platforms offering more permissive terms. This is a classic platform-competition problem with prudential consequences.

Finally, the squeeze literature forces a welfare question. Some degree of squeeze risk is inherent to leveraged shorting. Without it, there would be no need for margins. But if market design or opacity allows squeezes to become recurrent, predictable, and manipulative, then shorting may cease to support price discovery and instead become a battleground of engineered liquidations. The literature increasingly suggests that this line is one of the most important policy frontiers in crypto market regulation.

## 10. Arbitrage capital, segmentation, and the limits of scalable bearishness

The existence of a quoted shorting instrument does not imply that bearish capital is infinitely elastic. A central lesson from both traditional finance and crypto is that arbitrage capital is scarce, risk bearing, and institutionally segmented. This is particularly important in digital asset markets, where venue fragmentation, custody frictions, legal heterogeneity, and collateral constraints all limit the speed with which capital can equalize prices.

Crypto markets are fragmented along several dimensions. Assets trade on domestic and offshore centralized exchanges, regulated futures venues, decentralized protocols, over-the-counter desks, and custodial platforms with different withdrawal rules and onboarding constraints. These segments are linked by traders, but not frictionlessly. To short efficiently, a trader often needs access to multiple venues, stable collateral, settlement rails, credit lines, and operational capacity. Each requirement narrows the set of participants able to provide arbitrage capital at scale.

This segmentation has several consequences. First, price discrepancies can persist across venues and instruments even when they appear easy to exploit on paper. A rich perpetual funding rate may not attract enough short capital if traders lack confidence in the exchange, cannot source the needed collateral, or face legal barriers to onboarding. Second, the marginal provider of short exposure may be highly specialized, such as a basis fund, a market maker, or a crypto-native treasury desk. If that class of participant retrenches, the market’s bearish capacity can contract abruptly.

Third, segmentation means that shorting cannot be analyzed solely through gross open interest. A market can exhibit high derivative volume while still having limited effective arbitrage if the same capital is recycled across venues or concentrated in a small number of actors. The resilience of shorting therefore depends on the diversity and balance-sheet strength of the trader base.

The literature on arbitrage capital in crypto is closely linked to funding and basis. Many strategies that appear to be pure arbitrage require substantial working capital and careful management of exchange risk. A trader long spot and short futures must custody the asset, fund the margin, manage withdrawal latency, and trust the relevant venues. These frictions raise the hurdle rate for participation and help explain why seemingly attractive opportunities sometimes persist.

Segmentation also interacts with regulation. Institutions able to access regulated futures may be unable or unwilling to trade offshore perpetuals. Retail traders in some jurisdictions may be barred from certain leveraged products while offshore users remain active. Stablecoin usage itself may be constrained by local regulation or banking access. As a result, the supply of short exposure is shaped by legal architecture as much as by price incentives.

A particularly important implication is that crypto shorting capacity can be state dependent in a financially meaningful way. During calm periods, arbitrageurs may connect markets effectively enough that pricing looks coherent. During stress, however, capital can retreat, collateral can become scarce, and venue risk can suddenly matter more. Then segmentation widens again. In this sense, the effective completeness of crypto markets is cyclical. Shorting may look abundant in good times and constrained in bad times, even without formal rule changes.

This cyclical segmentation mirrors themes from the shadow-banking and market-based finance literatures. Balance-sheet capacity appears deep until volatility, counterparty uncertainty, or funding stress forces deleveraging. Crypto adds the twist that some of the balance-sheet capacity depends on private digital money, exchange credit, and platform governance rather than only on regulated intermediaries. The boundary between arbitrage and infrastructure risk is therefore unusually thin.

## 11. Stablecoins, collateral chains, and the monetary foundations of shorting

A defining feature of crypto shorting is that the cash leg is often not sovereign money in a bank account, but some combination of exchange balances, stablecoins, tokenized cash substitutes, or crypto-collateralized positions. This gives shorting in crypto a monetary dimension absent from most textbook discussions.

In many derivatives venues, traders post collateral in stablecoins or in the underlying crypto asset itself. Even when contracts are notionally dollar denominated, the operational reality may involve private digital claims whose safety depends on reserves, governance, redemption rights, and secondary-market confidence. A short position is therefore embedded in a hierarchy of digital monies and near-monies.

This matters because collateral quality directly affects the supply of short exposure. If traders trust a stablecoin, can fund positions cheaply, and can move collateral efficiently across venues, shorting capacity expands. If confidence in key collateral weakens, or if stablecoin liquidity becomes segmented, then the effective cost of maintaining short positions rises. In the extreme, a collateral shock can force the contraction of negative exposure even if directional beliefs have not changed.

The literature increasingly connects stablecoins to safe-asset theory. Stablecoins provide transactional convenience and, in some settings, a quasi-cash asset for margining. Their role in shorting is analogous to the role of safe collateral in conventional secured finance. Yet unlike Treasury collateral or insured deposits, major stablecoins are private liabilities whose robustness has varied across issuers and time. This introduces a distinct source of fragility. A trader may be correctly bearish on a crypto asset but indirectly long the quality of the stablecoin used to finance the position.

Collateral chains create additional complexity. Traders may post volatile assets to borrow stablecoins, use those stablecoins to margin a derivatives short, and rely on another venue or protocol for liquidity. Each link carries its own liquidation and governance rules. The economics of shorting therefore depend on collateral transformation as much as on directional pricing. A market with deep derivatives but fragile collateral chains may support large gross shorts while remaining vulnerable to sudden contraction.

The stablecoin dimension also influences relative pricing. Positive funding on perpetuals may attract basis traders, but their ability to harvest that carry depends on the cost and reliability of stable collateral. Likewise, a negative basis can reflect not only directional bearishness but also stress in the supply of collateral or in the willingness of arbitrageurs to warehouse venue and redemption risk.

A further issue concerns the competition between different forms of digital cash. Tokenized Treasury products, tokenized deposits, reserve-backed stablecoins, and exchange-specific balances may all, in principle, serve as the monetary substrate for shorting. The more robust and interest-sensitive these instruments become, the more the economics of crypto shorting begin to resemble the economics of repo and collateralized finance. This is an underappreciated link between digital asset markets and the broader monetary system.

One can push the point further. Crypto shorting is not merely about pessimism toward coins. It is one of the channels through which private digital money acquires macro relevance. If major derivatives markets are collateralized largely with privately issued stablecoins, then the state of confidence in those liabilities affects the capacity of traders to hedge, arbitrage, and transmit information. In that sense, the literature on stablecoins and the literature on short selling should be integrated more tightly than they usually are.

## 12. DeFi shorting and the economics of permissionless bearish exposure

Decentralized finance is often described as opening financial access by replacing centralized intermediaries with smart contracts. In the context of shorting, the attraction is clear. A trader who lacks access to regulated futures or offshore exchanges might still be able to post collateral on-chain, borrow an asset, and sell it, or enter a decentralized perpetual market. Yet the economic significance of DeFi shorting is more subtle than the access narrative suggests.

The first point is that DeFi does not eliminate collateral constraints; it redesigns them. Most decentralized lending systems require overcollateralization. This protects lenders and protocols, but it means shorting is capital intensive. Permissionless access comes at the price of tying up more collateral than many centralized venues would require. For small traders, this may still be attractive if alternative access is blocked. For large traders, it can be balance-sheet inefficient.

The second point is that DeFi substitutes code-based and governance-based risks for centralized intermediary risk. A centralized exchange can fail, freeze withdrawals, or misuse customer assets. A DeFi protocol can suffer oracle failure, smart-contract exploits, governance capture, or liquidity droughts. From the standpoint of a short seller, these are not side issues. They determine whether the position can be maintained and exited.

Third, DeFi shorting is deeply intertwined with composability. A trader may borrow one token against another, swap via an automated market maker, hedge via a perpetual protocol, and manage treasury balances in a yield product. This can create elegant capital efficiency in good times. But it can also create complex chains of dependency. A failure in one protocol may affect collateral values, borrowing capacity, or liquidation triggers elsewhere. Permissionless shorting therefore expands the feasible set of strategies while also widening contagion channels.

Fourth, DeFi reveals something conceptually important about bearish access. Shorting is often politically contested in regulated markets because it seems to grant power to sophisticated insiders. DeFi, in principle, democratizes that power. But the literature suggests that practical access is still unequal. Sophisticated traders understand liquidation buffers, gas dynamics, oracle lag, and governance risk better than casual users. Thus the formal openness of DeFi may not translate into equal effective access.

Fifth, decentralized perpetual markets deserve separate attention. They replicate many features of centralized perpetuals, including funding rates and leveraged exposure, but differ in execution model and risk transmission. Some rely on liquidity pools bearing directional inventory. Others use off-chain order matching with on-chain settlement. In each case, the ability to short depends on how the protocol sources liquidity, sets funding, and handles insolvency. These design choices are still evolving, making the empirical literature relatively young.

The most important economic lesson from DeFi shorting is not simply that it broadens access. It is that shorting can be decomposed into modular functions: collateral custody, pricing, funding, liquidation, and settlement. Centralized exchanges bundle these functions organizationally. DeFi unbundles and recombines them through protocols. This makes the structure of bearish exposure more visible and more experimentally variable. As a result, DeFi is a useful laboratory for studying which components of shorting truly require centralized governance and which can be standardized or automated.

## 13. Manipulation, predation, and the darker political economy of shorting

A literature review on shorting would be incomplete if it treated all negative traders as benign information aggregators. Shorting can support price discovery, but it can also coexist with predatory behavior, manipulation, rumor propagation, and strategic attacks on vulnerable market structures. Crypto markets, with their fragmented venues, opaque governance, and highly visible leverage indicators, provide fertile ground for these concerns.

One channel of manipulation involves engineered squeezes or liquidation hunts. If traders can infer where leveraged shorts are likely to be liquidated, they may attempt to push prices through those levels, triggering forced buying that reinforces the move. Similar concerns exist in traditional markets, but the transparency of open interest, the centrality of automated liquidation, and the concentration of order flow on a few platforms can make the problem especially salient in crypto.

Another channel involves informational attacks. Because many crypto assets trade partly on narratives, rumors about hacks, insolvency, regulation, or protocol failure can move prices sharply. A short seller with superior information may contribute to efficient correction. A manipulator with false or selectively framed information may instead destabilize prices for profit. The line between investigative short activism and manipulative rumor can be difficult to draw, especially in markets with limited disclosure standards.

A third issue is benchmark manipulation. Derivative liquidations and funding often depend on reference prices or indices. If these benchmarks can be influenced through thin underlying markets or strategic cross-venue trading, shorting and longing both become susceptible to predation. The institutional quality of benchmark construction is therefore central to the integrity of shorting.

A fourth issue concerns exchange conflicts of interest. When a platform controls listing, leverage, mark prices, liquidation logic, insurance funds, and access to internal order flow, it occupies an unusually powerful position in the ecology of shorting. Even absent outright misconduct, the concentration of roles creates governance concerns. Traders are effectively outsourcing not just execution but parts of the rulemaking process for gain and loss.

The literature does not imply that shorting is uniquely manipulative in crypto. Long-only hype, wash trading, spoofing, pump-and-dump schemes, and insider token issuance are at least as important. But it does suggest that the quality of bearish exposure depends on market integrity. A market cannot reap the informational benefits of shorting if the mechanisms of shorting are themselves systematically gamed.

This leads to a broader political-economy point. Public debate often casts shorts as villains because losses are visible and morally salient. Yet one reason shorting is controversial is precisely that it reveals fragile or inflated structures. In crypto, where projects and venues sometimes rely on confidence, reflexive collateral, and limited transparency, skepticism can be both socially useful and privately destabilizing. The regulatory challenge is therefore not to eliminate bearish trading, but to separate legitimate information and hedging functions from manipulative exploitation of mechanical vulnerabilities.

## 14. Regulation, legal architecture, and market governance

Shorting in crypto sits inside an unsettled regulatory landscape. In conventional securities markets, short-selling rules interact with market abuse regulation, securities lending law, disclosure requirements, clearing systems, and prudential supervision. In crypto, each of these layers is less settled and more jurisdictionally fragmented.

A first issue is basic market access. Some jurisdictions sharply restrict retail access to leveraged crypto derivatives, while others have historically allowed offshore venues to offer high leverage to global users. This creates a segmented geography of shorting. Institutional investors in regulated jurisdictions may access a narrow set of futures or options, whereas offshore traders can use perpetuals with very different risk profiles. Regulation therefore affects not just whether shorting exists, but which forms of shorting dominate.

A second issue concerns the legal status of collateral and customer assets. The collapse of major crypto intermediaries made clear that custody, segregation, and bankruptcy treatment are central to any leveraged market. A short position is only as reliable as the legal and operational protections around the posted collateral and the platform enforcing the contract. Where those protections are weak, the private cost of shorting rises even if the directional thesis is strong.

A third issue involves market manipulation and disclosure. Regulators face the difficult task of preserving the informational benefits of shorting while policing abuse in thin or opaque markets. This is challenging because crypto often lacks the issuer disclosure, audit norms, and market surveillance infrastructure of listed securities markets. Rules imported directly from equities may fit poorly, yet pure laissez-faire leaves room for predation.

A fourth issue is prudential. High leverage, cross-margining, stablecoin collateral, and automated liquidations make crypto derivatives relevant to financial stability questions even when the underlying assets sit outside conventional corporate finance. Regulators must decide whether to focus on product bans, leverage caps, collateral standards, disclosure, venue registration, or the integration of crypto derivatives into existing supervisory categories.

A fifth issue concerns DeFi. Permissionless protocols challenge the jurisdictional logic of short-selling regulation because there may be no obvious intermediary to license or sanction in the traditional way. Yet protocol governance, front-end control, oracle provision, and developer concentration all create points of influence. The literature increasingly treats DeFi not as regulation free, but as governed through different institutional levers.

The broad lesson is that regulation shapes the composition of shorting more than its raw existence. Suppressing one channel may move traders into another. Banning retail access to regulated products may increase migration to offshore or decentralized venues with weaker protections. Conversely, creating clear, prudentially robust channels for hedging and short exposure may improve market quality by attracting better-capitalized and more transparent participants. A top-journal review should therefore avoid the simplistic question of whether shorting should be “allowed.” The more relevant question is how to design market structures in which bearish exposure contributes to information and risk sharing without becoming a source of hidden fragility.

## 15. Macro-financial and systemic implications of crypto shorting

At first glance, shorting a volatile digital asset might appear too niche to matter for macro-financial analysis. Yet the literature increasingly shows that the infrastructure supporting negative exposure can have broader systemic relevance, especially when it is large, collateral intensive, and connected to payment-like instruments such as stablecoins.

The first macro-financial channel runs through collateral demand. Leveraged shorting requires high-quality collateral or at least collateral accepted by exchanges and protocols. In crypto, that role is often played by stablecoins, fiat balances on centralized venues, or increasingly by tokenized short-duration safe assets. When shorting demand grows, so does demand for these collateral instruments. The result is that bearish capacity depends on the supply and quality of quasi-money within the ecosystem.

The second channel is through margin spirals. In market-based finance, falling asset values can tighten financing conditions, forcing deleveraging and further asset sales. Crypto replicates this mechanism at high speed. Sharp price moves alter collateral values, margin requirements, and basis relationships. Traders reduce positions, collateral is liquidated, and cross-venue arbitrage capital withdraws. Shorts may profit directionally yet still face stress if collateral or counterparties deteriorate.

The third channel is through the linkage between crypto leverage and broader risk sentiment. For large benchmark assets, derivatives positioning can respond to monetary policy, global liquidity, and macro volatility. This means crypto shorting is partly a macro hedge and partly a channel for macro transmission into digital asset prices. As institutional participation has grown, the boundary between crypto-specific and macro-financial trading has become less rigid.

The fourth channel is through contagion in the infrastructure of intermediation. Exchanges, lenders, prime brokers, custodians, market makers, and stablecoin issuers all support shorting directly or indirectly. If one part of that system fails, the supply of short exposure can collapse or change form abruptly. That alters price discovery, risk management, and balance-sheet behavior elsewhere. The experience of large exchange failures and stablecoin stress episodes demonstrates that market completeness in crypto is not a stable state variable.

The fifth channel involves systemic asymmetry. A market with insufficient shorting may be prone to euphoric overvaluation; a market with abundant but highly levered shorting may be prone to liquidation cascades. The socially optimal amount and form of short exposure is therefore nontrivial. More shorting is not always better if it comes bundled with opaque leverage and weak governance. Less shorting is not always safer if it leaves the market one sided and vulnerable to narrative bubbles. The macro-financial question is about architecture rather than quantity alone.

A useful way to frame this is through the analogy to repo and shadow banking. In those markets, the key issues are collateral quality, rollover confidence, haircuts, and liquidity spirals. Crypto shorting reproduces many of these themes but in a more retail visible and technologically modular form. Perpetual funding rates, liquidation maps, and stablecoin collateral create a public dashboard of dynamics that in traditional finance are often buried inside dealer books or secured funding markets.

The literature is still divided on how systemically important crypto shorting is relative to the rest of global finance. At current scale, direct spillovers into regulated balance sheets may remain limited compared with core banking or sovereign debt markets. Yet the conceptual significance is larger than the notional size alone would suggest. Crypto shorting is a live experiment in how a collateralized, always-open, mostly private-money-based market allocates pessimism, leverage, and liquidity. That makes it a useful frontier case for market-based finance more generally.

## 16. Data, measurement, and empirical design challenges

A mature review article must confront the methodological weakness of much of the existing literature. Crypto shorting is observable in some ways that traditional finance is not. Funding rates, open interest, on-chain collateral positions, liquidation events, and exchange-level prices are often public. Yet this apparent transparency can be misleading. Researchers face severe measurement problems in at least six dimensions.

First, venue coverage is incomplete. Public datasets may cover major exchanges and some on-chain protocols but omit over-the-counter borrowing, bilateral derivatives, internalized credit lines, and proprietary market-making activity. A study based only on public exchange data may therefore capture visible leverage while missing institutional hedging or inventory management.

Second, contractual comparability is weak. Two instruments labeled “perpetual swap” may differ materially in margining, collateral denomination, mark-price methodology, and liquidation design. Aggregating them can blur meaningful institutional differences.

Third, open interest is not the same as directional crowding. A matched pair of offsetting positions contributes to open interest but does not reveal who is constrained, who is informed, or who is providing liquidity for carry rather than belief. Funding rates help, but they too can be noisy when exchange incentives or benchmark distortions interfere.

Fourth, liquidation data are often platform specific and difficult to compare across venues. Some exchanges publish detailed liquidation flows, while others provide only aggregate or delayed information. DeFi protocols may expose liquidation events on-chain but not the identity or broader balance-sheet context of traders.

Fifth, stablecoin and collateral quality variables are hard to encode. A short position collateralized with a trusted reserve-backed stablecoin is not economically identical to one collateralized with a weaker digital liability or a volatile crypto asset, even if the nominal leverage is the same. Studies that ignore collateral heterogeneity risk missing the monetary dimension of shorting.

Sixth, endogeneity is pervasive. Funding rates, prices, volume, liquidations, and collateral flows all move together. A spike in positive funding may indicate exuberant long demand, an increase in short supply, a change in exchange incentives, or some combination. Untangling these effects requires more than simple correlations.

The most promising empirical strategies therefore combine several methods. High-frequency event studies can examine derivatives introductions, leverage-policy changes, stablecoin shocks, or exchange failures. Difference-in-differences designs can use staggered regulatory interventions or venue access changes. Structural microstructure models can infer informed trading and inventory pressure. Network models can trace collateral and liquidation spillovers across protocols and exchanges. Text analysis can measure narratives around bearish sentiment, short-seller activism, or regulatory fear. On-chain and off-chain data can be merged to study the bridge between centralized and decentralized leverage.

One underdeveloped direction is the use of institutional natural experiments. Exchange outages, changes in margin schedules, shifts in collateral eligibility, or delistings of derivative products create sharp changes in shorting capacity. These events can reveal how much pricing relied on scalable negative exposure and how quickly alternative venues substitute.

Another important direction is measurement of the supply side of shorting. Most studies focus on observed prices or trader outcomes. Fewer directly measure borrow availability, collateral scarcity, or the balance-sheet capacity of arbitrageurs. Yet these variables are central to the theory. The literature would benefit from more work treating the supply of bearish capacity as an object of study in its own right.

## 17. Historical analogies and what crypto adds to classic short-selling debates

The literature on shorting in crypto often sounds novel because the instruments and assets are technologically new. But many of the underlying economic debates are old. Crypto therefore offers a productive opportunity to revisit several historical analogies.

One analogy is to early commodity futures and speculative spot markets. Like commodities, many crypto assets trade globally, continuously, and with substantial convenience or inventory effects. Yet unlike classic commodities, crypto assets lack physical storage costs and often have no nonfinancial use demand. This combination creates unusual pricing dynamics in which the futures basis can reflect belief, leverage demand, and collateral structure more than storage arbitrage.

A second analogy is to internet-era growth equities with extreme disagreement and short-sale constraints. In both cases, optimistic narratives about technological transformation can drive valuations under substantial uncertainty. But crypto is more radical in that many tokens do not even represent residual claims on productive firms. This weakens conventional valuation anchors and intensifies the relevance of institutional constraints on bearish participation.

A third analogy is to shadow banking. Shorting in crypto depends heavily on the quality of collateral, private liabilities, and confidence in market infrastructure. The resulting fragilities resemble those of repo, securities financing, and money-market intermediation, even though the assets differ. This analogy becomes especially strong when stablecoins function as the margin currency of leveraged markets.

A fourth analogy is to the history of financial market opposition to short sellers. Public suspicion of bearish traders is longstanding. In every era, shorts have been accused of destabilization, rumor mongering, or unpatriotic behavior. Crypto revives this discourse in digital form. Communities built around tokens often treat shorts as enemies of innovation, not merely counterparties in a market. This sociological hostility can itself affect the economics of shorting by encouraging squeeze campaigns, governance retaliation, or reputational attacks.

A fifth analogy is to offshore finance. Just as certain forms of leverage and speculation migrated historically to jurisdictions with permissive rules, crypto shorting has often flourished on offshore venues offering high leverage and low friction access. This does not make crypto unique; it places it in a long tradition of geographic arbitrage around financial regulation.

What crypto adds to these debates is the degree of visible modularity. In many older markets, the functions required for shorting are institutionally bundled and partly hidden. In crypto they are often explicit: collateral tokens, funding rates, liquidation rules, insurance funds, oracle feeds, and governance mechanisms are publicly debated and sometimes encoded in software. This visibility makes crypto a useful research environment. It does not simplify the economics, but it exposes the components more clearly.

## 18. Integrated synthesis: What the literature now knows

A review article of this scale should end the descriptive part of the manuscript by asking what can reasonably be claimed as established. The literature on crypto shorting remains young, but several propositions now appear relatively robust.

First, short-sale constraints mattered materially in the formation and persistence of crypto mispricing, especially in earlier market phases and in smaller or less institutionally developed tokens. The exact magnitude remains contested, but the direction is hard to deny. Markets with shallow shorting infrastructure are more vulnerable to one-sided optimism.

Second, the development of derivatives, especially perpetual swaps, substantially expanded the capacity to express negative views. This improved market completeness and likely enhanced price discovery, though unevenly and with important side effects.

Third, the expansion of shorting did not eliminate exuberance. Instead, it transformed the constraints. Borrow scarcity gave way, in part, to funding risk, liquidation risk, venue risk, and collateral risk. This is why crypto can sustain large booms even in the presence of deep derivatives.

Fourth, basis and funding variables are among the most informative state variables in digital asset markets. They reveal not only directional crowding but the price of providing short capacity and the condition of arbitrage capital.

Fifth, the monetary substrate of shorting matters. Stablecoins and other digital cash instruments are not peripheral plumbing; they are integral to the feasibility and resilience of negative exposure.

Sixth, market design is economically central. Exchange governance, liquidation engines, benchmark design, and collateral rules do not merely affect trader convenience. They shape whether shorting supports information and hedging or instead becomes a source of recurrent instability.

Seventh, DeFi has broadened the conceptual and institutional space of shorting, but it has not dissolved fundamental constraints. It replaces some centralized frictions with code, oracle, governance, and overcollateralization frictions.

Eighth, regulation affects the composition of shorting more than its raw existence. Restricting one channel often shifts activity to another, sometimes less supervised one. The policy problem is therefore architectural rather than binary.

Ninth, shorting in crypto cannot be understood fully within asset pricing alone. It belongs equally to the economics of collateral, market infrastructure, platform competition, and monetary hierarchy.

These conclusions suggest that the literature has moved beyond the naive question of whether crypto is merely speculative. The deeper issue is what kind of financial system emerges when speculation becomes two sided, leveraged, collateralized, and increasingly integrated with digital money.

## 19. Research agenda

Many of the most important questions remain open. The field would benefit from a more cumulative research program built around testable propositions rather than recurring anecdotes about booms and busts.

The first research priority is better measurement of the supply of short capacity. Scholars need datasets on borrow availability, collateral composition, stablecoin dependence, prime brokerage concentration, and the distribution of market-making balance sheet across venues. Without this, theories of constraints remain suggestive rather than decisive.

The second priority is the comparative study of instruments. Which kinds of shorting improve price discovery most effectively: spot borrowing, regulated futures, offshore perpetuals, options, or DeFi synthetic positions? Which generate the highest leverage externalities? The answer is unlikely to be uniform across assets or jurisdictions.

The third priority is dynamic crowding. Funding rates and open interest are widely observed, but we know less about who enters when those prices change, how persistent the supply of short exposure is, and under what conditions carry traders retreat.

The fourth priority is the stablecoin and tokenized-cash nexus. How do changes in collateral quality, reserve regulation, or tokenized safe-asset products affect the availability and cost of shorting? This is a natural bridge between crypto finance and modern monetary economics.

The fifth priority is DeFi governance. More work is needed on whether permissionless shorting truly broadens effective access or mainly creates new opportunities for technically sophisticated actors. Governance concentration, oracle dependence, and front-end control all deserve closer study.

The sixth priority is cross-venue contagion. Researchers should map how liquidations, collateral shocks, and exchange-specific disruptions propagate across the broader system. This requires integrating on-chain and off-chain data and moving beyond single-venue studies.

The seventh priority is welfare evaluation. Not all increases in shorting are socially beneficial. Scholars need criteria for distinguishing good market completion from bad fragility. Candidate criteria include improved informational efficiency, reduced long-side overvaluation, enhanced hedging for real users, lower manipulation risk, and resilience under stress.

The eighth priority is law and economics. Bankruptcy treatment of customer collateral, enforceability of derivatives claims, segregation of assets, and the legal status of tokenized collateral all influence the real cost of shorting. These issues remain understudied relative to trading data.

The ninth priority is historical and comparative analysis. Crypto offers a chance to compare how shorting evolves in an asset class born digital, globally fragmented, and politically contested. That comparative perspective can feed back into broader theories of speculation and market design.

## 20. Conclusion

Short selling is one of the clearest lenses through which to understand the evolution of cryptocurrency markets. It reveals how disagreement enters prices, how arbitrage capital is organized, how leverage is funded, how collateral circulates, how platforms compete, and how stress propagates. A crypto market without shorting is structurally incomplete. A crypto market with abundant but poorly designed shorting can be dangerously fragile. The literature reviewed here suggests that the true question is not whether bearish trading is desirable in the abstract, but how its institutions are built.

The most important takeaway is that crypto shorting is not simply a speculative side show. It is part of the core architecture of digital finance. Once negative exposure becomes scalable through futures, perpetuals, options, lending, and DeFi, the market changes character. Prices become more contestable, hedging becomes more feasible, basis markets emerge, and collateralized intermediation deepens. At the same time, liquidation spirals, stablecoin dependence, venue risk, and cross-market contagion become more important.

For scholars, this means shorting should move from the margin to the center of crypto research. For policymakers, it means that debates over leverage, derivatives access, stablecoins, and market integrity are all, in part, debates about the social design of pessimism. For market participants, it means that taking a short position in crypto is never just a directional wager. It is an exposure to a whole institutional stack.

## Appendix A. Taxonomy of crypto shorting mechanisms

A useful taxonomy distinguishes shorting mechanisms along four dimensions: whether the trader must borrow the underlying, whether the position is margined with fiat or digital collateral, whether execution is centralized or decentralized, and whether the exposure is linear or nonlinear.

The first category is physical or spot shorting, where the trader borrows the underlying token and sells it. The core risks are borrow availability, recall, collateral haircuts, and settlement logistics.

The second category is standardized futures shorting. Here the trader need not locate the spot asset but must manage basis, expiration, margin calls, and benchmark quality.

The third category is perpetual-swap shorting. This is the dominant crypto-native format for scalable directional shorts. It relies on funding rates, continuous margining, liquidation rules, and exchange-specific risk engines.

The fourth category is options-based shorting, including long puts, short calls, spreads, and structured downside products. These positions introduce implied-volatility and convexity considerations.

The fifth category is synthetic shorting through inverse tokens or structured notes. These products simplify access but may obscure rebalancing and path dependence.

The sixth category is DeFi shorting through borrowing, synthetic issuance, or decentralized perpetual exchanges. Here the key issues are overcollateralization, smart-contract risk, oracle design, and protocol governance.

This taxonomy matters because each category differs in who can access it, what type of information it helps impound into prices, and which externalities it creates.

## Appendix B. Historical episodes and what they teach about shorting

### B1. The pre-derivatives era: disagreement without scalable pessimism

The earliest era of cryptocurrency markets, roughly the first half of the 2010s, is analytically important because it reveals how prices behave when disagreement is high but scalable negative exposure is weak. Bitcoin already attracted both ideological believers and sharp skeptics, yet the set of instruments available to skeptics was small. Most trading was spot based. Borrowing mechanisms were relationship driven. Venue quality was uneven. Custody was operationally difficult. Under these conditions, bearish conviction did not easily translate into tradable pressure.

This period offers a useful benchmark for later literature. If one believes early crypto prices were heavily shaped by narrative enthusiasm, the lack of mature shorting mechanisms provides a plausible institutional explanation. At the same time, this era demonstrates that market incompleteness can coexist with genuine uncertainty about fundamentals. Skeptics were not necessarily prevented from identifying intrinsic value; often there was no consensus metric of intrinsic value to begin with. The pre-derivatives era therefore joins disagreement theory with deep valuation ambiguity.

### B2. The launch of major Bitcoin futures

The launch of major Bitcoin futures venues marked a turning point because it gave a wider class of traders a standardized route to negative exposure. The event has become canonical in the literature for a reason. It is one of the cleanest natural experiments in whether easier shorting changes a celebrated and controversial market.

What the episode teaches is not that futures immediately solved crypto pricing, but that derivatives changed the ecology of participation. More institutions could hedge or speculate without handling spot custody. More public attention focused on term structure, basis, and the relation between regulated and offshore markets. The event also made it easier to pose research questions in familiar finance language: Did spot prices adjust? Did volatility fall or rise? Did price discovery migrate? Did futures allow pessimistic information to enter more efficiently?

The answer has varied across studies and sample windows, but the broader lesson is stable: once a crypto asset gains credible derivatives, it stops being a purely one-sided retail object. That shift is institutionally significant even if the empirical magnitude of price effects remains debated.

### B3. The rise of offshore perpetual-swap complexes

If regulated futures brought crypto closer to traditional finance, offshore perpetual-swap markets did something different. They created a natively crypto form of shorting and leverage optimized for always-open global trading. This was not a marginal development. In many periods, perpetuals became the dominant venue for price leadership, leverage accumulation, and short-term speculation.

The rise of perpetuals teaches at least four lessons. First, demand for continuous leveraged exposure was stronger than demand for the cleaner but less flexible structures of standard futures. Second, the pricing of shorting became public through funding rates, creating a new empirical literature on directional crowding. Third, contract design itself became a source of market dynamics, especially through liquidation rules and insurance funds. Fourth, a large share of crypto shorting migrated to venues outside the core architecture of heavily regulated finance.

This institutional trajectory matters for policy. It means the dominant form of bearish exposure in crypto did not emerge from the transplantation of traditional market design, but from a more experimental and globally mobile platform ecology.

### B4. The 2021 bull market and the politics of positive funding

The 2021 boom is a rich case study because it illustrates what happens when shorting exists at scale yet the market remains dominated by optimistic leverage. Funding rates in perpetuals often stayed strongly positive, indicating that longs were paying shorts for the privilege of leveraged bullishness. Basis trades proliferated. Arbitrageurs supplied negative exposure in exchange for carry. Yet prices kept rising for extended periods.

This episode teaches that the presence of shorting does not mechanically eliminate exuberance. Instead, it changes the terms on which exuberance is financed. Traders able to short could earn funding by providing the other side of long demand, but they still faced the classic risk of being right too early or being exposed to venue and collateral shocks. The market thus looked more complete than in earlier cycles, but not complete enough to erase momentum-driven optimism.

A further lesson is that carry-oriented short supply can differ from conviction-based bearishness. A basis trader long spot and short perpetual is not necessarily pessimistic about long-run value. Yet that trader still supplies shorting capacity. The 2021 episode therefore underlines the importance of distinguishing the motive for short positions from the market function those positions perform.

### B5. The May 2021 and June 2022 liquidation episodes

Sharp crypto drawdowns accompanied by large liquidation volumes demonstrate the dual nature of shorting infrastructure. On one hand, liquid derivatives and visible funding rates make markets more two sided. On the other hand, when leverage is high, the same infrastructure can amplify corrections through mechanical position closure.

The 2021 and 2022 liquidation episodes showed how quickly crypto can move from exuberant leverage to forced deleveraging. Long liquidations dominated many of these events, benefiting some shorts ex post, but the broader lesson for the shorting literature is more general: any leverage system that scales through automated liquidation is inherently state dependent. The same rules that keep markets functioning in calm periods can produce abrupt cascades when volatility rises.

These episodes also exposed cross-venue spillovers. Liquidations in one exchange or protocol influenced prices elsewhere through arbitrage, collateral sales, and benchmark linkages. Thus the relevant object is not the liquidation rule of a single venue but the network formed by many venues with overlapping participants and shared reference prices.

### B6. The Terra-Luna collapse and stablecoin-linked bearishness

The collapse of Terra-Luna is indispensable to a literature review on crypto shorting because it concentrated several themes at once: speculative reflexivity, stablecoin architecture, derivatives, basis dislocation, and the role of bearish positioning in revealing fragile systems. The episode showed that some crypto structures are vulnerable not merely to adverse information but to a rapid collapse of the very mechanism that sustained demand.

For the economics of shorting, Terra is important in three ways. First, it demonstrates the value of bearish pressure in challenging unsustainable systems. Second, it shows that shorting around complex token ecosystems involves more than price direction; it involves understanding redemption design, governance, reflexive collateral, and liquidity migration. Third, it reveals how shorting a crypto system can become entangled with broader questions about digital money and runs.

### B7. The FTX failure and the rediscovery of venue risk

The failure of FTX is one of the most consequential events for the study of crypto shorting because it reintroduced an old lesson from finance in especially vivid form: the ability to take a position is not separable from the solvency and governance of the institution intermediating it. Traders may have had the correct directional view on many assets, yet their realized outcomes depended on whether collateral was segregated, whether withdrawals remained open, and whether the platform’s liabilities were sound.

For shorting theory, this event reinforces the argument that crypto constraints are often institutional rather than purely financial. Even a seemingly deep derivatives market can stop being a reliable venue for pessimistic price discovery if the platform itself becomes the dominant source of risk. The failure also affected the supply side of shorting by reducing confidence in exchange credit and increasing demand for safer collateral and custody.

### B8. Stablecoin depegs and the collateral shock channel

Episodes of stablecoin stress show why shorting in crypto cannot be understood without monetary economics. When a major stablecoin depegs or faces confidence pressure, the impact is not limited to payments or cash parking. The event affects derivatives margining, basis trades, lending protocols, and the willingness of arbitrageurs to maintain positions.

The key lesson is that a trader may be directionally right about a crypto asset but still vulnerable to a shock in the digital cash used to collateralize that view. This is a major difference from many traditional asset markets, where the financing leg is more likely to rest on bank money or sovereign collateral. Stablecoin stress episodes therefore expose the hidden balance sheet beneath bearish capacity.

### B9. Memecoin squeezes and the sociology of anti-short politics

Highly speculative token episodes, especially those centered on memes, online coordination, or celebrity attention, offer a modern theater for short squeezes. In such settings, the hostility toward shorts is often explicit. Communities frame bearish traders as enemies of the project or of the culture surrounding it. The resulting market is as much sociological as financial.

These episodes matter because they challenge any purely rationalistic account of shorting. Traders may face not only funding and liquidation risk but organized social opposition. The symbolic politics of “punishing shorts” can itself become part of price formation. Crypto therefore extends the literature on disagreement into domains where identity and online collective action matter materially.

### B10. The post-2023 institutionalization of basis and treasury strategies

A more recent chapter in the history of crypto shorting concerns the growth of institutional basis strategies, treasury management, and the convergence of crypto markets with tokenized safe assets and more conservative collateral practices. This development suggests a maturation of bearish capacity. Some traders and institutions now approach shorting not as a dramatic bet against crypto’s future but as one leg in a carry, hedging, or balance-sheet optimization strategy.

This is an important shift. It implies that the social meaning of shorting changes as markets mature. In early cycles, shorts are often seen as ideological opponents or heroic skeptics. In later phases, a large share of shorting may simply reflect normal financial intermediation: yield capture, inventory management, hedging, and cross-market arbitrage. The review literature should treat this normalization as one of the major structural transitions in digital asset markets.

## Appendix C. Asset-specific ecologies of shorting

### C1. Bitcoin

Bitcoin remains the central case in the shorting literature because it combines the deepest derivatives markets, the richest institutional history, and the strongest overlap between ideological narratives and macro trading. Shorting Bitcoin differs from shorting smaller tokens because liquidity is thicker, basis markets are deeper, and a wider range of institutions can participate. At the same time, the asset’s symbolic centrality means that bearish positions in Bitcoin often carry broader macro narratives about liquidity, inflation hedging, or digital-gold claims.

### C2. Ether

Ether occupies a distinct position because it is both a traded asset and the native economic substrate of major DeFi and smart-contract ecosystems. Shorting Ether therefore interacts more directly with on-chain activity, staking, protocol usage, and the valuation of application-layer finance. The rise of staking and liquid staking derivatives adds another layer, because traders can be long staked yield while short price exposure or construct relative-value trades around ETH and its derivatives.

### C3. Large alternative layer-1 tokens

Large non-Bitcoin, non-Ether tokens often have meaningful derivatives markets but thinner borrow and weaker institutional support. Their shorting ecologies are therefore more fragile. Funding can become extreme, liquidity can evaporate faster, and concentrated ownership can create sharper squeeze risk. These assets are especially useful for studying how partial market completion differs from the deeper infrastructures built around benchmark coins.

### C4. Exchange tokens and platform-affiliated assets

Exchange tokens raise unique issues because the platform supporting derivatives may also be economically connected to the underlying asset. Shorting such tokens can involve not only directional risk but governance and conflict-of-interest concerns. If the same organization influences listings, market making, collateral acceptance, or public narratives, the institutional neutrality of price discovery may be weakened.

### C5. Stablecoins

In the strict sense, stablecoins are often shorted through redemption arbitrage, basis positions, or relative-value trades rather than through directional bearishness about long-term appreciation. Still, they belong in this taxonomy because shorting stablecoins or synthetic dollars reveals how negative exposure works when the target asset aspires to par. The economics then shift toward redemption credibility, reserve transparency, and run risk.

### C6. Governance tokens and DeFi-native assets

Governance tokens pose especially difficult shorting problems. Their value may depend on fee claims, control rights, token emissions, protocol narratives, and reflexive liquidity mining incentives. Derivatives coverage is often thinner, making these assets more susceptible to disagreement-driven overvaluation and more dangerous to short. Yet they are also among the assets where bearish scrutiny may be most socially valuable.

### C7. Meme coins

Meme coins are perhaps the purest form of socially coordinated speculation in crypto. They often have weak or nonexistent fundamental narratives in the traditional sense, which might seem to make them ideal short candidates. In practice, however, they can be extremely dangerous to short because price dynamics are driven by attention, coordination, thin order books, and community identity. For the literature, they are useful examples of how social risk becomes financial risk under leverage.

### C8. Tokenized real-world and yield products

As tokenized Treasury products, tokenized funds, and structured yield products become more important, the shorting literature may increasingly split between pure crypto assets and tokenized financial claims. Shorting a tokenized Treasury fund is economically very different from shorting a meme coin, even if both trade on digital rails. This divergence suggests that future research will need more asset-specific theory rather than generic claims about “crypto shorting.”

## Appendix D. Extended controversies in the literature

### D1. Does more shorting always improve market quality?

One influential view holds that easier shorting must improve market quality because it corrects one-sided optimism. The opposing view is that in highly levered markets, more shorting may simply create more liquidation channels and more opportunities for predatory trading. The literature increasingly suggests that both views are incomplete. Market quality depends on the form of shorting, the collateral used, and the governance of venues.

### D2. Are perpetual swaps efficient innovations or instability machines?

Perpetual swaps solve a genuine problem by offering continuous leveraged exposure without frequent rollovers. They also make the price of directional crowding visible through funding. But their dominance may come with costs: leverage concentration, public liquidation maps, and dependence on exchange risk engines. Whether they should be regarded as a superior market design remains contested.

### D3. Does DeFi democratize bearish access?

Permissionless protocols allow wider formal access to shorting, yet effective participation still requires technical knowledge, high-quality collateral, and tolerance for governance and smart-contract risk. The controversy is therefore not whether access is broader in principle, but whether it is broader in a welfare-relevant sense.

### D4. Are stablecoins infrastructure or hidden fragility?

Stablecoins enable margining, basis trades, and collateral mobility. Without them, much crypto shorting would be less scalable. Yet their role also concentrates the market’s dependence on private digital liabilities. The controversy is whether they should be viewed mainly as helpful infrastructure or as a shadow-banking layer embedded inside leverage markets.

### D5. Are short sellers disciplinarians or predators?

The literature has long recognized that short sellers can expose fraud and overvaluation, but in thin or socially coordinated markets they can also be accused of exploiting fragility or spreading panic. Crypto intensifies this debate because disclosure is weaker and narratives are more important. The challenge is to distinguish informationally valuable skepticism from manipulative attacks without suppressing the former.

### D6. Does institutionalization reduce or increase fragility?

As crypto shorting becomes more institutionalized through better collateral, prime brokerage, and tokenized safe assets, one might expect fragility to fall. Yet institutionalization can also scale leverage and connect crypto more tightly to broader funding conditions. Thus greater maturity does not necessarily imply greater stability.

### D7. Should regulators favor regulated derivatives over offshore access?

A common policy intuition is that if users need short exposure for hedging and price discovery, regulators should channel them toward supervised venues rather than tolerate migration to opaque offshore platforms. But this approach can leave many users effectively excluded, especially globally. The literature has not settled the tradeoff between safer channels and broader access.

### D8. Is overpricing still the right organizing concept?

Many papers frame shorting through the lens of overpricing and bubbles. Yet for assets with weak intrinsic anchors, the more useful concepts may be disagreement, narrative sensitivity, and institutional asymmetry rather than strict mispricing. The controversy is partly semantic, but it shapes research design and interpretation.

### D9. Are crypto shorts becoming ordinary carry trades?

As basis strategies and funding arbitrage mature, a larger share of short exposure may come from traders who are not fundamentally bearish. Some see this as a sign of market development. Others worry it means shorting becomes more balance-sheet dependent and potentially more fragile if carry capital exits suddenly.

### D10. Can crypto provide general lessons for finance?

A final controversy concerns external validity. Is crypto shorting merely a curiosity in a speculative niche, or a useful laboratory for broader theories of leverage, collateral, and market design? The answer increasingly leans toward the latter. Crypto is unusual, but its institutional modularity makes general mechanisms unusually visible.

## Appendix E. Annotated literature map I: Classic short-selling and limits-to-arbitrage theory

### E1. Miller’s disagreement logic

The foundational insight associated with Miller is that when investors disagree and pessimists are constrained from shorting, prices reflect the valuations of the marginal optimists. This logic is indispensable in crypto, where belief dispersion is high and the practical ability to short developed only gradually. Much of the early crypto-bubble discussion implicitly relies on this framework even when it does not cite it directly.

### E2. Diamond and Verrecchia on short-sale constraints and price adjustment

Diamond and Verrecchia’s work complicates the idea that short-sale constraints necessarily produce simple overpricing. Instead, constraints may slow the incorporation of negative information and alter how prices respond to news. This distinction matters in crypto because empirical studies often look for event-time responses rather than static valuation gaps.

### E3. De Long, Shleifer, Summers, and Waldmann on noise traders

The noise-trader literature highlights the risk that arbitrageurs face when prices are driven by sentiment that can intensify before reversing. This is particularly relevant to crypto, where narratives, retail coordination, and momentum can generate long deviations from skeptical valuations. Shorts may be directionally correct but financially constrained by path risk.

### E4. Shleifer and Vishny on limits of arbitrage

The limits-to-arbitrage framework is central to understanding why deepening shorting does not fully eliminate crypto exuberance. Professional traders managing outside capital may be unwilling to bear the interim volatility and funding risk associated with short positions in reflexive markets. This is one of the strongest bridges from traditional finance theory into crypto.

### E5. Abreu and Brunnermeier on bubbles and synchronization

Abreu and Brunnermeier show that rational arbitrageurs may ride bubbles if they expect others not to attack immediately. This is highly relevant to crypto, where short sellers may believe prices are excessive but still wait because timing an unwind is difficult. The theory helps explain why market completeness does not automatically imply early correction.

### E6. Scheinkman and Xiong on overconfidence and speculative trade

The speculative-trade literature emphasizes resale options and heterogeneous beliefs. In crypto, many assets derive value partly from the expectation that they can later be sold to more optimistic buyers. Easier shorting should, in principle, challenge this logic, but only if pessimists can scale positions without unbearable risk.

### E7. Harrison and Kreps on speculative pricing

Harrison and Kreps provide an early framework for pricing under disagreement when resale opportunities matter. The relevance to crypto lies in the notion that an asset’s price may embed the option to sell into future optimism. Short-sale constraints intensify this effect by limiting the countervailing pressure from skeptics.

### E8. Jones and Lamont on hard-to-borrow assets

The literature on hard-to-borrow equities links borrow scarcity to future returns and pricing distortions. Crypto adapts this insight through borrow fees, basis, and funding rates. While the institutional details differ, the general logic that scarce pessimistic capacity can be priced remains highly relevant.

### E9. Asquith, Pathak, and Ritter on borrowing and short interest

Empirical work on short interest and borrowing costs provides a model for how crypto research might better measure the supply side of bearish capacity. Crypto studies often focus on prices and derivatives open interest but less often on who can actually source and maintain spot or synthetic shorts.

### E10. Brunnermeier and Pedersen on market and funding liquidity

Their model of interacting market liquidity and funding liquidity is arguably one of the most transferable frameworks for crypto shorting. When prices move, margins tighten and traders reduce positions, worsening price impact. Crypto liquidation cascades are a vivid real-time version of this mechanism.

### E11. Duffie on asset pricing with search and over-the-counter frictions

Duffie’s work is useful for thinking about OTC borrowing and fragmented lending relationships in early crypto. Before deep standardized derivatives, the ability to short often depended on search, bilateral trust, and counterparty-specific arrangements.

### E12. Hong and Stein on differences of opinion and short-sales constraints

Hong and Stein’s contributions help connect disagreement, momentum, and delayed correction. Crypto markets, where sentiment and trend following are strong, provide fertile ground for these mechanisms. The literature suggests that shorting may reduce but not erase these effects.

### E13. Simsek on belief disagreements and leverage

Simsek’s work highlights how disagreement interacts with leverage to produce welfare-relevant distortions. In crypto, this interaction is visible not only in long leverage but also in the leverage used to support or attack overvalued positions.

### E14. Lamont on go-down-fighting strategies

Lamont’s discussion of predatory or activist shorting resonates with crypto’s political economy. Bearish traders may see themselves as exposing weakness, while projects and communities may view them as destabilizing enemies. This tension is old, but crypto gives it a new and more openly social form.

### E15. The general lesson from classic theory

Taken together, the classic literature implies that crypto should not be judged by the simplistic standard of whether shorting exists. What matters is whether pessimists can trade at scale without prohibitive funding, institutional, or path-dependent risk. Once that question is asked, crypto becomes a remarkably rich setting for old theories rather than an exception to them.

## Appendix F. Annotated literature map II: Crypto market structure, derivatives, and pricing

### F1. Nakamoto and the absence of a shorting architecture

The Bitcoin white paper created the monetary and payment architecture but said essentially nothing about the market institutions later required for two-sided trading. This omission is unsurprising, yet it matters conceptually. The original design solved double spending, not disagreement aggregation. The shorting ecosystem had to be built later by exchanges, lenders, and derivative platforms.

### F2. Yermack on whether Bitcoin is money

Yermack’s early economic appraisal framed Bitcoin in terms of volatility, monetary function, and institutional deficiency. Although not mainly about shorting, it helps explain why the ability to short became important: an asset with uncertain monetary status and extreme volatility invites disagreement.

### F3. Baur, Hong, and Lee on Bitcoin as asset versus medium of exchange

This line of research is relevant because the more an asset behaves like a speculative vehicle rather than a transactional medium, the more shorting becomes central to its price formation. If demand is largely speculative, one-sided access can have particularly strong effects.

### F4. Makarov and Schoar on fragmented trading and arbitrage

Research on crypto market fragmentation shows that price discrepancies persist even in large assets. This supports the view that shorting and arbitrage are institutionally constrained rather than frictionless. The shorting literature gains from this by treating venue segmentation as a first-order variable.

### F5. Liu and Tsyvinski on crypto risk-return properties

Asset-pricing work on crypto returns helps situate shorting within broader expected-return debates. If crypto has unique factor exposures or momentum dynamics, the profitability and risk of short strategies must be interpreted in that context.

### F6. Huberman, Leshno, and Moallemi on Bitcoin market economics

Their analysis of the Bitcoin payment system and pricing contributes to understanding the relation between fundamental use and speculative valuation. The weaker or more contested the use anchor, the more disagreement and hence shorting capacity may matter.

### F7. Cong, Li, and Wang on tokenomics

The tokenomics literature shows that some crypto assets embed platform-adoption dynamics and endogenous demand mechanisms. Shorting such assets is not simply a bet against price; it is a bet against network growth, incentive design, or governance.

### F8. Corbet, Lucey, Urquhart, and Yarovaya on crypto as financial asset

Survey work on crypto as a financial asset provides a broad backdrop for shorting research by emphasizing volatility, diversification claims, and speculative episodes. Shorting belongs naturally in this conversation because it shapes how these properties are expressed and traded.

### F9. Studies on futures introduction and Bitcoin price discovery

The literature on Bitcoin futures introduction asks whether regulated derivative listing changed spot dynamics and volatility. These papers form the direct bridge between general derivatives-introduction theory and crypto’s most important natural experiment in scalable bearish access.

### F10. Studies on perpetual funding and derivative leadership

A large emerging literature studies perpetual funding, basis, and lead-lag relations between spot and derivatives. For this review, these papers are indispensable because they quantify the price of short capacity and the informational role of perpetual markets.

### F11. Work on liquidation cascades and exchange microstructure

Microstructure studies of liquidations, mark prices, and order-book dynamics help explain why the same shorting system that improves market completeness may also create abrupt feedback loops. These studies are among the most policy-relevant in the field.

### F12. Work on stablecoins as safe assets

Research on stablecoins as crypto safe assets matters directly for shorting because stablecoins often serve as the collateral base for derivatives and lending. A review focused on bearish exposure must therefore include stablecoin economics.

### F13. Work on DeFi market design

The DeFi literature shows how lending, automated market makers, oracle systems, and on-chain perpetuals redesign shorting infrastructure. These papers expand the scope of the review beyond centralized exchanges.

### F14. Work on exchange failure and counterparty risk

Research and post-mortem analysis of exchange failures underscore that the ability to express a short view is constrained by platform solvency and governance. This literature pushes shorting research beyond price formation into institutional trust.

### F15. The general lesson from crypto-specific research

Crypto research demonstrates that bearish capacity is not a thin add-on to an otherwise complete market. It is produced through a layered stack of derivatives design, collateral, venue quality, and legal or quasi-legal governance. That is the defining contribution of the field.

## Appendix G. Annotated literature map III: Stablecoins, DeFi, regulation, and systemic boundaries

### G1. Gorton and Zhang on stablecoins

The stablecoin literature is central to shorting because stablecoins are often the operational cash of crypto leverage. Work emphasizing stablecoins as analogues to unstable private money provides a framework for understanding why collateral quality matters so much for bearish capacity.

### G2. Lyons and Viswanath-Natraj on what keeps stablecoins stable

This research helps identify the economic mechanisms sustaining confidence in digital dollars. Because short positions are frequently margined in these instruments, their stability is part of the effective cost of bearish trading.

### G3. Garratt and van Oordt on stablecoins as crypto safe assets

Viewing stablecoins as crypto safe assets highlights how the collateral needs of trading and settlement create endogenous demand for quasi-money. Shorting is one of the clearest practical uses of that demand.

### G4. Sch?r on DeFi markets

Survey work on DeFi clarifies how lending, collateralization, and automated execution create a permissionless version of leveraged trading. Shorting is embedded in these mechanisms even when papers discuss the ecosystem more broadly.

### G5. Zetzsche, Arner, and Buckley on DeFi regulation

The legal-regulatory literature matters because permissionless shorting complicates standard intermediary-based oversight. A review of bearish exposure in crypto must confront this change in regulatory target.

### G6. Harvey, Ramachandran, and Santoro on DeFi and the future of finance

This broader treatment of DeFi is useful because it frames on-chain leverage and trading within a larger institutional transformation. Shorting is not isolated in DeFi; it is one use case among many in a modular financial stack.

### G7. BIS work on tokenized money and collateral

Official-sector work on tokenization and the future monetary system, while not focused specifically on shorting, is increasingly relevant. If tokenized deposits or safe assets become important collateral for digital trading, the monetary architecture of shorting changes.

### G8. IOSCO and FSB on crypto market risk

International standard-setting bodies have increasingly framed crypto derivatives, leverage, and market fragmentation as policy concerns. Their reports are important because they treat shorting as part of system architecture rather than a niche speculative topic.

### G9. SEC and CFTC perspectives on digital asset derivatives

U.S. regulatory approaches to futures, options, and digital asset classification influence which forms of shorting gain legitimacy and scale. They also affect whether risk migrates to offshore venues.

### G10. MiCA and the European DLT framework

European regulatory developments matter not only for spot token markets but for the longer-run question of how tokenized assets, stablecoins, and digital infrastructure will interact with hedging and leverage. The architecture of legal digital money has implications for shorting even if not always discussed in those terms.

### G11. Research on exchange governance and proof-of-reserves

Post-crisis analysis of exchange governance matters because short sellers depend on venues to hold collateral, settle contracts, and enforce liquidations. Trust in these institutions is therefore an input into the market for pessimism.

### G12. Studies of protocol governance and oracle dependence

DeFi-specific research on governance and oracle design helps explain why permissionless shorting is not frictionless. Negative exposure becomes contingent on decentralized political economy and data quality.

### G13. Work on financial stability and crypto leverage

Macro-financial studies connecting crypto leverage to market instability are highly relevant to the welfare analysis of shorting. They remind researchers that bearish capacity and system resilience need not move together monotonically.

### G14. Work on cross-border payments and digital collateral

Research on digital money, settlement, and tokenized collateral offers a forward-looking agenda. As the collateral base of digital markets evolves, the shorting literature will increasingly overlap with central-bank, payment-system, and wholesale-market design questions.

### G15. The general lesson from the boundary literatures

The literatures on stablecoins, DeFi, and regulation show that crypto shorting sits on a moving boundary between speculative trading and monetary infrastructure. This boundary is where some of the most important future research will occur.

## Appendix H. Empirical templates and testable hypotheses

### H1. Event study of derivatives listing

One template studies spot returns, volatility, liquidity, and cross-venue dispersion around the launch of futures or perpetuals. The goal is to identify whether scalable shorting changes price discovery and valuation dynamics.

### H2. Margin-policy natural experiments

When an exchange tightens or loosens leverage limits, researchers can study how funding, basis, volume, and volatility respond. Such policy shifts reveal the elasticity of short and long demand.

### H3. Stablecoin shock identification

Episodes of stablecoin depegging or reserve news create quasi-experiments for testing how collateral quality affects shorting capacity, open interest, and arbitrage spreads.

### H4. Exchange failure and migration analysis

Major platform disruptions can be used to study whether bearish capacity relocates smoothly or whether markets temporarily lose pricing discipline when a key venue disappears.

### H5. On-chain liquidation network models

DeFi data allow network analysis of how liquidations propagate across protocols. This can help distinguish local from systemic liquidation effects.

### H6. Funding-rate crowding models

Panel models can test whether extreme funding predicts subsequent returns, volatility, or liquidation intensity, and whether these relationships vary by asset class and market regime.

### H7. Borrow-fee and basis interaction tests

Where spot borrow data are available, researchers can compare borrow fees with derivative-based measures of short scarcity to study substitution across instruments.

### H8. Governance-quality pricing tests

Do venues with stronger transparency, proof-of-reserves, or better segregation attract more balanced open interest and lower distortionary funding? This remains an open empirical question.

### H9. Retail versus institutional access experiments

Regulatory or venue-specific access changes can reveal whether market quality improves when more sophisticated or more constrained participants gain or lose the ability to short.

### H10. Hypothesis on state-dependent market completeness

A central hypothesis of this review is that crypto market completeness is cyclical: deep in calm periods, shallow in stress. Researchers can test this by studying the behavior of basis and cross-venue convergence during crises.

### H11. Hypothesis on stablecoin dependence

Another hypothesis is that the cost of shorting rises sharply when trusted digital cash becomes scarce or uncertain. This can be tested through collateral and funding episodes.

### H12. Hypothesis on instrument heterogeneity

A further hypothesis is that not all shorting is equally informative. Spot borrowing, regulated futures, offshore perpetuals, and DeFi synthetic shorts should differ in how strongly they improve price discovery and how strongly they amplify fragility.

## Appendix I. Comparative essays on the institutional economics of different shorting pathways

### I1. Spot borrow versus futures: purity versus scalability

A useful way to compare shorting instruments is to ask which frictions they remove and which they introduce. Spot borrowing removes little abstraction. The trader borrows the asset, sells it, and must later buy it back. In that sense, it is the purest negative exposure. But its scalability is limited by lendable supply, custody logistics, and counterparty risk. Futures, by contrast, abstract away from the need to source the asset directly. They are therefore more scalable and institutionally legible for many participants. Yet they introduce basis risk, expiration management, and benchmark dependence. The key economic contrast is not simplicity versus complexity in a general sense, but purity of directional exposure versus scalability of market access. This distinction helps explain why spot borrow is analytically important even when derivatives dominate volume.

### I2. Perpetual swaps versus standard futures: continuity versus discipline

Perpetual swaps have obvious practical advantages in an always-open retail-heavy market. They provide continuous exposure, avoid roll dates, and quickly reveal directional crowding through funding rates. Standard futures impose more discipline through expiries, clearer term structures, and sometimes more institutionalized collateral practices. From a welfare perspective, the question is whether the convenience of perpetuals outweighs the instability associated with permanent leverage and highly visible funding incentives. The literature increasingly suggests that perpetuals are superior for accessibility but not necessarily for resilience. Their very success may reflect a market preference for convenience over institutional conservatism.

### I3. Options versus linear shorts: bounded loss versus expensive insurance

Options-based bearishness differs from outright shorting because downside views can be expressed with convex and sometimes loss-bounded structures. This makes options valuable where squeeze risk is acute. Yet options are not a free substitute for shorts. In a market with high implied volatility and expensive crash insurance, puts can be costly and may decay rapidly if timing is wrong. For that reason, options often serve institutions and sophisticated traders better than mass-market participants. They contribute to market completeness, but not equally across user types.

### I4. Centralized exchanges versus DeFi protocols: governance substitution

The contrast between centralized and decentralized shorting is often described as intermediation versus disintermediation. A more precise interpretation is governance substitution. Centralized exchanges bundle discretion, risk management, custody, and enforcement inside an organization. DeFi protocols distribute these functions across code, collateral rules, oracles, and governance processes. Neither regime is frictionless. Centralized venues expose traders to insolvency and opaque conflicts; DeFi exposes them to oracle design, governance capture, and overcollateralization. The comparison is therefore not institution versus no institution, but different institutional technologies for making shorting possible.

### I5. Offshore leverage versus regulated access: breadth versus protection

Offshore platforms often offer broader product access, higher leverage, and faster product innovation than tightly regulated venues. This can make them important suppliers of shorting capacity. Yet the cost is weaker legal recourse and potentially weaker prudential controls. Regulated venues may offer safer access but narrower product sets and higher compliance barriers. The economic tradeoff is between breadth of negative exposure and quality of institutional protection. The literature implies that suppressing offshore access without building credible regulated alternatives may shrink socially useful hedging and arbitrage along with reckless speculation.

### I6. Stablecoin collateral versus fiat collateral: mobility versus hierarchy risk

Stablecoins have one overwhelming advantage as collateral: mobility. They move across venues and protocols more easily than bank wires and can sit natively inside digital market infrastructure. This expands the practical scope of shorting. But mobility comes with hierarchy risk. Stablecoins are private liabilities of varying quality, not neutral cash. Their reserve design, redemption rules, and legal status matter. A short position margined in stablecoins therefore embeds a second-order exposure to the safety of digital money. This is one of the most important institutional differences between crypto and many traditional derivatives markets.

### I7. Small-cap token shorting versus benchmark-asset shorting

Shorting Bitcoin or Ether is economically different from shorting a thin governance token or meme coin. In benchmark assets, derivatives are deeper, liquidity providers are more numerous, and institutional participation is broader. In smaller tokens, borrow may be unavailable, perpetuals may be thin, benchmarks may be manipulable, and ownership may be concentrated. The result is that the social value of shorting and its private risk profile both become more extreme in smaller assets. Skeptical pricing may be most needed where it is hardest to provide safely.

### I8. Directional shorts versus basis shorts

A recurring mistake in public debate is to identify all shorts with outright bearish conviction. In practice, much short exposure in crypto is supplied by basis traders seeking carry rather than directional gains. This matters because the same notional short interest can have very different implications depending on motive. Directional shorts are likely to respond strongly to information about long-run value; basis shorts respond more to funding, collateral, and relative pricing. A mature literature must keep this distinction visible.

### I9. Retail-accessible products versus institutional workflows

Products designed to make shorting easy for retail users often rely on simplified wrappers, embedded leverage, or opaque rebalancing. Institutional workflows, by contrast, may involve more cumbersome but more transparent combinations of spot, futures, options, and custody. The comparison reveals a deeper tension in crypto finance: accessibility is often purchased by moving complexity out of sight rather than by reducing it. From a market-quality perspective, hidden complexity can be more dangerous than explicit complexity.

### I10. Open participation versus suitability screening

Crypto culture often celebrates open access to all financial functions, including shorting. Yet some traditional frictions serve suitability or prudential purposes. The question is not whether gatekeeping is always justified, but whether removing it without replacing it creates welfare gains or simply exposes more users to liquidations they do not fully understand. This debate is especially salient in leveraged bearish products, where losses can compound quickly.

### I11. Information efficiency versus liquidation fragility

Many shorting instruments improve information efficiency by letting more views enter the market. The same instruments can worsen liquidation fragility by scaling leverage. This tradeoff is perhaps the central normative problem of crypto shorting. It suggests that market design must be judged on both informational and prudential dimensions rather than on abstract commitment to openness or efficiency alone.

### I12. Market completion versus institutional trust

The broadest comparative lesson is that every route to greater market completion also depends on institutional trust. Traders trust lenders, exchanges, stablecoins, protocols, oracles, or legal systems. Crypto sometimes presents itself as reducing trust requirements, but the literature on shorting suggests a more nuanced conclusion: the technology changes where trust sits and how it is monitored. It does not remove trust from the system.

## Appendix J. Extended annotated bibliography A: Foundational finance and short-selling scholarship

### J1. Miller (1977)

Miller’s article remains a cornerstone because it formalizes the intuition that disagreement and short-sale constraints can produce overpricing. For crypto scholars, the paper is not just a historical citation. It offers the most direct conceptual starting point for understanding why early token markets may have reflected optimistic marginal buyers disproportionately. The paper’s continuing value lies in its parsimony: one does not need irrationality to obtain distorted prices, only heterogeneous beliefs and asymmetrically costly expression of those beliefs.

### J2. Diamond and Verrecchia (1987)

Diamond and Verrecchia are essential because they shift the focus from static overpricing to dynamic price adjustment. Their analysis shows that short-sale constraints can slow the incorporation of negative information rather than simply produce permanently inflated prices. This insight is especially useful in crypto event studies, where researchers often examine how markets react to regulatory shocks, hacks, exchange failures, or macro news.

### J3. Harrison and Kreps (1978)

The speculative-pricing logic associated with Harrison and Kreps is particularly relevant for token markets characterized by resale narratives. If an asset is valued partly for the chance to sell later to a more optimistic buyer, then restrictions on pessimistic participation can magnify speculative pricing. Crypto, with its strong narrative and community components, makes this framework newly vivid.

### J4. Scheinkman and Xiong (2003)

Scheinkman and Xiong’s treatment of speculative bubbles under heterogeneous beliefs offers a richer account of why high turnover and disagreement can coexist with elevated prices. Their work helps explain why crypto markets can remain active and seemingly liquid while still exhibiting strong sensitivity to shifts in optimistic sentiment.

### J5. Abreu and Brunnermeier (2003)

The synchronization problem identified by Abreu and Brunnermeier is central to understanding why professional skeptics may not attack perceived crypto bubbles early. Even if sophisticated traders think prices are too high, they may wait for coordination or clearer signals because attacking too early is costly. This logic fits many crypto cycles remarkably well.

### J6. Shleifer and Vishny (1997)

The limits-to-arbitrage framework emphasizes capital constraints, career risk, and interim losses. In crypto, these themes appear through margin calls, funding reversals, exchange risk, and the difficulty of maintaining short positions against strong momentum. The paper remains indispensable because it explains why “smart money” need not correct mispricing promptly.

### J7. De Long, Shleifer, Summers, and Waldmann (1990)

Noise-trader models are highly relevant to crypto, where market narratives and retail flows can drive prices far from what skeptics consider reasonable. The key lesson is that rational arbitrageurs can be constrained by the possibility that sentiment becomes even more extreme before correcting. This is one of the best theoretical explanations for why crypto shorting can be both attractive and dangerous.

### J8. Hong and Stein (2003)

Hong and Stein’s work on differences of opinion, short-sales constraints, and market crashes offers a bridge between valuation and crash dynamics. In crypto, the link between optimistic run-up and subsequent sharp correction is often interpreted through exactly this lens, even when applied in more contemporary terminology.

### J9. Jones and Lamont (2002)

Their analysis of hard-to-borrow stocks shows how borrowing frictions can be informative about future returns and overpricing. Crypto researchers can learn from this literature by treating borrow scarcity, funding spreads, and collateral constraints as signals rather than mere trading costs.

### J10. Asquith, Pathak, and Ritter (2005)

This work is useful because it connects borrowing supply, short interest, and pricing outcomes empirically. Crypto markets need more research of this kind, especially on the supply side of bearish capacity and its relation to subsequent returns or volatility.

### J11. Boehmer, Jones, and Zhang (2008)

The debate over whether short sellers are informed or destabilizing is illuminated by evidence that short sales often predict negative information. For crypto, where public hostility to shorts remains strong, this literature is a necessary reminder that bearish trading can be informationally valuable even when politically unpopular.

### J12. Brunnermeier and Pedersen (2009)

The market-liquidity and funding-liquidity interaction model has extraordinary relevance to crypto. Liquidation cascades, collateral tightening, and basis dislocation in digital markets are vivid examples of their general mechanism. Any serious account of crypto shorting under stress should engage this framework.

### J13. Duffie (2010)

Duffie’s work on over-the-counter frictions is useful for understanding early crypto borrowing markets and continuing institutional fragmentation. Before standardized derivatives became dominant, shorting often depended on search and bilateral trust. Even today, OTC and prime-broker relationships remain important beneath the visible exchange surface.

### J14. Lamont (2012)

Lamont’s broader reflections on go-down-fighting and the politics of bearish activism help frame the sociological side of crypto shorting. In digital asset markets, the reputational and community backlash against skeptics can be intense. This makes the politics of shorting part of the economics.

### J15. Engelberg, Reed, and Ringgenberg (2018)

Their research on the anatomy of short-selling risk is valuable because it disaggregates the channels through which shorting is costly. Crypto adds new channels, but the conceptual move of treating risk as multi-dimensional is exactly right for digital markets where funding, venue, and governance risks coexist.

## Appendix K. Extended annotated bibliography B: Crypto-specific market and derivatives scholarship

### K1. Yermack (2015)

Yermack’s early appraisal remains useful because it framed Bitcoin not only as a technological novelty but as an object of monetary and financial analysis. The paper’s importance for the shorting literature lies in making clear how uncertain Bitcoin’s economic role was, thereby explaining why disagreement would be so strong.

### K2. Chiu and Koeppl (2019)

The economics-of-cryptocurrencies perspective provided by Chiu and Koeppl helps locate shorting within a broader theory of digital asset use and competition. Negative exposure matters because it shapes the pricing of assets whose utility and monetary role remain uncertain.

### K3. Makarov and Schoar (2020)

Their work on trading and arbitrage in cryptocurrency markets is one of the most important empirical foundations for studying shorting. It demonstrates that crypto markets are segmented and that arbitrage is institutionally limited. This is crucial because scalable bearishness depends on exactly those arbitrage connections.

### K4. Liu and Tsyvinski (2021)

This asset-pricing work matters because it places crypto returns in a factor framework and documents distinctive behavior relative to traditional assets. For shorting research, it highlights that bearish strategies must be evaluated against a return process not easily absorbed into standard equity logic.

### K5. Cong, Li, and Wang (2021)

Tokenomics research matters because it identifies how adoption dynamics and platform incentives shape valuation. Shorting a token in such an environment may be a bet against platform equilibrium rather than simply against speculative excess.

### K6. Huberman, Leshno, and Moallemi (2021)

Their analysis of Bitcoin pricing and system design contributes to the understanding of whether and how network usage anchors value. The weaker the anchor, the more the market may depend on balanced participation from both optimists and pessimists.

### K7. Corbet, Lucey, Urquhart, and Yarovaya (2019)

This systematic analysis of crypto as a financial asset is useful because it summarizes the volatility, heterogeneity, and speculative patterns that make shorting economically important. It situates bearish trading within the broader literature on crypto as an investable but unusual asset class.

### K8. Easley, O’Hara, and Basu (2019)

Although centered on transaction fees and market evolution, this work helps illuminate the broader market microstructure of crypto. The development of tradable negative exposure must be understood against the background of how participation costs and market use evolved.

### K9. Schilling and Uhlig (2019)

Their simple Bitcoin economics provides a stylized macro-financial lens that is useful when connecting shorting to beliefs about monetary utility and equilibrium valuation. The value of shorting is not the same when an asset is seen primarily as money rather than purely as speculative capital.

### K10. Saleh (2021)

Saleh’s work on proof-of-stake is not directly about shorting, but it matters for the expanding set of crypto assets whose value is tied to staking and protocol returns. Shorting such assets requires attention to yield, governance, and alternative carry structures.

### K11. Sch?r (2021)

Sch?r’s survey of DeFi is important because it maps the broader ecosystem in which decentralized shorting takes place. Lending, automated market makers, and on-chain derivatives are all part of the same institutional fabric.

### K12. Harvey, Ramachandran, and Santoro (2021)

This book-length treatment is useful because it integrates DeFi, market design, and financial function in a way many narrower papers do not. For a review article, it provides connective tissue between specific shorting instruments and the larger system they inhabit.

### K13. Makarov and Schoar (2022)

Their broader discussion of cryptocurrencies and DeFi offers one of the best synthetic accounts of how digital asset markets evolved from spot trading into a leveraged ecosystem. Shorting is one of the clearest mechanisms through which this evolution becomes visible.

### K14. Lyons and Viswanath-Natraj (2023)

This stablecoin research is highly relevant because it focuses on the mechanisms preserving par and confidence in the digital cash used throughout derivatives markets. Shorting conditions in crypto are partly a function of how stable that cash really is.

### K15. Garratt and van Oordt (2021)

Their treatment of stablecoins as crypto safe assets provides one of the cleanest conceptual bridges between digital money and leveraged trading. It is indispensable for understanding why collateral quality is part of the economics of bearish exposure.

## Appendix L. Extended annotated bibliography C: DeFi, regulation, and the system boundary of bearish exposure

### L1. Gorton and Zhang (2021)

The stablecoin literature associated with Gorton and Zhang is essential because it reframes crypto collateral from mere plumbing into a question of private money quality. Since stablecoins often margin derivatives and support basis trades, their argument bears directly on the resilience of shorting.

### L2. President’s Working Group, FDIC, and OCC (2021)

This policy report matters because it recognizes that stablecoins and related digital instruments can have banking-like implications. For the study of shorting, it reinforces the idea that leverage markets in crypto are not insulated from the monetary architecture of collateral.

### L3. Financial Stability Board (2022)

The FSB’s attention to crypto-asset risk is important because it places leverage, interconnectedness, and market structure on the global policy agenda. Shorting is part of these concerns even when not always named directly.

### L4. IOSCO (2023)

IOSCO’s policy work on crypto and digital asset markets matters for this review because it focuses on trading, market integrity, and investor protection. Those are exactly the institutional conditions under which shorting can be socially useful or harmful.

### L5. Zetzsche, Arner, and Buckley (2020)

Their work on DeFi is important because it identifies how decentralized systems replicate and transform traditional financial functions. In the context of shorting, this means the trader’s exposure depends not just on price direction but on protocol design and governance.

### L6. European Banking Authority (2019)

The EBA’s early report on crypto-assets remains useful because it systematically maps risks and regulatory gaps. It helps situate shorting within a broader supervisory landscape where asset classification, custody, and trading standards remain unsettled.

### L7. ECB financial stability commentary on crypto and DeFi

The ECB’s analyses are valuable because they place digital-asset leverage and market structure inside a central-bank framework. Shorting becomes relevant not as a trading curiosity but as one mechanism through which volatility and fragmentation may matter for market functioning.

### L8. BIS annual reports and bulletins on crypto and tokenization

BIS work increasingly links digital assets, tokenized money, and market infrastructure. While not written as short-selling studies, these reports matter because they emphasize collateral quality, settlement architecture, and the future of money, all of which affect bearish capacity.

### L9. Bank of England work on digital money

The Bank of England’s discussion papers on new forms of digital money help frame the hierarchy of digital liabilities. This is relevant to shorting because the collateral of digital derivatives is part of that hierarchy, not external to it.

### L10. MiCA and European digital-asset regulation

MiCA matters because it shapes the legal treatment of stablecoins, market participants, and infrastructure in a major jurisdiction. Over time, this may affect where and how regulated forms of short exposure develop.

### L11. SEC guidance and enforcement on digital assets

SEC interventions influence the legal perimeter of digital asset trading in the United States, including which products can be offered and under what disclosure framework. These legal boundaries affect the channels through which bearish trading can migrate.

### L12. CFTC and regulated futures markets

The role of regulated futures markets in the United States is important because it provides one of the clearest institutional alternatives to offshore perpetual venues. Comparative research on these channels remains underdeveloped but highly important.

### L13. Research on proof-of-reserves and exchange transparency

Post-crisis scholarship and policy discussion on proof-of-reserves matter because they address whether traders can trust venues holding collateral and operating risk engines. Without institutional trust, the private cost of shorting remains elevated even in apparently deep markets.

### L14. Research on oracle risk and protocol liquidations

Oracle-dependent liquidations are a defining feature of DeFi shorting. The literature on oracle design, manipulation, and protocol safety is therefore directly relevant to how permissionless bearish exposure behaves under stress.

### L15. Boundary lesson from the regulatory literature

The broad contribution of the regulation and boundary literature is that crypto shorting sits at the edge of several categories at once: securities trading, derivatives, banking, payments, and software governance. This is why no single legal analogy is fully adequate.

## Appendix M. Detailed mini case studies of shorting architectures

### M1. CME Bitcoin futures as a case of institutional admissibility

CME Bitcoin futures matter because they provided a recognizable, centrally cleared, and legally legible route to negative exposure for institutions that would not touch offshore venues or direct spot custody. The economic significance of the product lies less in absolute volume than in what it represented: the admission of Bitcoin into a familiar derivative architecture. That step allowed a different class of trader to participate in downside expression and basis trading. Yet CME did not displace offshore markets entirely because its design, hours, margining, and user base differed. The case therefore illustrates a general point: regulated shorting channels can improve market quality without monopolizing bearish capacity.

### M2. Offshore perpetual exchanges as a case of functional dominance

The dominant offshore perpetual exchanges became central not because they were institutionally conservative, but because they solved user problems efficiently: constant access, deep leverage, intuitive interface, and immediate exposure. For the literature, these venues are important because they show how market demand can favor functional convenience over formal prudential robustness. The resulting shorting architecture is powerful but governance intensive. Traders depend on the platform’s mark prices, liquidation waterfall, insurance fund, API stability, and solvency. This case demonstrates that in crypto, a large share of “market structure” is really platform design.

### M3. BitMEX as a formative market-design experiment

BitMEX is a historically important case because it popularized a style of highly leveraged perpetual trading that influenced the entire industry. The venue’s contract structures, liquidation culture, and retail-professional mix made it a laboratory for how scalable shorting behaves when embedded in exchange-specific rules. The case teaches that innovations in contract design can change the sociology of a market as much as its pricing efficiency. High leverage and visible liquidations attracted both informed hedgers and spectacle-seeking speculators.

### M4. Binance and the scaling of integrated exchange ecosystems

Binance’s significance lies in integration. Spot, derivatives, collateral products, stablecoin usage, and cross-product migration all existed within or around a large ecosystem. This structure made shorting easier operationally but also concentrated governance and conflict-of-interest questions. For the literature, the case illustrates how shorting scale can depend on platform breadth. A trader is more likely to short when spot, funding, collateral, and hedging tools are available in one operational environment. The welfare question is whether this convenience justifies concentration.

### M5. dYdX and decentralized perpetuals

Decentralized perpetual platforms such as dYdX are important because they show that sophisticated shorting need not be fully centralized. Yet they also demonstrate that decentralization in execution does not remove the need for carefully designed risk controls, collateral policies, and market-maker participation. The case reveals both the promise and the limits of permissionless leverage.

### M6. Aave and overcollateralized borrowing

Aave is useful as a case because it exemplifies the DeFi route to shorting through borrowing and sale of borrowed assets. The platform shows how a shorting function can be built out of generic lending primitives. It also reveals the tradeoff between open access and capital efficiency. Overcollateralization makes the system more robust in some respects but more expensive for directional bears.

### M7. MakerDAO and the collateral-money-shorting nexus

MakerDAO is relevant not because it offers a standard short product, but because it sits at the junction of collateral, stablecoin issuance, and leveraged position management. Traders can use the system to create liquidity that supports broader market strategies, including bearish ones. The case demonstrates that shorting infrastructure can be indirect and monetary in form rather than explicitly derivative.

### M8. FTX as a case of false institutional confidence

FTX is analytically crucial because it reminds scholars that market depth and product sophistication do not guarantee institutional soundness. A venue can look advanced enough to support serious shorting strategies while hiding fatal governance weaknesses. The case should caution empirical researchers against interpreting volume and liquidity as evidence of robust market completion.

### M9. Terra as a case of reflexive collapse

Terra demonstrates how a short thesis can target system design rather than a simple price level. Traders skeptical of the sustainability of the stablecoin mechanism were effectively shorting a monetary architecture. The case broadens the conceptual scope of shorting research from directional trading to criticism of reflexive institutional design.

### M10. Tokenized Treasury funds and future collateral reform

The emergence of tokenized Treasury and cash-management products matters because it may gradually improve the quality of collateral available to digital traders. If so, the economics of shorting could shift from dependence on weaker private digital liabilities toward more robust on-chain safe assets. This case points toward the future convergence of crypto leverage with more conventional collateral standards.

## Appendix N. Normative debates and welfare criteria

### N1. Should a crypto market aspire to frictionless shorting?

A natural but simplistic answer is yes: the fewer barriers to pessimistic expression, the better price discovery should be. Yet the literature reviewed in this article suggests that frictionless shorting is not a coherent welfare benchmark in crypto. Negative exposure is produced through concrete institutions that also create leverage, liquidation channels, and collateral demand. A market can move closer to frictionless bearish access only by choosing among institutional forms, each of which redistributes risk. The appropriate policy and scholarly goal is therefore not maximum shorting, but high-quality shorting: negative exposure that meaningfully improves information aggregation and hedging while avoiding opaque or destabilizing leverage structures.

### N2. Information efficiency as a welfare criterion

The strongest argument for shorting is informational. Prices in a one-sided market reflect the beliefs of optimistic or unconstrained participants more than the full distribution of views. In crypto, where narratives and ideological commitments are often strong, this informational role is especially important. If shorting helps challenge inflated claims, expose weak token designs, or limit the persistence of overvaluation, then it has clear welfare benefits. Better prices improve capital allocation, treasury management, and the quality of signals available to developers, miners, venture investors, and policymakers.

Yet informational efficiency is only one welfare criterion. A shorting technology that improves prices but generates recurrent liquidation cascades or collateral panics may not be unambiguously beneficial. This is why the literature increasingly pairs information efficiency with resilience.

### N3. Resilience and robustness as welfare criteria

Resilience asks whether the market continues to function under stress without disorderly spirals, unstable collateral feedback, or collapse of confidence in critical intermediaries. Crypto shorting often scores well on informational richness but less well on resilience. Public funding rates and deep perpetual markets make positioning legible, yet those same markets may become channels of reflexive instability. The welfare problem is therefore closer to the design of a robust market ecology than to a simple choice between more and less shorting.

A resilient shorting system would likely display several traits: high-quality collateral, transparent segregation of customer assets, credible insolvency protections, conservative leverage relative to asset volatility, strong benchmark construction, and liquid exit pathways not entirely dependent on a single venue. Measured against this standard, much of crypto shorting remains institutionally incomplete.

### N4. Inclusion versus suitability

One of crypto’s self-conceptions is that it democratizes access to financial tools previously reserved for institutions. That aspiration extends to shorting. In principle, a broader set of users can now take negative views or hedge holdings through retail interfaces and permissionless protocols. This may improve fairness if markets had previously been biased toward affluent optimists.

But inclusion is not a sufficient welfare metric. Leveraged bearish products are complex and path dependent. Some traditional frictions exist because not all users understand or can bear the associated risks. Crypto often lowers those frictions without replacing them with equally strong educational or prudential safeguards. The result can be formal access without substantive empowerment. A welfare-conscious review must therefore distinguish access expansion from capability expansion.

### N5. Anti-fraud discipline versus predatory attack

A longstanding normative defense of short sellers is that they help expose fraud, aggressive accounting, weak governance, or untenable business models. Crypto markets, with their history of opaque token issuance, exchange conflicts, and unstable stablecoin designs, seem to need such discipline badly. Yet crypto also intensifies fears of predatory attack because thin liquidity, visible leverage, and fragile narratives can make markets easier to destabilize strategically.

The key welfare distinction is between revealing weakness and manufacturing it. In practice the line is not always bright. A well-researched bearish thesis can accelerate the collapse of a weak structure precisely because the structure was weak. Regulators and scholars should therefore avoid treating price impact itself as evidence of manipulation. The more meaningful questions concern truthfulness, benchmark integrity, and whether the shorting mechanism exploits opaque mechanical vulnerabilities rather than merely trading against inflated beliefs.

### N6. The social value of carry-based short supply

A large share of crypto shorting now comes not from investors convinced that an asset is worthless, but from basis traders, market makers, and treasury managers responding to funding and basis conditions. Some critics see this as evidence that shorting has become merely another yield strategy. Yet from a welfare perspective, carry-based short supply may be highly valuable. It provides elasticity to the market’s demand for leverage and can reduce the persistence of one-sided distortions.

At the same time, carry-based supply is fragile if it depends on narrow balance-sheet capacity or weak collateral. When funding is attractive, capital enters. When venue or collateral risk rises, the same capital can disappear suddenly. The social value of carry-based short supply therefore depends on the robustness of the institutions supporting it.

### N7. Platform governance and the privatization of market rules

Crypto shorting raises a deep normative issue about who writes market rules. In traditional finance, exchanges, clearinghouses, supervisors, and courts each play roles. In crypto, a single platform or protocol may effectively determine margin schedules, benchmark construction, collateral eligibility, liquidation design, and emergency interventions. This concentration of rulemaking power creates a privatized constitutional order for leverage markets.

From a welfare standpoint, the issue is not simply whether private platforms are good or bad. It is whether traders can trust that rules will be transparent, predictable, and fairly enforced, especially in stress. The more negative exposure depends on platforms whose incentives are opaque, the weaker the case that shorting automatically improves market quality.

### N8. Should policymakers tolerate migration to offshore venues?

A practical normative dilemma arises when domestic regulators restrict leveraged crypto derivatives but offshore venues remain available. One response is to regard migration as regrettable but acceptable if risky users self-select offshore. Another is to see migration as evidence that restrictive regulation may push socially useful hedging and arbitrage into weaker institutional settings. The literature does not support a blanket answer.

What it does suggest is that policy cannot be evaluated only on the basis of domestic investor protection. If the result of tight restrictions is that price discovery moves to opaque venues with poor governance, then even domestic users may face worse underlying spot pricing. A more sophisticated policy framework would distinguish products primarily used for hedging or basis trading from those designed mainly for extreme retail leverage.

### N9. The boundary between finance and speech

Shorting has always had a dual nature: it is a trade, but it is often accompanied by argument. In crypto this duality is intensified because markets are narrative driven and online discourse is integral to price formation. A bearish trader may publish research, governance criticism, or warnings about reserve weakness. The normative question is when such activity is informative and when it becomes manipulative. Because crypto lacks standardized disclosure in many segments, private research by skeptics may generate public value that formal oversight has not yet supplied.

This raises a subtle issue for regulation. If policymakers or platforms over-police bearish speech, they may suppress one of the few effective checks on weak projects. If they under-police it, rumor campaigns and manipulative attacks may flourish. The correct balance remains an open question and a promising area for law-and-economics scholarship.

### N10. The role of shorting in allocative efficiency

Crypto enthusiasts often argue that token markets help allocate capital to innovation. If that claim is to be taken seriously, then shorting must also be taken seriously. Capital allocation improves only if low-quality projects can be priced down as well as high-quality projects priced up. A one-sided market is a poor capital allocator. This is one reason shorting matters even in an ecosystem ideologically committed to innovation.

Yet allocative efficiency in crypto is complicated by the fact that many tokens do not map cleanly onto productive investment. Some fund development, some govern protocols, some are quasi-monetary, and some are primarily speculative attention assets. The welfare value of shorting therefore varies across token categories. It may be more allocatively useful in governance and project-linked tokens than in purely meme-driven assets where the underlying object of allocation is itself ambiguous.

### N11. Paternalism, autonomy, and product design

A recurring policy controversy is whether users should be protected from the complexity of leveraged shorts or allowed to choose freely. Crypto culture has leaned strongly toward autonomy. Traditional financial regulation leans more toward paternalism in retail leverage. The literature on product design suggests that this tradeoff should not be framed as freedom versus control in the abstract. The quality of disclosure, the visibility of path dependence, and the reversibility of mistakes all matter.

Products that market themselves as easy ways to bet against an asset can be especially problematic when they hide the mechanics of funding, rebalancing, or liquidation. In such cases, users may not be choosing autonomy so much as purchasing opacity. Better product design can therefore improve both autonomy and protection.

### N12. A plural welfare standard

The broad normative conclusion of this review is that crypto shorting should be evaluated against a plural welfare standard. The relevant dimensions are informational efficiency, hedging capacity, resilience under stress, integrity of market design, quality of collateral, fairness of access, and legal enforceability. No single metric is sufficient. This pluralism is not a weakness. It reflects the fact that shorting in crypto is not one institution but a family of institutions with different tradeoffs.

## Appendix O. Research agenda by economic subfield

### O1. Asset pricing

Asset-pricing research should focus less on whether crypto is “overvalued” in a simplistic sense and more on how the supply of bearish capacity affects expected returns, skewness, crash risk, and the persistence of momentum. A particularly promising direction is to integrate funding-rate data, borrow costs, and collateral variables into cross-sectional and time-series models. Doing so would move the literature beyond price-only tests toward richer measures of market completeness.

### O2. Market microstructure

Microstructure scholars should study how mark prices, liquidation rules, and venue design affect informed trading, inventory management, and price leadership. Crypto’s rich public data on funding, liquidations, and exchange-level order flow make it an unusually fertile field for testing theories that are hard to study elsewhere. Comparative work across centralized exchanges, decentralized order books, and automated market makers would be especially valuable.

### O3. Banking and monetary economics

Monetary economists should take more interest in crypto shorting because the collateral and margin substrate of these markets is increasingly composed of private digital monies and tokenized safe assets. This creates a miniature but revealing laboratory for the interaction between money quality and leverage capacity. Research on stablecoin reserves, redemption, and tokenized cash instruments should therefore be linked explicitly to derivatives and shorting behavior.

### O4. Financial intermediation

From a financial-intermediation perspective, the most important questions concern balance-sheet capacity and its withdrawal under stress. Who provides short exposure? How concentrated is that capacity among market makers, funds, exchanges, or protocols? How does it react to volatility, regulation, or collateral shocks? This line of inquiry would align crypto research more closely with the broader literature on dealer balance sheets and secured funding.

### O5. Industrial organization

IO scholars can contribute by analyzing exchange competition, leverage design, and the strategic provision of shorting products. Why did perpetual swaps become dominant? How do platforms trade off safety, accessibility, and volume? How do reputation and network effects shape where bearish traders choose to concentrate? These are not peripheral questions. They determine the institutional composition of crypto markets.

### O6. Law and economics

Legal scholars and economists should jointly study the enforceability and insolvency aspects of shorting. Segregation of collateral, bankruptcy remoteness of customer assets, contractual treatment of rehypothecation, and legal status of tokenized collateral all influence the private and social cost of negative exposure. Without this work, economic analyses risk assuming institutional protections that do not exist.

### O7. Political economy

The political economy of shorting in crypto deserves much more attention. Token communities often organize against shorts; platforms may prefer designs that encourage volume even at the cost of fragility; regulators may face public pressure to suppress visibly unpopular bearish activity after crises. These forces shape the evolution of institutions as much as abstract efficiency arguments do.

### O8. Development and inclusion

Researchers interested in inclusion should examine whether broader access to shorting and hedging helps users in emerging markets or smaller firms manage crypto-linked exposures more effectively. The answer is likely to depend on local alternatives, capital controls, and the quality of digital-money infrastructure. This area remains largely unexplored.

### O9. Economic history

Economic historians can help by placing crypto shorting in longer arcs of speculative finance, offshore market development, and controversy over bearish trading. Such perspective can discipline claims of uniqueness while identifying what really is new: always-open global platforms, public funding metrics, and digitally native collateral.

### O10. Methodological pluralism

Finally, the field needs methodological pluralism. High-frequency exchange data are valuable, but so are legal case studies, institutional histories, interviews with market participants, and comparative analysis of platform governance. A top-journal review should encourage this breadth because the object of study is a socio-technical financial system, not a single regression-ready variable.

## Appendix P. Negative cases, failed products, and what did not scale

### P1. Why some borrow markets never deepened

Not every crypto asset developed a meaningful borrowing market. In many cases, the explanation is straightforward: the underlying asset lacked a stable lendable holder base, the infrastructure costs were high relative to demand, and venue operators preferred easier-to-scale derivative substitutes. But the failure of borrow markets is analytically important. It shows that scalable pessimism requires not just skeptics, but willing suppliers of inventory and institutions capable of managing the resulting contracts. In smaller token markets, that combination often never emerged. The absence of borrow should therefore be interpreted as a real constraint on market completeness rather than a mere product omission.

### P2. Inverse tokens and path dependence

Several inverse and leveraged products promised simple access to bearish exposure while relying on daily or frequent rebalancing and embedded derivative mechanics. These products often failed to become durable institutional pillars. The reason is not only user misunderstanding. It is also that they solve the access problem by packaging complexity, not by eliminating it. Over time, path dependence, fees, and slippage make such products less effective for many users than they first appear. Their mixed track record is a reminder that retail-friendly wrappers can obscure rather than reduce the economic cost of shorting.

### P3. Thin perpetual markets in minor assets

Many smaller tokens have perpetual contracts, but not all of these markets achieve meaningful depth. Thin perpetuals can produce the appearance of market completeness without delivering it. Funding rates become noisy, liquidations become highly path dependent, and benchmark quality becomes questionable. The failure of depth in these markets shows that listing a derivative is not equivalent to creating robust bearish capacity.

### P4. Synthetic-asset platforms that struggled to sustain use

A number of synthetic-asset protocols attempted to create broad exposure sets, including inverse or short-like positions on crypto and non-crypto assets. Some generated early excitement but struggled with liquidity, governance, or legal uncertainty. These cases teach that synthetic exposure is only as useful as the ecosystem supporting it. A technically elegant synthetic short is of limited value if users distrust the oracle, cannot exit efficiently, or doubt the durability of governance.

### P5. Products dependent on exchange credit quality

Some shorting ecosystems appeared deep because they were supported by exchange-specific balances, internal credit, or tightly integrated collateral systems. When confidence in those platforms fell, apparent depth vanished quickly. The broader lesson is that what looks like market liquidity may actually be confidence in a concentrated private balance sheet. Once that confidence is shaken, the shorting capacity built on it can contract suddenly.

### P6. Protocols that failed under oracle or governance stress

In DeFi, certain products did not fail because the idea of permissionless shorting was flawed, but because oracle design, governance incentives, or liquidity backstops were insufficient. These failures are informative because they show what functions remain hard to automate credibly. The problem is often not trade execution itself but the verification and enforcement architecture surrounding it.

### P7. Retail products that overpromised “easy” shorting

A recurrent theme in financial history is the marketing of complex bearish or leveraged products as easy ways to profit from decline. Crypto reproduced this pattern. Products framed as simple ways to short often involved hidden funding costs, nonlinear path dependence, or liquidation risk poorly understood by end users. Their mixed or disappointing outcomes reinforce the view that access alone is a weak measure of market development.

### P8. The limits of cross-chain and wrapped-asset shorting

As crypto assets spread across multiple chains and wrapped forms, shorting became more complicated rather than simpler. A trader might face not only price risk but bridge risk, custodial risk, and uncertainty about whether the wrapped asset tracked the underlying cleanly under stress. The uneven success of these structures demonstrates that technical portability does not automatically create robust arbitrage.

### P9. Why some markets stayed effectively long only

Even after the proliferation of derivatives, many token ecosystems remained effectively long only because the only practical participants were insiders, community believers, or liquidity-mining users. The nominal existence of a short venue did not create a balanced market. This reminds scholars that effective completeness is an equilibrium outcome, not a product checklist.

### P10. Lesson from the failures

The negative cases collectively show that the central challenge of crypto shorting is not invention but durability. Markets can create many forms of negative exposure. The harder task is to sustain them through cycles, governance stress, collateral shocks, and shifting regulation. Failure analysis is therefore indispensable to a serious literature review.

## Appendix Q. Glossary of core concepts in crypto shorting

### Q1. Short-sale constraint

A friction that prevents pessimistic traders from expressing negative views at desired scale or cost. In crypto, such constraints include borrow scarcity, venue access limits, funding costs, liquidation risk, collateral quality, and exchange governance risk.

### Q2. Basis

The difference between the price of a derivative and the spot price of the underlying asset. In crypto, basis often reflects funding conditions, leverage demand, collateral frictions, and arbitrage capacity in addition to expectations.

### Q3. Funding rate

A periodic payment exchanged between longs and shorts in perpetual-swap markets to keep derivative prices aligned with spot. It is a crucial price for the supply and demand of short exposure.

### Q4. Perpetual swap

A derivative similar to a futures contract but without expiration. It has become the dominant crypto-native instrument for leveraged long and short exposure.

### Q5. Liquidation engine

The rule system and operational process by which an exchange or protocol forcibly closes positions whose collateral falls below required thresholds. It is central to the dynamics of both short squeezes and long crashes.

### Q6. Insurance fund

A reserve maintained by some derivative venues to absorb losses from bankrupt positions and reduce the need for socialized losses or auto-deleveraging.

### Q7. Auto-deleveraging

A mechanism by which profitable counterparties may have positions reduced if the exchange cannot fully absorb losses from bankrupt traders. This feature makes counterparty and venue design part of directional risk.

### Q8. Borrow fee

The cost of borrowing the underlying asset for a spot short. It is one of the clearest measures of scarcity in direct negative exposure.

### Q9. Basis trade

A strategy that exploits the price gap between spot and derivatives, often by buying one leg and selling the other. Many basis trades supply short exposure without requiring a strongly bearish directional belief.

### Q10. Stablecoin collateral

A digital dollar or similar instrument used to margin positions. The quality and liquidity of this collateral directly affect the cost and resilience of shorting.

### Q11. Overcollateralization

A requirement, common in DeFi, that traders post collateral worth more than the value of what they borrow or the position they open. It improves lender protection but reduces capital efficiency.

### Q12. Oracle risk

The risk that the price feed or reference data used by a protocol is inaccurate, delayed, manipulable, or unavailable. In DeFi shorting, oracle quality is a core determinant of market integrity.

### Q13. Rehypothecation

The reuse of collateral by intermediaries. In crypto, opaque or informal rehypothecation can create hidden leverage and undermine confidence in shorting infrastructure.

### Q14. Proof-of-reserves

A method of demonstrating that an exchange or custodian holds assets corresponding to stated liabilities. Its relevance to shorting lies in trust over collateral custody and venue solvency.

### Q15. State-dependent market completeness

The idea that crypto markets may appear complete in calm periods but become effectively incomplete under stress as collateral quality deteriorates, arbitrage capital withdraws, or venue trust collapses.

## Appendix R. Extended annotated bibliography D: Derivatives, microstructure, and exchange design

### R1. Akyildirim, Corbet, Katsiampa, and Sensoy on Bitcoin futures

This stream of work matters because it examines whether futures contracts changed the behavior of Bitcoin spot markets, including volatility and price discovery. It represents one of the clearest empirical routes into the question of whether scalable shorting disciplines exuberance.

### R2. Kapar and Olmo on futures and efficiency

Research in this area often asks whether the launch of Bitcoin futures improved informational efficiency or merely redistributed speculative activity. It is valuable because it uses recognizable event-study techniques in a market where institutional change was discrete.

### R3. Baur and Dimpfl on lead-lag relationships

Studies of whether spot or futures lead are central because they help reveal where informed and constrained traders choose to express views. For a shorting-focused review, these papers are especially useful because the presence of a derivatives lead can indicate that bearish and institutional information now has a scalable venue.

### R4. Katsiampa on cryptocurrency volatility and derivatives

Volatility studies are relevant not only as descriptive exercises but because the profitability and risk of shorting depend heavily on crash risk, asymmetry, and regime change. They also shape option-implied downside pricing.

### R5. Corbet and coauthors on derivative market linkages

This broader literature on crypto derivative spillovers helps explain how information and stress move across contracts. The shorting literature gains from it because negative exposure is rarely isolated to one instrument.

### R6. Makarov and Schoar on arbitrage constraints revisited

Their findings continue to matter for microstructure because they show that visible spreads persist despite large incentives. This means shorting and relative-value trading are institutionally expensive, not merely underexploited.

### R7. Studies of funding-rate predictability

An emerging set of papers examines whether funding predicts future returns, reversals, or volatility. These studies are valuable because funding is the public price of directional imbalance and thus one of the best observable indicators of short scarcity or crowding.

### R8. Studies of liquidation cascades

Work focused on liquidation events helps move the literature from equilibrium reasoning to dynamic stress analysis. Such studies make clear that shorting must be evaluated as a process unfolding through automatic risk engines, not just as a position chosen at time zero.

### R9. Exchange microstructure papers using high-frequency order-book data

Order-book research helps determine whether bearish information is incorporated via informed aggressive trading, passive liquidity provision, or cross-venue arbitrage. In crypto, these questions are unusually important because venue heterogeneity is so large.

### R10. Research on proof-of-reserves and venue trust

Although not classic asset-pricing papers, studies of venue transparency and trust matter for shorting because traders must decide where they are willing to warehouse collateral. Trust conditions therefore influence the supply of bearish capacity.

### R11. Studies on leverage caps and platform policy changes

Natural experiments based on leverage-limit adjustments are especially valuable. They reveal whether high leverage mainly supports noise trading or also provides socially useful hedging and arbitrage. Results here can inform both scholarship and policy.

### R12. Research on market-maker behavior in crypto

Market makers are important suppliers of liquidity and, often indirectly, of short exposure. Studies of their inventory management, withdrawal during stress, or cross-venue hedging are therefore central to the economics of shorting.

### R13. Research on benchmark construction and manipulation

Derivative integrity depends on benchmark prices. Papers studying benchmark quality, cross-venue reference rates, or susceptibility to manipulation are crucial because poor benchmarks can distort both bearish and bullish leverage.

### R14. Research on options-implied downside risk

Options-based studies provide a window into crash expectations, downside hedging demand, and the term structure of fear in crypto markets. This line of work complements futures and perpetual studies by adding convexity and volatility information.

### R15. General microstructure lesson

The microstructure literature shows that shorting in crypto is not just about directional beliefs. It is about where those beliefs can be financed, executed, benchmarked, and unwound under pressure.

## Appendix S. Extended annotated bibliography E: Policy, DeFi, and the future architecture of shorting

### S1. Sch?r (2021) revisited from a shorting perspective

Sch?r’s survey becomes especially valuable once one reads it through the lens of shorting. Lending, collateral, and on-chain derivatives are not isolated modules; they are the infrastructure that makes permissionless negative exposure feasible.

### S2. Zetzsche, Arner, and Buckley (2020) revisited

Their argument that DeFi reconfigures rather than abolishes intermediation is directly relevant to bearish exposure. Shorting in DeFi depends on protocol and governance design, not simply on the absence of traditional firms.

### S3. Harvey, Ramachandran, and Santoro (2021) revisited

This treatment of DeFi is useful because it links technical design with broader financial function. For a review article, it provides a way to situate DeFi shorting within the larger shift from spot ownership to programmable finance.

### S4. Gorton and Zhang (2021) revisited

The stablecoin critique matters not just for payments and monetary debate, but for leverage architecture. If the core collateral of shorting is a fragile private liability, then bearish capacity inherits that fragility.

### S5. Lyons and Viswanath-Natraj (2023) revisited

Their analysis of what keeps stablecoins stable adds a needed empirical layer to the monetary side of shorting. Confidence in collateral is not a background condition; it is part of the trading environment.

### S6. Garratt and van Oordt (2021) revisited

By framing stablecoins as crypto safe assets, this literature helps bridge digital-money demand and derivatives market function. Shorting research should engage it more explicitly.

### S7. FSB global regulatory framework

The FSB’s global work is useful because it places crypto leverage and cross-border fragmentation inside an international-policy frame. It reminds scholars that shorting is also a governance problem at system level.

### S8. IOSCO policy recommendations

IOSCO’s recommendations matter because they focus directly on market integrity, conflicts of interest, and trading-venue structure. These issues are at the heart of whether shorting generates information or instability.

### S9. MiCA and stablecoin regulation

European regulation offers a useful case for how legal clarity around asset-referenced tokens and e-money tokens may gradually reshape the collateral base and hence the economics of shorting.

### S10. U.S. policy debates on digital-asset derivatives

The fragmentation of U.S. regulatory authority between securities and derivatives oversight has practical consequences for who can access what kind of bearish product. Research on this boundary remains important and unresolved.

### S11. BIS work on tokenized money and unified ledgers

Official-sector work on tokenization points toward a future in which digital collateral and settlement become more robust. If that happens, the private cost of shorting could decline while the prudential quality of collateral improves.

### S12. ECB and Bank of England work on digital money

Central-bank analysis matters because it situates private digital collateral within a larger hierarchy of money. This is increasingly relevant as crypto shorting begins to intersect with tokenized safe-asset markets.

### S13. Research on protocol governance concentration

Governance concentration in DeFi undermines simplistic claims that on-chain shorting is fully decentralized. These studies are important because they connect institutional power to the practical reliability of bearish exposure.

### S14. Research on legal enforceability of on-chain claims

Law-and-economics work on tokenized claims and insolvency remains sparse but critical. If the claim supporting collateral or leverage is legally ambiguous, then shorting costs are understated by pure market data.

### S15. The boundary lesson

The policy and DeFi literature suggests that the future of crypto shorting will be shaped less by abstract tolerance for speculation and more by the design of digital money, collateral standards, and institutional trust.

## Appendix T. Data-source guide for future scholarship

### T1. Exchange-level derivatives data

The most obvious datasets for studying crypto shorting come from centralized derivatives exchanges. These include prices, open interest, funding rates, liquidation volumes, and sometimes order-book snapshots. Their strengths are frequency, direct relation to leveraged trading, and broad market relevance. Their weaknesses are platform dependence, survivorship issues, and uncertainty about whether reported figures are comparable across venues.

### T2. Spot borrowing and margin-lending data

Borrow-fee and margin-lending data are scarcer but highly valuable. They provide the closest analogue to the classic hard-to-borrow and securities-lending literature. Future work should treat these data as strategically important rather than peripheral because they directly measure the scarcity of physical negative exposure.

### T3. On-chain lending data

Protocols such as Aave and similar systems provide rich public information on collateral, borrowing, liquidations, and user positions at the address level. These data are exceptionally useful for studying the anatomy of permissionless shorting, though interpretation is complicated by address multiplicity and hidden off-chain relationships.

### T4. On-chain derivatives data

Decentralized perpetual and options protocols provide transaction-level data that can reveal the evolution of open interest, collateral, and liquidation activity. The main challenge is mapping protocol-specific variables into economically comparable measures.

### T5. Stablecoin reserve and market data

Reserve attestations, on-chain circulation, redemption flows, secondary-market prices, and concentration of holdings all matter because they measure the quality of the collateral base for shorting. A research agenda on crypto leverage that ignores stablecoin data is incomplete.

### T6. Venue governance and policy-change datasets

A neglected but crucial data source is the archive of exchange and protocol rule changes: leverage-cap adjustments, collateral-eligibility changes, proof-of-reserve releases, delistings, emergency interventions, and benchmark methodology updates. These events provide natural experiments for the study of bearish capacity.

### T7. OTC and institutional data

The largest gap in current research is the scarcity of public OTC and prime-broker data. Yet this layer may account for a substantial share of institutional shorting and basis activity. Partnerships with data providers or confidential regulatory datasets could radically improve the literature.

### T8. Narrative and sentiment data

Because shorting is politically contested in crypto, text data from social media, governance forums, and market commentary can help measure the social environment in which bearish positions are taken. This is especially useful for studying squeezes and anti-short coordination.

### T9. Cross-asset and macro data

Crypto shorting increasingly intersects with macro trading, treasury yields, dollar funding conditions, and broader risk sentiment. Integrating traditional macro-financial variables with crypto-specific leverage measures is therefore a high-value empirical direction.

### T10. Best-practice principles for data use

Future work should triangulate across multiple data layers whenever possible. No single source fully captures crypto shorting. Exchange data show visible leverage, on-chain data show protocol activity, stablecoin data show collateral quality, and policy archives show institutional change. The best scholarship will combine them.

## Appendix U. Long-run scenarios for the future of crypto shorting

### U1. Scenario one: Institutional normalization

In the institutional-normalization scenario, shorting in crypto gradually becomes more like shorting in other asset classes. Regulated futures deepen, options markets broaden, prime brokerage matures, tokenized safe assets improve collateral quality, and exchange governance becomes more transparent. In this world, bearish exposure becomes less politically charged and more integrated into ordinary treasury management, hedging, and relative-value trading. The result would likely be better price discovery, lower dependence on fragile offshore collateral, and a larger role for professional balance-sheet intermediaries.

The downside of this scenario is that normalization may also entrench concentration. A small number of exchanges, custodians, and collateral providers could dominate the supply of shorting. The market would become safer in some dimensions but perhaps less open and more rent bearing in others.

### U2. Scenario two: Persistent offshore dominance

In a second scenario, offshore perpetual markets remain the center of crypto shorting because they best match trader demand for accessibility, speed, and leverage. Regulated products continue to grow but do not displace offshore venues. Stablecoins remain the core collateral. DeFi adds niches but not a full replacement.

This scenario would preserve innovation and access but also maintain high dependence on platform governance and fragmented legal protections. Price discovery might remain globally efficient in calm periods while stress episodes continue to expose hidden fragilities. This is perhaps the most realistic medium-term baseline.

### U3. Scenario three: DeFi-led modularization

A third scenario envisions more shorting activity migrating to decentralized protocols with robust oracles, better risk design, and tokenized safe collateral. Under this model, shorting becomes more modular, interoperable, and perhaps more transparent on-chain. The social meaning of leverage changes as more of the stack becomes auditable by default.

Yet the success of this scenario depends on solving difficult problems: oracle robustness, governance concentration, legal interfaces, and sustainable liquidity provision. DeFi-led modularization is plausible, but only if the ecosystem solves the very institutional problems that centralization initially solved more crudely.

### U4. Scenario four: Regulatory compression and migration

A fourth scenario is that tighter regulation in major jurisdictions compresses regulated access to leveraged crypto products without building attractive alternatives. Traders seeking short exposure then migrate even more heavily to offshore or opaque channels. In such an equilibrium, formal regulation increases while practical transparency declines. Market quality could deteriorate even as official oversight appears stricter.

This scenario warns policymakers that prohibiting visible leverage is not equivalent to reducing risky leverage. The institutional destination of displaced demand matters enormously.

### U5. Scenario five: Collateral reform through tokenized safe assets

A fifth scenario centers on collateral rather than trading venues. If tokenized Treasury funds, tokenized deposits, or other high-quality digital cash instruments become standard collateral for crypto derivatives, the economics of shorting may improve substantially. Funding could become more stable, basis trades more scalable, and the dependence on weaker private digital liabilities could decline.

This scenario is important because it shows that the future of shorting may be shaped less by new bearish products than by better digital money and collateral.

### U6. Scenario six: Fragmented specialization by asset class

A final scenario is specialization. Benchmark assets such as Bitcoin and Ether develop relatively robust shorting ecosystems, while smaller tokens remain thin, politically charged, and effectively one sided. This would produce a stratified market where the informational and prudential quality of bearish exposure varies dramatically across the crypto universe.

Such specialization may in fact be the most plausible long-run equilibrium. It reflects the simple truth that not all assets justify the same market infrastructure. The literature should therefore be prepared for a future in which “crypto shorting” is not one market but many.

## Appendix V. Trader archetypes and the heterogeneous motives for shorting

### V1. The ideological skeptic

One familiar figure in crypto markets is the ideological skeptic: the trader, analyst, or commentator who believes a given asset is fundamentally flawed, economically incoherent, or socially harmful. For this actor, shorting is not just a trade but an argument. The ideological skeptic matters because they supply a form of bearish pressure linked closely to public discourse and governance critique. Yet this trader type often faces elevated social and reputational risk. In highly community-driven markets, ideological skeptics may be targeted rhetorically, accused of bad faith, or blamed for volatility. Their behavior reminds the literature that shorting is partly communicative action in crypto, not only portfolio allocation.

### V2. The basis arbitrageur

The basis arbitrageur is economically different. This actor may have no strong view on whether Bitcoin or another token is overpriced in a long-run sense. Instead, the trader responds to positive basis, elevated funding, or venue dislocations. By buying one leg and shorting another, the basis arbitrageur supplies market balance in exchange for carry. This trader type is central to mature markets because it provides elasticity to directional demand. Yet basis traders are also highly sensitive to financing conditions, collateral risk, and venue trust. Their capital can retreat abruptly when carry no longer compensates for institutional risk.

### V3. The inventory-hedging market maker

Market makers often short not because they are bearish but because client flows leave them with net long exposure they wish to neutralize. Their shorting activity is therefore tied to liquidity provision. This is socially important because it means that the ability of market makers to hedge affects the depth and quality of spot markets. If hedging becomes costly or unavailable, quoted liquidity in spot may deteriorate. The inventory-hedging market maker is thus a key link between shorting infrastructure and everyday market quality.

### V4. The treasury manager

An increasingly important participant is the treasury manager of a fund, exchange, protocol, miner, or operating company with crypto exposure. Such actors may short to hedge inventory, future token receipts, or treasury holdings while preserving operational upside. Their motives are closer to corporate risk management than to speculative attack. This category matters because it illustrates how shorting supports real activity inside the crypto ecosystem itself.

### V5. The macro trader

Macro traders approach major crypto assets as part of a broader portfolio responding to global liquidity, interest rates, equity risk, dollar strength, or policy shocks. Their shorts in Bitcoin or Ether may be linked less to crypto-specific views than to cross-asset macro scenarios. This trader type is important because it ties digital asset shorting to the wider world of institutional portfolio management and macro-financial transmission.

### V6. The activist or investigative short seller

In some cases, bearish traders publish research on weak tokenomics, exchange solvency, reserve quality, governance failures, or unstable stablecoin design. These traders resemble activist short sellers in equity markets. Their role is controversial because they combine position taking with persuasion. Yet in crypto’s often thin disclosure environment, such research can produce substantial informational value. The welfare question is whether the claims are evidence based and whether trading mechanisms allow them to be expressed without predatory manipulation.

### V7. The liquidation hunter

Not all short-related trading is informative in the same sense. Some participants focus on liquidation maps and order-book fragility rather than long-run value. They may target levels where leveraged traders are vulnerable, seeking to profit from mechanical cascades. This trader type is economically important because it reveals how public leverage information can itself become a strategic variable. The existence of liquidation hunters does not negate the value of shorting, but it complicates simplistic claims that all bearish activity enhances price discovery.

### V8. The DeFi optimizer

DeFi creates a distinctive trader archetype: the optimizer who routes collateral, borrowing, swapping, and derivatives through multiple protocols to construct short or market-neutral positions. This actor may not resemble a classic directional speculator. Instead, the trader treats DeFi as a composable balance-sheet environment. Their behavior highlights the modularity of shorting in on-chain markets and the role of technical sophistication in effective access.

### V9. The retail tactical short seller

Retail traders using perpetuals or inverse products often pursue short exposure tactically around momentum reversals, macro headlines, or social-media narratives. Their time horizon is usually shorter than that of institutional basis or treasury participants. This matters because retail tactical shorting can be highly procyclical. It may enter after negative momentum is already well underway, increasing crowding and squeeze vulnerability.

### V10. The distressed-system short seller

Some shorts target not simply a token but an institutional structure perceived as unstable: a stablecoin design, an exchange balance sheet, a lending platform, or a governance regime. This trader type became especially visible in episodes such as Terra and exchange collapses. Economically, these positions resemble trades against weak banking or quasi-monetary architecture rather than ordinary directional asset bets.

### V11. Why archetypes matter for theory

These archetypes matter because short interest is not homogeneous. The social meaning, persistence, and risk profile of bearish exposure depend on who holds it and why. A market dominated by basis shorts behaves differently from one dominated by activist skeptics or tactical retail bears. Empirical studies that ignore this heterogeneity risk misinterpreting aggregate funding or open-interest data.

### V12. Implications for regulation and research

Regulation should also take heterogeneity seriously. Hedging by miners or treasury desks is not equivalent to ultra-short-term leveraged speculation. Likewise, carry-oriented basis activity may improve market balance even if it resembles “shorting” in gross notional terms. Better classification of trader motives would improve both policy and scholarship.

## Appendix W. Crash episodes, squeezes, and path-dependent stress narratives

### W1. The short squeeze as a social and mechanical event

A crypto short squeeze is never merely a price increase against bearish traders. It is a social and mechanical event at once. The social side consists of narratives, online coordination, and the moralization of price moves as victories over skeptics. The mechanical side consists of margin thresholds, forced buybacks, liquidations, and benchmark-driven execution. This duality is one reason crypto squeezes are analytically rich. They combine crowd psychology with explicit infrastructure.

### W2. Benchmark-asset squeezes versus small-token squeezes

Large-asset squeezes in Bitcoin or Ether often involve substantial leverage and broad order-flow participation. Small-token squeezes, by contrast, can be driven by concentrated holders, thin liquidity, or even token-specific governance actions. The distinction matters because the policy implications differ. Large-asset squeezes raise questions about leverage design and market-wide stability. Small-token squeezes raise questions about manipulation, concentration, and whether meaningful bearish access ever really existed.

### W3. The role of visible liquidation levels

One reason crypto squeezes are so intense is that the market often has some visibility into leveraged positioning and likely liquidation zones. Even when exact trader identities are unknown, aggregate conditions are legible enough to make strategic attacks plausible. This changes the game-theoretic structure of shorting. Traders are not merely forecasting price; they are forecasting the forecastability of forced flows.

### W4. Squeezes under positive funding regimes

When funding is strongly positive, the market is effectively paying shorts to absorb long demand. This can create a tempting setup for basis and carry traders. Yet a squeeze in such an environment can be especially painful because traders may have grown accustomed to earning carry while underestimating path risk. Positive funding, in other words, is not just compensation. It may also be a warning that the market’s directional imbalance is extreme.

### W5. Squeezes under negative funding regimes

Negative funding regimes are often interpreted as evidence of bearish crowding or panic. In these conditions, the risk flips. A rebound can punish crowded shorts and produce sharp upward reversals. This matters because many retail and tactical traders enter short positions only after substantial declines, when downside narratives feel safest. The literature should therefore treat funding asymmetry as a state variable shaping not only expected carry but squeeze susceptibility.

### W6. Long liquidations as the mirror image of short squeezes

The literature on shorting must also study long liquidations because they shape the political economy of bearish success. A sharp decline often produces large forced selling by leveraged longs, which existing shorts can then profit from or amplify. These events show that the costs of shorting and longing are linked through the same infrastructure. A market designed for high leverage is not merely risky for shorts; it is symmetrically capable of disorder on both sides.

### W7. Exchange outages and stress amplification

A particularly important stress narrative arises when platforms suffer outages or degraded performance during volatile conditions. Traders may be unable to add collateral, close positions, or execute hedges. Such outages transform an already stressful squeeze or crash into a deeper institutional event. They underscore that operational continuity is part of the economics of shorting, not a peripheral engineering concern.

### W8. Stablecoin stress as squeeze amplifier

Stablecoin stress can amplify both squeezes and crashes because collateral quality affects traders’ ability to maintain positions. If the digital cash used for margin becomes suspect, then even correctly positioned shorts or hedges may be forced to shrink. This is one reason crypto stress episodes can propagate through channels unfamiliar to traditional equity shorting.

### W9. Cross-exchange contagion during liquidations

A trader liquidated on one venue may affect prices on another through arbitrageurs, benchmark spillovers, or collateral sales. This creates systemic feedback loops that challenge single-venue analyses. The most informative research designs therefore treat squeezes and crashes as network phenomena.

### W10. The lessons of path dependence

The general lesson from crypto crash and squeeze narratives is that path dependence matters enormously. Directional correctness is not enough. The survival of a short position depends on financing, operational continuity, and the collective behavior of other leveraged participants. This is why classic theories of limits to arbitrage remain so relevant in digital asset markets.

## Appendix X. Detailed empirical research designs

### X1. Staggered exchange-entry designs

One promising design exploits staggered listing of futures or perpetual products across exchanges and assets. If one token receives a credible shorting venue earlier than a comparable token, researchers can study changes in return dynamics, skewness, turnover, and sensitivity to negative news. The key challenge is selection: exchanges choose which assets to list. Matching or synthetic-control approaches may help address this.

### X2. Leverage-cap shocks as policy experiments

Exchanges frequently adjust maximum leverage or maintenance margin schedules. These changes can be treated as policy shocks to the effective supply of short and long exposure. Researchers can examine whether tighter leverage reduces volatility, compresses basis, or merely displaces trading to other venues. Heterogeneous responses by asset class would be especially informative.

### X3. Stablecoin-redemption events as collateral shocks

Stablecoin depegs, redemption freezes, or reserve disclosures can be used as collateral shocks affecting the cost of maintaining bearish positions. The empirical challenge is that such events also shift broad market sentiment. Nevertheless, by comparing contracts or venues that differ in collateral dependence, researchers may identify how much of the effect runs specifically through margin infrastructure.

### X4. Exchange insolvency and trust shocks

The failure or distress of a major venue creates a shock to trust, collateral access, and shorting capacity. Studying migration of open interest, funding, and basis across remaining venues can reveal whether bearish capacity is easily substitutable or deeply platform specific.

### X5. Natural experiments from regulatory segmentation

When one jurisdiction tightens access to retail crypto derivatives while another does not, the resulting divergence can support difference-in-differences analysis. Outcomes of interest include volume migration, basis behavior, volatility, and the composition of trader flows. Such work can illuminate whether regulated restrictions improve or worsen underlying market quality.

### X6. Address-level analysis in DeFi

Because on-chain protocols expose transaction histories, researchers can identify repeated behaviors consistent with borrowing-and-selling strategies, liquidation avoidance, or cross-protocol hedging. While address identity remains noisy, the transparency of flows offers rich opportunities for structural and network analysis.

### X7. Text-linked market analysis

Shorting in crypto is highly narrative sensitive. Researchers can combine market data with social-media activity, governance-forum debate, and short-research publication to study how discourse interacts with funding and liquidation dynamics. This may be especially useful in meme-coin and governance-token environments.

### X8. Comparative design studies across protocol architectures

Not all decentralized perpetual exchanges or lending protocols are alike. Comparative studies can examine how different oracle systems, insurance-fund designs, or funding mechanisms affect user behavior and resilience. These are effectively comparative-institutional studies implemented with transaction data.

### X9. Dealer-balance-sheet style models for crypto market makers

A fruitful direction is to adapt dealer-balance-sheet frameworks from bond and derivatives markets to crypto. Market makers often provide short capacity indirectly through hedging and basis strategies. Understanding when they expand or withdraw could substantially improve the literature on state-dependent market completeness.

### X10. Welfare-oriented empirical evaluation

Finally, empirical work should move beyond profitability and prediction toward welfare metrics. Does easier shorting reduce subsequent crash severity by limiting run-ups, or increase crash severity by scaling leverage? Does it improve hedging for real users such as miners or treasuries? These are harder questions, but they are the ones that matter most for policy.

## Appendix Y. Extended propositions and open hypotheses

### Y1. Proposition on benchmark depth

The deeper and more institutionally diverse the derivative market around an asset, the smaller the role of pure disagreement-based overpricing should be. This proposition predicts that Bitcoin and Ether should display weaker short-sale-constraint effects than small governance or meme tokens.

### Y2. Proposition on collateral quality

Holding other things constant, higher-quality collateral should expand the elasticity of short supply and reduce persistent basis distortions. This implies that improvements in stablecoin regulation or tokenized safe-asset availability should change shorting conditions measurably.

### Y3. Proposition on platform concentration

Highly concentrated platforms may initially improve liquidity and short access through network effects, but they also increase governance and counterparty risk. Over time, this may produce more fragile rather than less fragile bearish capacity.

### Y4. Proposition on social hostility

Assets with strongly mobilized online communities should exhibit higher squeeze risk and less stable bearish participation than equally liquid assets without such social coordination. This is a hypothesis about the interaction between culture and market structure.

### Y5. Proposition on DeFi capital intensity

Permissionless shorting should remain more capital intensive than centralized shorting in many settings because overcollateralization substitutes for identity and legal recourse. This predicts persistent differences in user composition across venues.

### Y6. Proposition on state dependence of completeness

Market completeness in crypto should contract sharply under stress as collateral weakens, arbitrage capital withdraws, and trust becomes more important than quoted opportunity. This proposition can be tested using crisis-period basis, open interest, and cross-venue price dispersion.

### Y7. Proposition on carry-provider fragility

Where a large share of short exposure is supplied by basis traders rather than conviction bears, the market may appear well balanced in normal times but be vulnerable to rapid deterioration when carry compresses or venue trust falls.

### Y8. Proposition on regulation and migration

Tighter regulation of visible retail leverage should improve welfare only if accompanied by credible alternative channels for hedging and institutional shorting. Otherwise, migration to weaker venues may offset intended benefits.

### Y9. Proposition on token-category heterogeneity

The social value and risk of shorting should differ sharply across token categories. In project-linked governance tokens, bearish pricing may enhance allocative efficiency. In highly social meme assets, the same mechanisms may generate more strategic squeeze dynamics than informational gains.

### Y10. Proposition on transparency paradox

Public visibility of leverage metrics should improve market legibility but may also facilitate predatory trading around liquidation levels. More transparency is therefore not unambiguously stabilizing.

### Y11. Proposition on stablecoin hierarchy

Shorting conditions should depend not just on whether collateral is “a stablecoin,” but on where that stablecoin sits in the hierarchy of trust, redemption, and regulatory clarity. Empirical research should therefore treat stablecoins as heterogeneous instruments.

### Y12. Proposition on long-run convergence

As tokenized safe assets and more robust digital cash instruments spread, the economics of crypto shorting should gradually converge toward the broader economics of collateralized finance. This may make digital-asset shorting less exceptional over time, even if some token categories remain socially unusual.

## Appendix Z. Final integrative reflection

The literature on crypto shorting ultimately reveals a broader truth about digital asset markets: they are not simply spaces of speculative enthusiasm, but laboratories for how modern finance organizes disagreement. Once this is understood, several apparent paradoxes dissolve.

The first paradox is that more shorting can coexist with persistent overvaluation. This is not a contradiction if one recognizes that shorting itself is costly, path dependent, and institutionally contingent. The second paradox is that more complete markets can become more fragile. This too is not a contradiction if completion occurs through leverage and weak collateral. The third paradox is that permissionless access can coexist with unequal effective participation. In complex systems, openness of interface does not guarantee equality of capability.

These paradoxes point toward a mature research program. Crypto shorting should no longer be studied as a narrow derivative topic, nor should it be reduced to morality tales about bears and bulls. It belongs within the central concerns of economics: how institutions aggregate information, how collateral supports markets, how private and public money interact, how platforms shape competition, and how law structures trust. Seen in that light, the study of shorting is not an edge case in crypto economics. It is one of its most revealing cores.

## Appendix AA. Annotated bibliography F: Empirical studies directly relevant to crypto shorting

### AA1. Research on Bitcoin futures introduction

A broad group of papers studies how the introduction of Bitcoin futures affected spot returns, volatility, and market efficiency. These papers are central because they provide one of the few quasi-experimental settings in which scalable bearish access changed discretely. Their findings vary, but collectively they show that derivatives introduction matters enough to justify serious empirical attention.

### AA2. Research on futures-versus-spot price discovery

Lead-lag studies between spot and futures markets help identify where informed or institutionally unconstrained traders prefer to express views. When futures lead, one plausible interpretation is that derivatives lower trading frictions for informed skeptics and hedgers. Yet the magnitude and stability of these lead-lag relations vary across periods and venues, reminding us that no single market permanently dominates.

### AA3. Research on perpetual funding predictability

Funding-rate papers are among the most practically important in the crypto shorting literature. They test whether funding predicts future returns, reversals, or liquidity stress. These studies matter because funding is the clearest public price of the imbalance between longs and shorts.

### AA4. Research on liquidation clustering

A growing set of empirical work examines whether liquidations cluster around particular times, volatility regimes, or exchange conditions. This literature is useful because it transforms anecdotes about liquidation cascades into measurable microstructure phenomena.

### AA5. Research on exchange failures and contagion

Studies and post-mortem analyses of exchange crises are crucial because they reveal how quickly apparently deep shorting capacity can evaporate when trust in a platform collapses. They also show that venue-specific shocks propagate through funding and price discovery channels.

### AA6. Research on stablecoin shocks and market quality

Work examining stablecoin depegs, reserve news, or redemption events is relevant because it exposes the monetary infrastructure beneath shorting. Such studies help identify whether collateral quality affects not just payments and settlement but also derivatives pricing and leverage capacity.

### AA7. Research on DeFi liquidations

On-chain research on liquidation events in lending protocols and decentralized derivatives is increasingly important. It offers detailed evidence on how permissionless systems handle leverage, how auction mechanisms behave, and where protocol design succeeds or fails under stress.

### AA8. Research on basis-trade profitability

Studies of cash-and-carry and reverse cash-and-carry strategies matter because they show when the market pays traders to supply short exposure and why those opportunities persist. Their findings often point to institutional frictions rather than pure market irrationality.

### AA9. Research on cross-exchange spreads

Cross-exchange spread studies reveal that even large crypto markets are not frictionless. For a review on shorting, this matters because a trader able to short in one venue but not another may face persistent wedges despite obvious textbook arbitrage.

### AA10. Research on option-implied downside risk

Option studies are relevant because they measure the demand for crash protection and the pricing of asymmetric downside risk. They complement linear-derivative studies by showing how bearishness is expressed when traders care about tails rather than only mean direction.

### AA11. Research on retail leverage behavior

Behavioral and empirical studies of retail use of perpetuals and margin products are important because they show how shorting and leverage are adopted at the user level. Many policy debates depend on assumptions about retail sophistication that still need better evidence.

### AA12. Research on miner and treasury hedging

A smaller but important literature examines hedging by miners, treasuries, and firms with crypto exposure. These studies help shift the conversation from speculative shorting to economically functional risk management.

### AA13. Research on manipulation and benchmark vulnerability

Work on spoofing, wash trading, benchmark games, and liquidation hunting matters because it asks whether crypto’s bearish infrastructure can be strategically gamed. This literature is central to any balanced welfare assessment of shorting.

### AA14. Research on exchange competition

Studies of how exchanges compete in leverage, listings, and user experience are indirectly but strongly relevant to shorting. The supply of bearish access is shaped by platform strategy. Higher leverage and easier onboarding may increase access while worsening resilience.

### AA15. What empirical work still lacks

Despite this progress, empirical work still lacks good data on OTC borrowing, prime-broker balance sheet, and the legal quality of collateral claims. As a result, the literature is stronger on visible flow than on the hidden supply constraints underlying visible flow.

## Appendix AB. Annotated bibliography G: Broader literatures that should be integrated into crypto-shorting research

### AB1. Safe-asset literature

The literature on safe assets, convenience yields, and collateral demand should be integrated more explicitly because shorting in crypto depends on the supply of trusted margin collateral. Stablecoins and tokenized cash instruments are a digital analogue of this problem.

### AB2. Shadow-banking scholarship

Work on repo, money-market funds, and collateral chains is highly relevant because crypto leverage often reproduces the same basic architecture in more visible form. The questions of rollover confidence, haircut dynamics, and collateral quality all travel well.

### AB3. Platform economics

Exchange competition, network effects, and multi-sided platform theory help explain why perpetual-swap venues could become dominant so quickly. The market for shorting is, in part, a platform market where user access, collateral, liquidity, and reputation are complements.

### AB4. Offshore-finance literature

The migration of leveraged crypto trading to offshore venues belongs in the longer history of regulatory arbitrage and geographically mobile speculative finance. Integrating this literature would improve the political economy of crypto shorting.

### AB5. Corporate-risk-management literature

Treasury hedging, inventory management, and corporate derivatives use are relevant because crypto shorting increasingly serves functional hedging needs for miners, treasuries, and funds rather than purely speculative attacks.

### AB6. Market-manipulation and benchmark-design scholarship

The literature on benchmark integrity, price manipulation, and strategic trading is indispensable because crypto derivatives often depend on composite indices or venue-specific mark prices. The quality of these benchmarks shapes both fairness and stability.

### AB7. Law-and-finance scholarship on custody and insolvency

Crypto shorting cannot be understood fully without the legal treatment of customer collateral and derivative claims. Law-and-finance research should therefore become a more prominent partner to empirical trading studies.

### AB8. Behavioral finance and attention-based trading

Because crypto prices are strongly influenced by attention and social coordination, behavioral-finance work on sentiment and overreaction should be integrated into models of shorting and squeezes. This is particularly important in meme-asset environments.

### AB9. Monetary hierarchy literature

The hierarchy of money provides a useful framework for thinking about stablecoins, tokenized deposits, and cash-like collateral. Shorting sits downstream of these monetary questions because it depends on what market participants accept as settlement-grade value.

### AB10. Research on financial crises and fire sales

The literature on liquidity spirals and fire sales is relevant because crypto liquidation cascades are essentially digitally accelerated examples of these mechanisms. Integrating the two literatures would strengthen both.

### AB11. Market-design scholarship

Scholarship on auctions, risk engines, and clearing design deserves more attention in crypto. Liquidation engines, insurance funds, and benchmark construction are market-design objects as much as financial ones.

### AB12. International political economy

Global regulatory divergence, dollar dominance, and capital mobility all shape where and how shorting in crypto develops. IPE scholarship can therefore add important explanatory power to what otherwise looks like purely technical market variation.

### AB13. Innovation and entrepreneurship finance

For project-linked tokens, shorting influences the cost and credibility of token-based finance. This links crypto shorting to broader questions about entrepreneurial funding, disclosure, and investor screening.

### AB14. Economic sociology of belief and community

Crypto communities often mobilize around narratives of identity and belonging. The sociology of belief, legitimacy, and community defense therefore matters for understanding anti-short politics and squeeze behavior.

### AB15. Why integration matters

A review article on crypto shorting should not remain confined to a narrow derivatives silo. The phenomenon touches money, collateral, governance, law, platform economics, and social coordination. The broader the integration, the better the scholarship.

## Appendix AC. Comparative comparison with equity, commodity, and FX shorting

### AC1. Comparison with equity shorting

Equity shorting traditionally relies on borrowing shares that represent residual claims on firms with legal personality, audited statements, and at least some anchor in expected cash flows. Crypto shorting is different along every one of these dimensions. Many tokens do not represent residual firm claims. Disclosure standards vary dramatically. Legal rights may be weak or ambiguous. The result is that bearish valuation in crypto often depends less on accounting skepticism and more on narrative, network, or institutional skepticism. Yet the core economics of disagreement and constraints still carry over, which is why the equity shorting literature remains so useful.

### AC2. Comparison with commodity shorting

Commodity futures offer another useful analogy because they often involve global trading, term structures, and inventory effects. Crypto resembles commodities in being globally traded and in having well-developed derivatives relative to some underlying spot markets. But crypto differs because it lacks physical storage costs, industrial use demand, and in many cases a well-defined convenience yield tied to production or consumption. This means that basis in crypto is shaped less by storage arbitrage and more by leverage demand, collateral constraints, and venue segmentation.

### AC3. Comparison with foreign-exchange derivatives

Crypto markets also resemble foreign exchange in that many trades are quoted against dollar-like units and involve global round-the-clock trading. Stablecoins, in some settings, function like offshore digital dollar funding legs. Yet crypto differs because the quality of the dollar-like unit itself is part of the trade. A short position in an equity future usually does not require taking a view on whether the margin currency is money-like enough to remain at par. In crypto, that question can be central.

### AC4. Comparison with credit and structured-finance shorting

A more subtle comparison is with shorting in credit markets, where the object of skepticism is often a structure rather than a simple price path. The Terra collapse and other system-level trades in crypto resemble shorting unstable funding or securitization architecture more than shorting a conventional equity. This is why shadow-banking and structured-finance analogies can be so productive.

### AC5. Comparison with volatility and crash insurance markets

In some segments, especially options and structured products, crypto shorting overlaps with the economics of volatility selling and crash insurance. The question is not merely whether the asset will fall but whether downside risk is overpriced or underpriced relative to realized outcomes. This links crypto to broader literatures on volatility surfaces and tail-risk transfer.

### AC6. Lessons from comparison

The comparative lesson is that crypto shorting is hybrid. It borrows from equity shorting, commodity derivatives, FX funding, structured-finance skepticism, and volatility markets, but is identical to none of them. A top-quality literature review should therefore resist the temptation to force crypto into a single traditional template.

## Appendix AD. Unresolved paradoxes and concluding theoretical puzzles

### AD1. The paradox of visible imbalance

Crypto markets reveal extraordinary amounts of information about positioning, funding, and liquidation risk. Yet this visibility does not necessarily stabilize them. Sometimes it stabilizes prices by warning arbitrageurs of crowding. At other times it destabilizes them by inviting strategic attacks on liquidation zones. This is the transparency paradox of crypto shorting.

### AD2. The paradox of democratized pessimism

Crypto appears to democratize bearish access through retail derivatives and DeFi. Yet the effective ability to use those tools still depends on capital, technical literacy, and tolerance for institutional ambiguity. Formal access broadens; practical mastery remains unequal.

### AD3. The paradox of maturing fragility

As markets mature, one expects fragility to decline. In crypto, maturity has indeed improved some dimensions of hedging and pricing. But maturity has also scaled leverage, collateral chains, and institutional interdependence. The result is not straightforward stabilization, but more sophisticated fragility.

### AD4. The paradox of carry-based skepticism

Some of the most important providers of bearish capacity are not true skeptics in the ideological or fundamental sense. They are carry traders harvesting funding and basis. This means the market can look balanced even when genuine fundamental disagreement is still dominated by optimists. The supply of pessimism can become financial rather than epistemic.

### AD5. The paradox of decentralization and governance

Permissionless protocols are often presented as reducing reliance on centralized authority. Yet bearish exposure in DeFi still depends on oracle committees, governance token distributions, developer influence, and liquidity-provider incentives. The governance problem changes form rather than disappearing.

### AD6. The paradox of policy success

Regulation that reduces visible leverage in one channel may look successful on paper while worsening the overall ecology of shorting if activity migrates to weaker venues. Conversely, allowing well-designed bearish products may look permissive while improving market quality. Policy evaluation in crypto shorting is therefore inherently second best and architectural.

### AD7. The paradox of informational justice

A market with strong communities and weak disclosure may need short sellers as information producers. Yet those same communities may see short sellers as illegitimate because their profits come from decline. This tension is one reason crypto repeatedly reenacts older social conflicts around finance in new technological form.

### AD8. The final theoretical puzzle

The deepest puzzle is whether crypto shorting will converge toward ordinary collateralized finance or remain permanently exceptional because its underlying assets are so socially and institutionally unusual. The answer may be both. Benchmark-asset shorting may increasingly resemble mainstream derivatives markets, while smaller token ecosystems retain intense political, social, and manipulation-sensitive characteristics. If so, future theory will need to explain not one trajectory, but a bifurcated market order.

## Appendix AE. Design matrix for evaluating crypto shorting systems

### AE1. Access dimension

A well-designed shorting system should specify who can participate, under what onboarding constraints, and with what educational or disclosure protections. Systems optimized for universal access may sacrifice prudential filtering, while highly gated systems may suppress useful hedging and price discovery. The design challenge is not simply open versus closed, but matched access to the sophistication required by the product.

### AE2. Collateral dimension

Collateral design is central. Key questions include whether collateral is fiat, stablecoin, tokenized safe asset, or volatile crypto; whether it is segregated; whether it earns yield; and how it can be moved across venues. The better the collateral, the more resilient the shorting system is likely to be under stress.

### AE3. Pricing dimension

Derivative marks, oracle feeds, benchmark construction, and index composition determine whether bearish and bullish traders are settled fairly. Poor price design can turn ordinary volatility into arbitrary liquidation.

### AE4. Liquidation dimension

A strong design should make liquidation rules clear, predictable, and proportionate. It should minimize unnecessary market impact while preserving solvency. Many crypto platforms still treat liquidation as a volume-generating spectacle rather than as a prudential last resort.

### AE5. Transparency dimension

Users need credible information on reserves, insurance funds, leverage conditions, benchmark methodology, and emergency powers. Transparency is not a cure-all, but opaque systems make it impossible to judge the quality of bearish access.

### AE6. Governance dimension

Who can change margin rules, halt trading, modify collateral eligibility, or intervene in liquidations? Governance powers are core design features, not administrative footnotes. A shorting system with unclear emergency powers may appear safe until stress reveals otherwise.

### AE7. Legal enforceability dimension

The legal status of collateral, customer assets, and derivative claims matters enormously. Even technologically elegant systems can fail if insolvency or asset segregation is unclear. Future market design should treat legal clarity as part of product design.

### AE8. Interoperability dimension

Shorting systems do not operate in isolation. They connect to spot venues, lenders, wallets, stablecoins, custodians, and sometimes on-chain protocols. Better interoperability can improve efficiency, but it can also transmit shocks. The design problem is therefore to achieve beneficial interoperability without creating hidden contagion channels.

### AE9. Welfare scoring

A useful comparative framework would score shorting systems on information efficiency, hedging support, resilience, fairness of access, and governance quality. Such a framework could help move policy debate beyond slogans about speculation.

## Appendix AF. Sectoral and user-level implications of better bearish infrastructure

### AF1. Miners and validators

Miners and validators with crypto-denominated revenues often need shorting infrastructure to stabilize cash flow and manage operational risk. Better bearish tools can therefore support the real-side sustainability of network security providers. This point is often underappreciated in political debate.

### AF2. Venture funds and token investors

Funds with large token exposures may use shorts to manage beta, hedge unlock schedules, or isolate idiosyncratic views. Their behavior influences how quickly negative information is incorporated into secondary markets after issuance.

### AF3. Exchanges and market makers

Exchanges and market makers depend on shorting because inventory imbalances arise naturally from customer flows. Better shorting systems can improve quoted depth and reduce the risk that liquidity providers withdraw during stress.

### AF4. Treasury and corporate users

Companies holding crypto on balance sheet, or receiving crypto-linked revenues, may use shorts defensively. In that sense, bearish infrastructure is part of corporate-finance modernization in digital asset sectors.

### AF5. Retail traders

For retail users, better bearish infrastructure is ambiguous. It can provide hedging and two-sided views, but it can also expose users to products whose path dependence and liquidation risk they do not fully understand. Product design and disclosure therefore matter greatly.

### AF6. Policymakers and supervisors

Supervisors need bearish infrastructure to be legible, not absent. If users cannot hedge or express negative views through supervised channels, activity may migrate into shadows that are harder to monitor. Thus policy can benefit from robust shorting architecture even when it is politically unpopular.

### AF7. Token issuers and protocol teams

Projects may dislike shorts, yet a market unable to sustain skepticism may be less credible to sophisticated investors. Over time, the availability of shorting may function as a market-based quality screen for tokenized projects.

### AF8. The broader implication

The supply of bearish infrastructure affects much more than speculative profits. It shapes risk management, inventory provision, market confidence, and the credibility of token-based finance. That is why this review treats shorting as a system-level institution.

## Appendix AG. Interdisciplinary synthesis

### AG1. What finance contributes

Finance contributes the core theories of disagreement, arbitrage, leverage, and market design. Without these tools, crypto shorting looks like a technological novelty rather than a variant of familiar financial problems.

### AG2. What monetary economics contributes

Monetary economics contributes the insight that collateral quality and the hierarchy of money are central to leverage. In crypto, this means stablecoins and tokenized cash cannot be treated as background plumbing.

### AG3. What law contributes

Law contributes the definition of the claim itself. A short position is not economically meaningful if the collateral or derivative contract is legally ambiguous. This is why bankruptcy, segregation, and governance rights matter.

### AG4. What political economy contributes

Political economy explains why shorting remains controversial even when it improves market completeness. Communities, platforms, and regulators all have distributional stakes in how pessimism is organized.

### AG5. What sociology contributes

Sociology contributes an understanding of belief, legitimacy, and collective identity. In meme-driven or community-centric assets, these variables directly influence squeeze risk and the cost of taking negative views.

### AG6. What computer science and mechanism design contribute

Protocol architecture, oracle design, liquidation algorithms, and risk engines are technical objects with economic consequences. Understanding crypto shorting therefore requires some fluency in market engineering as well as theory.

### AG7. Why interdisciplinarity is not optional

Shorting in crypto is one of those topics where no single discipline is enough. Asset pricing alone misses governance. Law alone misses funding. Sociology alone misses collateral. A strong literature review must therefore be integrative by design.

## Appendix AH. Additional comparative case studies

### AH1. CME versus offshore perpetual venues

Comparing CME Bitcoin futures with offshore perpetual venues is instructive because the two systems reveal different philosophies of bearish access. CME emphasizes regulated clearing, more conservative margining, and institutional admissibility. Offshore perpetual venues emphasize continuous access, high leverage, and broad global reach. The comparison shows that “more shorting” can be delivered through radically different institutional bundles. Researchers should therefore avoid treating notional volume as the sole measure of market development. The quality of collateral, legal recourse, and governance may matter as much as depth.

### AH2. Spot-borrowing desks versus exchange-internal lending

Some shorting ecosystems rely on bilateral or desk-based borrowing, while others internalize lending inside exchange platforms. Bilateral systems may offer more bespoke institutional control but less transparency and scalability. Exchange-internal systems offer convenience and standardization but concentrate conflict-of-interest and counterparty risk. The comparison helps explain why direct physical shorting never became the dominant mass-market route in crypto even when it remained economically important for institutional strategies.

### AH3. Aave-style borrowing versus centralized margin shorts

The contrast between decentralized lending and centralized margin is revealing. Aave-style systems make collateralization public and rule based, but usually demand overcollateralization and expose users to oracle and governance risk. Centralized margin can be more capital efficient but more opaque. Neither dominates on all margins. The literature should therefore evaluate these systems as alternative institutional responses to the same problem rather than as good versus bad archetypes.

### AH4. Bitcoin shorting versus governance-token shorting

Shorting Bitcoin increasingly resembles participation in a high-profile macro and institutional market. Shorting governance tokens often resembles venture skepticism under weak disclosure, thin liquidity, and high manipulation risk. The comparison matters because it suggests the category “crypto shorting” masks enormous heterogeneity. Future work should be more explicit about which class of asset is under discussion.

### AH5. Stablecoin depeg trades versus asset-price shorts

Some of the most important negative trades in crypto target not appreciation claims but stability claims. Betting against a stablecoin’s peg or architecture differs from shorting a speculative token. It is closer to a run-based challenge to an issuer’s balance sheet or redemption credibility. This comparison broadens the concept of shorting beyond straightforward directional price decline.

### AH6. Tokenized-safe-asset collateral versus legacy stablecoin collateral

As tokenized Treasury products and more robust digital cash instruments develop, traders may gain access to better forms of collateral for shorting. Comparing this emerging architecture with legacy stablecoin-based systems highlights a possible path toward less fragile leverage. The case comparison suggests that the future of shorting may depend as much on collateral modernization as on derivative innovation itself.

### AH7. Community-driven squeezes versus institution-driven dislocations

Some squeezes are mainly social phenomena driven by coordinated enthusiasm or anti-short identity politics. Others are more institutional, arising from funding imbalances, collateral stress, or platform policy changes. Distinguishing these types is analytically important because the appropriate responses differ. One calls for understanding collective behavior; the other calls for redesigning market plumbing.

### AH8. The overarching lesson from comparison

Comparative case analysis shows that crypto shorting is best understood as a family of institutional arrangements for making pessimism tradable. Each arrangement bundles access, trust, leverage, and governance differently. The most enduring contribution of the literature may be this comparative insight rather than any single empirical result.

## Appendix AI. Shorting assets with weak or contested fundamentals

### AI1. Why valuation anchors matter for shorting theory

In many traditional markets, short sellers can anchor their pessimism in relatively familiar objects: earnings, cash flows, assets in place, or macro fundamentals tied to sovereign obligations. Crypto complicates this because many tokens have weak, indirect, or contested claims on future cash flows. Some confer governance rights without robust cash claims. Some are valued primarily through network expectations or monetary narratives. Some are little more than social or attention assets. This does not make shorting impossible, but it changes what a bearish thesis means.

### AI2. Skepticism about narrative rather than cash flow

A short thesis in crypto often targets narrative sustainability rather than accounting overstatement. The trader may believe adoption expectations are implausible, token incentives are misaligned, governance is weak, or community enthusiasm is overextended. In such cases, the object of skepticism is partly sociological and institutional. This is one reason shorting in crypto is often so publicly contested: bearish traders are not merely saying revenues will disappoint; they are saying a community story will fail.

### AI3. The resale option and speculative valuation

Assets with weak fundamentals may still command high prices because buyers value the possibility of resale to more optimistic participants. In such settings, the role of shorting is not to reveal a hidden cash flow but to challenge the continuation of the resale chain. This suggests that crypto shorting often works through a higher-order expectations channel rather than a direct fundamental channel.

### AI4. Can an asset be overvalued without an intrinsic value benchmark?

This is one of the hardest conceptual questions in crypto economics. Strictly speaking, if no agreed intrinsic benchmark exists, claims of overvaluation become harder to formalize. Yet from the standpoint of market design, the key issue is often not objective intrinsic value but whether price reflects a balanced set of beliefs. A market can be institutionally biased toward optimism even when fundamental value is uncertain. That is enough to justify the relevance of short-sale theory.

### AI5. Fundamental ambiguity and squeeze risk

Weak fundamentals can increase squeeze risk in a paradoxical way. If no common anchor exists, traders may disagree not only about level but about whether any upper bound is meaningful. This makes timing shorts especially difficult. An asset can remain inflated under one narrative regime much longer than skeptics expect. In such environments, shorting requires unusually strong attention to path dependence and funding conditions.

### AI6. Governance tokens and reflexive fundamentals

Some crypto assets do have fundamentals, but those fundamentals are reflexive. Governance tokens may derive value from protocol usage, fee flows, treasury management, and expectations of future rule changes. A bearish thesis may therefore depend on whether governance and usage deteriorate together. Shorting such assets resembles skepticism toward a political economy rather than simply toward a security.

### AI7. Bitcoin and monetary narrative fundamentals

Bitcoin occupies a middle position. It lacks firm cash flows yet has a durable monetary and network narrative. Shorting Bitcoin can therefore target macro conditions, adoption expectations, or the plausibility of digital-gold demand. This shows that “weak fundamentals” is not a binary category. Different crypto assets have different kinds of anchors.

### AI8. Stablecoins and negative views on par claims

Stablecoins provide a special case in which the fundamental claim is not upside but stability. A bearish view here concerns redemption credibility, reserve sufficiency, or architecture. Shorting stablecoins or betting against their pegs therefore resembles attacking a par promise rather than an appreciation claim. This enriches the conceptual scope of crypto shorting significantly.

### AI9. What this means for empirical work

Empirical studies should be careful when interpreting correction as evidence that prices converged to fundamentals. In crypto, some corrections may instead reflect the breakdown of narratives, the withdrawal of speculative demand, or institutional shocks to leverage. That does not make them uninformative. It means the theory behind them must be broader than standard valuation reversion.

### AI10. The broader contribution of crypto to short-selling theory

By forcing researchers to analyze shorting in assets with weak or contested fundamentals, crypto pushes the short-selling literature beyond its traditional comfort zone. It highlights how institutions, narratives, and collateral can matter as much as balance-sheet fundamentals for the organization of pessimism.

## Appendix AJ. The political and social meaning of betting against crypto

### AJ1. Why shorting is morally charged in crypto

Shorting is morally charged in many markets, but crypto intensifies this because assets are often tied to visions of social change, financial autonomy, technological progress, or community identity. To short a token may therefore be interpreted not as a market view but as opposition to a project or ideology. This moralization shapes both public discourse and market behavior.

### AJ2. Community narratives and the construction of enemies

Token communities often define themselves in opposition to doubters, regulators, or traditional financial actors. Short sellers become natural symbolic enemies in this framework. This matters economically because communities may coordinate rhetorically or behaviorally against bearish traders, increasing squeeze risk and changing the payoff structure of public criticism.

### AJ3. The prestige of bullishness and stigma of pessimism

Crypto culture often rewards early bullish conviction, visible loyalty, and community evangelism. Pessimism, even when evidence based, may be stigmatized as cynicism or sabotage. This cultural asymmetry can itself function as a soft short-sale constraint, especially in thinner assets where social access and information depend on network participation.

### AJ4. The role of short research in weak-disclosure environments

In markets where formal disclosure standards are thin, private short research can serve as a substitute source of due diligence and accountability. This gives bearish speech a quasi-public-good dimension. Yet because short researchers may profit from decline, their credibility is continuously contested. The resulting epistemic conflict is one of the defining features of crypto public markets.

### AJ5. Anti-short campaigns and symbolic squeezes

Coordinated attempts to “punish shorts” are not unique to crypto, but the combination of social media, visible leverage, and community identity makes them especially potent in digital asset markets. Such campaigns can be partly performative, but they also have real financial effects when they interact with liquidation engines.

### AJ6. Regulators, legitimacy, and the optics of bearish trading

Regulators face a difficult legitimacy problem. Protecting markets from manipulation is popular. Defending the value of short sellers is not. Yet suppressing bearish participation can worsen one-sided markets. This creates a political asymmetry in which the socially useful aspects of shorting are often under-defended because they are harder to communicate than the harms of visible crashes.

### AJ7. What social meaning does to market design

Because shorting is politically sensitive, market design choices are not neutral. Exchanges may downplay risks or emphasize accessibility; protocols may frame leverage as empowerment; communities may valorize holders over traders. These symbolic choices affect who enters the market and how they perceive bearish positions.

### AJ8. The sociology of confidence and collateral

Confidence in stablecoins, venues, and protocols is partly technical and partly social. Trust is sustained not only by reserves and code but by reputations, public narratives, and expectations about what others will believe. The social meaning of shorting therefore extends into the collateral base itself.

### AJ9. Can skepticism become a governance function?

In some contexts, repeated public criticism by bearish traders may improve governance by pressuring exchanges, protocols, or issuers to improve transparency and risk management. If so, shorting should be understood partly as a decentralized governance mechanism, albeit an uneven and controversial one.

### AJ10. Why the politics of shorting belongs in economics

These social and political dimensions are not external to market economics. They alter the supply of bearish participation, the probability of squeezes, the credibility of information, and the legitimacy of regulatory response. A serious economic review therefore cannot treat them as mere background color.

## Appendix AK. Granular agenda of unanswered research questions

### AK1. How concentrated is the supply of shorting capacity across market makers, funds, and venues?

### AK2. How much of observed short interest is directional versus market neutral?

### AK3. Do stablecoin reserve disclosures measurably alter basis and funding within hours or days?

### AK4. Are some liquidation engines systematically more squeeze prone than others?

### AK5. Does proof-of-reserve reporting lower the cost of providing short exposure on a venue?

### AK6. How does shorting differ between staking-based assets and non-yield-bearing assets?

### AK7. Are DeFi shorts more resilient than centralized shorts during exchange-specific stress, or do oracle risks dominate?

### AK8. How much of cross-venue convergence depends on a small set of arbitrageurs with multi-venue balance-sheet capacity?

### AK9. When regulators restrict retail leverage, what fraction of activity migrates offshore versus disappears?

### AK10. Do online anti-short campaigns have measurable effects on funding, realized volatility, or liquidation clusters?

### AK11. How do shorting conditions differ across token categories such as benchmark coins, governance tokens, stablecoins, and meme assets?

### AK12. Under what conditions does tokenized safe collateral measurably improve the resilience of crypto basis trading?

### AK13. Are activist short reports in crypto more informative when disclosure quality is low?

### AK14. Can one build an economically meaningful index of market completeness in crypto using borrow, funding, basis, collateral, and venue-trust variables?

### AK15. Which market design choices best separate useful bearish participation from predatory exploitation of liquidation mechanics?

## Appendix AL. Integrated teaching cases for understanding crypto shorting

### AL1. Case one: A miner hedging production in a bullish market

Consider a miner with substantial expected Bitcoin production over the next quarter. Spot prices are high, the firm’s equity investors are optimistic, and perpetual funding is strongly positive because speculative demand for leverage is intense. The miner wants to reduce revenue uncertainty without fully selling the upside narrative to equity markets. A simple response is to short futures or perpetuals against expected production.

This case is instructive because it shows that shorting is not inherently anti-crypto. For the miner, the short is a corporate-finance tool that stabilizes cash flow and protects operational continuity. Yet the choice of instrument matters. Perpetuals offer flexibility and may even generate positive funding income for the miner if longs pay shorts. But they also expose the firm to mark-to-market volatility, liquidation rules, and exchange risk. Standard futures may be safer but less flexible. The case teaches that hedging value and infrastructural risk must be evaluated jointly. It also shows why regulation that indiscriminately suppresses bearish products can unintentionally impair real activity in the ecosystem.

### AL2. Case two: A basis fund in a positive-funding regime

Now consider a market-neutral fund observing persistently positive perpetual funding on Bitcoin. The fund buys spot, shorts perpetuals, posts stablecoin collateral, and collects funding while keeping directional exposure relatively low. On paper, the trade looks attractive and almost mechanical. In practice, the fund must manage custody, stablecoin quality, venue concentration, operational latency, and the possibility that funding flips abruptly.

This case reveals several central themes of the review. First, much of crypto shorting is supplied by actors without outright bearish conviction. Second, the apparent profitability of shorting may reflect compensation for non-price risks rather than market irrationality alone. Third, the trade depends on the quality of digital cash and on trust in the venue’s governance. The case therefore illustrates the fusion of arbitrage, money, and platform risk that characterizes modern crypto shorting.

### AL3. Case three: A retail trader shorting a meme coin

Imagine a retail trader who believes a meme coin has no meaningful long-run value. Borrow is unavailable, but an offshore perpetual contract exists with moderate liquidity and extreme price swings. The trader opens a levered short because the asset seems “obviously” overvalued. Shortly thereafter, online enthusiasm intensifies, open interest rises, and a sharp squeeze forces liquidation.

The lesson is not that the trader’s thesis was wrong. It is that in crypto, a valuation thesis does not map cleanly into a feasible short position. The trader underestimated path dependence, social coordination, and the lack of a common valuation anchor. This case is an ideal teaching tool because it links disagreement theory, limits to arbitrage, and the sociology of online market communities.

### AL4. Case four: A DeFi user constructing an on-chain short

A technically sophisticated trader posts Ether as collateral on a lending protocol, borrows a governance token, sells it into the market, and hedges part of the residual risk using an on-chain perpetual. The position is elegant and capital efficient relative to some alternatives, but now the trader bears collateral-volatility risk, oracle risk, smart-contract risk, governance-upgrade risk, and liquidity-fragmentation risk.

This case demonstrates that DeFi shorting is not simpler than centralized shorting; it is differently complex. It also shows why formal openness does not imply equal usability. The same protocol stack that enables permissionless participation demands sophisticated understanding of multiple interacting systems.

### AL5. Case five: A stablecoin depeg during broad market stress

Suppose a trader is correctly short a major crypto asset during a stress episode but holds collateral mainly in a large stablecoin that begins to wobble. The trader now faces a paradox: the directional position is working, but the monetary substrate supporting the position is deteriorating. If the stablecoin depegs sharply or exchange policies change, the trader may be forced to rebalance or withdraw precisely when directional conviction is strongest.

This case is especially useful for teaching because it reveals how different crypto shorting is from textbook shorting. The outcome depends not only on whether the asset falls, but on whether the cash leg remains trustworthy. The case also clarifies why stablecoin regulation and collateral quality belong inside, not outside, a review of shorting.

### AL6. Case six: A regulator deciding whether to restrict retail leverage

A policymaker observes recurring retail losses in offshore perpetual markets and considers restricting access to leveraged crypto derivatives. The policy intuition is understandable: fewer leveraged products, fewer crises. But the regulator must also ask what happens to price discovery, hedging, and migration. If informed and hedging demand simply relocates to weaker venues, the policy may reduce visible domestic leverage while worsening the global quality of the market.

This case shows that policy design in crypto shorting is a classic second-best problem. The regulator is not choosing between a clean, safe baseline and speculative excess. Instead, the choice is among institutional environments with different tradeoffs in access, transparency, and migration.

### AL7. Case seven: An exchange choosing leverage policy

Consider an exchange deciding whether to increase maximum leverage on a popular perpetual. Higher leverage may attract users and volume. It may also increase the exchange’s market share in price discovery. Yet it will likely increase liquidation sensitivity and potentially damage trust during stress. The exchange therefore faces a tension between competitive growth and long-run market quality.

This case is important because it highlights the industrial organization of shorting. Bearish capacity is partly a platform product, and platform incentives may not align with social welfare. A literature review that ignores exchange competition misses one of the structural determinants of crypto shorting.

### AL8. Case eight: A token project confronting skeptical research

A token project with thin disclosure and concentrated ownership faces a public short thesis alleging weak governance and unsustainable token emissions. The community frames the report as malicious fearmongering. Prices fall, funding shifts, and some leveraged longs are liquidated. Was this an instance of market discipline or predatory destabilization?

The case is unresolved by design. It teaches that in crypto, the boundary between informative skepticism and destructive attack cannot be evaluated using price impact alone. One must analyze evidence quality, market structure, and the project’s underlying vulnerability. This is one of the most important governance lessons of the literature.

### AL9. The pedagogical value of case-based thinking

These cases show why a purely regression-based understanding of crypto shorting is incomplete. The economics of bearish exposure are institutional and narrative as well as quantitative. Teaching through cases helps scholars and policymakers internalize the interaction between contract design, collateral quality, social meaning, and regulatory choice.

## Appendix AM. Extended reflections on regulation and institutional design

### AM1. Why leverage caps are a blunt instrument

Leverage caps are often the first policy response to concerns about shorting and derivatives in crypto. They are easy to understand and politically appealing. Yet they are blunt. A cap does not distinguish between hedging by an exposed treasury, carry provision by a basis trader, and reckless speculative gambling by an undercapitalized retail user. Nor does it solve the problem of migration if users simply move to less supervised venues. The literature suggests that leverage caps may be necessary in some settings, but they are rarely sufficient as a design philosophy.

### AM2. The importance of collateral standards

If one had to choose a single institutional lever more promising than broad product suppression, collateral quality would be a strong candidate. Better collateral reduces the fragility of shorting without necessarily preventing useful bearish participation. This is why stablecoin regulation, proof-of-reserves, segregation, and the development of tokenized safe assets may prove so important for the future of crypto derivatives.

### AM3. Transparency as market infrastructure

Proof-of-reserves, reporting of insurance funds, clarity about benchmark methodology, disclosure of emergency intervention powers, and public margin rules should be seen as infrastructure rather than public-relations gestures. They are part of the conditions under which shorting can contribute to market quality. Opaque leverage markets may deliver volume, but they do not deliver robust price discovery.

### AM4. The case for differentiated regulation by user and use case

Not all crypto shorting is the same. Regulatory design should distinguish among retail tactical leverage, institutional hedging, basis trading, and DeFi-based synthetic exposure. The optimal supervisory response to these uses is unlikely to be identical. A differentiated approach can preserve socially useful functions while constraining the most fragile or opaque forms.

### AM5. Why binary debates persist

Public debate still tends to ask whether crypto derivatives are good or bad, whether short sellers are heroes or villains, whether DeFi is freedom or chaos. These binaries persist because they are politically efficient. But they are analytically weak. The literature reviewed here suggests that almost every important question is conditional: good for whom, under which design, with what collateral, and under what governance.

### AM6. The promise of safer digital collateral

One reason the future of crypto shorting could be meaningfully better than its past is the gradual development of safer forms of digital collateral. If traders can margin positions with better reserve-backed instruments or tokenized short-duration safe assets, the link between bearish capacity and shadow-money fragility may weaken. This would not eliminate leverage risk, but it could materially improve resilience.

### AM7. The continuing challenge of DeFi supervision

Supervising permissionless shorting remains difficult because there may be no single legal person in control. Yet this does not mean there are no regulatory handles. Front ends, governance tokens, oracle providers, developer groups, and on-ramp relationships all create points of influence. The harder question is whether intervention at these points improves market quality or simply displaces activity into harder-to-observe forms.

### AM8. Cross-border coordination and regulatory arbitrage

Because crypto shorting is globally mobile, unilateral rules often reshape geography more than aggregate demand. This makes cross-border coordination unusually important. Without it, the market may sort into jurisdictions supplying credibility and those supplying leverage intensity. The resulting equilibrium can be privately functional yet socially brittle.

### AM9. Toward a principle-based framework

A sensible principle-based framework for crypto shorting would likely emphasize five things: credible collateral, transparent market rules, differentiated access, benchmark integrity, and enforceable protection of customer assets. Such a framework would not ban pessimism; it would civilize it institutionally.

### AM10. Final design lesson

The deepest design lesson is that a market cannot simply choose between enthusiasm and skepticism. It must choose how skepticism will be organized. Crypto shorting makes this truth unusually visible because the institutions are new enough for us to watch them being built in real time.

## Appendix AN. Methodological cautions and best practices for future review writers

### AN1. Avoid treating all derivatives as equivalent

One of the most common mistakes in both market commentary and early scholarship is to speak of “crypto derivatives” as though futures, perpetual swaps, options, structured products, and decentralized synthetic positions were institutionally interchangeable. They are not. Each instrument differs in benchmark design, collateral type, settlement mechanics, and user base. Future reviewers should therefore resist collapsing them into a single category simply for narrative convenience.

### AN2. Separate gross volume from effective market capacity

Large gross notional turnover does not necessarily imply deep, resilient shorting capacity. The same capital can recycle through the same venues, and high-frequency speculation can generate impressive volume even when true balance-sheet elasticity is thin. Review writers should therefore distinguish between visible activity and durable capacity.

### AN3. Treat collateral as part of the trade, not background plumbing

Crypto markets make it tempting to focus on the quoted derivative or the observed funding rate. But the quality, convertibility, and governance of the collateral are equally important. A short position collateralized by a trusted asset is economically different from one collateralized by a fragile private liability. Reviews that omit the cash leg miss a defining feature of digital leverage.

### AN4. Resist single-cause explanations

Because crypto markets are public and emotionally charged, there is a tendency to attribute large moves to a single narrative: manipulation, leverage, macro news, regulation, or social media. In reality, crypto shorting usually reflects overlapping causes. A good review should model these interactions rather than search for monocausal explanations.

### AN5. Be explicit about what counts as “fundamental” information

In crypto, bearish views often target adoption narratives, governance quality, stablecoin architecture, or exchange solvency rather than traditional cash-flow fundamentals. Review writers should state clearly what kind of information is being aggregated when they discuss price discovery. Otherwise, they risk importing equity-market intuitions too mechanically.

### AN6. Distinguish directional pessimism from functional short supply

Not every short is a negative long-run view. Basis traders, inventory hedgers, and treasury managers may all provide short exposure for reasons unrelated to directional belief. This distinction is essential for interpreting open interest, funding, and the welfare role of shorting.

### AN7. Pay attention to survivorship bias in venues and protocols

Crypto research often overweights the venues and protocols that survived. But many of the strongest lessons about shorting come from systems that failed, depegged, or never achieved durable adoption. Review writers should deliberately include negative cases to avoid biased inference.

### AN8. Use interdisciplinary evidence

A narrow focus on prices and regression results can miss the institutional heart of the issue. Legal documents, bankruptcy records, protocol governance histories, exchange policy archives, and qualitative interviews often provide evidence unavailable in standard price datasets. Strong future reviews will integrate these sources rather than ranking them below pure market data.

### AN9. Beware normative leakage

Shorting is morally contested. Scholars may be tempted to write as defenders of skeptical markets or critics of speculative predation. Both perspectives have value, but review writing is strongest when it surfaces the tradeoffs explicitly rather than smuggling them in through language.

### AN10. Keep the system boundary visible

Finally, future reviewers should keep the boundary of the system in view. Crypto shorting is not only a derivatives topic. It is about digital money, collateral, platform governance, law, and social coordination. Losing sight of that boundary is the surest way to produce an incomplete review.

## Appendix AO. Long-horizon interpretation of where the field is heading

### AO1. From spectacle to infrastructure

The earliest public understanding of crypto shorting emphasized spectacle: dramatic squeezes, traders blown out, ideological battles between believers and skeptics. Those elements remain, but the field is gradually moving toward infrastructure questions. The most important future debates are likely to concern collateral quality, regulated access, tokenized safe assets, cross-venue interoperability, and prudential design. This is a sign of institutional maturation, even if market culture remains noisy.

### AO2. From token-specific controversy to category-specific differentiation

Another likely shift is from generic talk of “crypto markets” toward a more differentiated understanding of token categories. Benchmark assets, governance tokens, stablecoins, meme coins, and tokenized traditional assets will not share the same shorting economics. The literature is already moving in this direction, and future work should accelerate it.

### AO3. From implicit to explicit monetary analysis

The monetary side of crypto shorting has long been present but often implicit. As stablecoins, tokenized deposits, and tokenized Treasury products become more important, the cash and collateral leg of shorting will become impossible to ignore. This may be one of the most important shifts in the next decade of research.

### AO4. From fragmented empirics to system mapping

Many existing studies focus on single venues, single instruments, or single events. Future scholarship will likely move toward system mapping: tracing how borrowing, collateral, derivatives, and narratives interact across centralized and decentralized environments. This broader mapping is necessary if the field is to speak credibly to financial-stability and regulatory questions.

### AO5. From moralized debate to design-centered debate

Public debate may slowly become less moralized and more design centered. Instead of asking whether shorts are bad actors, market participants and policymakers may increasingly ask which rules make bearish exposure useful rather than destructive. This would represent a genuine improvement in analytical quality.

### AO6. Why this topic will remain important

The economics of crypto shorting will remain important even if some token manias fade, because the topic sits at the convergence of several durable trends: the digitization of collateral, the growth of tokenized finance, the competition among trading platforms, and the continuing search for institutions that can organize disagreement in always-open global markets. The literature reviewed in this paper is therefore not a side branch of crypto studies. It is part of a broader story about how twenty-first-century finance learns to price skepticism.

## Appendix AP. If shorting is market infrastructure: a design playbook

### AP1. Start from function, not stigma

The first principle is that designers and regulators should begin by asking what function a shorting mechanism serves. Is it primarily for hedging operational exposure, supplying basis liquidity, enabling market-neutral strategies, facilitating institutional price discovery, or maximizing speculative retail access? Different functions justify different design choices. Treating all negative exposure as morally equivalent obscures the fact that some forms of shorting are closer to public market infrastructure than to gambling.

### AP2. Match leverage to collateral quality

Leverage is not a free-standing variable. Its safety depends on the quality and liquidity of collateral. A system that allows high leverage against weak or unstable collateral is courting fragility. By contrast, moderately levered systems backed by strong and transparent collateral can support useful hedging and arbitrage with fewer systemic concerns. This principle seems obvious, yet much of crypto market design historically violated it.

### AP3. Design for orderly failure, not only profitable activity

Many crypto trading venues were built to maximize activity in good times rather than to handle failure gracefully in bad times. A better design philosophy treats orderly liquidation, collateral transfer, and bankruptcy protection as central. Shorting mechanisms should be evaluated by how they behave when markets gap violently, benchmarks fail, or venues face solvency questions. Markets that only work when prices move slowly are not robust infrastructure.

### AP4. Make benchmark integrity non-negotiable

Shorting systems depend heavily on the prices used to mark positions and trigger liquidations. Poorly designed benchmarks can convert routine volatility into unjust transfers of wealth and unnecessary systemic stress. Designers should prioritize multi-venue benchmark quality, anti-manipulation safeguards, and clear fallback procedures for outages or data anomalies.

### AP5. Separate custody trust from directional conviction

A trader should be able to take a bearish view on an asset without being forced to make a heroic leap of faith about the custodian, the exchange, or the stablecoin used as collateral. In practice, crypto has often bundled these risks. A better infrastructure separates them. The cleaner the separation, the more informative and welfare-enhancing shorting becomes.

### AP6. Preserve room for skeptical information production

Healthy markets need channels through which negative information can be expressed and priced. That means not only allowing bearish trades but also protecting evidence-based critical research from being misclassified automatically as market abuse. The relevant line should be drawn around falsehood, manipulation of mechanics, and undisclosed conflicts, not around pessimism itself.

### AP7. Recognize that transparency can have two effects

A design playbook should treat transparency as powerful but ambivalent. Public funding, open-interest data, and proof-of-reserve disclosures can improve trust and price discovery. Yet public leverage maps can also make liquidation levels more gameable. Good design therefore distinguishes between transparency that supports informed trust and transparency that turns the market into a tactical battlefield.

### AP8. Reduce hidden maturity and liquidity transformation

Shorting systems become fragile when they rely on implicit maturity transformation, unstable redemption promises, or collateral whose liquidity is overstated. This is especially important where stablecoins, exchange credits, or internally recycled collateral support large derivative books. Designers should minimize hidden transformation if they want bearish capacity to remain resilient.

### AP9. Use differentiated access rather than one-size-fits-all exclusion

Blunt exclusion can reduce visible risk while encouraging migration to weaker venues. More promising is differentiated access: some products for hedgers and institutions, more constrained products for retail users, and clearer disclosure of path dependence and liquidation mechanics for all users. Differentiation is messier than simple prohibition, but it is often more economically coherent.

### AP10. Treat DeFi as design space, not ideology

DeFi shorting should neither be romanticized nor dismissed. It is a design space with some advantages, including transparency and modular experimentation, and some disadvantages, including oracle risk and capital inefficiency. A sound playbook evaluates protocols on institutional performance rather than ideological labels.

### AP11. Encourage safer collateral innovation

A major long-run opportunity lies in improving the digital collateral used for shorting. Tokenized safe assets, more credible reserve-backed instruments, and legally clearer digital cash could all reduce fragility without suppressing market completeness. If crypto shorting becomes safer over time, it will likely be because the cash leg improved more than because bearish traders became morally better.

### AP12. Integrate cross-venue monitoring

Because crypto shorting spans spot, futures, perpetuals, lending, and DeFi, monitoring cannot remain venue specific. Regulators and researchers need cross-venue dashboards of collateral stress, open interest migration, and liquidation exposure. Without system-wide visibility, policy will always be one crisis behind.

### AP13. Design for migration, not static compliance

Whenever one channel of shorting becomes more constrained, traders will ask where they can migrate. Effective policy therefore anticipates substitution. If regulated products are restricted, what offshore or decentralized products will absorb the demand? If a major stablecoin weakens, what collateral will replace it? Good design is dynamic in this sense.

### AP14. Align platform incentives with market quality

Platforms often earn more from volume, leverage, and user excitement than from resilience. A mature design playbook would look for ways to align platform incentives with long-run market quality, perhaps through stronger transparency requirements, collateral standards, or rules around benchmark governance and emergency powers.

### AP15. Build legitimacy for skepticism

Finally, any sustainable shorting ecosystem requires social legitimacy for skepticism. Markets need cultural as well as legal room for the possibility that an asset, a venue, or a digital-money design is weak. Without that legitimacy, bearish capacity remains politically fragile even if technically available.

### AP16. Why infrastructure thinking changes the debate

Once shorting is understood as infrastructure rather than mere betting, many public arguments change. The question is no longer “Why let people profit from decline?” but “How should a market organize negative information, hedging, and balance-sheet transfer?” This reframing may be one of the most important contributions the crypto literature can make to broader finance.

### AP17. Relation to the future of tokenized finance

As tokenized finance expands beyond native crypto assets into tokenized money, funds, and real-world claims, the design lessons from crypto shorting may travel widely. Many future digital markets will need ways to express negative views, hedge inventory, and support arbitrage across tokenized instruments. The institutions built in crypto today may therefore have lasting influence outside crypto itself.

### AP18. Final playbook lesson

The most concise statement of the playbook is this: good shorting systems make pessimism tradable without making fragility inevitable. Achieving that balance is difficult, but it is a realistic design goal. Crypto has not consistently met it yet, which is precisely why the topic deserves sustained scholarly attention.

## Appendix AQ. Market-state analysis: how shorting behaves across regimes

### AQ1. Quiet, range-bound markets

In quiet and range-bound markets, the economics of shorting often look closest to textbook finance. Volatility is moderate, basis relationships are more stable, and arbitrage capital can move across venues without extraordinary stress. In this regime, the most visible shorts may be basis traders, market makers, and treasury hedgers rather than highly convicted directional bears. Funding rates can still matter, but they are less likely to signal immediate systemic strain. The social meaning of shorting also recedes. A short position in a range-bound market is more likely to be interpreted as normal trading than as ideological attack.

Yet even in quiet regimes, crypto shorting differs from traditional shorting because the collateral base and platform ecology remain more contingent. A market can look calm while the underlying structure remains brittle. This is why low realized volatility should not be mistaken for institutional maturity. Quiet periods are often when leverage quietly rebuilds and when users become comfortable with forms of collateral or venue concentration that later prove fragile.

### AQ2. Bull-market euphoria

Bull markets transform the economics of shorting. Positive funding becomes common, long leverage expands, and bearish traders are forced to ask not only whether prices are too high but whether momentum and community enthusiasm can sustain further increases. In this regime, shorting is often expensive emotionally and professionally even when it is financially subsidized through positive funding. Traders can be right on value and wrong on path.

Bull-market euphoria also changes the composition of short supply. Carry traders and hedgers may continue to provide shorts, but outright directional bears become rarer or smaller relative to market size because squeeze risk is high. This means that markets can remain informationally imbalanced even when shorting is technically available. Positive funding therefore should not be read simply as a sign that pessimists are being rewarded. It is also a sign that the market’s long demand may be intense enough to overwhelm many skeptical actors.

Another important feature of euphoric regimes is that anti-short politics become more visible. Communities celebrate squeezes, projects frame criticism as sabotage, and exchanges may market leverage aggressively because user demand is strong. As a result, bull markets are often when the institutional weaknesses of shorting are easiest to ignore.

### AQ3. Early correction phases

In early correction phases, the tone of the market changes but not all the leverage disappears immediately. This creates a distinctive environment for shorting. Funding may remain positive even as spot weakens, because many traders continue to buy dips or defend narratives. Skilled bearish traders may profit in this regime, but the risk of violent rebound remains high. This phase is often the most analytically revealing because it separates trend following from deeper stress.

Researchers should pay particular attention to how basis, stablecoin flows, and cross-venue spreads behave in early corrections. If arbitrage remains active and collateral trustworthy, the system may digest the move with relatively little dislocation. If spreads widen and collateral begins to migrate defensively, the correction may foreshadow a more systemic event.

### AQ4. Panic regimes and deleveraging spirals

Panic regimes are where the infrastructure of shorting is tested most severely. Long liquidations intensify downside moves, exchanges tighten margins, stablecoins may trade under stress, and users question venue solvency. In such episodes, being short can be directionally profitable while still institutionally dangerous. The trader may face withdrawal problems, benchmark anomalies, or collateral impairments.

This regime is crucial because it reveals whether the market’s bearish capacity is resilient or merely fair-weather. A robust system would allow negative views and hedges to continue functioning during stress. A weak system may see open interest collapse, arbitrage withdraw, and prices fragment across venues. The literature’s emphasis on state-dependent completeness is most persuasive in these moments.

### AQ5. Post-crisis repair regimes

After major crises, markets often enter a repair regime characterized by lower leverage, tighter risk controls, stronger demand for trusted collateral, and renewed attention to venue quality. In these periods, shorting may become less sensational and more professionalized. Basis strategies return cautiously, institutional products gain relative share, and users become more selective about where they warehouse collateral.

This regime is important because it is when institutional learning occurs. Exchanges revise risk systems, policymakers consider reforms, and market participants rethink the tradeoff between convenience and safety. The future architecture of shorting is often shaped more by these repair phases than by the crises themselves.

### AQ6. Regimes of collateral innovation

A more structural market state arises when the available collateral set changes meaningfully, for example through the emergence of stronger reserve-backed stablecoins, tokenized Treasury funds, or tokenized deposit products. In such periods, the cost and resilience of shorting may improve not because directional views change, but because the margin substrate improves. This is a reminder that the future of shorting may be driven as much by digital-money innovation as by derivative innovation.

### AQ7. Regimes of regulatory transition

Regulatory change can create its own regime shifts. When jurisdictions tighten retail leverage, clarify stablecoin rules, or alter the legal treatment of venues, the supply of bearish exposure can migrate or reprice rapidly. Researchers should treat these transitions as first-order market states rather than as background conditions. In some cases, regulatory clarity may encourage higher-quality shorting by attracting institutional capital. In others, it may drive activity into weaker environments.

### AQ8. Meme-cycle regimes

Certain market phases are dominated by meme-driven assets and attention cycles. In these regimes, shorting becomes socially and strategically different. Valuation anchors are especially weak, online coordination is strong, and tactical squeezes become central. Even if not systemically dominant in notional terms, meme-cycle regimes are analytically valuable because they make the social construction of bearish risk highly visible.

### AQ9. Institutional-macro regimes

At other times, especially around large benchmark assets, crypto trades increasingly as part of a macro portfolio environment. Funding, treasury yields, equity volatility, and dollar conditions all influence positioning. In these regimes, shorting begins to look more like institutional cross-asset finance and less like culturally specific crypto warfare. This regime shift is important because it suggests one path by which digital asset markets might converge toward broader financial norms.

### AQ10. Regime-switching as the central fact

The broader lesson from market-state analysis is that no single empirical generalization about crypto shorting is likely to hold across all regimes. A variable that predicts reversal in euphoric markets may mean something different in panic or repair phases. A venue that appears liquid in quiet periods may prove fragile in stress. This is why regime-aware research designs are essential.

### AQ11. Implications for scholarship

For scholars, market-state analysis implies that pooled regressions or average treatment effects may mask the real economics of shorting. More work should be done with regime-switching models, narrative state identification, and interactions between funding, collateral, and volatility variables. Crypto shorting is an environment where state dependence is not a technical nuisance but the heart of the subject.

### AQ12. Implications for policy

For policymakers, the message is equally clear. Rules optimized for quiet periods may fail in panics. Rules designed in reaction to panics may be too blunt in quiet times. A resilient framework for crypto shorting may therefore need countercyclical features, stronger stress-state transparency, and explicit plans for collateral and venue disruption.

### AQ13. Implications for market participants

For traders, funds, and treasuries, regime awareness means that the same shorting strategy can change character over time. A basis trade in one period is a near-cash management strategy; in another it becomes a highly contingent bet on venue solvency and collateral continuity. Sophisticated participation in crypto shorting therefore requires institutional state awareness as much as price forecasting.

### AQ14. Final regime lesson

The central insight is simple but profound: crypto shorting is not one market practice with one risk profile. It is a family of practices whose meaning depends on the state of leverage, collateral trust, social narrative, and regulatory structure. The literature will remain incomplete until this regime dependence is treated as fundamental rather than incidental.

## Appendix AR. A practical evaluation framework for readers, reviewers, and policymakers

### AR1. Question one: What exactly is being shorted?

The first evaluative question should always be conceptual. Is the trader shorting a benchmark crypto asset, a governance token, a meme asset, a stablecoin architecture, an exchange token, or a tokenized real-world claim? Different objects imply different valuation anchors, liquidity conditions, and policy concerns. A surprisingly large share of confusion in the literature comes from discussing “crypto shorting” as though the underlying assets were homogeneous. They are not. The object of the short determines much of the economics before one even asks about venue or leverage.

### AR2. Question two: Through which instrument?

The second question concerns the instrument: spot borrow, standard futures, perpetual swap, options, structured product, or DeFi synthetic position. This matters because the same directional view can have very different risk and welfare implications depending on the channel used to express it. Spot shorts reveal borrow scarcity; perpetuals reveal crowding through funding; options reveal demand for convex protection; DeFi positions reveal the role of overcollateralization and oracle design.

### AR3. Question three: With what collateral?

The third question is what collateral supports the position. Is it fiat in a trusted institutional environment, a major reserve-backed stablecoin, a weaker private digital liability, a volatile crypto asset, or an emerging tokenized safe asset? The answer determines whether the short position embeds second-order exposure to collateral fragility. Scholars and policymakers should never treat this as a secondary detail.

### AR4. Question four: On what type of venue?

A short position on a regulated futures exchange, an offshore integrated platform, and a decentralized protocol are economically different even if the notional direction is identical. Venue type determines governance powers, legal recourse, benchmark quality, and likely user composition. It also determines what kind of stress event is most dangerous: insolvency, migration, oracle failure, or regulatory crackdown.

### AR5. Question five: For what purpose?

The fifth question concerns motive. Is the position a hedge, a carry trade, an activist bet, a tactical momentum short, or a market-making hedge? Motive matters because it affects persistence, crowding, and the informational content of the trade. A position opened to harvest funding is not the same as a position opened to challenge a token’s long-run value, even if both are “shorts.”

### AR6. Question six: In what market regime?

The sixth question is temporal and state dependent. A short in a calm market with stable collateral and moderate leverage is not the same as a short during a panic or a euphoric squeeze regime. The market state shapes not only risk but the very meaning of observed funding, basis, and open interest.

### AR7. Question seven: Does the mechanism enhance information, resilience, both, or neither?

The final evaluative question is normative. Some shorting arrangements enhance price discovery but weaken resilience. Others improve hedging while doing little for public information. Still others mostly increase speculative turnover. A good framework should classify mechanisms across both informational and prudential dimensions.

### AR8. Why such a framework matters

A practical framework of this kind can help reviewers assess manuscripts, regulators evaluate products, and market participants compare venues. More importantly, it disciplines the discourse. It forces analysis away from slogans about whether shorts are good or bad and toward a more serious institutional comparison. That, ultimately, is what a top-tier review article should contribute.

## Appendix AS. Consolidated propositions of the review

### AS1. Proposition of asymmetric beginnings

Cryptocurrency markets began from a structurally asymmetric position in which optimistic participation was easier than pessimistic participation. This asymmetry was not merely cultural. It was institutional, reflecting weak borrowing markets, limited derivatives, poor custody infrastructure, and restricted institutional access. Any history of crypto pricing that omits this starting point is incomplete.

### AS2. Proposition of institutional transformation rather than simple liberalization

The expansion of shorting in crypto should not be described as the removal of constraints in a linear sense. Old constraints were transformed into new ones. Borrow scarcity gave way, in part, to funding risk, venue risk, collateral risk, and liquidation risk. The market became more complete, but not frictionless.

### AS3. Proposition of instrument heterogeneity

Spot shorts, futures, perpetuals, options, inverse products, and DeFi synthetics are not interchangeable routes to the same economic object. They produce different mixes of information, carry, leverage, and governance exposure. The literature should therefore reject single-variable notions of “shorting availability.”

### AS4. Proposition of collateral centrality

No understanding of crypto shorting is adequate if it treats collateral as incidental. Stablecoins, exchange credits, volatile crypto collateral, and tokenized safe assets all shape the feasibility and resilience of bearish exposure. This is one of the sharpest ways in which crypto shorting differs from textbook models.

### AS5. Proposition of state-dependent completeness

Crypto market completeness is cyclical. In calm periods, derivatives and arbitrage may appear deep enough to balance views effectively. In stressed periods, that completeness can shrink as confidence in collateral and venues deteriorates. The same market can therefore look informationally efficient in one regime and severely constrained in another.

### AS6. Proposition of platform-shaped pessimism

Bearish capacity in crypto is strongly shaped by platform design. Exchanges and protocols determine leverage, collateral eligibility, liquidation logic, and benchmark construction. As a result, the supply of pessimism is partly a product chosen and marketed by private infrastructures.

### AS7. Proposition of monetary entanglement

Crypto shorting is entangled with digital money. Stablecoins and tokenized cash-like assets are not merely the settlement layer underneath price speculation; they are part of the mechanism through which negative exposure becomes feasible. This entanglement makes crypto shorting relevant to monetary economics, not only to derivatives research.

### AS8. Proposition of heterogeneous trader motives

Much observed short exposure is not held by pure directional bears. Basis traders, market makers, treasury hedgers, and protocol optimizers all provide short capacity for reasons distinct from deep pessimism. Aggregate short metrics therefore conflate motives that have different welfare implications.

### AS9. Proposition of socially contested skepticism

Because many crypto assets are embedded in strong identity and innovation narratives, shorting is socially contested in ways that exceed ordinary market disagreement. This social contestation affects both private risk and public policy. It is not external noise; it is part of the institution.

### AS10. Proposition of design over ideology

The central policy and scholarly question is not whether crypto shorting is ideologically desirable, but how it should be designed. Good design can make pessimism informative and hedgeable without making liquidation cascades inevitable. Poor design can turn even reasonable bearish participation into a source of recurrent instability.

### AS11. Proposition of comparative stratification

The future of crypto shorting is likely to be stratified. Benchmark assets such as Bitcoin and Ether may continue to move toward relatively mature, institutionally legible forms of bearish trading. Smaller, social, or governance-heavy tokens may remain thin, squeeze-prone, and politically charged. This stratification should become a central organizing principle of future literature.

### AS12. Proposition of converging collateral but persistent social difference

Over time, the collateral and legal architecture of crypto shorting may converge toward broader financial norms through better stablecoin regulation, tokenized safe assets, and more institutional custody. Yet the underlying assets may still retain unusual social and narrative properties. The future market may therefore be financially more ordinary while remaining culturally distinctive.

### AS13. Proposition of second-best regulation

There is no first-best regulatory solution in a globally fragmented, technologically mobile market. Banning risky channels can worsen migration. Tolerating everything can entrench fragility. The best available policy is likely to be second-best and design oriented: strengthen collateral, transparency, segregation, benchmark integrity, and differentiated access.

### AS14. Proposition of interdisciplinary necessity

No single field can explain crypto shorting adequately. Asset pricing explains disagreement and return dynamics. Market microstructure explains execution and liquidation. Monetary economics explains collateral. Law explains enforceability. Sociology and political economy explain anti-short politics and legitimacy. The phenomenon is interdisciplinary at its core.

### AS15. Proposition of broader relevance

Finally, the literature on crypto shorting matters beyond crypto. As finance becomes more digital, tokenized, and platform mediated, many markets will confront similar questions about how to organize negative information, collateralized leverage, and cross-venue arbitrage. Crypto is an early and unusually visible laboratory for those questions.

## Appendix AT. Common misunderstandings in the public debate on crypto shorting

### AT1. “Shorting means wanting the market to fail”

This is perhaps the most widespread misunderstanding. In reality, many short positions in crypto are hedges, basis trades, inventory offsets, or risk-management tools. Even when a trader is directionally bearish, that does not imply hostility to market functioning. Quite the opposite: the availability of bearish expression can be a precondition for more credible price discovery.

### AT2. “If shorting exists, bubbles should disappear”

Classic theory never promised that the mere existence of shorting eliminates bubbles. Pessimists can remain constrained by capital, timing, funding, collateral, and career risk. Crypto adds exchange governance, stablecoin quality, and liquidation structure to that list. Bubbles can therefore persist even in markets with substantial shorting infrastructure.

### AT3. “Perpetual funding tells you everything”

Funding is an important signal, but not a complete one. It can reflect directional demand, carry opportunities, venue incentives, collateral conditions, and strategic positioning. Treating funding as a single-index summary of market sentiment is too simplistic for serious analysis.

### AT4. “More leverage always means more informational efficiency”

Leverage can make information tradable, but it can also amplify noise and force traders out before their information pays off. In crypto, leverage is deeply entangled with liquidation design. More leverage is therefore not a monotone improvement in market quality.

### AT5. “DeFi solves the trust problem”

DeFi changes the trust problem. It may reduce reliance on one centralized intermediary, but it increases reliance on oracles, governance, code quality, liquidity providers, and sometimes centralized front ends. This is a redesign of trust, not its disappearance.

### AT6. “Stablecoins are just cash in the background”

Stablecoins are often treated as neutral dollars inside the system. For shorting, this is a dangerous simplification. Stablecoins are active components of leverage architecture. Their quality and convertibility shape the effective cost and resilience of bearish positions.

### AT7. “Exchange volume proves market depth”

High quoted or reported volume does not prove that a market can absorb large short or long adjustments without instability. Volume can be generated by recycling capital, internalization, incentives, or speculative churn. Depth, resilience, and legal robustness are different questions.

### AT8. “Retail access is the same as democratization”

Making a leveraged product easy to click does not guarantee that users understand its path dependence or can survive its risk profile. Democratization worthy of the name requires not only access but intelligibility and fair institutional conditions.

### AT9. “Regulating shorts means protecting the public”

Sometimes it may. But regulation that simply suppresses visible channels can drive activity into darker, weaker venues and make underlying spot pricing worse. Protection depends on the architecture of substitution, not only on the product removed.

### AT10. “Crypto shorting is too niche to matter for economics”

The opposite is closer to the truth. Crypto shorting concentrates in one place many of economics’ central concerns: disagreement, collateral, money, market design, political legitimacy, and global regulatory arbitrage. That is precisely why it is such a useful object of study.

## Appendix AU. How different audiences can use this review

### AU1. For academic economists

Academic economists can use this review in three ways. First, as a map of how classic short-sale and limits-to-arbitrage theory travels into a digitally native market. Second, as a guide to new empirical objects such as funding rates, public liquidation data, and on-chain collateral. Third, as a reminder that some of the most important questions in crypto are not about returns alone but about institutional design. For economists trained mainly on equities or macro assets, crypto shorting offers a compressed environment in which disagreement, leverage, collateral, and platform governance are unusually visible.

### AU2. For finance scholars focused on market microstructure

Microstructure scholars can use the review as a bridge between high-frequency market design and broader questions of welfare. Crypto shorting is not just about order flow and execution quality. It is also about how benchmark design, funding mechanisms, and liquidation rules shape the incentives of traders and market makers. The field offers a rare chance to observe how risk-engine architecture affects market outcomes in real time.

### AU3. For scholars of money and banking

Researchers in monetary economics and banking can use the review to see why stablecoins and tokenized cash instruments are economically consequential beyond payments. They support leverage, arbitrage, and price discovery. Shorting in crypto is therefore one of the practical settings in which private digital money acquires systemic relevance. That perspective may prove increasingly important as tokenized safe assets and digital settlement instruments develop.

### AU4. For legal scholars and policymakers

Legal scholars can use the review to identify where economic analysis depends on assumptions about custody, segregation, and enforceability that may not hold in practice. Policymakers can use it to avoid binary debates. The paper’s central message is that the question is not whether pessimism should exist, but how it should be institutionally organized.

### AU5. For practitioners and risk managers

Practitioners can treat the review as a checklist of hidden layers behind an apparently simple short position. Directional thesis is only one layer. Others include collateral quality, venue trust, benchmark design, migration risk, and market regime. For treasury managers and market makers, this may be the most practically important lesson in the entire paper.

### AU6. For future review writers

Future review writers can use this manuscript as a reminder that crypto topics often need to be written at two levels at once: the narrow product level and the wider institutional level. Shorting is a perfect example. A review that stays too close to product mechanics misses money, law, and politics. A review that stays too abstract misses the actual channels through which pessimism is traded.

### AU7. The final use-value of the paper

The final use-value of a review like this is synthesis. Crypto shorting is easy to discuss as scandal, spectacle, or technical niche. It is harder to understand as a general problem in modern financial organization. The ambition of this paper has been to provide that wider frame. If successful, it should help readers see shorting not as an awkward footnote to digital-asset markets, but as one of the clearest points where their economic essence becomes visible.

## Appendix AV. Core tensions that structure the field

### AV1. Openness versus robustness

Crypto shorting repeatedly confronts a tradeoff between openness and robustness. Highly open systems lower access barriers and may improve the diversity of participation. Yet they often rely on weaker suitability checks, more volatile collateral, or more fragile governance. Highly robust systems, by contrast, tend to require stronger controls, better collateral, and clearer legal architecture, but may exclude some users or slow innovation. This tension is not accidental. It is a structural feature of any market trying to combine global digital access with leveraged finance.

### AV2. Innovation versus standardization

Shorting in crypto has advanced through rapid innovation in contract design, collateral formats, and protocol structure. But the same innovation creates heterogeneity that makes the market hard to compare, regulate, and stabilize. Standardization can improve comparability and trust, yet it may also narrow experimentation. The field therefore moves between periods of design proliferation and periods of institutional consolidation.

### AV3. Transparency versus gameability

Many features of crypto markets are more transparent than their analogues in traditional finance. Funding, open interest, liquidations, and collateral positions are often more visible. This visibility supports research and can improve trust. But it also makes some strategies easier to game. The field is structured by this duality: the very visibility that makes crypto analytically attractive can make it strategically fragile.

### AV4. Skepticism versus destabilization

Short sellers can discipline hype, challenge weak architectures, and improve informational efficiency. They can also accelerate fragile collapses or exploit mechanical vulnerabilities. The literature does not support choosing one description and ignoring the other. The challenge is to identify conditions under which skepticism remains socially productive instead of being channeled through destabilizing mechanisms.

### AV5. Global access versus jurisdictional mismatch

Crypto shorting is global in user reach but local in legal enforceability. This mismatch creates recurring tension. A product can be available almost everywhere in practice while being clearly supervised nowhere in a fully satisfactory sense. The economics of bearish exposure are therefore shaped by an uneven legal geography that is unlikely to disappear soon.

### AV6. Private money versus public trust

Much of crypto shorting is built on private digital monies, especially stablecoins. This gives the system flexibility and speed, but it also means a large part of leveraged price discovery depends on privately issued promises. Public trust in market outcomes therefore depends partly on private balance sheets. This tension is central to the field’s future development.

### AV7. Participation versus comprehension

Retail and permissionless access are often celebrated as evidence that crypto democratizes finance. But if users do not understand funding, liquidation, collateral, or path dependence, participation may outpace comprehension. Shorting makes this especially stark because losses can compound quickly and because some products appear simpler than they are.

### AV8. Market completion versus systemic externality

The final tension is the deepest. Shorting completes markets by enabling hedging and skepticism. Yet every new layer of completion can add systemic externality through leverage, collateral chains, and cross-venue contagion. The field is therefore not moving toward a state where all tradeoffs disappear. It is moving toward a more explicit confrontation with the costs of completing markets in digitally native form.

## Appendix AW. A condensed inventory of unresolved academic disputes

### AW1. Is the main constraint on crypto shorting economic or legal?

Some scholars emphasize funding costs, basis risk, and liquidity as the core limits on bearish participation. Others stress legal access, custody, and enforceability. The truth is likely interactive: legal weakness raises economic costs, and economic migration toward risky venues deepens legal fragility. Future work should model these jointly rather than ranking one side as primary.

### AW2. Are perpetuals the optimal crypto-native contract?

Perpetual swaps are dominant, but dominance need not equal optimality. Their convenience is undeniable. So is their tendency to intertwine shorting with funding swings and liquidation cascades. The literature has not settled whether their social value outweighs these design costs.

### AW3. How much of crypto mispricing remains after market maturation?

Some argue that major assets such as Bitcoin now have sufficiently deep bearish infrastructure that constraint-based mispricing should be modest. Others contend that institutional and path-dependent risks still make true skeptical capital scarcer than gross volume suggests. Better measurement of the supply side is needed.

### AW4. Can stablecoin reform solve much of the problem?

One camp sees the fragility of crypto shorting as rooted mainly in weak collateral and digital-money architecture. Another sees the core issue as leverage design and venue governance. If the first camp is right, better stablecoins and tokenized safe assets could transform market quality. If the second is right, collateral reform alone will not suffice.

### AW5. Is DeFi a long-run substitute or only a complementary niche?

DeFi clearly expands the design space for shorting, but whether it can become the dominant infrastructure remains uncertain. Capital efficiency, governance, legal interfaces, and liquidity depth all remain open questions. The literature is still too early to settle this dispute.

### AW6. Do anti-short social dynamics materially affect pricing?

It is intuitive that online hostility and coordinated narratives matter in crypto. Yet their measurable market impact remains under-studied. This is a fertile area for interdisciplinary work combining text, network analysis, and market data.

### AW7. Are activist shorts welfare improving in weak-disclosure markets?

Where issuers and venues disclose little, activist short research may produce real social value. But it may also exploit thin liquidity and fear. The literature has not developed a clean framework for this tradeoff in digital asset markets.

### AW8. Should shorting access differ by user type?

A differentiated-access model seems appealing, yet it raises implementation questions. How should users be classified, and by whom? Does differentiation improve safety or merely entrench incumbent advantages? This remains a live policy debate.

### AW9. Will tokenized traditional finance reduce crypto exceptionalism?

As tokenized funds, deposits, and safe assets develop, some features of crypto shorting may begin to resemble ordinary finance more closely. But social and governance differences in native crypto assets may persist. The field may therefore converge only partially.

### AW10. The value of leaving these disputes open

A good literature review should not force closure where the evidence is still evolving. The unresolved disputes above are productive because they mark the frontier of the field. They show where future empirical work, legal analysis, and market design research can contribute most.

## Appendix AX. Distilled lessons for citation and reuse

### AX1. On market completeness

Crypto markets do not move from incomplete to complete in a single step. They move through layered and reversible forms of completion. Each new shorting instrument expands one dimension of participation while introducing new dependencies on collateral, venues, and governance.

### AX2. On the meaning of funding

Funding is not simply the cost of leverage. It is a public price for directional imbalance, balance-sheet intermediation, and the willingness of traders to warehouse path-dependent risk. That is why it deserves such a central role in the literature.

### AX3. On stablecoins

Stablecoins are not just media of exchange inside digital markets. They are the monetary substrate that often makes scalable shorting possible. Their safety, liquidity, and legal structure therefore affect market quality far beyond payments.

### AX4. On DeFi

DeFi does not eliminate the institutional problem of shorting. It decomposes that problem into collateral rules, oracle systems, governance, and composable liquidity. This makes some features more transparent and others more contingent.

### AX5. On regulation

The best regulatory question is rarely whether shorting should be allowed. It is how bearish capacity can be supported in forms that improve price discovery and hedging without relying on opaque leverage and weak collateral.

### AX6. On future research

The most promising future research will likely connect visible trading variables to hidden balance-sheet realities: who supplies shorting capacity, with what collateral, under which legal protections, and in which market regimes. That is where the next generation of high-quality scholarship will emerge.

## Appendix AY. Afterword: Why this literature will age well

One reason the literature on crypto shorting is likely to age well is that it addresses a problem much broader than digital assets themselves. Modern finance repeatedly confronts the challenge of organizing disagreement under leverage. The instruments change, the assets change, and the rhetoric changes, but the underlying problem remains: how can markets give pessimistic information a path into prices without turning every disagreement into a destabilizing cascade? Crypto places that question in unusually sharp relief because the market’s infrastructure is still visibly under construction.

A second reason is that crypto shorting sits at the juncture of several durable research trends. The first is the digitization of money and collateral. The second is the platformization of financial access. The third is the increasing visibility of market design as a subject of economic analysis. The fourth is the realization that law, software, and balance-sheet structure cannot be separated cleanly in modern markets. Even if particular tokens fade from prominence, these underlying trends are likely to persist.

A third reason is methodological. Crypto offers kinds of public data that many traditional markets do not, including high-frequency funding, on-chain liquidations, and publicly discussed collateral structures. This does not make inference easy, but it makes mechanisms visible. Future scholars may use these markets to refine broader theories of leverage, arbitrage, and financial fragility.

Finally, the literature is likely to age well because it exposes an enduring political question: who gets to profit from skepticism, under what rules, and with what legitimacy? Every era of finance confronts this issue. Crypto simply does so in a more explicit and socially contested way. That is why a review devoted to shorting is not a niche exercise. It is a study of one of the oldest problems in market society, reappearing in one of its newest institutional forms.

## Appendix AZ. Closing synthesis in compact form

The shortest way to summarize the entire review is this: crypto shorting matters because it reveals how a digital market organizes pessimism. Every major theme in the literature follows from that simple proposition. If pessimism is hard to express, prices skew toward optimism. If pessimism becomes easy to express only through weak collateral and fragile venues, market quality improves in one dimension and deteriorates in another. If pessimism is socialized through carry traders, market makers, and treasury hedgers rather than only through ideological bears, then aggregate shorting metrics can mislead unless they are interpreted institutionally. If collateral improves and governance becomes stronger, shorting may become less exceptional and more deeply integrated into ordinary financial intermediation. If not, crypto will continue to oscillate between one-sided enthusiasm and brittle leveraged correction.

For that reason, shorting is not a specialized subtopic that can be separated cleanly from the rest of crypto economics. It is one of the clearest organizing principles available for understanding how digital asset markets mature, fragment, and occasionally fail. The literature has already shown enough to justify taking the subject seriously. The next task is to study it with the same combination of theoretical ambition and institutional specificity that modern finance applies to more established markets.


## Postscript

A final way to read this review is to recognize that crypto shorting compresses the evolution of modern finance into a faster and more visible setting. In older markets, many of the institutional layers that support pessimism are taken for granted: collateral can usually be moved through trusted banking systems, benchmark design is more standardized, insolvency law is clearer, and decades of practice have separated market making, custody, clearing, and customer protection into recognizable roles. In crypto, those layers developed late, unevenly, and often experimentally. As a result, scholars can watch in real time how a market learns to organize negative information.

That visibility is analytically valuable. It allows researchers to see that shorting is never just a belief about future price. It is also a claim on infrastructure. The trader needs collateral that will hold value, a venue that will remain solvent and operational, a benchmark that will not fail, and a set of legal or quasi-legal rules that will remain coherent under stress. When any of those pieces are missing, the market’s ability to price skepticism shrinks, even if quoted derivative volume appears large. This is why the review repeatedly returns to the idea that shorting capacity must be studied as institutional capacity.

The same perspective helps explain why policy arguments about crypto are so often confused. Public debate often imagines a simple choice between letting speculators bet against innovation and restricting them in the name of safety. The literature reviewed here shows that the real choice is more subtle. A market without credible channels for negative views is not necessarily safer; it may simply be more one sided, more vulnerable to narrative excess, and less able to support hedging by participants with real exposure. Conversely, a market with abundant but poorly designed shorting can be unstable because it scales leverage faster than it scales trust. Good policy therefore has to think like market design, not moral judgment.

A final implication is that crypto shorting should no longer be treated as a temporary feature of a speculative phase. Even if speculative manias become less central, the need for negative exposure will remain wherever digital assets, tokenized liabilities, and online trading infrastructures persist. Benchmark cryptocurrencies, tokenized funds, stablecoins, tokenized safe assets, and decentralized derivatives all create future settings in which the organization of pessimism matters. The present literature is therefore not only about the past decade of crypto booms and busts. It is part of a larger inquiry into how digital finance becomes a two-sided market without becoming an ungovernable one.

## Closing Note

The cumulative message of this manuscript is intentionally larger than the narrow question of whether a trader can bet against Bitcoin or any other token. The real subject is how digital markets build the institutions required to let pessimism become price, hedge, carry, discipline, and sometimes instability. Once that is recognized, shorting stops looking like an optional derivative feature and starts looking like one of the clearest tests of whether a market is financially maturing in a credible way.

That is why the topic deserves a literature review of this scale. It joins together theory that is already classical, infrastructures that are still evolving, and policy questions that remain unsettled. Few areas in contemporary finance make these connections so visible. If future digital markets are to become genuinely two sided without becoming structurally brittle, many of the lessons synthesized here will remain relevant well beyond cryptocurrency itself.


In that narrow but powerful sense, the study of shorting is also the study of whether digital finance can absorb criticism institutionally rather than merely react to it emotionally, episodically, or through crisis.



Put differently, crypto shorting is where valuation, money, law, technology, and politics collide most visibly in one market institution.


This institutional problem will remain economically important for decades.
## References

Abreu, Dilip, and Markus K. Brunnermeier. (2003). Bubbles and crashes. *Econometrica*, 71(1), 173-204.

Asquith, Paul, Parag A. Pathak, and Jay R. Ritter. (2005). Short interest, institutional ownership, and stock returns. *Journal of Financial Economics*, 78(2), 243-276.

Baur, Dirk G., KiHoon Hong, and Adrian D. Lee. (2018). Bitcoin: Medium of exchange or speculative assets? *Journal of International Financial Markets, Institutions and Money*, 54, 177-189.

Biais, Bruno, Christophe Bisière, Matthieu Bouvard, and Catherine Casamatta. (2019). The blockchain folk theorem. *Review of Financial Studies*, 32(5), 1662-1715.

Boehmer, Ekkehart, Charles M. Jones, and Xiaoyan Zhang. (2008). Which shorts are informed? *Journal of Finance*, 63(2), 491-527.

Brunnermeier, Markus K., and Lasse H. Pedersen. (2009). Market liquidity and funding liquidity. *Review of Financial Studies*, 22(6), 2201-2238.

Budish, Eric. (2018). The economic limits of Bitcoin and the blockchain. *NBER Working Paper* No. 24717.

CFTC. (2017). CFTC backgrounder on oversight of and approach to virtual currency futures markets.

Corbet, Shaen, Brian Lucey, Andrew Urquhart, and Larisa Yarovaya. (2019). Cryptocurrencies as a financial asset: A systematic analysis. *International Review of Financial Analysis*, 62, 182-199.

De Long, J. Bradford, Andrei Shleifer, Lawrence H. Summers, and Robert J. Waldmann. (1990). Noise trader risk in financial markets. *Journal of Political Economy*, 98(4), 703-738.

Diamond, Douglas W., and Robert E. Verrecchia. (1987). Constraints on short-selling and asset price adjustment to private information. *Journal of Financial Economics*, 18(2), 277-311.

Duffie, Darrell. (2010). Asset price dynamics with slow-moving capital. *Journal of Finance*, 65(4), 1237-1267.

Easley, David, Maureen O’Hara, and Soumya Basu. (2019). From mining to markets: The evolution of Bitcoin transaction fees. *Journal of Financial Economics*, 134(1), 91-109.

Engelberg, Joseph E., Adam V. Reed, and Matthew C. Ringgenberg. (2018). Short-selling risk. *Journal of Finance*, 73(2), 755-786.

Foley, Sean, Jonathan R. Karlsen, and Tālis J. Putni??. (2019). Sex, drugs, and Bitcoin: How much illegal activity is financed through cryptocurrencies? *Review of Financial Studies*, 32(5), 1798-1853.

Garratt, Rodney, and Maarten van Oordt. (2021). Stablecoins as crypto safe assets. *Bank of Canada Staff Working Paper* 2021-58.

Gorton, Gary, and Jeffrey Zhang. (2021). Taming wildcat stablecoins. *NBER Working Paper* No. 29691.

Harrison, J. Michael, and David M. Kreps. (1978). Speculative investor behavior in a stock market with heterogeneous expectations. *Quarterly Journal of Economics*, 92(2), 323-336.

Hong, Harrison, and Jeremy C. Stein. (2003). Differences of opinion, short-sales constraints, and market crashes. *Review of Financial Studies*, 16(2), 487-525.

Howell, Sabrina T., Marina Niessner, and David Yermack. (2020). Initial coin offerings: Financing growth with cryptocurrency token sales. *Review of Financial Studies*, 33(9), 3925-3974.

Huberman, Gur, Jacob D. Leshno, and Ciamac C. Moallemi. (2021). Monopoly without a monopolist: An economic analysis of the Bitcoin payment system. *Review of Economic Studies*, 88(6), 3011-3040.

IOSCO. (2023). Policy recommendations for crypto and digital asset markets.

Jones, Charles M., and Owen A. Lamont. (2002). Short-sale constraints and stock returns. *Journal of Financial Economics*, 66(2-3), 207-239.

Lamont, Owen A. (2012). Go down fighting: Short sellers vs. firms. *Review of Asset Pricing Studies*, 2(1), 1-30.

Liu, Yukun, and Aleh Tsyvinski. (2021). Risks and returns of cryptocurrency. *Review of Financial Studies*, 34(6), 2689-2727.

Lyons, Richard K., and Ganesh Viswanath-Natraj. (2023). What keeps stablecoins stable? *Journal of International Money and Finance*, 131, 102777.

Makarov, Igor, and Antoinette Schoar. (2020). Trading and arbitrage in cryptocurrency markets. *Journal of Financial Economics*, 135(2), 293-319.

Makarov, Igor, and Antoinette Schoar. (2022). Cryptocurrencies and decentralized finance (DeFi). *Brookings Papers on Economic Activity*, Fall, 141-215.

Miller, Edward M. (1977). Risk, uncertainty, and divergence of opinion. *Journal of Finance*, 32(4), 1151-1168.

President’s Working Group on Financial Markets, FDIC, and OCC. (2021). Report on stablecoins.

Saleh, Fahad. (2021). Blockchain without waste: Proof-of-stake. *Review of Financial Studies*, 34(3), 1156-1190.

Sch?r, Fabian. (2021). Decentralized finance: On blockchain- and smart contract-based financial markets. *Federal Reserve Bank of St. Louis Review*, 103(2), 153-174.

Scheinkman, Jose A., and Wei Xiong. (2003). Overconfidence and speculative bubbles. *Journal of Political Economy*, 111(6), 1183-1220.

Shleifer, Andrei, and Robert W. Vishny. (1997). The limits of arbitrage. *Journal of Finance*, 52(1), 35-55.

Simsek, Alp. (2013). Belief disagreements and collateral constraints. *Econometrica*, 81(1), 1-53.

U.S. Securities and Exchange Commission. (2019). Framework for “investment contract” analysis of digital assets.

Yermack, David. (2015). Is Bitcoin a real currency? An economic appraisal. In D. Lee Kuo Chuen (Ed.), *Handbook of digital currency* (pp. 31-43). Academic Press.

Zetzsche, Dirk A., Douglas W. Arner, and Ross P. Buckley. (2020). Decentralized finance. *Journal of Financial Regulation*, 6(2), 172-203.

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









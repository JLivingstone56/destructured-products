export const textDictionary = {
    intro1: `In this section, we will explore the world of Structured Products, a complex financial instrument designed to meet` + 
    `specific investment strategies and risk management needs. What exactly is a Structured Product? As you might guess from the name, these are not straightforward.`+
    `They are constructed from two or more financial instruments, combining derivatives with traditional securities to tailor the risk-return profile. `+
    `This wiki aims to demystify these sophisticated tools, making them accessible to everyone.`,

    intro2: `Structured Products are steeped in financial jargon which can be quite overwhelming. Terms like 'derivatives', 'principal protection', 'market-linked investment',`+
    `and 'yield enhancement' are commonly thrown around when discussing these products. Each section of this wiki breaks down these terms and the underlying concepts`+
    `in a clear and concise manner. Plus, every topic is supplemented with summaries to help reinforce your understanding and quizzes to test your knowledge.`,

    intro3: `As you progress through this wiki, you will find detailed information on how Structured Products are created, priced, and how they function in different`+
    `market conditions. By the end, you should be able to understand not only the mechanics but also the strategic use of Structured Products in investment portfolios.`+
    `Keep learning and engage with the quizzes to enhance your grasp of each topic. The journey through complex financial landscapes is challenging, `+
    `but with the right tools and explanations, it becomes much more navigable.`,

    WSP1: `Structured products are pre-packaged investments that normally include assets linked to interest plus one or more derivatives.` +
    `What this practically means is simply that, rather than investing directly in an underlying (e.g Tesla) and being exposed to the wild variations` +
    `(mainly due to Elon Musk), you give your notional (the investment amount) to an issuer. They promise to invest some in Tesla, some in bonds etc,` + 
    `and in return they will offer some protections (you lose less money) and also counter that with some trade-offs (your profits are limited).`,

    WSP2: `The exact makeup of these varies wildly and the levels of these protections and limits will depend on the type of product, the underlying asset, the issuer` +
    `you are trying to deal with and a host of other factors. However, once you come to understand each constituent element, you can begin to see how they all come together.`+
     `We can break these down into a few key categories/products.`,

    WSP3: `One of these products is a Phoenix/Autocall. Its worth mentioning that these names are often issuer defined, they are not an industru standard. We will however, when` +
    `relevant point out the meaning of the name and how it can help you understand the product (e.g 'autocall' because theres a feature that calls the note/pays you automatically)` +
    `So lets get into a brief overview of what one of these products in general will look like and then we can jump into a Autocallable specifically.`,

    SPM1: `Structured products often include features of both call (upside) and put (downside) options. allowing investors to gain on the upside while having some protection on the downside.`+
    `To fully understand structured products, it is crucial to grasp the mechanisms of these underlying options:`,

    SPM2: `A call option is a contract granting the investor the right, but not the obligation, to buy an underlying asset at a predetermined price (known as the "strike price") on` + 
    `or before a specific date (the "expiration date"). The investor pays a premium, hoping that the asset's price will increase within the option's timeframe. `+
    `For example, consider a call option on Google stock:

    Scenario: The option has a one-year term with a strike price set at the current market price (e.g., $100). If, at the end of the year, Google's price has risen `+
    `to $120, the investor can exercise the option to purchase at $100, realizing a 20% gain by immediately selling at the market price of $120 (minus any fees).

    Key Points:

    No Obligation to Buy: If the market price at expiration is below the strike price (e.g., $90), the investor can choose not to exercise the option, thus avoiding`+
    `a loss from buying above market value. This illustrates why the call option relates only to potential profits and limits the loss to the paid premium.

    Cash Settlement: Actual shares are not necessarily exchanged. Instead, the transaction might be settled in cash, representing the difference between the `+
    `market price at expiration and the strike price if favorable to the investor.`,

    SPM3: `1) The disclaimer 'but not the obligation' is key. This means if our strike is 100 and Google is at 90, we are not forced at maturity to buy Google at ` + 
    `100 (and thereby losing 10%). You can forfeit the right, buy at market price, and break even. This is why our 'Call' in a Structured Product is only related to ` +
    `the upside, as with a call option you can only lose the fees you pay.`,

    SPM4: `2) We say Buy at a later date. The shares in Google are never really bought or sold. You and the issuer simply agree to calculate the value based on the ` +
    `terms and settle the imagined profit in cash. A simple way to think of this is the issuer says to you "If the price of Google is 100 now, in a years time we'll `+
    `reconvene and i'll pay you the cash value over the price we set today".`
};

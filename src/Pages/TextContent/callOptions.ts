export const callOptions = {
    CO1: `A call option is a contract granting the investor the right, but not the obligation, to buy an underlying asset at a predetermined price (known as the "strike price") on` + 
    `or before a specific date (the "expiration date"). The investor pays a premium, hoping that the asset's price will increase within the option's timeframe. `+
    `For example, consider a call option on Google stock:

    **Scenario**: The option has a one-year term with a strike price set at the current market price (e.g., $100). If, at the end of the year, Google's price has risen `+
    `to $120, the investor can exercise the option to purchase at $100, realizing a 20% gain by immediately selling at the market price of $120 (minus any fees).

    **Key Points**:
    [ul]
    [li]No Obligation to Buy: If the market price at expiration is below the strike price (e.g., $90), the investor can choose not to exercise the option, thus avoiding `+
    `a loss from buying above market value. This illustrates why the call option relates only to potential profits and limits the loss to the paid premium.[/li]

    [li]Cash Settlement: Actual shares are not necessarily exchanged. Instead, the transaction might be settled in cash, representing the difference between the `+
    `market price at expiration and the strike price if favorable to the investor.[/li][/ul]`,

    CO2: `With Call options, the risk is limited. The worst case scenario, you dont exercise the option and you lose the fees paid. To balance this, issuers sometimes  will limit the ` +
    `maximum gains. We call this a cap. Capped deals will have a **cap value**, which represents the maximum profit you can make over the given maturity period. below you `+
    `can see an example of a payoff graph for an uncapped vs a capped call:`,

    CO3: `Here you can see, in the left graph, that any increase in the value of the underlying over the length of the deal is 1:1 to the profit we make. However, for the right side, ` +
    `while we begin with our profit at 1:1 with the underlying value, at a certain point (e.g 20% profit) we no longer realize any more gains front the `+
    `underlying asset increasing in value and our profit flatlines.
    
    In this regard it is a balancing act, one might ask, "Is the protection offered by my lack of obligation worth the chance of me losing `+
    `out on extra profit". The answer to this will vary depending on the investor, the asset, the timeframe etc. This is not the only way a call can change. In the first graph you may `+ 
    `have noticed the green line didn't run in parallel to the underlying before being capped, This is to do with **Gearing/Participation**.`,

    CO4: `Our first example of capped vs uncapped showed how an issuer can limit profit on the upside. However, issuers also often will add incentives to their call option.` +
    `Gearing/Participation (I'll exclusively user participation from hear on out for simplicity) is one of the ways they do this. The easiest way to understand participation is like a multiplier `+
    `on your profit. If you have a participation of **150%** and over a year your underlying asset has increased by **10%**, you receive a profit of **15%** (10 * 1.5). Lets look at an example of` + 
    `a capped trade with a participation of **100%**, vs one with **150%.**`,

    CO5: `As you can see here, the higher the particiption rate, the more you make in relation to an increase in the underlyings value. To highlight this I have picked three examples:`,

    CO6:
    `[table][tr][td]**Underlying price**[/td][td]**PR 1, Cap 120%**[/td][td]**PR 1.5, Cap 120%**[/td][/tr]`+
    `[tr][td]**115%**[/td][td]115% profit[/td][td]122.5% profit (100 + 15 x 1.5)[/td][/tr]`+
    `[tr][td]**120%**[/td][td]120% profit[/td][td]130% profit (100 + 20 x 1.5)[/td][/tr][/table]`
}
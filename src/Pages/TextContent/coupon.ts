export const coupon = {
    CP1: `A Coupon is a routine payment made to the purchaser of a structured product. This coupon is usually represented as a percentage of the underlying value. For `+
    `instance, a yearly coupon could have a value of **10%** coupon per annum.

    **Scenario**: The option has a two-year term with a annual coupon set at 10% CPA. At the end of the year, Google's price has risen `+
    `to $120, the investor recieves $12 and the deal continues to its second year.

    **Key Points**:
    [ul]
    [li]**Coupon Frequency**: In this example the coupon pays yearly. so 10% of the current value is paid each year. The percentage is typically always listed` +
    `as per year, however this frequency can vary (Monthly, Quarterly, Semi-Annual & Annual).[/li]

    [li]**Coupon Conditions**: In this example we didn't specify any condition for a coupon. While this is the case **sometimes** we more often will `+
    `have levels which the price must be above to be paid the coupon, known as the 'coupon barrier'.[/li][/ul]`,

    CP2: `As mentioned in the key points above, any coupon is typically listed as a percentage per annum. However this often can be paid on a non yearly interval. `+
    `For instance, if you had a 10% CPA and your observation frequency was quarterly then at every three months a coupon of 2.5% is paid (10%/4).`,

    CP3: `Here you can see, in the left graph, that we recieve four coupon payments of 2.5% over time at each **observation date**. However, in the right hand `+
    `graph, we recieve it all in one 10% installment at year end. You may wonder why this is referred to as an observation date, as opposed to a payment date. `+
    `This is due to the other factor not yet mentioned, conditional coupons.`,

    CP4: `Our first example of capped vs uncapped showed how an issuer can limit profit on the upside. However, issuers also often will add incentives to their call option.` +
    `Gearing/Participation (I'll exclusively user participation from hear on out for simplicity) is one of the ways they do this. The easiest way to understand participation is like a multiplier `+
    `on your profit. If you have a participation of **150%** and over a year your underlying asset has increased by **10%**, you receive a profit of **15%** (10 * 1.5). Lets look at an example of` + 
    `a capped trade with a participation of **100%**, vs one with **150%.**`,

    CP5: `As you can see here, the higher the particiption rate, the more you make in relation to an increase in the underlyings value. To highlight this I have picked three examples:`,

    CP6:
    `[table][tr][td]**Underlying price**[/td][td]**PR 1, Cap 120%**[/td][td]**PR 1.5, Cap 120%**[/td][/tr]`+
    `[tr][td]**115%**[/td][td]115% return[/td][td]122.5% return (100 + 15 x 1.5)[/td][/tr]`+
    `[tr][td]**120%**[/td][td]120% return[/td][td]130% return (100 + 20 x 1.5)[/td][/tr]`+
    `[tr][td]**180%**[/td][td]120% return[/td][td]130% return (100 + 20 x 1.5)[/td][/tr][/table]`,

    CP7:
    `As you can see, the higher participation rate means that at any level of profit we make 1.5x the amount as when the participation rate is 1. Furthermore, despite `+
    `being capped at the same 120%, our geared cap is also 1.5x that, so while the PR1 deal maxes out at a 20% profit, the 1.5x deal maxes out at 30% (20x1.5).`
}

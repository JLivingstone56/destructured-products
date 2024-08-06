export const earlyRedemption = {
    ER1: `While a deal typically runs for the full tenor, it is possible for a deal to be called early. Early redemption is a scenario where, `+
    `at a pre-determined observation date, the note can be called early. The exact terms of an autocall event can vary, however for this example we `+
    `Shall refer to the Phoenix autocall as an example:

    **Scenario**: A Phoenix note with Google as the underlying has a two-year tenor with a quarterly early redemption frequency and a autocallbale barrier of 100%. `+
    `At the start of the note Google is $150, at the first quarter it has fell to $140. This is enough to recieve the coupon payment of $3.75 per share, however it is below `+
    `the autocall barrier. On the next period, the Google stock has risen to $155. As it is now above 100% another coupon of $3.75 is paid and the note is early redeemed for `+
    `$150 per share.
    
    **Key Points**:
    [ul]
    [li]**Observation Frequency:** Typically the autocall is observed at the same frequency as any coupon, therefore in most structured products it is at the same `+
    `standard observation periods (Monthly, Quarterly, Semi-Annually etc).[/li]

    [li]**Varying levels:** In the example of a Phoenix, the autocallable level is 100% of the initial price, meaning that if at any period it is above the original `+
    `value, the note will be early redeemed. However for other more bespoke payoffs this could be a different level.[/li]
    
    [li]**Coupon payments:** When a note is early redeemed that means all aspects of it cease. This means not only that the principal is returned, but also that `+ 
    `the coupon payments cease. This means that the coupon paid on that period is the last once the notional has been paid back.[/li] 
    
    [li]**Non-Autocallable periods:** Some notes may have a initial period where the note cannot be early redeemed. For instance if a note had an observation `+
    `frequency of 'quarterly' but one non-autocallable period that would mean the note couldn't be early redeemed until 6 months[/li][/ul]
    `,

    
}
export const coupon = {
    CP1: `A Coupon is a routine payment made to the purchaser of a structured product. This coupon is usually represented as a percentage of the underlying value. For `+
    `instance, a yearly coupon could have a value of **10%** coupon per annum.

    **Scenario**: The option has a two-year term with a annual coupon set at 10% CPA. At the end of the year, Google's price has risen `+
    `to $120, the investor recieves $12 and the deal continues to its second year.

    **Key Points**:
    [ul]
    [li]**Coupon Frequency**: In this example the coupon pays yearly. so 10% of the current value is paid each year. The percentage is typically always listed` +
    `as per year, however this frequency can vary (Monthly, Quarterly, Semi-Annual & Annual).[/li]

    [li]**Coupon Conditions**: In this example we didn't specify any condition for a coupon. While this is the case **sometimes**, we will more often `+
    `have barriers which the price must be above to recieve the coupon, known as the 'coupon barrier'.[/li][/ul]`,

    CP2: `As mentioned in the key points above, any coupon is typically listed as a percentage per annum. However this often can be paid on a non yearly interval. `+
    `For instance, if you had a 10% CPA and your observation frequency was quarterly then at every three months a coupon of 2.5% is paid (10%/4).`,

    CP3: `Here you can see, in the left graph, that we recieve four coupon payments of 2.5% over time at each **observation date**. However, in the right hand `+
    `graph, we recieve it all in one 10% installment at year end. You may wonder why this is referred to as an observation date, as opposed to a payment date. `+
    `This is due to the other factor not yet mentioned, conditional coupons.`,

    CP4: `When we reach each observation period (when a coupon **may** be paid), what occurs very much depends on whether our coupon is unconditional or conditional. `+
    `An Unconditional coupon is paid regardless of the current price of the underlying on each observation date, so in that sense it is gaurenteed. Alternatively, a `+
    `conditional coupons is only paid at each observation **if** the price of the underlying is at or above the barrier level decided at the start of the deal.`,

    CP5: `As you can see in the left graph, every period a coupon is paid. On the other hand, in the right graph, the price was only at or above the barrier at periods `+
    `1,2 and 4 but **not period 3**. Due to this as only 3/4 coupons were paid over the length of the product.
    **N.B Conditional coupons can also have a memory feature, where if we climb back above the barrier and earn a coupon, then all previous missed coupons are paid.**`,

    CP6:`Below are some examples of some different coupons. a unconditional coupon, a conditional without memory and a conditional coupon with memory. `+
    `**For all three the CPA is 10%. For the conditional coupons the barrier is 110%:**`,

    CP7:
    `[table][tr][td]**Observation Period**[/td][td]**Current Price**[/td][td]**Unconditional**[/td][td]**Conditional (W/Memory)**[/td][td]**Conditional (WO/Memory)**[/td][/tr]`+
    `[tr][td]**1**[/td][td]**115%**[/td][td]2.5% paid[/td][td]2.5% paid[/td][td]2.5% paid[/td][/tr]`+
    `[tr][td]**2**[/td][td]**120%**[/td][td]2.5% paid[/td][td]2.5% paid[/td][td]2.5% paid[/td][/tr]`+
    `[tr][td]**3**[/td][td]**105%**[/td][td]2.5% paid[/td][td]N/A[/td][td]N/A[/td][/tr]`+
    `[tr][td]**4**[/td][td]**112%**[/td][td]2.5% paid[/td][td]5% paid (2.5% x2)[/td][td]2.5% paid[/td][/tr][/table]`,

    CP8:
    `As you can see, the unconditional coupon is always gaurenteed, making it the safest option. The conditional without memory paid less over the duration and the one with memory `+
    `only paid the full 10% due to the rally in the price at the last observation date. In reality, as the conditional coupon is higher risk, it would typically come with a much `+
    `higher CPA.`
}

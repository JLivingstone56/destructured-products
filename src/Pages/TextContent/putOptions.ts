export const putOptions = {
PO1: `A put option gives the holder the right, but not the obligation, to sell an underlying asset at a predetermined strike price before or on the expiration date. `+
`Investors typically purchase put options to hedge against a potential decline in the underlying asset's value or to speculate on such a decline. For instance, `+
`consider a put option on Google stock:

**Scenario:** The put option has a one-year term with a strike price of 80% of Google's current market price (e.g., $80 if the current price is $100). `+
`If, at the end of the year, Google's price has fallen to $70, the investor can exercise the option to sell at $80, effectively mitigating the loss `+
`compared to the market price.

 **Key Points**:
[ul]
[li]**Protection Level**: If the market price at expiration is above the strike price, the investor can choose not to exercise the option, effectively `+
`losing only the premium paid. This feature highlights the protective nature of put options.[/li]

[li]**Cash Settlement**: Like call options, put transactions might be settled in cash, representing the difference between the strike price and the `+
`lower market price at expiration if it is beneficial to the investor.[/li][/ul]`,

PO2:`So based on this we can understand that a put option gives us protection above a strike price. However, what happens if the price of an underlying `+
`falls below the strike price. This point we drop below is called the **barrier**. The exact details of how a barrier works can and will vary between each put option. `+
`However, the main categories that interest us in SP are **static** barriers and **contingent** barriers:`,

PO3:`
[ul][li]**Contingent Barrier:** This structure involves full principal protection unless the underlying asset falls below a certain barrier (e.g., 70%). If this barrier is `+
`breached, the protection may be entirely lost, exposing the investor to further losses as the asset devalues[/li].

[li]**Static Barrier:** Alternatively, a put might feature a static barrier (static w/gearing). This barrier does not knock you out of all protection below the strike. `+
`Instead there is a custom downside for all prices at maturity. In SP it is usually configured so that the protection is 100% until below the barrier `+ 
`and then for every percentage below the barrier, gearing is 1/strike. E.G if your strike is 70% your **put gearing** is 1/0.7 which is 1.43. `+
`This means that at **70%** you still get **100%** of your money back but at **69%** rather than losing **1%** you lose **1.43%** (**98.57%** return).[/li][/ul]`,

PO4:`We mentioned previously that a contingent barrier is one where you can be "knocker-out". This means that if the price drops below the knock-in barrier ` +
`you no longer get protection and instead simply lose your option to sell at the strike price. This observation however can be done at a few different intervals: 

[ul][li]**At maturity:** We only observe the knock-out event if it occurs at the strike date of the deal, any dips below knock in barrier prior to this are not `+
`considered.[/li]
[li]**Daily:** At the end of each day we observe the final close price. If we are below our knock-in barrier then a knock out event occurs.[/li]
[li]**Continuous:** If at any point of any day during the length of the deal, if we are below our knock-in barrier then a knock out event occurs.[/li][/ul]

In the world of SP, If a knock out event occurs, this does not end the deal. Instead you are still exposed to price movements during the length of the deal, you `+
`just also have no downside protection anymore.`
}
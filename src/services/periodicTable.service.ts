import { PERIODIC_TABLE_DATA, PeriodicTableElement } from "../constants/periodicTable.constant";

export function getPeriodicTableSymbols(): Promise<PeriodicTableElement[]> {
    // We simulate a HTTP Request. Periodic Table APIs have a pricing. I exported a response.
    return new Promise((res) => {
        setTimeout(() => {
            res(PERIODIC_TABLE_DATA);
        }, 1_000);
    })
}
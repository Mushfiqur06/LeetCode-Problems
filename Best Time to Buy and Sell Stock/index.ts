function maxProfit(prices: number[]): number {
  let getProfit = 0;
  let minValue = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (minValue > prices[i]) {
      minValue = prices[i];
    }

    let tempProfit = prices[i] - minValue;
    if (tempProfit > getProfit) {
      getProfit = tempProfit;
    }
  }

  return getProfit;
}

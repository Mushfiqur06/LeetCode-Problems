function maxScore(cardPoints, k) {
  if (k === cardPoints.length) {
    return cardPoints.reduce((a, b) => a + b);
  }

  let ans = 0;
  let sum = 0;
  for (let i = cardPoints.length - k; i < cardPoints.length; i++) {
    console.log(cardPoints[i]);
    sum += cardPoints[i];
  }
  ans = sum;
  for (let i = 0; i < k; i++) {
    sum += arr[i] - arr[arr.length - k + i];
    ans = Math.max(sum, ans);
  }
  return ans;
}

maxScore([1, 2, 3, 4, 5, 6, 1], 3);

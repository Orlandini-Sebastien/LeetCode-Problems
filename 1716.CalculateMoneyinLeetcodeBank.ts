function totalMoney (n: number): number {
  let sum: number = 0
  let total: number = 0
  for (let i = 1; i <= n; i++) {
    sum++
    total += sum
    if (i % 7 === 0) {
      sum = sum - 6
    }
  }
  return total
}

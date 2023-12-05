function numberOfMatches2 (n: number): number {
  let sum: number = 0
  while (n != 1) {
    if (n % 2 == 0) {
      n /= 2
      sum += n
    }
    if (n % 2 != 0) {
      n++
      n /= 2
      sum += n - 1
    }
  }
  return sum
}

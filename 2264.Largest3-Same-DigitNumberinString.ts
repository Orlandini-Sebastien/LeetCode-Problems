function largestGoodInteger (num: string): string {
  let com: number=-1;

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      if (!com || Number(com) <= Number(num[i])) {
        com = Number(num[i])
      }
    }
  }

  if (com !== undefined) {
    return com.toString() + com.toString() + com.toString()
  }

  return ''
}

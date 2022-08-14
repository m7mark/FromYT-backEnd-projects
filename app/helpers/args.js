export const getArgs = (args) => {
  const res = {}
  const [executor, file, ...rest] = args
  rest.forEach((arg, i, a) => {
    if (arg.charAt(0) === '-') {
      if (i + 1 === a.length) {
        res[arg.substring(1)] = true
      } else if (a[i + 1].charAt(0) !== '-') {
        res[arg.substring(1)] = a[i + 1]
      } else {
        res[arg.substring(1)] = true
      }
    }
  })
  return res
}

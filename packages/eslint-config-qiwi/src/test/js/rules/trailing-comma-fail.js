export const foo = {
  a: 1,
  b: 2
}

export const fnWithRest = (
  a,
  b,
  ...rest,
) => console.log(a, b, ...rest)

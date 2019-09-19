export const foo = {
  a: 1,
  b: 2,
}

export const fnWithRest = (
  a: string,
  b: number,
  ...rest: any[]
) => console.log(a, b, ...rest)

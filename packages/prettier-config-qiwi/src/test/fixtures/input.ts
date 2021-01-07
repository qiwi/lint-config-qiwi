const a =    {
  "foo": 1,
  'bar': 2
}

function foo (a,b,c,) {
  return [
    a,b,
    c
  ]
}

const bar = foo(1,2,3,)

const baz = {foo, bar}

import { sum } from '../TestComponents/sum'

test('Sum function should calculate sum of two function', () => {
  const res = sum(2, 3)

  // Assertion
  expect(res).toBe(5)
})

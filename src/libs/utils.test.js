import {partial, generateId} from './utils'

const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c

describe('Testing utils', () => {
  describe('Testing utils partial function', () => {
    it('applies the first argument ahead of time', () => {
      const inc = partial (add, 1)
      const result = inc(2) // expect 3
      expect(result).toBe(3)
    })

    it('applies the multiple arguments ahead of time', () => {
      const inc = partial (addThree, 1, 3)
      const result = inc(2)
      expect(result).toBe(6)
    })

  })

  describe('Testing utils generateId', () => {
    it('generate different ids', () => {
      const firstRandom = generateId();
      const secondRandom = generateId();

      expect(firstRandom).not.toEqual(secondRandom);
    })
  })
})

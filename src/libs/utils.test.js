import {partial, addItem, removeItem} from './utils'

const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c
const inc = (num) => num + 1

test('partial applies the first argument ahead of time', () => {
  const inc = partial (add, 1)
  const result = inc(2) // expect 3
  expect(result).toBe(3)
})

test('partial applies the multiple arguments ahead of time', () => {
  const inc = partial (addThree, 1, 3)
  const result = inc(2)
  expect(result).toBe(6)
})

test('addItem should add the passed item to the list', () => {
  const startItems = [
    {id:1, name: 'one'},
    {id:2, name: 'two'}
  ]
  const newItem = {id:3, name: 'three'}
  const expected = [
    {id:1, name: 'one'},
    {id:2, name: 'two'},
    {id:3, name: 'three'}
  ]

  const result = addItem(startItems, newItem)

  expect(result).toEqual(expected)
})

test('addItem should not mutate the existing item array', () => {
  const startItems = [
    {id:1, name: 'one'},
    {id:2, name: 'two'}
  ]
  const newItem = {id:3, name: 'three'}
  const expected = [
    {id:1, name: 'one'},
    {id:2, name: 'two'},
    {id:3, name: 'three'}
  ]

  const result = addItem(startItems, newItem)

  expect(result).not.toBe(startItems)

})

test('removeItem should remove an item by id', () => {
  const startItems = [
    {id:1, name: 'one'},
    {id:2, name: 'two'},
    {id:3, name: 'three'}
  ]
  const targetId = 3
  const expectedItems = [
    {id:1, name: 'one'},
    {id:2, name: 'two'}
  ]
  const result = removeItem(startItems, targetId)

  expect(result).toEqual(expectedItems)
})

test('removeItem should not mutate the original array', () => {
  const startItems = [
    {id:1, name: 'one'},
    {id:2, name: 'two'},
    {id:3, name: 'three'}
  ]
  const targetId = 3
  const result = removeItem(startItems, targetId)

  expect(result).not.toBe(startItems)
})

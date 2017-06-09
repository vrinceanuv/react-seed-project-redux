export const generateId = () => Math.floor(Math.random() * 100000)
export const partial = (fn, ...args) => fn.bind(null, ...args)

export function getSingleton<T>(fn: (...args: any[]) => T) {
  let result: T
  return function(this: any, ...args: any[]) {
    result = fn.apply(this, args)
    return result
  }
}
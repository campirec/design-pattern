const strategies = {
  isNotEmpty(value: string, errorMsg: string) {
    if (value === '') {
      return errorMsg
    }
  },
  minLength(value: string, length: number, errorMsg: string) {
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile(value: string, errorMsg: string) {
    const reg = /^1[3-9]\d{9}$/
    if (reg.test(value)) {
      return errorMsg
    }
  }
}

type StrategiesKeys = keyof typeof strategies

export class Validator {
  private cache: Array<() => string | void> = []
  add(value: string, rule: string, errorMsg: string) {
    const arr = rule.split(':')
    this.cache.push(function() {
      const strategy = arr.shift()
      const restParams = [value, ...arr, errorMsg]
      if (strategy) {
        return (strategies[strategy as StrategiesKeys] as Function)(...restParams)
      }
    })
  }
  start() {
    for (let i = 0; i < this.cache.length; i++) {
      const msg = this.cache[i]()
      if (msg) {
        this.clear()
        return msg
      }
    }
  }

  clear() {
    this.cache = []
  }
}

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
    let arr = rule.split(':')
    this.cache.push(() => {
      const strategy = arr.shift()
      arr = [...arr, errorMsg]
      if (strategy) {
        return (strategies[strategy as StrategiesKeys] as Function)(value, ...arr)
      }
    })
  }
  start() {
    for (let i = 0; i < this.cache.length; i++) {
      const msg = this.cache[i]()
      if (msg) {
        return msg
      }
    }
  }
}

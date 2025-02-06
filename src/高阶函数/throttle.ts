export function throttle(fn: (...rest: any[]) => any, interval: number) {
  let timer: NodeJS.Timeout | null = null
  let isFirstTime = true

  return function(this: HTMLElement, ...args: any[]) {
    const ctx = this
    if (isFirstTime) {
      fn.apply(ctx, args)
      isFirstTime = false
      return
    }
    
    if (timer) {
      return
    }
    
    timer = setTimeout(function() {
      fn.apply(ctx, args)
      clearTimeout(timer!)
      timer = null
    }, interval)
  }
}


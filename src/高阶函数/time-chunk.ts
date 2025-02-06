 /**
 * 分时函数
 * 利用闭包保存一个任务队列，通过定时器切片处理大数据集
 * @param ary 数据集合
 * @param fn 处理函数
 * @param count 每次处理的数量
 * @param interval 时间间隔
 */
 export function timeChunk(ary: unknown[], fn: (...args: any[]) => void, count: number, interval = 200) {
  let timer: NodeJS.Timeout | null = null;

  // 复制数组副本，防止影响原数组
  const _ary = [...ary];

  const start = () => {
    for (let i = 0; i < Math.min(count || 1, _ary.length); i++) {
      const item = _ary.shift();
      item && fn(item);
    }
  }

  return function () {
    timer = setInterval(() => {
      if (_ary.length === 0) {
        timer && clearInterval(timer);
        timer = null;
        return;
      }
      start()
    }, interval);
  };
}

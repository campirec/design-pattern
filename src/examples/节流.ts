import { throttle } from '../高阶函数/throttle'
import { querySelector } from '../utils'
import { a } from '../单例模式/module-singleton'

const overHeight = querySelector('.over-height')

overHeight?.addEventListener('scroll', throttle((e) => {
  console.log('节流.ts: a => ', a)
}, 500))
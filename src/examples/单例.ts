import { a, add } from '../单例模式/module-singleton'
import { Singleton } from '../单例模式/class-singleton'
import { querySelector} from '../utils'

console.log('单例.ts: a => ', a)

const singletonBtn = querySelector('.singleton')

singletonBtn?.addEventListener('click', () => {
  add()
  console.log('单例.ts: a => ', a)
})

const SingletonA = Singleton.getInstance()
const SingletonB = Singleton.getInstance()

console.log(`SingletonA === SingletonB`, SingletonA === SingletonB)

import { querySelector } from '../utils'
import { timeChunk } from '../高阶函数/time-chunk'

const insertBtn =  querySelector('.insert-btn')
// const overHeight = querySelector('.over-height')

const ary = new Array(8000).fill(1).map((_, i) => i)

const render = timeChunk(ary, (item) => {
  const div = document.createElement('div')
  div.innerHTML = item
  document.body.appendChild(div)
}, 20)


insertBtn?.addEventListener('click', () => {
  render()
})


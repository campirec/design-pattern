import { Validator } from '../策略模式/form-validator'
import { querySelector } from '../utils'

/**
 * 假设我们正在编写一个注册的页面，在点击注册按钮之前，有如下几条校验逻辑。
 用户名不能为空。
 密码长度不能少于6 位。
 手机号码必须符合格式
 */

const registerForm = querySelector('#registerForm')
const validator = new Validator()
registerForm!.addEventListener('submit', function(e) {
  const form = registerForm as HTMLFormElement
  console.dir(form.username.value)
  console.dir(form.password.value)
  console.dir(form.mobile.value)
  e.preventDefault()
  // if(!form.username.value) {
  //   return alert('用户名不能为空')
  // }
  // if(form.password.value < 6) {
  //   return alert('密码长度不能少于6位')
  // }
  // const mobileRegex = /^1[3-9]\d{9}$/
  // if (!mobileRegex.test(form.mobile.value)) {
  //   return alert('手机号格式不正确')
  // }
 
  validator.add(form.username.value, 'isNotEmpty', '用户名不能为空')
  validator.add(form.password.value, 'minLength: 6', '密码长度不能少于6位')
  validator.add(form.mobile.value, 'isMobile', '手机号格式不正确')

  const errMsg = validator.start()
  if (errMsg) {
    return alert(errMsg)
  }
  return false
})

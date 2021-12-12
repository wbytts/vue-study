import { Toast } from 'vant'
import _ from 'lodash'

/**
 * 函数节流装饰器
 * @param {number} wait 节流的毫秒
 * @param {Object} options 节流选项对象
 * [options.leading=true] (boolean): 指定调用在节流开始前。
 * [options.trailing=true] (boolean): 指定调用在节流结束后。
 */
export const throttle = function (wait, options = {}) {
  return function (target, name, descriptor) {
    descriptor.value = _.throttle(descriptor.value, wait, options)
  }
}

/**
 * 函数防抖装饰器
 * @param {number} wait 需要延迟的毫秒数。
 * @param {Object} options 选项对象
 * [options.leading=false] (boolean): 指定在延迟开始前调用。
 * [options.maxWait] (number): 设置 func 允许被延迟的最大值。
 * [options.trailing=true] (boolean): 指定在延迟结束后调用。
 */
export const debounce = function (wait, options = {}) {
  return function (target, name, descriptor) {
    descriptor.value = _.debounce(descriptor.value, wait, options)
  }
}


/**
 * loading 装饰器
 * @param {*} message 提示信息
 * @param {function} errorFn 异常处理逻辑
 */
export const loading =  function(message = '加载中...', errorFn = function() {}) {
  return function(target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = async function(...rest) {
      const loading = Toast.loading({
        message: message,
        forbidClick: true
      });
      try {
        let result = await fn.call(this, ...rest);
        return result;
      } catch (error) {
        // 在调用失败，且用户自定义失败的回调函数时，则执行
        errorFn && errorFn.call(this, error, ...rest)
        console.error(error)
      } finally {
        loading.clear()
      }
    }
  }
}


export const log = function (msg) {
  /**
   * @param target 对应 methods 这个对象
   * @param name 对应属性方法的名称
   * @param descriptor 对应属性方法的修饰符
   */
  return function(target, name, descriptor) {
    console.log(target, name, descriptor)
    const fn = descriptor.value
    descriptor.value = function(...rest) {
      console.log(`---------- START ${msg} ----------`)
      fn.call(this, ...rest)
      console.log(`----------  END  ${msg} ----------`)
    }
  }
}

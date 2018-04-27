/**
 * 处理参数
 *
 * @export
 * @param {any} params
 * @returns
 */
function stringify(params) {
  const arr = []
  for (const key in params) {
    if (!params[key]) {
      delete params[key]
    } else {
      arr.push(`${key}=${params[key]}`)
    }
  }
  return arr.join('&')
}

export default stringify

/**
 * 清除无效数据
 *
 * @export
 * @param {any} params
 * @returns
 */

export default function compat(obj = {}) {
  for (const key in obj) {
    if (typeof obj[key] === 'undefined' || obj[key] === '') {
      delete obj[key]
    }
  }
  return obj;
}

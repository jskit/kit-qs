/**
 * 处理参数
 *
 * @export
 * @param {any} params
 * @returns
 */

// const toISO = Date.prototype.toISOString;

const defaults = {
  delimiter: '&',
  // encode: true,
  // encoder: utils.encode,
  // encodeValuesOnly: false,
  // serializeDate: function serializeDate(date) {
  //   return toISO.call(date);
  // },
  // skipNulls: false,
  // strictNullHandling: false,
}

function stringify(params, options = {}) {
  const opts = Object.assign({}, defaults, options)
  const { delimiter = defaults.delimiter } = opts

  const arr = []
  for (const key in params) {
    if (!params[key]) {
      delete params[key]
    } else {
      arr.push(`${key}=${encodeURIComponent(params[key])}`)
    }
  }
  return arr.join(delimiter)
}

export default stringify

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
  for (const key in opts) {
    if (!opts[key]) {
      delete opts[key]
    } else {
      arr.push(`${key}=${opts[key]}`)
    }
  }
  return arr.join(delimiter)
}

export default stringify

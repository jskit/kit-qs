
export function urlfix(url, paramsStr = '') {
  let fixUrl = url;
  if (paramsStr) {
    fixUrl = url + (url.indexOf('?') === -1 ? '?' : '&') + paramsStr;
  }
  return fixUrl;
}

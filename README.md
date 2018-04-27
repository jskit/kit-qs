# kit-qs

- 支持获取完整的 url 参数，拿参数
- 支持输出标准的 url 格式，用于分享

存在这样不规整的URL，其query参数需要特殊处理

```html
https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5
```

## 使用

```js
import qs from 'kit-qs'

const url = 'https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5'

const query = qs.parse(url)
```

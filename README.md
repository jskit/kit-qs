# kit-qs

url 参数处理

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

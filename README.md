# is-useragent-weixin

## Install

```
npm i is-useragent-weixin
```


## Usage

```javascript
import isUserAgentWeixin from 'is-useragent-weixin'


const ua = navigator.userAgent // get UA string from navigator or somewhere else

const isWeixin = isUserAgentWeixin(ua)

console.log(isWeixin)  // outputs whether the browser is weixin

```

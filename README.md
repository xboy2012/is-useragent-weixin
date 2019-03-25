# is-useragent-weixin

## Install

```
npm i is-useragent-weixin
```


## Usage

```javascript
import isUserAgentWeixin from 'is-useragent-weixin'

// get UA string from navigator or somewhere else
const ua = navigator.userAgent

// invoke the method
const isWeixin = isUserAgentWeixin(ua)

// outputs whether the browser is weixin
console.log(isWeixin)

```

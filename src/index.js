const regex_micromessenger = /micromessenger/i
const regex_wechatdevtools = /wechatdevtools/i

export default (userAgent) => {
  return regex_micromessenger.test(userAgent) || regex_wechatdevtools.test(userAgent)
}

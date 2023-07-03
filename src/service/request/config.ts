// 本地测试API
const DevBaseURL = 'https://mavidrome-cloud-music-rak5g0grr-wangyu13142.vercel.app'
// 生产环境
const ProBaseURL = 'https://mavidrome-cloud-music-rak5g0grr-wangyu13142.vercel.app'
export const BASE_URL = import.meta.env.DEV ? DevBaseURL : ProBaseURL
// 最大连接时间
export const TIME_OUT = 8000

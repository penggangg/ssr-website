// import axios from 'axios'

// export default .create({
// 	baseURL: process.env.baseUrl,
// })
import axios from 'axios'
// import Loading from '@/components/OverlayLoading/Loading'

export function fetch (url, params = {}, method = 'GET', {
  withMask = true,
  ...config
} = {}) {
  if (!url) {
    throw new Error('interface path not found')
  }
  let isGet = method.toUpperCase() === 'GET'
  axios.create({
      //定义请求文件类型
      headers:{
        'Content-Type': 'application/json',
      },
      // 请求超时
      timeout: 5000,
      //定义请求根目录
      baseURL: process.env.baseUrl
  });
  // withMask && Loading.show()
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method,
      params: isGet ? params : '',
      data: isGet ? '' : params,
      ...config
    }).then(rep => {
      // withMask && Loading.hide()
      resolve(rep.data)
    }, err => {
      // withMask && Loading.hide()
      reject(err)
    })
  })
}


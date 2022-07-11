// 配置请求对象
import axios from 'axios'
// 本地调试 dev 开发阶段
export const baseUrl = "https://www.fastmock.site/mock/7c2b4d662d21c3311479338632d3faec/tesla";
// product 阶段
// 设计模式
const axiosInstance = axios.create({
    baseURL: baseUrl
})

// 拦截器
// axiosInstance.interceptors.request.use(req=>{
//     console.log('开始请求....')
//     let localToken = '11111212121';
//     req.headers['Authorization'] = 
//         "Bearer  " + localToken
//     return req
// }, 
// err=>{

// });
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误~~')
    }
)

export { axiosInstance }
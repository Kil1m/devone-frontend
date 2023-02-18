
import axios from 'axios'


const base="https://v.api.aa1.cn/api/"

const service = axios.create({
  baseURL: base, 
  timeout: 5000, 
})

service.interceptors.request.use(
  config => {
   
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => {
    console.log(response)
    const res = response.data
    console.log(res)
    if (response.status !== 200) {
      console.log('接口信息报错',res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('接口信息报错' + error) 
    return Promise.reject(error)
  },
)
function callAPI(api){
    if(api.method=="get"){
        return service.get(api.url,{
            params:api.params
        })
        
    }
}
export default callAPI

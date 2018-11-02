//加载首页数据
import Axios from 'axios'
export const loadIndxData=data=>{
   return Axios.get(data.url)
}
export const loadPageDateIndex=(data)=>{
    return Axios.get(data.url,{params:data.parame})
}
export const loadBookCase=(data)=>{
    return Axios.get(data.url,{params:data.parame})
}
export const loadDesc=(data)=>{
    return Axios.get(data.url)
}
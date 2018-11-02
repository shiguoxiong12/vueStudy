import MyLoading from './loading.vue'
// 这里是重点
const loading = {
    install: function(Vue){
        Vue.component('Loading',MyLoading)
    }
}

// 导出组件
export default loading
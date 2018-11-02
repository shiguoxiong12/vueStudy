// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import loading from './components/loading.js'
import {Loading} from 'element-ui';
import VueLazyload from 'vue-lazyload'
import vConsole from 'vconsole'
const v=new vConsole();
Vue.prototype.$loading=Loading
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01t3HFw4zGY/cRQkpvrTm5bJJB.jpg',
  //loading: 'dist/loading.gif',
  attempt: 1
})
import 'vue2-animate/dist/vue2-animate.min.css';
Axios.defaults.baseURL = 'http://dushu.xiaomi.com';
Axios.defaults.timeout=1000*60*2

Vue.prototype.vv={}
Vue.config.productionTip = false
Vue.use(Swiper).use(loading)
// 添加请求拦截器
Axios.interceptors.request.use(config => {
      // 在发送请求之前做些什么
      //判断是否存在token，如果存在将每个页面header都添加token
  //     if (store.state.token) {
  //         config.headers.common['Authentication-Token'] = store.state.token
  //     }
      //请求前到请求到数据这段时间用加载动画来代替，以服务方式调用
     
     
    
  return config;
  }, error => {
      // 对请求错误做些什么
      console.log("发送失败");
    
    
    
  return Promise.reject(error);
  });
   
  // http response 拦截器
  Axios.interceptors.response.use(response => {
     
    
    
      return response;
  },
  error => {
      if (error.response) {
          switch (error.response.status) {
              case 401:
              this.$store.commit('del_token');
          
      }
  }
   
  
  return Promise.reject(error.response.data)
  });
  






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})

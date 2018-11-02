import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import book from '../views/booksShop'
import bookcase from '../views/bookcase'
import bookDesc from '../views/bookDesc'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   
    {
      path: '/',
      name: 'home',
      component:home,
      redirect:'/book',
      children:[
        {
          path:'book',
          name:'book',
          component:book
        },
        {
          path:'bookcase',
          name:'bookcase',
          component:bookcase
        }
      ]
    },{
      path:'/bookDesc',
      name:'bookDesc',
      component:bookDesc
    }
  ],
  scrollBehavior (to, from, savedPosition) {
     return {x:0,y:0}
  }
})

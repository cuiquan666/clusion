import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Home from '@/components/home.vue'
import Mumber from '@/components/mumber.vue'
import Shopcar from '@/components/shopcar.vue'
import Search from '@/components/search.vue'
import NewList from '@/components/news/newList.vue'
import NewInfo from '@/components/news/newsInfo.vue'
import ImgList from '@/components/imgslist/imglist.vue'
import Car from '@/components/imgslist/car.vue'
import Fen from '@/components/imgslist/fenjin.vue'
import ShopList from '@/components/shoplist/shopList.vue'
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/imglist',
      redirect:'/car'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/mumber',
      component:Mumber
    },
    {
      path:'/shopcar',
      component:Shopcar
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/newlist',
      component:NewList
    },
    {
      path:'/newsinfo/:id',
      name:'infoLink',
      component:NewInfo
    },
    {
      path:'/shoplist',
      component:ShopList
    },
    {
      path:'/imglist',
      name:'imgsLink',
      component:ImgList,
      children:[
        {
          path:'/car',
          name:'carLink',
          component:Car
        },
        {
          path:'/fenjin',
          name:'fenLink',
          component:Fen
        }
      ]
    },
   
  ],
  linkActiveClass:'active'
})

<template>
  <div id="newList">
      <ul>
          <router-link :to="{name:'infoLink',params:{id:item.id}}" tag="li" v-for="(item,index) in newList" :key="index">
              <img :src="item.imgUrl" alt="">
              <p>{{item.title}}</p>
          </router-link>
         
      </ul>
  </div>
</template>

<script>
import {getNews} from '@/api'

export default {
    data(){
        return{
            newList:[]
        }
    },
    created(){
     getNews().then(res=>{
        this.newList = res.data.data
     })
 }
}
</script>

<style lang='stylus' scoped>
    ul 
     width:100%;
     li
      display:flex;
      align-items:center;
      width:100%;
      height:2rem;
      border-bottom:1px solid #ddd;
      img 
       width:1.8rem;
       height:1.8rem;
</style>

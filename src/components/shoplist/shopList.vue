<template>
  <div id="shopList">
     <ul>
       <li v-for="(item,index) in list" :key="index">
         <img :src="item.picurl" alt="">
         <p class="title">{{item.title}}</p>
         <p class="price">{{item.symbol}}{{item.price}}</p>
         <span class="add" @click="addcar(index)">加入购物车</span>
       </li>
     </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      list:[],
    }
  },
  created(){
    axios.get('http://47.100.98.54:9020/api/goods')
    .then(res=>{
      this.list = res.data.data
    })
  },
  methods:{
      addcar(index){
        let shoplist ={
          id:this.list[index].id,
          picurl:this.list[index].picurl,
          price:this.list[index].price,
          title:this.list[index].title
        }
        this.$store.commit('shopp',shoplist)
        
      },
     
  }
 
  
}
</script>

<style lang='stylus' scoped>
    #shopList
      ul
       display:flex;
       flex-wrap:wrap;
       width:100%;
       li  
        width:50%;
        height:6.4rem;
        text-align:center;
        border-bottom:1px solid #ddd;
        margin-bottom:.1rem;
        img 
          width:100%;
          height:75%;
        .price 
          color:orange;
        .add 
          display:block;
          width:2rem;
          height:.7rem;
          background-color:red;
          line-height:.7rem;
          margin-left:1rem;
</style>

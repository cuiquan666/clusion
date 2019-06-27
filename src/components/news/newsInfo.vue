<template>
  <div id="newsInfo">
    <div v-for="(item,index) in info" :key="index">
      <h2>{{item.title}}</h2>
      <p>{{item.decv}}</p>
      <br>
      <br>
      <p>{{item.dev}}</p>
      <br>
      <h2>发表评论</h2>
      <hr>
      <textarea placeholder="欢迎发表评论，最多评论10句" maxlength="10" class="lun" v-model="msg"></textarea>
      <button @click="fn">发表评论</button>
      <ul>
        <li v-for="(item,index) in txt" :key="index">{{item}}</li>
      </ul>
    </div>
      
  </div>
</template>

<script>
import {getInfo} from '@/api'

export default {
 data(){
   return{
     info:[],
     msg:'',
     txt:[]
   }
 },
 created(){
   getInfo(this.$route.params.id).then(res=>{
     this.info =res.data.data
   }),
  this.txt = JSON.parse(localStorage.getItem('txt')) || [];

 },
 methods:{
   fn(){
     this.txt.push(this.msg)
     this.msg =''
   }
 },
 watch: {
          txt: {
            handler() {
                 localStorage.setItem('txt', JSON.stringify(this.txt))
             }
            },
           deep: true,
      }

}
</script>

<style lang='stylus' scoped>
    .lun 
      width:100%;
      height:1.5rem;
    li 
      height:.5rem;
      background-color:#ccc;
      margin-top:.1rem;
      text-indent:.2rem;
</style>

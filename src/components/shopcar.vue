<template>
  <div id="shopcar">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <img :src="item.picurl" alt="">
          <p class="title">{{item.title}}</p>
          <p class="price">¥{{item.price}}</p>
        </li>
      </ul>
      
  </div>
</template>

<script>


export default {
 data(){
   return{
     data:this.$store.state.shop
   }
 },
 
}
</script>

<style lang='stylus' scoped>
    #shopcar
       width:100%;
       ul 
        width:100%;
        li
         display:flex; 
         height:2rem;
         align-items:center;
         border-bottom:1px solid #ddd;
         img 
          width:1.5rem;
          height:1.5rem;
          margin-left:.3rem;
         p 
          margin-left:.4rem;
         .price 
          color:orange;
         .title 
          font-size:.4rem;

</style>

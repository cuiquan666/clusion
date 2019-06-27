<template>
  <div id="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://img1.qunarzz.com/piao/fusion/1708/f1/ee65a13642c95c02.jpg_750x200_3440fec0.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img1.qunarzz.com/piao/fusion/1805/9c/ba7b402ad572c902.jpg_750x200_a83ca8d6.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img1.qunarzz.com/piao/fusion/1804/ba/5a7899d201e21602.jpg_750x200_0cf5f940.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <div class="home-botoom">
      <ul>
        <router-link to="/newlist" tag="li">新闻列表</router-link>
        <router-link to="/imglist" tag="li">精美图片</router-link>
        <router-link to="/shoplist" tag="li">购物车</router-link>
        <li>12</li>
        <li>12</li>
        <li>12</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang='stylus' scoped>
    .mint-swipe
      height:3rem;
      img
       width:100%;
       height:100%;
    .home-botoom
       width:100%;
       height:4.5rem;
       ul
        display:flex;
        flex-wrap:wrap;
        width:100%;
        height:100%;
        li 
         width:33%;
         height:49%;
         border-right:1px solid #ddd;
         border-bottom:1px solid #ddd;
         text-align:center;
         line-height:2.2rem;
        
</style>

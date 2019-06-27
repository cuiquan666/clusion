<template>
  <div id="tabbar">
      <mt-tabbar >
  <mt-tab-item>
    <router-link to="/home">
       <i class="iconfont icon-shouye"></i>
           首页
    </router-link>
  </mt-tab-item>
  <mt-tab-item >
    <router-link to="/mumber">
       <i class="iconfont icon-huiyuan"></i>
          会员
    </router-link>
   
  </mt-tab-item>
  <mt-tab-item >
    <router-link to="/shopcar">
      <i class="iconfont icon-gouwuche"></i>
          购物车
    </router-link>
    
  </mt-tab-item>
  <mt-tab-item >
    <router-link to="/search">
        <i class="iconfont icon-sousuo"></i>
             搜索
    </router-link>
    
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>


export default {
 
}
</script>

<style lang='stylus' scoped>
    #tabbar
         .mint-tabbar
           position:fixed;
           left:0;
           bottom:0;
         .mint-tab-item is-selected
           color:#000;
         .active 
          color:red;
         i 
          display:block;
          margin-bottom:.2rem;
</style>

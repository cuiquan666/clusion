<template>
  <div id="imglist">
      <div class="btn">
        <router-link to="/car" tag="button">汽车</router-link>
        <router-link to="/fenjin" tag="button">风景</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
 
}
</script>

<style lang='stylus' scoped>
    #imglist
      width:100%;
      .btn 
        width:100%;
        display:flex;
        button
          width:50%;
          height:2rem;
</style>

<template>
  <div id="app">
   <Header></Header>
   <transition>
   <router-view></router-view>
   </transition>
   <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Tabbar from '@/components/tabbar/tabbar.vue'
export default {
  components:{
    Header,
    Tabbar
  }
}
</script>

<style>
 *{
   margin:0;
   padding:0;
 }
 li{
   list-style: none;
 }
 html{
   font-size:13.3333vw;
 }
 #app{
   font-size:.3rem;
   padding-top:.9rem;
   padding-bottom:1.5rem;
   overflow-x: hidden;
 }
 a{
   text-decoration: none;
 }

 .v-enter{
    opacity: 0;
   transform: translateX(100%);
 }
 .v-leave-to{
   opacity: 0;
   transform: translateX(-100%);
   position: absolute;
 }
 .v-enter-active,
 .v-leave-active{
   transition: all 0.5s ease;
 }
</style>

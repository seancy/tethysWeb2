<template>
  <div>
    <topHeader></topHeader>
    <!-- <div id="app"> -->
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
    <!-- </div> -->
    <bottomFooter></bottomFooter>
    <onlineService></onlineService>
    <!-- <popupAd></popupAd> -->
  </div>
</template>

<script>
import '../static/css/main.css'
import '../static/css/pages.css'
import '../static/css/personal.css'
import TopHeader from '@/components/TopHeader'
import BottomFooter from '@/components/BottomFooter'
import OnlineService from '@/components/OnlineService'
import PopupAd from '@/components/PopupAd'

export default {
  name: 'app',
  components: {
    TopHeader,
    BottomFooter,
    OnlineService,
    PopupAd
  }
  // template: '<div><topHeader></topHeader>test info.</div>'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

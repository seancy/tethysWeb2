<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/Casino">Casino</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/disclaimer">Disclaimer</a></li>

      <li><a href="/duty">Duty</a></li>
      <li><a href="/help">Help</a></li>
      <li><a href="/join">Join</a></li>
      <li><a href="/live">Live</a></li>
      <br>
      
      <li><a href="/lottery">Lottery</a></li>
      <li><a href="/personal-bettin">PersonalBettin</a></li>
      <li><a href="/personal-callin">PersonalCallin</a></li>
      <li><a href="/personal-callin_edit">PersonalCallinEdit</a></li>

      <li><a href="/personal-callin1">PersonalCallin1</a></li>
      <li><a href="/personal-deposit">PersonalDeposit</a></li>
      <li><a href="/personal-deposit1_1">PersonalDeposit11</a></li>
      <li><a href="/personal-funds">PersonalFunds</a></li>
      <br>

      <li><a href="/personal-info">PersonalInfo</a></li>
      <li><a href="/personal-modify-password">PersonalModifyPassword</a></li>
      <li><a href="/personal-msg">PersonalMsg</a></li>
      <li><a href="/policy">Policy</a></li>

      <li><a href="/sign-up">SignUp</a></li>
      <li><a href="/sports">Sports</a></li>


    </ul>
    <!-- <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

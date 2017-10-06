<template>
    <div>
        <!--浮动广告-->
        <div class="online-service left">
            <img src="static/images/banner/banner_float-left_v1_01.gif" alt="">
            <img src="static/images/banner/banner_float-left_v1_02.gif" alt="">
            <img src="static/images/banner/banner_float-left_v1_03.gif" alt="">
            <img src="static/images/banner/banner_float-left_v1_04.gif" alt="">
            <div class="close"></div>
        </div>
        <div class="online-service right">
            <img src="static/images/banner/banner_float-right_v1_01.gif" alt="">
            <img src="static/images/banner/banner_float-right_v1_02.gif" alt="">
            <img src="static/images/banner/banner_float-right_v1_03.gif" alt="">
            <img src="static/images/banner/banner_float-right_v1_04.gif" alt="">
            <div class="close"></div>
        </div>
        <!--end 浮动广告-->
    </div>
</template>

<script>
export default {
  name: 'onlineService',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  mounted:function(){
    $('.online-service.left .close').on('click',function(){
        $(this).parent().stop().animate({left:'-130px'});
    })
    $('.online-service.right .close').on('click',function(){
        $(this).parent().stop().animate({right:'-130px'});
    })
  }
}
</script>
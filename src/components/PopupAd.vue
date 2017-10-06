<template>
    <div class="popupad" v-if="!closed">
        <div class="popupad_window">
            <a class="popupad_close" href="javascript:;"><span class="icon_sprite icon_close2"></span></a>
            <div class="popupad_content">
                <img src="static/images/banner/popupad.png">
            </div>
        </div>
    </div>
</template>

<script>
var cookie = require('js-cookie');
export default {
  name: 'popupupAd',
  data () {
    return {
      closed:0,
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  mounted:function(){
    this.closed = cookie.set('popupadClosed');
    $('.popupad_close').on('click',function(){
        $('.popupad').hide();
        this.closed = true;
        cookie.set('popupadClosed', this.closed);
    })
  }
}
</script>
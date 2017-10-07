<template>
    <div class="popupad" v-if="!closed">
        <div class="popupad_window">
            <a class="popupad_close" href="javascript:;"><span class="icon_sprite icon_close2"></span></a>
            <div class="popupad_content">
                <img v-lazy="adv_picurl" @click="window.open(linkUrl,'_blank')">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'popupupAd',
  data: function () {
    return {
      hasLogin: false,
      photo_url:'',
      adv_title:'',
      adv_picurl:'',
      linkUrl:'',
      closed:false,
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  mounted:function(){
    this.closed = sessionStorage.getItem('popupadClosed');
    this.photo_url = common.photo_url;
    this.hasLogin = common.ifLanded();
    $('.popupad_close').on('click',function(){
        $('.popupad').hide();
        this.closed = true;
        sessionStorage.setItem('popupadClosed', this.closed);
    })
    //this.getPopUPInfo();
  }, 
  methods:{
    getPopUPInfo:function(){
        var _self = this;
        var varg = null;
        $.ajax({
          url:'cms/popup/getPopUpInfo',
          method:'POST',
          success:function(data){
            if (data && data.apistatus == 1) {
                $(".popupad").show();
                _self.adv_title = data&&data.result&&data.result.title;
                var picurl = _self.photo_url+"/pic/";
                picurl+=data&&data.result&&data.result.titlePic+"/0";
                _self.adv_picurl = picurl;
                _self.linkUrl = data&&data.result&&data.result.linkUrl;
                if(!_self.linkUrl){
                } else {
                    $(".popupad_body img").css("cursor","pointer");
                }
            }else{
              _self.closed = true;
            }
          }, 
          error:function(){
            _self.closed = true;
          }
        });

    }
  }
}
</script>
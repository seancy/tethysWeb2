<template>
    <div>
        <!--浮动广告-->
       <!-- <div class="online-service left" v-if="!/HH/.test(pagename) && floatImage && floatImage.leftFirstUrl">-->
        <div class="online-service left" v-if="!/HH/.test(pagename)">
            <div class="height-service">
                <template v-for="(left,index) in leftURL">
                    <span class="online-img" v-if="left.url==''"><img v-lazy="photo_url+'/pic/'+left.img+'/0'" /> </span>
                    <a :href="left.url" target="_blank" v-else><img v-lazy="photo_url+'/pic/'+left.img+'/0'" /></a>
                </template>
            </div>
            <div class="close" @click="closeFloat('left')"></div>
        </div>
       <!-- <div class="online-service right" v-if="!/HH/.test(pagename) && floatImage && floatImage.rightFirstUrl">-->
        <div class="online-service right" v-if="!/HH/.test(pagename) ">
            <div class="height-service">
                <template v-for="(right,index) in rightURL">
                    <span class="online-img" v-if="right.url==''"> <img v-lazy="photo_url+'/pic/'+right.img+'/0'" alt=""/> </span>
                           <a :href="right.url" target="_blank"  v-else> <img v-lazy="photo_url+'/pic/'+right.img+'/0'" alt=""/> </a>
                </template>
            </div>
            <div class="close" @click="closeFloat('right')"></div>
        </div>
        <!--end 浮动广告-->
    </div>
</template>

<script>
export default {
  name: 'onlineService',
  data: function() {
    return {
        floatImage:null,
        pagename: '',
        photo_url: '',
        leftURL: [],
        rightURL: [],
    }
  }, 
  created:function(){
    this.photo_url = common.photo_url;
    this.pagename = this.$route.name || '';
  },
  mounted:function(){
    this.getFloatImage();
  }, 
  methods:{
      // 关闭浮动图
      closeFloat:function (el) {
          if(el =='left'){
            $('.online-service.left').animate({left:'-130px'});
          }else{
              $('.online-service.right').animate({right:'-130px'});
          }
      },
    getFloatImage: function() {
        var _self = this;
        common.ajax('cms/client/index', {}, function(data) {
          //  _self.leftURL = data && data.result && data.result.ad && data.result.ad.FDT && data.result.ad.FDT.leftUrl;
            var result = data && data.result && data.result.ad && data.result.ad.FDT || {} ;
            _self.floatImage = result;
            if(result.leftFirstUrl){
                // $('.online-service_left').show() ;
                var leftimg_1 = result.leftFirstUrl ;
                var lefturl_1 =result.leftFirstLink  ;
                var leftimg_2 = result.leftSecUrl ;
                var lefturl_2 =result.leftSecLink  ;
                var leftimg_3 = result.leftThirdUrl ;
                var lefturl_3 =result.leftThirdLink  ;
                var leftimg_4 = result.leftForthUrl ;
                var lefturl_4 =result.leftForthLink  ;
                _self.leftURL.push({
                    "img": leftimg_1 ,
                    "url": lefturl_1 ,
                }) ;
                _self.leftURL.push({
                    "img": leftimg_2 ,
                    "url": lefturl_2 ,
                }) ;
                _self.leftURL.push({
                    "img": leftimg_3 ,
                    "url": lefturl_3 ,
                }) ;
                _self.leftURL.push({
                    "img": leftimg_4 ,
                    "url": lefturl_4 ,
                }) ;

            }
          if(result.rightFirstUrl){
              // $('.online-service').show() ;
              var rightimg_1 = result.rightFirstUrl ;
              var righturl_1 =result.rightFirstLink  ;
              var rightimg_2 = result.rightSecUrl ;
              var righturl_2 =result.rightSecLink  ;
              var rightimg_3 = result.rightThirdUrl ;
              var righturl_3 =result.rightThirdLink  ;
              var rightimg_4 = result.rightForthUrl ;
              var righturl_4 =result.rightForthLink  ;
              _self.rightURL.push({
                  "img": rightimg_1 ,
                  "url": righturl_1 ,
              }) ;
              _self.rightURL.push({
                  "img": rightimg_2 ,
                  "url": righturl_2 ,
              }) ;
              _self.rightURL.push({
                  "img": rightimg_3 ,
                  "url": righturl_3 ,
              }) ;
              _self.rightURL.push({
                  "img": rightimg_4 ,
                  "url": righturl_4 ,
              }) ;

          }

        });
    },
  }
}
</script>
<style scoped>
    .height-service{  max-height: 370px; overflow-y: hidden;}
</style>
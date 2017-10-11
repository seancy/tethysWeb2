<template>
  <div id="main">
      <div class="pagebox" id="promo">
          <div class="contain_width">
              <h2 class="page_title"></h2>
          </div>

          <div class="contain_width">
              <div class="promo_tabs" id="promo_tabs">
                <!-- class="active"  -->
                  <a href="javascript:;" v-for="title in titles" @click="changeTab(title.id, $event)" v-bind:class="{active:title.id===0}">{{title.text}}</a>
              </div>
              <div class="promo_content" id="promo_content">
                  <ul class="active">
                      <li class="promo_item" v-for="item in activity"  :class="'pro_'+[item.id]">
                          <a href="javascript:;" @click="toggle"><img v-lazy="photo_url+'/pic/'+item.titlePic+'/0'" :alt="[item.title]"></a>
                          <div class="promo_detail">
                              <div v-html="item.content" v-if="item.contentUsePic == 2" class="content-body"></div>
                              <div class="content-body"  v-else="item.contentUsePic == 1"><img  v-lazy="photo_url+'/pic/'+item.content+'/0'"/></div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'promo',
  data :function() {
    return {
      titles:[
        { id:0, text:'所有活动' },
        { id:1, text:'最新优惠' },
        { id:2, text:'电子优惠专题' },
        { id:3, text:'教程解说' },
        { id:4, text:'其他优惠' },
      ],
      activity: [],
      // activity1:[],
      // activity2:[],
      // activity3:[],
      // activity4:[],
      photo_url:'',

      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  created:function(){
    this.photo_url = common.photo_url;
    this.getData(0);
  },
  // mounted:function(){
  //   // 展开广告
  //   $(".promo_content").on('click', '.promo_item a',function(){
  //       $(this).next('.promo_detail').stop(true,true).slideToggle(300).parent().siblings().find('.promo_detail').stop(true,true).slideUp(300);
  //   })
  // },
  methods:{
    toggle:function(e){
      var $src = $(e.currentTarget);
      $src.next('.promo_detail').stop(true,true).slideToggle(300).parent().siblings()
        .find('.promo_detail').stop(true,true).slideUp(300);
    },
    changeTab:function(arg, e){
        var _self = this;
        var $src = $(e.currentTarget);
        if(typeof arg=="number"){
            _self.getData(arg);
        } else {
            common.toast({content: "页签加载错误！"});
        }
        $src.addClass('active').siblings().removeClass('active')
    },
    getData: function (label) {  // 0全部，1最新
        var _self = this;
        common.ajax('cms/client/activity/listNew', {label:label}, function (data) {
          _self.activity = data && data.result || [];
        });
    }
  }
}
</script>
<template>
  <div id="main">
    <div class="pagebox" id="lottery">
      <div class="contain_width">
        <h2 class="page_title"></h2>
        <!--品牌选单-->
        <div class="pagemenu_slider">
          <div class="item_pagemenu" >
            <a href="javascript:;" @click="enterGame(computers[0].id)" class="active">
              <div class="img"><span style="background-image: url(../../static/images/brand/bbin.png)"></span></div>
              <h3>{{computers[0].name}}</h3>
            </a>
          </div>
          <div class="item_pagemenu">
            <a href="javascript:;"  @click="enterGame(computers[1].id)">
              <div class="img"><span style="background-image: url(../../static/images/brand/ug.png)"></span></div>
              <h3>{{computers[1].name}}</h3>
            </a>
          </div>
        </div><!--end 品牌选单-->

      </div>

      <div class="contain_width">

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'sports',
  data: function() {
        return {
            hasLogin: false,
            computers: [],
            gameLists:[],
            game_sub_image:{"824":"sport_bb","1257":"sport_ug"}
        }
    },
    created: function() {
        var _self = this;
        _self.topBar = common.Cookie.get('topBar') && JSON.parse(common.Cookie.get('topBar')) || [];
        _self.hasLogin = common.ifLanded();
        _self.photo_url = common.photo_url;
        _self.loadSports(1002);

    },
    methods: {
        loadSports: function(id) {
            var _self = this;
            // common.ajax('config/kd/game/iframe/load', {
            common.ajax('config/kd/game/special/load', {
                id: id
            }, function(data) {
                if (data.apistatus == '0') {
                    common.toast({
                        content: "网络较差，请稍后重试！"
                    });
                } else if (data.apistatus == '1') {
                    if (data && data.result && data.result.game && data.result.game.list) {
                        _self.computers = data.result.game.list;
                        _self.gameLists = data.result.apiList;
                    }
                }
            });
        },
        // // 进入游戏
         enterGame: function(id) {
             var _self = this;
             if (_self.hasLogin === false) {
                 common.toast({
                     content: "请先登录！！"
                 });
                 return;
             }
             common.ajax('config/kd/game/start', {
                 id: id
             }, function(data) {
                 if (data.apistatus == '0') {
                     common.toast({
                         content: "网络较差，请稍后重试！"
                     });
                 } else {
                     var win = common.openGame();
                     if(openGameSize<2){
                         win.document.write(loadStr) ;
                     }
                     var loop = setInterval(function() {
                         if(win .closed) {
                             openGameSize = 0 ;
                             clearInterval(loop);
                         }
                     }, 500);
                     if (data && data.result) {
                         var url = data.result.content;
                         // $('#iframeId').attr('src', url);
                         win = common.openGame(url);
                     }
                 }
             }, 'post');
         }

    }
}
</script>
<style scoped>
  /*.sports-show { padding-top: 105px; background: #1F1F1F center center no-repeat; }*/
  /*.banner-sports { height: 295px; background: url(../../static/css/img/banner-sports.png) top center no-repeat; position: relative; background-size: 1920px auto; }*/

  /*.sports_list{ width: 1020px; margin: 40px auto;}*/
  /*.sports_list .sports_list_content{ margin:0px; padding: 0px;}*/
  /*.sports_list .sports_list_content li{ list-style: none; padding:0px; width: 48%; height: 374px; display: inline-table; margin: 40px 1% 30px; position: relative; text-align: center; border: 2px solid #313131; float: left;}*/
  /*.sports_list .sports_list_content li:hover{border-color: #ff6000;box-shadow: 0px 0px 30px rgba(0,0,0,0.6);-webkit-transition: border-color 300ms ease-in;-moz-transition: border-color 300ms ease-in;-ms-transition: border-color 300ms ease-in;transition: border-color 300ms ease-in; }*/
  /*.sports_list .sports_list_content li .bg {width: 485px; height: 405px;position: absolute;bottom: 0px;left: 0px;background-repeat: no-repeat;background-position: -40px -370px;-webkit-transition: background-position 200ms ease-out;-moz-transition: background-position 500ms ease-out;-ms-transition: background-position 500ms ease-out;transition: background-position 500ms ease-out;}*/
  /*.sports_list .sports_list_content li:hover .bg{background-position-x: 0px;}*/
  /*.sports_list .sports_list_content li .img {width: 485px;height: 370px;position: absolute;bottom: 0px;left: 0px;background-repeat: no-repeat;background-position: 40px 0px;-webkit-transition: background-position 200ms ease-out;-moz-transition: background-position 200ms ease-out;-ms-transition: background-position 500ms ease-out;transition: background-position 500ms ease-out;}*/
  /*.sports_list .sports_list_content li:hover .img{background-position-x: -20px;}*/
  /*.sports_list .sports_list_content li .title{height: 108px; position: absolute;bottom: 0;left: 0;z-index: 3;width: 100%;padding: 15px;text-align: center;background-color: rgba(0,0,0,0.8);}*/
  /*.sports_list .sports_list_content li .title_img{margin-top: 5px;width: 150px;height: 50px;background-size: 100%;display: inline-block;float: left;}*/
  /*.sports_list .sports_list_content li.sport_ug .title_img{background-image: url(../../static/css/img/logo_ug.png); width: 208px; height: 76px;}*/
  /*.sports_list .sports_list_content li.sport_bb .title_img{background-image: url(../../static/css/img/logo_bb.png); width:126px; height: 68px;}*/
  /*.sports_list .sports_list_content li h2{font-size: 18px;margin-top: 23px; display: inline-block;margin-left: 10px; color: #fff;font-weight: normal;vertical-align: bottom; float: left;}*/
  /*.sports_list .sports_list_content li .btn_enter{position: absolute;bottom: 13px;z-index: 4;left: 50%;}*/
  /*.sports_list .sports_list_content li .gameopen_parent{margin-left: 100px; display: inline-block;margin-top: 10px;color: #fff;line-height: 34px;height: 34px;padding: 0px 30px;background-color: #ff6000;border-radius: 17px;}*/
  .pagebox .pagemenu_slider {

    text-align: center;
  }
  .pagebox .item_pagemenu {

    width: 192px;
    display: inline-block;
  }

</style>
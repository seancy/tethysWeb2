<template>
  <div id="main">
      <div class="pagebox" id="lottery">
          <div class="contain_width">
              <h2 class="page_title"></h2>
              <!--品牌选单 先不用-->
            <!--  <div class="pagemenu_slider">
                  <div class="item_pagemenu" v-for="list in games">
                      <a href="javascript:;" data-list="lottery_bb"  @click="enterGame(list.id)"> &lt;!&ndash; class="active" &ndash;&gt;
                          <div class="img">
                             &lt;!&ndash; <span style="background-image: url(../../static/images/brand/bbin.png)"></span>&ndash;&gt;
                              <span  :style="{backgroundImage: 'url('+[photo_url+'/pic/'+list.img+'/0']+')'}"></span>
                          </div>
                          <h3>BB彩票</h3>
                      </a>
                  </div>
                  <div class="item_pagemenu">
                      <a href="javascript:;" data-list="lottery_bc">
                          <div class="img"><span style="background-image: url(../../static/images/brand/bc.png)"></span></div>
                          <h3>BC彩票</h3>
                      </a>
                  </div>

              </div>-->

              <!--彩票遊戲-->
              <div class="lotterys_list">
                  <ul class="lotterys_list_content">
                      <li class="lottery_bb" v-for="list in games">
                          <div class="img_div">
                              <div class="img"  :style="{backgroundImage: 'url('+[photo_url +'/pic/'+[list.img]+'/0']+')'}"></div>
                              <div class="title">
                                  <div class="title_img"></div>
                                  <div class="btn_enter"> <a class="gameopen_parent" href="javascript:;" @click="enterGame(list.id)">进入游戏</a> </div>
                              </div>
                          </div>
                      </li>
                      <li class="lottery_bc">
                          <div class="img_div">
                              <div class="img" style="background-image:url(/static/images/lo_bc.png)"></div>
                              <!-- <div class="title">
                                <div class="title_img"></div>
                                <div class="btn_enter"> <a class="gameopen_parent" href="javascript:;">进入游戏</a> </div>
                              </div> -->
                          </div>
                      </li>


                  </ul>
              </div>
              <!--end 彩票遊戲-->

          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'lottery',
  data: function() {
    return {
      hasLogin: false,
      games: [],
     // game_name:{"862":"BB彩票"} ,
      game_sub_image:{"":"lottery_bb","":"lottery_bc"}
    }
  }, 
  created:function(){
    this.loadLottery(1003);
    this.hasLogin = common.ifLanded();
    this.photo_url = common.photo_url;
    this.$nextTick(function () {

    });
  },
  methods:{
    loadLottery:function(id){
        var _self = this;
        common.ajax('config/kd/game/special/load', {
            id: id
        }, function (data) {
            if(data.apistatus =='0'){
                common.toast({content: "网络较差，请稍后重试！"});
            }else {
                if (data && data.result) {
                  _self.games = data.result.game.list ;

                }
            }
        });
    },
    // 进入游戏
    enterGame: function (id) {
        var _self = this;
        if (_self.hasLogin === false) {
            common.toast({content: "请先登录！！"});
            return;
        }
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
        common.ajax('config/kd/game/start',{id: id}, function (data) {
            if(data.apistatus =='0'){
                win.close();
                common.toast({content: "网络较差，请稍后重试！"});
            } else {
                if (data && data.result) {
                    var url = data.result.content;
                    win = common.openGame(url);
                }
            }
        }, 'post');
    }
  }
}
</script>

<style scoped>
    .pagebox .pagemenu_slider {
        text-align: center;
    }
    .pagebox .item_pagemenu {
        width: 192px;
        display: inline-block;
    }
    .lotterys_list{ width: 1020px; margin: 0 auto;}
    .lotterys_list .lotterys_list_content{ margin:0px; padding: 0px;}
    .lotterys_list .lotterys_list_content li{ list-style: none; padding:0px; width: 48%; height: 250px; display: inline-table; margin: 0px 1% 30px; position: relative; text-align: center; border: 2px solid #313131; float: left;}
    .lotterys_list .lotterys_list_content li:hover{border-color: #ff6000;box-shadow: 0px 0px 30px rgba(0,0,0,0.6);-webkit-transition: border-color 300ms ease-in;-moz-transition: border-color 300ms ease-in;-ms-transition: border-color 300ms ease-in;transition: border-color 300ms ease-in; }
    .lotterys_list .lotterys_list_content li .bg {width: 485px; height:323px;position: absolute;bottom: 0px;left: 0px;background-repeat: no-repeat;background-position: -40px -363px;-webkit-transition: background-position 200ms ease-out;-moz-transition: background-position 500ms ease-out;-ms-transition: background-position 500ms ease-out;transition: background-position 500ms ease-out;background-size: 110%;}
    .lotterys_list .lotterys_list_content li:hover .bg{background-position-x: 0px;}
    .lotterys_list .lotterys_list_content li .img {width: 485px;height: 246px;position: absolute;bottom: 0px;left: 0px;background-repeat: no-repeat;background-position: 0  px 0px;-webkit-transition: background-position 200ms ease-out;-moz-transition: background-position 200ms ease-out;-ms-transition: background-position 500ms ease-out;transition: background-position 500ms ease-out;background-size: 110%;}
    .lotterys_list .lotterys_list_content li:hover .img{background-position-x: -20px;}
    .lotterys_list .lotterys_list_content li .title{height: 108px; position: absolute;bottom: 0;left: 0;z-index: 3;width: 100%;padding: 15px;text-align: center;background-color: rgba(0,0,0,0.8);}
    .lotterys_list .lotterys_list_content li .title_img{margin-top: 5px;width: 150px;height: 50px;background-size: 100%;display: inline-block;float: left;}
    .lotterys_list .lotterys_list_content li.lottery_bc .title_img{    background-image: url(../../static/images/logo_bc.png);width: 208px;height: 62px;}
    .lotterys_list .lotterys_list_content li.lottery_bb .title_img{background-image: url(../../static/images/logo_bb.png); width:126px; height: 68px;}
    .lotterys_list .lotterys_list_content li h2{font-size: 18px;margin-top: 23px; display: inline-block;margin-left: 10px; color: #fff;font-weight: normal;vertical-align: bottom; float: left;}
    .lotterys_list .lotterys_list_content li .btn_enter{position: absolute;bottom: 13px;z-index: 4;left: 50%;}
    .lotterys_list .lotterys_list_content li .gameopen_parent{margin-left: 100px; display: inline-block;margin-top: 10px;color: #fff;line-height: 34px;height: 34px;padding: 0px 30px;background-color: #ff6000;border-radius: 17px;}

</style>
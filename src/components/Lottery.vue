<template>
  <div id="main">
      <div class="pagebox" id="lottery">
          <div class="contain_width">
              <h2 class="page_title"></h2>
              <!--品牌选单-->
              <div class="pagemenu_slider">
                  <div class="item_pagemenu" v-for="list in games">
                      <a href="javascript:;" data-list="lottery_bb"  @click="enterGame(list.id)"> <!-- class="active" -->
                          <div class="img">
                             <!-- <span style="background-image: url(../../static/images/brand/bbin.png)"></span>-->
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

              </div>
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
      game_name:{"862":"BB彩票"} ,
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

</style>
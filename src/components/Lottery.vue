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
                                  <div class="btn_enter"> <a class="gameopen_parent" href="javascript:;" @click="$parent.enterGame(list.id,platform)">进入游戏</a> </div>
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
      game_sub_image:{"":"lottery_bb","":"lottery_bc"},
      platform:'' ,
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
        common.ajax('config/kd/game/load', {
            id: id
        }, function (data) {
            if(data.apistatus =='0'){
                common.toast({content: "网络较差，请稍后重试！"});
            }else {
                if (data && data.result) {
                  _self.games = data.result.game.list ;
                  _self.platform =  data.result.apiList[0].platformId ;
                }
            }
        });
    },


  }
}
</script>

<style scoped>

</style>
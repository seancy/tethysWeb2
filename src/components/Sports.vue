<template>
  <div id="main">
    <div class="pagebox" id="lottery">
      <div class="contain_width">
        <h2 class="page_title"></h2>
        <!--品牌选单 先不用-->
       <!-- <div class="pagemenu_slider" >
          <div class="item_pagemenu" v-for="list in computers">
            <a href="javascript:;" @click="enterGame(list.id)" >
              <div class="img">
               &lt;!&ndash; <span style="background-image: url(../../static/images/brand/bbin.png)"></span>&ndash;&gt;
                <span  :style="{backgroundImage: 'url('+[photo_url+'/pic/'+list.img+'/0']+')'}" ></span>
              </div>
              <h3>{{game_name[list.id]}}</h3>
            </a>
          </div>
       &lt;!&ndash;   <div class="item_pagemenu">
            <a href="javascript:;"  @click="enterGame(computers[1].id)">
              <div class="img"><span style="background-image: url(../../static/images/brand/ug.png)"></span></div>
              <h3>{{computers[1].name}}</h3>
            </a>
          </div>&ndash;&gt;
        </div>-->
        <div class="sports_list">
          <ul class="sports_list_content">
            <li :class="game_sub_image[item.id]" v-for="(item, index) in computers">
              <div class="img_div">
                <div class="bg" :style="{backgroundImage: 'url('+[photo_url +'/pic/'+[item.img]+'/0']+')'}"></div>
                <div class="img" :style="{backgroundImage: 'url('+[photo_url +'/pic/'+[item.img]+'/0']+')'}"></div>
                <div class="title">
                  <div class="title_img"></div>
                  <div class="btn_enter">
                    <a class="gameopen_parent" href="javascript:;" @click="enterGame(item.id)">进入游戏</a>
                  </div>
                </div>
              </div>
            </li>

          </ul>
          <!--
              <a class="carousel-prev" href="#carousel-tag" data-slide="prev">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
              </a>
              <a class="carousel-next" href="#carousel-tag" data-slide="next">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
              </a>
          -->
        </div>
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
            game_sub_image:{"824":"sport_bb","1257":"sport_ug"},
            game_name:{"824":"BB体育","1257":"UG体育"} ,
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
        // 进入游戏
        enterGame: function (id) {
            var _self = this;
            if (_self.hasLogin === false) {
                _self.$nextTick(function () {
                    common.$message({
                        title: '登陆提示',
                        content: '请先登录！！',
                        hc: true,
                        okcb: function () {
                            _self.$router.push({path: '/'});
                        }
                    });
                });
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
        },

    }
}
</script>
<style scoped>


</style>
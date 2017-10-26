<template>
    <div id="main">
        <div class="pagebox" id="live">
          <div class="contain_width">
              <h2 class="page_title"></h2>
              <!--品牌选单-->
              <div class="pagemenu_slider" style="display: none;">
                  <template  v-for="(bar,index) in topBar" v-bind:class="{'active': index === 0}" >
                      <div class="item_pagemenu changes_tap" v-for="item in bar" :value="item.id">
                          <a href="javascript:;" data-list="live_mg" v-bind:class="{'active' : item.id == id }"  :data-platform="item.platformId" :value="item.id" @click="getGameAll('system',item.id)">
                              <div class="img"><span :style="{backgroundImage: 'url('+[photo_url+'/pic/'+item.img+'/0']+')'}" :alt="item.id"></span></div>
                              <h3>{{item.name}}</h3>
                          </a>
                      </div>
                  </template>
              </div><!--end 品牌选单-->
          </div>
          <div class="contain_width">
            <template v-for="(item,index) in lives" >
            <!--mg视讯-->
            <!-- $('#live_bb, #live_sb, #live_gd').addClass('temp_block'); -->
            <!-- v-bind:class="{'active' : index===0, 'temp_block':id === 10011 || id === 10082|| id === 10092}" -->
            <ul class="page_liveList" :id="'live_' + kind[id]" v-bind:class="{'active' : index===0, 'temp_block':id === 10011 || id === 10082|| id === 10092}">
              <li v-for="(game,key) in item" >
                  <div class="bg" :style="{backgroundImage: 'url('+[photo_url +'/pic/'+[game.img]+'/0']+')'}"></div>
                  <div class="img" :style="{backgroundImage: 'url('+[photo_url +'/pic/'+[game.img]+'/0']+')'}"></div>
                  <div class="brand">
                      <span class="logo" v-bind:style="'background-image: url(../static/images/brand/'+ kind[id] +'.png)'"></span>
                      <span>{{game.name}}</span>
                  </div>
                  <div class="btn">
                      <a href="javascript:;" @click="$parent.enterGame(game.id)" v-if="game.id">进入游戏</a>
                      <a href="javascript:;" v-else>进入游戏</a>
                      <div class="btn_list" v-if="game.list">
                          <a href="javascript:;" v-for="gamedetail in game.list" @click="$parent.enterGame(gamedetail.id)">{{gamedetail.name}}</a>
                          
                      </div>
                  </div>
              </li>
            </ul><!--end mg视讯-->
            </template>
            
            <!--bb视讯 （版型不同）-->
            <!-- <ul class="page_liveList" id="live_bb" style="display:none;">
              <li>
                  <div class="bg" style="background-image: url(../static/images/live/bb/Game_3008_80.jpg)"></div>
                  <div class="brand">
                      <span class="logo" style="background-image: url(../static/images/brand/bbin.png)"></span>
                      <span>骰宝</span>
                  </div>
                  <div class="btn">
                      <a href="javascript:;">进入游戏</a>
                      <div class="btn_list">
                          <a href="javascript:;">骰宝 A</a>
                          <a href="javascript:;">竞骰骰宝 M1</a>
                          <a href="javascript:;">骰宝 B</a>
                      </div>
                  </div>
              </li>
            </ul> --><!--end bb视讯-->
            
          </div>
        </div>
    </div>
</template>

<script>
var md5 = require('md5');
const queryString = require('query-string');



export default {
    name: 'Live',
    data: function () {
        return {
          kind:{
            '10002':'mg',
            '10011':'bbin',
            '10021':'ag',
            '10032':'pt',

            '10052':'dg',
            '10062':'lebo',
            '10082':'sb',
            '10092':'gd',
            
            '11022':'og',
            '11042':'bg'
          },
            topBar: [],
            lives: [],
            hasLogin: false,
            loginParam: {
                username: '',
                password: '',
                code:''
            },
            gameDock: 0,
            categoryDock: 0,
            id: '',
            currTab: 'system',
            photo_url:'',
            verImgCode:'',
            isLoging: false,
        }
    },
    created: function () {
        var idStr = queryString.parse(location.search).id;
        this.catId = idStr ? parseInt(idStr) : '';
        this.hasLogin = common.ifLanded();
        this.photo_url = common.photo_url;
        this.getGameAll('system', this.catId);
        var _self = this;
        if (this.hasLogin === true) {
            this.memberInfo = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        } else {

        }
    },
    methods: {
        gameCall: function () {
            var _self = $(this) ;
           // var valind = $('.changes_tap').find('li.active').val();
            var valind = $('.changes_tap').find('.active').attr('value'); // val()方法获取不了
            // ag_div_all,mg_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all,bg_div_all
            if(valind =='10002'){ // MG
                $('.change_div_all').addClass('mg_div_all').removeClass('ag_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all,bg_div_all');
            } else if(valind =='10011'){ // BBIN
                $('.change_div_all').addClass('bb_div_all').removeClass('ag_div_all,mg_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all,bg_div_all');

                $('.bb_div_all .btn_enter').on('mouseover',function () {
                    $(this).find('.select_server').show();
                }).on('mouseout',function () {
                    $(this).find('.select_server').hide();
                })

            } else if(valind =='10021'){  // AG
                $('.change_div_all').addClass('ag_div_all').removeClass('mg_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all,bg_div_all');
            } else if(valind =='10032'){  // PT
                $('.change_div_all').addClass('pt_div_all').removeClass('ag_div_all,mg_div_all,bb_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all,bg_div_all');
            } else if(valind =='10052'){  // DG
                $('.change_div_all').addClass('dg_div_all').removeClass('ag_div_all,mg_div_all,bb_div_all,pt_div_all,lebo_div_all,sb_div_all,gd_div_all,og_div_all,bg_div_all');
            } else if(valind =='10062'){  // LEBO
                $('.change_div_all').addClass('lebo_div_all').removeClass('ag_div_all,mg_div_all,bb_div_all,pt_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all,bg_div_all');
            } else if(valind =='10082'){ // SB
                $('.change_div_all').addClass('sb_div_all').removeClass('ag_div_all,mg_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,gd_div_all,og_div_all,bg_div_all');

                $('.sb_div_all .btn_enter').on('mouseover',function () {
                    $(this).find('.select_server').show();
                }).on('mouseout',function () {
                    $(this).find('.select_server').hide();
                })

            } else if(valind =='10092'){ // GD
                $('.change_div_all').addClass('gd_div_all').removeClass('ag_div_all,mg_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,og_div_all,bg_div_all');

                $('.gd_div_all .btn_enter').on('mouseover',function () {
                    $(this).find('.select_server').show();
                }).on('mouseout',function () {
                    $(this).find('.select_server').hide();
                })

            } else if(valind =='11022'){  // OG
                $('.change_div_all').addClass('og_div_all').removeClass('ag_div_all,mg_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,bg_div_all');
            } else if(valind =='11042'){  // BG
                $('.change_div_all').addClass('bg_div_all').removeClass('ag_div_all,mg_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all');
            } else{
                $('.change_div_all').addClass('ag_div_all').removeClass('mg_div_all,bb_div_all,pt_div_all,lebo_div_all,dg_div_all,sb_div_all,gd_div_all,og_div_all');
                // console.log(valind);
            }


        },
        hoverShow: function () {
            var _self = $(this) ;
            _self.find('.select_server').show();
        },

        getGameAll: function (currTab, catId) {
            var _self = this;
            var interfaces = {
                system: 'config/kd/game/load',
                category: 'config/kd/game/list',
                hasLogin: false,
            };
            var params = {
                system: {
                    id: 1000,
                    count: 70,
                    apiId: catId
                },
                category: {
                    id: catId,
                    count: 70,
                }
            }
            _self.lives = [];
            common.ajax(interfaces[currTab],
                params[currTab],
                function (data) {
                    if (currTab === 'system') {
                        var list = data && data.result && data.result.apiList || [];
                        var arr = [];
                        if (catId) {
                            _self.id = catId;
                        } else {
                            _self.id = list[0] && list[0].id || '';
                        }
                        _self.categoryDock = list.length % 3 === 0 ? parseInt(list.length / 3, 10) : parseInt(list.length / 3, 10) + 1;

                        for (var i = 0; i < _self.categoryDock; i++) {
                            var sub_arr = [];
                            var start = i * 3;
                            var length = i == _self.categoryDock - 1 ? list.length - i * 3 : 3;
                            for (var j = 0; j < length; j++) {
                                sub_arr.push(list[start + j]);
                            }
                            arr.push(sub_arr);
                        }
                        _self.topBar = arr;

                        var games = data && data.result && data.result.game && data.result.game.list || [];
                        var arrGame = [];
                        _self.gameDock = games.length % 100 === 0 ? parseInt(games.length / 100, 10) : parseInt(games.length / 100, 10) + 1;
                        for (var i = 0; i < _self.gameDock; i++) {
                            var g_sub_arr = [];
                            var g_start = i * 100;
                            var g_length = i == _self.gameDock - 1 ? games.length - i * 100 : 100;
                            for (j = 0; j < g_length; j++) {
                                g_sub_arr.push(games[g_start + j]);
                            }
                            arrGame.push(g_sub_arr);
                        }
                        _self.lives = arrGame;
                        // console.log(catId)

                        _self.$nextTick(function () {
                            const $tagList = $('.pagemenu_slider'), size = 7;
                            $tagList.show().slick({ // 标题图片
                                arrows: true, 
                                infinite: false,
                                slidesToShow:size,
                                slidesToScroll: 1,
                            });

                            var $slides = $('.slick-track>.slick-slide', $tagList);
                            var index = $slides.filter(':has(a[class=active])').index();
                            if (index > $slides.length - size) { 
                                index = $slides.length - size; 
                            }
                            $tagList.slick('slickGoTo', index);
                        });
                    } else if (currTab === 'category') {
                        var games = data && data.result && data.result.list || [];
                        var arrGame = [];
                        _self.id = catId;
                        _self.gameDock = games.length % 100 === 0 ? parseInt(games.length / 100, 10) : parseInt(games.length / 100, 10) + 1;
                        for (var i = 0; i < _self.gameDock; i++) {
                            var sub_arr = [];
                            var start = i * 100;
                            var length = i == _self.gameDock - 1 ? games.length - i * 100 : 100;
                            for (j = 0; j < length; j++) {
                                sub_arr.push(games[start + j]);
                            }
                            arrGame.push(sub_arr);
                        }
                        _self.lives = arrGame;
                    }
                    setTimeout(_self.gameCall,100);
                });
        },
        changeTab: function (tableName, categoryId) {
            var _self = this;
            _self.table = tableName;
            _self.id = categoryId;
            this.getGameAll(_self.table, _self.id);
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div id="main">
      <div class="pagebox" id="casino">
          <div class="contain_width">
              <h2 class="page_title"></h2>
              <!--品牌选单-->
              <div class="pagemenu_slider tag-list" style="display: none">
                <template v-for="(item,index) in topBar" v-bind:class="{'active': index === 0}" >
                  <div class="item_pagemenu" v-for="subItem in item">
                      <a href="javascript:;" data-list="casino_mg" v-bind:class="{'active': subItem.id == id}" @click="gameList(subItem.id,'-1')">
                          <div class="img"><span :style="{backgroundImage: 'url('+[photo_url+'/pic/'+subItem.img+'/0']+')'}"></span></div>
                          <h3>{{subItem.name}}</h3>
                      </a>
                  </div>
                </template>
              </div><!--end 品牌选单-->
          </div>

          <!--电子游艺搜索bar-->
          <div class="contain_width">
              <div class="search_bar">
                  <div class="search">

                      <template v-for="(item,index) in topBar">
                          <h2 v-for="subItem in item" v-if="subItem.id == id">{{subItem.name}}</h2>
                      </template>
                      <input class="search_input" placeholder="请输入游戏名称" v-model="name" @keyup.enter="searchData(id, name, 'category', typeid); ">
                      <button @click="searchData(id, name, 'category', typeid); " style="cursor: pointer;">搜索</button>
                  </div>
                  <div class="list_mode">
                      <a href="javascript:;" class="btn_block active" id="mode_block"></a>
                      <a href="javascript:;" class="btn_list" id="mode_list"></a>
                  </div>
              </div>
          </div><!--end 电子游艺搜索bar-->

          <div class="contain_width">
              <div class="casino_tag" id="casino_tag">
                <a href="javascript:;" class="active" data-id="-1" @click="changeGame('-1', $event)">全部游戏</a>
                <a href="javascript:;" v-for="list in gamestype" :data-id="list.id" @click="changeGame(list.id, $event)">{{list.name}}</a>
              </div>
          </div>

          <div class="contain_width">
              <!--mg电子-->
              <ul class="page_casinoList" id="casino_mg">
                  <li v-for="(item, index) in games" @click="$parent.enterGame(item.id)">
                      <img v-lazy="photo_url+'/pic/'+[item.img]+'/0'" :alt="item.name">
                      <h3>{{item.name}}</h3>
                      <a href="javascript:;">进入游戏</a>
                  </li>
                  
              </ul><!--end mg电子-->

              <div class="pager">
                  <a class="prev" href="javascript:;" @click="prevPage"><span class="icon"></span></a>
                  
                  <a href="javascript:;" v-for="index in indexs" v-bind:class="{ 'active': Page==index }" @click="pageChange(index)">{{index}}</a>
                  
                  <a class="next" href="javascript:;" @click="nextPage"><span class="icon"></span></a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
var md5 = require('md5');
export default {
    name: 'Casino',
    data: function () {
        return {
            topBar: [],
            games: [],
            gamestype: {},
            typeid: '-1',
            categoryDock: 0,
            table: 'system',
            hasLogin: false,
            loginParam: {
                username: '',
                password: '',
                code:''
            },
            id: common.getQueryString('id') || '',
            name: '',
            Total: 0,
            Page: 1,
            Length: 20,
            all: 0,
            photo_url:'',
            verImgCode:'',
            isLoging: false ,

        }
    },
    computed: {
        indexs: function () {
            var _self = this;
            var left = 1;
            var right = _self.all;
            var arr = [];

            if (_self.all >= 11) {
                if (_self.Page > 5 && _self.Page < _self.all - 4) {
                    left = _self.Page - 5;
                    right = _self.Page + 4;
                } else {
                    if (_self.Page <= 5) {
                        left = 1;
                        right = 10;
                    } else {
                        right = _self.all;
                        left = _self.all - 9;
                    }
                }
            }

            while (left <= right) {
                arr.push(left);
                left++;
            }

            return arr;
        }
    },
    created: function () {
        var _self = this ;
        this.hasLogin = common.ifLanded();
        this.getGameAll('system', this.id,'-1');
        this.photo_url = common.photo_url;
        if(this.id){
            _self.getGameType(this.id) ;
        }else{
            _self.getGameType('10001') ;
        }
        if (this.hasLogin === true) {
            this.memberInfo = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        } else {
            this.getCode();
        }
    },
    mounted:function(){
      $('#mode_block').on('click',function(){
          $(this).addClass('active').siblings().removeClass('active');
          $('.page_casinoList').removeClass('mode_list');
      })
      $('#mode_list').on('click',function(){
          $(this).addClass('active').siblings().removeClass('active');
          $('.page_casinoList').addClass('mode_list');
      });
    },
    methods: {
        // 获取游戏分类
        getGameType : function (gameId) {
            var _self = this;
            common.ajax('game/manage/tags/list', {providerId: gameId}, function (data) {
                var result = data && data.result || {};
                _self.gamestype = result && result.list || {};
                _self.$nextTick(function () {
                    $('.casino_tag a').removeClass('active').eq(0).addClass('active')
                });
            });

        },
        // 显示切换
        changeGameTab :function(){
            $('.ele_game').toggle();
        },
        // 游戏种类选择
        changeGame :function (typeid, e) {
            var _self = this;
            _self.typeid = typeid ;
            $('.search button').trigger('click') ;
            var $src = $(e.currentTarget);
            $src.siblings().removeClass('active');
            $src.addClass('active')
        },
        getCode: function () {
            var _self = this;
            common.ajax('member/code/get', {
                width: 112,
                height: 37
            }, function (data) {
                common.Cookie.set('clientId', data.result && data.result.clientId || '');
                _self.verImgCode = data.result && 'data:image/png;base64,' + data.result.code || '';
            });
            _self.$nextTick(function () {
                $('.icon-refresh').removeAttr("style");
                setTimeout(function () {
                    $('.icon-refresh').css({
                        cursor: 'pointer',
                        transition: 'all 3s',
                        transform: 'rotate(720deg)'
                    });
                }, 300);
            });
        },
        searchData: function (id, name, currTab,typeid) {
            var _self = this;
            _self.name = name;
            _self.Page = 1;

            _self.getGameAll(currTab, id,typeid)
        },
        // 获取分类下的游戏
        gameList: function (id,typeid) {
            var _self = this;
            if (id === _self.id) {
                // 点击当前分类不清求接口
                return;
            }
            _self.name = '';
            _self.id = id;
            _self.topBar = _self.topBar;
            _self.Page = 1;
            _self.getGameAll('category', id,typeid);
            _self.getGameType(id) ;
        },
        // 调用接口
        getGameAll: function (currTab, catId,typeid) {
            var _self = this;
            var interfaces = {
                system: 'config/kd/game/load',
                category: 'config/kd/game/list'
            };
            var params = {
                system: {
                    id: 1001,
                    count: 20,
                    apiId: catId,
                    tagId: typeid
                },
                category: {
                    id: catId,
                    tagId: typeid,
                    page: _self.Page,
                    count: _self.Length,
                    name: _self.name
                }
            };
            common.ajax(interfaces[currTab],params[currTab],function (data) {
                if (currTab === 'system') {
                    var list = data && data.result && data.result.apiList || [];
                    // 进入页面的时候默认选择第一个分类
                    if (catId) {
                        _self.id = catId;
                    } else {
                        _self.id = list[0] && list[0].id || '';
                    }
                    var arr = [];
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
                    // 游戏列表
                    _self.games = data && data.result && data.result.game && data.result.game.list || [];
                    if (data && data.result && data.result.game && data.result.game.total) {
                        _self.Total = data.result.game.total;
                    }
                    _self.all = _self.Total % _self.Length === 0 ? parseInt(_self.Total / _self.Length, 10) : parseInt(_self.Total / _self.Length, 10) + 1;

                    _self.$nextTick(function () {
                        var $tagList = $('.tag-list');
                        const size = 5;
                        $tagList.show() ; // 为了防止刚进来错位问题
                        // debugger;
                        $tagList.slick({ // 标题图片
                            arrows: true,
                            infinite: false,
                            slidesToShow: size,
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
                    _self.games = data && data.result && data.result.list || [];
                    if (data && data.result && data.result.total) {
                        _self.Total = data.result.total;
                    }
                    _self.all = _self.Total % _self.Length === 0 ? parseInt(_self.Total / _self.Length, 10) : parseInt(_self.Total / _self.Length, 10) + 1;
                    if(_self.games.length==0){
                        $(".page").hide();
                    } else {
                        $(".page").show();
                    }
                }
            });
            
        },
        // 切换tab
        changeTab: function (tableName, categoryId,typeid) {
            var _self = this;
            _self.table = tableName;
            _self.id = categoryId;
            _self.typeid = typeid;
            this.getGameAll(_self.table, _self.id,_self.typeid);
        },
        // 前一页
        prevPage: function () {
            var _self = this;
            if (this.Page > 1) {
                this.Page--;
                this.getGameAll('category', _self.id,_self.typeid);
            }
        },
        nextPage: function () {
            var _self = this;
            if (this.Page < this.all) {
                this.Page++;
                this.getGameAll('category', _self.id,_self.typeid);
            }
        },
        // 切换页码
        pageChange: function (index) {
            var _self = this;
            if (index != this.Page) {
                this.Page = index;
                this.getGameAll('category', _self.id,_self.typeid);
            }
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

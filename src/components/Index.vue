<template>
  <div id="main">
    <div class="mainbox">
        <!--广告轮播图-->
        <div class="mainad">
            <div class="ad_slider">
                <div v-for="car in LBT.carouselFigurePics"><a :href="car.link" target="_blank"><img v-bind:src="photo_url + '/pic/' + [car.titlePic]+'/0'"></a></div>
            </div>
        </div>
        <!--end 广告轮播图-->
        <!--登录（首页）-->
        <ul class="login_box" v-if="!hasLogin">
            <p class="title">会员登录<span>LOGIN</span></p>
            <li class="account">
                <input placeholder="请输入账号" type="text" v-model="topHeader.loginParam.username" @keyup.enter="login()">
            </li>
            <li class="password">
                <input placeholder="请输入密码" type="password" v-model="topHeader.loginParam.password" @keyup.enter="login()"/>
            </li>
            <li class="code">
                <input placeholder="输入验证码" type="text" v-model="topHeader.loginParam.code">
                <img v-show="topHeader.verImgCode!==''" v-lazy="topHeader.verImgCode" @click="topHeader.getCode" style="width:80px"/>
                <a href="javascript:;" class="icon_sprite icon_refresh" @click="topHeader.getCode"></a>
            </li>
            <li class="btn">
                <a class="btn_login" href="javascript:;" :class="'btn-login '+(isLoging?'link_disable':'')" @click="topHeader.login">会员登录</a>
                <a class="btn_reg" href="/signUp">注册会员</a>
            </li>
        </ul><!--end 登录（首页）-->
    </div>

    <!--公告-->
    <div class="notice">
        <div class="contain_width">
            <div class="notice_box">
                <span>公告：</span>
                <ul>
                    <li v-for="message in messages">{{message.title}}：{{message.content}}</li>
                </ul>
            </div>
        </div>
    </div><!--end 公告-->

    <div class="index_block index_product">
        <div class="contain_width">
            <div class="product_list">
                <a href="/casino">
                    <div class="title"><img src="static/images/title_pd_casino.png" alt="电子游艺"></div>
                    <div class="img"><img src="static/images/product_1.jpg" alt=""></div>
                    <div class="text">
                        <p class="strong">线上玩乐 欢乐无穷</p>
                        <p>亿万彩池爆发中 欢喜连连</p>
                    </div>
                </a>
                <a href="/live">
                    <div class="title"><img src="static/images/title_pd_live.png" alt="真人视讯"></div>
                    <div class="img"><img src="static/images/product_2.jpg" alt=""></div>
                    <div class="text">
                        <p class="strong">好路投注 豪客首选</p>
                        <p>全球顶尖最佳视讯平台</p>
                    </div>
                </a>
                <a href="/sports">
                    <div class="title"><img src="static/images/title_pd_sport.png" alt="体育赛事"></div>
                    <div class="img"><img src="static/images/product_3.jpg" alt=""></div>
                    <div class="text">
                        <p class="strong">欧洲大联赛 / 职业篮球赛</p>
                        <p>每周精选千场热门赛事</p>
                    </div>
                </a>
                <a href="/lottery">
                    <div class="title"><img src="static/images/title_pd_lottery.png" alt="彩票游戏"></div>
                    <div class="img"><img src="static/images/product_4.jpg" alt=""></div>
                    <div class="text">
                        <p class="strong">六合彩 / 重庆时时彩</p>
                        <p>最公正丰富完善的彩票平台</p>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="index_block index_casino">
        <div class="contain_width">
            <div class="title"><img src="static/images/title_casino.png" alt="电子游戏 欢乐无穷"></div>
            <div class="casino_slider">
                <div class="item_casino">
                    <div class="img"><img src="static/images/casino_1.jpg" alt=""></div>
                    <div class="item item_mg">电子游艺<br />MACHINE SLOTS</div>
                </div>
                <div class="item_casino">
                    <div class="img"><img src="static/images/casino_2.jpg" alt=""></div>
                    <div class="item item_gpi">电子游艺<br />MACHINE SLOTS</div>
                </div>
                <div class="item_casino">
                    <div class="img"><img src="static/images/casino_3.jpg" alt=""></div>
                    <div class="item item_mw">电子游艺<br />MACHINE SLOTS</div>
                </div>
                <div class="item_casino">
                    <div class="img"><img src="static/images/casino_4.jpg" alt=""></div>
                    <div class="item item_gns">电子游艺<br />MACHINE SLOTS</div>
                </div>
                <div class="item_casino">
                    <div class="img"><img src="static/images/casino_1.jpg" alt=""></div>
                    <div class="item item_mg">电子游艺<br />MACHINE SLOTS</div>
                </div>
            </div>
        </div>
    </div>

    <div class="index_block index_games">
        <div class="contain_width">
            <div class="gamead_slider">
                <div><a href="javascript:;"><img src="static/images/banner/gamead_1.jpg" alt=""></a></div>
                <div><a href="javascript:;"><img src="static/images/banner/gamead_1.jpg" alt=""></a></div>
                <div><a href="javascript:;"><img src="static/images/banner/gamead_1.jpg" alt=""></a></div>
            </div>

            <ul class="games">
                <li v-for="(item,index) in computers">
                    <img :src="photo_url+'/pic/'+item.img+'/0'" alt="">
                    <h3>{{item.name}}</h3>
                    <a href="javascript:;" @click="$parent.enterGame(item.id)">进入游戏</a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      // formatTime: common.formatTime,
      hasLogin: false,
      topHeader: null,
      // loginParam: {
      //     username: '',
      //     password: '', 
      //     code:''
      // },
      // memberInfo: {},
      messages: [],
      LBT: {},
      // sports: [],
      liveList: [],
      computers: [],
      computersDock: 0,
      verImgCode: '',
      photo_url:'',
      adv_title:'',
      adv_picurl:'',
      linkUrl:'',
      isLoging: false
    }
  },
  created:function(){
    var _this = this;
    _this.hasLogin = common.ifLanded();
    this.topHeader = this.$parent.$children[0];
  },
  mounted: function () {
      this.photo_url = common.photo_url;
      this.hasLogin = common.ifLanded();

      this.getComputerGame();
      this.getSysMessage();
      this.useAnimation();
      this.getIndexMessage();
      // this.computersDock = common.Cookie.get('computersDock') || 0;
      // this.LBT = common.Cookie.get('LBT') && JSON.parse(common.Cookie.get('LBT')) || {};
      // // this.sports = common.Cookie.get('sports') && JSON.parse(common.Cookie.get('sports')) || [];
      // this.liveList = common.Cookie.get('liveList') && JSON.parse(common.Cookie.get('liveList')) || [];
      // this.computers = common.Cookie.get('computers') && JSON.parse(common.Cookie.get('computers')) || [];
      // if (this.hasLogin === true) {
      //     this.memberInfo = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
      // }
      // // this.getSportsGame();
      // this.getLiveGame();
      // this.getComputerGame();
      // var _self = this;
      // if (!this.hasLogin) {
      //     this.getCode();
      // } else {
      //     var _self = this;
      //     var already_refresh = common.Cookie.get("already_refresh");
      //     common.pollingTheMail();

      //     if(!already_refresh){
      //         common.Cookie.set("already_refresh","1");
      //         $(".lone").click();
      //         $(".sone").removeClass("icon-refreshhover");
      //         common.ajax('member/refresh', {}, function (data) {
      //             $(".sone").addClass("icon-refreshmyword");
      //             setTimeout(function(){
      //                 $(".sone").removeClass("icon-refreshmyword");
      //             },600);
      //             _self.memberInfo = $.extend({}, data && data.result || {});
      //             _self.memberInfo.balance = data&&data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
      //             $("#mynew_balance").html(_self.memberInfo.balance);
      //             common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
      //         });
      //     }
      // }
      // // 首頁彈窗
      // if(!this.hasLogin){
      //     var popup = sessionStorage.getItem('closePopupUnlogin');
      //     if (!popup){
      //         this.getPopUPInfo();
      //     }
      // }else{
      //     var popup = sessionStorage.getItem('closePopupLogin');
      //     if (!popup){
      //         this.getPopUPInfo();
      //     }
      // }
      // // 监测网页加载时间
      // window.onload = function () {
      //     var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
      //     console.log('Page load time is '+ loadTime);
      // }

  },
  methods: {
    locationGo:function(url){
      window.location = url;
    },
    useAnimation:function(){
      $('.casino_slider').slick({
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
      });
      $('.gamead_slider').slick({
          arrows: false,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
      });
    },
    // 电子游戏
    getComputerGame: function () {
        var _self = this;
        common.ajax('config/kd/hot/game/list',
            {
                id: 1001,
                count: 8,
            }, function (data) {
                var list = data && data.result && data.result.list || [];
                _self.computers = list;
            }
        )
    },
    getSysMessage: function () {
        var _self = this;
        common.ajax('cms/client/index', {}, function (data) {
            var ad = data && data.result && data.result.ad || {};
            _self.LBT = ad && ad.LBT || {};
            common.Cookie.set('LBT', JSON.stringify(_self.LBT));
            // 滚动
            _self.$nextTick(function () {
              $('.ad_slider').slick({
                  arrows: false,
                  dots: true,
                  infinite: true,
                  autoplay: true,
                  autoplaySpeed: 3000,
              });
                // $(window).resize(function () {
                //     if (($(window).width() > 1680)) {
                //         $(".picList li").css("hight", "700px");
                //     } else {
                //         $(".picList li").css("hight", "505px");
                //     }
                // });

            });
        })
    },
    getIndexMessage: function () {   // 首页公告
        var _self = this;
        common.ajax('cms/client/bulletin/list', {}, function (data) {
            var ms = data && data.result || {};
            _self.messages = ms || [];
            // 滚动
            _self.$nextTick(function () {
              if($('.notice_box li').length > 1){
                  function run() {
                      $('.notice_box ul').animate({top:-40},500,function(){
                          $(this).css({top:0}).children('li').eq(0).remove().appendTo('.notice_box ul');
                      })
                  }

                  var TT = setInterval(run,3000)

                  $(".notice_box").on('mouseenter',function(e){
                      clearInterval(TT);
                      $(this).removeClass('hidden');
                  }).on('mouseleave',function(e){
                      var position = Math.round($(this).scrollTop() / 40);
                      $(this).scrollTop(0).addClass('hidden');
                      $('.notice_box ul').children('li').slice( 0, position ).appendTo('.notice_box ul');
                      TT = setInterval(run,3000);
                  })

                  $('.notice_box').scrollTop(0).addClass('hidden');
              }
            });
        })
    },
    getPopUPInfo:function(){
        var _self = this;
        var varg = null;
        common.ajax('cms/popup/getPopUpInfo', {}, function(data) {
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
            }
        },"post");

        $('.popupad_close').on('click', function(){
           // console.log(this.hasLogin);
            if (!_self.hasLogin){
                sessionStorage.setItem('closePopupUnlogin', 'popup');
            }else{
                sessionStorage.setItem('closePopupLogin', 'popup');
            }
            $(this).parents('.popupad').hide();
        });
        $(".popupad_body").find("img").on("click",function(){
            var srcstr = $(this).attr("data-src");
            if(!srcstr){
            } else {
                window.open(srcstr,'_blank');
            }
        });

    },
    blurInput:function(){
        $(".authCode").css("display","inline-block");
    },
    // get code
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
            }, 200);
        });
    },

    
    

    // 真人视讯
    getLiveGame: function () {
        var _self = this;
        common.ajax('config/kd/recommend/game/list',
            {
                id: 1000,
                count: 3,
            }, function (data) {
                _self.liveList = data && data.result && data.result.list || [];
                common.Cookie.set('liveList', JSON.stringify(_self.liveList));
            });
    },
    
  }
}
</script>
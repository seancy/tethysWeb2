<template>
    <div id="header" v-if="!/HH/.test(pagename)">
      <div class="topbar">
          <div class="topleft">
              <span class="icon_clock"></span>
              <span><!-- 07 September. 23:45 -->{{times}}<small>美东时间</small></span>
          </div>
          <div class="topright">
              <!-- <span class="tel"><span class="icon_sprite icon_tel"></span>+63 945-456-456</span>
              <a class="signup" href="sign-up.html"><span class="icon_sprite icon_account"></span>免费开户</a>
              <a class="help" href="help.html"><span class="icon_sprite icon_info"></span>新手指南</a> 此处在后台配置 Webb提 -->
              <span class="info">
                  <a class="link blue-green" v-for="template in customtemplate" :href="template.pcUrl" :class="customclass[template.id]" >{{template.title}}</a>

                  <!-- <a class="link blue" href="javascript:;">MG老虎机</a>
                  <a class="link green" href="javascript:;">PT角子机</a>
                  <a class="link yellow-green" href="javascript:;">MW千炮捕鱼</a>
                  <a class="link yellow" href="javascript:;">时时彩</a>
                  <a class="link red" href="javascript:;">连环夺宝</a>
                  <span>BC彩票天天返水1.2%</span>
                  <span>MG返水1.2%</span> -->
              </span>
          </div>
      </div>
      <div class="nav">
          <div class="logo"><h1><img src="static/images/logo.png" alt="金沙赌场"></h1></div>
          <div class="menu">
              <ul class="mainmenu">
                <!-- setActive  class="active" -->
                  <li id="nav_" :class="{active: urlPath === ''}">
                      <a href="/"><h2>首页</h2><small>HOME</small></a>
                  </li>
                  <!-- class="hot" -->
                  <li v-for="nav in navBar" v-if="nav.id >= 1000" :id="'nav_' + [nav.enName.toLowerCase()]" :class="{active: urlPath === nav.enName.toLowerCase()}">
                      <a  class="link" @click="judge_towhere([nav.enName.toLowerCase()])"><h2>{{nav.name}}</h2><small>{{nav.enName}}</small></a>
                      <ul class="submenu" v-if="nav.isDrop === 1 && nav.list && nav.list.length > 0">
                          <li v-for="sub in nav.list">
                              <a @click="indexToGmae([nav.enName.toLowerCase()],sub.id)">
                                  <div class="img">
                                      <span :style="{backgroundImage: 'url('+[photo_url+'/pic/'+sub.img+'/0']+')'}"></span>
                                      <span :style="{backgroundImage: 'url('+[photo_url+'/pic/'+sub.img+'/0']+')'}"></span>
                                  </div>
                                  <h3>{{sub.name}}</h3>
                              </a>

                          </li>
                      </ul>

                  </li>
                  <li :class="{active: urlPath === 'promo'}"  id="nav_promo">
                      <a href="/promo"><h2>优惠活动</h2><small>PROMO</small></a>
                  </li>
                  <li @click="onlineServices">
                      <a href="javascript:;"><h2>在线客服</h2><small>SERVICE</small></a>
                  </li>
              </ul>
          </div>
      </div>
      <!--登录后资讯（登录后显示）-->
      <div class="account_bar login" v-if="hasLogin===true">
          <span class="account">
              <span>{{userName}}</span>
              <a href="/personalMsg" class="icon_sprite icon_mail icon-email"><em class="red-dot"></em></a>
          </span>
          <span>¥ <span id="mynew_balance">{{memberInfo.balance | balanceNo}}</span>
              <a href="javascript:;" class="icon_sprite icon_refresh" @click="getAccountInfo()"></a>
          </span>
          <span><a href="/personalInfo">个人中心</a></span>
          <span><a href="javascript:;" v-on:click.prevent="deposit_judge()" click="de">存款</a></span>
          <span><a href="javascript:;" v-on:click.prevent="draw_judge()">取款</a></span>
          <span><a href="/personalBettin">投注纪录</a></span>
          <span><a href="/personalFunds">资金纪录</a></span>
          <span><a href="javascript:;" class="logout" @click.prevent="common.logOut">【退出】</a></span>
      </div><!--end 登录后资讯（登录后显示）-->

      <!--登录列-->
      <div class="account_bar" v-if="hasLogin===false && this.$route.name != 'Index'">
          <span class="account">
              <input placeholder="请输入会员账号" type="text" v-model="loginParam.username" @keyup.enter="login()">
          </span>
          <span class="password">
              <input placeholder="请输入密码" type="password" v-model="loginParam.password" @keyup.enter="login()">
          </span>
          <span class="code">
              <!-- <img v-show="verImgCode!==''" v-lazy="verImgCode" @click="getCode" style="cursor: pointer;"/>
              <a class="icon-refresh" @click="getCode" style="cursor: pointer;"></a>
              <em class="line"></em> -->
              <input placeholder="验证码" type="text" v-model="loginParam.code" @keyup.enter="login()">
              <img v-show="verImgCode!==''" v-lazy="verImgCode" @click="getCode" style="cursor: pointer;">
              <a href="javascript:;" class="icon_sprite icon_refresh" @click="getCode"></a>
          </span>
          <span class="btn">
              <a class="btn_login" href="javascript:;" @click="login" :class="'btn-login '+(isLoging?'link_disable':'')">会员登录</a>
              <a class="btn_reg" href="/signUp">注册会员</a>
          </span>
      </div><!--end 登录列-->
  </div>
</template>

<script>
var md5 = require('md5');
export default {
  name: 'topHeader',
  data: function () {
    return {
      common:common,
      pagename: '',
      // urlPath: '',
      userName: '',
      siteName: '',
      hasLogin: false,
      footer: [],
      navBar: [],
      customtemplate:[],
      customclass:{'1':'blue','2':'green','3':'yellow','4':'red','5':'blue-green','6':'blue','7':'green','8':'yellow','9':'red','10':'blue-green'} ,
      memberInfo: {},
      times: '',
      photo_url: '',
      leftURL: [],
      rightURL: [],
      newBalance: '',
      leftLink:'',
      rightLink:'',
      userId:'',
      loginParam: {
        username: '',
        password: '',
        code: ''
      },
      verImgCode:'',
      isLoging: false

      // moduleName:''
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    urlPath:function(){
      return this.$route.path.replace('/', '');
    }
  },
  created:function() {

    var _this = this;
    // _this.urlPath = _this.$route.path.replace('/', '');
    _this.userName = common.Cookie.get('userName') || '';
    _this.hasLogin = common.ifLanded();
    _this.pagename = _this.$route.name || '';
    _this.photo_url = common.photo_url;
    // 先取cookie里的值初始化页面，防止空白
    _this.siteName = common.Cookie.get('siteName') || [];
    _this.navBar = common.Cookie.get('navBar') && JSON.parse(common.Cookie.get('navBar')) || [];
    _this.footer = common.Cookie.get('footer') && JSON.parse(common.Cookie.get('footer')) || [];
    this.updateTime();
    this.getNavData();
    var that = this;
    if (this.hasLogin === true) {
        this.memberInfo = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        //如下ajax请求是在任何链接跳转时更新余额
        common.ajax('member/balance/get', {}, function(data) {
            that.memberInfo.balance = data && data.result && data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
            common.Cookie.set('memberInfo', JSON.stringify(that.memberInfo));
            $("#mynew_balance").html(data && data.result && data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,'));
            $(".balance").html(data && data.result && data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,'));
            $(".wallet_balance").html(data && data.result && data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,'));
        });
        this.userId = "";
        this.getUserInfo();
    }
    else {
   /*     $(document).on("keydown",function(e){
            if(e.keyCode==13) {
                that.login();
            }
        });*/
        that.getCode();
    }
    this.getNavData();
    this.customTemplate();

  },
  filters: {
      balanceNo: function(value) {
          return common.FormatNumber.get(value);
      },
      number_message: function(vaule) {
          return (vaule) ? vaule : 0;
      }
  },
  mounted: function() {
    var _self = this;


    _self.$nextTick(function() {
      $("#nav_casino").addClass('hot');
      $("#nav_promo").addClass('hot');
    })
  },
  methods: {
    customTemplate: function () {
        var _self = this;
        common.ajax('cms/client/customtemplate/list', {}, function (data) {
            var tem = data && data.result || {};

            for(var i=0;i<tem.length;i++){ // 为了闪动效果
                tem[i].id = (i+1) ;
            }
            _self.customtemplate = tem || [];
            // 滚动
            // _self.$nextTick(function () {
            //     $(".sys-notice").slide({
            //         mainCell: ".bd ul",
            //         autoPage: true,
            //         effect: "leftMarquee",
            //         autoPlay: true,
            //         vis: 1, interTime: 50
            //     });
            // });
        })
    },
    getNavData: function() {
        var _self = this;
        common.ajax('cms/client/tab', {}, function(data) {
            _self.siteName = data && data.result.siteName;
            common.Cookie.set('siteName', JSON.stringify(_self.siteName));
            _self.navBar = data && data.result && data.result.tabList || [];
            // common.Cookie.set('navBar', JSON.stringify(_self.navBar));
            _self.serviceUrl = data && data.result && data.result.tabList && data.result.tabList[6] && data.result.tabList[6].serviceUrl;
            common.Cookie.set('serviceUrl', typeof(_self.serviceUrl) == "undefined" ? "" : _self.serviceUrl);
            _self.siteLogo = data && data.result && data.result.siteLogo;
            _self.siteName = data && data.result && data.result.siteName;
            document.title = _self.siteName||'';
            _self.logoPhoto = common.photo_url + "/pic/" + _self.siteLogo + "/0"; //0原图大小 other 就是百分比（10%）
            // $(".logo").css("backgroundImage", "url(" + _self.logoPhoto + ")");
            _self.$nextTick(function () {
                // 加载完后再调用，否则会有问题
                // _self.indexDrog() ;
              $("#nav_casino").addClass('hot');
//              $("#nav_promo").addClass('hot');

        })

        });

    },
    updateTime: function() {
        var _self = this;
        var timeDate = function() {
            var start_date = new Date();
            var len = start_date.getTime();
            var offset = start_date.getTimezoneOffset() * 60 * 1000;
            var utcTime = len + offset;
            var start = new Date(start_date.getTime());
            start.setMonth(0);
            start.setDate(1);
            start.setHours(0);
            start.setMinutes(0);
            start.setSeconds(0);
            var middle = new Date(start.getTime());
            middle.setMonth(6);
            // 夏令时
            if ((middle.getTimezoneOffset() - start.getTimezoneOffset()) == 0) {
                var date = new Date(utcTime + 3600000 * -4);
            } else {
                var date = new Date(utcTime + 3600000 * -5);
            }
            var years = date.getFullYear();
            var hour = date.getHours();
            if (hour < 10) {
                hour = '0' + hour.toString();
            }
            var minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes.toString();
            }
            var seconds = date.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds.toString();
            }
            var day = date.getDate();
            if (day < 10) {
                day = '0' + day.toString();
            }
            var weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var month_str = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var workDay = weeks[date.getDay()];
            var month = date.getMonth() + 1;
            var htm = years + "/" + month + "/" + day + " " + hour + ":" + minutes + ":" + seconds;
            // var htm = " " + workDay + ', ' + day + ' ' + (month_str[month]) + " " + years + " " + hour + ":" + minutes + ":" + seconds + " GMT";
            _self.times = htm;
            //$("#server-time").html(htm)
            var t = setTimeout(timeDate, 1000);
        };
        timeDate();
    },
    login: function () {
      var _self = this
      var username = _self.loginParam.username
      var password = _self.loginParam.password
      var enterCode = _self.loginParam.code
      if (!common.positiveEngNum(username) || username.length<4 || username.length>15) {
        common.toast({content: "账号应在4-15个字符之间！"});
        return;
      }
      if (!common.positiveEngNum(password) || password.length<6 || password.length>20) {
        common.toast({content: "密码应在6-20个字符之间！"});
        return;
      }
      $(".btn-login").attr("disabled","true");
      setTimeout("$('.btn-login').removeAttr('disabled')",2000);
      _self.isLoging = true;
      common.ajax('member/login', {
        username: username,
        password: md5(password),
        code: enterCode
      }, (data) => {
        // _self.isLoging = false;
        common.Cookie.set('userName', data.result && data.result.username || '');
        common.Cookie.set('token', data.result && data.result.token || '');
        common.Cookie.set('memberInfo', JSON.stringify(data.result));
        common.toast({title: '提示信息', content: '登录成功！', time: 2});
        $("#free_open_account").hide();
        setTimeout(function () {
          location.href='/';
        }, 2000);
      }, 'post', function () {
        setTimeout(function () {
          _self.isLoging = false;
        }, 800);
        _self.getCode();
      }, function () {
        setTimeout(function () {
          _self.isLoging = false;
        }, 800);
        _self.getCode();
      });
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
          $('.icon_refresh_money,.icon_refresh').addClass('rotate');
          setTimeout(function () {
            $('.icon_refresh_money,.icon_refresh').removeClass('rotate');
          }, 2000);
//            $('.icon-refresh')
//            .removeAttr("style");
//
//            setTimeout(function () {
//                $('.icon-refresh').css({
//                    cursor: 'pointer',
//                    transition: 'all 3s',
//                    transform: 'rotate(720deg)'
//                });
//            }, 300);
        });
    },
    judge_towhere:function(ab){
        var _self = this;
        if(ab=="live"){
            location.href = "live";
        } else if(ab=="casino"){
            location.href = "casino";
        } else if(ab=="sports"){
            location.href = "sports";
            // if(_self.hasLogin){ //已经登录
            //    _self.loadGameList(1002);
            // //    location.href = "sports";
            // } else {
            //     common.toast({content: '请先登录！', time: 2});
            // }
        } else if(ab=="lottery"){
            location.href = "lottery";
            // if(_self.hasLogin){ //已经登录
            //    _self.loadGameList(1003);
            //  //   location.href = "lottery";
            // } else {
            //     common.toast({content: '请先登录！', time: 2});
            // }
        }
    },
    indexToGmae:function(ab,id){
        var _self = this;
        if(ab=="live"){
            location.href = "live?id="+id;
        } else if(ab=="casino"){
            location.href = "casino?id="+id;
        } else if(ab=="sports"){
            location.href = "sports";
            // location.href = "casino?id="+id;
        }else if(ab=="lottery"){
            location.href = "lottery";
        }
    },
    deposit_judge:function(){
      common.ajax('tethys-user/user/menu/level/auth', {}, function(data) {
          if (data && data.apistatus == 1) {
              if (data && data.result == 0) { // 1锁定 0 非锁定
                  location.href = "personalDeposit";
              } else {
                  common.toast({
                      content: '当前无法操作，请联系客服',
                      time: 3
                  });
              }
          }
      }, 'get', function(data){
          if(data.apistatus == '0' && data.errorCode == '1000020'){

              common.toast({content: '会员未登录！', time: 1});

              setTimeout( 'common.logOut()',1000);
          }
          if(data.errorCode == '1000003'){
              common.toast({content: '该会员已被停用！', time: 1});
              setTimeout( 'common.logOut()',1000);
          }
      });
    },
    draw_judge: function() { //取款
      common.ajax('tethys-user/user/menu/level/auth', {}, function(data) {
          if (data && data.apistatus == 1) {
              if (data && data.result == 0) { // 1锁定 0 非锁定
                  location.href = "personalCallin";
              } else {
                  common.toast({
                      content: '当前无法操作，请联系客服',
                      time: 3
                  });
              }
          }
      }, 'get', function(data){
          if(data.apistatus == '0' && data.errorCode == '1000020'){

              common.toast({content: '会员未登录！', time: 1});

              setTimeout( 'common.logOut()',1000);
          }
          if(data.errorCode == '1000003'){
              common.toast({content: '该会员已被停用！', time: 1});
              setTimeout( 'common.logOut()',1000);
          }
      });
    },
    getAccountInfo: function() {
        var _self = this;
        $(".lone").click();
        $(".sone").removeClass("icon-refreshhover");
        $(".sone").addClass("icon-refreshmyword");
        $('.icon_sprite.icon_refresh').addClass('rotate');
      setTimeout(function () {
        $('.icon_sprite.icon_refresh').removeClass('rotate');
      }, 500);
        common.ajax('member/refresh', {}, function(data) {
            setTimeout(function() {
                $(".sone").removeClass("icon-refreshmyword");
            }, 600);
            _self.memberInfo = $.extend({}, data && data.result || {});
            _self.memberInfo.balance = data && data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
            $("#mynew_balance").html(_self.memberInfo.balance);
            $(".account-num").html(_self.memberInfo.balance);
            $(".wallet_balance").html(_self.memberInfo.balance);
            common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
        });
    },
    getUserInfo: function () {
        var _self = this;
        common.ajax('tethys-user/user/menu/userInfo',{}, function (data) {
            _self.userId = data.result || '';
        },'get', function(data){
            if(data.apistatus == '0' && data.errorCode == '1000020'){

                common.toast({content: '会员未登录！', time: 1});

                setTimeout( 'common.logOut()',1000);
            }
            if(data.errorCode == '1000003'){
                common.toast({content: '该会员已被停用！', time: 1});
                setTimeout( 'common.logOut()',1000);
            }
        });
    },
    onlineServices: function() {
        var cookieserviceUrl = common.Cookie.get("serviceUrl");
        if (cookieserviceUrl.replace(/(^s*)|(s*$)/g, "").length !== 0) {
            window.open(cookieserviceUrl, "_bank");
        }
    }
  }
  
}
</script>
<style>
  a{
    cursor: pointer!important;
  }
  .red-dot{
    display: inline-block;
    vertical-align: top;
    margin-top: 0px;
    margin-left: 12px;
    background-color: #bb2370;
    width: 11px;
    height: 11px;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    border-radius: 6px;
  }

</style>

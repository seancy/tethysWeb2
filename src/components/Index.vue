<template>
  <div id="main">
    <div class="mainbox">
        <!--广告轮播图-->
        <div class="mainad">
            <div class="ad_slider">
                <div><a href="javascript:;"><img src="static/images/banner/mainad_1.jpg"></a></div>
                <div><a href="javascript:;"><img src="static/images/banner/mainad_2.jpg"></a></div>
            </div>
        </div><!--end 广告轮播图-->
        <!--登录（首页）-->
        <ul class="login_box" v-if="!hasLogin">
            <p class="title">会员登录<span>LOGIN</span></p>
            <li class="account">
                <input placeholder="请输入账号" type="text" v-model="loginParam.username" @keyup.enter="logIn()">
            </li>
            <li class="password">
                <input placeholder="请输入密码" type="password" v-model="loginParam.password" @keyup.enter="logIn()"/>
            </li>
            <li class="code">
                <input placeholder="输入验证码" type="text" v-model="loginParam.code">
                <img src="static/images/verification-code.jpg"  alt=""/><a class="icon_refresh" href="javascript:;"></a>
                <a href="javascript:;" class="icon_sprite icon_refresh"></a>
            </li>
            <li class="btn">
                <a class="btn_login" href="javascript:;" @click="logIn" :class="'btn-login '+(isLoging?'link_disable':'')">会员登录</a>
                <a class="btn_reg" href="javascript:;">注册会员</a>
            </li>
        </ul><!--end 登录（首页）-->
    </div>
    <!--公告-->
    <div class="notice">
        <div class="contain_width">
            <div class="notice_box">
                <span>公告：</span>
                <ul>
                    <li>系统维护：2017-05-25 10:02:57</li>
                    <li>0802test：优惠大放送，即享优惠，优惠大放送，即享优惠。</li>
                    <li>公告0802：上限优惠，注册即享，上限优惠</li>
                </ul>
            </div>
        </div>
    </div><!--end 公告-->

    <div class="index_block index_product">
        <div class="contain_width">
            <div class="product_list">
                <a href="javascript:;">
                    <div class="title"><img src="static/images/title_pd_casino.png" alt="电子游艺"></div>
                    <div class="img"><img src="static/images/product_1.jpg" alt=""></div>
                    <div class="text">
                        <p class="strong">线上玩乐 欢乐无穷</p>
                        <p>亿万彩池爆发中 欢喜连连</p>
                    </div>
                </a>
                <a href="javascript:;">
                    <div class="title"><img src="static/images/title_pd_live.png" alt="真人视讯"></div>
                    <div class="img"><img src="static/images/product_2.jpg" alt=""></div>
                    <div class="text">
                        <p class="strong">好路投注 豪客首选</p>
                        <p>全球顶尖最佳视讯平台</p>
                    </div>
                </a>
                <a href="javascript:;">
                    <div class="title"><img src="static/images/title_pd_sport.png" alt="体育赛事"></div>
                    <div class="img"><img src="static/images/product_3.jpg" alt=""></div>
                    <div class="text">
                        <p class="strong">欧洲大联赛 / 职业篮球赛</p>
                        <p>每周精选千场热门赛事</p>
                    </div>
                </a>
                <a href="javascript:;">
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
                <li>
                    <img src="static/images/game_1.png" alt="">
                    <h3>黄金工厂</h3>
                    <a href="javascript:;">进入游戏</a>
                </li>
                <li>
                    <img src="static/images/game_2.png" alt="">
                    <h3>伟大的狮鸠兽</h3>
                    <a href="javascript:;">进入游戏</a>
                </li>
                <li>
                    <img src="static/images/game_3.png" alt="">
                    <h3>刮刮乐玩家</h3>
                    <a href="javascript:;">进入游戏</a>
                </li>
                <li>
                    <img src="static/images/game_4.png" alt="">
                    <h3>富翁联盟</h3>
                    <a href="javascript:;">进入游戏</a>
                </li>
                <li>
                    <img src="static/images/game_5.png" alt="">
                    <h3>花旗骰</h3>
                    <a href="javascript:;">进入游戏</a>
                </li>
                <li>
                    <img src="static/images/game_6.png" alt="">
                    <h3>侠盗猎车手</h3>
                    <a href="javascript:;">进入游戏</a>
                </li>
                <li>
                    <img src="static/images/game_7.png" alt="">
                    <h3>美式轮盘</h3>
                    <a href="javascript:;">进入游戏</a>
                </li>
                <li>
                    <img src="static/images/game_8.png" alt="">
                    <h3>黄金地鼠</h3>
                    <a href="javascript:;">进入游戏</a>
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
      pagename: '',
      urlPath: '',
      userName: '',
      siteName: '',
      hasLogin: false,
      footer: [],
      navBar: [],
      customtemplate:[],
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
        username: 'test1',
        password: '123456',
        code: '1'
      },
      verImgCode:'',
      isLoging: false
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  created:function(){
    var _this = this;
    _this.hasLogin = common.ifLanded();
  },
  methods: {
    logIn: function () {
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
          window.location.reload();
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="main">
    <div class="personal_box" id="personal-modify-password">
      <div class="contain_width">
        <h2 class="personal_title"></h2>
      </div>
      <div class="contain_width">
        <!--左侧选单-->
        <div class="left_menu">
          <div class="user_info">
            <div class="img"><img src="../../../static/images/pic_user.png"></div>
            <p class="name">{{info.username}}</p>
            <p class="balance">{{info.balance | balanceNo}}</p>
            <p class="refresh">Your Balance<span class="icon_sprite icon_refresh_money" title="刷新" @click="getPersonalInfo"></span></p>
          </div>
          <ul class="psn_menu">
            <li><a href="personalInfo" class="active"><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
            <li><a v-on:click="deposit_judge();" href="javascript:void(0);"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a v-on:click="draw_judge()" href="javascript:void(0);"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personalBettin"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personalFunds"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <div class="psn_wrap">
            <!--修改密码-->
            <div class="psn_content">
              <dl class="psn_info">
                <dt>
                  <h3 class="btn_gdGold" @click="changeTab('account')" id="login_password">修改登录密码</h3>
                  <h3  id="play_password"   href="javascript:;" @click="changeTab('play')">修改支付密码</h3>
                </dt>
                <div>
                  <dd >
                    <ul class="style_item">
                      <li>
                        <span class="form"><input type="password" v-model="formParam.oldPass" id="card_name" class="formInput" placeholder="请输入原登录密码"></span>
                      </li>
                      <li>
                        <span class="form"><input type="password" v-model="formParam.newPass" id="card_name1" class="formInput" placeholder="新登录密码"></span>
                      </li>
                      <li>
                        <span class="form"><input type="password" v-model="formParam.newPass2" id="card_name2" class="formInput" placeholder="重复登录密码"></span>
                      </li>
                    </ul>

                  </dd>
                  <div class="form_submit">
                    <a class="formBtn"  @click="editData('account')" href="javascript:;">提交申请</a>
                  </div>
                </div>
                <div class="showDetail">
                  <dd >
                    <ul class="style_item">
                      <li>
                        <span class="form"><input type="password" v-model="formParam.oldPass" id="card_name3" class="formInput" placeholder="请输入原支付密码"></span>
                      </li>
                      <li>
                        <span class="form"><input type="password" v-model="formParam.newPass" id="card_name4" class="formInput" placeholder="新支付密码"></span>
                      </li>
                      <li>
                        <span class="form"><input type="password" v-model="formParam.newPass2" id="card_name5" class="formInput" placeholder="重复支付密码"></span>
                      </li>
                    </ul>
                  </dd>
                  <div class="form_submit">
                    <a class="formBtn"  @click="editData('play')" href="javascript:;">提交申请</a>
                  </div>
                </div>

              </dl>

            </div><!--end 修改密码-->

          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>
<style>
  dt h3{cursor: pointer;}
  .showDetail{
    display: none;
  }
</style>
<script>
  $(function(){
    $("dt h3").click(function(){
      $(this).addClass('btn_gdGold').siblings('h3').removeClass('btn_gdGold');
      $("#card_name").val("");
      $("#card_name1").val("");
      $("#card_name2").val("");
      $("#card_name3").val("");
      $("#card_name4").val("");
      $("#card_name5").val("");
      $('dl>div:eq('+$(this).index()+')').show().siblings('div').hide();
    })
    if(getParam()=="account"){
      $("#login_password").addClass('btn_gdGold').click();
      $("#play_password").removeClass('btn_gdGold');
    }
    if(getParam()=="play"){
      $("#play_password").addClass('btn_gdGold').click();
      $("#login_password").removeClass('btn_gdGold');
    }
  })
  var md5 = require('../../../static/vendor/md5.js');
  export default {
    name: 'ModifyPassword',
    data: function () {
      return {
        editType: 'account',
        info: {
          username: '',
          balance: 0,
        },
        formParam: {
          oldPass: '',
          newPass: '',
          newPass2: ''
        },
        memberInfo:{}
      }
    },
    filters: {
      balanceNo: function (value) {
        return common.FormatNumber.get(value);
      }
    },
    created: function () {
      var _self = this;
      document.title = '个人中心-修改密码';
      _self.editType = common.getQueryString('type');
      if (common.ifLanded()) {
        _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        _self.info.username = common.Cookie.get('userName') || '';
        //_self.getPersonalInfo();
      } else {
        _self.$nextTick(function () {
          setTimeout(function () {
            common.$message({
              title: '登陆提示',
              content: '请先登录！！',
              hc: true,
              okcb: function () {
                _self.$router.push({path: '/'});
              }
            });
          }, 500);
        });
      }

    },
    methods: {
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
              // setTimeout(function() {
              //     location.href = "/";
              // }, 3000);
            }
          }
        },'get',function(data){
          if(data.apistatus == '0' && data.errorCode == '1000020'){
            common.toast({content: '会员未登录', time: 1});
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
              // setTimeout(function() {
              //     location.href = "/";
              // }, 3000);
            }
          }
        },'get',function(data){
          if(data.apistatus == '0' && data.errorCode == '1000020'){
            common.toast({content: '会员未登录', time: 1});
            setTimeout( 'common.logOut()',1000);
          }
          if(data.errorCode == '1000003'){
            common.toast({content: '该会员已被停用！', time: 1});
            setTimeout( 'common.logOut()',1000);
          }
        });
      },
      // 个人信息
      getPersonalInfo: function () {
        var _self = this;
        $('.icon_refresh_money').addClass('rotate');
        setTimeout(function () {
          $('.icon_refresh_money').removeClass('rotate');
        }, 500);
        common.ajax('member/refresh',{}, function (data) {
          setTimeout(function(){
            $(".lone").removeClass("icon-refreshmyword_info");
          },600);
          _self.memberInfo = $.extend({}, data && data.result || {});
          _self.memberInfo.balance = data&&data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
          $("#mynew_balance").html(_self.memberInfo.balance);
          $(".account-num").html(_self.memberInfo.balance);
          //$('.red-dot').text('').text(data.result.message);
          common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
        });
      },
      editData: function (type) {
        var _self = this;
        if(type=="account"){
          var oldPass = _self.formParam.oldPass;
          var newPass = _self.formParam.newPass;
          var newPass2 = _self.formParam.newPass2;
          if (!oldPass) {
            common.toast({content: "旧密码必须输入"});
            return;
          }
          if (!/^\w{6,20}$/g.test(newPass)) {
            common.toast({content: "登录密码必须为6~20位字符！"});
            return;
          }
          if (newPass !== newPass2) {
            common.toast({content: "两次输入的密码不一致！"});
            return;
          }
          if(oldPass==newPass){
            common.toast({content: "新登录密码不能与原密码相同! "});
            return;
          }
        }
        if(type=="play"){
          var oldPass = _self.formParam.oldPass;
          var newPass = _self.formParam.newPass;
          var newPass2 = _self.formParam.newPass2;
          if (!oldPass) {
            common.toast({content: "旧密码必须输入"});
            return;
          }
          if (!/^\d{4}$/g.test(newPass)) {
            common.toast({content: "新支付密码必须为4个数字！"});
            return;
          }
          if (newPass !== newPass2) {
            common.toast({content: "两次输入的密码不一致！"});
            return;
          }
          if(oldPass==newPass){
            common.toast({content: "新支付密码不能与原密码相同! "});
            return;
          }
        }
        var interfaces = {
          account: 'member/password/reset',
          play: 'tethys-user/user/account/userPassUpdate'
        };
        var params = {
          account: {
            oldPassword: md5(oldPass),
            newPassword: md5(newPass)
          }, play: {
            oldPass: md5(oldPass),
            tradePass: md5(newPass)
          }
        };
        common.ajax(interfaces[type], params[type], function (data) {
          if (type === 'account') {
            if (data && data.apistatus && data.apistatus == 1) {
              common.toast({content: "修改登陆密码成功！"});
              //window.location.reload();
            }
          } else if (type === 'play') {
            if (data && data.apistatus && data.apistatus == 1) {
              common.toast({content: "修改支付密码成功！"});
              //window.location.reload();
            }
          }
          _self.formParam.oldPass = '';
          _self.formParam.newPass = '';
          _self.formParam.newPass2 = '';
        }, 'post')
      },
      changeTab: function (tab) {

        var _self = this;
        _self.editType = tab;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

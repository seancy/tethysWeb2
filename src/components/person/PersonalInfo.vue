<template>
  <div id="main">
    <div class="personal_box" id="personal-info">
      <div class="contain_width">
        <h2 class="personal_title"></h2>
      </div>
      <div class="contain_width">
        <!--左侧选单-->
        <div class="left_menu">
          <div class="user_info">
            <div class="img"><img src="../../../static/images/pic_user.png"></div>
            <p class="name">{{info.username}}</p>
            <p class="balance" >{{info.balance | balanceNo}}</p>
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
            <!--个人中心-->
            <div class="psn_content">
              <dl class="psn_info">
                <dt><h3>帐户资料</h3></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="label">帐号</span>
                      <span class="form">{{member.username}}</span>
                    </li>
                    <li>
                      <span class="label">币种</span>
                      <span class="form">{{member.currency}}</span>
                    </li>
                    <li>
                      <span class="label">最后登入时间</span>
                      <span class="form last_login"></span>
                    </li>
                    <li>
                      <span class="label">密码设置</span>
                      <span class="form">
                                                <a class="btn_gdOrange" :href="['/personalModifyPassword']+'?type=account'">修改登录密码</a>
                                                <a class="btn_gdGold" :href="['/personalModifyPassword']+'?type=play'">修改支付密码</a>
                                            </span>
                    </li>
                  </ul>
                </dd>
                <dt><h3>帐户安全</h3></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="label">银行卡号</span>
                      <span class="form">{{account.bankCardNo}}</span>
                    </li>
                    <li>
                      <span class="label">真实姓名</span>
                      <span class="form">{{ account.realname }}</span>
                    </li>
                    <li>
                      <span class="label">手机号码</span>
                      <span class="form">{{ account.telephone }}</span>
                    </li>
                  </ul>
                </dd>
                <dt>
                  <h3>个人信息</h3>
                  <a @click="editInfo('personInfo')" class="btn_gdGold" id="btn_edit" href="javascript:;">{{(editPersonFlag?'取消':'')}}修改</a>
                  <a @click="sendInfo('personInfo')" v-show="editPersonFlag" class="btn_gdGold" style="display:none" href="javascript:;">保存</a></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="label">微信</span>
                      <span class="form info" v-show="!editPersonFlag">{{member.weixin}}</span>
                      <span class="form edit" v-show="editPersonFlag">
                        <input type="text" class="formInput" v-model="tempMember.weixin" @keypress.enter="sendInfo('personInfo')" />
                        <a class="ui_error" v-show="tempMember.weixinVali">格式错误</a>
                      </span>
                    </li>
                    <li>
                      <span class="label">QQ</span>
                      <span class="form info" v-show="!editPersonFlag">{{member.qq}}</span>
                      <span class="form edit" v-show="editPersonFlag">
                        <input type="text" class="formInput" v-model="tempMember.qq" @keypress.enter="sendInfo('personInfo')">
                        <a class="ui_error" v-show="tempMember.qqVali">格式错误</a>
                      </span>
                    </li>
                    <li>
                      <span class="label">电子邮箱</span>
                      <span class="form info" v-show="!editPersonFlag">{{member.email}}</span>
                      <span class="form edit" v-show="editPersonFlag">
                        <input type="text" class="formInput" v-model="tempMember.email" @keyPress.enter="sendInfo('personInfo')">
                        <a class="ui_error" v-show="tempMember.emailVali">格式错误</a>
                      </span>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div><!--end 个人中心-->
          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PersonalInfo',
    data: function () {
      return {
        info: {
          balance: 0,
          username: ''
        },
        member: [],//获取到的个人信息
        account: [],//获取到的个人账户信息
        memberInfo: [],//刷新获取到的balance信息
        editPersonFlag: false,
        tempMember: {} //
      }
    },
    filters: {
      balanceNo: function (value) {
        return common.FormatNumber.get(value)
      }
    },
    created: function () {
      var _self = this;
      document.title = '个人中心';
      if(common.ifLanded()){
        _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        _self.info.username = common.Cookie.get('userName');
        _self.getMemberDetail();
        common.pollingTheMail();
      }else {
        _self.$nextTick(function(){
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
        })

      }
    },
    methods:{
      //checkReg  验证登录信息
      checkReg: function (type,str) {
        let _self = this;
        switch (type) {
          case 'email':
            return (str.length>0?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str):true)
            break;
          case 'weixin':
            return (str.length>0?/^[a-zA-Z0-9]{0,50}$/.test(str):true)
            break;
          case 'qq':
            return (str.length>0?/^[0-9]{5,14}$/.test(str):true)
            break;
          default:
        }
      },
      //保存修改的weixin qq email
      sendInfo : function(type){
        let _self = this;
        switch (type){
          case 'personInfo':
            _self.tempMember.email = _self.tempMember.email.trim();
            _self.tempMember.weixin = _self.tempMember.weixin.trim();
            _self.tempMember.qq = _self.tempMember.qq.trim();
            //验证email
            var email=_self.checkReg('email',_self.tempMember.email);
            var weixin = _self.checkReg('weixin',_self.tempMember.weixin);
            var qq = _self.checkReg('qq',_self.tempMember.qq);
            _self.$set(_self.tempMember,"emailVali",!email);
            _self.$set(_self.tempMember,"weixinVali",!weixin);
            _self.$set(_self.tempMember,"qqVali",!qq);
            var param = {weixin:_self.tempMember.weixin,qq:_self.tempMember.qq,email:_self.tempMember.email};
            if(email && weixin && qq) {
              common.ajax('member/contactInfo/save', param, function(data){
                if (data&&data.result&&data.apistatus&&data.apistatus===1) {
                  _self.$set(_self.member,"email",(data.result.email?data.result.email:'无'));
                  _self.$set(_self.member,"weixin",(data.result.weixin?data.result.weixin:'无'));
                  _self.$set(_self.member,"qq",(data.result.qq?data.result.qq:'无'));
                  _self.editInfo(type);
                  common.toast('修改成功');
                }
                else {
                  common.toast('修改发生错误');
                }
              }, 'post', function (data){
                common.toast('修改发生错误');
              });
            }
            break;
          default:
        }

      },
      //修改weixin qq email
      editInfo: function(type){
        let _self = this;
        switch (type) {
          case 'personInfo':
            _self.editPersonFlag = !_self.editPersonFlag;
            if(_self.editPersonFlag){
              _self.$set(_self.tempMember,'weixin',(_self.member.weixin === '无'?'':_self.member.weixin));
              _self.$set(_self.tempMember,'qq',(_self.member.qq === '无'?'':_self.member.qq));
              _self.$set(_self.tempMember,'email',(_self.member.email === '无'?'':_self.member.email));
            }
            else {
              _self.$set(_self.tempMember,"emailVali",false);
              _self.$set(_self.tempMember,"weixinVali",false);
              _self.$set(_self.tempMember,"qqVali",false);
            }
            break;
          default:
        }
      },
      //获取个人信息
      getPersonalInfo: function(){
        var _self= this;
        $('.icon_refresh,.icon_refresh_money').addClass('rotate');
        setTimeout(function () {
          $('.icon_refresh,.icon_refresh_money').removeClass('rotate');
        }, 2000);
        common.ajax('member/refresh',{},function(data){
          _self.memberInfo = $.extend({},data && data.result || {});
          _self.memberInfo.balance = data&&data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
          //刷新主页的钱
          $("#mynew_balance").html(_self.memberInfo.balance);
          $(".balance").html(_self.memberInfo.balance);
          common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
        })

      },
      //获取会会员详情    （URL，params，suc，type，err，ajax_err_cb）
      getMemberDetail: function(){
        var _self = this;
        common.ajax('member/center/detail',{},function(data){
            if(data.apistatus == 1){
              _self.member = data && data.result || []
              _self.account = data && data.result || [];
              _self.$nextTick(function () {
                $('.last_login').text(common.changeTime(data.result.lastLoginTime)) ;
              })
            }
            common.Cookie.set('userName',_self.member.username);
        },'get',function(data){
            if(data.apistatus == 0 && data.errorCode == '1000020'){
              setTimeout('common.logOut()',1000);
            }
            if(data.errorCode == '1000003'){
              setTimeout('common.logOut()',1000);
            }
        })
      },
      //存款
      deposit_judge: function  () {
          common.ajax('tethys-user/user/menu/level/auth',{},function(data){
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
          })
      },
      //取款
      draw_judge: function () {
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
            setTimeout( 'common.logOut()',1000);
          }
          if(data.errorCode == '1000003'){
            setTimeout( 'common.logOut()',1000);
          }
        });
      }
    }
  }
</script>



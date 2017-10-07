<template>
 <div id="main">
   <div class="personal_box" id="personal-callin">
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
           <li><a href="personalInfo" ><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
           <li><a v-on:click="deposit_judge();" href="javascript:void(0);"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
           <li><a v-on:click="draw_judge()" class="active" href="javascript:void(0);"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
           <li><a href="personalBettin"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
           <li><a href="personalFunds"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
         </ul>
       </div>
       <!--end 左侧选单-->
       <!--右侧内容-->
       <!-- 信息未完善显示-->
       <div class="right_main" v-if="isFirst== true" >
         <div class="psn_wrap">
           <!--取款-->
           <div class="psn_content">
             <div class="deposit_wrap">
               <dl class="psn_info">
                 <dt><h3>绑定取款银行账号</h3></dt>
                 <dd>
                   <ul class="style_item">
                     <li>
                       <span class="label">选择银行<span class="color_red">※</span></span>
                       <span class="form formSelect_wrap">
                        <select id="bankSelect" v-model="bankInfo.bankCode" class="formSelect" @change="preCheck('bankCode')">
                          <option value="">请选择</option>
                          <option v-for="(bank,index) in bankList" :value="bank.bankCode" :selected="{'selected' : bankInfo.bankCode === bank.bankCode}">
                            {{bank.bankName}}
                          </option>
                        </select>

                      </span>
                       <label class="ui_error">{{errorMsg.bankCode_error}}</label>
                     </li>
                     <li>
                       <span class="label">真实姓名<span class="color_red">※</span></span>
                       <span class="form">
                         <input v-model="bankInfo.realname" type="text" id="realName" @input="preCheck('realname')" class="formInput" placeholder="请输入您的真实姓名"></span>
                       <span class="ui_error">{{errorMsg.realname_error}}</span>
                     </li>
                     <li>
                       <span class="label">开户行<span class="color_red">※</span></span>
                       <span class="form">
                         <input type="text" class="formInput" placeholder="请输入开户行" v-model="bankInfo.bankDeposit" @input="preCheck('bankDeposit')"></span>
                       <span class="ui_error">{{errorMsg.realname_error}}</span>
                     </li>
                     <li>
                       <span class="label">银行卡号<span class="color_red">※</span></span>
                       <span class="form"><input  v-model="bankInfo.bankCardNo" type="text" class="formInput" placeholder="请输入银行卡号" @input="preCheck('bankCardNo')"></span>
                       <span class="ui_error">{{errorMsg.bankCardNo_error}}</span>
                     </li>
                     <li>
                       <span class="label">手机号码<span class="color_red">※</span></span>
                       <span class="form"><input v-model="bankInfo.telephone" type="text" class="formInput" placeholder="请输入您的手机号码" @input="preCheck('telephone')"></span>
                       <span class="ui_error">{{errorMsg.telephone_error}}</span>
                     </li>
                   </ul>
                 </dd>
               </dl>
               <div class="form_submit">
                 <a class="formBtn modalBtn" href="#modalWaring" type="submit" @click="bindBankInfo">确&nbsp;&nbsp;认</a>
                 <!--提示讯息-->
                 <div id="modalWaring" style="display:none;">
                   <div class="icon_warning"></div>
                   <p class="warning_text">当前没有绑定取款银行卡，无法完成取款，<br />请绑定银行卡继续操作！</p>
                 </div><!--end 提示讯息-->
               </div>
             </div>
           </div><!--end 取款-->
         </div>
       </div>
       <!--信息已经完善显示-->
       <div class="right_main" v-if="getMoneyDet">
         <div class="psn_wrap">
           <!--取款-->
           <div class="psn_content">
             <div class="deposit_wrap">
               <dl class="psn_info">
                 <dt><h3>银行取款</h3></dt>
                 <dd>
                   <ul class="style_item">
                     <li>
                       <span class="label">真实姓名</span>
                       <span class="form">{{bankInfo.realname}}</span>
                     </li>
                     <li>
                       <span class="label">收款账号</span>
                       <span class="form">{{bankInfo.bank}}-{{bankInfo.bankDetail}}-{{bankInfo.bankCardNo}}</span>
                       <a @click="changeCard()" class="edit">修改银行帐号</a>
                     </li>
                     <li>
                       <span class="label">钱包余额</span>
                       <span class="form wallet_balance">¥ {{info.balance| balanceNo}}</span>
                     </li>
                     <li>
                       <span class="label">取款金额</span>
                       <span class="form"><input type="text" class="formInput" placeholder="¥ 1-9999999999" v-model="drawInfo.drawCount" disabled="disabled" id="callin_moneyRange" @blur="getWithdrawalAmount" @input.lazy="preCheck('drawCount')" ></span>
                       <span class="error color_red">{{errorMsg.drawCount_error}}</span>
                     </li>
                     <li>
                       <span class="label">支付密码</span>
                       <span class="form"><input v-model="drawInfo.tradePass" type="password"  class="formInput" placeholder="请输入密码" @input.lazy="preCheck('tradePass')" maxlength="4"></span>
                       <span class="error color_red">{{errorMsg.tradePass_error}}</span>
                     </li>
                   </ul>
                 </dd>
               </dl>
               <div class="form_submit">
                 <a class="formBtn " href="javascript:void(0);" @click="preDraw" type="button" >申请取款</a>
                 <!--！仅供UI测试弹窗--><p><a class="modalBtn" href="#modalConform">打码量符合弹窗</a> <a class="modalBtn" href="#modalNoConform">打码量不符合弹窗</a></p><!--end ！仅供UI测试弹窗-->
                 <!--打码量符合讯息-->
                 <div id="modalConform" style="display:none;">
                   <div class="callin_popup">
                     <div class="icon_conform"></div>
                     <h3>取款确认</h3>
                     <p>当前取款申请符合出款要求</p>
                     <p><span class="callin_money" v-model="preDrawInfo.realWithDrawAmount" >本次取款：¥ {{preDrawInfo.realWithDrawAmount/100}}</span></p>
                     <div class="modal_btn">
                       <a class="formBtn btn_modal" href="javascript:;">取&nbsp;&nbsp;消</a>
                       <a class="formBtn btn_modal" href="javascript:;" >确&nbsp;&nbsp;认</a>
                     </div>
                   </div>
                 </div><!--end 打码量符合讯息-->
                 <!--打码量不符合讯息-->
                 <div id="modalNoConform" style="display:none;">
                   <div class="callin_popup">
                     <div class="icon_noconform"></div>
                     <h3>警告</h3>
                     <p>当前取款申请不符合出款要求，须扣除<span class="color_red" v-model="preDrawInfo.needPayAmount">{{preDrawInfo.needPayAmount}}</span>元</p>
                     <p><span class="callin_money">最终可取款：¥ {{preDrawInfo.realWithDrawAmount / 100}}</span></p>
                     <div class="modal_btn">
                       <a class="formBtn btn_modal" href="javascript:;">取&nbsp;&nbsp;消</a>
                       <a class="formBtn btn_modal" href="javascript:;">确&nbsp;&nbsp;认</a>
                     </div>
                   </div>
                 </div><!--end 打码量不符合讯息-->
               </div>
             </div>
           </div><!--end 取款-->
         </div>
       </div>

       <div class="right_main" v-if="changeBankCard">
         <div class="psn_wrap">
           <!--取款-->
           <div class="psn_content">
             <div class="deposit_wrap">
               <dl class="psn_info">
                 <dt><h3>修改取款银行账号</h3></dt>
                 <dd>
                   <ul class="style_item">
                     <li>
                       <span class="label">选择银行<span class="color_red">※</span></span>
                       <span class="form formSelect_wrap">
                         <select id="bankSelect" v-model="bankInfo.bankCode" class="formSelect" @change="preCheck('bankCode')">
                          <option value="">请选择</option>
                          <option v-for="(bank,index) in bankList" :value="bank.bankCode" :selected="{'selected' : bankInfo.bankCode === bank.bankCode}">{{bank.bankName}}
                          </option>
                        </select>
                                                </span>
                     </li>
                     <li>
                       <span class="label">真实姓名</span>
                       <span class="form" v-model="bankInfo.realname">{{bankInfo.realname}}</span>
                       <span class="ui_error"></span>
                     </li>
                     <li>
                       <span class="label">开户行<span class="color_red">※</span></span>
                       <span class="form">
                         <input type="text" class="formInput" placeholder="请输入开户行" v-model="bankInfo.bankDeposit" @input="preCheck('bankDeposit')"></span>
                       <span class="ui_error">{{errorMsg.realname_error}}</span>
                     </li>
                     <li>
                       <span class="label">银行卡号<span class="color_red">※</span></span>
                       <span class="form"><input  v-model="bankInfo.bankCardNo" type="text" class="formInput" placeholder="请输入银行卡号" @input="preCheck('bankCardNo')"></span>
                       <span class="ui_error">{{errorMsg.bankCardNo_error}}</span>
                     </li>
                     <li>
                       <span class="label">手机号码</span>
                       <span class="form" v-model="bankInfo.telephone">{{bankInfo.telephone}}</span>
                       <span class="ui_error"></span>
                     </li>
                   </ul>
                 </dd>
               </dl>
               <div class="form_submit">
                 <a class="formBtn modalBtn" href="#modalWaring1" type="submit" @click="bindBankInfo">确&nbsp;&nbsp;认</a>
                 <!--提示讯息-->
                 <div id="modalWaring1" style="display:none;">
                   <div class="icon_warning"></div>
                   <p class="warning_text">当前没有绑定取款银行卡，无法完成取款，<br />请绑定银行卡继续操作！</p>
                 </div><!--end 提示讯息-->
               </div>
             </div>
           </div><!--end 取款-->
         </div>
       </div>
       <!--end 右侧内容-->
     </div>
   </div>
  </div>

</template>

<script>
  var md5 = require('../../../static/vendor/md5.js');
export default {
  name :'PersonalCallin',
  data: function() {
    return {
      isFirst: '',
      info: {
        username: '',
        balance: 0
      },
      bankList: [],
      bankInfo: {
        bankCode: '', //银行简码
        userName: '', //
        bankAddress: '', //
        bankCardNo: '', //
        phoneNum: '', //
        bank: '', //
        realname: '',
        telephone: '',
        bankDeposit: '',
        bankDetail: ''
      },
      bankInfo2: {
        bankCode: '', //银行简码
        userName: '', //
        bankAddress: '', //
        bankCardNo: '', //
        phoneNum: '', //
        bank: '', //
        realname: '',
        telephone: '',
        bankDeposit: '',
        bankDetail: ''
      },
      tempCode: '',
      drawInfo: {
        drawCount: '',
        tradePass: '',
      },
      errorMsg: {
        drawCount_error: '',
        tradePass_error: ''
      },
      preDrawInfo: {
        realWithDrawAmount: 0,
        needBettAmount: 0,
        realBettAmount: 0,
        needPayAmount: 0
      },
      photo_url: '',
      callin_moneyRange: '',
      maxMoney: '',
      minMoney: '',
      memberInfo: {},
      getMoneyDet:'',
      changeBankCard:''
    }
  },
  filters: {
    balanceNo: function(value) {
      return common.FormatNumber.get(value);
    }
  },
  created: function() {
    var _self = this;
    document.title = '取款';
    if (common.ifLanded()) {
      _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
      // console.log(_self.info.balance);
      _self.info.username = common.Cookie.get('userName') || '';
      // _self.info.balance = common.Cookie.get('')
      common.pollingTheMail();

      // _self.info.balance = common.Cookie.get('memberInfo').balance && JSON.parse(common.Cookie.get('memberInfo')).balance || {};
      //_self.getPersonalInfo();
      _self.getBankInfo();
    } else {
      _self.$nextTick(function() {
        setTimeout(function() {
          common.$message({
            title: '登陆提示',
            content: '请先登录！！',
            hc: true,
            okcb: function() {
              _self.$router.push({
                path: '/'
              });
            }
          });
        }, 500);
      })

    }
    this.photo_url = common.photo_url;
    this.getmoney_range();
  },
  methods: {
    deposit_judge: function() {
      common.ajax('tethys-user/user/menu/level/auth', {}, function(data) {
        console.log(data)
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
      }, 'get', function(data) {
        if (data.apistatus == '0' && data.errorCode == '1000020') {
          common.toast({
            content: '会员未登录',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
        if (data.errorCode == '1000003') {
          common.toast({
            content: '该会员已被停用！',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
      });
    },
    draw_judge: function() { //取款
      common.ajax('tethys-user/user/menu/level/auth', {}, function(data) {
        if (data.apistatus == 1) {
          if (data && data.result == 0) { // 1锁定 0 非锁定
            location.href = "personalCallin";
          } else {
            common.toast({
              content: '当前无法操作，请联系客服',
              time: 3
            });
            setTimeout(function() {
              location.href = "/";
            }, 2000);
          }
        }
      }, 'get', function(data) {
        if (data.apistatus == '0' && data.errorCode == '1000020') {
          common.toast({
            content: '会员未登录',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
        if (data.errorCode == '1000003') {
          common.toast({
            content: '该会员已被停用！',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
      });
    },
    getmoney_range: function() {
      var _self = this;
      common.ajax('tethys-user/user/account/dwdsInfo', {}, function(data) {
        $("#callin_moneyRange").removeAttr("disabled");
        _self.maxMoney = data.result.withdrawMaxAmount;
        _self.minMoney = data.result.withdrawMinAmount;
        $('#callin_moneyRange').prop("placeholder", "范围  " + data.result.withdrawMinAmount + "~" + data.result.withdrawMaxAmount);
      }, 'get', function(data) {
        if (data.apistatus == '0' && data.errorCode == '1000020') {
          common.toast({
            content: '会员未登录',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
        if (data.errorCode == '1000003') {
          common.toast({
            content: '该会员已被停用！',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
      });
    },
    getWithdrawalAmount: function() {
      var _self = this;
      var para = $.extend({}, _self.drawInfo);

      if (para.drawCount && $.trim(para.drawCount) != '') {
        if (!para.drawCount || para.drawCount === '' || !(common.checkNumber(para.drawCount))) {
          common.toast({
            content: '请输入正确的取款金额!',
            time: 3
          });
          return;
        }
        if (para.drawCount > _self.maxMoney || para.drawCount < _self.minMoney) {
          common.toast({
            content: '取款金额必须在范围内!',
            time: 3
          });
          return;
        }
      }

    },
    // 个人信息
    getPersonalInfo: function() {
      var _self = this;
     $('.icon_refresh_money').addClass('rotate');
      setTimeout(function () {
        $('.icon_refresh_money').removeClass('rotate');
      }, 500);
      common.ajax('member/refresh', {}, function(data) {
//        setTimeout(function() {
//          $(".lone").removeClass("icon-refreshmyword_info");
//        }, 600);
        _self.memberInfo = $.extend({}, data && data.result || {});
        _self.memberInfo.balance = data && data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
        $("#mynew_balance").html(_self.memberInfo.balance);
        $(".balance").html(_self.memberInfo.balance);
        //$('.red-dot').text('').text(data.result.message);
        common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
      });
    },
    // 获取银行卡信息
    getBankInfo: function() {
      var _self = this;
      common.ajax('member/center/bankDetail', {}, function(data) {
        _self.getBankList();
        _self.bankInfo = $.extend({}, data.result);
        _self.tempCode = _self.bankInfo.bankCode;
        if (_self.bankInfo.telephone) {
          $("#telephone").attr("disabled", true);
        }
        if (_self.bankInfo.realname) {
          $("#realName").attr("disabled", true);
        }
        if (_self.bankInfo.telephone == "无") {
          _self.bankInfo.telephone = "";
        }
        //bankCode realname bankDeposit bankCardNo telephone
        _self.bankInfo.bankDeposit = _self.bankInfo.bankDetail;
        _self.bankInfo.bankCardNo = _self.bankInfo.bankCardNo;
        _self.bankInfo.realname = _self.bankInfo.realname;
        if (_self.bankInfo.tempCode == "" || _self.bankInfo.realname == "" || _self.bankInfo.bankDeposit == "" || _self.bankInfo.bankCardNo == "" || _self.bankInfo.telephone == "") {
          _self.isFirst = true;
          _self.getMoneyDet = false;
          _self.changeBankCard =false;
//          common.toast({
//            content: '<div class="icon_warning"></div>\n' +
//            '            <p class="warning_text">当前没有绑定取款银行卡，无法完成取款，<br />请绑定银行卡继续操作！</p>！'
//          });
          var source = '<div class="icon_warning"></div>\n' +
            '            <p class="warning_text">当前没有绑定取款银行卡，无法完成取款，<br />请绑定银行卡继续操作！</p>！'

         showModal(source);
        } else {
          _self.isFirst = false;
          _self.getMoneyDet = true;
          _self.changeBankCard =false;
        }
        _self.bankInfo.bank = _self.bankInfo.bank;


      }, 'get');
    },
    // 获取银行卡列表
    getBankList: function() {
      var _self = this;
      common.ajax('tethys-user/user/account/bankList', {}, function(data) {
        _self.bankList = data && data.result || [];
        _self.bankInfo.bankCode = _self.tempCode;
      }, 'post');
    },
    //修改银行卡号
    changeCard:function(){
      var _self=this;
      _self.isFirst = false;
      _self.getMoneyDet = false;
      _self.changeBankCard =true;
      _self.bankInfo.bankDeposit="";
      _self.bankInfo.bankCardNo=""

    },
    // 绑定银行卡信息
    bindBankInfo: function() {
      var _self = this;
      var para = $.extend({}, _self.bankInfo);
      para.bank = $.trim($('#bankSelect option:selected').text());
      if (_self.bankInfo.bankCode == "") {
        common.toast({
          content: '请选择银行！',
          time: 2
        });
        return;
      }
      if (!para.realname || para.realname == '' || !common.trueName(para.realname)) {
        common.toast({
          content: '请输入真实姓名！',
          time: 2
        });
        return;
      }
      if (!para.bankDeposit || para.bankDeposit == '' || !/[a-zA-Z0-9]*[\u4e00-\u9fa5]+/.test(para.bankDeposit)) {
        common.toast({
          content: '请输入开户行！',
          time: 2
        });
        return;
      }
      para.bankAddress = _self.bankInfo.bankDeposit;
      if (!para.bankCardNo || !(/^\d{15,20}$/.test(para.bankCardNo))) {
        common.toast({
          content: '请输入正确的银行卡号！',
          time: 2
        });
        return;
      }
      if (!para.telephone || !(/^[1][0-9]{10}$/.test(para.telephone))) {
        common.toast({
          content: '请输入正确的手机号码！',
          time: 2
        });
        return;
      }
      delete(para.bankName);
      common.ajax('member/bankInfo/save', para, function() {
        _self.getBankInfo();
      }, 'post');
    },
    preCheck: function(type) {
      var _self = this;
      var para = $.extend({}, _self.drawInfo);
      switch (type) {
        case 'drawCount':
          if (para.drawCount > _self.maxMoney || para.drawCount < _self.minMoney) {
            _self.$set(_self.errorMsg,'drawCount_error','取款金额必须在范围内');
          }
          else if (!para.drawCount || para.drawCount === '' || para.drawCount === '0' || !(common.positiveNum(para.drawCount))) {
            _self.$set(_self.errorMsg,'drawCount_error','请输入正确的取款金额');
          }
          else if (parseInt($('.wallet_balance').text().replace(/\,/ig, '')) < parseInt(para.drawCount.replace(/\,/ig, ''))) {
            _self.$set(_self.errorMsg,'drawCount_error','余额不足，请重新输入');
          }
          else {
            _self.$set(_self.errorMsg,'drawCount_error','');
          }
          break;
        case 'tradePass':
          if (!common.checkNumber(para.tradePass) || para.tradePass.length > 4 || para.tradePass.length < 4) {
            _self.$set(_self.errorMsg,'tradePass_error','支付密码必须为4个数字');
          }
          else if (!para.tradePass || para.tradePass === '') {
            _self.$set(_self.errorMsg,'tradePass_error','请输入取款密码');
          }
          else {
            _self.$set(_self.errorMsg,'tradePass_error','');
          }
          break;
        case 'bankCode':
          if(_self.bankInfo.bankCode==""){
            _self.$set(_self.errorMsg,'bankCode_error','请选择银行');
          }
          else {
            _self.$set(_self.errorMsg,'bankCode_error','');
          }
          break;
        case 'realname':
          if(_self.bankInfo.realname=="" || !common.trueName(_self.bankInfo.realname)){
            _self.$set(_self.errorMsg,'realname_error','请输入真实姓名');
          }
          else {
            _self.$set(_self.errorMsg,'realname_error','');
          }
          break;
        case 'bankDeposit':
          if(_self.bankInfo.bankDeposit=="" || !/[a-zA-Z0-9]*[\u4e00-\u9fa5]+/.test(_self.bankInfo.bankDeposit)){
            _self.$set(_self.errorMsg,'bankDeposit_error','请输入开户行');
          }
          else {
            _self.$set(_self.errorMsg,'bankDeposit_error','');
          }
          break;
        case 'bankCardNo':
          if(_self.bankInfo.bankCardNo==""){
            _self.$set(_self.errorMsg,'bankCardNo_error','请输入银行卡号');
          }
          else if (!common.positiveNum(_self.bankInfo.bankCardNo) || _self.bankInfo.bankCardNo.length < 15 || _self.bankInfo.bankCardNo.length > 20) {
            _self.$set(_self.errorMsg,'bankCardNo_error','请输入15-20位银行账号');
          }
          else {
            _self.$set(_self.errorMsg,'bankCardNo_error','');
          }
          break;
        case 'telephone':
          if(_self.bankInfo.telephone=="" || !common.phoneNum(_self.bankInfo.telephone) || _self.bankInfo.telephone.length < 11 || _self.bankInfo.telephone.length > 11){
            _self.$set(_self.errorMsg,'telephone_error','请输入手机号码');
          }
          else {
            _self.$set(_self.errorMsg,'telephone_error','');
          }
          break;
        default:
      }
    },
    // 预取款
    preDraw: function() {
      common.ajax('tethys-user/user/menu/level/auth', {}, function(data) {
        if (data.apistatus == 1) {
          if (data && data.result == 0) { // 1锁定 0 非锁定
            // location.href="callin";
          } else {
            common.toast({
              content: '当前无法操作，请联系客服',
              time: 3
            });
            return;
          }
        }
      }, 'get', function(data) {
        if (data.apistatus == '0' && data.errorCode == '1000020') {
          common.toast({
            content: '会员未登录',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
        if (data.errorCode == '1000003') {
          common.toast({
            content: '该会员已被停用！',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
      });
      var _self = this;
      var para = $.extend({}, _self.drawInfo);
      if (para.drawCount > _self.maxMoney || para.drawCount < _self.minMoney) {
        common.toast({
          content: '取款金额必须在范围内!',
          time: 3
        });
        return;
      }
      if (!para.drawCount || para.drawCount === '' || para.drawCount === '0' || !(common.positiveNum(para.drawCount))) {
        common.toast({
          content: '请输入正确的取款金额!',
          time: 3
        });
        return;
      }
      if (parseInt($('.wallet_balance').text().replace(/\,/ig, '')) < parseInt(para.drawCount.replace(/\,/ig, ''))) {
        common.toast({
          content: '余额不足，请重新输入！',
          time: 3
        });
        return;
      }
      if (!para.tradePass || para.tradePass === '') {
        common.toast({
          content: '请输入取款密码!',
          time: 3
        });
        return;
      }
      if (para.tradePass.length > 4 || para.tradePass.length < 4) {
        common.toast({
          content: "支付密码必须为4个数字！"
        });
        return;
      }
      para.drawCount = para.drawCount * 100;
      para.tradePass = md5(para.tradePass);
      common.ajax('tethys-user/user/account/draw/preDraw',
        para,
        function(data) {
          _self.preDrawInfo.realWithDrawAmount = data && data.result && data.result.RealWithDrawAmount/100 || 0;
          _self.preDrawInfo.needBettAmount = data && data.result && data.result.NeedBettAmount/100 || 0;
          _self.preDrawInfo.realBettAmount = data && data.result && data.result.RealBettAmount/100 || 0;
          _self.preDrawInfo.needPayAmount = data && data.result && data.result.NeedPayAmount/100 || 0;
          _self.preDrawInfo.orderId = data && data.result && data.result.OrderIdForWeb || 0;
          if (_self.preDrawInfo.needPayAmount && parseInt(_self.preDrawInfo.needPayAmount, 10) > 0) {
//            common.$message({
//              content: '<p>当前取款申请不符合出款要求，须扣除<em>' + _self.preDrawInfo.needPayAmount / 100 + '</em>元<p/><p><input readonly type="text" class="form-control" placeholder="本次取款：¥' + _self.preDrawInfo.realWithDrawAmount / 100 + '"/></p>',
//              okcb: function() {
//                _self.confirmDraw();
//              }
//            });
            var source='<div class="callin_popup"><div class="icon_noconform"></div><h3>警告</h3><p>当前取款申请不符合出款要求，须扣除<span class="color_red" >'+_self.preDrawInfo.needPayAmount+'</span>元</p><p><span class="callin_money">最终可取款：¥ '+_self.preDrawInfo.realWithDrawAmount+'</span></p><div class="modal_btn"><a class="formBtn btn_modal" href="javascript:;">取&nbsp;&nbsp;消</a><a class="formBtn btn_modal" id="confirm">确&nbsp;&nbsp;认</a></div>';
            showModal(source);
            $('body').on('click','#confirm',function(){
              _self.confirmDraw();
            })
          } else {
//            common.$message({
//              content: '<p>当前取款申请符合出款要求<p/><p><input readonly type="text" class="form-control" placeholder="本次取款：¥' + _self.preDrawInfo.realWithDrawAmount / 100 + '"/></p>',
//              okcb: function() {
//                _self.confirmDraw();
//              }
//            });
            var source='<div class="callin_popup"><div class="icon_noconform"></div><h3>取款确认</h3><p>当前取款申请符合出款要求</p><p><span class="callin_money">本次取款：¥ '+_self.preDrawInfo.realWithDrawAmount+'</span></p><div class="modal_btn"><a class="formBtn btn_modal" href="javascript:;">取&nbsp;&nbsp;消</a><a class="formBtn btn_modal" id="confirm">确&nbsp;&nbsp;认</a></div>'
            showModal(source);
            $('body').on('click','#confirm',function(){
              _self.confirmDraw();
            })
          }
        }, 'post',
        function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {
            common.toast({
              content: '会员未登录',
              time: 1
            });
            setTimeout('common.logOut()', 1000);
          }
          if (data.errorCode == '1000003') {
            common.toast({
              content: '该会员已被停用！',
              time: 1
            });
            setTimeout('common.logOut()', 1000);
          }
        });
    },
    // 确认取款
    confirmDraw: function() {
      var _self = this;
      var balance = 0;
      if ($('#mynew_balance').html()) {
        balance = $('#mynew_balance').html().replace(/\,/ig, '');
      }
      balance = Math.round(balance * 100);
      common.ajax('tethys-user/user/account/draw/drawApply', {
        drawCount: _self.drawInfo.drawCount * 100,
        tradePass: md5(_self.drawInfo.tradePass),
        balance: balance,
        taxCount: _self.preDrawInfo.needPayAmount,
        realWithDrawAmount: _self.preDrawInfo.realWithDrawAmount,
        needBettAmount: _self.preDrawInfo.needBettAmount,
        realBettAmount: _self.preDrawInfo.realBettAmount,
        orderId: _self.preDrawInfo.orderId
      }, function(data) {
        if (data.apistatus == 1) {
          common.toast_drawMoney({
            content: '申请取款成功！',
            time: 3
          });
          _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
          /* _self.$nextTick(function () {*/
          setTimeout(function() {
            //  window.location.reload() ;
            window.location.href = '/';
          }, 1500);
          /*  }) ;*/

        } else {
          common.toast_drawMoney({
            content: '申请取款失败！',
            time: 3
          });
//          showModal("申请取款失败");
        }
      }, 'post', function(data) {
        if (data.apistatus == '0' && data.errorCode == '1000020') {
          common.toast({
            content: '会员未登录',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
        if (data.errorCode == '1000003') {
          common.toast({
            content: '该会员已被停用！',
            time: 1
          });
          setTimeout('common.logOut()', 1000);
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

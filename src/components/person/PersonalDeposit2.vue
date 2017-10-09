<template>
  <div id="main">
    <div class="personal_box" id="personal-deposit">
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
            <li><a v-on:click="deposit_judge();" href="javascript:void(0);" class="active"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a v-on:click="draw_judge()" href="javascript:void(0);"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personalBettin"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personalFunds"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <div class="psn_wrap">
            <!--在线支付-->
            <div class="psn_content" v-show="showContent">
              <div class="deposit_wrap">
                <dl class="psn_info">
                  <dt><h3>在线支付信息</h3></dt>
                  <dd>
                    <ul class="style_item">
                      <li>
                        <span class="label">会员账号</span>
                        <span class="form">{{info.username}}</span>
                      </li>
                      <li>
                        <span class="label">存入金额</span>
                        <span class="form">
                          <input type="text" class="formInput" v-model="saveInfo.saveCount" id="deposit2_value" disabled="disabled" @blur="getOfferAmount" @input="getOfferAmount" />
                        </span>
                        <span class="ui_error">请输入正确金额！</span>
                      </li>
                    </ul>
                    <!--<div class="deposit_msg_plus">当前享受优惠：10.00</div>-->
                  </dd>
                </dl>
                <div class="form_submit">
                  <a class="formBtn btn-apply next-step" href="javascript:;" @click="nextStep" >提交申请</a>
                </div>
              </div>
            </div><!--end 在线支付-->
            <div class="psn_content" v-show="!showContent">
              <div class="deposit_wrap">
                <dl class="psn_info">
                  <dt><h3>选择支付银行</h3></dt>
                  <dd>
                    <div class="bank_select ">
                      <label v-for="(bank,index) in bankList" :for="'bank_'+[index]">
                        <input type="radio" name="bankgroup" :value="bank.bankCode" :id="'bank_'+[index]" v-model="saveInfo.bankCode">
                        <img :src="photo_url+'/pic/'+[bank.bankURL]+'/0'">{{bank.bankName}}</label>

                    </div>
                  </dd>
                </dl>
                <div class="form_submit">
                  <a class="formBtn btn-apply submit-apply" href="javascript:;" @click="submitApply">确&nbsp;&nbsp;认</a>
                </div>
              </div>
            </div><!--end 在线支付-->
          </div>
        </div>

        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonalDeposit2',
    data: function () {
      return {
        info: {
          username: '',
          balance: 0
        },
        saveInfo: {
          saveCount: '',
          bankCode: '',
          preferentialCount: '',
          isAddBett: '',
          offerAmount: '',
          offerType: ''
        },
        bankList: [],
        timer: null, // 输入节流
        inputInfo: {
          error: '',
          //  offerAmount: ''
        },
        userId: '',
        photo_url:'',
        deposit2_value:'',
        memberInfo: {},
        onlineMinAmount:'',
        onlineMaxAmount:'',
        showContent:true,
      }
    },
    created: function () {
      var _self = this;
      this.photo_url = common.photo_url;
      if (common.ifLanded()) {
        _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        _self.info.username = common.Cookie.get('userName') || '';
        //_self.getPersonalInfo();
        _self.getBankList();
        _self.getMemInfo();
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
      this.getmoney_range();
    },
    filters: {
      balanceNo: function (value) {
        return common.FormatNumber.get(value);
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
            }
          }
        });
      },
      draw_judge: function() {
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
        });
      },
      getmoney_range:function(){
        var _self = this;
        common.ajax('tethys-user/user/account/dwdsInfo', {}, function (data) {
          $('#deposit2_value').prop("placeholder","范围  "+data.result.onlineMinAmount+"~"+data.result.onlineMaxAmount);
          $("#deposit2_value").removeAttr("disabled");
          _self.onlineMinAmount = data&&data.result&&data.result.onlineMinAmount;
          _self.onlineMaxAmount = data&&data.result&&data.result.onlineMaxAmount;
        },'get',function(data){
          //$(aa.target).parent().siblings("div").html(data.errorMsg);
        });
      },
      // userId
      getMemInfo: function () {
        var _self = this;
        common.ajax('tethys-user/user/menu/userInfo',
          {}, function (data) {
            _self.userId = data.result || '';
          });
      },
      // 银行类型
      getBankList: function () {
        var _self = this;
        common.ajax('tethys-user/user/account/onlineSave/bankList',
          {}, function (data) {
            var bank_result = data && data.result && data.result.list || [];
            _self.bankList = bank_result || [];
            // 选中第一个
            _self.$nextTick(function () {
              $('.bank_select').find('input[type="radio"]').eq(0).click();
            });
          }, 'post');
      },
      // 个人信息
      getPersonalInfo: function () {
        var _self = this;
        $('.icon_refresh_money,.icon_refresh').addClass('rotate');
        setTimeout(function () {
          $('.icon_refresh_money,.icon_refresh').removeClass('rotate');
        }, 2000);
        common.ajax('member/refresh',{}, function (data) {
          setTimeout(function(){
            $(".lone").removeClass("icon-refreshmyword_info");
          },600);
          _self.memberInfo = $.extend({}, data && data.result || {});
          _self.memberInfo.balance = data&&data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
          $("#mynew_balance").html(_self.memberInfo.balance);
          $(".balance").html(_self.memberInfo.balance);
          //$('.red-dot').text('').text(data.result.message);
          common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
        });
      },
      // 下一步
      nextStep: function () {
        var _self = this;
        if (!_self.saveInfo.saveCount || _self.saveInfo.saveCount === '' || _self.saveInfo.saveCount === '0' ||!(common.positiveNum(_self.saveInfo.saveCount))) {
          // _self.inputInfo.offerAmount = "";
          common.toast({content: '请输入正确的存入金额!', time: 3});
          return;
        }
        if(_self.inputInfo.error=="存款金额必须在范围内!"){
          //  _self.inputInfo.offerAmount = "";
          common.toast({content: '请输入正确的存入金额!', time: 3});
          return;
        }
        _self.$nextTick(function () {
          var ctx = $('.btn-apply.next-step');
          _self.showContent = false;
//          _self.goNext(ctx);
        });
      },
      // 下一步
//      goNext: function (ctx) {
//        var _self = this;
//        var current_fs = $(ctx).parent();
//        var next_fs = current_fs.next();
////        var left, opacity, scale;
////        next_fs.show();
////        current_fs.animate({opacity: 0}, {
////          step: function (now, mx) {
////            scale = 1 - (1 - now) * 0.2;
////            left = (now * 50) + "%";
////            opacity = 1 - now;
////            current_fs.css({'transform': 'scale(' + scale + ')'});
////            next_fs.css({'left': left, 'opacity': opacity});
////          },
////          duration: 800,
////          complete: function () {
////            current_fs.hide();
////          },
////          easing: 'easeInOutBack'
////        });
//      },
      // 获取优惠
      getOfferAmount: function () {
        var _self = this;
        //_self.inputInfo.offerAmount = '优惠计算中...';
        if (!_self.saveInfo.saveCount || _self.saveInfo.saveCount === '' ||!(common.positiveNum(_self.saveInfo.saveCount))) {
          _self.inputInfo.error = '请输入正确的金额！';
          //  _self.inputInfo.offerAmount = '';
          return;
        }
        if(_self.saveInfo.saveCount>_self.onlineMaxAmount||_self.saveInfo.saveCount<_self.onlineMinAmount){
          _self.inputInfo.error = '存款金额必须在范围内!';
          //  _self.inputInfo.offerAmount = "";
          _self.saveInfo.offerAmount = "";
        } else {
          _self.inputInfo.error = '';
          /*    common.ajax('tethys-user/user/account/onlineSave/preferentialInfo',{saveCount: _self.saveInfo.saveCount * 100}, function (data) {
              _self.inputInfo.offerAmount = data && data.result && data.result.OfferAmount / 100 || 0;
              _self.saveInfo.offerAmount = data && data.result && data.result.OfferAmount || 0;
              _self.saveInfo.preferentialCount = data && data.result && data.result.NeedBettAmount || 0;
              _self.saveInfo.isAddBett = data && data.result && data.result.IsAddBett || '';
              _self.saveInfo.offerType = data && data.result && data.result.OfferType || '';
              if(_self.inputInfo.error == '存款金额必须在范围内!'){
                  _self.inputInfo.offerAmount = "";
              }
          }, 'post');*/
        }
      },
      // 提交申请
      submitApply: function () {
        var _self = this;
        var para = $.extend({}, _self.saveInfo);
        console.log(para);
        if (!para.saveCount || para.saveCount === '' ||!(common.positiveNum(para.saveCount))) {
          // common.toast({content: '请输入正确的存款金额!', time: 3});
          _self.inputInfo.error = '请输入正确的存款金额!';
          return;
        }
        if(_self.inputInfo.error=="存款金额必须在范围内!"){
          _self.saveInfo.offerAmount = "";
          //  _self.inputInfo.offerAmount = "";
          return;
        }
        para.saveCount = para.saveCount * 100;
        if (!para.bankCode || para.bankCode == '') {
          common.toast({content: '请选择支付银行！', time: 4});
          return;
        }

        /* common.ajax('tethys-user/user/account/onlineSave/preferentialInfo',{saveCount: _self.saveInfo.saveCount * 100}, function (data) {
                 _self.inputInfo.offerAmount = data && data.result && data.result.OfferAmount / 100 || 0;
                 _self.saveInfo.offerAmount = data && data.result && data.result.OfferAmount || 0;
                 _self.saveInfo.preferentialCount = data && data.result && data.result.NeedBettAmount || 0;
                 _self.saveInfo.isAddBett = data && data.result && data.result.IsAddBett || '';
                 _self.saveInfo.offerType = data && data.result && data.result.OfferType || '';
                 if(_self.inputInfo.error == '存款金额必须在范围内!'){
                     _self.inputInfo.offerAmount = "";
                 }
             }, 'post');*/

        para.offerAmount = _self.saveInfo.offerAmount;

        var newTab = window.open('about:blank');
        if (_self.userId) {
          var url = '/form?method=post&action=tethys-user/user/account/onlineSave/' + _self.userId + '/applyView&params=' + encodeURIComponent($.param(para));
          setTimeout(function () {
              newTab.location.href = url;
            }, 300
          );
        } else {
          common.toast('出错了，请刷新页面重试！');
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

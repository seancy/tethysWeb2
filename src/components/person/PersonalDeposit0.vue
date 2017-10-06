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
            <li><a v-on:click="deposit_judge();" class="active"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a v-on:click="draw_judge()"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personalBettin"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personalFunds"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <div class="psn_wrap">
            <!--钱包秒充（3秒到账）-->
            <div class="psn_content">
              <div class="deposit_step">
                <ul>
                  <li class="active">选择支付方式并转账</li>
                  <li>填写转帐信息</li>
                  <li>提交信息</li>
                </ul>
              </div>
              <div class="deposit_wrap">
                <dl class="psn_info">
                  <dt><h3>钱包便捷支付信息</h3></dt>
                  <dd>
                    <div class="wallet_select">
                      <span class="label">选择支付方式：</span>
                      <template v-for="(bank,index) in bankList">
                        <label :for=" 'pay_' + [index]">
                          <input :title="bank.bankName" type="radio" :id=" 'pay_' + [index]" name="pay_wallet" :value="bank.bankType" :account="bank.bankAccount" :username="bank.bankUserName"  :bankcode="bank.bankCode">
                          <span :class="'icon_sprite icon_'+[index]"></span>{{bank.bankName}}
                        </label>
                      </template>
                      <label for="pay_zfb">
                        <input type="radio" id="pay_zfb" name="pay_wallet" checked @click="radioChoosed">
                        <span class="icon_sprite icon_wx"></span>微信支付
                      </label>
                      <label for="pay_wx">
                        <input type="radio" id="pay_wx" name="pay_wallet">
                        <span class="icon_sprite icon_zfb"></span>支付宝支付
                      </label>
                    </div>
                    <!--微信支付-->
                    <div class="wallet_content">
                      <template v-for="(bank ,index) in BankList">
                        <div class="qrcode">
                          <div class="img"><img :src="[photo_url+'/pic/'+bank.qrCode+'/0']" /></div>
                          <p>{{bank.bankUserName}}</p>
                          <p>微信账号 <br/> {{bank.bankAccount}}</p>
                        </div>
                      </template>
                      <div class="qrcode">
                        <div class="img"><img src="../../../static/images/qrcode.gif"></div>
                        <p>baliren01</p>
                        <p>微信账号<br />12345678</p>
                      </div>
                      <div class="info">
                        <div class="ani_pic"></div>
                        <p>为了保证转账精准快速，扫码进行支付的同时请在留言中输入您在本平台的<span class="color_red">会员账号</span>。</p>
                        <div class="tip">支付完成，点击下一步<br />填写转账信息</div>
                      </div>
                    </div><!--end 微信支付-->
                    <!--支付宝支付-->
                    <div class="wallet_content" style="display:block;">
                      <div class="qrcode">
                        <div class="img"><img src="../../../static/images/qrcode.gif"></div>
                        <p>baliren01</p>
                        <p>支付宝账号<br />12345678</p>
                      </div>
                      <div class="info">
                        <div class="pic"><img src="../../../static/images/zfb.png"></div>
                        <p>选择官方支付渠道，全面支持微信、支付宝扫码支付</p>
                        <p>扫码官方支付二维码，核对官方微信、支付宝名称，完成转账</p>
                        <div class="tip">支付完成，点击下一步<br />填写转账信息</div>
                      </div>
                    </div><!--end 支付宝支付-->
                  </dd>
                </dl>
                <div class="form_submit">
                  <a class="formBtn" href="personal-deposit1-2.html">下一步</a>
                </div>
              </div>
            </div><!--end 钱包秒充（3秒到账）-->
          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonalDeposit',
    data: function() {
      return {
        formatTime: common.formatTime,
        info: {
          username: '',
          balance: 0
        },
        applyTime: '',
        allBankList: [],
        selBank: {
          bankCode: '',
          bankUserName: '',
          bankAddress: '',
          bankAccount: ''
        },
        saveWays: {},
        selWay: '',
        saveObj: {
          saveCount: '',
          offerAmount: 0,
          preferentialCount: 0,
          isAddBett: '',
          offerType: '',
          userName: '',
          //  pro: '',
          city: '',
          town: ''
        },
        selBankCode: '',
        savedInfo: {},
        timer: null, // 输入节流
        inputInfo: {
          error: '',
          offerAmount: '',
          userNameError: ''
        },
        photo_url: '',
        money_range: '',
        maxMoney: '',
        minMoney: '',
        memberInfo: {},
        bankList: [],
        saveInfo: {
          bankCode: ''
        },
        qrcodeImg: '',
        temp_qrcodeImg1: '',
        temp_qrcodeImg2: '',
        weixin_content: '',
        taobau_content: '',
      }
    },
    created: function() {
      var _self = this;
      this.photo_url = common.photo_url;
      if (common.ifLanded()) {
        _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        _self.info.username = common.Cookie.get('userName') || '';
        //_self.getPersonalInfo();
        _self.getBankList();
        // _self.getAllBankList();
        // _self.getOwnerBank();
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
        });
      }
      common.ajax('cms/client/copyright/details', {
        code: "OC07"
      }, function(data) {
        if (data && data.apistatus == 1) {
          _self.weixin_content = data.result.content || '';
        }
      });
      common.ajax('cms/client/copyright/details', {
        code: "OC08"
      }, function(data) {
        if (data && data.apistatus == 1) {
          _self.taobau_content = data.result.content || '';
        }
      });
      this.getmoney_range();
    },
    filters: {
      balanceNo: function(value) {
        return common.FormatNumber.get(value);
      }
    },
    methods: {
      preCheck: function(type) {
        var _self = this;
        switch (type) {
          case 'saveCount':
            if (!common.positiveNum(_self.saveObj.saveCount)) {
              _self.inputInfo.error = '请输入正确的金额！';
            } else {
              _self.inputInfo.error = '';
            }
            break;
          case 'userName':
            if (!/^[a-zA-Z0-9]+$/.test(_self.saveObj.userName)) {
              _self.inputInfo.userNameError = '请输入正确的账号名称！';
            } else {
              _self.inputInfo.userNameError = '';
            }
            break;
          default:

        }
      },
      deposit_judge: function() {
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
        }, 'get', function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {
            setTimeout('common.logOut()', 1000);
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
        }, 'get', function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {
            common.logOut();
          }
        });
      },
      radioChoosed: function(aa) {
        var _self = this;
        if (aa.target.id == "pay_0") {
          $("#radioimg_deposit0 .pay_img:nth-child(1), .account_top .info:nth-child(1), .checked_account .info-list:nth-child(1), .checked_account_all .check_account:nth-child(1), .wx_intro").show();
          $("#radioimg_deposit0 .pay_img:nth-child(2), .account_top .info:nth-child(2), .checked_account .info-list:nth-child(2), .checked_account_all .check_account:nth-child(2), .zfb_intro").hide();
          $(".weixinzhanghao_class").show();
          $(".zhifubaozhanghao_class").hide();
        } else if (aa.target.id == "pay_1") {
          $("#radioimg_deposit0 .pay_img:nth-child(2), .account_top .info:nth-child(2),  .checked_account .info-list:nth-child(2), .checked_account_all .check_account:nth-child(2), .zfb_intro").show();
          $("#radioimg_deposit0 .pay_img:nth-child(1), .account_top .info:nth-child(1),  .checked_account .info-list:nth-child(1), .checked_account_all .check_account:nth-child(1), .wx_intro").hide();
          $(".weixinzhanghao_class").hide();
          $(".zhifubaozhanghao_class").show();
        }

      },
      getBankList: function() {
        var _self = this;
        common.ajax('tethys-user/user/account/walletSave/bankList', {}, function(data) {
          console.log(data);
          var bank_result = data && data.result && data.result.list || [];
          var bankListResult = bank_result || [];
          bankListResult[0].bankURL = "static/images/wx_logo.jpg";
          bankListResult[1].bankURL = "static/images/zfb_logo.jpg";
          _self.bankList = bankListResult;
          // console.log(_self.bankList);
          setTimeout(function() {
            $('#pay_0').trigger('click');
            $('#pay_0').prop('checked', 'checked');
          }, 100)

          //_self.temp_qrcodeImg1 = common.photo_url+"/pic/"+_self.bankList[0].qrCode+"/0";
          //_self.temp_qrcodeImg2 = common.photo_url+"/pic/"+_self.bankList[1].qrCode+"/0";

          /*_self.$nextTick(function(){
              setTimeout(function(){
                  //console.log($('#deposit0_paymethod').find('input[type="radio"]').length);
                  console.log($('#deposit0_paymethod').find('input[type="radio"]')[0].click());
                  // $('#deposit0_paymethod').find('input[type="radio"]')[0]&&$('#deposit0_paymethod').find('input[type="radio"]')[0].click();
              },300);
          });*/
          console.log(_self.bankList);
        }, 'post');
      },
      getmoney_range: function() {
        var _self = this;
        common.ajax('tethys-user/user/account/dwdsInfo', {}, function(data) {
          _self.maxMoney = data.result.companyMaxAmount;
          _self.minMoney = data.result.companyMinAmount;
          $('#money_range').prop("placeholder", "范围  " + data.result.companyMinAmount + "~" + data.result.companyMaxAmount);
        }, 'get', function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {
            setTimeout('common.logOut()', 1000);
          }
        });
      },
      // 银行类型
      getAllBankList: function() {
        var _self = this;
        common.ajax('tethys-user/user/account/saveApply/allBankList', {}, function(data) {
          var bank_result = data && data.result || [];
          _self.allBankList = bank_result || [];
          // 选中第一个
          _self.$nextTick(function() {
            $('.bank-select').find('input[type="radio"]')[0] && $('.bank-select').find('input[type="radio"]')[0].click();
          });
        }, 'post');
      },
      // 收款人银行信息
      getOwnerBank: function() {
        var _self = this;
        common.ajax('tethys-user/user/account/saveApply/bankList', {}, function(data) {
          //_self.selBank = data.result && data.result[0] || {};
          _self.selBank = data.result && data.result.list && data.result.list[0] || {};
          // console.log("*********")
          // console.log(_self.selBank);
          // console.log("*********")
        }, 'post');
      },
      // 个人信息
      getPersonalInfo: function() {
        var _self = this;
        $(".sone").click();
        $(".lone").removeClass("icon-refreshhover_lone");
        $(".lone").addClass("icon-refreshmyword_info");
        common.ajax('member/refresh', {}, function(data) {
          setTimeout(function() {
            $(".lone").removeClass("icon-refreshmyword_info");
          }, 600);
          _self.memberInfo = $.extend({}, data && data.result || {});

          $("#saveBalance").val(_self.memberInfo.balance);
          _self.memberInfo.balance = data && data.result.balance.toString().replace(/(\d{1,2})(?=(\d{3})+\.)/g, '$1,');
          $("#mynew_balance").html(_self.memberInfo.balance);
          $(".account-num").html(_self.memberInfo.balance);

          //$('.red-dot').text('').text(data.result.message);
          common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
        });
      },
      // 下一步
      nextStep: function() {
        var _self = this;
        _self.$nextTick(function() {
          var ctx = $('.btn-apply.next-step');
          _self.goNext(ctx);
          ctx.parents("#msform").find(".first-step").addClass("complete");
        });
        var save_method = $('.radio_input:checked').val();
        if (save_method == 3) {
          $(".zhifubao_class").hide();
          $(".weixin_class").show();
          $("#wx_or_zfbinput").attr("placeholder", "请输入您的微信账号");
        } else {
          $(".zhifubao_class").show();
          $(".weixin_class").hide();
          $("#wx_or_zfbinput").attr("placeholder", "请输入您的支付宝账号");
        }
      },
      // 下一步
      goNext: function(ctx) {
        var current_fs = $(ctx).parent();
        var next_fs = current_fs.next();
        var left, opacity, scale;
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({
          opacity: 0
        }, {
          step: function(now, mx) {
            scale = 1 - (1 - now) * 0.2;
            left = (now * 50) + "%";
            opacity = 1 - now;
            current_fs.css({
              'transform': 'scale(' + scale + ')'
            });
            next_fs.css({
              'left': left,
              'opacity': opacity
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
          },
          easing: 'easeInOutBack'
        });
      },
      // 关闭窗口
      closeWin: function() {
        window.location.href = "http://" + window.location.host;
      },
      // 获取优惠
      getOfferAmount: function() {
        var _self = this;
        _self.saveObj.saveCount = parseInt(_self.saveObj.saveCount, 10);

        if (!_self.saveObj.saveCount || _self.saveObj.saveCount === '' || !(common.positiveNum(_self.saveObj.saveCount))) {
          _self.inputInfo.error = '请输入正确的金额！';
          _self.inputInfo.offerAmount = "";
          _self.saveObj.saveCount = "";
          return;
        }
        if (_self.saveObj.saveCount > _self.maxMoney || _self.saveObj.saveCount < _self.minMoney) {
          _self.inputInfo.error = '存款金额必须在范围内!';
          // _self.saveObj.saveCount = "";
          _self.inputInfo.offerAmount = "";
          return;
        }
        _self.inputInfo.error = '';
        /*     _self.inputInfo.offerAmount = '优惠计算中...';
        common.ajax('tethys-user/user/account/saveApply/preferentialInfo',{saveCount: _self.saveObj.saveCount * 100}, function (data) {
            _self.inputInfo.offerAmount = data && data.result && data.result.OfferAmount / 100 || 0;
            _self.saveObj.offerAmount = data && data.result && data.result.OfferAmount || 0;
            _self.saveObj.preferentialCount = data && data.result && data.result.NeedBettAmount || 0;
            _self.saveObj.isAddBett = data && data.result && data.result.IsAddBett || '';
            _self.saveObj.offerType = data && data.result && data.result.OfferType || '';
        }, 'post',function(data){
            if(data.apistatus == '0' && data.errorCode == '1000020'){
            common.logOut();
        }
        });*/

      },
      // 提交申请
      submitApply: function() {
        var _self = this;
        $("#subApplyBtn").attr("disabled", "true"); //设置变灰按钮
        setTimeout("$('#subApplyBtn').removeAttr('disabled')", 2000); //设置2秒后提交按钮 显示

        /*  _self.inputInfo.offerAmount = '优惠计算中...';
         _self.saveObj.offerAmount = '优惠计算中...';*/

        // _self.saveObj.saveCount = parseInt(_self.saveObj.saveCount,10);
        var save_nethod = $('.radio_input:checked').val(); // 獲取type值
        var account = $('.radio_input:checked').attr('account');
        var username = $('.radio_input:checked').attr('username');
        var bankcode = $('.radio_input:checked').attr('bankcode');

        var balance = $('#mynew_balance').html().replace(/\,/ig, '');
        balance = Math.round(balance * 100);
        // console.log(account);
        var para = {
          saveCount: _self.saveObj.saveCount * 100,
          applyTime: new Date($('.Wdate').val()).getTime(),
          userName: _self.saveObj.userName,
          // address: (_self.saveObj.pro + _self.saveObj.city + _self.saveObj.town) || '',
          bankCode: 'ICBC', //先寫死，後面改
          accountNum: '', // 不处理，传空值
          saveMethod: save_nethod,
          ownerBankCode: bankcode,
          ownerUserName: username,
          ownerBankAddress: '浙江',
          ownerBankCard: account,
          balance: balance,
          //  offerAmount: _self.saveObj.offerAmount*100 || 0,
          preferentialCount: _self.saveObj.preferentialCount || 0,
          isAddBett: _self.saveObj.isAddBett || '',
          offerType: _self.saveObj.offerType || '',
        };

        if (!para.saveCount || para.saveCount === '0' || !common.positiveNum(para.saveCount) || !(common.positiveNum(_self.saveObj.saveCount))) {
          common.toast({
            content: '请输入正确的存入金额！',
            time: 4
          });
          return;
        }
        if (_self.inputInfo.error == '存款金额必须在范围内!') {
          common.toast({
            content: '存款金额必须在范围内!',
            time: 4
          });
          return;
        }
        if (!para.applyTime) {
          common.toast({
            content: '请输入正确的存入时间！',
            time: 4
          });
          return;
        }
        if (!para.userName) {
          common.toast({
            content: '请输入支付账号！',
            time: 4
          });
          return;
        }
        if (!para.saveMethod) {
          common.toast({
            content: '请选择存款方式！',
            time: 4
          });
          return;
        }
        var save_method = $('.radio_input:checked').val();
        if (save_method == 3) {
          if (!/^[a-zA-Z0-9]+$/.test(para.userName)) {
            common.toast({
              content: '请输入正确的微信账号！',
              time: 4
            });
            return;
          }
        } else {
          if (!/^[a-zA-Z0-9]+$/.test(para.userName)) {
            common.toast({
              content: '请输入正确的支付宝账号！',
              time: 4
            });
            return;
          }
        }

        $("#wx_or_zfbinput").attr("placeholder", "请输入您的支付宝账号");
        _self.applyTime = new Date(para.applyTime).getTime();

        /*  common.ajax_async('tethys-user/user/account/saveApply/preferentialInfo',{saveCount: _self.saveObj.saveCount * 100}, function (data) {
              _self.inputInfo.offerAmount = data && data.result && data.result.OfferAmount / 100 || 0;
              _self.saveObj.offerAmount = data && data.result && data.result.OfferAmount || 0;
              _self.saveObj.preferentialCount = data && data.result && data.result.NeedBettAmount || 0;
              _self.saveObj.isAddBett = data && data.result && data.result.IsAddBett || '';
              _self.saveObj.offerType = data && data.result && data.result.OfferType || '';
          }, 'post',function(){
              _self.inputInfo.offerAmount = "";
              _self.saveObj.offerAmount = "";
          });*/

        para.offerAmount = _self.saveObj.offerAmount;
        common.ajax('tethys-user/user/account/saveApply/applyView', para, function(data) {
          _self.savedInfo = data && data.result || {};
          _self.$nextTick(function() {
            var ctx = $('.btn-apply.submit-apply');
            _self.goNext(ctx);
            ctx.parents("#msform").find(".sec-step").addClass("complete");
          });
        }, 'get', function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {
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

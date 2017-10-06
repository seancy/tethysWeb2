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
            <!--银行转帐-->
            <div class="psn_content">
              <div class="deposit_step">
                <ul>
                  <li class="active">选择银行</li>
                  <li>填写转帐信息</li>
                  <li>信息提交完成</li>
                </ul>
              </div>
              <div class="deposit_wrap">
                <dl class="psn_info">
                  <dt><h3>选择支付银行</h3></dt>
                  <dd>
                    <div class="bank_select">
                      <label for="bank_0"><input type="radio" id="bank_0" name="bankgroup" value="ICBC" checked><img src="../../../static/images/bank/ICBC.png">工商银行</label>
                      <label for="bank_1"><input type="radio" id="bank_1" name="bankgroup" value="ABC"><img src="../../../static/images/bank/ABC.png">农业银行</label>
                      <label for="bank_2"><input type="radio" id="bank_2" name="bankgroup" value="CCB"><img src="../../../static/images/bank/CCB.png">建设银行</label>
                      <label for="bank_3"><input type="radio" id="bank_3" name="bankgroup" value="BCOM"><img src="../../../static/images/bank/BCOM.png">交通银行</label>
                      <label for="bank_4"><input type="radio" id="bank_4" name="bankgroup" value="BOC"><img src="../../../static/images/bank/BOC.png">中国银行</label>
                      <label for="bank_5"><input type="radio" id="bank_5" name="bankgroup" value="CMB"><img src="../../../static/images/bank/CMB.png">招商银行</label>
                      <label for="bank_6"><input type="radio" id="bank_6" name="bankgroup" value="CMBC"><img src="../../../static/images/bank/CMBC.png">民生银行</label>
                      <label for="bank_7"><input type="radio" id="bank_7" name="bankgroup" value="CEBB"><img src="../../../static/images/bank/CEBB.png">光大银行</label>
                      <label for="bank_8"><input type="radio" id="bank_8" name="bankgroup" value="BOB"><img src="../../../static/images/bank/BOB.png">北京银行</label>
                      <label for="bank_9"><input type="radio" id="bank_9" name="bankgroup" value="SHB"><img src="../../../static/images/bank/SHB.png">上海银行</label>
                      <label for="bank_10"><input type="radio" id="bank_10" name="bankgroup" value="NBB"><img src="../../../static/images/bank/NBB.png">宁波银行</label>
                      <label for="bank_11"><input type="radio" id="bank_11" name="bankgroup" value="HXB"><img src="../../../static/images/bank/HXB.png">华夏银行</label>
                      <label for="bank_12"><input type="radio" id="bank_12" name="bankgroup" value="CIB"><img src="../../../static/images/bank/CIB.png">兴业银行</label>
                      <label for="bank_13"><input type="radio" id="bank_13" name="bankgroup" value="PSBC"><img src="../../../static/images/bank/PSBC.png">中国邮政银行</label>
                      <label for="bank_14"><input type="radio" id="bank_14" name="bankgroup" value="SPABNK"><img src="../../../static/images/bank/SPABNK.png">平安银行</label>
                      <label for="bank_15"><input type="radio" id="bank_15" name="bankgroup" value="SPDB"><img src="../../../static/images/bank/SPDB.png">浦发银行</label>
                      <label for="bank_16"><input type="radio" id="bank_16" name="bankgroup" value="ECITIC"><img src="../../../static/images/bank/ECITIC.png">中信银行</label>
                      <label for="bank_17"><input type="radio" id="bank_17" name="bankgroup" value="HZB"><img src="../../../static/images/bank/HZB.png">杭州银行</label>
                      <label for="bank_18"><input type="radio" id="bank_18" name="bankgroup" value="GDB"><img src="../../../static/images/bank/GDB.png">广发银行</label>
                      <label for="bank_19"><input type="radio" id="bank_19" name="bankgroup" value="QQ_SCAN"><img src="../../../static/images/bank/QQ_SCAN.png">QQ</label>
                    </div>
                  </dd>
                </dl>
                <div class="deposit_msg">
                  <h3>特别说明</h3>
                  <p>1. 每次存款前，请先至本页面查看最新的收款账户。请勿自行存款至旧账户，若存款至旧账户，本公司将无法查收，恕不负责。</p>
                  <p>2. 请尽量选择同行存款，如跨行请进行加急，方便系统加快您的入款速度。</p>
                </div>
                <div class="form_submit">
                  <a class="formBtn" href="personal-deposit2-2.html">下一步</a>
                </div>
              </div>
            </div><!--end 银行转帐-->
          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Deposit',
    data: function() {
      return {
        formatTime: common.formatTime,
        info: {
          username: '',
          balance: 0
        },
        allBankList: [],
        selBank: {
          bankCode: '',
          bankUserName: '',
          bankAddress: '',
          bankAccount: ''
        },
        saveWays: {},
        selWay: '',
        applyTime: '',
        saveObj: {
          saveCount: '',
          offerAmount: 0,
          preferentialCount: 0,
          isAddBett: '',
          offerType: '',
          userName: '',
          pro: '',
          city: '',
          town: ''
        },
        selBankCode: '',

        savedInfo: {},

        timer: null, // 输入节流
        inputInfo: {
          error: '',
          usernameerror: ''
          // offerAmount: ''
        },
        photo_url: '',
        money_range: '',
        maxMoney: '',
        minMoney: '',
        memberInfo: {},
        choose_bank_content: '',
        success_bank_content: '',
      }
    },
    created: function() {
      var _self = this;
      this.photo_url = common.photo_url;
      if (common.ifLanded()) {
        _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        _self.info.username = common.Cookie.get('userName') || '';
        //_self.getPersonalInfo();
        _self.getAllBankList();
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

      _self.$nextTick(function() {
        var btns = document.querySelectorAll('.copy_txt');
        var clipboard = new Clipboard(btns);
        clipboard.on('success', function(e) {
          common.toast({
            content: '复制成功!',
            time: 3
          });
          // console.log(e);
        });
        clipboard.on('error', function(e) {
          common.toast({
            content: '复制失败!',
            time: 3
          });
          // console.log(e);
        });
        common.ajax('cms/client/copyright/details', {
          code: "OC05"
        }, function(data) {
          if (data && data.apistatus == 1) {
            _self.choose_bank_content = data.result.content || '';
          }
        });
        common.ajax('cms/client/copyright/details', {
          code: "OC06"
        }, function(data) {
          if (data && data.apistatus == 1) {
            _self.success_bank_content = data.result.content || '';
          }
        });
      });
      this.getmoney_range();
    },
    filters: {
      balanceNo: function(value) {
        return common.FormatNumber.get(value);
      }
    },
    methods: {
      deposit_judge: function() {
        common.ajax('tethys-user/user/menu/level/auth', {}, function(data) {
          if (data && data.apistatus == 1) {
            if (data && data.result == 0) { // 1锁定 0 非锁定
              location.href = "deposit";
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
              location.href = "callin";
            } else {
              common.toast({
                content: '当前无法操作，请联系客服',
                time: 3
              });
            }
          }
        }, 'get', function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {

            common.toast({
              content: '会员未登录！',
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
          _self.maxMoney = data.result.companyMaxAmount;
          _self.minMoney = data.result.companyMinAmount;

          $('#money_range').prop("placeholder", "范围  " + data.result.companyMinAmount + "~" + data.result.companyMaxAmount);
        }, 'get', function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {

            common.toast({
              content: '会员未登录！',
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
      // 银行类型
      getAllBankList: function() {
        var _self = this;
        common.ajax('tethys-user/user/account/saveApply/allBankList', {}, function(data) {
          var bank_result = data && data.result || [];
          _self.allBankList = bank_result || [];
          // 选中第一个
          _self.$nextTick(function() {
            $('.bank-select').find('input[type="radio"]')[0].click();
          });
        }, 'post');
      },
      // 收款人银行信息
      getOwnerBank: function() {
        var _self = this;
        common.ajax('tethys-user/user/account/saveApply/bankList', {
          bankCode: _self.selBankCode
        }, function(data) {
          //_self.selBank = data.result && data.result[0] || {};
          _self.selBank = data.result && data.result.list && data.result.list[0] || {};
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
        if (_self.selBankCode === '') {
          common.toast({
            content: '请先选择银行!'
          });
          return;
        }
        _self.getOwnerBank();
        // _self.selBank = _self.allBankList[_self.selBankCode] || {};
        // 支付方式
        common.ajax('tethys-user/user/menu/payMethodList', {}, function(data) {
          _self.saveWays = data && data.result || {};
          // 选中第一个
          _self.$nextTick(function() {
            $('.save-way').find('input[type="radio"]')[0].click();
          });
        }, 'post');
        _self.$nextTick(function() {
          var ctx = $('.btn-apply.next-step');
          _self.goNext(ctx);
          ctx.parents("#msform").find(".first-step").addClass("complete");
        });
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
      // 檢查存款人
      getUserName: function() {
        var _self = this;
        if (!_self.saveObj.userName || _self.saveObj.userName === '' || !common.trueName(_self.saveObj.userName)) {
          _self.inputInfo.usernameerror = '请输入正确的存款人姓名！';
          return;
        }
        _self.inputInfo.usernameerror = '';
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
          // common.toast({content:'取款金额必须在范围内!',time:3});
          _self.inputInfo.error = '存款金额必须在范围内!';
          // _self.saveObj.saveCount = "";
          _self.inputInfo.offerAmount = "";
          return;
        }
        _self.inputInfo.error = '';
        /*    _self.inputInfo.offerAmount = '优惠计算中...';
        common.ajax('tethys-user/user/account/saveApply/preferentialInfo',{saveCount: _self.saveObj.saveCount * 100}, function (data) {
            _self.inputInfo.offerAmount = data && data.result && data.result.OfferAmount / 100 || 0;
            _self.saveObj.offerAmount = data && data.result && data.result.OfferAmount || 0;
            _self.saveObj.preferentialCount = data && data.result && data.result.NeedBettAmount || 0;
            _self.saveObj.isAddBett = data && data.result && data.result.IsAddBett || '';
            _self.saveObj.offerType = data && data.result && data.result.OfferType || '';
        }, 'post', function(data){
                if(data.apistatus == '0' && data.errorCode == '1000020'){

                common.toast({content: '会员未登录！', time: 1});

                setTimeout( 'common.logOut()',1000);

            }
                if(data.errorCode == '1000003'){
                common.toast({content: '该会员已被停用！', time: 1});
                setTimeout( 'common.logOut()',1000);
            }
            });*/
      },
      // 提交申请
      submitApply: function() {
        var _self = this;
        $("#subApplyBtn").attr("disabled", "true"); //设置变灰按钮
        setTimeout("$('#subApplyBtn').removeAttr('disabled')", 2000); //设置2秒后提交按钮 显示

        // _self.inputInfo.offerAmount = '优惠计算中...';
        //_self.saveObj.offerAmount = '优惠计算中...';
        if (_self.selBank.bankCode == undefined || _self.selBank.bankUserName == undefined || _self.selBank.bankAddress == undefined || _self.selBank.bankAccount == undefined || _self.selBank.bankCode == "" || _self.selBank.bankUserName == "" || _self.selBank.bankAddress == "" || _self.selBank.bankAccount == "") {
          common.toast({
            content: '银行名称、收款人、开户行、账号都不能为空',
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
        var balance = $('#mynew_balance').html().replace(/\,/ig, '');
        balance = Math.round(balance * 100);
        // _self.saveObj.saveCount = parseInt(_self.saveObj.saveCount,10);
        var para = {
          saveCount: _self.saveObj.saveCount * 100,
          applyTime: new Date($('.Wdate').val()).getTime(),
          userName: _self.saveObj.userName,
          address: (_self.saveObj.pro + _self.saveObj.city + _self.saveObj.town) || '',
          bankCode: _self.selBankCode,
          accountNum: '', // 不处理，传空值
          saveMethod: _self.selWay.replace('save_', ''),
          ownerBankCode: _self.selBank.bankCode,
          ownerUserName: _self.selBank.bankUserName,
          balance: balance,
          ownerBankAddress: _self.selBank.bankAddress,
          ownerBankCard: _self.selBank.bankAccount,
          ownerBankName: _self.selBank.bankName,
          // offerAmount: _self.saveObj.offerAmount*100 || 0,
          preferentialCount: _self.saveObj.preferentialCount || 0,
          isAddBett: _self.saveObj.isAddBett || '',
          offerType: _self.saveObj.offerType || '',
        };
        var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        if (!para.saveCount || para.saveCount === '0' || !(reg.test(para.saveCount)) || !(common.positiveNum(_self.saveObj.saveCount))) {
          common.toast({
            content: '请输入正确的存入金额！',
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
            content: '请输入存款人姓名！',
            time: 4
          });
          return;
        }
        else if (!common.trueName(para.userName)) {
          common.toast({
            content: '请输入正确的存款人姓名！',
            time: 4
          });
          return;
        }
        // console.log(para.saveMethod)
        if (!para.saveMethod) {
          common.toast({
            content: '请选择存款方式！',
            time: 4
          });
          return;
        }
        _self.applyTime = new Date(para.applyTime).getTime();
        if ([4, 5, 6, '4', '5', '6'].indexOf(para.saveMethod) > -1) {
          if (!_self.saveObj.pro || _self.saveObj.pro == '' || !_self.saveObj.city || _self.saveObj.city == '' || !_self.saveObj.town || _self.saveObj.town == '') {
            common.toast({
              content: '请输入正确的ATM所属分行！',
              time: 4
            });
            return;
          }
          if(!common.trueName(_self.saveObj.pro)) {
            common.toast({
              content: '请输入正确的ATM所在省份！',
              time: 4
            });
            return;
          }
          if(!common.trueName(_self.saveObj.city)) {
            common.toast({
              content: '请输入正确的ATM所在市(县)！',
              time: 4
            });
            return;
          }
          if(!common.trueName(_self.saveObj.town)) {
            common.toast({
              content: '请输入正确的ATM所在区！',
              time: 4
            });
            return;
          }
        }


        // if(_self.inputInfo.offerAmount == '优惠计算中...'||_self.saveObj.offerAmount == '优惠计算中...'){
        //common.toast({content: '充值金额超出范围，请重新输入！', time: 4});
        //return;

        /*   common.ajax_async('tethys-user/user/account/saveApply/preferentialInfo',{saveCount: _self.saveObj.saveCount * 100}, function (data) {
               _self.inputInfo.offerAmount = data && data.result && data.result.OfferAmount / 100 || 0;
               _self.saveObj.offerAmount = data && data.result && data.result.OfferAmount || 0;
               _self.saveObj.preferentialCount = data && data.result && data.result.NeedBettAmount || 0;
               _self.saveObj.isAddBett = data && data.result && data.result.IsAddBett || '';
               _self.saveObj.offerType = data && data.result && data.result.OfferType || '';
           }, 'post',function(data){
               _self.inputInfo.offerAmount = "";
               _self.saveObj.offerAmount = "";



               if(data.apistatus == '0' && data.errorCode == '1000020'){

               common.toast({content: '会员未登录！', time: 1});
               setTimeout( 'common.logOut()',1000);
           }
               if(data.errorCode == '1000003'){
               common.toast({content: '该会员已被停用！', time: 1});
               setTimeout( 'common.logOut()',1000);
           }
           });*/

        // }

        para.offerAmount = _self.saveObj.offerAmount;
        common.ajax('tethys-user/user/account/saveApply/applyView', para, function(data) {
          _self.savedInfo = data && data.result || {};
          _self.$nextTick(function() {
            var ctx = $('.btn-apply.submit-apply');
            _self.goNext(ctx);
            ctx.parents("#msform").find(".sec-step").addClass("complete");
          });
        }, 'post', function(data) {
          if (data.apistatus == '0' && data.errorCode == '1000020') {

            common.toast({
              content: '会员未登录！',
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

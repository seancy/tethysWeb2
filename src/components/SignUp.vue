<template>
  <div class="personal_box" id="sing-up">
    <div class="contain_width">
      <h2 class="personal_title"></h2>
    </div>
    <div class="contain_width">
      <!--左侧选单-->
      <div class="left_menu">
        <ul class="psn_menu" id="footer_menu">
          <template v-for="(item,key) in menu.list">
            <li>
              <a :href="'/about?id='+item.code" ><span
                    class="icon_sprite icon_about" :class="'icon icon-'+[key+1]"></span>{{ item.title }}
              </a>
            </li>
          </template>
        </ul>
      </div>
      <!--end 左侧选单-->
      <!--右侧内容-->
      <div class="right_main">
        <div class="psn_wrap">
          <!--会员注册-->
          <div class="psn_content">
            <form id="form_sign">
              <dl class="psn_info">
                <dt><h3>欢迎注册澳门金沙赌场</h3></dt>
                <dd>
                  <ul class="join_list" v-html="registerInfo.top.content||''">
                    <!--<li>注册即送<span class="color_orange">18元</span>，赶紧领取您的第一桶金吧！2333333333</li>-->
                    <!--<li>MG独家巨献，<span class="color_orange">天天返水3.8%无上限！</span>电子游艺10+2部曲火热进行中！</li>-->
                    <!--<li>24小时提款0审核0冻结0手续费不限提款次数，存取款0-5分钟火速到账！</li>-->
                    <!--<li>1元即可存取款，全面支持<span class="color_orange">支付宝、微信、手机银行转账、信用卡、银联在线支付</span>全程担保！</li>-->
                  </ul>
                  <ul class="style_item">
                    <li v-for="conf in registerConfig">
                      <div v-if="conf.fieldCode && conf.fieldCode!=='bank'">
                          <span class="label">{{conf.fieldName}}<span class="color_red"
                                                                      v-if="conf.isRequired === 1">※</span></span>
                        <span class="form" v-if="conf.fieldCode == 'username'">
                            <input autocomplete="off" class="formInput"
                                   :placeholder="placeholders[conf.fieldCode]" :type="types[conf.fieldCode]"
                                   :id="conf.fieldCode" :name="conf.fieldCode" v-on:blur="verify_agentName">
                          </span>
                        <span class="form" v-else>
                            <input autocomplete="off" class="formInput"
                                   :placeholder="placeholders[conf.fieldCode]" :type="types[conf.fieldCode]"
                                   :id="conf.fieldCode" :name="conf.fieldCode">
                          </span>
                        <span class="ui_error">{{extInfo[conf.fieldCode] || ''}}</span>
                      </div>
                      <div v-else="conf.fieldCode && conf.fieldCode=='bank'">
                        <span class="label">银行名称<span class="color_red" v-if="conf.isRequired === 1">※</span></span>
                        <span class="form formSelect_wrap">
                            <select :data-required="conf.isRequired" name="bank" id="bankSelect" v-model="bankInfo.bankCode" class="formSelect"
                                    @change="handleEnter('bankSelect')">
                              <option value="">请选择银行</option>
                              <option v-for="(bank,index) in bankList" :value="bank.bankCode">
                                  {{bank.bankName}}
                              </option>
                            </select>
                        </span>
                        <span class="ui_error">

                        </span>
                      </div>
                    </li>
                    <li>
                      <span class="label">币种<span class="color_red">※</span></span>
                      <span class="form formSelect_wrap">
                             <select class="formSelect" id="coin" name="coin" v-model="sign.coin">
                                        <option value="CNY">人民币CNY</option>
                              </select>
                        </span>
                      <span class="ui_error">

                        </span>
                    </li>
                    <li>
                      <span class="label">验证码<span class="color_red">※</span></span>
                      <span class="form">
                      <input type="text" class="formInput" id="code" name="code"
                             placeholder="请输入验证码" style="width:96px; " @keypress="handleEnter('code')">
                      <img :src="verImgCode" @click="getCode" alt="" style="height: 100%">
                      <a href="javascript:;" class="icon_sprite icon_refresh" @click="getCode"></a>
                      </span>
                      <span class="ui_error"><!--<span class="icon_sprite icon_ok"></span>--></span>

                    </li>
                  </ul>
                  <div class="sing-up_msg_plus">
                    <input type="checkbox" checked id="agree" name="agree" v-model="allowChecked"/>
                    <label for="agree">我已届满合法博彩年龄，且已阅读并同意</label><a href="javascript:;" @click="changeDuty();">开户协议</a>
                  </div>
                </dd>
              </dl>
              <div class="sing-up_msg" v-html="registerInfo.bottom.content ||''">
                <h3>备注：</h3>
                <p>1. 标记有<span class="color_red"> * </span>者为必填项目。</p>
                <p>2. 准确填写存入金额、存入时间，并输入您的微信账号，完成上述信息的录入。</p>
              </div>
              <div class="form_submit">
                <a class="formBtn modalBtn" @click="JqValidate">立即注册</a> <!-- href="#modalSuccess" -->
                <!--注册成功讯息-->
                <div id="modalSuccess" data-height="215" style="display:none;">
                  <div class="modalIcon"><span class="icon_sprite icon_success_big"></span></div>
                  <h2>您的代理注册申请已成功提交!</h2>
                  <p>请耐心等待我们的客服联系您并协助您完成代理申请，谢谢！</p>
                </div><!--end 注册成功讯息-->
              </div>
            </form>
          </div><!--end 会员注册-->
        </div>
      </div>
      <!--end 右侧内容-->
    </div>
  </div>
</template>


<script>
  /* eslint-disable quotes,no-undef */
  // 回车事件监听
  window.loaded = function () {
    document.onkeydown = function (e) {
      var ev = document.all ? window.event : e
      if (ev.keyCode === 13) {
      }
    }
  }

  var md5 = require('../../static/vendor/md5.js')

  export default {
    name: 'SignUp',
    data: function () {
      return {
        verImgCode: '',
        allowChecked: true,
        menu: [],
        registerInfo: {
          "top": {
            "content": ""
          },
          "bottom": {
            "content": ""
          }
        },
        registerConfig: [],
        sign: {
          coin: 'CNY'
        },
        bankInfo: {
          bankCode: ''
        },
        bankList: [],
        rules: common.regConfig.rules,
        placeholders: common.regConfig.placeholders,
        types: common.regConfig.types,
        extInfo: common.regConfig.extInfo
      }
    },
    created: function () {
      this.menu = common.Cookie.get('LeftMenu') && JSON.parse(common.Cookie.get('LeftMenu')) || []
      this.registerInfo = common.Cookie.get('registerInfo') && JSON.parse(common.Cookie.get('registerInfo')) || {
        "top": {"content": ""},
        "bottom": {"content": ""}
      }
      this.registerConfig = common.Cookie.get('getRegisterConfig') && JSON.parse(common.Cookie.get('getRegisterConfig')) || []
      this.getLeftMenu()
      this.getRegisterInfo()
      this.getRegisterConfig()
      this.getCode()
      this.getBankList()
    },
    mounted: function () {
      var _self = this
      $('.loginbar_inline').css("display", "none")
      $(document).unbind('keydown')
      $(document).on("keydown", function (e) {
        if (e.keyCode === 13) {
          _self.JqValidate()
        }
      })
    },
    methods: {
      handleEnter: function (id) {
        let _self = this
        let el = $('#' + id)
        let val = el && el[0].value || ''
        switch (id) {
          case 'code':
            if (el.hasClass('error')) {
              el.removeClass('error')
            }
            break;
          case 'bankSelect':
            if (val !== '') {
              el.removeClass('error').css("color", "black").parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
            } else {
              el.addClass("error").css("color", "#ab3314").parent('div').next().html('请选择银行').addClass("red")
            }
            break
          default:
        }
      },

      getBankList: function () {
        var _self = this
        common.ajax('tethys-user/user/account/bankList', {}, function (data) {

          _self.bankList = data && data.result || []
        }, 'post')
      },
      verify_agentName: function (aa) { //用户名验证
        var _self = this
        if (aa.target.id === "username") {

          var el = aa.target
          var val = el && el.value || ''
          if (val === '' || val === ' ' || val.length === 0) {
            $(el).addClass("error").parent().next().html('用户名不能为空')
            return
          }
          if (!common.positiveEngNum(val) || val.length < 4 || val.length > 15) {
            $(el).addClass("error").parent().next().html('请输入4-15位英文与数字').addClass("red");
            return
          }

          common.ajax('member/username/check', {
            username: $(aa.target).val()
          }, function (data) {
            if (data && data.result) {
              if (data.apistatus === 1) {
               // $(aa.target).removeClass("error").parent('span').siblings("span").html('<span class="icon_ok"></span>').removeClass("red");
                $(aa.target).removeClass("error").parent('span').siblings().removeClass("red");
              }
            }
          }, 'get', function (data) {
            $(aa.target).addClass("error").parent('span').siblings("span.ui_error").html(data.errorMsg).addClass("red");
          })
        }
      },
      changeDuty: function () {
        var _self = this
        common.ajax(
          'cms/client/copyright/details', {
            code: 'RC03'
          },
          function (data) {
            if (data && data.result) {
              var ct = ''
              //console.log(data.result);
              if (data.result.content != null) {
                ct = data.result.content
              }


              common.$message({
                title: '开户协议',
                content: ct,
                ok: '同意',
                cancel: '不同意',
                okcb: function () {
                  $("#agree").prop("checked", true)
                },
                ccb: function () {
                  $("#agree").prop("checked", false)
                },
                style: {
                  'max-width': '600px',
                  'overflow-y': 'auto',
                  'height': '600px'
                }
              })
            }
          })
      },
      getLeftMenu: function () {
        var _self = this
        common.ajax('cms/client/copyright/list', {}, function (data) {
          _self.menu = data && data.result || [];
          common.Cookie.set('LeftMenu', JSON.stringify(_self.menu));
        });
      },
      getRegisterInfo: function () {
        var _self = this;
        common.ajax('cms/client/copyright/register', {}, function (data) {
          _self.registerInfo = data && data.result || {"top": {"content": ""}, "bottom": {"content": ""}}
          _self.registerInfo.top = _self.registerInfo.top || {"content": ""}
          _self.registerInfo.bottom = _self.registerInfo.bottom || {"content": ""}
          common.Cookie.set('registerInfo', JSON.stringify(_self.registerInfo))
        });
      },
      getRegisterConfig: function () {
        var _self = this;
        common.ajax('config/client/register/list', {
          type: 1
        }, function (data) {
          _self.registerConfig = data && data.result || [];
          for (var i = 0; i < _self.registerConfig.length; i++) {
            if (_self.rules[_self.registerConfig[i].fieldCode] && _self.registerConfig[i].isRequired === 1) {
              _self.rules[_self.registerConfig[i].fieldCode].required = true;
            }
          }
          common.Cookie.set('registerConfig', JSON.stringify(_self.registerConfig));
          _self.$nextTick(function () { // 注册验证
            common.checkReg();
          });
        });
      },
      getCode: function () {
        var _self = this;
        common.ajax('member/code/get', {
          width: 112,
          height: 37
        }, function (data) {
          common.Cookie.set('clientId', data.result && data.result.clientId || '')
          _self.verImgCode = data.result && 'data:image/png;base64,' + data.result.code || ''
        })
      },
      checkReg: function (id, flag, isRequired) {
        var _self = this
        var el = $('#' + id)
        var val = ''
        var strength = ''
        switch (id) {
          case 'username':
            val = el && el[0].value || '';
            if (val === '' || val === ' ' || val.length === 0) {
              if (isRequired === 0) {
                $(el).removeClass('error').parent().next().html('').removeClass('red')
              } else {
                $(el).addClass("error").parent().next().html('用户名不能为空').addClass("red")
              }
            } else if (!common.positiveEngNum(val) || val.length < 4 || val.length > 15) {
              $(el).addClass("error").parent().next().html('请输入4-15位英文与数字').addClass("red")
            } else {
              common.ajax('member/username/check', {
                username: val
              }, function (data) {
                if (data && data.result) {
                  if (data.apistatus === 1) {
                   // $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
                    $(el).removeClass("error").parent().next().removeClass('red');
                  } else {
                    $(el).addClass("error").parent('span').siblings("span.ui_error").html(data.errorMsg).addClass("red");
                    _self.getCode()
                  }
                }
              }, 'get', function (data) {
                //  $(el).addClass("error").parent('div').siblings("div").html(data.errorMsg).addClass("red");
                $(el).addClass("error").parent('span').siblings("span.ui_error").html(data.errorMsg).addClass("red");
              })
            }
            break
          case 'password':
            val = el && el[0].value || ''
            if (val === '' || val === ' ' || val.length === 0) {
              if (isRequired === 0) {
                $(el).removeClass("error").parent('div').next().html('').removeClass("red")
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red")
              }
            } else if (val === $('#username').val()) {
              $(el).addClass("error").parent().next().html('与用户名重复').addClass("red")
            } else if (!common.positiveEngNum(val) || val.length < 6 || val.length > 20) {
              $(el).addClass("error").parent().next().html('请输入6-20位英文与数字').addClass("red");
            } else {
              strength = val.length <= 9 ? '低' : val.length >= 13 ? '高' : '中';
              $(el).removeClass('error').parent('div').next().html('<span class="icon_ok"></span>  密码强度：' + strength).removeClass('red');
            }
            break;
          // case 'retryPasswd':
          case 'confirmPassword':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (val != $('#password').val()) {
              $(el).addClass("error").parent().next().html('确认密码错误，请重新输入').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'paymentPassword':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (!common.checkNumber(val) || val.length < 4 || val.length > 4) {
              $(el).addClass("error").parent().next().html('请输入四位数字').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'realname':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (!common.trueName(val)) {
             // $(el).addClass("error").parent().next().html('必须与银行帐户名称相同，否则不能出款！');
            } else if (val.length < 2) {
              $(el).addClass("error").parent().next().html('请至少输入2个字').addClass("red");
            } else if (val.length > 5) {
              $(el).addClass("error").parent().next().html('请最多输入5个字').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'bankCardNo':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (!common.positiveNum(val) || val.length < 15 || val.length > 20) {
              $(el).addClass("error").parent().next().html('请输入15-20位银行账号').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'bankDeposit':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('请输入开户行地址').addClass("red");
              }
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'telephone':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (!common.phoneNum(val) || val.length < 11 || val.length > 11) {
              $(el).addClass("error").parent().next().html('请输入您的手机号').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'email':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (!common.checkEmail(val)) {
              $(el).addClass("error").parent().next().html('请输入您的邮箱').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'weixin':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (!common.checkWechat(val)) {
              $(el).addClass("error").parent().next().html('请输入您的微信帐号').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'qq':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $(el).addClass("error").parent().next().html('该项不能为空').addClass("red");
              }
            } else if (!common.checkqq(val)) {
              $(el).addClass("error").parent().next().html('请输入您的QQ帐号').addClass("red");
            } else {
              $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'bank':
            val = $('#bankSelect') && $('#bankSelect')[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $('#bankSelect').removeClass('error').parent('div').next().html('').removeClass('red');
              } else {
                $('#bankSelect').addClass("error").parent().next().html('请选择银行').addClass("red");
              }
            } else {
              $('#bankSelect').removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            break;
          case 'code':
            val = el && el[0].value || '';
            if (val == '' || val == ' ' || val.length == 0) {
              if (isRequired == 0) {
                $(el).removeClass('error').parent().next().html('').removeClass('red');
              } else {

                $(el).addClass('error').parent().next().html('请输入验证码').addClass("red") ;
              }
            } else if (flag) {

              $(el).addClass('error').parent().next().html('验证码错误').addClass('red');
            } else {
              $(el).removeClass('error').parent().next().html('').removeClass('red');
            }
            break;
          default:

        }
      },
      JqValidate: function () {

        var _self = this;
        var param = {};
        let warnData = _self.registerConfig;
        let len = warnData.length;
        for (let i = 0; i < len; i++) {
          _self.checkReg(warnData[i].fieldCode, false, (warnData[i].isRequired || 0))
        }
        _self.checkReg('code');

        setTimeout(function () {
          let warnDataa = $('.mem_reg_sm.red').parent();
          if (warnDataa.length > 0) {
            $('#' + warnDataa[0].childNodes[2].childNodes[0].id).focus();
          }
        }, 50) ;
      /*  return $("#form_sign").validate({
          submitHandler: function () {*/
            var ipts = $('#form_sign').find('input[type!="hidden"]');
            for (var i = 0; i < ipts.length; i++) {
              if ('agree' != ipts[i].name) {
                param[ipts[i].name] = ipts[i].type === 'password' ? md5(ipts[i].value) : ipts[i].value;
              }
            }

            if (($("#password").val() != $("#confirmPassword").val())) {
              common.toast({
                content: '登录密码和确认登录密码不一致!',
                time: 3
              });
              return false;
            }
          if (!_self.allowChecked) {
              common.toast({
                  content: '请同意开户协定并勾选!',
                  time: 3
              });
              return false;
          }
            var bankName = $("#bankSelect").find("option:selected") && $("#bankSelect").find("option:selected").text();
          if(bankName =='请选择银行'){
              param.bank = ''; //银行名称
          }else{
              param.bank = $.trim(bankName); //银行名称
          }

            param.bankCode = _self.bankInfo.bankCode;
            param.coin = _self.sign.coin || '';
            if (typeof(nvitationCode) == 'object') {
              param.proCode = "";
            } else {
              param.proCode = invitationCode;
            }
            var mem_flage = $('.ui_error').hasClass('red');
            if (!mem_flage) {
              let el = $('#username');
              let val = el && el[0].value;
              common.ajax('member/username/check', {
                username: val
              }, function (data) {
                if (data && data.result) {
                  if (data.apistatus === 1) {
                    el.removeClass("error").parent().siblings().html("").removeClass("red");
                    common.ajax('member/register', param, function (data) {
                      if (data && data.result && data.result.token) {
                        common.Cookie.set('token', data.result.token);
                        common.toast('注册成功，自动登录中...');
                        common.ajax('member/inner/login', {
                          username: param.username,
                          password: param.password
                        }, function (data) {
                          common.Cookie.set('userName', data.result && data.result.username || '');
                          common.Cookie.set('token', data.result && data.result.token || '');
                          common.Cookie.set('memberInfo', JSON.stringify(data.result));
                          common.toast({
                            title: '提示信息',
                            content: '登录成功！',
                            time: 2
                          });
                          setTimeout(function () {
                            window.location.href = '/';
                          }, 2000);
                        }, 'post');
                      } else {
                        _self.getCode();
                        common.$message({
                          title: '提示信息',
                          content: '注册成功，请登录！',
                          hc: true,
                          okcb: function () {
                            _self.$router.push({
                              path: '/'
                            });
                          }
                        });
                      }
                    }, 'post', function (data) {
                      $('#username').focus();
                      _self.checkReg('code', true, 1);
                      _self.getCode();
                    });

                  } else {
                    _self.getCode();
                  }
                }
              }, 'get', function (data) {
                $('#username').focus();
                el.addClass("error").parent('span').siblings("span.ui_error").html(data.errorMsg).addClass("red");
                _self.getCode();
              });


            }

      /*    },
          debug: true,
          rules: _self.rules,
          messages: common.regConfig.messages
        });*/
      }
    }
  }

</script>
<style scoped>

</style>


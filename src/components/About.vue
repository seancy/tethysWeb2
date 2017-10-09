<template>
  <div id="main">
    <div class="personal_box" id="about">
      <div class="contain_width">
        <!--<h2 class="personal_title"></h2>-->
        <template v-if="code !=='IC05'">
          <div class="content-hred" v-html="detail.title">
            <!--<p class="h2"><strong>ABOUT</strong> US</p>-->
            <!--<p class="h3" v-if="code ==='IC05'">代理加盟</p>-->
            <!--<p class="h3" v-else>{{ detail.title }}</p>-->
          </div>
        </template>
        <template v-else>
          <div class="content-hred">

            <p class="h2">代理加盟</p>
            <p class="h3"><strong>AGENT </strong>TO JOIN</p>
          </div>
        </template>
      </div>
      <div class="contain_width">
        <!--左侧选单-->
        <div class="left_menu">
          <ul class="psn_menu" id="footer_menu">
            <template v-for="(item,key) in menu.list">
              <li v-if="item.code === code" @click="changeTab(item.code)"><a href="javascript:;" class="active"><span
                class="icon_sprite icon_about" :class="'icon icon-'+[key+1]"></span>{{ item.title }}</a></li>
              <li @click="changeTab(item.code)" v-else><a href="javascript:;">
                <span class="icon_sprite icon_about" :class="'icon icon-'+[key+1]"></span>
                {{ item.title }}</a></li>
            </template>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <template v-if="code ==='IC05'">
          <div class="right_main">
            <ul class="psn_tab" id="join_tab">
              <li class="active"><span class="icon_tab"></span>代理加盟</li>
              <li><span class="icon_tab"></span>佣金方案</li>
              <li><span class="icon_tab"></span>代理注册</li>
            </ul>
            <div class="psn_wrap">
              <!--代理加盟-->
              <div class="psn_content">
                <div class="join_wrap" v-html="agent_html" >
                  <p class="bottom_line">
                    如今，网上博彩娱乐已经成为一个极具市场发展前景的热门产业。本公司凭借多年的博彩运营经验，目前已拥有极高的行业知名度和大批忠实用户，具有绝对的品牌优势。合作方式简单，零投资零风险，坐享高额佣金回报。如果您身边有对博彩感兴趣的朋友，请您不要犹豫，赶快加入这个一本万利的行业，充分利用您身边的人脉及网络资源！我们有专业的客服团队全年无休为您提供帮助。
                  </p>
                  <ul class="join_list">
                    <li>高佣金（代理佣金），让你轻松月入百万；</li>
                    <li>零风险，高回报，时出佣；</li>
                    <li>全年度优惠不断，满足各种类型玩家需求；</li>
                    <li>取款快速，实力雄厚资金有保障；</li>
                    <li>营运多年，深受百万玩家信赖；</li>
                    <li>拥有体育博彩与线上赌场执照，信誉保证；</li>
                    <li>多年大力推广，品牌热度十足，代理可坐享广告品牌效应；</li>
                    <li>数据信息详尽，可查阅下线投注记录。</li>
                  </ul>
                  <p class="color_red">还等什么？马上加盟吧。点击这里注册加入，开始推广，赚取佣金，简单三步开始成就梦想之旅。</p>
                </div>
              </div>
              <!--end 代理加盟-->
              <!--佣金方案-->
              <div class="psn_content" style="display:none;">
                <div class="join_wrap" v-html="commission_html">
                  <table class="psn_table">
                    <thead>
                    <tr>
                      <th rowspan="2">当月盈利</th>
                      <th rowspan="2">当月最低有效会员</th>
                      <th colspan="4">当月退佣比例</th>
                    </tr>
                    <tr>
                      <th>真人视讯</th>
                      <th>电子游艺</th>
                      <th>彩票游戏</th>
                      <th>体育竞技</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1-5000</td>
                      <td>5或以上</td>
                      <td>20%</td>
                      <td>15%</td>
                      <td>0.1%</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>5000-20000</td>
                      <td>10或以上</td>
                      <td>20%</td>
                      <td>15%</td>
                      <td>0.1%</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>20000-100000</td>
                      <td>50或以上</td>
                      <td>20%</td>
                      <td>15%</td>
                      <td>0.1%</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>100000以上</td>
                      <td>100或以上</td>
                      <td>20%</td>
                      <td>15%</td>
                      <td>0.1%</td>
                      <td>10%</td>
                    </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p class="bottom_line">
                    佣金以每月第一个礼拜至下月第一个礼拜一前的周日为统计期间，以联盟方案分红公式计算，由于代理部于每个月的第一礼拜三开始与代理确认金额后，在3个工作日内将佣金直接汇入申请代理登记之银行帐号。</p>
                  <h4 class="color_red">代理说明</h4>
                  <p>合作伙伴佣金=下线会员净输值X当月佣金比例（同时需满足当月最低活跃玩家数）</p>
                  <p>如果当月有效合作伙伴的下线会员净输值为负数，那么当月佣金为零，当月盈利有公司负担。</p>
                  <p>
                    合作伙伴的佣金比例以合作伙伴下线会员净输值与合作伙伴下线有效活跃玩家而定。合作伙伴比例升级必须同时满足合作伙伴下线会员净输值和有效活跃玩家人数两个条件。如果合作伙伴下线会员净输值和有效活跃玩家人数只有其以达到升级标准，那么将按照低一级的佣金比例发放佣金。如有效活跃玩家人数不足2人将不能获得佣金。</p>
                  <p>1.）有效会员：在月结区间内，总存款达到100RMB及以上的会员。</p>
                  <p>2.）佣金：真人视讯、彩票、体育博彩、电子游艺项目的【派彩】金额扣除相应费用后，乘以相应退佣比例（以扣除相应费用后的净盈利为准）。</p>
                  <p>3.）合作伙伴获得的支付费用，其中优惠和市场费用将会累计并在每月的佣金中扣除。这些费用包括：</p>
                  <p>转账费用-包括所有代理会员的存款和提款费用。</p>
                  <p>行政费用-任何费用支出（为支出或协助代理而产生的促销或营销活动支出）。</p>
                  <p>优惠红利-给予代理会员的现金红利或是折扣。若本月可获得佣金为负数，负盈利及费用将会带到下个月继续累计至可获得佣金为正数即可领取。</p>
                  <p>例如：</p>
                  <p>
                    联盟体系当月最低活动会员达6人，当月派彩：真人视讯￥200000，电子游艺￥20000，体育￥-50000。如联盟体系当月产生相应费用统计为￥100000，则当月佣金计算方式为：（￥-50000+￥200000+￥20000）X30%-（相应产生的费用￥100000*30%）=￥21000总退佣金额</p>
                </div>
              </div><!--end 佣金方案-->
              <!--代理注册-->
              <div class="psn_content" style="display:none;">
                <div class="join_wrap">
                  <form id="apply_form" v-if="!regSuccess">
                    <dl class="psn_info">
                      <dd>
                        <ul class="style_item">
                          <li v-for="conf in registerConfig">
                            <div v-if="conf.fieldCode && conf.fieldCode!=='bank'">
                               <span class="label">{{conf.fieldName}}<span class="color_red"
                                                                           v-if="conf.isRequired === 1">※</span></span>
                              <span class="form" v-if="conf.fieldCode == 'username'">
                                <input type="text" class="formInput"
                                       :placeholder="placeholders[conf.fieldCode]"
                                       :type="types[conf.fieldCode]"
                                       :id="conf.fieldCode" :name="conf.fieldCode"
                                       v-on:blur="verify_agentName">
                              </span>
                              <span class="form" v-else>
                                <input type="password" class="formInput"
                                       :placeholder="placeholders[conf.fieldCode]"
                                       :type="types[conf.fieldCode]"
                                       :id="conf.fieldCode"
                                       :name="conf.fieldCode"
                                       v-on:blur="verify_agentName"></span>
                              <span class="ui_error"></span>
                            </div>
                            <div v-else="conf.fieldCode && conf.fieldCode=='bank'">
                              <span class="label">银行名称<span class="color_red"
                                                            v-if="conf.isRequired === 1">※</span></span>
                              <span class="form formSelect_wrap">
                                <select name="bank" id="bankSelect" v-model="bankInfo.bankCode" class="formSelect"
                                        style="margin-left: 0;" @change="handleEnter('bankSelect')">
                                  <option value="">请选择银行</option>
                                  <option v-for="(bank,index) in bankList" :value="bank.bankCode">
                                    {{bank.bankName}}
                                  </option>
                                </select>
                              </span>
                              <span class="ui_error"></span>
                            </div>
                          </li>
                          <li>
                            <span class="label">验证码<span class="color_red">※</span></span>
                            <span class="form">                                                        <input
                              type="text" class="formInput" id="code" name="code"
                              placeholder="请输入验证码" style="width:96px; min-width:auto;"
                              @keypress="handleEnter('code')">
                              <img :src="verImgCode" alt="" @click="getCode">
                              <a href="javascript:;" class="icon_sprite icon_refresh" @click="getCode"></a>
                              </span>
                            <span class="ui_error"> <!--<span class="icon_sprite icon_ok"></span>--> </span>
                          </li>
                        </ul>
                        <div class="sing-up_msg_plus">
                          <input type="checkbox" checked="checked" id="agree" name="agree"  v-model="allowChecked" />
                          <label for="agree">我已届满合法博彩年龄，且已阅读并同意</label><a href="javascript:;" @click="changeDuty()">代理注册协议</a>
                        </div>
                      </dd>
                    </dl>
                    <div class="sing-up_msg">
                      <h3>备注：</h3>
                      <p>1. 请填写您的真实资料，以便为您支付佣金。</p>
                      <p>2. 注册成功后，请耐心等待，我们将进款审核您的资料并与您联系。审核通过后您便可以进入代理管理中心页面。</p>
                    </div>
                    <div class="form_submit">
                      <a class="formBtn modalBtn"  @click="JqValidate">立即注册</a>

                    </div>
                  </form>

                  <!--注册成功讯息-->
                  <div id="modalSuccess" style="display:none;">
                    <div class="modalIcon"><span class="icon_sprite icon_success_big"></span></div>
                    <h2>您的代理注册申请已成功提交!</h2>
                    <p>请耐心等待我们的客服联系您并协助您完成代理申请，谢谢！</p>
                  </div>
                  <!--end 注册成功讯息-->
                </div>
              </div>
              <!--end 代理注册-->
            </div>
          </div>
        </template>
        <template v-else>
          <div class="right_main">
            <div class="psn_wrap">
              <!--关於我们-->
              <div class="psn_content">
                <div class="join_wrap" v-html="detail.content">
                  <p>
                    THE PARISIAN（澳门威尼斯人）注册在菲律宾马尼拉，持有菲律宾政府卡格扬经济特区 First Cagayan leisure and Resort Corporation颁发的体育博彩与线上赌场执照，接受菲律宾政府和卡格扬经济特区CEZA授权和监管，我们一切博彩营业行为皆遵从菲律宾政府博彩条约。在竞争日益激烈的网络博彩市场中，我们不断地求新求变，寻找最新的创意，秉持最好的服务。向客户提供高品质的服务、先进的产品、丰富的娱乐体验，是我们新葡京娱乐场永恒的宗旨。</p>
                  <p>
                    我们思您所想，提供高标准全方位的个人隐私保密措施以及高强度的资金安全体系。玩家网上支付和所有银行交易将由国际金融机构通过高标准的安全和机密的网络端口（SSL 128 bit encryption Standard）中进行。进入玩家帐户数据也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们绝不会向第三方（包括相关单位）透露客户数据。</p>
                  <h4>我们向您承诺：</h4>
                  <p class="highlight">以诚信为本</p>
                  <p>作为国际专业的网上博彩游戏运营商，我们承诺，为每一位客户提供最安全、最公平的博彩游戏，以及全方位的服务。</p>
                  <p>提供最多样化与最真实的游戏</p>
                  <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，以求将完整的赛事，丰富的玩法带给热爱体育的玩家。</p>
                  <p>各式彩票游戏，是依官方赛果产生的游戏结果，让玩家在活泼的投注界面，享受最真实的娱乐。</p>
                  <p>我们的电子游戏是与国际顶尖的电子游艺开发团队共同研发，采用最先进的动漫视觉效果，使用最公平的随机数产生机率，让您安心享受多元、刺激，观感丰富的电子游艺。</p>
                  <p>本公司所有的游戏皆有共同的优点: 无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开!</p>
                  <p class="highlight">提供优质的客户服务</p>
                  <p>
                    我们有以最高标准选拔、最严格训练的客服团队，向您提供365天×24小时实时在线的客户服务。每位玩家的咨询，都将以专业、亲切的态度解答，在帮您解决问题的同时带给您宾至如归的体验!提供多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议；举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。</p>
                  <p class="highlight">高效安全的存取款</p>
                  <p>
                    我们提供各种安全简便的存款及取款选择给我们的会员。我们一直坚持&ldquo;了解我们的会员（KYC）&rdquo;和 反洗钱(AML)的原则，并与第三方的财务管理当局合作以确保最大范围的遵从相关的法律法规。</p>
                  <p>我们对我们所建立的公司深感自豪，并希望所有的用户能够在一个安全愉快的环境下享受我们精心设计的产品和服务并能够从中获利。 我们提供最迅捷最安全的取款方式，会员365天×24小时均可申请取款。</p>
                  <p class="highlight">让您成为大赢家</p>
                  <p>将不间断的推出各式各样有利新老会员的优惠，天天送惊喜、周周有回馈，月月大放送，让您成为大赢家。</p>
                  <p>积极参与慈善公益</p>
                  <p>我们在尽心为每一位会员服务的同时，也肩负着对社会、对慈善公益的责任。取之于社会，用之于社会也是我们一直秉承的宗旨之一。我们积极参加各种捐款活动，也将永不磨灭的针对社会的需要作出更多的产生。</p>
                  <p>本公司提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</p>
                  <p>禁止未满18岁的人士参与赌博游戏。在加入游戏之前，请您确定您已年满18周岁。</p>
                </div>
              </div><!--end 关於我们-->
            </div>
          </div>
        </template>

        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>
<script>

  var md5 = require('../../static/vendor/md5.js');

  $(function () {
    $(document).on("click", ".a_contactus a", function () {
      var cookieserviceUrl = common.Cookie.get("serviceUrl");
      if (cookieserviceUrl.replace(/(^s*)|(s*$)/g, "").length !== 0) {
        window.open(cookieserviceUrl, "_bank", "newFrame,width=600, height=500");
      }
    });
  });

  $.validator.addMethod('isNumWord', function (value, element) {
    var reg = /^\w+$/;
    return this.optional(element) || (reg.test(value));
  }, '只能填写字母和数字');

  $(function () {
    $('.psn_tab li').on('click', function () {
      var index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.psn_content').eq(index).show().siblings().hide();
    })
  })


  export default {
    name: 'about',
    data:function() {
      return {
        regSuccess: false,
        verImgCode: '',
        code: common.getQueryString('id') || '',
        allowChecked: true,
        detail: [],
        menu: [],
        duty: [],
        registerConfig: [],
        bankInfo: {
          bankCode: ''
        },
        bankList: [],
        rules: common.regConfig.rules,
        placeholders: common.regConfig.placeholders,
        types: common.regConfig.types,
        extInfo: common.regConfig.extInfo,
        commission_html: '',
        agent_html: '',
        detail_content: ''
      }
    },
    created: function () {
      this.getData();
      this.getLeftMenu();
      var _self = this;
      this.code = _self.code;
      if (this.code === 'IC05') {
        this.registerConfig = common.Cookie.get('registerConfig') && JSON.parse(common.Cookie.get('registerConfig')) || [];
        this.getRegisterConfig();
        this.getCode();
      }
      common.ajax('cms/client/copyright/details', {
        code: "RC05"
      }, function (data) {
        if (data && data.apistatus == 1) {
          _self.detail_content = data.result.content || '';
        }
      });
      this.getBankList();
    },
    mounted: function () {
      var _self = this;
    },
    methods: {
      handleEnter: function (id) {
        let _self = this;
        let el = $('#' + id);
        let val = el && el[0].value || '';
        switch (id) {
          case 'code':
            if (el.hasClass('backgroundErr')) {
              el.removeClass('backgroundErr');
            }
            break;
          case 'bankSelect':
            if (val !== '') {
              el.removeClass('backgroundErr').css("color", "black").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            else {
              el.addClass("backgroundErr").css("color", "#ab3314").parent().next().html('请选择银行').addClass("red");
            }
            break;
          default:
        }
      },
      getBankList: function () {
        var _self = this;
        common.ajax('tethys-user/user/account/bankList', {}, function (data) {
          _self.bankList = data && data.result || [];
        }, 'post');
      },
      verify_agentName: function (aa) {
        var _self = this;
        if (aa.target.id == "username") {
          var el = aa.target;
          var val = el && el.value || '';
          if (val == '' || val == ' ' || val.length == 0) {
            $(el).addClass("backgroundErr").parent().next().html('用户名不能为空').addClass("red");
            return;
          }
          if (!common.positiveEngNum(val) || val.length < 4 || val.length > 15) {
            $(el).addClass("backgroundErr").parent().next().html('请输入4-15位英文或数字').addClass("red");
            return;
          }
          common.ajax('agent/username/check', {username: $(aa.target).val()}, function (data) {
            if (data && data.result) {
              if (data.apistatus === 1) {
               // $(aa.target).removeClass("backgroundErr").parent().siblings().html('<span class="icon_ok"></span>').removeClass("red");
                $(aa.target).removeClass("backgroundErr") ;
              }
            }
          }, 'post', function (data) {
            //  $(aa.target).parent("span").parent("div").parent("div").siblings("div").find("span").html(data.errorMsg);
            $(aa.target).addClass("backgroundErr").parent().siblings("div").html(data.errorMsg).addClass("red");
          });
        }
      },
      changeDuty: function () {
        var _self = this;
        common.ajax('cms/client/copyright/details', {code: 'RC04'}, function (data) {
          if (data && data.result) {
            common.$message({
              title: '代理注册协议',
              content: data.result.content,
              ok: '同意',
              cancel: '不同意',
              okcb: function () {
                $("#agree").prop("checked", true);
              },
              ccb: function () {
                $("#agree").prop("checked", false);
              },
              style: {'max-width': '600px'}
            });
          }
        });
      },

      // get code
      getCode: function () {

        var _self = this;
        $('.icon_sprite.icon_refresh').addClass('rotate');
        setTimeout(function () {
          $('.icon_sprite.icon_refresh').removeClass('rotate');
        }, 2000);
        common.ajax('member/code/get', {
          width: 84,
          height: 31
        }, function (data) {
          common.Cookie.set('clientId', data.result && data.result.clientId || '');
          _self.verImgCode = data.result && 'data:image/png;base64,' + data.result.code || '';
        });
      },
      changeTab: function (code) {
        var _self = this;
        _self.code = code;
        this.getData();
        if (code === 'IC05') {
          setTimeout(function () {
            $(document).ready(function () {
              $("#join_tab li").on('click', function () {
                var index = $(this).index()
                $(this).addClass('active').siblings().removeClass('active')
                $('.psn_content').eq(index).show().siblings().hide()
              })
            })
          }, 500)
          this.getRegisterConfig();
          this.getCode();
        }
      },
      changeRegConf: function (flag) {
        var _self = this;
        if (flag) {
          $(document).unbind('keydown');
          $(document).on("keydown", function (e) {
            if (e.keyCode == 13) {
              _self.JqValidate();
            }
          });
          this.getRegisterConfig();
          this.getCode();
        }
        else {
          $(document).unbind('keydown');
          $(document).on("keydown", function (e) {
            if (e.keyCode == 13) {
              _self.$parent.logIn();
            }
          });
        }
      },
      getData: function () {
        var _self = this;
        common.ajax('cms/client/copyright/details',
          {
            code: _self.code
          }, function (data) {
            _self.detail = data && data.result || [];
            _self.commission_html = data && data.result && data.result.commission && data.result.commission.content || '';
            _self.agent_html = data && data.result && data.result.agent && data.result.agent.content || '';
          });
        // 写死 IC05
        if (_self.code === 'IC05') {
          _self.$nextTick(function () {
            $(".tabs-btn-group").each(function () {
              $(this).find('li').each(function () {
                $(this).click(function () {
                  $(this).addClass('current').siblings().removeClass('current').parents('div.content-body').find('div.item').eq($(this).index()).fadeIn(150).siblings('div.item').hide();
                });
              });
            });
          });
        }
      },
      getRegisterConfig: function () {
        var _self = this;
        common.ajax('config/client/register/list',
          {
            type: 2
          }, function (data) {
            _self.registerConfig = data && data.result || [];
            for (var i = 0; i < _self.registerConfig.length; i++) {
              if (_self.rules[_self.registerConfig[i].fieldCode] && _self.registerConfig[i].isRequired === 1) {
                _self.rules[_self.registerConfig[i].fieldCode].required = true;
              }
            }
            common.Cookie.set('registerConfig', JSON.stringify(_self.registerConfig));

            _self.$nextTick(function () {  // 代理注册验证
              common.checkReg();

            });
          });
      },
      getLeftMenu: function () {
        var _self = this;
        common.ajax('cms/client/copyright/list', {}, function (data) {
          _self.menu = data && data.result || [];
        })
      },
      regist_success: function () {
        var _self = this;
        _self.regSuccess = true;
      },
      checkReg: function (id, flag, isRequired) {
        var _self = this;
        var el = $('#' + id);
        var val = '';
        var strength = '';
        switch (id) {
          case 'username':
            val = el && el[0].value || '';
            if (val === '' || val === ' ' || val.length === 0) {
              if (isRequired === 0) {
                $(el).removeClass('error').parent('div').next().html('').removeClass('red')
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
                    $(el).removeClass("error").parent().next().html('<span class="icon_ok"></span>').removeClass('red');
                  } else {
                    $(el).addClass("error").parent().next().html('用户名重复').addClass("red")
                    _self.getCode()
                  }
                }
              }, 'get', function (data) {
                //  $(el).addClass("error").parent('div').siblings("div").html(data.errorMsg).addClass("red");
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
              $(el).addClass("error").parent().next().html('必须与银行帐户名称相同，否则不能出款！');
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
                $(el).removeClass('error').parent().next().next().html('').removeClass('red');
              } else {
                $(el).addClass('error').parent().next().next().html('请输入验证码').addClass("red").css("padding-left", "10px");
              }
            } else if (flag) {
              $(el).addClass('error').parent().next().next().html('验证码错误').addClass('red').css("padding-left", "10px");
            } else {
              $(el).removeClass('error').parent().next().next().html('').removeClass('red');
            }
            break;
          default:

        }
      },
      JqValidate: function () {
        var _self = this;
        var param = {};
        var warnData = _self.registerConfig;
        var len = warnData.length;
        for (let i = 0; i < len; i++) {
          _self.checkReg(warnData[i].fieldCode, false, (warnData[i].isRequired || 0))
        }

        _self.checkReg('code');
        setTimeout(function () {
          let warnDataa = $('.proxy_reg_sm.red').parent();
          if (warnDataa.length > 0) {
            $('#' + warnDataa[0].childNodes[2].childNodes[0].id).focus();
            _self.getCode();
          }
        }, 50)
      /*  return $("#apply_form").validate({
          submitHandler: function () {*/
            var ipts = $('#apply_form').find('input[type!="hidden"]');
            for (var i = 0; i < ipts.length; i++) {
              if ('agree' != ipts[i].name) {
                param[ipts[i].name] = ipts[i].type === 'password' ? md5(ipts[i].value) : ipts[i].value;
              }
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
            var proxy_flage = $('.ui_error').hasClass('red');
            if (!proxy_flage) {

              common.ajax_async('agent/username/check', {username: $("#username").val()}, function (data) {
                if (data && data.result) {
                  if (data.apistatus === 1) {
                    common.ajax('agent/apply', param, function (data) {
                      if (data && data.apistatus == 1) {
                        _self.regist_success();
                        _self.$nextTick(function () {
                          _self.regSuccess = true;
                          $("#modalSuccess").show();
                          _self.regist_success();
                        });
                      } else {
                        _self.getCode();
                        common.toast({content: '请完善账户资料！', time: 3});
                      }
                    }, 'post', function (data) {
                      $('#username').focus();
                      _self.checkReg('code', true, 1);
                      _self.getCode();
                    });
                  }
                  else {
                    _self.getCode();
                  }
                }
              }, 'post', function (data) {
                $('#username').focus();
                _self.getCode();

              });


            }
       /*   },
          debug: true,
          rules: _self.rules,
          messages: common.regConfig.messages
        });*/
      }
    }
  }
</script>

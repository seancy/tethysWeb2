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
          <ul class="psn_tab" id="deposit_tab">
            <li  v-for="(tab,index) in d_list" :class="(current_tab===tab.type?'active':'')">
              <a @click="changeTab(tab.type)" :style="(current_tab===tab.type?'cursor:  default;':'')"><span class="icon_tab"></span>{{tab.name}}{{tab.subname}}</a>
            </li>


          </ul>
          <div class="psn_wrap">
            <div class="psn_content " >
              <div class="deposit_content">
                <div class="deposit_info" >
                  <div class="img" v-on:click="judge(current_content.type)"><img :src="current_content.img" width="710"  alt=""></div>
                  <div class="text" v-if="(current_content['content']==''?false:true)" :class="current_content.contentclass" v-html="current_content['content']">
                    <!--<ul>-->
                      <!--<li>钱包秒充支持：支付宝、微信扫码汇款，支付便捷，到款迅速！</li>-->
                      <!--<li>本公司提供微信、支付宝收款号为个人微信号不是公众号，请确认名称正确后汇款。</li>-->
                    <!--</ul>-->
                  </div>
                </div>
                <div class="form_submit">
                  <a class="formBtn" href="javascript:void(0);" v-on:click="judge(current_content.type)">前往转帐</a>
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
        info: {
          username: '',
          balance: 0
        },
        msg: 'this is about page',
        codepara: '',
        memberInfo: {},
        d_zero_html: [''],
        d_one_html: [''],
        d_two_html: [''],
        d_three_html: [''],
        current_tab: '100',
        current_content: {},
        temp_tab_list: {},
        d_list: {
          "100": {
            "type": "100",
            "id": "",
            "code": "OC04",
            "name": "钱包秒充",
            "subname": "（3秒到账）",
            "class": "icon-bank bank4",
            "img": "static/images/deposit_wallet.jpg",
            "contentclass": "deposit-intro msg_bubble d_zero",
            "content": ""
          },
          "101": {
            "type": "101",
            "id": "",
            "code": "OC01",
            "name": "银行转账",
            "subname": "（推荐）",
            "class": "icon-bank bank1",
            "img": "static/images/deposit_bank.jpg",
            "contentclass": "",
            "content": ""
          },
          "102": {
            "type": "102",
            "id": "",
            "code": "OC02",
            "name": "在线支付",
            "subname": "（立即到账）",
            "class": "icon-bank bank2",
            "img": "static/images/deposit_online.jpg",
            "contentclass": "msg_bubble",
            "content": ""
          },
          "103": {
            "type": "103",
            "id": "",
            "code": "OC03",
            "name": "扫码支付",
            "subname": "（立即到账）",
            "class": "icon-bank bank3",
            "img": "static/images/deposit_code.jpg",
            "contentclass": " msg_bubble",
            "content": ""
          }
        },
      }
    },
    created: function() {
      if (common.ifLanded()) {
        this.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        this.info.username = common.Cookie.get('userName') || '';
        //this.getPersonalInfo();
        common.pollingTheMail();
      }
      // this.getTabData(0);
//      var _self = this;
//        _self.getTabList();
    },
    mounted: function() {
      var _self = this;
      _self.$nextTick(function() {
        _self.getTabList();
      })
//      _self.getTabList();
    },
    filters: {
      balanceNo: function(value) {
        return common.FormatNumber.get(value);
      }
    },
    methods: {
      getTabList: function() {
        var _self = this;
        common.ajax('config/payment/used/list', {}, function(data) {
          if (data && data.apistatus == 1) {
            var temp = data.result.list;
            if(temp !=''){
              var len = temp.length;
              var temp_sort = '';
              for (let i = 0; i < len; i++) {
                _self.d_list[data.result.list[i].type].id = data.result.list[i].id;
                _self.d_list[data.result.list[i].type].name = data.result.list[i].name;
                _self.temp_tab_list[data.result.list[i].type] = _self.d_list[data.result.list[i].type];
                if(temp_sort == '' || temp_sort > data.result.list[i].sort){
                  temp_sort = data.result.list[i].sort;
                  _self.current_tab = data.result.list[i].type.toString();
                }
              }
              _self.current_content = _self.temp_tab_list[data.result.list[0].type];
//              console.log(_self.temp_tab_list);
              _self.changeTab(_self.current_tab);
              console.log(_self.d_list);
            }

          }
        }, 'get', function(data) {

        });
      },
      changeTab: function(arg) {
        var _self = this;
        _self.getTabData(arg);
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
      judge: function(val) {
        common.ajax('tethys-user/user/menu/level/auth', {}, function(data) {
          if (data.apistatus == 1) {
            if (data.result == 0) { // 1锁定 0 非锁定
              if (val == "100") {
                location.href = "personalDeposit0";
              }
              if (val == "101") {
                location.href = "personalDeposit1";
              }
              if (val == "102") {
                location.href = "personalDeposit2";
              }
              if (val == "103") {
                location.href = "personalDeposit3";
              }
            } else {
              common.toast({
                content: '当前无法操作，请联系客服',
                time: 3
              });
              setTimeout(function() {
                location.href = "/";
              }, 1000);
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
          common.Cookie.set('memberInfo', JSON.stringify(_self.memberInfo));
        });
      },
      getTabData: function(arg) {
        var _self = this;
        _self.current_tab = arg;
        if (arg == "100") {
          _self.codepara = "OC04";
          _self.current_content = _self.d_list["100"];
        } else if (arg == "101") {
          _self.codepara = "OC01";
          _self.current_content = _self.d_list["101"];
        } else if (arg == "102") {
          _self.codepara = "OC02";
          _self.current_content = _self.d_list["102"];
        } else if (arg == "103") {
          _self.codepara = "OC03";
          _self.current_content = _self.d_list["103"];
        }
        common.ajax('cms/client/copyright/details', {
          code: _self.codepara
        }, function(data) {
          // _self.footer = data && data.result || [];
          _self.current_content.content = data.result.content || "";
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#deposit_tab li a{
  display: block;
}
#deposit_tab li.active a{
color:#d8a44e;
}
.deposit_info   .text>ul>li>p span{
    font-size:12px !important;
    color:#000 !important;

  }
</style>

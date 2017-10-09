<template>
  <div id="main">
    <div class="personal_box" id="personal-funds">
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
            <li><a v-on:click="draw_judge()" href="javascript:void(0);"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personalBettin" ><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personalFunds" class="active"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main" id="showloading">
          <div id="funds_tab">
            <ul class="psn_tab" id="myTab" >
              <li class="active">
                <a href="#system_funds" data-toggle="tab" @click="changeTab(3)" class="aa_three"><span  class="icon_tab"></span>返&nbsp;&nbsp;水</a>
              </li>
              <li><a href="#system_funds" data-toggle="tab" @click="changeTab(1)"  class="aa_one"><span class="icon_tab"></span>充&nbsp;&nbsp;值</a></li>
              <li><a href="#system_funds" data-toggle="tab" @click="changeTab(2)" class="aa_two"><span class="icon_tab"></span>提&nbsp;&nbsp;款</a></li>
              <li><a href="#system_funds" data-toggle="tab" @click="changeTab(4)" class="aa_four" ><span class="icon_tab"></span>优&nbsp;&nbsp;惠</a></li>
            </ul>
          </div>

          <div class="psn_wrap">
            <!--返水-->
            <div class="psn_content">
              <div class="psn_filter">
                <span class="psn_label">时间范围</span>
                <span class="psn_form">
                  <span><input type="text" class="formInput  Wdate f1" placeholder="Form" readonly onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})" id="begin_time"></span>
                  <span>~</span>
                  <span><input  type="text" class="formInput form-control Wdate f2" placeholder="To" readonly
                                onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})" id="end_time"/></span>
                                    <span class="formSelect_wrap">
                                        <select class="formSelect" v-model="days">
                                            <option value="">快速筛选</option>
                                            <option value="1">昨天</option>
                                            <option value="2">前天</option>
                                            <option value="3">本周</option>
                                            <option value="4">上周</option>
                                            <option value="5">近一个月</option>
                                            <option value="6">近三个月</option>
                                        </select>
                                    </span>
                                    <span class="formSelect_wrap">
                                        <select class="formSelect"  id="status" v-model="status">
                                            <option value="" selected="true">全部</option>
                                            <option value="1">处理中</option>
                                            <option value="100">已成功</option>
                                            <option value="3">已失败</option>
                                        </select>
                                    </span>
                                    <span>
                                        <a href="javascript:;" class="formBtn searchbtn_money" @click="searchData">搜&nbsp;&nbsp;&nbsp;&nbsp;索</a>
                                    </span>
                                </span>
              </div>

              <div class="psn_list" >
                <table class="psn_table table-striped">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>订单编号</th>
                    <th>时间</th>
                    <th class="gameTypeColumn" v-if="choosed_actionType==3">游戏类型</th>
                    <th  class="funds_td_center zb_type" style="display: none;">账变方式</th>
                    <th class="td_center" >状态</th>
                    <th>交易金额</th>
                    <th>账户余额</th>
                    <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,index) in funds">
                    <td>{{ index + 1 }}</td>
                    <td>{{item.tradeId}}</td>
                    <td>{{momentFormatTime(item.tradeTime,'yyyy/MM/dd HH:mm:ss')}}</td>
                    <td class="gameTypeColumn  gametype" v-if="choosed_actionType==3">{{ item.gameTypeName }}</td>

                    <td class="td_center" v-if="item.actionType !=3">{{ item.tradeTypeName }}</td>
                    <td v-if="item.status==100" class="isSuccessful td_center">
                      {{item.statusName}}
                    </td>
                    <template v-else>
                      <td v-if="item.status==13" class="haveFailed td_center">{{item.statusName}}</td>
                      <td v-else class="inProcess td_center">{{item.statusName}}</td>
                    </template>
                    <td class="td_center">{{ item.tradeNum / 100 }}</td>
                    <td v-if="item.status==1 " class="td_center">-</td>
                    <td class="td_center" v-else >{{item.totalNum / 100 }}</td>
                    <td>{{item.remark }}</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">小计</td>
                    <td class="td_center">{{countNum}}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">总计</td>
                    <td class="td_center"><span class="color_red">{{tradeSum}}</span></td>
                    <td></td>
                    <td></td>
                  </tr>
                  </tfoot>
                </table>
              </div>

              <div class="pager ">
                <a class="prev prev-page" href="javascript:;" ><span class="icon" @click="prevPage"></span></a>
                <a href="javascript:;" v-for="index in indexs" v-bind:class="{ 'active': Page==index }" ><span @click="pageChange(index)"></span>{{index}}</a>

                <a class="next next-page" href="javascript:;"><span class="icon" @click="nextPage"></span></a>
              </div>
            </div><!--end 返水-->
            <!--充值-->

          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>
<style>
  #myTab li a{
    display: block;
  }
</style>

<script>
  $(function(){
    $(".f1").val(common.randomDate());
    $(".f2").val(common.randomDate());
  })
  export default {
    name: 'PersonalFunds',
    data: function () {
      return {
        formatTime: common.formatTime,
        info: {
          username: '',
          balance: 0
        },
        funds: [],
        Total: 0,
        Page: 1,
        Length: 10,
        all: 0,
        days: '',
        startTime: common.randomDate(),
        endTime: common.randomDate(),
        load:null,
        actionTypes:'',
        choosed_actionType:3,
        status:'',
        choosed_status:'',
        whetherReturn:false,
        memberInfo: {},
        momentFormatTime:common.momentFormatTime,
        countNum:'',
        tradeSum:'',
        f1_value:common.randomDate(),
        f2_value:common.randomDate(),
        isS:'',
        statusNameColor:''
      };
    },
    computed: {
      indexs: function () {
        var _self = this;
        var left = 1;
        var right = _self.all;
        var arr = [];
        if (_self.all >= 11) {
          if (_self.Page > 5 && _self.Page < _self.all - 4) {
            left = _self.Page - 5;
            right = _self.Page + 4;
          } else {
            if (_self.Page <= 5) {
              left = 1;
              right = 10;
            } else {
              right = _self.all;
              left = _self.all - 9;
            }
          }
        }
        while (left <= right) {
          arr.push(left);
          left++;
        }
        return arr;
      }
    },
    watch: {
      days: function (val) {
        var _self = this;
        var start_date = new Date();
        var len = start_date.getTime();
        var offset = start_date.getTimezoneOffset() * 60 * 1000;
        var utcTime = len + offset;
        var start = new Date(start_date.getTime());
        start.setMonth(0);
        start.setDate(1);
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        var middle = new Date(start.getTime());
        middle.setMonth(6);
        // 夏令时
        if ((middle.getTimezoneOffset() - start.getTimezoneOffset()) == 0) {
          var date = new Date(utcTime + 3600000 * -4);
        } else {
          var date = new Date(utcTime + 3600000 * -5);
        }
        var st = '', et = '';
        switch (parseInt(val, 10)) {
          case 1:
            // 昨天
            date.setDate(date.getDate() - 1);
            date.setHours(date.getHours());
            date.setMinutes(date.getMinutes());
            date.setSeconds(date.getSeconds());
            st = date;
            et = st;
            break;
          case 2:
            // 前天
            date.setDate(date.getDate() - 2);
            date.setHours(date.getHours());
            date.setMinutes(date.getMinutes());
            date.setSeconds(date.getSeconds());
            st = date;
            et = st;
            break;
          case 3:
            // 本周
            et = new Date();
            var day = date.getDay();
            if (day == 0) {
              day = 6;
            }
            date.setDate(date.getDate() - day);
            date.setHours(date.getHours());
            date.setMinutes(date.getMinutes());
            date.setSeconds(date.getSeconds());
            st = date;
            break;
          case 4:
            // 上周
            var day = date.getDay();
            if (day == 0) {
              day = 6;
            }
            date.setDate(date.getDate() - day);
            date.setHours(date.getHours());
            date.setMinutes(date.getMinutes());
            date.setSeconds(date.getSeconds());
            et = date;
            st = new Date(et).getTime() - 6 * 24 * 60 * 60 * 1000;
            break;
          case 5:
            // 近1个月
            et = new Date();
            st = date.setMonth(date.getMonth() - 1);
            break;
          case 6:
            // 近3个月
            et = new Date();
            st = date.setMonth(date.getMonth() - 3);
            break;
        }
        $('.Wdate')[0].value = st && formatTime(new Date(st), 'yyyy/MM/dd') || '';
        $('.Wdate')[1].value = et && formatTime(new Date(et), 'yyyy/MM/dd') || '';
        if(val==""){
          $(".f1").val(common.randomDate());
          $(".f2").val(common.randomDate());
        }
      },
      status:function(val){
        var _self = this;
        _self.choosed_status = $("#status").find("option:selected").val();
      }
    },
    created: function () {
      var _self = this;
      //$('#myTab li:eq(0) a').tab('show');//初始化显示哪个tab
      if (common.ifLanded()) {
        _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
        common.pollingTheMail();
        _self.info.username = common.Cookie.get('userName') || '';
        setTimeout(function(){
          // _self.searchData();
          _self.changeTab();
        },100);
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
    filters: {
      balanceNo: function (value) {
        return common.FormatNumber.get(value);
      }
    },
    methods: {
      changeTab:function(arg){
        var _self = this;
        if(arg==1){  // 充值
          _self.choosed_actionType=1;
          $(".gameTypeColumn").hide();
          $('.table-striped tr .zb_type').show();
        } else if(arg==2){
          _self.choosed_actionType=2;
          $(".gameTypeColumn").hide();
          $('.table-striped tr .zb_type').show();
        } else if(arg==3){  // 返水
          _self.choosed_actionType=3;
          $(".gameTypeColumn").show();
          $('.table-striped tr .zb_type').hide();
        } else if(arg==4){
          _self.choosed_actionType=4;
          $(".gameTypeColumn").hide();
          $('.table-striped tr .zb_type').show();
        } else {
          _self.choosed_actionType=3;
          $(".gameTypeColumn").show();
        }
        _self.searchData();
      },
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
      searchData: function () {
        var _self = this;
        _self.Page = 1;
        if(_self.choosed_actionType==1){  // 充值
          $(".warning").show();
          $(".gameTypeColumn").hide();
        } else if(_self.choosed_actionType==2){
          $(".warning").show();
          $(".gameTypeColumn").hide();
        } else if(_self.choosed_actionType==3){ // 返水
          $(".warning").show();
          $(".gameTypeColumn").show();
        } else if(_self.choosed_actionType==4){
          $(".warning").show();
          $(".gameTypeColumn").hide();
        } else {
          $(".warning").hide();
          $(".gameTypeColumn").hide();
        }
        if(!_self.whetherReturn){
          _self.whetherReturn = true;
          _self.load = new Loading();
          _self.load.init({
            target: "#showloading"
          });
          _self.load.start();
          _self.getData();
        }
      },
      // 获取数据
      getData: function () {
        var _self = this;
        var startDate = $('.Wdate')[0] && $('.Wdate')[0].value && new Date($('.Wdate')[0].value) || '';
        var EndTime = $('.Wdate')[1] && $('.Wdate')[1].value && new Date($('.Wdate')[1].value) || '';
        if(startDate==""){
          _self.startTime = common.randomDateYYMMDD();
          _self.endTime = common.randomDateYYMMDD();
        }
        if (startDate) {
          _self.startTime = common.formatTime(startDate, 'yyyyMMdd');
        }
        if (EndTime) {
          _self.endTime = common.formatTime(EndTime, 'yyyyMMdd');
        }
        var para = {
          queryStartTime: _self.startTime,
          queryEndTime: _self.endTime,
          page: _self.Page,
          rows: _self.Length,
          actionType:_self.choosed_actionType,
          status:_self.choosed_status
        };
        common.ajax('tethys-user/user/trade/tradeList',para, function (data) {
          _self.whetherReturn = false;
          _self.load.stop();
          _self['funds'] = data && data.result && data.result.list || [];
          // if(data && data.result && data.result.list){
          //     for (var i = 0; i < data.result.list.length; i++) {
          //         var status = data.result.list[i]&&data.result.list[i].status;
          //         if(status==100){
          //             _self.isS = "已失败";
          //             $(".gametypeColor").css("color","#ff0000")
          //         } else if(status==1){
          //             _self.isS = "处理中";
          //             //$(".gametypeColor").css("color","#ff9900");
          //         } else if(status==13){
          //             _self.isS = "已失败";
          //             //$(".gametypeColor").css("color","#ff9900");
          //         }
          //         _self.statusNameColor =
          //     }
          // }
          if (data && data.result && data.result.summary) {
            _self.Total = data.result.summary.countNum;
            _self.tradeTotal = data.result.summary.tradeSum;
          }
          _self.all = _self.Total % _self.Length === 0 ? parseInt(_self.Total / _self.Length, 10) : parseInt(_self.Total / _self.Length, 10) + 1;
          var total_sum = null;
          for (var i = 0; i < _self['funds'].length; i++) {
            switch (_self.choosed_actionType.toString()) {
              // case "1":
              //     _self['funds'][i]['remark'] = (_self['funds'][i]['tradeType'] === 12294?'人工入款':_self['funds'][i]['remark']);
              //     break;
              // case "2":
              //     _self['funds'][i]['remark'] = (_self['funds'][i]['tradeType'] === 12293?'人工提出':_self['funds'][i]['remark']);
              //     break;
              case "4":
                _self['funds'][i]['remark'] = (_self['funds'][i]['tradeTypeName'].indexOf('优惠') !== -1?_self['funds'][i]['tradeTypeName']:_self['funds'][i]['remark']);
                break;
              default:

            }
            total_sum += _self['funds'][i].tradeNum/100;
          }
          if(!total_sum){
            total_sum=0;
          }
          var trade_sum=_self.tradeTotal/100;
          if(!trade_sum){
            trade_sum = 0;
          }
          _self.countNum = total_sum.toFixed(2);
          _self.tradeSum = trade_sum.toFixed(2);
        }, 'post',function(data){
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

      // 前一页
      prevPage: function () {
        if (this.Page > 1) {
          this.Page--;
          this.getData();
        }
      },
      nextPage: function () {
        if (this.Page < this.all) {
          this.Page++;
          this.getData();
        }
      },
      // 切换页码
      pageChange: function (index) {
        if (index != this.Page) {
          this.Page = index;
          this.getData();
        }
      }
    },
    mounted:function(){
      var _self = this;
      _self.$nextTick(function(){
        setTimeout(function(){
          $('#myTab li:eq(0) a').tab('show');//初始化显示哪个tab
        },100);
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

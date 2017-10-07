<template>
  <div id="main">
    <div class="personal_box" id="personal-bettin">
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
            <li><a href="personalBettin" class="active"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personalFunds"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main" id="showloading">
          <div class="psn_wrap">
            <!--投注纪录-->
            <div class="psn_content">
              <div class="psn_filter">
                <span class="psn_label">时间范围</span>
                <span class="psn_form">
                                    <span><input type="text" class="formInput Wdate f1" readonly placeholder="From" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span>~</span>
                                    <span><input type="text" class="formInput Wdate f2" readonly placeholder="To" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
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
                                        <select class="formSelect">
                                            <option selected="selected">全部</option>
                                            <option value="1">处理中</option>
                                            <option value="100">已成功</option>
                                            <option value="3">已失败</option>
                                        </select>
                                    </span>
                                </span>
              </div>
              <div class="psn_filter_game">
                <span class="psn_label">快速筛选</span>
                <span class="psn_form game_filter game-list" id="game_filter" >
                                    <span class="all" @click="changeGameType('')" :class="{'active': !gameTypes || gameTypes.length < 1 }">全部</span>
                                    <span v-for="item in gameTypeList" @click="changeGameType(item.gameType)"
                                          :class="{'active': gameTypes.indexOf(item.gameType) > -1 }">{{item.gameTypeName}}</span>

                                    <a href="javascript:;" class="more more-game"><span class="icon_sprite icon_psn_add"></span><a
                                            href="javascript:;">更多游戏类型</a></a>
                                </span>
              </div>
              <div class="psn_filter_btn">
                <a  @click="searchData" id="searchbtn" class="formBtn" href="javascript:void (0)">搜&nbsp;&nbsp;&nbsp;&nbsp;索</a>
              </div>

              <div class="psn_list">
                <table class="psn_table">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>投注时间</th>
                    <th class="td_center">注单号</th>
                    <th>游戏类型</th>
                    <th>游戏名称</th>
                    <th class="td_center">投注</th>
                    <th class="td_center">有效投注</th>
                    <th class="td_center">派彩</th>
                    <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr v-for="(item,index) in bettinList">
                    <td >{{ index + 1 }}</td>
                    <td>{{momentFormatTime(item.createTime,'yyyy/MM/dd HH:mm:ss')}}</td>
                    <td>{{ item.orderId }}</td>
                    <td>{{ item.gameTypeName }}</td>
                    <td>{{ item.gameName }}</td>
                    <td class="td_center">{{ item.orderCount / 100 }}</td>
                    <td class="td_center">{{ item.effectOrderCount / 100 }}</td>
                    <td class="td_center" v-if="item.isPaid == 2">未派彩</td>
                    <td class="td_center" v-else>{{ item.payOffCount / 100 }}</td>
                    <td class="td_center">{{ item.remark }}</td>
                  </tr>

                  </tbody>
                  <tfoot>
                  <tr>
                    <td>小计</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="td_center">{{ subtotal.orderCount / 100 }}</td>
                    <td class="td_center">{{ subtotal.effectOrderCount / 100}}</td>
                    <td class="td_center">{{ subtotal.payOffCount / 100}}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colspan="9">
                      <span class="td_count">总计注额：<span class="color_red">{{ (summary.orderCount || 0) / 100 }}</span></span>
                      <span class="td_count">总有效投注：<span class="color_red">{{ (summary.effectOrderCount || 0) / 100 }}</span></span>
                      <span class="td_count">总派彩：<span class="color_red">{{ (summary.payOffCount || 0) / 100 }}</span></span>
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>

              <div class="pager">
                <a class="prev prev-page" href="javascript:;"  @click="prevPage"><span class="icon"></span></a>
                <a href="javascript:;" v-for="index in indexs" v-bind:class="{ 'active': Page==index }">
                  <span @click="pageChange(index)">{{index}}</span>
                </a>
                <a class="next next-page" @click="nextPage" href="javascript:;"><span class="icon"></span></a>
              </div>
            </div><!--end 投注纪录-->
          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>

<script>
  $(function(){
    $(".f1").val(common.randomDate());
    $(".f2").val(common.randomDate());
  })
export default {
  name: 'PersonalBettin',
  data: function () {
    return {
      formatTime: common.formatTime,
      info: {
        username: '',
        balance: 0
      },
      gameTypes: [],
      bettinList: [],
      gameTypeList: [],
      summary: [],
      Total: 0,
      Page: 1,
      Length: 10,
      all: 0,
      days: '',
      startTime: common.formatTime(new Date(), 'yyyyMMdd'),
      endTime: '',
      load:null,
      whetherReturn:false,
      memberInfo: {},
      momentFormatTime:common.momentFormatTime
    }
  },
  filters: {
    balanceNo: function (value) {
      return common.FormatNumber.get(value);
    }
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
    },
    subtotal: function () {
      var _self = this;
      var orderCount = 0, payOffCount = 0, effectOrderCount = 0;
      for (var i = 0; i < _self.bettinList.length; i++) {
        orderCount += _self.bettinList[i].orderCount;
        payOffCount += _self.bettinList[i].payOffCount;
        effectOrderCount += _self.bettinList[i].effectOrderCount;
      }
      return {
        orderCount: orderCount,
        payOffCount: payOffCount,
        effectOrderCount: effectOrderCount
      }
    }
  },
  watch: {
    days: function (val) {
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
          console.log(date.toLocaleString());
          break;
        case 2:
          // 前天
          date.setDate(date.getDate() - 2);
          date.setHours(date.getHours());
          date.setMinutes(date.getMinutes());
          date.setSeconds(date.getSeconds());
          st = date;
          et = st;
          console.log(date.toLocaleString());
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
          console.log(date.toLocaleString());
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
          console.log(date.toLocaleString());
          break;
        case 5:
          // 近1个月
          et = new Date();
          st = date.setMonth(date.getMonth() - 1);
          console.log(date.toLocaleString());
          break;
        case 6:
          // 近3个月
          et = new Date();
          st = date.setMonth(date.getMonth() - 3);
          console.log(date.toLocaleString());
          break;
      }
      $('.Wdate')[0].value = st && formatTime(new Date(st), 'yyyy/MM/dd') || '';
      $('.Wdate')[1].value = et && formatTime(new Date(et), 'yyyy/MM/dd') || '';
    }
  },
  created: function () {

    var _self = this;
    document.title = '个人中心-投注记录';
    if (common.ifLanded()) {
      _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
      // 个人信息
      _self.info.username = common.Cookie.get('userName');
      common.pollingTheMail();
      //_self.getPersonalInfo();
      _self.getGameTypeList();
      setTimeout(function(){
        _self.searchData();
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
    // 游戏类型列表
    getGameTypeList: function () {
      var _self = this;
      common.ajax('tethys-user/user/menu/gameTypeList', {}, function (data) {
        _self.gameTypeList = data && data.result || [];

        _self.$nextTick(function () {
          //筛选选中状态
          //$('.game-select li').click(function () {
          //    $(this).addClass('active').siblings().removeClass('active');
          //});
        });
      }, 'post');
    },
    // 搜索
    searchData: function () {
      var _self = this;
      _self.Page = 1;
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
    // 切换game类型
    changeGameType: function (val) {
      var _self = this;
      if (!val || val === '') {
        // 全部
        _self.gameTypes = [];
      } else {
        var games = _self.gameTypes;
        if (games.indexOf(val) > -1) {
          games.splice(games.indexOf(val), 1);
        } else {
          games.push(val);
        }
        _self.gameTypes = games;
      }
    },
    // 获取数据
    getData: function () {
      var _self = this;
      var startDate = $('.Wdate')[0] && $('.Wdate')[0].value && new Date($('.Wdate')[0].value) || '';
      var EndTime = $('.Wdate')[1] && $('.Wdate')[1].value && new Date($('.Wdate')[1].value) || '';
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
        gameTypes: _self.gameTypes.toString()
      };
      if (para.queryStartTime && para.queryEndTime) {
        if (para.queryStartTime > para.queryEndTime) {
          _self.load.stop();
          common.toast({content: '结束时间不能小于开始时间！', time: 3});
          setTimeout(function(){
            window.location.reload(true);
          },2000);
        }
      }
      common.ajax('tethys-user/user/order/orderList',para, function (data) {
        _self.load.stop();
        _self.whetherReturn = false;
        _self['bettinList'] = data && data.result && data.result.list || [];
        if (data && data.result && data.result.summary) {
          _self.Total = data.result.summary.countNum;
          _self.summary = data && data.result && data.result.summary || [];
        }
        _self.all = _self.Total % _self.Length === 0 ? parseInt(_self.Total / _self.Length, 10) : parseInt(_self.Total / _self.Length, 10) + 1;
        //console.log(JSON.stringify(_self['bettinList']));
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
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

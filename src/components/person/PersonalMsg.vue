<template>
  <div id="main">
    <div class="personal_box" id="personal-msg">
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
            <li><a v-on:click="deposit_judge();" ><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a v-on:click="draw_judge()" ><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personalBettin" ><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personalFunds"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <ul class="psn_tab" id="msg_tab">
            <li class="active"><span class="icon_tab"></span>系统公告</li>
            <li><span class="icon_tab"></span>游戏公告</li>
            <li><span class="icon_tab"></span>个人消息</li>
          </ul>
          <div class="psn_wrap">
            <!--系统公告-->
            <div class="psn_content">
              <div class="psn_filter">
                <span class="psn_label">时间范围</span>
                <span class="psn_form">
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="From" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span>~</span>
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="To" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span class="formSelect_wrap">
                                        <select class="formSelect">
                                            <option value="">昨天</option>
                                            <option value="">前天</option>
                                            <option value="">本周</option>
                                            <option value="">上周</option>
                                            <option value="">近1个月</option>
                                            <option value="">近3个月</option>
                                            <option value="">前1期</option>
                                            <option value="">前3期</option>
                                        </select>
                                    </span>
                                    <span>
                                        <a href="javascript:;" class="formBtn">搜&nbsp;&nbsp;&nbsp;&nbsp;索</a>
                                    </span>
                                </span>
              </div>

              <div class="psn_list">
                <table class="psn_table">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>主题</th>
                    <th>内容</th>
                    <th>发布时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>BBIN维护公告</td>
                    <td>BBIN将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>AG临时维护公告</td>
                    <td>AG将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MG维护公告</td>
                    <td>MG将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>AG捕鱼王临时维护公告</td>
                    <td>AG捕鱼王将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>会员自动分层功能临时维护公告</td>
                    <td>本平台将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>自动返水功能临时维护公告</td>
                    <td>本平台将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/20/19:00:12</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="pager">
                <a class="prev" href="javascript:;"><span class="icon"></span></a>
                <a href="javascript:;">1</a>
                <a class="active" href="javascript:;">2</a>
                <a href="javascript:;">3</a>
                <a href="javascript:;">4</a>
                <a href="javascript:;">5</a>
                <a href="javascript:;">6</a>
                <a href="javascript:;">7</a>
                <a href="javascript:;">8</a>
                <a class="next" href="javascript:;"><span class="icon"></span></a>
              </div>
            </div><!--end 系统公告-->
            <!--游戏公告-->
            <div class="psn_content" style="display:none;">
              <div class="psn_filter">
                <span class="psn_label">时间范围</span>
                <span class="psn_form">
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="From" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span>~</span>
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="To" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span class="formSelect_wrap">
                                        <select class="formSelect">
                                            <option value="">昨天</option>
                                            <option value="">前天</option>
                                            <option value="">本周</option>
                                            <option value="">上周</option>
                                            <option value="">近1个月</option>
                                            <option value="">近3个月</option>
                                            <option value="">前1期</option>
                                            <option value="">前3期</option>
                                        </select>
                                    </span>
                                    <span>
                                        <a href="javascript:;" class="formBtn">搜&nbsp;&nbsp;&nbsp;&nbsp;索</a>
                                    </span>
                                </span>
              </div>

              <div class="psn_list">
                <table class="psn_table">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>游戏厅别</th>
                    <th>主题</th>
                    <th>内容</th>
                    <th>发布时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>BBIN</td>
                    <td>BBIN维护公告</td>
                    <td>BBIN将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>AG</td>
                    <td>AG临时维护公告</td>
                    <td>AG将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MG</td>
                    <td>MG维护公告</td>
                    <td>MG将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>AG</td>
                    <td>AG捕鱼王临时维护公告</td>
                    <td>AG捕鱼王将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>PT</td>
                    <td>会员自动分层功能临时维护公告</td>
                    <td>本平台将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>BBIN</td>
                    <td>自动返水功能临时维护公告</td>
                    <td>本平台将于美东时间2017年04月25日18:00-22:00进行维护更新，为了确保连接平台更加通畅。。。</td>
                    <td>2017/04/20/19:00:12</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="pager">
                <a class="prev" href="javascript:;"><span class="icon"></span></a>
                <a href="javascript:;">1</a>
                <a class="active" href="javascript:;">2</a>
                <a href="javascript:;">3</a>
                <a href="javascript:;">4</a>
                <a href="javascript:;">5</a>
                <a href="javascript:;">6</a>
                <a href="javascript:;">7</a>
                <a href="javascript:;">8</a>
                <a class="next" href="javascript:;"><span class="icon"></span></a>
              </div>
            </div><!--end 游戏公告-->
            <!--个人消息-->
            <div class="psn_content" style="display:none">
              <div class="psn_filter">
                <span class="psn_label">时间范围</span>
                <span class="psn_form">
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="From" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span>~</span>
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="To" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span class="formSelect_wrap">
                                        <select class="formSelect">
                                            <option value="">昨天</option>
                                            <option value="">前天</option>
                                            <option value="">本周</option>
                                            <option value="">上周</option>
                                            <option value="">近1个月</option>
                                            <option value="">近3个月</option>
                                            <option value="">前1期</option>
                                            <option value="">前3期</option>
                                        </select>
                                    </span>
                                    <span>
                                        <a href="javascript:;" class="formBtn">搜&nbsp;&nbsp;&nbsp;&nbsp;索</a>
                                    </span>
                                </span>
              </div>

              <div class="psn_list">
                <table class="psn_table">
                  <thead>
                  <tr>
                    <th>序号</th>
                    <th>讯息内容</th>
                    <th>接收时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>WARNING:当前账户安全等级较低，建议及时完善资料！</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>WARNING:当前账户安全等级较低，建议及时完善资料！</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>WARNING:当前账户安全等级较低，建议及时完善资料！</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>新玩家注册成功：恭喜您已成功注册账号，当前账户安全等级较低，建议及时完善资料！</td>
                    <td>2017/04/24/22:00:12</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="pager">
                <a class="prev" href="javascript:;"><span class="icon"></span></a>
                <a href="javascript:;">1</a>
                <a class="active" href="javascript:;">2</a>
                <a href="javascript:;">3</a>
                <a href="javascript:;">4</a>
                <a href="javascript:;">5</a>
                <a href="javascript:;">6</a>
                <a href="javascript:;">7</a>
                <a href="javascript:;">8</a>
                <a class="next" href="javascript:;"><span class="icon"></span></a>
              </div>
            </div><!--end 个人消息-->
          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalMsg',
  data: function () {
    return {
      changeTime: common.changeTime,
      formatTime: common.formatTime,
      curTab: 'system',

      info: {
        username: '',
        balance: 0
      },
      systemList: [],
      gameList: [],
      msgList: [],
      Total: 0,
      Page: 1,
      Length: 10,
      all: 0,
      days: ''
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
          // console.log("left="+left);

          right = _self.Page + 4;
          // console.log("right="+right);
        } else {
          if (_self.Page <= 5) {
            left = 1;
            right = 10;
          } else {
            right = _self.all;
            left = _self.all - 9;
          }
        }
        // console.log("left="+left);
      }

      while (left <= right) {
        arr.push(left);
        left++;
      }

      return arr;
    }
  },
  created: function () {
    var _self = this;
    document.title = '个人中心-资金记录';
    if (common.ifLanded()) {
      _self.info = common.Cookie.get('memberInfo') && JSON.parse(common.Cookie.get('memberInfo')) || {};
      // 个人信息
      _self.info.username = common.Cookie.get('userName') || '';
      //_self.getPersonalInfo();
      common.pollingTheMail();
      var index = common.Cookie.get('notice');
      // console.log("index="+index);
      if(index == "0"){
        common.Cookie.set("tabIndex","0");
        _self.getData('system');//初始化显示哪个tab
      }
      if(index == "1"){
        common.Cookie.set("tabIndex","1");
        _self.getData('game');//初始化显示哪个tab
      }
      if(index == "2"){
        common.Cookie.set("tabIndex","2");
        _self.getData('msg');//初始化显示哪个tab
      }
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
  watch: {
    days: function (val) {
      if (!val || val == '') {
        return '';
      }
      var date = new Date();
      var st = '', et = '';
      switch (parseInt(val, 10)) {
        case 1:
          // 昨天
          date.setDate(date.getDate() - 1);
          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          st = date;
          et = new Date(st).getTime() + 24 * 60 * 60 * 1000;
          break;
        case 2:
          // 前天
          date.setDate(date.getDate() - 2);
          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          st = date;
          et = new Date(st).getTime() + 24 * 60 * 60 * 1000;
          break;
        case 3:
          // 本周
          et = new Date();
          var day = date.getDay();
          if (day == 0) {
            day = 6;
          }
          date.setDate(date.getDate() - day);
          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          st = date;
          break;
        case 4:
          // 上周
          var day = date.getDay();
          if (day == 0) {
            day = 6;
          }
          date.setDate(date.getDate() - day);
          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          et = date;
          st = new Date(et).getTime() - 7 * 24 * 60 * 60 * 1000;
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
    }
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
      $(".sone").click();
      $(".lone").removeClass("icon-refreshhover_lone");
      $(".lone").addClass("icon-refreshmyword_info");
      common.ajax('member/refresh',{}, function (data) {
        setTimeout(function(){
          $(".lone").removeClass("icon-refreshmyword_info");
        },600);
        _self.info.balance = data && data.result && data.result.balance || 0;
        common.Cookie.set('memberInfo', JSON.stringify(_self.info));
      });
    },
    // 搜索
    searchData: function () {
      var _self = this;
      _self.getData(_self.curTab);
    },
    // 获取数据
    getData: function (type) {
      var _self = this;
      var interfaces = {
        system: 'cms/bulletin/sys/list',
        game: 'cms/bulletin/game/list',
        msg: 'msg/list'
      };
      var para = {
        beginTime: $('.Wdate')[0] && $('.Wdate')[0].value && new Date($('.Wdate')[0].value).getTime() || '',
        endTime: $('.Wdate')[1] && $('.Wdate')[1].value && new Date($('.Wdate')[1].value).getTime() || '',
        pageNo: _self.Page,
        pageSize: _self.Length,
      };
      if ('msg' === type) {
        para = {
          page: _self.Page,
          count: _self.Length
        };
      }
      common.ajax(interfaces[type],
        para, function (data) {
          _self[type + 'List'] = data && data.result && data.result.list || [];
          _self.Total = data && data.result && data.result.total || 0;
          _self.all = _self.Total / _self.Length === 0 ? parseInt(_self.Total / _self.Length, 10) : parseInt((_self.Total-1) / _self.Length, 10) + 1;
          // console.log(JSON.stringify(_self[type + 'List']));
        });
    },
    changeMsg: function (id) {
      var _self = this;
      common.ajax('msg/update', {id: id}, function (data) {
        _self.msgList.id = id;
        // console.log(_self.msgList.id);
      },'post');

    },
    // tab 切换
    changeTab: function (tab) {
      if(tab == "system"){
        common.Cookie.set("tabIndex","0");
        //  console.log("tabIndex="+0);
        var redDotMsg = $('.aa_one').next();
        if(redDotMsg){
          redDotMsg.remove();
        }
      }
      if(tab == "game"){
        var redDotMsg = $('.aa_two').next();
        common.Cookie.set("tabIndex","1");
        //  console.log("tabIndex="+1);
        if(redDotMsg){
          redDotMsg.remove();
        }
      }
      if(tab == "msg"){
        var redDotMsg = $('.aa_three').next();
        common.Cookie.set("tabIndex","2");
        //    console.log("tabIndex="+2);
        if(redDotMsg){
          redDotMsg.remove();
        }
      }
      var _self = this;
      _self.curTab = tab;
      _self.Page = 1;
      _self.Total = 0;
      _self.searchData();
    },
    // 前一页
    prevPage: function () {
      if (this.Page > 1) {
        this.Page--;
        this.searchData();
      }
    },
    nextPage: function () {
      if (this.Page < this.all) {
        this.Page++;
        this.searchData();
      }
    },
    // 切换页码
    pageChange: function (index) {
      if (index != this.Page) {
        this.Page = index;
        this.searchData();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

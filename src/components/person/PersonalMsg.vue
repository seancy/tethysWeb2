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
            <p class="name">vivien</p>
            <p class="balance">0.00</p>
            <p class="refresh">Your Balance<span class="icon_sprite icon_refresh_money"></span></p>
          </div>
          <ul class="psn_menu">
            <li><a href="personal-info.html"><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
            <li><a href="personal-deposit.html"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a href="personal-callin.html"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personal-bettin.html"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personal-funds.html"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
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
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

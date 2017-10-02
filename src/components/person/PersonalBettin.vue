<template>
  <div class="personal_box" id="personal-bettin">
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
          <li><a href="info"><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
          <li><a href="personal-deposit.html"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
          <li><a href="personal-callin.html"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
          <li><a href="personal-bettin.html" class="active"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
          <li><a href="personal-funds.html"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
        </ul>
      </div>
      <!--end 左侧选单-->
      <!--右侧内容-->
      <div class="right_main">
        <div class="psn_wrap">
          <!--投注纪录-->
          <div class="psn_content">
            <div class="psn_filter">
              <span class="psn_label">时间范围</span>
              <span class="psn_form">
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="From" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span>~</span>
                                    <span><input type="text" class="formInput Wdate" readonly placeholder="To" onFocus="WdatePicker({dateFmt:'yyyy/MM/dd'})"></span>
                                    <span class="formSelect_wrap">
                                        <select class="formSelect">
                                            <option>快速筛选</option>
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
              <span class="psn_form game_filter" id="game_filter">
                                    <span class="all active">全部</span>
                                    <span>MG电子</span>
                                    <span>MG视讯</span>
                                    <span>BB视讯</span>
                                    <span>BB电子</span>
                                    <span>AG视讯</span>
                                    <span>AG电子</span>
                                    <span>BB体育</span>
                                    <span>BB彩票</span>
                                    <span>PT电子</span>
                                    <span>PT视讯</span>
                                    <span>UG体育</span>
                                    <span>DG视讯</span>
                                    <span>MWG电子</span>
                                    <span>LEBO视讯</span>
                                    <span>HABA电子</span>
                                    <span>TGP电子</span>
                                    <span>LAX电子</span>
                                    <span>BG视讯</span>
                                    <span>OG视讯</span>
                                    <span>SB视讯</span>
                                    <span>GD视讯</span>
                                    <a href="javascript:;" class="more"><span class="icon_sprite icon_psn_add"></span>更多游戏类型</a>
                                </span>
            </div>
            <div class="psn_filter_btn">
              <a href="javascript:;" class="formBtn">搜&nbsp;&nbsp;&nbsp;&nbsp;索</a>
            </div>

            <div class="psn_list">
              <table class="psn_table">
                <thead>
                <tr>
                  <th>序号</th>
                  <th>投注时间</th>
                  <th>注单号</th>
                  <th>游戏类型</th>
                  <th>游戏名称</th>
                  <th class="td_center">投注</th>
                  <th class="td_center">有效投注</th>
                  <th class="td_center">派彩</th>
                  <th>备注</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>2017/08/08<br />08:39:57</td>
                  <td>1502195919600003434</td>
                  <td>AG电子</td>
                  <td>游戏名称</td>
                  <td class="td_center">100</td>
                  <td class="td_center">32538</td>
                  <td class="td_center">0</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2017/08/08<br />08:39:57</td>
                  <td>1502195919600003434</td>
                  <td>AG电子</td>
                  <td>游戏名称</td>
                  <td class="td_center">100</td>
                  <td class="td_center">32538</td>
                  <td class="td_center">0</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2017/08/08<br />08:39:57</td>
                  <td>1502195919600003434</td>
                  <td>AG电子</td>
                  <td>游戏名称</td>
                  <td class="td_center">100</td>
                  <td class="td_center">32538</td>
                  <td class="td_center">0</td>
                  <td></td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td>小计</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="td_center">0</td>
                  <td class="td_center">0</td>
                  <td class="td_center">0</td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="9">
                    <span class="td_count">总计注额：<span class="color_red">0</span></span>
                    <span class="td_count">总有效投注：<span class="color_red">0</span></span>
                    <span class="td_count">总派彩：<span class="color_red">0</span></span>
                  </td>
                </tr>
                </tfoot>
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
          </div><!--end 投注纪录-->
        </div>
      </div>
      <!--end 右侧内容-->
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

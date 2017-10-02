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
            <p class="name">vivien</p>
            <p class="balance">0.00</p>
            <p class="refresh">Your Balance<span class="icon_sprite icon_refresh_money"></span></p>
          </div>
          <ul class="psn_menu">
            <li><a href="personal-info.html"><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
            <li><a href="personal-deposit.html"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a href="personal-callin.html"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personal-bettin.html"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personal-funds.html" class="active"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <ul class="psn_tab" id="funds_tab">
            <li class="active"><span class="icon_tab"></span>返&nbsp;&nbsp;水</li>
            <li><span class="icon_tab"></span>充&nbsp;&nbsp;值</li>
            <li><span class="icon_tab"></span>提&nbsp;&nbsp;款</li>
            <li><span class="icon_tab"></span>优&nbsp;&nbsp;惠</li>
          </ul>
          <div class="psn_wrap">
            <!--返水-->
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
                    <th>订单编号</th>
                    <th>时间</th>
                    <th>游戏类型</th>
                    <th class="td_center">状态</th>
                    <th>交易金额</th>
                    <th>账户余额</th>
                    <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>AG电子</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">小计</td>
                    <td class="td_center">1000.00</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">总计</td>
                    <td class="td_center"><span class="color_red">18200.00</span></td>
                    <td></td>
                    <td></td>
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
            </div><!--end 返水-->
            <!--充值-->
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
                    <th>订单编号</th>
                    <th>时间</th>
                    <th>账变方式</th>
                    <th class="td_center">状态</th>
                    <th>交易金额</th>
                    <th>账户余额</th>
                    <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统入款</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">小计</td>
                    <td class="td_center">1000.00</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">总计</td>
                    <td class="td_center"><span class="color_red">18200.00</span></td>
                    <td></td>
                    <td></td>
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
            </div><!--end 充值-->
            <!--提款-->
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
                    <th>订单编号</th>
                    <th>时间</th>
                    <th>账变方式</th>
                    <th class="td_center">状态</th>
                    <th>交易金额</th>
                    <th>账户余额</th>
                    <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>系统提出</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>1111502017072920170729</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">小计</td>
                    <td class="td_center">1000.00</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">总计</td>
                    <td class="td_center"><span class="color_red">18200.00</span></td>
                    <td></td>
                    <td></td>
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
            </div><!--end 提款-->
            <!--优惠-->
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
                    <th>订单编号</th>
                    <th>时间</th>
                    <th>账变方式</th>
                    <th class="td_center">状态</th>
                    <th>交易金额</th>
                    <th>账户余额</th>
                    <th>备注</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>人工汇款优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>人工汇款优惠</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>人工汇款优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>人工汇款优惠</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>人工汇款优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>人工汇款优惠</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>人工汇款优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>人工汇款优惠</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>活动优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>活动优惠</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>活动优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>活动优惠</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>人工存入返点优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>人工存入返点优惠</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>1502195919600003434</td>
                    <td>2017/08/08<br />08:39:57</td>
                    <td>人工存入返点优惠</td>
                    <td><span class="color_green">已成功</span></td>
                    <td class="td_center">100</td>
                    <td>32538</td>
                    <td>人工存入返点优惠</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">小计</td>
                    <td class="td_center">1000.00</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="2">总计</td>
                    <td class="td_center"><span class="color_red">18200.00</span></td>
                    <td></td>
                    <td></td>
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
            </div><!--end 优惠-->
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

</style>

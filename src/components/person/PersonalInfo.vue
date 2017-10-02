<template>
  <div id="main">
    <div class="personal_box" id="personal-info">
      <div class="contain_width">
        <h2 class="personal_title"></h2>
      </div>
      <div class="contain_width">
        <!--左侧选单-->
        <div class="left_menu">
          <div class="user_info">
            <div class="img"><img src="../../../static/images/pic_user.png"></div>
            <p class="name"></p>
            <p class="balance"></p>
            <p class="refresh">Your Balance<span class="icon_sprite icon_refresh_money"></span></p>
          </div>
          <ul class="psn_menu">
            <li><a href="personalInfo" class="active"><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
            <li><a href="personalDeposit"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a href="personalCallin"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personalBettin"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personalFunds"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <div class="psn_wrap">
            <!--个人中心-->
            <div class="psn_content">
              <dl class="psn_info">
                <dt><h3>帐户资料</h3></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="label">帐号</span>
                      <span class="form">vivien</span>
                    </li>
                    <li>
                      <span class="label">币种</span>
                      <span class="form">人民币</span>
                    </li>
                    <li>
                      <span class="label">最后登入时间</span>
                      <span class="form">2017/08/07 01:09:13</span>
                    </li>
                    <li>
                      <span class="label">密码设置</span>
                      <span class="form">
                                                <a class="btn_gdOrange" href="personal-modify-password.html">修改登录密码</a>
                                                <a class="btn_gdGold" href="personal-modify-password.html">修改支付密码</a>
                                            </span>
                    </li>
                  </ul>
                </dd>
                <dt><h3>帐户安全</h3></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="label">银行卡号</span>
                      <span class="form">1200548213345789</span>
                    </li>
                    <li>
                      <span class="label">真实姓名</span>
                      <span class="form">李发</span>
                    </li>
                    <li>
                      <span class="label">手机号码</span>
                      <span class="form">19123456781</span>
                    </li>
                  </ul>
                </dd>
                <dt><h3>个人信息</h3><a class="btn_gdGold" id="btn_edit" href="javascript:;">修改</a> <a class="btn_gdGold" style="display:none" href="javascript:;">保存</a></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="label">微信</span>
                      <span class="form info">vivien</span>
                      <span class="form edit" style="display:none"><input type="text" class="formInput"></span>
                    </li>
                    <li>
                      <span class="label">QQ</span>
                      <span class="form info">1328287015</span>
                      <span class="form edit" style="display:none"><input type="text" class="formInput"></span>
                    </li>
                    <li>
                      <span class="label">电子邮箱</span>
                      <span class="form info">vivien.lin@kingbaytech.com</span>
                      <span class="form edit" style="display:none"><input type="text" class="formInput"></span>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div><!--end 个人中心-->
          </div>
        </div>
        <!--end 右侧内容-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PersonalInfo',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>



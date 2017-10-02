<template>
  <div id="main">
    <div class="personal_box" id="personal-modify-password">
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
            <li><a href="personal-info.html" class="active"><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
            <li><a href="personal-deposit.html"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a href="personal-callin.html"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personal-bettin.html"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personal-funds.html"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <div class="psn_wrap">
            <!--修改密码-->
            <div class="psn_content">
              <dl class="psn_info">
                <dt><h3>修改登录密码</h3><a class="btn_gdGold" href="javascript:;">修改支付密码</a></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="form"><input type="text" class="formInput" placeholder="请输入原登录密码"></span>
                    </li>
                    <li>
                      <span class="form"><input type="text" class="formInput" placeholder="新登录密码"></span>
                    </li>
                    <li>
                      <span class="form"><input type="text" class="formInput" placeholder="重复登录密码"></span>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div class="form_submit">
                <a class="formBtn" href="javascript:;">提交申请</a>
              </div>
            </div><!--end 修改密码-->
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

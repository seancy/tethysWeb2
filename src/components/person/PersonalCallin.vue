<template>
<!--  <div id="main">

  </div>-->
  <div class="personal_box" id="personal-callin">
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
          <li><a href="personal-callin.html" class="active"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
          <li><a href="personal-bettin.html"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
          <li><a href="personal-funds.html"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
        </ul>
      </div>
      <!--end 左侧选单-->
      <!--右侧内容-->
      <div class="right_main">
        <div class="psn_wrap">
          <!--取款-->
          <div class="psn_content">
            <div class="deposit_wrap">
              <dl class="psn_info">
                <dt><h3>银行取款</h3></dt>
                <dd>
                  <ul class="style_item">
                    <li>
                      <span class="label">真实姓名</span>
                      <span class="form">李发</span>
                    </li>
                    <li>
                      <span class="label">收款账号</span>
                      <span class="form">中国工商银行-北京-中关村分行-62**********22</span>
                      <a href="personal-callin_edit.html" class="edit">修改银行帐号</a>
                    </li>
                    <li>
                      <span class="label">钱包余额</span>
                      <span class="form">¥ 1000000.00</span>
                    </li>
                    <li>
                      <span class="label">取款金额</span>
                      <span class="form"><input type="text" class="formInput" placeholder="¥ 1-9999999999"></span>
                      <span class="error">请输入正确金额！</span>
                    </li>
                    <li>
                      <span class="label">取款金额</span>
                      <span class="form"><input type="text" class="formInput" placeholder="请输入密码"></span>
                      <span class="error"></span>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div class="form_submit">
                <a class="formBtn modalBtn" href="#modalConform">申请取款</a>
                <!--！仅供UI测试弹窗--><p><a class="modalBtn" href="#modalConform">打码量符合弹窗</a> <a class="modalBtn" href="#modalNoConform">打码量不符合弹窗</a></p><!--end ！仅供UI测试弹窗-->
                <!--打码量符合讯息-->
                <div id="modalConform" style="display:none;">
                  <div class="callin_popup">
                    <div class="icon_conform"></div>
                    <h3>取款确认</h3>
                    <p>当前取款申请符合出款要求</p>
                    <p><span class="callin_money">本次取款：¥ 9999999999</span></p>
                    <div class="modal_btn">
                      <a class="formBtn btn_modal" href="javascript:;">取&nbsp;&nbsp;消</a>
                      <a class="formBtn btn_modal" href="javascript:;">确&nbsp;&nbsp;认</a>
                    </div>
                  </div>
                </div><!--end 打码量符合讯息-->
                <!--打码量不符合讯息-->
                <div id="modalNoConform" style="display:none;">
                  <div class="callin_popup">
                    <div class="icon_noconform"></div>
                    <h3>警告</h3>
                    <p>当前取款申请不符合出款要求，须扣除<span class="color_red">1000.00</span>元</p>
                    <p><span class="callin_money">最终可取款：¥ 1000.00</span></p>
                    <div class="modal_btn">
                      <a class="formBtn btn_modal" href="javascript:;">取&nbsp;&nbsp;消</a>
                      <a class="formBtn btn_modal" href="javascript:;">确&nbsp;&nbsp;认</a>
                    </div>
                  </div>
                </div><!--end 打码量不符合讯息-->
              </div>
            </div>
          </div><!--end 取款-->
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
<style scoped>

</style>

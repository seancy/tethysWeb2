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
            <p class="name">vivien</p>
            <p class="balance">0.00</p>
            <p class="refresh">Your Balance<span class="icon_sprite icon_refresh_money"></span></p>
          </div>
          <ul class="psn_menu">
            <li><a href="personal-info.html"><span class="icon_sprite icon_psn_info"></span>个人中心</a></li>
            <li><a href="personal-deposit.html" class="active"><span class="icon_sprite icon_psn_deposit"></span>存款</a></li>
            <li><a href="personal-callin.html"><span class="icon_sprite icon_psn_callin"></span>取款</a></li>
            <li><a href="personal-bettin.html"><span class="icon_sprite icon_psn_bettin"></span>投注记录</a></li>
            <li><a href="personal-funds.html"><span class="icon_sprite icon_psn_funds"></span>资金纪录</a></li>
          </ul>
        </div>
        <!--end 左侧选单-->
        <!--右侧内容-->
        <div class="right_main">
          <ul class="psn_tab" id="deposit_tab">
            <li class="active"><span class="icon_tab"></span>钱包秒充（3秒到账）</li>
            <li><span class="icon_tab"></span>银行转帐(推荐)</li>
            <li><span class="icon_tab"></span>在线支付(立即到帐)</li>
            <li><span class="icon_tab"></span>扫码支付(立即到帐)</li>
          </ul>
          <div class="psn_wrap">
            <!--钱包秒充（3秒到账）-->
            <div class="psn_content">
              <div class="deposit_content">
                <div class="deposit_info">
                  <div class="img"><img src="../../../static/images/deposit_wallet.jpg" width="710" height="300" alt=""></div>
                  <div class="text">
                    <ul>
                      <li>钱包秒充支持：支付宝、微信扫码汇款，支付便捷，到款迅速！</li>
                      <li>本公司提供微信、支付宝收款号为个人微信号不是公众号，请确认名称正确后汇款。</li>
                    </ul>
                  </div>
                </div>
                <div class="form_submit">
                  <a class="formBtn" href="personal-deposit1-1.html">前往转帐</a>
                </div>
              </div>
            </div><!--end 钱包秒充（3秒到账）-->
            <!--银行转帐(推荐)-->
            <div class="psn_content" style="display:none;">
              <div class="deposit_content">
                <div class="deposit_info">
                  <div class="img"><img src="../../../static/images/deposit_bank.jpg" alt=""></div>
                  <div class="text">
                    <p>※什么是银行转账？</p>
                    <p>通过网银转账、ATM/柜台存入、手机网银转账等方式汇款。</p>
                    <p>收款帐户不定期更新，请在每次存款前，点击“银行卡转账”页面查询最新收款帐号。</p>
                    <p>※※※若存款到过期的账户导致财务无法查收，会员请自行承担损失。望珍惜！※※※</p>
                  </div>
                </div>
                <div class="form_submit">
                  <a class="formBtn" href="personal-deposit2-1.html">前往转帐</a>
                </div>
              </div>
            </div><!--end 银行转帐(推荐)-->
            <!--在线支付(立即到帐)-->
            <div class="psn_content" style="display:none">
              <div class="deposit_content">
                <div class="deposit_info">
                  <div class="img"><img src="../../../static/images/deposit_online.jpg" alt=""></div>
                  <div class="text">
                    <p>※ 跨行汇款或存款金额低于1000000元建议使用在线支付，无需手续费，支付完成，立即火速到账。</p>
                  </div>
                </div>
                <div class="form_submit">
                  <a class="formBtn" href="personal-deposit3-1.html">前往转帐</a>
                </div>
              </div>
            </div><!--end 在线支付(立即到帐)-->
            <!--扫码支付(立即到帐)-->
            <div class="psn_content" style="display:none">
              <div class="deposit_content">
                <div class="deposit_info">
                  <div class="img"><img src="../../../static/images/deposit_code.jpg" alt=""></div>
                  <div class="text">
                    <p>※温馨提示：支持微信、支付宝、QQ扫码支付，建议小额支付、大额支付可选择其它支付方式或分多次支付 ※支付成功后，请等待几秒钟，提示「支付成功」按确认键后再关闭支付窗口，款项会即时入账。</p>
                  </div>
                </div>
                <div class="form_submit">
                  <a class="formBtn" href="personal-deposit4-1.html">前往转帐</a>
                </div>
              </div>
            </div><!--end 扫码支付(立即到帐)-->
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

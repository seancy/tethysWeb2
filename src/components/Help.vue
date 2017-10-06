<template>
  <div id="main">
      <div class="personal_box" id="help">
          <div class="contain_width">
              <h2 class="personal_title"></h2>
          </div>
          <div class="contain_width">
              <!--左侧选单-->
              <div class="left_menu">
                  <ul class="psn_menu" id="help_menu">
                      <li>
                          <a href="help.html" class="active"><span class="icon_sprite icon_help-withdrawal"></span>常见问题</a>
                          <ul>
                              <li><a href="javascript:;">真实姓名</a></li>
                              <li><a href="javascript:;">找回用户名</a></li>
                              <li><a href="javascript:;">注册与登陆</a></li>
                              <li><a href="javascript:;">技术相关</a></li>
                              <li><a href="javascript:;">银行卡绑定</a></li>
                              <li><a href="javascript:;">找回登录密码</a></li>
                              <li><a href="javascript:;">找回支付密码</a></li>
                              <li><a href="javascript:;">优惠活动</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="help.html"><span class="icon_sprite icon_help-deposit"></span>存款帮助</a>
                          <ul>
                              <li><a href="javascript:;">在线支付</a></li>
                              <li><a href="javascript:;">扫码支付</a></li>
                              <li><a href="javascript:;">银行转账</a></li>
                              <li><a href="javascript:;">柜员机/柜台操作流程</a></li>
                              <li><a href="javascript:;">网站转账流程</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="help.html"><span class="icon_sprite icon_help_duty"></span>取款帮助</a>
                          <ul>
                              <li><a href="javascript:;">取款稽核</a></li>
                              <li><a href="javascript:;">取款流程</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
              <!--end 左侧选单-->
              <!--右侧内容-->
              <div class="right_main">
                  <div class="psn_wrap">
                      <!--常见问题-->
                      <div class="psn_content">
                          <div class="join_wrap">
                              <p class="highlight">真实姓名</p>
                              <p style="color:#00B0F0;">为什么我要设置真实姓名？</p>
                              <p>真实姓名是证明您身份的重要凭证之一，且真实姓名将用于匹配收款银行账号，银行卡账户名与玩家真实姓名一致时才可以取款成功！为确保您账户的安全，真实姓名一旦设置不可修改！</p>
                              <p style="color:#00B0F0;">真实姓名填错了怎么修改？</p>
                              <p>一经填写，玩家本人无法直接修改真实姓名！如有需要，请您联系客服服协助您做数据更改。</p>
                              <p style="color:#00B0F0;">我的真实姓名会被泄漏吗？</p>
                              <p>我公司网站绝对安全，我们决不泄漏玩家的真实姓名及其他个人资料给任何商业机构。</p>
                              <p>所有玩家提供的个人信息数据都被传送到安全端口(SSL 128bitencryption Standard)，并存放在公众无法进入的严密保护的环境下，同时所有数据的内部出入都受到限制及严密的监控。</p>
                          </div>
                      </div><!--end 常见问题-->
                  </div>
              </div>
              <!--end 右侧内容-->
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'help',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
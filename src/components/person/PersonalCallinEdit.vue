<template>
  <div id="main">
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
                  <dt><h3>修改取款银行账号</h3></dt>
                  <dd>
                    <ul class="style_item">
                      <li>
                        <span class="label">选择银行<span class="color_red">※</span></span>
                        <span class="form formSelect_wrap">
                                                    <select id="bankSelect"  class="formSelect">
                                                        <option value="">请选择</option>
                                                        <option value="ICBC">工商银行</option>
                                                        <option value="ABC">农业银行</option>
                                                        <option value="CCB">建设银行</option>
                                                        <option value="BCOM">交通银行</option>
                                                        <option value="BOC">中国银行</option>
                                                        <option value="CMB">招商银行</option>
                                                        <option value="CMBC">民生银行</option>
                                                        <option value="CEBB">光大银行</option>
                                                        <option value="BOB">北京银行</option>
                                                        <option value="SHB">上海银行</option>
                                                        <option value="NBB">宁波银行</option>
                                                        <option value="HXB">华夏银行</option>
                                                        <option value="CIB">兴业银行</option>
                                                        <option value="PSBC">中国邮政银行</option>
                                                        <option value="SPABNK">平安银行</option>
                                                        <option value="SPDB">浦发银行</option>
                                                        <option value="ECITIC">中信银行</option>
                                                        <option value="HZB">杭州银行</option>
                                                        <option value="GDB">广发银行</option>
                                                        <option value="QQ_SCAN">QQ</option>
                                                    </select>
                                                </span>
                      </li>
                      <li>
                        <span class="label">真实姓名</span>
                        <span class="form">李发</span>
                        <span class="ui_error"></span>
                      </li>
                      <li>
                        <span class="label">开户行<span class="color_red">※</span></span>
                        <span class="form"><input type="text" class="formInput" placeholder="请输入开户行"></span>
                        <span class="ui_error"></span>
                      </li>
                      <li>
                        <span class="label">银行卡号<span class="color_red">※</span></span>
                        <span class="form"><input type="text" class="formInput" placeholder="请输入银行卡号"></span>
                        <span class="ui_error"></span>
                      </li>
                      <li>
                        <span class="label">手机号码</span>
                        <span class="form">13839230483</span>
                        <span class="ui_error"></span>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <div class="form_submit">
                  <a class="formBtn" href="javascript:;">确&nbsp;&nbsp;认</a>
                </div>
              </div>
            </div><!--end 取款-->
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

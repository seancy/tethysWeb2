<template>
    <div>
        <div id="footer" v-if="!/HH/.test(pagename)">
            <div class="contain_width">
                <div class="link_list">
                    <dl class="link_block parner">
                        <dt>合作伙伴</dt>
                        <dd>
                            <a class="link-ag"></a>
                            <a class="link-mg"></a>
                            <a class="link-bb"></a>
                            <a class="link-playtech"></a>
                            <a class="link-lottery"></a>
                            <a class="link-oriental"></a>
                            <a class="link-allbet"></a>
                        </dd>
                    </dl>
                    <dl class="link_block">
                        <dt>牌照</dt>
                        <dd>
                            <a class="link-pagcor"></a>
                        </dd>
                    </dl>
                </div>
                <div class="link_list">
                    <dl class="link_block pay">
                        <dt>支付方式</dt>
                        <dd>
                            <a class="link-visa"></a>
                            <a class="link-mastercard"></a>
                            <a class="link-unionpay"></a>
                            <a class="link-wechatpay"></a>
                            <a class="link-alipay"></a>
                        </dd>
                    </dl>
                    <dl class="link_block responsibility">
                        <dt>责任博彩</dt>
                        <dd>
                            <a class="link-18"></a>
                            <a class="link-gavcare"></a>
                            <a class="link-hand"></a>
                        </dd>
                    </dl>
                </div>
                <div class="footer_menu">
                    <ul>
                        
                        <li v-for="(item,index) in footer ">
                            <a  v-if="item.code != 'HELP'" :href="'/about?id='+[item.code]">{{item.title}}</a>
                            <a  href="/help" v-else >{{item.title}}</a>
                        </li>

                        <!-- <li><a href="/about?id=IC01">关于我们</a></li>
                        <li><a href="policy.html">隐私政策</a></li>
                        <li><a href="duty.html">责任博彩</a></li>
                        <li><a href="disclaimer.html">免责声明</a></li>
                        <li><a href="join.html">代理加盟</a></li>
                        <li><a href="contact.html">联系我们</a></li>
                        <li><a href="help.html">帮助中心</a></li> -->

                    </ul>
                </div>
            </div>
            <div class="copyright">Cparisian Casino © 版权所有 2011-2017属于Las Vegas Sands拉斯维加斯金沙集团(中国)有限公司注册运营</div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'bottomFooter',
  data:function(){
    return {
      footer:[],
      pagename: '',
    }
  },
  created:function(){
    var _self=this;
    _self.getFooterData();
    this.pagename = this.$route.name || '';   // 如果是 HHForm则隐藏，支付iframe跳转
  },
  methods:{
    getFooterData:function(){
      var _self = this;
      common.ajax('cms/client/copyright/bottom', {}, function(data) {
        _self.footer = data && data.result || [];
        common.Cookie.set('footer', JSON.stringify(_self.footer));
      });
    }
  }
}
</script>
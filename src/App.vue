<template>
  <div>
    <!-- 模态框（Modal） -->
    <div class="modal fade message_content" style="z-index: 99999" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="font-weight: normal;">
              &times;
            </button>
            <h4 class="modal-title">
              提示信息
            </h4>
          </div>
          <div class="modal-body" style="font-size: 15px;text-align: center;align-items: center;line-height: 22px;">
          </div>
          <div class="modal-footer" style="border-top:none;">
            <button type="button" class="btn btn-default" data-dismiss="modal" style="margin-right: 10px;min-width: 80px;">
              关闭
            </button>
            <button type="button" class="btn btn-primary" style="min-width: 80px;">
              提交更改
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 模态框（Modal）end -->
    <div class="modal fade message_content_drawMoney" style="z-index: 99999" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="font-weight: normal;">
              &times;
            </button>
            <h4 class="modal-title">
              提示信息
            </h4>
          </div>
          <div class="modal-body" style="font-size: 15px;text-align: center;align-items: center;line-height: 22px;">
          </div>
          <div class="modal-footer" style="border-top:none;">
            <button type="button" class="btn btn-default" data-dismiss="modal" style="margin-right: 10px;min-width: 80px;">
              关闭
            </button>
            <button type="button" class="btn btn-primary" style="min-width: 80px;">
              提交更改
            </button>
          </div>
        </div>
      </div>
    </div>
    <topHeader></topHeader>
    <!-- <div id="app"> -->
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
    <!-- </div> -->
    <bottomFooter></bottomFooter>
    <onlineService></onlineService>
    <popupAd></popupAd>

  </div>

</template>

<script>
import '../static/css/main.css'
import '../static/css/pages.css'
import '../static/css/personal.css'
import TopHeader from '@/components/TopHeader'
import BottomFooter from '@/components/BottomFooter'
import OnlineService from '@/components/OnlineService'
import PopupAd from '@/components/PopupAd'


export default {
  name: 'app',
  components: {
    TopHeader,
    BottomFooter,
    OnlineService,
    PopupAd
  },
  data:function() {
      return {
          hasLogin: false
      }
  },
  created:function(){
    var _self = this;
    _self.hasLogin = common.ifLanded();
  },
  mounted:function(){
    $(window).on('scroll', function(){
        var scrollTop = $(window).scrollTop();
        var basePos = -scrollTop+360;

        $('.product_list a').eq(0).css({
            'top': basePos * -0.05
        });
        $('.product_list a').eq(1).css({
            'top': basePos * 0.1
        });
        $('.product_list a').eq(2).css({
            'top': basePos * -0.05
        });
        $('.product_list a').eq(3).css({
            'top': basePos * 0.05
        });
    }).scroll();


  },
  methods:{
    // 进入游戏
    enterGame: function (id) {
        var _self = this;
        if (_self.hasLogin === false) {
            _self.$nextTick(function () {
                common.$message({
                    title: '登陆提示',
                    content: '请先登录！！',
                    hc: true,
                    okcb: function () {
                        _self.$router.push({path: '/'});
                    }
                });
            });
            return;
        }
        var win = common.openGame();
        if(openGameSize<2){
            win.document.write(loadStr) ;
        }
        var loop = setInterval(function() {
            if(win .closed) {
                openGameSize = 0 ;
                clearInterval(loop);
            }
        }, 500);
        common.ajax('config/kd/game/start',{id: id}, function (data) {
            if(data.apistatus =='0'){
                win.close();
                common.toast({content: "网络较差，请稍后重试！"});
            }else {
                if (data && data.result && data.result.content) {
                    var url = data.result.content;
                    win = common.openGame(url);
                }
            }
        }, 'post');
    }
  }
}
</script>
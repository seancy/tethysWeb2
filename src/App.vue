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
  }
  // template: '<div><topHeader></topHeader>test info.</div>'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

</style>

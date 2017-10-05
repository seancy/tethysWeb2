<template>
  <div id="main">
      <div class="pagebox" id="lottery">
          <div class="contain_width">
              <h2 class="page_title"></h2>
              <!--品牌选单-->
              <div class="pagemenu_slider">
                  <div class="item_pagemenu">
                      <a href="javascript:;" data-list="lottery_bb" class="active" @click="enterGame(862)">
                          <div class="img"><span style="background-image: url(static/images/brand/bbin.png)"></span></div>
                          <h3>BB彩票</h3>
                      </a>
                  </div>
                  <div class="item_pagemenu">
                      <a href="javascript:;" data-list="lottery_bc">
                          <div class="img"><span style="background-image: url(static/images/brand/bc.png)"></span></div>
                          <h3>BC彩票</h3>
                      </a>
                  </div>
              </div><!--end 品牌选单-->
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      hasLogin: false,
      games: []
    }
  }, 
  created:function(){
    this.loadLottery(1003);
    this.$nextTick(function () {
        var $tagList = $('.pagemenu_slider');
        const size = 5;
        $tagList.show() ; // 为了防止刚进来错位问题
        // debugger;
        $tagList.slick({ // 标题图片
            arrows: true,
            infinite: false,
            slidesToShow: size,
            slidesToScroll: 1,
        });
        var $slides = $('.slick-track>.slick-slide', $tagList);
        var index = $slides.filter(':has(a[class=active])').index();
        if (index > $slides.length - size) { 
            index = $slides.length - size;
        }
        $tagList.slick('slickGoTo', index);
       
    });
  },
  methods:{
    loadLottery:function(id){
        var _self = this;
        common.ajax('config/kd/game/special/load', {
            id: id
        }, function (data) {
            if(data.apistatus =='0'){
                common.toast({content: "网络较差，请稍后重试！"});
            }else {
                if (data && data.result) {
                  _self.games = data.result.game.list ;

                }
            }
        });
    },
    // 进入游戏
    enterGame: function (id) {
        var _self = this;
        if (_self.hasLogin === false) {
            common.toast({content: "请先登录！！"});
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
            } else {
                if (data && data.result) {
                    var url = data.result.content;
                    win = common.openGame(url);
                }
            }
        }, 'post');
    }
  }
}
</script>

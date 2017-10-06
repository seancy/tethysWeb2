// 页面选单项目轮播 (需载入slick.min.js)
$(function(){
    // $('.pagemenu_slider').slick({
    //     arrows: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     infinite: false,
    // });
})
// 页面选单选中效果
$(function(){
    // $('.item_pagemenu a').on('click',function(){
    //     var page = $(this).data('list');

    //     $(this).parent().siblings().find('a').removeClass('active');
    //     $(this).addClass('active');

    //     $('#'+page).show().siblings('ul').hide();

    // })
})
// 浮动广告图开关
$(function(){
    // $('.online-service.left .close').on('click',function(){
    //     $(this).parent().stop().animate({left:'-130px'});
    // })
    // $('.online-service.right .close').on('click',function(){
    //     $(this).parent().stop().animate({right:'-130px'});
    // })
})
// 弹窗

$(function(){
	var mdwBtn = $('.modalBtn'),
	overlayOpacity = 0.7,
	fadeTime = 300;

	mdwBtn.on('click',function(e){
		e.preventDefault();

		var setMdw = $(this),
		setHref = setMdw.attr('href'),
		setSource = $(setHref).html(),
		wdHeight = $(window).height();

		$('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose icon_sprite icon_close"></div><div class="modalContent">' + setSource + '</div></div>');

		$('#mdOverlay,#mdWindow').css({display:'block',opacity:'0'});
		$('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
		$('#mdWindow').stop().animate({opacity:'1'},fadeTime);

		$(window).on('resize',function(){
			var adjHeight = $(window).height();
			$('#mdOverlay').css({height:adjHeight});
		});

		$('#mdOverlay,.mdClose,.btn_modal').on('click',function(){
			$('#mdWindow,#mdOverlay').stop().animate({opacity:'0'},fadeTime,function(){
				$('#mdOverlay,#mdWindow').remove();
			});
		});
	});

});
function showModal(setSource){
  overlayOpacity = 0.7,
    fadeTime = 300;
  wdHeight = $(window).height();

  $('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose icon_sprite icon_close"></div><div class="modalContent">' + setSource + '</div></div>');

  $('#mdOverlay,#mdWindow').css({display:'block',opacity:'0'});
  $('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
  $('#mdWindow').stop().animate({opacity:'1'},fadeTime);

  $(window).on('resize',function(){
    var adjHeight = $(window).height();
    $('#mdOverlay').css({height:adjHeight});
  });

  $('#mdOverlay,.mdClose,.btn_modal').on('click',function(){
    $('#mdWindow,#mdOverlay').stop().animate({opacity:'0'},fadeTime,function(){
      $('#mdOverlay,#mdWindow').remove();
    });
  });
}



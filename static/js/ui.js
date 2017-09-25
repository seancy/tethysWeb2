// 公告轮播
$(function(){

    if($('.notice_box li').length > 1){
        function run() {
            $('.notice_box ul').animate({top:-40},500,function(){
                $(this).css({top:0}).children('li').eq(0).remove().appendTo('.notice_box ul');
            })
        }

        var TT = setInterval(run,3000)

        $(".notice_box").on('mouseenter',function(e){
            clearInterval(TT);
            $(this).removeClass('hidden');
        }).on('mouseleave',function(e){
            var position = Math.round($(this).scrollTop() / 40);
            $(this).scrollTop(0).addClass('hidden');
            $('.notice_box ul').children('li').slice( 0, position ).appendTo('.notice_box ul');
            TT = setInterval(run,3000);
        })

        $('.notice_box').scrollTop(0).addClass('hidden');
    }

})

// 刷新icon旋转
$(function(){
    $('.icon_refresh').on('click',function(){
        console.log('click');
        $(this).addClass('active');
    })
})
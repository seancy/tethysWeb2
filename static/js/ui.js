// 页面选单项目轮播 (需载入slick.min.js)
$(function(){
    $('.pagemenu_slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
    });
})
// 页面选单选中效果
$(function(){
    $('.item_pagemenu a').on('click',function(){
        var page = $(this).data('list');

        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');

        $('#'+page).show().siblings('ul').hide();

    })
})





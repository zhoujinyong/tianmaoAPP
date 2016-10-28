$(document).ready(function () {
	//轮播图效果
	var mySwiper = new Swiper ('#banner', {
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
	}) 
	//中部文字轮播竖向
	var mySwiper1 = new Swiper ('#font-lunbo', {
    direction: 'vertical',
    loop: true,
    autoplay: 3000,
    // 如果需要分页器
//  pagination: '.swiper-pagination',
	}) 
	//中部图片轮播
	var mySwiper2 = new Swiper ('#zhong-lunbo', {
    direction: 'horizontal',
    slidesPerView : 2,
    loop: false,
//  autoplay: 3000,
    // 如果需要分页器
//  pagination: '.swiper-pagination',
	}) 
})
$(document).ready(function () {
	$(window).on('scroll',function(){
		var h=$("#banner").height();
		var t=$(document).scrollTop();
		if(t<=h){
			$(".fixed").css("background","-webkit-linear-gradient(top,rgba(0,0,0,.7),rgba(0,0,0,0))")
		}else{
			$(".fixed").css("background","#f32d2d")
		}
	})
})
$(document).ready(function () {
	$(".caidan").on('click',function(){
		$(".daohang").addClass('youru')
		$('body').css('overflow','hidden')
	})
	
	$(".left-fixed li").on('click',function(){
		index=$(this).index()
		if(index%2==0){
			$(".ck").eq(0).show();
			$(".ck").eq(1).hide()
		}
		if(index%2==1){
			$(".ck").eq(1).show();
			$(".ck").eq(0).hide()
		}
		$(".left-fixed li").removeClass('css')
//		}
		$(this).addClass('css')
	})
	$(".fanhui p").on('click',function(){
		$(".daohang").removeClass('youru')
		$('body').css('overflow','auto')
	})
})
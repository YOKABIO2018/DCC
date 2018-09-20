jQuery(function($){
    $('.slider').each(function(){
		$(this).slick({
      speed:1500,
			autoplay:true,
			autoplaySpeed:2000,
			dots:true,
      fade:true,
      pauseOnHover:false //自動再生時にスライドにマウスオーバーした際、自動再生をストップさせるか。
		});
	});
});

smooth_selector = '*:not(html, body, head, .header, .wrap, .container, .gnb li, .gnb h1, .util li, a,ul, .gal_div > div, .left > img, .right > img, .top > img, .lv, .rv, .sect.vr_area ul li a i, .menu, .menu img, .header li, .util li, .fixed_tab, .fixed_tab *, .swiper-container, .swiper-container *, .cont0201 .txt, .cont0201 div, .twotone .cut img, .twotone .imgs ._03 li, .twotone .imgs ._08 li, .twotone, .twotone .bg, .twotone .bg div,.main_sl_txt.sl img)';

$(function(){

	// smooth();

	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
	});

	$('html').addClass('on');

	$(window).scroll(function(){
        var st = $(window).scrollTop();
        var bh = $(window).height();

        $('.move_left').each(function(){
                var $this = $(this);
                var my_st = $this.offset().top - (bh * 1);

                if(st > my_st){
                        $this.addClass('active');
                }
        });

        $('.move_right').each(function(){
                var $this = $(this);
                var my_st = $this.offset().top - (bh * 1);

                if(st > my_st){
                        $this.addClass('active');
                }
        });
        $('.move').each(function(){
                var $this = $(this);
                var my_st = $this.offset().top - (bh * 1);

                if(st > my_st){
                        $this.addClass('active');
                }
        });
    });

	$('.btn_top').click(function(){
		$('html,body').animate({scrollTop:0});
	});

    
    $('#open').click(function(){
        $('#company').addClass('on');
    });

    $('.com_info .closebtn').click(function(){
        $('#company').removeClass('on');
    });
});

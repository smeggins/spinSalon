(function($) {

    //title fade in

        $('#hero-title').addClass('hero-title-before')

        //menu fade in/out

    $('.menu-button').click(function() {
        $('#secondary').removeClass('menu-hidden')
        $('#secondary').addClass('menu-shown')
        $('footer').addClass('footer-hidden')
        
        if ($('.main-content-container')[0]) {
            $('.main-content-container').addClass('footer-hidden')
        }
        else {
            $('main').addClass('footer-hidden')
        }
    });

    $('.header-sidebar-nav-exit').click(function() {
        $('#secondary').removeClass('menu-shown')
        $('#secondary').addClass('menu-hidden')
        $('footer').removeClass('footer-hidden')

        if ($('.main-content-container')[0]) {
            $('.main-content-container').removeClass('footer-hidden')
        }
        else {
            $('main').removeClass('footer-hidden')
        }
    });

    //fade effect

    const fadeEffect = function() {
        const 
        fp = $('.front-page-intro'),
        js = $('.js-container'),
        lc = $('.location-container'),
        fpt = $('.front-page-intro').offset().top,
        fph = $('.front-page-intro').outerHeight(),
        jst = $('.js-container').offset().top,
        jsh = $('.js-container').outerHeight(),
        lt = $('.location-container').offset().top,
        lh = $('.location-container').outerHeight(),
        wh = $(window).height(),
        ws = $(this).scrollTop();

        if (ws > (lt+lh-wh) || ws > (fpt+fph-wh) || ws > (jst+jsh-wh)){

            if (ws > (lt+lh-wh)) {
                lc.removeClass('hidden');
                lc.addClass('revealed');
                console.log(lt+lh-wh)
                console.log(lt)
                console.log(lh)
                console.log(wh)
                console.log(ws)
            };

            if (ws > (fpt+fph-wh) && fp.hasClass('hidden')) {
                fp.removeClass('hidden');
                fp.addClass('revealed');
                console.log(fpt+fph-wh)
                console.log(fpt)
                console.log(fph)
                console.log(wh)
                console.log(ws)
            };

            if (ws > (jst+jsh-wh) && js.hasClass('hidden')) {
                js.removeClass('hidden');
                js.addClass('revealed');
                console.log(jst+jsh-wh)
                console.log(jst)
                console.log(jsh)
                console.log(wh)
                console.log(ws)
            };
        };
    };

    // on scroll fade effect
    
    $(window).scroll(function() {
        fadeEffect();
     });

     fadeEffect();
    

})(jQuery);
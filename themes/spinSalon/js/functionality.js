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

    // const fadeEffect = function() {
    //     const 
    //     wh = $(window).height(),
    //     ws = $(this).scrollTop(),

    //     fp = $('.front-page-intro'),
    //     fpt = $('.front-page-intro').offset().top,
    //     fph = $('.front-page-intro').outerHeight(),

    //     js = $('.js-container'),
    //     jst = $('.js-container').offset().top,
    //     jsh = $('.js-container').outerHeight(),

    //     lc = $('.location-container'),
    //     lt = $('.location-container').offset().top,
    //     lh = $('.location-container').outerHeight();

    //     if (ws > (lt+lh-wh) || ws > (fpt+fph-wh) || ws > (jst+jsh-wh)){

    //         if (ws > (lt+lh-wh) && lc.hasClass('hidden')) {
    //             lc.removeClass('hidden');
    //             lc.addClass('revealed');
    //         };

    //         if (ws > (fpt+fph-wh) && fp.hasClass('hidden')) {
    //             fp.removeClass('hidden');
    //             fp.addClass('revealed');
    //         };

    //         if (ws > (jst+jsh-wh) && js.hasClass('hidden')) {
    //             js.removeClass('hidden');
    //             js.addClass('revealed');
    //         };
    //     };
    // };

    // on scroll fade effect
    
    // $(window).scroll(function() {
    //     fadeEffect();
    //  });

    //  fadeEffect();

    //new onscroll effect function

    let hiddenDivs = $('.hidden').map(function() {
        return this.id;
    }).get();

    let divLocations = [];

    const createFadePositions = function (p) {

        p.forEach(id => {
            
            let
           d1 = $(`#${id}`),
           d2 = $(`#${id}`).offset().top,
           d3 = $(`#${id}`).outerHeight();

           let dcontainer = [d1, d2, d3];
           divLocations.push( dcontainer );
        });
    };

    const fadeFunction = function (divLocations) {
        
        divLocations.forEach(hiddenArray => {
            
            const 
            wh = $(window).height(),
            ws = $(this).scrollTop();

            // hidden Array[ 0 ] = the div id // [ 1 ] = divs offset().Top // [ 2 ] = divs outerHeight()

            if (ws > (hiddenArray[1]+hiddenArray[2]-wh) && hiddenArray[0].hasClass('hidden')) {
                
                hiddenArray[0].removeClass('hidden');
                hiddenArray[0].addClass('revealed');
            }
        });
    };

    createFadePositions(hiddenDivs);

        // on scroll fade effect
    
    $(window).scroll(function() {
        fadeFunction(divLocations);
     });

     fadeFunction(divLocations);

})(jQuery);
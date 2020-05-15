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

        // bio object

    let bios = {
        generated: 0,
    };

        // bio buttons

    $('.page-stylists .wp-block-button').click(function(a) {

        if (bios.generated === 0) {
            $.ajax({
                method: 'GET',
                url: functionVars.spin_url + `wp/v2/stylist_bio?_embed`,
                async: false,
                success: function(data) {
                    $(data).each(function(a) {
                        console.log(this)
                        let name = this.title.rendered;
                        bios[name] = {
                            text: this.content.rendered,
                            img: this._embedded['wp:featuredmedia'][0].source_url,
                            name: this.title.rendered,
                        }
                    });
                    bios.generated = 1;
                    console.log('i only worked once')
                },
        
                beforeSend: function(xhr) {
                xhr.setRequestHeader('X-WP-Nonce', functionVars.spin_nonce);
                }
            });
        };

        let that = this;
        let windowpos = window.scrollY
        console.log(windowpos)

        $('header').addClass('bio-fade');
        $('#main').addClass('bio-fade');
        $('footer').addClass('bio-fade');
        setTimeout(function() {
            
            $('#main').css('display','none');
            $('header').css('display','none');
            $('footer').css('display','none');

            $('#primary').append('<div class = "bio"></div>');
            $('.bio').append(`<div class = "bio-x"></div>`)
            $('.bio').append(`<img src="${bios[$(that).parent().children('h4').html()].img}" class = "bio-pic"/>`)
            $('.bio').append(`<h4 class = "bio-name">${bios[$(that).parent().children('h4').html()].name}</h4>`)
            $('.bio').append(`<div class = "bio-description">${bios[$(that).parent().children('h4').html()].text}</div>`)
            $('.bio').append(`<a class = "bio-link"></a>`)
            $('.bio').append(`<div class = "bio-button wp-block-button__link">Go back</div>`)
            setTimeout(function() {
                $('.bio').addClass('bio-fade-in')

            }, 100)

            $('.bio-button').click(function() {
                console.log('i was clicked mofo')
                $('.bio').addClass('bio-fade-out');
                setTimeout(function() {
                    $('.bio').remove();
                    $('#main').css('display','flex');
                    $('header').css('display','block');
                    $('footer').css('display','flex');
                    window.scrollTo(0, windowpos);
                    $('header').addClass('main-fade-in');
                    $('#main').addClass('main-fade-in');
                    $('footer').addClass('main-fade-in');
                    setTimeout(function() {
                        $('#main').removeClass('bio-fade');
                        $('header').removeClass('bio-fade');
                        $('footer').removeClass('bio-fade');
                        $('#main').removeClass('main-fade-in');
                        $('header').removeClass('main-fade-in');
                        $('footer').removeClass('main-fade-in');
                    }, 100)
                }, 500)
            })
        }, 500);
        console.log('we are officially out of the timeout loop')

    });



})(jQuery);
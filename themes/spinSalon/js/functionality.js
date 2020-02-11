(function($) {

        $('#hero-title').addClass('hero-title-before')

    $('.menu-button').click(function() {
        $('#secondary').removeClass('menu-hidden')
        $('#secondary').addClass('menu-shown')
        $('footer').addClass('footer-hidden')
    });

    $('.header-sidebar-nav-exit').click(function() {
        $('#secondary').removeClass('menu-shown')
        $('#secondary').addClass('menu-hidden')
        $('footer').removeClass('footer-hidden')
    });
    

})(jQuery);
$(document).ready(function(){
    $('.bxslider').bxSlider(
        {
            auto: true,
            infiniteLoop: true,
            responsive: true,
        }
    );

    $(function(){
        $('#menu').slicknav({
            label: '',
            duration: 600,
            prependTo: '#container',
        });

        $('.slicknav_menu').prepend('<a href="http://www.iwfconstruction.com"><img class="responsive-logo" src="images/iwf-logo.png" title="IWF Construction & Glazing" alt="South Florida construction and glazing services" /></a>');
    });


});

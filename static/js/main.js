/*-----------------------------------------------------------------------------------

    Theme Name: TOZO
    Theme URI: http://
    Description: Tour & Travel Template
    Author: gecdesigns    

-----------------------------------------------------------------------------------*/

/*=================================================
 == Table Of Content

    1. PRELOADER
    2. SCROLLIT
    3. NAVBAR
    4. SCROLL TO TOP 
    5. PORTFOLIO
    6. COUNT TO TRIGGER
    7. OWLCAROUSEL
    8. VALIDATOR

*/

$(function () {
    "use strict";
    var wind = $(window);

    /*============= PRELOADER ============= */
    $(document).ready(function () {

        // Fakes the loading setting a timeout
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 1500);

    });


    /*============= SCROLLIT ============= */
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });

    /*============= NAVBAR ============= */
    // Add navbar background color when scrolled
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

});

/*============= SCROLL TO TOP ============= */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#scroll-to-top').click(function () {
        $('#scroll-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/*===========  PORTFOLIO ===============*/
$(".simplefilter li").on("click", function () {
    $(".simplefilter li").removeClass("active");
    $(this).addClass("active");
});
var options = {
    animationDuration: 0.6,
    filter: "all",
    callbacks: {
        onFilteringStart: function () { },
        onFilteringEnd: function () { }
    },
    delay: 0,
    delayMode: "alternate",
    easing: "ease-out",
    layout: "sameSize",
    selector: ".filtr-container",
    setupControls: true
}
var filterizd = $(".filtr-container").filterizr(options);
filterizd.filterizr("setOptions", options);

/*=========== COUNT TO TRIGGER =============*/
var eventFired = false,
    objectPositionTop = $('.counts').offset().top;
$(window).on('scroll', function () {
    var currentPosition = $(document).scrollTop() + 400;
    if (currentPosition >= objectPositionTop && eventFired === false) {
        eventFired = true;
        $(".count").countTo({
            speed: 5000,
            refreshInterval: 80
        });
    }
});

/*========= OWLCAROUSEL =========*/

// Tour-List owlCarousel
//=========================
function package_carousel() {
    var owl = $(".package-carousel");
    owl.owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        navigation: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        nav: true,
        items: 3,
        smartSpeed: 1000,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        center: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            760: {
                items: 2
            },
            994: {
                items: 3
            }
        }
    });
}
package_carousel();

// Testimonials owlCarousel
//=========================
$('.testimonials .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 15,
    mouseDrag: false,
    autoplay: true,
    smartSpeed: 500
});


/*========= VALIDATOR =========*/

// contact form validator
$('#contact-form').validator();

$('#contact-form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
        var url = "contact.php";

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact-form').find('.messages').html(alertBox);
                    $('#contact-form')[0].reset();
                }
            }
        });
        return false;
    }
});
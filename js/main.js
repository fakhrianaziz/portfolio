(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Whatsapp Widget Form
    $(document).on('click','.send_form', function(){
        var input_blanter = document.getElementById('wa_email');
        
        /* Whatsapp Settings */
        var walink = 'https://web.whatsapp.com/send',
            phone = '6281299756779',
            walink2 = 'Halo Bapak Mohamad Nurfakhrian Aziz,\n saya dari ',
            text_yes = 'Terkirim.',
            text_no = 'Isi semua Formulir lalu klik Send.';
        
        /* Smartphone Support */
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
        }
        
        if("" != input_blanter.value){
        
         /* Call Input Form */
        var input_name1 = $("#wa_name").val(),
            input_email1 = $("#wa_email").val(),
            // input_select1 = $("#wa_select :selected").text(),
            // input_number1 = $("#wa_number").val(),
            // input_url1 = $("#wa_url").val(),
            input_textarea1 = $("#wa_textarea").val();
        
        /* Final Whatsapp URL */
        var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
            'Name : ' + input_name1 + '%0A' +
            'Email Address : ' + input_email1 + '%0A' +
            // '*Select Option* : ' + input_select1 + '%0A' +
            // '*Input Number* : ' + input_number1 + '%0A' +
            // '*URL/Link* : ' + input_url1 + '%0A' +
            'Description : ' + input_textarea1 + '%0A';
        
        /* Whatsapp Window Open */
        window.open(blanter_whatsapp,'_blank');
        document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
        } else {
        document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
        }
        });
    
})(jQuery);


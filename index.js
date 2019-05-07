

$(document).ready(function () {

    $(".sidebar").children().addClass("unshifted");
    // $("#contact-button").prop('disabled',true);

    $(".hamburger").click(function () {
        $(".main-wrapper").toggleClass('closed');
        $(".sidebar-wrapper").toggleClass("closed");
        $(".hamburger-inner").toggleClass("closed");
        $(".sidebar").children().toggleClass("shifted");
    })

    $("input, textarea").focus(function () {
        $(this).siblings("label").addClass("active");
    })

    $("input, textarea").focusout(function () {
        if ($(this).val() == "") {
            $(this).siblings("label").removeClass("active");
        }
    })

    var $root = $('html, body');
    $('a[href^="#"]').click(function () {
        var href = $.attr(this, 'href');
        $(".navbar-collapse").collapse("hide");
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            // window.location.hash = href;

        });

        return false;
    });

    //GSAP Tweens
    // TweenMax.from("#name-container", 2, {xPercent:100});
    // TweenMax.from("#about-container", 2, {yPercent:100})
    // TweenMax.from("img",2,{xPercent:-100})
    // TweenMax.from("#work-container",2,{xPercent:100})
    // var t1 = new TimelineMax();
    // t1.staggerFrom(".sidebar ul li a", 1, {xPercent:-100},0.2)
    // t1.staggerFrom(".card",1,{xPercent:100},0.2)
    // TweenMax.from("#contact-container",2,{xPercent:100})
    // TweenMax.from(".navbar",2,{xPercent:100})


    //Contact form validation
    $(this).on("submit", "#contact-form", function (e) {
        e.preventDefault();

        valid = true;

        var name = $("input[name=name]");
        var phone = $("input[name=phone]");
        var email = $("input[name=email]");
        var message = $("textarea[name=message]");

        name.css("border-bottom", "1px solid gray");
        phone.css("border-bottom", "1px solid gray");
        email.css("border-bottom", "1px solid gray");
        message.css("border-bottom", "1px solid gray");

        if (name.val().length <= 1) {
            name.css("border-bottom", "red 1px solid");
            valid = false;
        }
        var phone_pattern = /(\d{10})|(\d{3}-\d{3}-\d{4})/;
        if (!phone_pattern.test(phone.val())) {
            phone.css("border-bottom", "red 1px solid");
            valid = false;
        }
        var email_pattern = /[\w-\.]+@[\w-\.]+\.[\w]{2,5}/;
        if (!email_pattern.test(email.val())) {
            email.css("border-bottom", "red 1px solid");
            valid = false;
        }

        if (message.val().length <= 1) {
            message.css("border-bottom", "red 1px solid");
            valid = false;
        }
        if (valid) {
            $.ajax({
                url: '/contact',
                type: 'POST',
                data: $("#contact-form").serialize(),
                success: $("#contact-response").html('Message Sent Successfully'),
                error:$("#contact-response").html('Message Sent Successfully')
                
            })
        }

        name.val('');
        phone.val('');
        email.val('');
        message.val('');
    })

})

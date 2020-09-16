$(".preloader-img").addClass("fadeIn-custom");

let bars = $(".burger-menu");

bars.click(() => {
    bars.toggleClass("toggleBars");
    $("#header nav").toggleClass("slideOut");
    $("header nav").toggleClass("slideIn")
});

$(window).on("load", () => {
    setTimeout(() => {
        $(".preloader").animate({opacity: 0}, 500, () => {
            $(".preloader").css("display", "none");
            $(".preloader-img").removeClass("rotate");
            $("body").css("overflow", "visible");
        })
        

    }, 1500);

    setTimeout(() => {
        if($(window).width() >= 1024) {
          new WOW().init();  
        }
    }, 1300) 


});

// $("#wrapper").css("min-height", ($(window).height() + "px"));

$(".header-static").css("height", $("header").outerHeight() + "px")
normalizeViewport($("main"), $("header"));


$(window).resize(() => {
    // $("#wrapper").css("min-height", ($(window).height() + "px"));
    $(".header-static").css("height", $("header").outerHeight() + "px")
    normalizeViewport($("main"), $("header"));
});

$("a").each((index, el) => {
    $(el).on("click", (event) => {
        event.preventDefault();
        $("body").css("overflow", "hidden");
        $(".page-unloader").css("display", "block");
        $(".page-unloader").animate({opacity: 1}, 400);

        setTimeout(() => {
            window.location.href = $(el).attr("href");
        }, 500);
    });
});

(function(){
    emailjs.init("user_z3F7jyQ8qvbeOobnstw7p");
})();

 $("footer form").submit((e) => {
    e.preventDefault();
    $(".form-error").removeClass("success");

    $("footer form input[type=text], footer textarea").css("border", "none")

    let fieldsCompleted = false;

    if($("footer form textarea").val() === ""){
        $(".form-error").html("Please enter your message.")
        $("footer textarea").css("border", "1px solid #DC000F");

        fieldsCompleted = false;
    } else {
        fieldsCompleted = true;

        for(let i = 0; i < $("footer form input").length; i++) {

            if($("footer form input").eq(i).val() === "") {
                $(".form-error").html("Please fill in all the fields.")
                $("footer form input").eq(i).css("border", "1px solid #DC000F");

                fieldsCompleted = false;
            }
        }
    }

    if(fieldsCompleted) {
        $(".form-error").html("");

        let templateParams = {
            name: $("footer #name").val(),
            ign: "Not precised",
            email: $("footer #email").val(),
            topic: "Not precised",
            message: $("footer textarea").val()
        }

        emailjs.send('gmail', 'msg', templateParams)
            .then(function(response) {
                $(".form-error").html("Your message was successfully sent!").addClass("success");
            }, function(error) {
                $(".form-error").html("Something went wrong... Refresh page and try again.");
            });
    }     

})
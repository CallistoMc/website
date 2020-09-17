// $(window).on("load", () => {
//     setTimeout(() => {
//         $(".preloader").animate({opacity: 0}, 500, () => {
//             $(".preloader").css("display", "none");
//             $(".preloader-img").removeClass("rotate");
//             $("body").css("overflow", "visible");
//         })
        

//     }, 1500);

//     setTimeout(() => {
//         if($(window).width() >= 1024) {
//           new WOW().init();  
//         }
//     }, 1300) 

// });

// (function(){
//     emailjs.init("user_z3F7jyQ8qvbeOobnstw7p");
// })();

 // $("footer form").submit((e) => {
 //    e.preventDefault();
 //    $(".form-error").removeClass("success");

 //    $("footer form input[type=text], footer textarea").css("border", "none")

 //    let fieldsCompleted = false;

 //    if($("footer form textarea").val() === ""){
 //        $(".form-error").html("Please enter your message.")
 //        $("footer textarea").css("border", "1px solid #DC000F");

 //        fieldsCompleted = false;
 //    } else {
 //        fieldsCompleted = true;

 //        for(let i = 0; i < $("footer form input").length; i++) {

 //            if($("footer form input").eq(i).val() === "") {
 //                $(".form-error").html("Please fill in all the fields.")
 //                $("footer form input").eq(i).css("border", "1px solid #DC000F");

 //                fieldsCompleted = false;
 //            }
 //        }
 //    }

//     if(fieldsCompleted) {
//         $(".form-error").html("");

//         let templateParams = {
//             name: $("footer #name").val(),
//             ign: "Not precised",
//             email: $("footer #email").val(),
//             topic: "Not precised",
//             message: $("footer textarea").val()
//         }

//         emailjs.send('gmail', 'msg', templateParams)
//             .then(function(response) {
//                 $(".form-error").html("Your message was successfully sent!").addClass("success");
//             }, function(error) {
//                 $(".form-error").html("Something went wrong... Refresh page and try again.");
//             });
//     }     

// })

let parentNode = $(".helper-block");

$("[data-block]").each((index, el) => {
    if($(el).attr("data-block") !== $(".active-tab").attr("data-tab")) {
        $(el).hide()
    }
})

$(".tabs").on("click", ".tab", (e) => {
    $("input[type=text], textarea").css("border", "none");
    $(".tab").removeClass("active-tab");
    $(e.target).addClass("active-tab");

    // Reset error
    $(".form-error").html("");

    // let currentTab = $(".active-tab").attr("data-tab")

    $("[data-block]").each((index, el) => {
        if($(el).attr("data-block") !== $(".active-tab").attr("data-tab")) {
            $(el).hide()
        } else {
            $(el).show()

            // Specific range withing which inputs have to be found
            parentNode = $(el);
        }
    })
})

$("form").on("submit", (e) => {
    e.preventDefault();

    // Show success message and hide error(red) borders
    $(".form-error").html("Your application will be reviewed soon, We will reply as soon as possible.").addClass("success");
    $("input[type=text], textarea").css("border", "none");

    // Checks whether all inputs and textareas within specific section are empty
    for(let i = 0; i < parentNode.find("input[type=text]").length; i++) {
        if(parentNode.find("input").eq(i).val() === "") {
            $(".form-error").html("Please fill in all the fields.")
            parentNode.find("input").eq(i).css("border", "1px solid #DC000F");
            $(".form-error").removeClass("success");
        }
    }

    for(let i = 0; i < parentNode.find("textarea").length; i++) {
        if(parentNode.find("textarea").eq(i).val() === "") {
            $(".form-error").html("Please fill in all the fields.")
            parentNode.find("textarea").eq(i).css("border", "1px solid #DC000F");
            $(".form-error").removeClass("success");
        }
    }

    // The same container is used in each and every section
    for(let i = 0; i < $(".basic-info").find("input[type=text]").length; i++) {
        if($(".basic-info").find("input").eq(i).val() === "") {
            $(".form-error").html("Please fill in all the fields.")
            $(".basic-info").find("input").eq(i).css("border", "1px solid #DC000F");
            $(".form-error").removeClass("success");
        }
    }

})
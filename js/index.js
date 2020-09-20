if($(window).width() <= 1024 && $(window).height() <= 425) {
	let blockHeight = $(window).height() - $(".search").outerHeight();
	$("aside ul.points").css("margin-top", blockHeight / 4 + "px");
}

$(window).resize(() => {
	if($(window).width() <= 1024 && $(window).height() <= 425) {
		let blockHeight = $(window).height() - $(".search").outerHeight();
		$("aside ul.points").css("margin-top", blockHeight / 4 + "px");
	}	
})

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




// Preloader animation
// $(".preloader img").animate({opacity: 1, width: "14em"}, 1500, () => {
// })

// $(window).on("load", () => {
//         setTimeout(() => {
//             $(".preloader").animate({opacity: 0}, 400, () => {
//                 $(".preloader").hide();
//             })
//         }, 1900)
//     })
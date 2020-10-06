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

// Toggle sidebar
$(".fa-bars").click(() => {
	$("aside").addClass("sideToggled");
	$("i.fa-times").css("display", "block");
	$("i.fa-times").animate({opacity: 1}, 400)
})

$(".fa-times").click(() => {
    closeSidebar();
})

function closeSidebar() {
	$("aside").removeClass("sideToggled");
    $(".fa-times").animate({opacity: 0}, 400, () => {
    	$("i.fa-times").css("display", "none");
    })
}

$(document).keyup((e) => {
	if(e.keyCode == 27) {
		escSearch();
        $("#screen").removeClass("tucked");

	}
})

$(".close-search").click(() => {
	escSearch();
    $("#screen").removeClass("tucked");

})

function escSearch() {
	$(".search-screen").hide();
	$(".search-screen input").val("");
}

$(".search-input input").on("keydown", () => {
    $("#screen").addClass("tucked");
    $(".search-screen").show();
    $(".search-screen input").focus();
 })

$("#main-search").on("keyup", () => {
	$(".search-req").html($("#main-search").val())
	$(".search-result").hide();
	$(".no-search-results").hide();


	let req = $(".search-req").html().toLowerCase();

	// BACKEND TASK // show each block with convenient information depending on the request (input)
	// Has to show result(s) as soon as a key has been released (this event)
	// If nothing was found show element with class no-search-results, hide it otherwise
	// Incorporate work with filters

	switch(req) {
		case "shop":
			$(".search-shop").show();
			break;

		case "forums":
			$(".search-forums").show();
			break;

		case "faq":
			$(".search-faq").show();
			break;

		case "egirls be wildin":
			$(".no-search-results").show();
	}
})

// Indicate active filter (active filter has a class activeFilter)
$(".filters").on("click", ".filter", (e) => {
	if($(e.target).hasClass("activeFilter")) {
		$(e.target).removeClass("activeFilter");

	} else {
		$(".filter").removeClass("activeFilter")
		$(e.target).addClass("activeFilter");
	}
})

$(".addToCart").each((index, el) => {
	$(el).click(() => {
		if(!$(el).hasClass("addedToCart")) {
			$(el).html("Added to cart")
			$(el).addClass("addedToCart")
		}
	})
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
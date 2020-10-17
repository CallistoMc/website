// Positioning elemets inside search screen
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
	$(".aside-overlay").show(() => {
		$(".aside-overlay").animate({opacity: 1}, 400)
	})
})

$(".aside-overlay").click(() => {
    closeSidebar();
})

function closeSidebar() {
	$("aside").removeClass("sideToggled");
	
	setTimeout(() => {
		$(".aside-overlay").animate({opacity: 0}, 400, () => {
			$(".aside-overlay").hide()
		})
	}, 200)
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

$(".callisto-stats img").click(() => {
	window.location.href = "stats-home.html"
})

$("a[href='#']").click((e) => {
	e.preventDefault()
})

// Setting background image of the element using data-src attribute
$("[data-src]").each((index, el) => {
    $(el).css("background-image", "url(" + $(el).attr("data-src") + ")")
})
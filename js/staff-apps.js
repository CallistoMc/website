let parentNode = $(".helper-block");

$("[data-block]").each((index, el) => {
    if($(el).attr("data-block") !== $(".active-tab").attr("data-tab")) {
        $(el).hide()
    }
})

$(".tabs").on("click", ".tab", (e) => {
    $("input[type=text], input[type=number], input[type=email], textarea").css("border", "none");
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
    $(".form-error").html("Your application will be reviewed soon. We will reply as soon as possible.").addClass("success");
    $(".form-error").show();
    $("input[type=text], input[type=number], input[type=email], textarea").css("border", "none");

    // Checks whether all inputs and textareas within specific section are empty
    for(let i = 0; i < parentNode.find("input[type=text], input[type=email]").length + 1; i++) {
        if(parentNode.find("input").eq(i).val() === "") {
            $(".form-error").html("Please fill in all the fields.").show()
            parentNode.find("input").eq(i).css("border", "1px solid #DC000F");
            $(".form-error").removeClass("success");
        }
    }

    for(let i = 0; i < parentNode.find("textarea").length; i++) {
        if(parentNode.find("textarea").eq(i).val() === "") {
            $(".form-error").html("Please fill in all the fields.").show()
            parentNode.find("textarea").eq(i).css("border", "1px solid #DC000F");
            $(".form-error").removeClass("success");
        }
    }

    // The same container is used in each and every section
    for(let i = 0; i < $(".basic-info").find("input[type=text]").length; i++) {
        if($(".basic-info").find("input").eq(i).val() === "") {
            $(".form-error").html("Please fill in all the fields.").show()
            $(".basic-info").find("input").eq(i).css("border", "1px solid #DC000F");
            $(".form-error").removeClass("success");
        }
    }

    if(parentNode.attr("data-block") === "helper") {
        if ($('.helper-block-2:not(:has(:radio:checked))').length) {
            $(".form-error").html("Please choose one of the options above.").removeClass("success").show();;
        }
    }

})

$("#building-ss").change(function(){
    $("p.filename").html("Your file has been successfully uploaded.")
 });

// Dropdown script
$(".multiple .active").click(() => {
    $(".multiple .fas").toggleClass("rotate");
    $(".dropdown").toggle();
})

$(".dropdown").on("click", "li", (e) => {
    $(".dropdown li").show();
    let prevOption = $(".active span").html();
    let newOption = $(e.target).html()

    $(".dropdown").hide();
    $(".active span").html(newOption)
    $(e.target).hide();
    $(".multiple .fas").toggleClass("rotate");
})

// This varibale contains chosen option from custom selection tag
let dev_specialization = $(".dropdown .active span").html();
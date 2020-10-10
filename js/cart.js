$(".fa-shopping-cart").click(() => {
  $(".cart-block").toggleClass("toggleshow");

    if($(".cart-block").hasClass("toggleshow")) {
      $(".cart-block").animate({opacity: 0}, 300, () => {
        $(".cart-block").hide();
      })
    } else {
      $(".cart-block").show()
      $(".cart-block").animate({opacity: 1}, 300);
    }
  })

let cartContent; // This variab;e contains removed element aka .cart-content (when nothing's added)

$(".cart-content i.fa-times").each((index, el) => {
  $(el).click(() => {
    $(el).closest(".product").remove()

    if(!$(".cart-content ul li").length) {
      cartContent = $(".cart-content").detach()
      $(".total, .checkout-btn").hide();
      $(".nothing-in-cart").show()
    } else {
      // If the cart is not empty show back the new content
      $(".cart-block").prepend(cartContent);
      $(".nothing-in-cart").hide()
    }
  })
})

// For backend rendering
if(!$(".cart-content ul li").length) {
  cartContent = $(".cart-content").detach()
  $(".total, .checkout-btn").hide();
  $(".nothing-in-cart").show()
} else {
  // If the cart is not empty show back the new content
  $(".cart-block").prepend(cartContent);
  $(".nothing-in-cart").hide()
}
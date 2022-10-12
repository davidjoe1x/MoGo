var swiper = new Swiper(".swiper-container", {
    loop: true,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
$(".swiper-button").on("click", function(e) {
    $(".swiper-container").toggleClass("pause");
});
$(".swiper-button").click(function() {
    if ($(".swiper-container").hasClass("pause")) swiper.autoplay.stop();
    else swiper.autoplay.start();
});

//# sourceMappingURL=index.debe5954.js.map

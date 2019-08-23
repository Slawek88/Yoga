var $arrow = $(".arrow a");

var $off = $("main").offset().top;

$(".arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1000)
})

// offset top oblicza odległosc od 0 gornego

// var $arrowTwo = $("#arrowTwo");
// var $offTwo = $("footer").offset().top;

// $("#arrowTwo").on("click", function () {
//     $("body, html").animate({
//         scrollTop: $("footer").offset().top
//     }, 2000)
// })
$(document).ready(function() {

    let width = $(document).width();
    let widthHigh = 1155;
    let widthLow = 990;

    // ShrinkH2();

    // $( window ).resize(function() {
    //     width = $(document).width();
    //     ShrinkH2();
    // });

    // function ShrinkH2() {
    //     if (widthHigh >= width && width >= widthLow) {
    //         $(".card__title").css("font-size", "25px");
    //     }
    //     else {
    //         $(".card__title").css("font-size", "30px");
    //     }
    // }

    let bookedRoom;
    let cardNum
    $(document).on("click", ".button-active", function() {
        bookedRoom = $(this).parent().parent(".card");
    });
    $(".card").on( {
        mouseleave: function () {
            $(bookedRoom).removeClass("card--active");
            $(bookedRoom).addClass("card--disabled");
            $(bookedRoom).find(".price__button").removeClass("button-active")
            $(bookedRoom).find('*').addClass("disabled");
            $(bookedRoom).find(".button__text").hide();
            $(bookedRoom).find(".button__text--disabled").show();

            cardNum = $(bookedRoom).parent().index();
            cardNum++
            if (cardNum > 0) {
                $(bookedRoom).find(".card__image").attr("src","img/disabled/card" + cardNum +".png")
            };
            bookedRoom = null;
        }
    });


    $(document).on("click", ".card--disabled", function() {
        $(this).removeClass("card--disabled");
        $(this).addClass("card--active");
        $(this).find(".price__button").addClass("button-active")
        $(this).find('*').removeClass("disabled");
        $(this).find(".button__text--disabled").hide();
        $(this).find(".button__text").show();

        cardNum = $(this).parent().index();
        cardNum++
        if (cardNum > 0) {
            $(this).find(".card__image").attr("src","img/card" + cardNum +".png")
        };
    });
});
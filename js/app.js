$(document).ready(function() {

    let width = $(document).width();
    let widthHigh = 1155;
    let widthLow = 990;

    ShrinkH2();

    $( window ).resize(function() {
        width = $(document).width();
        ShrinkH2();
    });

    function ShrinkH2() {
        if (widthHigh >= width && width >= widthLow) {
            $(".card__title").css("font-size", "25px");
        }
        else {
            $(".card__title").css("font-size", "30px");
        }
    }

    let bookedRoom;
    $(document).on("click", ".button_active", function() {
        bookedRoom = $(this).parent().parent(".card");
    });
    $(".card").on( {
        mouseleave: function () {
            $(bookedRoom).addClass("card--disabled");
            $(bookedRoom).find(".card__image").addClass("image--disabled");
            $(bookedRoom).find(".card__info").addClass("card__info--disabled");
            $(bookedRoom).find(".card__title").addClass("card__title--disabled");
            $(bookedRoom).find(".info__text").addClass("info__text--disabled");
            $(bookedRoom).find(".card__price").addClass("card__price--disabled");
            $(bookedRoom).find(".price__text").addClass("price__text--disabled");
            $(bookedRoom).find(".price").addClass("price--disabled");
            $(bookedRoom).find(".price__button").removeClass("button_active");
            $(bookedRoom).find(".price__button").addClass("button--disabled");
            $(bookedRoom).find(".button__text").hide();
            $(bookedRoom).find(".button__text--disabled").show();

            bookedRoom = null;
        }
    });
    $(document).on("click", ".card--disabled", function() {
        $(this).removeClass("card--disabled");
        $(this).find(".card__image").removeClass("image--disabled");
        $(this).find(".card__info").removeClass("card__info--disabled");
        $(this).find(".card__title").removeClass("card__title--disabled");
        $(this).find(".info__text").removeClass("info__text--disabled");
        $(this).find(".card__price").removeClass("card__price--disabled");
        $(this).find(".price__text").removeClass("price__text--disabled");
        $(this).find(".price").removeClass("price--disabled");
        $(this).find(".price__button").removeClass("button--disabled");
        $(this).find(".price__button").addClass("button_active");
        $(this).find(".button__text--disabled").hide();
        $(this).find(".button__text").show();
    });
});
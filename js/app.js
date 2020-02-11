$(document).ready(function() {

    let bookedRoom = null;
    let cardNum;

    $(document).on("click", ".button--active", function() {
        bookedRoom = $(this).parent().parent().parent(".card");
    });

    $(".card").mouseleave(function () {
        if (bookedRoom === null)
        return;
        CardDisable(bookedRoom);
        ImgDisable(bookedRoom);
        bookedRoom = null;
    });

    $(document).on("click", ".card--disabled", function() {
        let card = $(this);
        CardEnable(card);
        ImgEnable(card);
    });

    function CardDisable (bookedRoom) {
        $(bookedRoom).removeClass("card--active");
        $(bookedRoom).addClass("card--disabled");
        $(bookedRoom).find('*').addClass("disabled");
        $(bookedRoom).find(".price__button").removeClass("button--active");
        $(bookedRoom).find(".button__text").hide();
        $(bookedRoom).find(".button__text--disabled").show();
    }
    
    function CardEnable (card) {
        $(card).removeClass("card--disabled");
        $(card).addClass("card--active");
        $(card).find('*').removeClass("disabled");
        $(card).find(".price__button").addClass("button--active");
        $(card).find(".button__text--disabled").hide();
        $(card).find(".button__text").show();
    }
    
    function ImgDisable (bookedRoom) {
        cardNum = $(bookedRoom).index();
        cardNum++;
        if (cardNum > 0) {
            $(bookedRoom).find(".card__image").attr("src","img/disabled/card" + cardNum +".png");
        }
    }
    
    function ImgEnable (card) {
        cardNum = $(card).index();
        cardNum++;
        if (cardNum > 0) {
            $(card).find(".card__image").attr("src","img/card" + cardNum +".png");
        }
    }
});
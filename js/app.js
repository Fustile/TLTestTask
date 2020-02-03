$(document).ready(function(){

    var width = $(document).width()

    ShrinkH2()

    $( window ).resize(function(){
        width = $(document).width()
        if (width <= 1155 && width >= 990){
            ShrinkH2()
        }
        else{
            $(".cardTitle").css('font-size', '30px')
        }

    })

    function ShrinkH2(){
        if ( $(".card1").width() == $(".card2").width() && $(".card2").width() == $(".card3").width())
            return
        else{
            $(".cardTitle").css('font-size', '25px')
        }
    }

    var bookedRoom
    $(document).on("click", ".buttonActive", function(){
        bookedRoom = $(this).parent().parent(".card")
    })
    $(".card").on({
        mouseleave: function (){
            $(bookedRoom).addClass("cardDisabled")
            $(bookedRoom).find(".cardImage").addClass("imageDisabled")
            $(bookedRoom).find(".cardInfo").addClass("cardInfoDisabled")
            $(bookedRoom).find(".cardTitle").addClass("cardTitleDisabled")
            $(bookedRoom).find(".cardInfoText").addClass("cardInfoTextDisabled")
            $(bookedRoom).find(".cardPrice").addClass("cardPriceDisabled")
            $(bookedRoom).find(".cardPriceText").addClass("cardPriceTextDisabled")
            $(bookedRoom).find(".price").addClass("priceDisabled")
            $(bookedRoom).find(".cardButton").removeClass("buttonActive")
            $(bookedRoom).find(".cardButton").addClass("cardButtonDisabled")
            // $(bookedRoom).find(".buttonText").addClass("buttonTextDisabled")
            $(bookedRoom).find(".buttonText").hide()
            $(bookedRoom).find(".buttonTextDisabled").show()

            bookedRoom = null
        }
    })
    $(document).on("click", ".cardDisabled", function(){
        $(this).removeClass("cardDisabled")
        $(this).find(".cardImage").removeClass("imageDisabled")
        $(this).find(".cardInfo").removeClass("cardInfoDisabled")
        $(this).find(".cardTitle").removeClass("cardTitleDisabled")
        $(this).find(".cardInfoText").removeClass("cardInfoTextDisabled")
        $(this).find(".cardPrice").removeClass("cardPriceDisabled")
        $(this).find(".cardPriceText").removeClass("cardPriceTextDisabled")
        $(this).find(".price").removeClass("priceDisabled")
        $(this).find(".cardButton").removeClass("cardButtonDisabled")
        $(this).find(".cardButton").addClass("buttonActive")
        $(this).find(".buttonTextDisabled").hide()
        $(this).find(".buttonText").show()
    })






})
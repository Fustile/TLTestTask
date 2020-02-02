$(document).ready(function(){

    var width = $(document).width()

    ShrinkH2()

    $( window ).resize(function() {
        width = $(document).width()
        if (width <= 1155 && width >= 990) {
            ShrinkH2()
        }
        else {
            $(".cardTitle").css('font-size', '30px')
        }

    })

    function ShrinkH2() {
        if ( $(".card1").width() == $(".card2").width() && $(".card2").width() == $(".card3").width())
            return
        else {
            $(".cardTitle").css('font-size', '25px')
        }
    }

    var bookedRoom
    $(".buttonActive").click(function(){
        bookedRoom = $(this).parent().parent(".card")
    })
    $(".card").on({
        mouseleave: function (){
            $(bookedRoom).addClass("cardDisabled")
            bookedRoom = null
        }
    })

    // $(".card cardDisabled").click(function(){
    //     console.log("disabled")
    //     console.log($(this))
    //     $(this).removeClass("cardDisabled")
    // })
    
    // $(".card").removeClass("cardDisabled")


    // $(".card").click(function() {
    //     console.log("clicked card")
    //     $(this).removeClass("cardDisabled")
    // })


    // $(".cardDisabled").click(function() {
    //     console.log("clicked cardDisabled")
    //     $(this).removeClass("cardDisabled")
    // })






})
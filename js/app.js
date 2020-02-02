$(document).ready(function(){

    var width = $(document).width()

    ShrinkH2()

    $( window ).resize(function() {
        width = $(document).width()
        if (width <= 1155 && width >= 990) {
            ShrinkH2()
        }
        else {
            $(".list-grid").find("h2").css('font-size', '30px')
        }

    })

    function ShrinkH2() {
        if ( $(".card1").width() == $(".card2").width() && $(".card2").width() == $(".card3").width())
            return
        else {
            $(".list-grid").find("h2").css('font-size', '25px')
        }
    }





    $(".card").click(function() {
        console.log("clicked card")

    })








})
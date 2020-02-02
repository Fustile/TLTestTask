$(document).ready(function(){

    var width = $(document).width()

    ShrinkH2()

    $( window ).resize(function() {
        width = $(document).width()
        ShrinkH2()
        if ((width > 1185) || (width <= 990))
            $(".list-grid").find("h2").css('font-size', '30px')  
    })

    function ShrinkH2() {
        if ( ($(".card1").width() == $(".card2").width()) && ($(".card2").width() == $(".card3").width()))
            return
        else {
            console.log("not ok")
            $(".list-grid").find("h2").css('font-size', '25px')
        }
    }

    $( window ).resize(function() {
        width = $(document).width()
        ShrinkH2()
    })




    $(".card").click(function() {
        console.log("clicked card")

    })








})
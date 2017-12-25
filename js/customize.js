$(document).ready(function () {
    var zindex = 10;
    $("div.color-card").click(function (e) {
        e.preventDefault();
        var isShowing = false;
        if ($(this).parent().hasClass("show")) {
            isShowing = true
        }
        if ($("div.cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.show").removeClass("show");
            if (isShowing) {
                // this card was showing - reset the grid
                $("div.cards").removeClass("showing");
            } else {
                // this card isn't showing - get in with it
                $(this).parent().css({
                    zIndex: zindex
                }).addClass("show");
            }
            zindex++;
        } else {
            // no cards in view
            $("div.cards").addClass("showing");
            $(this).parent().css({
                zIndex: zindex
            }).addClass("show");
            zindex++;
        }
    });
    $("div.behind-background").click(function (e) {
        if ($("div.card").hasClass("show")) {
            isShowing = true
        }
        if ($("div.cards").hasClass("showing")) {
            $("div.card.show").removeClass("show");
            if (isShowing) {
                $("div.cards").removeClass("showing");
            }
        }
    });


    //navbar展開
    $(".hamburger").click(function () {
        $(".nav-wrap").slideToggle();
        $(this).toggleClass("active");
        $("body").toggleClass("noscroll");

    });


    $(".card").click(function () {
        $(this).children().children(".card-View").toggleClass('active');   
        $(this).children(".color-card").addClass("color-clicked");
        $(this).children().children(".card-TitleS").addClass("color-titles-clicked");
        if ($(this).children().children(".card-View").hasClass("active")) {
            $(this).children().children(".card-View").children("span").text('CLOSE');
        } else {
            $(this).children().children(".card-View").children("span").text('VIEW');
        }
    });
    $(".behind-background").click(function () {
        if ($(".card-View").hasClass("active")) {
          
            $(".card-View").children("span").text('VIEW');
        } else {
            $(".card-View").children("span").text('CLOSE');
        }
    });

});
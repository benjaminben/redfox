$(document).ready(function(){

var logo = $("img[src='logo.png']");
    
    $("#live").on("click", function(){
        $(".media:not(.hide, #livemedia)").addClass("animated slipOut").one("animationend", function(){
        $(this).addClass('hide')
        $(this).removeClass("animated slipOut");
        $("#livemedia").removeClass("hide").addclass("animated slipIn").on("aminationend", function(){
        $(this).removeClass('animated slipIn');
        });
        });
    });
    
    $("#listen").on("click", function(){
        $(".media:not(.hide, #soundcloud)").addClass("animated slipOut").one("animationend", function(){
        $(this).addClass('hide')
        $(this).removeClass("animated slipOut");
        $("#soundcloud").removeClass("hide");
        })
    });

    $("#watch").on("click", function(){
        $(".media:not(.hide, #video)").addClass("animated slipOut").one("animationend", function(){
        $(this).addClass('hide')
        $(this).removeClass("animated slipOut");
        $("#video").removeClass("hide");
        })
    });
    
    $("#fanmail").on("click", function(){
        $(".media:not(.hide, #fanmailUI)").addClass("animated slipOut").one("animationend", function(){
        $(this).addClass('hide')
        $(this).removeClass("animated slipOut");
        $("#fanmailUI").removeClass("hide");
        })
    });
    
    $("#name").on("click", function(){
        $(".media:not(.hide, #lineup)").addClass("animated slipOut").one("animationend", function(){
        $(this).addClass('hide')
        $(this).removeClass("animated slipOut");
        $("#lineup").removeClass("hide");
        })
    });

    $(logo).on("click", function(){
        $(".media:not(.hide, #blog)").addClass("animated slipOut").one("animationend", function(){
        $(this).addClass('hide')
        $(this).removeClass("animated slipOut");
        $("#blog").removeClass("hide");
        })
    });

    var quiver = 'animated shake';
    var quiverEnd = 'animationend';
    $("#live, #listen, #watch, #fanmail, .fox").hover(function(){
        $(logo).addClass(quiver).one(quiverEnd,                               function(){
            $(this).removeClass(quiver);
        });
    });
    
});
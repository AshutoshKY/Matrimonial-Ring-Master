var slideIndex=1;
var factor=1;
switchSlides(slideIndex);
    
    setInterval(function addSlide()
    {
        console.log("called");
        slideIndex+=factor;
        console.log(slideIndex);
        switchSlides(slideIndex);
            
    },5000);
    function switchSlides(n)
    {
        console.log("wat");
        var slides=document.getElementsByClassName("slides");
        if(n>slides.length)
            slideIndex=1;
        if(n<1)
            slideIndex=slides.length;
        for(var i=0;i<slides.length;i++)
            slides[i].style.display="none";
        slides[slideIndex-1].style.display="block";
    }
    function nextSlide(x)
    {
        slideIndex+=x;
        switchSlides(slideIndex);
    }
    $(document).ready(function(){
    $("#FeedbackIcon").click(function(){
    $('html,body').animate({
        scrollTop:$("#Feedback").offset().top
    },1500);
    });
        $("#AboutIcon").click(function(){
    $('html,body').animate({
        scrollTop:$("#About").offset().top
    },1500);
});
        $("#AboutUs").hover(function(){
            $("#AboutUs").css("border-bottom","2px solid #ff6600");
        },
        function(){
        $("#AboutUs").css("border-bottom","none");
        }
        );
        $("#AboutTeam").hover(function(){
            $("#AboutTeam").css("border-bottom","2px solid #ff6600");
        },
        function(){
        $("#AboutTeam").css("border-bottom","none");
        }
        );
        $("#FeedbackHead").hover(function(){
            $("#FeedbackHead").css("border-bottom","2px solid #ff6600");
        },
        function(){
        $("#FeedbackHead").css("border-bottom","none");
        }
        );
        $("#vam,#nit,#mad").css("display","none");
        $("#img1,#vam").hover(function(){
            $("#img1").css("opacity","0.6");
            $("#vam").css("display","block");
            $("#img1").css("border","2px solid #ff6600");
        },
        function(){
        $("#img1").css("opacity","1");
        $("#vam").css("display","none");
        $("#img1").css("border","2px solid #323438");
        }
        );
        $("#img2,#nit").hover(function(){
            $("#img2").css("opacity","0.6");
            $("#nit").css("display","block");
            $("#img2").css("border","2px solid #ff6600");
        },
        function(){
        $("#img2").css("opacity","1");
        $("#nit").css("display","none");
        $("#img2").css("border","2px solid #323438");
        }
        );
        $("#img3,#mad").hover(function(){
            $("#img3").css("opacity","0.6");
            $("#mad").css("display","block");
            $("#img3").css("border","2px solid #ff6600");
        },
        function(){
        $("#img3").css("opacity","1");
        $("#mad").css("display","none");
        $("#img3").css("border","2px solid #323438");
        }
        );
        $("#fIcon").hover(function(){
            $(".fCol").css("font-size","30px");
        },
        function(){
        $(".fCol").css("font-size","20px");
        }
        );
        $("#iIcon").hover(function(){
            $(".iCol").css("font-size","30px");
        },
        function(){
        $(".iCol").css("font-size","20px");
        }
        );
    });

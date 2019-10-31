$(document).ready(function(e){
    $(".pageText").hide();
    $(".pageText").animate({
        height: "show"
    }, 1500);
    $("#aboutClick").click(function(){
        $('html, body').animate({
            scrollTop: ($("#about").offset().top)
        }, 1000)
        $(".aboutText").hide();
        $(".aboutText").animate({
            height: "show"
        }, 2000);
    });
    /*Form verification*/
    $("#submit").click(function(e){
        $("input[name=email], input[name=namee], input[name=password], input[name=passwordCheck]").each(function(){
            var $value = $(this).val();
            if($value == ""){
                    e.preventDefault();
                    $(this).addClass("invalid");
                } 
            });
            if($('input[name=password]').val() !== $('input[name=passwordCheck]').val()){
                e.preventDefault();
                $('#messageSpan').html("Passwords don't match");
                $('input[name=password]').addClass('invalid');
                $('input[name=passwordCheck]').addClass('invalid');
            }else{
                $('input[name=password]').removeClass('invalid');
                $('input[name=passwordCheck]').removeClass('invalid');
                $('#messageSpan').html(" ");
            }
        });
        $("input[name=email], input[name=namee], input[name=password], input[name=passwordCheck]").on('input', function(){
            $(this).removeClass("invalid");
        });

    });


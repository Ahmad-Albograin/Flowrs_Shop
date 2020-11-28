

  $(
    function() {
    $("#header1").on({
        
        mouseover :function () {
            $("#section1").slideDown("fast");
            },
            click :function () {
                $("#section1").slideToggle("fast");
                }
    });


});
   
    

$(
    function () {
        $("#section1").on({
            mouseleave :function () {
                $("#section1").slideUp("slow");
        }
    
    });

    }
);


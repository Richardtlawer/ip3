
$(document).ready(function() {  
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });
	
/*$("p").click(function() {
          $("img").show();
        });*/

  /*$("img").click(function() {
    alert("This is an image.");
  });*/
 /*$("p").click(function() {
        $(".walrus-showing").show();
        $(".walrus-hidden").hide();
      });*/

   /* $(document).ready(function() {
      $("p").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
      });
    });*/

 $(".clickable").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
      });
});

    

  

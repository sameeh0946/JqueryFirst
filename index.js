 $(document).ready(function(){  
  $("#button-popup").click(function(){
      
      $(".window-popup").show(200);
      
  })
     
       $("#close-button").click(function(){
      
      $(".window-popup").hide();
      
  });
         $('#close-button').hover(function() {
      $(this).addClass("hover2");
      console.log("div was hovered");
                                           }, function() {
        $(this).removeClass("hover2");
                                                            });
     
     
              $('#save-button').hover(function() {
      $(this).addClass("hover");
      console.log("div was hovered");
                                           }, function() {
        $(this).removeClass("hover");
                                                            });
     
     
     $('#button-popup').hover(function() {
//        $('#button-popup').css("text-decoration","none"); 
      $(this).addClass("hover");
      console.log("div was hovered");
                                           }, function() {
        $(this).removeClass("hover");
                                                            });
     
     
     
     
     
 })
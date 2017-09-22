$(document).ready(function(){
var numbers=[];
var numberEntered=$(".input").val();

$(".button").click(function(){
  for(number=1; number<=numberEntered; number++){
        numbers=number;
        
};
  $(".lable").text(numbers.pop());
});


}



);

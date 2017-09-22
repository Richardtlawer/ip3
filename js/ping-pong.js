$(document).ready(function(){

var numbers=[];
var numberEntered=parseInt($(".inReceive").val());

$(".buttonPush").click(function(){
	alert(numberEntered);
  for(var number=1; number<=numberEntered.length; number+=1){
        numbers=number;
  alert(number);
  $(".showNumbers").text(numbers.pop());

}
  

});


}



);
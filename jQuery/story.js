
      $(document).ready(function() {
        $("#blanks form").submit(function(event) {

         /* $(".person1").append("blah blah");
          $(".person2").append("blah blah");
          $(".animal").append("blah blah");
          $(".exclamation").append("blah blah");
          $(".verb").append("blah blah");
          $(".noun").append("blah blah");*/

	 /* var person1Input = $("input#person1").val();
          var person2Input = $("input#person2").val();
          var animalInput= $("input#animal").val();
          var exclamationInput = $("input#exclamation").val();
          var verbInput = $("input#verb").val();
          var nounInput = $("input#noun").val();
          $(".person1").append(person1Input);
          $(".person2").append(person2Input);
          $(".animal").append(animalInput);
          $(".exclamation").append(exclamationInput);
          $(".verb").append(verbInput);
          $(".noun").append(nounInput);*/
	 
	 var person1Input = $("input#person1").val();
          var person2Input = $("input#person2").val();
          var animalInput= $("input#animal").val();
          var exclamationInput = $("input#exclamation").val();
          var verbInput = $("input#verb").val();
          var nounInput = $("input#noun").val();

          $(".person1").text(person1Input);
          $(".person2").text(person2Input);
          $(".animal").text(animalInput);
          $(".exclamation").text(exclamationInput);
          $(".verb").text(verbInput);
          $(".noun").text(nounInput);
	
          $("#story").show();

	event.preventDefault();
        });
      });
    

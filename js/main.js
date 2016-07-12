$(document).ready(function(){

  var i = $('input').size() ;
  var j = $('input').size();

  
$('#add').click(function() {
$('<div><input type="text" class="field form-control" name="dynamic[]" value="Beer '+i+'" /></div>').fadeIn('slow').appendTo('.inputs');
i++;
});


$('#remove').click(function() {
  if(i > 1) {
  $('.field:last').remove();
  i--;
  }
});

$('#reset').click(function() {
  while(i > 2) {
  $('.field:last').remove();
  i--;
  }
});

// here's our click function for when the forms submitted

function submit(){
$('.submit').click(function(){
  answers = [];
  $.each($('.field'), function() {
  answers.push($(this).val()); 
});
};

if(answers.length == 0) {
  answers = "none";
  }
  for(var beers in answers){
  $("#beerList").html("<li class='red'>" +answers[parseInt(beers)]+ "</li> + <br>");
  document.getElementById("shuffled-list").innerHTML = "<li>" +answers[parseInt(beers)]+ "</li><br>";
    
  for (var k=0; k < answers.length; k++){
  document.write(answers[k])};
  //alert(answers);
 };


 });
  
});
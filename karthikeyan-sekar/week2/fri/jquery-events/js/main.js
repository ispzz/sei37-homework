console.log('jQuery events');

//do something whenever the user clicks on the top kitty image

$(document).ready( function( ){ //loads after the html document is loaded completely

$('#kitty').on('click', function(){
  console.log('kitty clicked');
});

$('input[type="text"]').on('keydown', function(){
  console.log('key typed in form!');
});

$('.triple-kitty2').on('click', function(){
  console.log('Hey..dont punch me');
});

$('*').on('click', function(ev){
  console.log('click target:', ev.currentTarget);
  ev.stopPropagation();
  //ev.preventDefault(); // used for clicks only
});

$('.triple-kitty1').on('click', function(){
  $('.triple-kitty2').hide();
});
});

$(document).ready(function() {
var w = prompt("How many blocks per side?")
var newDim = $(".container").width()/(w);

for (i=0; i<Math.pow(w, 2); i++) {
$('.container').append('<div class="grey"></div>');
}
  
$(".grey").css("height", newDim);
$(".grey").css("width", newDim);

$(".grey").mouseenter(function(){
$(this).addClass("black")});
});

/* divs do not fit perfectly in container with all inputs*/

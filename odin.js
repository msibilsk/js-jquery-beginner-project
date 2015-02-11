$(document).ready(function() {
var h = 50;
var w = 50;
var newDim = 93025/(h*w);
console.log(newDim);
    
$(".grey").css("height", newDim);
$(".grey").css("width", newDim);

console.log($(".grey").height());
console.log($(".grey").width());

for (i=0; i<h*w; i++) {
$('.container').append('<div class="grey"></div>');
}

$(".grey").mouseenter(function(){
$(this).addClass("black")});
});

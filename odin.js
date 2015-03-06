$(document).ready(function() {
var w = prompt("How many blocks per side?");
var newDim = $(".container").width()/(w);
for (i=0; i<Math.pow(w, 2); i++) {
$('.container').append('<div class="grey"></div>');
}

$("button").click(function() {
$(".black").remove();
$(".grey").remove();
w = prompt("How many blocks per side?");
newDim = $(".container").width()/(w);
for (i=0; i<Math.pow(w, 2); i++) {
$('.container').append('<div class="grey"></div>');}
$(".grey").css("height", newDim);
$(".grey").css("width", newDim);
$(".grey").mouseenter(function(){
$(this).addClass("black");
});    
});

$(".grey").css("height", newDim);
$(".grey").css("width", newDim);
    
$(".grey").mouseenter(function(){
$(this).addClass("black");
});
    
});

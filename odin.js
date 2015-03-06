$(document).ready(function() {
var w = prompt("How many blocks per side?");
var newDim = $(".container").width()/(w);
for (i=0; i<Math.pow(w, 2); i++) {
$('.container').append('<div class="grey"></div>');
}

function getRandomColor() {
   return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}
                     
$(".grey").css("height", newDim);
$(".grey").css("width", newDim);

 $(".grey").mouseenter(function() {
    $(this).addClass("black");  
 });
    
$("#black").click(function() {
$(".black").remove();
$(".grey").remove();
w = prompt("How many blocks per side?");
newDim = $(".container").width()/(w);
for (i=0; i<Math.pow(w, 2); i++) {
$('.container').append('<div class="grey"></div>');}
$(".grey").css("height", newDim);
$(".grey").css("width", newDim);
$(".grey").mouseenter(function(){
$(this).addClass("black");});
});

$("#random").click(function() {
$(".black").remove();
$(".grey").remove();
w = prompt("How many blocks per side?");
newDim = $(".container").width()/(w);
for (i=0; i<Math.pow(w, 2); i++) {
$('.container').append('<div class="grey"></div>');}
$(".grey").css("height", newDim);
$(".grey").css("width", newDim);
$(".grey").mouseenter(function(){
    $(this).css("background-color", getRandomColor());});
});
    
});

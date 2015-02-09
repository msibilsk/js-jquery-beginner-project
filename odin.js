$(document).ready(function() {
var height = 16;
var width = 16;

for (i=0; i<height*width; i++) {
$('.container').append('<div class="black"></div>');
}
    $(".black").mouseenter(function(){
        $(this).addClass("red")});
});

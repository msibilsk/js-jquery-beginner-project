$(document).ready(function() {
var height = 16;
var width = 16;
var grid =  [];
$('div').height(600/(height*2));
$('div').width(600/(width*2));

for (i=0; i<height*width; i++) {
$('.container').append('<div></div>');
}
});

$(document).ready(function() {

var reset = function() {
	var w = prompt("How many blocks per side? Choose a number between 10 and 75.");
	while (w > 75 || w < 10 || isNaN(w)) {w = prompt("That input was invalid. Please choose a number between 10 and 75.");}
	var newDim = $(".container").width()/(w);
	$(".black").remove();
	$(".grey").remove();
	for (i=0; i<Math.pow(w, 2); i++) {
		$('.container').append('<div class="grey"></div>');
	}
	$(".grey").css("height", newDim);
	$(".grey").css("width", newDim);
}

reset();

$(".grey").mouseenter(function() {
	$(this).addClass("black");
});
    
$("#black").click(function() {

	reset();

	$(".grey").mouseenter(function(){
		$(this).addClass("black");
	});
});
    
$("#random").click(function() {
	
	reset();
	
	function getRandomColor() {
		return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
	}
	$(".grey").mouseenter(function(){
		$(this).css("background-color", getRandomColor());
	});
});
    
$("#fiftyshades").click(function() {

    reset();
    
     $(".grey").mouseenter(function(){
		$(this).addClass("fiftyshades");
		if ($(this).hasClass("fiftyshades")) {
			$(this).css("opacity", "+=0.1");
			console.log($(this).css("opacity"));
		}
    });
});
    
}); 

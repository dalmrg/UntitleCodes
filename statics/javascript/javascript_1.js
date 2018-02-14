$(function() {
	  
	setInterval(changeImage, 3000)	
	$(".button-collapse").sideNav()
	new WOW().init()
		  
})

let index = 0
let list_images = ["img/A44.jpg","img/A22.jpg","img/A55.jpg","img/A1.jpg"]
function changeImage()
{
   	$('#header_index').css("background-image", 'url(' + list_images[index] + ')')         	
   	index++
   	(index == 4)? index = 0 : console.log(index)
}


$(".efeccts_1").mouseover(function(event){
	$(".efeccts_1").addClass("z-depth-5");
});

$(".efeccts_1").mouseout(function(event){
	$(".efeccts_1").removeClass("z-depth-5");
});

$(".efeccts_2").mouseout(function(event){
	$(".efeccts_2").removeClass("z-depth-5");
});

$(".efeccts_2").mouseover(function(event){
	$(".efeccts_2").addClass("z-depth-5");
});

$(".efeccts_3").mouseout(function(event){
	$(".efeccts_3").removeClass("z-depth-5");
});

$(".efeccts_3").mouseover(function(event){
	$(".efeccts_3").addClass("z-depth-5");
});




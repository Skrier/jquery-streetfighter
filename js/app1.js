$(document).ready(function (){

	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();


	})
	.mouseleave(function(){
        $(".ryu-ready").hide();
		$(".ryu-still").show();
		
	})

	.mousedown(function(){
		playHadouken();
		$("ul").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate({"left":"300px"},500, 
        	function () {$(this).hide();
        	$(this).css("left", "-212px");
        });

	})

	.mouseup(function(){
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
         $("ul").show();
	});
     
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

$(document).keydown(function(keydown1){
	if(keydown1.keyCode == 88) {
     	$(".ryu-still").hide();
     	$(".ryu-ready").hide();
     	$(".ryu-throwing").hide();
     	$(".hadouken").hide();
        $(".ryu-cool").show();
        }
    else if (keydown1.keyCode == 90){
    	playRoundhouse();
    	$(".ryu-still").hide();
     	$(".ryu-ready").hide();
     	$(".ryu-throwing").hide();
     	$(".ryu-cool").hide();
     	$(".hadouken").hide();
        $(".ryu-roundhouse").show();
        }
 
 });
    


function playRoundhouse () {
  $('#roundhouse-sound')[0].volume = 0.5;
  $('#roundhouse-sound')[0].load();
  $('#roundhouse-sound')[0].play();
}


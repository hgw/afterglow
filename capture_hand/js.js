$(function() {

	cX = 0;
	cY = 0;
	tarX = 0;
	tarY = 0;
	default_timer = 0;
	$("body").append("<div id='real_cursor'></div>");

	$("html,body").mousemove(function(e) {
		tarX = e.pageX;
		tarY = e.pageY;
		if ($("#real_cursor")) {
			$("#real_cursor").css({
				top : tarY + 10,
				left : tarX - 60
			})
		}
	});
	
	setTimeout("reflesh()",100);
})

var count = 0;
function reflesh(){
	$("#real_cursor").css({
		"background-image":"url('p"+count+".png')"
	})
	
	count ++;
	if(count > 10){
		count = 0;
	}
		setTimeout("reflesh()",100);

}

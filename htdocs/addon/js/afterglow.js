$(function() {

  console.log("okokok")

  var count = 0;
  var that = this;

  var renderCursor = function(){
    $("#real_cursor").css({
      "background-image":"url('http://afterglow.localhost/finger-storage/p"+count+".png')"
    })

    count ++;
    if(count > 10){
      count = 0;
    }
    setTimeout(function(){
      renderCursor();
    } ,100);

  }


  custom_css = {
    "position"  : "absolute",
    "width"     : 640,
    "height"    : 360,
    "z-index"   : 100000
  }

  cX = 0;
  cY = 0;
  tarX = 0;
  tarY = 0;
  default_timer = 0;

  $cursor = $("<div id='real_cursor'></div>");

  $("body").append($cursor);
  $cursor.css(custom_css);

  $("html,body").mousemove(function(e) {

    console.log("MOUSE MOVE!!!")

    tarX = e.pageX;
    tarY = e.pageY;
    if ($("#real_cursor")) {
      $("#real_cursor").css({
        top : tarY + 10,
        left : tarX - 60
      })
    }
  });

  renderCursor();
})


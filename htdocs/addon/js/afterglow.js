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


  hide_cursor_css = {
    "cursor": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM1Njc5REVGODAyRTExRTNCNjBEQTVCOUFEOEM0MDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM1Njc5REYwODAyRTExRTNCNjBEQTVCOUFEOEM0MDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzU2NzlERUQ4MDJFMTFFM0I2MERBNUI5QUQ4QzQwOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzU2NzlERUU4MDJFMTFFM0I2MERBNUI5QUQ4QzQwOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59VDaDAAAAGklEQVR42mL8//8/AzGAiYFIMKqQOgoBAgwA1RIDEWq+kVwAAAAASUVORK5CYII=), default"
  }

  cX = 0;
  cY = 0;
  tarX = 0;
  tarY = 0;
  default_timer = 0;

  $cursor = $("<div id='real_cursor'></div>");

  $("html,body").css(hide_cursor_css);
  $("body").append($cursor)
  $cursor.css(custom_css);

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

  renderCursor();
})


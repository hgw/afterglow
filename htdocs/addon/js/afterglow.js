$(function() {

  var pictSize  = {
    width:640,
    height:480
  };


  var customCss = {
    "position"  : "fixed",
    "width"     : pictSize.width,
    "height"    : pictSize.height,
    "z-index"   : 100000,
    "transform-origin": "0 0",
    "transform": "rotate(90deg)"
  };

  var hideCursorCss = {
    "cursor": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM1Njc5REVGODAyRTExRTNCNjBEQTVCOUFEOEM0MDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM1Njc5REYwODAyRTExRTNCNjBEQTVCOUFEOEM0MDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzU2NzlERUQ4MDJFMTFFM0I2MERBNUI5QUQ4QzQwOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzU2NzlERUU4MDJFMTFFM0I2MERBNUI5QUQ4QzQwOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59VDaDAAAAGklEQVR42mL8//8/AzGAiYFIMKqQOgoBAgwA1RIDEWq+kVwAAAAASUVORK5CYII=), auto"
  };

  var frameCounts = 0;
  var $cursor = $("<img id='real_cursor'>");
  $("body").append($cursor);
  $cursor.css(customCss);
  var $realCursor = $("#real_cursor");



  // update funger images
  var renderCursor = function(){
    var rand = new Date().getTime();
    $realCursor.attr("src", "http://afterglow.localhost/finger-storage/m"+ (frameCounts%2) +".png?rand="+rand);
    setTimeout(function(){
      renderCursor();
    } , 1000);
    frameCounts += 1;
  };



  // follow the real mouse cursor
  $("html,body").css(hideCursorCss).on("mousemove", function(event) {

    if (!event) var event=window.event;
    event.pageX = event.clientX;
    event.pageY = event.clientY;

    if($realCursor){
      $realCursor.css({
        top   : event.pageY + 10,
        left  : event.pageX + (pictSize.height*0.5)
      })
    }
  });

  renderCursor();
});
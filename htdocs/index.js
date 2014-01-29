
var app = {


  count: 0,

  init: function(){

    var that = this;

    $(document).on("click", function(){

      that.count = Math.floor(Math.random()*4);
      $("body").removeClass("font-0");
      $("body").removeClass("font-1");
      $("body").removeClass("font-2");
      $("body").removeClass("font-3");
      $("body").addClass("font-"+that.count);

      that.count = Math.floor(Math.random()*4);

      $("body").removeClass("color-0");
      $("body").removeClass("color-1");
      $("body").removeClass("color-2");
      $("body").removeClass("color-3");
      $("body").addClass("color-"+that.count);

      $("body").css({


      });


      if(that.count>=that.classNames.length){
        that.count = 0;
      }
    });


    $('body').okshadow({
      color: '#999',
      textShadow: true,
      xMax: 10,
      yMax: 0,
      yOffset: 3,
      fuzzMin: 3,
      fuzzMax: 5
    });
  }

};


$(function(){

  app.init();

});

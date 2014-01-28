class You2MeApp

  inited: false

  pageTexts : ""
  $cacheResult : null
  $cacheResult_new : null # 置換後のテキスト
  $cacheResult_src : null # 置換前のテキスト

  htmlCover   : '<div style="z-index #fff; position: fixed; top:0; left:0; width: 100%;height: 100%; background:#f1c40f; color:#fff; display: table; font-family: AppleGothic, sans-serif; vertical-align: center; text-align: center; font-size: 4em;"><p style="display: table-cell; width:100%; height: 100%; vertical-align: middle">☞ きみ</p></div>'
  htmlLogo    : '<div style=" z-index #fff; position: fixed; top: 0;right:0; padding: 10px; background:#f1c40f; color:#fff; font-family: AppleGothic, sans-serif;">☞ きみ</div>'

  reg : /私|ワタシ|わたし|わたくし|ワタクシ|あたし|アタシ|僕|ボク|ぼく|おれ|オレ|俺|嫁|ヨメ|わたくし|わし|あたい|わい|わて|わだす|あだす|わす|おいら|オイラ|おら|オラ|せっしゃ|拙者/g

  constructor: ->

    if window.You2MeAppInited
      alert("一度実行済みです。ページを再読み込みしてください。")
      return;
    window.You2MeAppInited = true



    console.log "You2MeApp Start!"

    changesString = (much)->
      return "<hgwspan class='u2m-hit'><hgwspan class='src'>#{much}</hgwspan><hgwspan class='new'>きみ</hgwspan></hgwspan>"

    @pageTexts = $('body').html()
    $('body').html( @pageTexts.replace( @reg, changesString) )

    # -------------------------------------------
    $logo = $(@htmlLogo);
    $cover = $(@htmlCover);
    $("body").append($cover);
    $("body").append($logo)

    $cover.fadeOut(0).fadeIn(100).delay(1000).fadeOut(2000);

    # -------------------------------------------






    @$cacheResult = $(".u2m-hit")
    @$cacheResult_new = @$cacheResult.find(".new")
    @$cacheResult_src = @$cacheResult.find(".src")

    @$cacheResult_new.hide()
    @$cacheResult.data("src-visible", false)

    cssHilight =
      "color"  : "#e74c3c"
      "cursor": "pointer"

    @$cacheResult_new.show();
    @$cacheResult_src.hide();
    @$cacheResult.css(cssHilight);



    $(document).on "click", ".u2m-hit", (e)=>
      $current = $(e.currentTarget);
      if !$current.data("src-visible")
        $current.find(".new").hide()
        $current.find(".src").show()
        $current.data("src-visible", true)
      else
        $current.find(".new").show()
        $current.find(".src").hide()
        $current.data("src-visible", false)

      e.preventDefault();
      return false



$ ->
  new You2MeApp()
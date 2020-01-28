$().ready(function(){

  // 設定秒數
  var set_seconds;
  // 0:吃番茄 1:短休息 2:長休息
  var current_state = "0";
  // 番茄數量, 每四個長休息
  var tomate_count = 0;
  // 倒數秒數
  var total_seconds;
  // 倒數短休息秒數
  var short_seconds;
  // 倒數長休息秒數
  var long_seconds;
  // 顯示秒數
  var minutes, seconds;
  var user_id = $("#user_id").val();
  var timeFunction;


  var fu = [
  "又一天過去了。今天過得怎麼樣，夢想是不是更遠了?",
  "真正努力過的人，就會明白天賦的重要。",
  "許多人所謂的追逐夢想，就是不想要辛苦努力地付出，還可以輕鬆自由地生活",
  "以前覺得自己沒時間追夢，等到放假之後才發覺，自己根本懶得追夢",
  "今天解決不了的事情，別著急，因為明天也解決不了"
  ];

  // 初始化
  setState();

  // 顯示倒數計時
  function setTimeDisplay(x){
    minutes = Math.floor(x/60);
    seconds = x % 60;

    if (minutes <10 ) { minutes = "0" + minutes; }
    if (seconds <10 ) { seconds = "0" + seconds; }

    document.getElementById("pomo_time").innerHTML = minutes + ":" + seconds;
  }


  // 取得目前該倒數的秒數
  function getCurrentSeconds(c){
    if(c == "0") {
      return set_seconds;
    }
    else if(c == "1"){
      return short_seconds;
    }
    else {
      return long_seconds;
    }
  }

  // 改變狀態
  function changeState(callback){

    if(current_state == 0){ tomate_count += 1; }

    if(current_state == "0" && tomate_count % 4 != 0) {
      // 如果是吃完番茄狀態，且番茄還沒吃滿4顆，短休息
      current_state = "1";
      $("body").addClass("pa-break-color").removeClass("pa-run-color");
    }
    else if(current_state == "0" && tomate_count % 4 == 0){
      // 如果是完吃番茄狀態，且番茄吃滿4顆，長休息
      current_state = "2";
      $("body").addClass("pa-break-color").removeClass("pa-run-color");
    }
    else {
      // 休息完，繼續吃番茄
      current_state = 0;
      $("body").addClass("pa-run-color").removeClass("pa-break-color");
    }

    // 如果 callback 是個函式就呼叫它
    if( typeof callback === 'function' ){
      callback();
    }
  }

  // 重新開始計時設置
  function setState(){

    clearInterval(timeFunction);
    $("#btn_end").hide();
    $("#btn_start").show();
    $("#btn_stop").hide();
    $("#btn_play").hide();

    set_seconds = $("#validationCustom01").val() * 60;
    short_seconds = $("#validationCustom03").val() * 60;
    long_seconds = $("#validationCustom02").val() * 60;
    // 測試用
    // set_seconds = 10;
    // short_seconds = 5;
    // long_seconds = 7;
    total_seconds = getCurrentSeconds(current_state);
    setTimeDisplay(total_seconds);

    console.log(current_state);
    console.log(set_seconds);
    console.log(total_seconds);
    console.log(tomate_count);
  }

  // 倒數時間
  function runTime(){
    total_seconds = total_seconds -1;
    setTimeDisplay(total_seconds);

    if (total_seconds == 0){

      clearInterval(timeFunction);

      // 倒數完畢改變狀態
      changeState(setState);
      $("#btn_end").hide();
      $("#btn_start").show();
      $("#btn_stop").hide();
      $("#btn_play").hide();

      audio = new Audio('sound.mp3');
      audio.play();

      if(user_id != 0){
        $.ajax({
          url: "tomatoes/",
          method: "POST",
          dataType: "json",
          data: {
            tomato: {
              time: set_seconds
            }
          },
          success: function(data) {
          }
        });
      }
    }
  }

  // 隨機挑選一句
  $("#funeng").text(fu[Math.floor(Math.random()*fu.length)]);

  // 設定時間
  $("#btn-setting-ok").on("click",function(event){
    event.preventDefault();
    setState();
  });

  // 結束計時
  $("#btn_end").on("click", function(event){
    event.preventDefault();
    setState();
    $(this).hide();
    $("#btn_start").show();
    $("#btn_stop").hide();
    $("#btn_play").hide();
  });

  // 繼續計時
  $("#btn_play").on("click", function(event){
    event.preventDefault();
    timeFunction = setInterval(runTime, 1000);
    $(this).hide();
    $("#btn_stop").show();
    $("#btn_end").hide();
    $("#btn_start").hide();
  });

  // 暫停計時
  $("#btn_stop").on("click", function(event){
    event.preventDefault();
    clearInterval(timeFunction);

    $(this).hide();
    $("#btn_play").show();
    $("#btn_end").show();
    $("btn_start").hide();
  });

  // 開始計時
  $("#btn_start").on("click",function(event){
    event.preventDefault();

    $(this).hide();
    $("#btn_stop").show();
    $("#btn_end").hide();
    $("#btn_play").hide();

    total_seconds = getCurrentSeconds(current_state);
    timeFunction = setInterval(runTime, 1000);
  });
})


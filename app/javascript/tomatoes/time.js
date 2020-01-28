$().ready(function(){
  // 25 minutes
  var set_seconds = 10;
  var total_seconds = set_seconds;
  var minutes, seconds;
  var user_id = $("#user_id").val();
  var fu = [
  "又一天過去了。今天過得怎麼樣，夢想是不是更遠了?",
  "真正努力過的人，就會明白天賦的重要。",
  "許多人所謂的追逐夢想，就是不想要辛苦努力地付出，還可以輕鬆自由地生活",
  "以前覺得自己沒時間追夢，等到放假之後才發覺，自己根本懶得追夢",
  "今天解決不了的事情，別著急，因為明天也解決不了"
  ];

  $("#funeng").text(fu[Math.floor(Math.random()*fu.length)]);

  $("#btn_start").one("click",function(event){

    event.preventDefault();
    var x = setInterval(function() {

      if (total_seconds == 0) {
        clearInterval(x);
      }

      minutes = Math.floor(total_seconds/60);
      seconds = total_seconds % 60;

      if (minutes <10 ) {
        minutes = "0" + minutes;
      }

      if (seconds <10 ) {
        seconds = "0" + seconds;
      }

      document.getElementById("pomo_time").innerHTML = minutes + ":" + seconds;

      if (total_seconds == 0){
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

      total_seconds = total_seconds -1;
    }, 1000)
  });
})


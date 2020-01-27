$().ready(function(){

  // 25 minutes
  var set_seconds = 10;
  var total_seconds = set_seconds;
  var minutes, seconds;

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

      total_seconds = total_seconds -1;
    }, 1000)
  });
})


$().ready(function(){
  $("#btn_start").click(function(){

  // 25 minutes
  var total_seconds = 10;

  var minutes = Math.floor(total_seconds/60);
  var seconds = total_seconds % 60;
  var m_str;
  var s_str;

  if (minutes <10 ) {
    m_str = "0" + minutes;
  } else {
    m_str = minutes;
  }

  if (seconds <10 ) {
    s_str = "0" + seconds;
  } else {
    s_str = seconds;
  }

  document.getElementById("pomo_time").innerHTML = m_str + ":" + s_str;

  var x = setInterval(function() {
    total_seconds = total_seconds -1;

    if (total_seconds >= 0) {
      hours = Math.floor(total_seconds/3600);
      minutes = Math.floor(total_seconds/60);
      seconds = total_seconds % 60;

      if (minutes <10 ) {
        m_str = "0" + minutes;
      } else {
        m_str = minutes;
      }

      if (seconds <10 ) {
        s_str = "0" + seconds;
      } else {
        s_str = seconds;
      }

      document.getElementById("pomo_time").innerHTML = m_str + ":" + s_str;

      if (total_seconds == 0){
        audio = new Audio('sound.mp3');
        audio.play();
      }
    }

  }, 1000)
  // audio = new Audio('sound.mp3');
  // audio.play();
  // Set the date we're counting down to
  // var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  // var _now = new Date();
  // var countDownDate = _now.setMinutes(_now.getMinutes() + 25);

  // Update the count down every 1 second
  // var x = setInterval(function() {

  // Get today's date and time
  // var now = new Date().getTime();

  // Find the distance between now and the count down date
  // var distance = countDownDate - now;
  // var distance = 1500;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
  //
  // // If the count down is finished, write some text
  // if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  // }, 1000);

  });
})


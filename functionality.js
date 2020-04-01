
var seconds = 60
var timerActive = false
var score = 0
var conTimer = 0



window.addEventListener('load', (event) => {
    var element_0 = document.getElementById('clockBox');
    element_0.classList.toggle("hide");

    var element_11 = document.getElementById('box');
    element_11.classList.toggle("hide");

    var element_E = document.getElementById('q0');
    element_E.classList.toggle("hide");


  });
// console.log(showClock);




document.getElementById("tbtn1").addEventListener("click", countdown);
document.getElementById("tbtn2").addEventListener("click",restart);
document.getElementById("submit10").addEventListener("click",showTimerandScore);
document.getElementById("returnB").addEventListener("click",restart)


function countdown() {
    timerActive = true;
    seconds = 60;
    var element = document.getElementById('q1');
    element.classList.toggle("hide");
    var element_E = document.getElementById('q0');
    element_E.classList.toggle("hide");
    function tick() {
        conTimer += 1;
        if(timerActive === false){
            return;
        }
        var counter = document.getElementById("values");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);

        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        }if(seconds < 1 ) {
            alert("Game over");
            location.reload();
            // showTimerandScore();
            timerActive = false;
            return;
        }
    }
    tick();
}

function reset(){
    seconds = 1
    timerActive = false;
    // location.reload();
    return values.innerHTML = "0:00"
}
function restart(){
    location.reload();
}
// E1----------->
document.getElementById("submit0").addEventListener("click", choice0);

function choice0() {

    var radios = document.getElementsByName('clutch');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "null" ) {
      alert('please select choice answer');
    } else if ( val == "3" ) {
      alert('thats correct looks seems like youre ready! the test will begin now');
      countdown();
      var element_E = document.getElementById('q0');
      var element = document.getElementById('q1');
      element_E.classList.toggle("hide");
      element.classList.toggle("hide");
        // seconds += 10;
        // score += 1;
        // document.getElementById('score').innerHTML = score + '/10';
        //correctAnswer = true;
    } else {
      alert('Answer is wrong keep trying');
      location.reload();
        // seconds -= 10;
        //return seconds = seconds-10;
    }
    var element_E = document.getElementById('q0');
    var element = document.getElementById('q1');
    element_E.classList.toggle("hide");
    element.classList.toggle("hide");

  };
// Q1---------->
document.getElementById("submit1").addEventListener("click", choice);
function choice() {

    var radios = document.getElementsByName('clutch');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "4" ) {
    //   alert('Answer is correct !');
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10';
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }
    var element = document.getElementById('q1');
    var element_2 = document.getElementById('q2');
    element.classList.toggle("hide");
    element_2.classList.toggle("hide");

  };
  
// // Q2--------->
'use strict';
document.getElementById("submit2").addEventListener("click", choice2);

function choice2() {

    var radios = document.getElementsByName('map');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "7" ) {
    //   alert('Answer is correct !');
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10';
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }
   
    var element_2 = document.getElementById('q2');
    var element_3 = document.getElementById('q3');

    element_2.classList.toggle("hide");
    element_3.classList.toggle("hide");
  };
 
// // // Q3---------->
document.getElementById("submit3").addEventListener("click", choice3);

function choice3() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "10" ) {
    //   alert('Answer is correct !');
    
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10'
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }

    var element_3 = document.getElementById('q3');
    var element_4 = document.getElementById('q4');

    element_3.classList.toggle("hide");
    element_4.classList.toggle("hide");
  };
// // // Q4---------->
document.getElementById("submit4").addEventListener("click", choice4);

function choice4() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "4" ) {
    //   alert('Answer is correct !');
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10'
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }

    var element_4 = document.getElementById('q4');
    var element_5 = document.getElementById('q5');

    element_4.classList.toggle("hide");
    element_5.classList.toggle("hide");
  };
// // Q5---------->
document.getElementById("submit5").addEventListener("click", choice5);

function choice5() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "2" ) {
    //   alert('Answer is correct !');
    
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10'
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }
 
    var element_5 = document.getElementById('q5');
    var element_6 = document.getElementById('q6');

    element_5.classList.toggle("hide");
    element_6.classList.toggle("hide");
  };
// // Q6---------->
document.getElementById("submit6").addEventListener("click", choice6);

function choice6() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "1" ) {
    //   alert('Answer is correct !');
    
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10'
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }

    var element_6 = document.getElementById('q6');
    var element_7 = document.getElementById('q7');

    element_6.classList.toggle("hide");
    element_7.classList.toggle("hide");
  };
// // Q7---------->
document.getElementById("submit7").addEventListener("click", choice7);

function choice7() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "4" ) {
    //   alert('Answer is correct !');
    
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10';
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }

    var element_7 = document.getElementById('q7');
    var element_8 = document.getElementById('q8');

    element_7.classList.toggle("hide");
    element_8.classList.toggle("hide");
  };
// // Q8---------->
document.getElementById("submit8").addEventListener("click", choice8);

function choice8() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "2" ) {
    //   alert('Answer is correct !');
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10';
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }

    var element_8 = document.getElementById('q8');
    var element_9 = document.getElementById('q9');

    element_8.classList.toggle("hide");
    element_9.classList.toggle("hide");
  };
// // Q9---------->
document.getElementById("submit9").addEventListener("click", choice9);

function choice9() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "3" ) {
    //   alert('Answer is correct !');
    
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10';
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }
    var element_9 = document.getElementById('q9');
    var element_10 = document.getElementById('q10');
    element_9.classList.toggle("hide");
    element_10.classList.toggle("hide");

  };
// // Q10---------->
document.getElementById("submit10").addEventListener("click", choice10);

function choice10() {

    var radios = document.getElementsByName('answer-btn-radio');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "0" ) {
      alert('please select choice answer');
    } else if ( val == "3" ) {
    //   alert('Answer is correct !');
      seconds += 10;
      score += 1;
      document.getElementById('score').innerHTML = score + '/10';
    } else {
    //   alert('Answer is wrong');
      seconds -= 10;
    }

    var element_10 = document.getElementById('q10'); 
    var element_0 = document.getElementById('clockBox');
    element_10.classList.toggle("hide");
    element_0.classList.toggle("hide");
    var element_11 = document.getElementById('box');
    element_11.classList.toggle("hide");


    

    // showTimerandScore();
  };


  function showTimerandScore(){
    document.getElementById('score').innerHTML = score +'/10';
    document.getElementById('conTimer').innerHTML = conTimer + 'sec';
    console.log("conTimer: ", conTimer);
    console.log("score: ", score);
    reset();
    //   console.log("conTimer: ", conTimer);
    //   console.log("score: ", score);
  }
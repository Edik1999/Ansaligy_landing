  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    let daysSpan = document.querySelector('.days');
    let hoursSpan = document.querySelector('.hours');
    let minutesSpan = document.querySelector('.minutes');
    let secondsSpan = document.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days + '0';
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  function initializeClock2(id, endtime) {
    let daysSpan = document.querySelector('.days2');
    let hoursSpan = document.querySelector('.hours2');
    let minutesSpan = document.querySelector('.minutes2');
    let secondsSpan = document.querySelector('.seconds2');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days + '0' + ':';
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + ':';
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + ':';
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  function initializeClock3(id, endtime) {
    let daysSpan = document.querySelector('.days3');
    let hoursSpan = document.querySelector('.hours3');
    let minutesSpan = document.querySelector('.minutes3');
    let secondsSpan = document.querySelector('.seconds3');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days + '0';
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 42 * 21 * 1000); // for endless timer
  initializeClock('countdown', deadline);
  initializeClock2('countdown2', deadline);
  initializeClock3('countdown3', deadline);

////// END timers

let count = 0;

function countMinus(){
  if(count > 0){
    count--;
    document.querySelector('.submitOrder__form-counterSum').innerHTML = count;
    document.querySelector('.submitOrder__form-sum').innerHTML = count * 1600 + ' ';
  } else {
    return;
  }
}

function countPlus(){
  count++;
  document.querySelector('.submitOrder__form-counterSum').innerHTML = count;
  document.querySelector('.submitOrder__form-sum').innerHTML = count * 1600 + ' ';
}

////// End counter

const toggle = function() {
  document.querySelector('.header__menu').classList.toggle('d-none');
  document.querySelector('.header__menu').classList.toggle('d-block');
};

function toggleMenu(){
  document.querySelector('header').classList.toggle('active');
  if(document.querySelector('header').classList.contains('active')){
    setTimeout(function() {
      toggle();
    },200);
  } else{
    toggle();
  }
}

////// End Menu scripts
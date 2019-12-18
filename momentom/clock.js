const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");


  function getDTime(t) {
    return t < 10 ? `0${t}` : t
  }

  function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${getDTime(hours)}:${getDTime(minutes)}:${getDTime(seconds)}`; 
  }
  
  function initClock() {
    getTime();
    setInterval(getTime, 1000);
  }

  initClock();

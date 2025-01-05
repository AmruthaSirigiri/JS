function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = timeString;
  }
  
  function showGreeting() {
    const greetingElement = document.getElementById("greeting");
    greetingElement.classList.remove("hidden");
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  
  setTimeout(showGreeting, 5000);
  
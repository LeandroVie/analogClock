const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
//Loads actual Time
function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
//Calculates Time
  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  //Rotates the hands
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;
  minHand.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`;
}

setClock();
setInterval(setClock, 1000);

const secondHand = document.querySelector("#second-hand");
const minuteHand = document.querySelector("#min-hand");
const hourHand = document.querySelector("#hour-hand");

setInterval(() => {
  let newdate = new Date();
  console.log(newdate);
  let seconds = newdate.getSeconds();
  console.log(seconds);
  let minutes = newdate.getMinutes();
  console.log(minutes);
  let hours = newdate.getHours();
  console.log(hours);

  secondsInTurns = seconds / 60 + 0.25;
  secondHand.style.transform = `rotate(${secondsInTurns}turn)`;

  minutesInTurns = minutes / 60 + 0.25;
  minuteHand.style.transform = `rotate(${minutesInTurns}turn)`;
  hoursInTurns = hours / 12 + 0.25;
  hourHand.style.transform = `rotate(${hoursInTurns}turn)`;
}, 1000);

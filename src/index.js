function updateClock() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesDate = losAngelesElement.querySelector(".date");

  let losAngelesCurrent = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = `${losAngelesCurrent.format("MMMM Do YYYY")}`;
  losAngelesTime.innerHTML = `${losAngelesCurrent.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let parisElement = document.querySelector("#paris");
  let parisTime = parisElement.querySelector(".time");
  let parisDate = parisElement.querySelector(".date");

  let parisCurrent = moment().tz("Europe/Paris");
  parisDate.innerHTML = `${parisCurrent.format("MMMM Do YYYY")}`;
  parisTime.innerHTML = `${parisCurrent.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisTime = parisElement.querySelector(".time");
    let parisDate = parisElement.querySelector(".date");

    let parisCurrent = moment().tz("Europe/Paris");
    parisDate.innerHTML = `${parisCurrent.format("MMMM Do YYYY")}`;
    parisTime.innerHTML = `${parisCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYorkDate = newYorkElement.querySelector(".date");

    let newYorkCurrent = moment().tz("America/New_York");
    newYorkDate.innerHTML = `${newYorkCurrent.format("MMMM Do YYYY")}`;
    newYorkTime.innerHTML = `${newYorkCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonTime = londonElement.querySelector(".time");
    let londonDate = londonElement.querySelector(".date");

    let londonCurrent = moment().tz("Europe/London");
    londonDate.innerHTML = `${londonCurrent.format("MMMM Do YYYY")}`;
    londonTime.innerHTML = `${londonCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  let beijingElement = document.querySelector("#beijing");
  if (beijingElement) {
    let beijingTime = beijingElement.querySelector(".time");
    let beijingDate = beijingElement.querySelector(".date");

    let beijingCurrent = moment().tz("Asia/Chongqing");
    beijingDate.innerHTML = `${beijingCurrent.format("MMMM Do YYYY")}`;
    beijingTime.innerHTML = `${beijingCurrent.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let chosenCity = document.querySelector("#city");

  chosenCity.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
  </div>
        </div>`;
}

updateClock();
setInterval(updateClock, 1000);

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateCity);

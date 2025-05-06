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
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}
  </div>
        </div>`;
}

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateCity);

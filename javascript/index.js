setInterval(function () {
    //Berlin
    let berlinElement = document.querySelector("#berlin")
    if (berlinElement) {
        let berlinDateElement = berlinElement.querySelector(".date");
        let berlinTimeElement = berlinElement.querySelector(".time");
        let berlinTime = moment().tz("Europe/Berlin");

        berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
        berlinTimeElement.innerHTML = berlinTime.format("hh:mm:ss [<small>]a[</small>]");
    }
    
        //London
    let londonElement = document.querySelector("#london")
    if (londonElement) {
        let londonDateElement = londonElement.querySelector(".date");
        let londonTimeElement = londonElement.querySelector(".time");
        let londonTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
        londonTimeElement.innerHTML = londonTime.format("hh:mm:ss [<small>]a[</small>]");
    }
}, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("a")}</small></div>
        </div>
        <a href="/">Back to all cities</a>`;
};

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);



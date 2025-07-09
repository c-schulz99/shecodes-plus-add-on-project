setInterval(function() {
    //London
    let londonElement = document.querySelector("#london")
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("hh:mm:ss [<small>]a[</small>]");

    //Berlin
    let berlinElement = document.querySelector("#berlin")
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format("hh:mm:ss [<small>]a[</small>]");

    //Stockholm
    let stockholmElement = document.querySelector("#stockholm")
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTime = moment().tz("Europe/Stockholm");

    stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
    stockholmTimeElement.innerHTML = stockholmTime.format("hh:mm:ss [<small>]a[</small>]");

    //Tokyo
    let tokyoElement = document.querySelector("#tokyo")
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("hh:mm:ss [<small>]a[</small>]");
}, 1000);

/* ===========================
   Weather Dashboard JS
=========================== */

// Current Date & Time

function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString("en-IN", options);

    const time = now.toLocaleTimeString("en-IN");

    const dateElement = document.getElementById("currentDate");
    const timeElement = document.getElementById("currentTime");

    if(dateElement){
        dateElement.innerHTML = date;
    }

    if(timeElement){
        timeElement.innerHTML = time;
    }

}

setInterval(updateDateTime,1000);

updateDateTime();



// Dummy Weather Data

const weather={

location:"Indore",

temperature:"31°C",

humidity:"72%",

wind:"12 km/h",

rain:"40%"

};

console.log(weather);



// Future OpenWeather API

/*
fetch("API_URL")

.then(response=>response.json())

.then(data=>{

console.log(data);

});

*/
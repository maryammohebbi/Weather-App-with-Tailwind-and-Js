// import "../../public/biuld/tailwind.css"

const city = document.querySelector("#city")
// const searchBtn = document.querySelector("#search-btn")
const result = document.querySelector("#result")
const searchForm = document.querySelector("form")

searchForm.addEventListener("submit", getWeather)
window.addEventListener("load", getWeather)


function getWeather(e){
    e.preventDefault();
    let cityValue = city.value;

    if(cityValue == ""){
        result.innerHTML = `<p class="text-xl text-blue-800"> Please enter a city name </p>`
    }else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

        cityValue = "";
        fetch(url)
        .then((resp)=> resp.json())
        .then((data)=>{
            result.innerHTML = `
            <h2 class="text-2xl font-bold text-blue-900 mb-2"> - ${data.name} -</h2>
            <h4 class="font-bold">${data.weather[0].main}</h4>
            <h4 class="font-bold">${data.weather[0].description}</h4>
            <img class="mx-auto w-40 h-30" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1 class="text-4xl font-bold text-blue-800 mb-8">${data.main.temp} °C</h1>
            <div class="flex items-center justify-center gap-x-10">
                <div>
                    <h4 class="font-bold text-slate-500">Min: </h4>
                    <h4 class="font-bold"> ${data.main.temp_min} °C</h4>
                </div>
                <div>
                    <h4 class="font-bold text-red-500">Max: </h4>
                    <h4 class="font-bold"> ${data.main.temp_max} °C</h4>
                </div>
            </div>
            `
        })
        .catch(()=>{
            result.innerHTML = `<h1 class="text-xl text-blue-800">The city not found!</h1>`
        })
    }
}
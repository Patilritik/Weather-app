const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ed761c546mshc95952f577b90bdp10b4f5jsn32f047c4d5cd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			max_temp.innerHTML = response.max_temp;
			min_temp.innerHTML = response.min_temp;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
			temp.innerHTML = response.temp;
			/*wind_degrees.innerHTML = response.wind_degrees;*/
			wind_speed.innerHTML = response.wind_speed;
		})
		.catch(err => console.error(err));
}
getWeather("Delhi")
/*
document.getElementById("submit").addEventListener("click",getWeather(e){
	e.preventDefault()
	getWeather(city.value)
)*/
/*
document.getElementById("submit").addEventListener("click",getWeather(e){
	e.preventDefault()
	getWeather(city.value)
})
*/

Submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})


/*2nd
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ed761c546mshc95952f577b90bdp10b4f5jsn32f047c4d5cd',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};
	
fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5', options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
	
	})
	
		.catch(err => console.error(err));*/



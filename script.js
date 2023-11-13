const apikey = "8408bae0947037dc49002e9ed47416d2";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
var searchbox = document.querySelector(".search input");
var searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function check_weather(city){
	const response = await fetch(apiUrl+city+`&appid=${apikey}`);

	if(response.status == 404){
		document.querySelector(".error").style.display ="block"
		document.querySelector(".weather").style.display ="none"
	}else{

		var data = await response.json();
	
		console.log(data)
		document.querySelector(".city").innerHTML =data.name;
		document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
		document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) +"°C";
		document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
	
		if(data.weather[0].main == "Clouds"){
			weatherIcon.src ="clouds.png";
		}else if(data.weather[0].main == "Clear"){
			weatherIcon.src ="clear.png";
		}
		else if(data.weather[0].main == "Rain"){
			weatherIcon.src ="rain.png";
		}else if(data.weather[0].main == "Drizzle"){
			weatherIcon.src ="drizzle.png";
		}else if(data.weather[0].main == "Mist"){
			weatherIcon.src ="mist.png";
		}else if(data.weather[0].main == "clear"){
			weatherIcon.src ="clear.png";
		}
	
	
		document.querySelector(".weather").style.display ="block";
		document.querySelector(".error").style.display ="none";
	}

}

searchbtn.addEventListener("click",()=>{
	check_weather(searchbox.value);
})


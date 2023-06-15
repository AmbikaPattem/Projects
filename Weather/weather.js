let lon;
let lat;
let weather=document.querySelector(".weather");
let temparature=document.querySelector(".temparature");
let location1=document.querySelector(".location");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
const k=273;
const apiKey="7c25cdc410066005c8a3697ec7a1c656";

window.addEventListener("load",weatherDetails);
function weatherDetails()
{
    if(navigator.geolocation)
    {
        
        navigator.geolocation.getCurrentPosition(showposition);
     }
        
} 
function showposition(position)
 {
 console.log(position);
 lat=position.coords.latitude;
 lon=position.coords.longitude;
 response(lat,lon);
 }
		
 let response=async function(lat,lon)
  {
   const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,{method:"GET"});
    let final=await result.json();
    console.log(final);
    temparature.innerHTML="weather:"+Math.floor(final.main.temp-k)+" °C ";
	weather.innerHTML=final.weather[0].main;
	location1.innerHTML="Location: "+final.name;
	humidity.innerHTML="humidity : "+final.main.humidity+"%";
	wind.innerHTML="wind : "+final.wind.speed+"km/h";
   }	
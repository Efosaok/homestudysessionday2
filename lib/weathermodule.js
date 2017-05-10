const https = require("https");
const chalk = require("chalk");

const getWeatherCurrently = (latitude,longitude) => {
	https.get("https://api.darksky.net/forecast/34f059f263e04250efae205de0d48904/"+latitude+","+longitude,(res)=>{

	let info = "";

	res.on("data",(chunk)=>{
		info += chunk
	});

	res.on("end",() => {
		if(res.statusCode === 200){
			try{
				let data = JSON.parse(info);
				console.log("The weather is"+ " "+data.currently.summary+" "+ "in" +" "+ data.timezone);

			}catch(error){
				console.log("There was a problem")
			}
		}
		else{
		console.log("There was a problem");
		};
		
	});

});
}

const getWeatherHourly = (latitude,longitude) => {
	https.get("https://api.darksky.net/forecast/34f059f263e04250efae205de0d48904/"+latitude+","+longitude,(res)=>{

	let info = "";

	res.on("data",(chunk)=>{
		info += chunk
	});

	res.on("end",() => {
		if(res.statusCode === 200){
			try{
				let data = JSON.parse(info);
				console.log(data.hourly.summary+" "+ "in" +" "+ data.timezone);

			}catch(error){
				console.log("There was a problem")
			}
		}
		else{
		console.log("There was a problem");
		};
		
	});

});
}

const getWeatherDaily = (latitude,longitude) => {
	https.get("https://api.darksky.net/forecast/34f059f263e04250efae205de0d48904/"+latitude+","+longitude,(res)=>{

	let info = "";

	res.on("data",(chunk)=>{
		info += chunk
	});

	res.on("end",() => {
		if(res.statusCode === 200){
			try{
				let data = JSON.parse(info);
				console.log(data.daily.summary+" "+ "in" +" "+ data.timezone);

			}catch(error){
				console.log("There was a problem")
			}
		}
		else{
		console.log("There was a problem");
		};
		
	});

});
}

exports.getWeatherCurrently = getWeatherCurrently;
exports.getWeatherHourly = getWeatherHourly;
exports.getWeatherDaily = getWeatherDaily;
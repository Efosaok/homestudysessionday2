
const inquirer = require("inquirer");

const chalk = require("chalk");

const clear = require("clear");

const figlet = require("figlet");

const app = require("./lib/weathermodule.js");

clear();
console.log(
  chalk.red(
    figlet.textSync('E-CAST', { horizontalLayout: 'full' })
  )
);

const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'We would like to know your name:',
      value:(value)=>{
      	if (typeof(value) !== "string"){
      		return "invalid input"
      	}else{
      		nameofuser = value
      	}
      }
    },

    {
      type: 'list',
      name: 'typeofforecast',
      message: 'please kindly indicate the kind of weather-forecast you want to check:',
      choices: ["Current","Hourly","Daily"]
    },

    {
      type: 'list',
      name: 'residence',
      message: 'Which of the countries below would you like to get weather forecast:',
      choices: [ 'Nigeria', 'United States',"Germany","Ghana" ],
      default: 'Nigeria'
    }
  ];

inquirer.prompt(questions).then((answers) =>{
	let name = answers.name
	let forecastType = answers.typeofforecast
	let country = answers.residence
	if(forecastType === "Daily" && country === "Nigeria" ){
		app.getWeatherDaily(9.0820,8.6753)
	}
	if(forecastType === "Current" && country === "Nigeria"){
		app.getWeatherCurrently(9.0820,8.6753)
	}
	if(forecastType === "Hourly" && country === "Nigeria"){
		app.getWeatherHourly(9.0820,8.6753)
	}
	if(forecastType === "Daily" && country === "United States"){
		app.getWeatherDaily(37.0902,95.7129)
	}
	if(forecastType === "Current" && country === "United States"){
		app.getWeatherCurrently(37.0902,95.7129)
	}
	if(forecastType === "Hourly" && country === "United States"){
		app.getWeatherHourly(37.0902,95.7129);
	};
	if(forecastType === "Daily" && country === "Germany"){
		app.getWeatherDaily(51.1657,10.4515);
	};
	if(forecastType === "Hourly" && country === "Germany"){
		app.getWeatherHourly(51.1657,10.4515);
	};
	if(forecastType === "Current" && country === "Germany"){
		app.getWeatherCurrently(51.1657,10.4515);
	};
	if(forecastType === "Daily" && country === "Ghana"){
		app.getWeatherDaily(7.9465,1.0232);
	};
	if(forecastType === "Current" && country === "Ghana"){
		app.getWeatherCurrently(7.9465,1.0232);
	};
	if(forecastType === "Hourly" && country === "Ghana"){
		app.getWeatherHourly(7.9465,1.0232);
	}
	

})



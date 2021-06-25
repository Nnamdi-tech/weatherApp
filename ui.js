class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.country = document.getElementById('w-country');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-temp');
        //this.time = document.getElementById('w-time');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike  = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        
    }

    

    paint(weather) {
        this.location.textContent = `${weather.name} (${weather.sys.country})`;   
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.icon.textContent = weather.weather[0].icon;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.feelslike.textContent = `Feels Like: ${weather.main.feels_like} °C`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`
    }
}

function startTime()
{
    var today=new Date();
    //                   1    2    3    4    5    6    7    8    9   10    11  12   13   14   15   16   17   18   19   20   21   22   23   24   25   26   27   28   29   30   31   32   33
    var suffixes = ['','st','nd','rd','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','th','st','nd','rd','th','th','th','th','th','th','th','st','nd','rd'];

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    document.getElementById('w-time').innerHTML=(weekday[today.getDay()] + ',' + " " + today.getDate()+'<sup>'+suffixes[today.getDate()]+'</sup>' + ' of' + " " + month[today.getMonth()] + " " + today.getFullYear() + ' Time Now ' + today.toLocaleTimeString());
    t=setTimeout(function(){startTime()},500);
}
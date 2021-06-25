class Weather {
    constructor(city) {
        this.apiKey = '6ccd33b9e279bfedb15ca118a1cee3cf';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }   
}
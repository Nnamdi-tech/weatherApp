 // Init storage
 const storage = new Storage();
 // Get stored location data
 const weatherLocation = storage.getLocationData();

 // Init weather object
 const weather = new Weather(weatherLocation.city);
 const today = new Date(); 
 // Init UI
 const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change Location
    weather.changeLocation(city);
 
    // Set location in LS
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');

});


 //weather.changeLocation('Abuja');

 function getWeather() {
    weather.getWeather()
        .then(results => {
        ui.paint(results);
                
    })
    .catch(err => console.log(err));
}

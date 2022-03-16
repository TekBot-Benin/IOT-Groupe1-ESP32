var dataTemperaturePath = 'test/temperature';
var dataHumidityPath = 'test/humidity';
var dataLedPath = 'test/led';

// Get a database reference 
const databaseTemperature = database.ref(dataTemperaturePath);
const databaseHumidity = database.ref(dataHumidityPath);
const databaseLed = database.ref(dataLedPath);

// Variables to save database current values
var temperatureReading;
var humidityReading;
var ledReading;

// Attach an asynchronous callback to read the data
databaseTemperature.on('value', (snapshot) => {
  temperatureReading = snapshot.val();
  console.log(temperatureReading);
  document.getElementById("reading-temperature").innerHTML = temperatureReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

databaseTemperature.on('value', (snapshot) => {
  humidityReading = snapshot.val();
  console.log(humidityReading);
  document.getElementById("reading-humidity").innerHTML = humidityReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

document.querySelector('#on-off-led').addEventListener("click", (event) => {
  event.preventDefault();
  databaseLed.set(1);
});

// databaseLed.on('value', (snapshot) => {
//   ledReading = snapshot.val();
//   console.log(ledReading);
//   document.getElementById("reading-Led").innerHTML = ledReading;
// }, (errorObject) => {
//   console.log('The read failed: ' + errorObject.name);
// });

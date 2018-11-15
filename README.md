###Summary
This is a demo dashboard application for monitoring devices that take environmental readings.  Each device is typed to measure either temperature, humidity or air quality.
The user can create and remove devices and also add readings to devices.  Readings can only be applied to a specific device and are of the type of the device.
A device's readings can be visualized as averaged values (there needs to be at least 30 readings to see this).  Clicking on a datapoint will drill into the raw data (each point is an aggregate of multiple readings).

###Demo site
https://omcrobbie.github.io/dashboard-react

###Installation
Clone this repo, go to folder and then...
```sh
$ npm install
$ npm start
```

###Run the tests
Remove the 'x' in front of the describe blocks then...
```sh
$ npm test
```
###Technologies
In no particular order...
* React
* Redux
* jQuery
* Webpack
* Sass
* Axios
* Foundation (styling)
* Mocha/chai (tests)
* Chart.js
* Justgage

###Notes
* Chrome is the suggested browser for this application
* The application is best viewed on a high-resolution, widescreen display

//Today's date
var now = new Date();
document.getElementById('date').innerHTML = now.toDateString();

// Get gemini element
var gemini = document.getElementById('gemini');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        gemini.textContent = data.horoscope;
      } else {
        // This will run when it's not
        gemini.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/gemini/today');
  xhr.send();

}, false);

// Get libra element
var libra = document.getElementById('libra');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        libra.textContent = data.horoscope;
      } else {
        // This will run when it's not
        libra.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/libra/today');
  xhr.send();

}, false);

// Get aquarius element
var aquarius = document.getElementById('aquarius');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        aquarius.textContent = data.horoscope;
      } else {
        // This will run when it's not
        aquarius.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/aquarius/today');
  xhr.send();

}, false);

// Get aries element
var aries = document.getElementById('aries');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        aries.textContent = data.horoscope;
      } else {
        // This will run when it's not
        aries.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/aries/today');
  xhr.send();

}, false);

// Get leo element
var leo = document.getElementById('leo');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        leo.textContent = data.horoscope;
      } else {
        // This will run when it's not
        leo.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/leo/today');
  xhr.send();

}, false);

// Get Sagittarius element
var sagittarius = document.getElementById('sagittarius');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        sagittarius.textContent = data.horoscope;
      } else {
        // This will run when it's not
        sagittarius.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/sagittarius/today');
  xhr.send();

}, false);

// Get Cancer element
var cancer = document.getElementById('cancer');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        cancer.textContent = data.horoscope;
      } else {
        // This will run when it's not
        cancer.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/cancer/today');
  xhr.send();

}, false);

// Get Scorpio element
var scorpio = document.getElementById('scorpio');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        scorpio.textContent = data.horoscope;
      } else {
        // This will run when it's not
        scorpio.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/scorpio/today');
  xhr.send();

}, false);

// Get Pisces element
var pisces = document.getElementById('pisces');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        pisces.textContent = data.horoscope;
      } else {
        // This will run when it's not
        pisces.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/pisces/today');
  xhr.send();

}, false);

// Get Taurus element
var taurus = document.getElementById('taurus');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        taurus.textContent = data.horoscope;
      } else {
        // This will run when it's not
        taurus.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/taurus/today');
  xhr.send();

}, false);

// Get Virgo element
var virgo = document.getElementById('virgo');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        virgo.textContent = data.horoscope;
      } else {
        // This will run when it's not
        virgo.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/virgo/today');
  xhr.send();

}, false);

// Get Capricorn element
var capricorn = document.getElementById('capricorn');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for event listener
window.addEventListener('load', (event) => {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        capricorn.textContent = data.horoscope;
      } else {
        // This will run when it's not
        capricorn.textContent = 'No horoscope for today.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://theastrologer-api.herokuapp.com/api/horoscope/capricorn/today');
  xhr.send();

}, false);

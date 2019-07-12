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
  xhr.open('GET', 'http://sandipbgt.com/theastrologer/api/horoscope/gemini/today');
  xhr.send();

}, false);

// Get libra element
var gemini = document.getElementById('libra');

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
  xhr.open('GET', 'http://sandipbgt.com/theastrologer/api/horoscope/libra/today');
  xhr.send();

}, false);

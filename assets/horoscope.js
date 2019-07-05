// Get blockquote element
var blockquote = document.querySelector('blockQuote');

// Get More Ron button
var button = document.querySelector('#more-ron');

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// Listen for click events on More Ron button
button.addEventListener('click', function(event) {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        blockquote.textContent = JSON.parse(xhr.responseText);
      } else {
        // This will run when it's not
        blockquote.textContent = 'Sorry, Ron hates you. Come back later.';
        console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'http://sandipbgt.com/theastrologer/api/sunsigns');
  xhr.send();

}, false);

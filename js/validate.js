function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');

let latitude = document.getElementById("lat").value;
let longitude = document.getElementById("lon").value;
let latErr = document.createTextNode("* must be a valid Latitude (-90 to 90)");
let lotErr = document.createTextNode("* must be a valid Longitude (-180 to 180)");
let spanLat = document.querySelector(".lat");
let spanLon = document.querySelector(".lon");

if(latitude > 90 || latitude < -90 || isNaN(latitude)){
event.preventDefault();
spanLat.innerHTML = "";
spanLat.append(latErr);

}
if(longitude > 180 || longitude < -180 || isNaN(longitude)){
event.preventDefault();
spanLon.innerHTML = "";
spanLon.append(lotErr);

}

}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

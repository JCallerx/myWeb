// --- JavaScript Code ---

// 1. Replace this with your actual Web App URL from Google Apps Script.
const scriptURL = 'https://script.google.com/macros/s/AKfycbwqRp3yQP8kQcb3w0iiz1ff0z_MeP5xwRGWDk6KzXSGrGwlV336pjZ8WQRMaOXZGAVyhg/exec';

// 2. Make sure your HTML form has an id, for example: <form id="rsvp-form">
const form = document.getElementById('rsvp-form');

form.addEventListener('submit', e => {
  e.preventDefault(); // This stops the form from navigating to a new page.

  // Send the form data to your script in the background.
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response.json()) // Parse the JSON response from the script.
    .then(data => {
      // Check if the script's response indicates success.
      if (data.result === 'success') {
        // If successful, show the default browser pop-up.
        alert('Thank you! Your RSVP has been recorded.');
        
        // After the user clicks "OK" on the pop-up, this line will run.
        window.location.reload();
      } else {
        // If the script returned an error, show an error pop-up.
        alert('Error: There was a problem submitting your form.');
      }
    })
    .catch(error => {
      // This catches network errors (e.g., no internet connection).
      console.error('Error!', error.message);
      alert('A network error occurred. Please try again.');
    });
});

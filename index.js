window.onload = function() {
    // Finds the <p> tag where the message will be displayed.
    const messageEl = document.getElementById('form-message');
    
    // Reads the parameters from the page's URL.
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    // Checks if the status is 'success' or 'error' and displays the message.
    if (status === 'success') {
        messageEl.textContent = 'Thank you! Your RSVP has been recorded.';
        messageEl.style.color = 'green';
    } else if (status === 'error') {
        messageEl.textContent = 'Error: Could not submit your RSVP. Please try again.';
        messageEl.style.color = 'red';
    }
};

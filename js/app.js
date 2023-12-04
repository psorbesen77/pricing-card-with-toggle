// Retrieves the HTML element with the IDs
const toggleSwitch = document.getElementById('toggle');
const monthlyPrice = document.getElementById('monthly-price');
const annualPrice = document.getElementById('annual-price');

// Add event listener 
toggleSwitch.addEventListener('change', () => {
    
    if (toggleSwitch.checked) {
        monthlyPrice.style.display = 'none';
        annualPrice.style.display = 'inline';
    } else {
        monthlyPrice.style.display = 'inline';
        annualPrice.style.display = 'none'
    }

});

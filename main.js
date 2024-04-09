const defaultFontSize = 17;

function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("output").innerHTML = "Hello, " + name + "!";
    }
}

function toggleImageSize() {
    var image = document.getElementById("myImage");
    image.style.width = image.style.width === "200px" ? "400px" : "200px";
}

// Dropdown Functionality
function toggleDropdown(event) {
    var currentDropdown = event.target.nextElementSibling;
    var dropdowns = document.getElementsByClassName("dropdown-content");
    Array.from(dropdowns).forEach(function(dropdown) {
        dropdown.style.display = dropdown !== currentDropdown ? 'none' : dropdown.style.display === "block" ? "none" : "block";
    });
    event.stopPropagation();
}

document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        Array.from(dropdowns).forEach(function(dropdown) {
            dropdown.style.display = 'none';
        });
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});


function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        currentUser: document.querySelector('input[name="currentUser"]:checked').value,
        services: Array.from(document.querySelectorAll('input[name="service"]:checked')).map(el => el.value),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        priority: document.getElementById('priority').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form Submitted Successfully!');
    document.getElementById('myForm').reset();
}

window.onload = function() {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        document.getElementById('name').value = savedData.name;
        document.getElementById('email').value = savedData.email;
        document.getElementById('subject').value = savedData.subject;
        document.getElementById('message').value = savedData.message;
        document.getElementById('priority').value = savedData.priority;

        if (savedData.currentUser === 'yes') document.getElementById('userYes').checked = true;
        else if (savedData.currentUser === 'no') document.getElementById('userNo').checked = true;
        
        savedData.services.forEach(service => {
            let serviceCheckbox = document.querySelector(`input[name="service"][value="${service}"]`);
            if(serviceCheckbox) serviceCheckbox.checked = true;
        });
    }
};

// Crypto Ticker
function updateCryptoTicker() {
    const cryptoTickerContent = document.getElementById('cryptoTickerContent');
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1')
        .then(response => response.json())
        .then(data => {
            const tickerHtml = data.map(crypto => 
                `<span>${crypto.name}: $${crypto.current_price.toFixed(2)}</span>`
            ).join(' | ');
            cryptoTickerContent.innerHTML = tickerHtml;
            cryptoTickerContent.style.width = `${data.length * 10}em`; // Adjust width as necessary
        })
        .catch(error => {
            console.error('Error fetching cryptocurrency prices:', error);
            cryptoTickerContent.textContent = 'Failed to load prices';
        });
    // Initialize the rotation
    let position = 0;
    setInterval(() => {
        if(position > (cryptoTickerContent.offsetWidth - cryptoTickerContent.parentElement.offsetWidth)) {
            position = 0; // Reset position
        }
        cryptoTickerContent.style.transform = `translateX(${-position}px)`;
        position += 2; // Speed of ticker
    }, 50); // Update every 50ms
}

document.addEventListener('DOMContentLoaded', function() {
    toggleDropdown();
    updateCryptoTicker();
});
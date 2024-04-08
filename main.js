// Existing functions remain unchanged
function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("output").innerHTML = "Hello, " + name + "!";
    }
}

function toggleImageSize() {
    var image = document.getElementById("myImage");
    if (image.style.width === "200px") {
        image.style.width = "400px";
    } else {
        image.style.width = "200px";
    }
}

function toggleDropdown(event) {
    // Close all dropdown contents
    var dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function (drop) {
        if (drop !== event.target.nextElementSibling) {
            drop.style.display = "none";
        }
    });

    // Toggle the clicked dropdown
    var dropdownContent = event.target.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";

    // Prevents the document body click listener from firing when the dropdown is clicked
    event.stopPropagation();
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function(drop) {
            drop.style.display = "none";
        });
    }
};

// Adding event listeners to dropdown buttons
document.querySelectorAll('.drop-button').forEach(button => {
    button.addEventListener('click', toggleDropdown);
});

function highlight(element) {
    element.style.backgroundColor = "yellow";
}

function unhighlight(element) {
    element.style.backgroundColor = "";
}

function handleEducationClick() {
    alert("You clicked on the Education section!");
}

function handleContactClick() {
    alert("You clicked on the Contact Information section!");
}

// Close dropdowns when clicking outside
window.addEventListener('click', function(event) {
    // Check if the click is not on the dropdown button
    if (!event.target.matches('.drop-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
});

// Updated toggleDropdown function
function toggleDropdown(element) {
    var dropdownContent = element.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        // Close all open dropdowns before opening the new one
        var allDropdowns = document.querySelectorAll('.dropdown-content');
        for (var i = 0; i < allDropdowns.length; i++) {
            allDropdowns[i].style.display = 'none';
        }
        dropdownContent.style.display = "block";
    }
}

function toggleDropdown(event) {
    var dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        // Close all other dropdowns
        var allDropdowns = document.querySelectorAll('.dropdown-content');
        allDropdowns.forEach(function(element){
            element.style.display = 'none';
        });

        // Show the clicked dropdown
        dropdownContent.style.display = "block";
    }
    event.stopPropagation(); // Prevent event from propagating to the window
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    for (var i = 0; i < allDropdowns.length; i++) {
        if (!allDropdowns[i].contains(event.target)) {
            allDropdowns[i].style.display = 'none';
        }
    }
}, true);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function submitForm() {
    // Save form data to local storage
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
    document.getElementById('myForm').reset(); // Optional: Reset the form after submission
}

// Optional: If you want to automatically populate the form with saved data on page load
window.onload = function() {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
        document.getElementById('name').value = savedData.name;
        document.getElementById('email').value = savedData.email;
        if (savedData.currentUser === 'yes') document.getElementById('userYes').checked = true;
        else if (savedData.currentUser === 'no') document.getElementById('userNo').checked = true;
        
        savedData.services.forEach(service => {
            document.querySelector(`input[name="service"][value="${service}"]`).checked = true;
        });
        
        document.getElementById('subject').value = savedData.subject;
        document.getElementById('message').value = savedData.message;
        document.getElementById('priority').value = savedData.priority;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    function updateBitcoinPrice() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                const price = data.bitcoin.usd;
                document.getElementById('bitcoinPrice').textContent = `BTC: $${price}`;
            })
            .catch(error => {
                console.error('Error fetching Bitcoin price:', error);
                document.getElementById('bitcoinPrice').textContent = 'Failed to load price';
            });
    }

    updateBitcoinPrice(); // Update price on load
    setInterval(updateBitcoinPrice, 60000); // Update price every minute
});

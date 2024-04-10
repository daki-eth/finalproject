// Welcome messages in different languages
const welcomeMessages = ["Welcome!", "Bienvenue!", "Добро пожаловать!", "Willkommen!", "¡Bienvenido!", "你好"];

function rotateWelcome() {
    const welcomeElement = document.getElementById("welcomeMessage");
    let currentIndex = 0;

    setInterval(() => {
        welcomeElement.textContent = welcomeMessages[currentIndex];
        currentIndex = (currentIndex + 1) % welcomeMessages.length;
    }, 1000);
}

// Function to adjust font size for specific elements
function adjustFontSize(elementId, change) {
    const element = document.getElementById(elementId);
    if (element) {
        const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        const currentSize = parseFloat(style);
        element.style.fontSize = `${currentSize + change}px`;
    }
}

// Event listeners for the accessibility options
function setupAccessibilityOptions() {
    const trigger = document.getElementById('accessibility-trigger');
    const options = document.getElementById('options');

    trigger.addEventListener('click', function() {
        const isHidden = options.getAttribute('aria-hidden') === 'true';
        options.setAttribute('aria-hidden', String(!isHidden));
        options.style.display = isHidden ? 'block' : 'none';
    });

    document.getElementById('increase-font-size').addEventListener('click', function() {
        adjustFontSize('home-page', 1);
        adjustFontSize('about', 1);
    });

    document.getElementById('decrease-font-size').addEventListener('click', function() {
        adjustFontSize('home-page', -1);
        adjustFontSize('about', -1);
    });

    document.getElementById('toggle-color-theme').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    document.getElementById('reset-accessibility').addEventListener('click', function() {
        document.body.style.fontSize = '';
        document.body.classList.remove('dark-theme');
    });
}

// Initialize all functions after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    rotateWelcome();
    setupAccessibilityOptions();
    setupSmoothScrolling();
});

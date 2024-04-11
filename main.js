// Welcome messages in different languages
const welcomeMessages = ["Welcome!", "Bienvenue!", "Добро пожаловать!", "Willkommen!", "¡Bienvenido!", "你好"];

// Function to rotate the welcome message
function rotateWelcome() {
    const welcomeElement = document.getElementById("welcomeMessage");
    let currentIndex = 0;

    setInterval(() => {
        welcomeElement.textContent = welcomeMessages[currentIndex];
        currentIndex = (currentIndex + 1) % welcomeMessages.length;
    }, 1000); 
}

// Call the rotateWelcome function when the document is fully loaded
document.addEventListener('DOMContentLoaded', rotateWelcome);



document.addEventListener('DOMContentLoaded', function() {
    // Accessibility menu toggle
    const trigger = document.getElementById('accessibility-trigger');
    const options = document.getElementById('options');

    if (trigger && options) {
        trigger.addEventListener('click', function() {
            const isHidden = options.getAttribute('aria-hidden') === 'true';
            options.setAttribute('aria-hidden', String(!isHidden));
            if (isHidden) {
                options.classList.remove('hidden');
                options.style.display = 'block';
            } else {
                options.classList.add('hidden');
                options.style.display = 'none';
            }
        });
    }

    // Increase font size
    const increaseBtn = document.getElementById('increase-font-size');
    if (increaseBtn) {
        increaseBtn.addEventListener('click', function() {
            document.body.style.fontSize = 'larger';
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const welcomeSection = document.getElementById('home-page');
        const aboutSection = document.getElementById('about');
    
        // Function to adjust font size for a specific element
        function adjustFontSize(element, change) {
            const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
            const currentSize = parseFloat(style);
            element.style.fontSize = `${currentSize + change}px`;
        }
    
        document.getElementById('increase-font-size').addEventListener('click', function() {
            if (welcomeSection) {
                adjustFontSize(welcomeSection, 1); 
            }
            if (aboutSection) {
                adjustFontSize(aboutSection, 1); 
            }
        });
    
        document.getElementById('decrease-font-size').addEventListener('click', function() {
            if (welcomeSection) {
                adjustFontSize(welcomeSection, -1); 
            }
            if (aboutSection) {
                adjustFontSize(aboutSection, -1); 
            }
        });
    });
    

    // Decrease font size
    const decreaseBtn = document.getElementById('decrease-font-size');
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', function() {
            document.body.style.fontSize = 'smaller';
        });
    }

    // Toggle color theme
    const toggleThemeBtn = document.getElementById('toggle-color-theme');
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
        });
    }

    // Reset accessibility settings
    const resetBtn = document.getElementById('reset-accessibility');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            document.body.style.fontSize = '';
            document.body.classList.remove('dark-theme');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

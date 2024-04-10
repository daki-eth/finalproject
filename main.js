
/*Nav Bar Button Functions*/









/* Welcome function */
const welcomeMessages = ["Welcome!", "Bienvenue!", "Добро пожаловать!", "Willkommen!", "¡Bienvenido!"];

function rotateWelcome() {
    const welcomeElement = document.getElementById("welcomeMessage");
    let currentIndex = 0;

    setInterval(() => {
        welcomeElement.textContent = welcomeMessages[currentIndex];
        currentIndex = (currentIndex + 1) % welcomeMessages.length;
    }, 1000); 
}

window.onload = rotateWelcome;



/*Nav Bar Button Functions*/









/* Welcome function */
const welcomeMessages = ["Welcome!", "Bienvenue!", "Добро пожаловать!", "Willkommen!", "¡Bienvenido!", "你好"];

function rotateWelcome() {
    const welcomeElement = document.getElementById("welcomeMessage");
    let currentIndex = 0;

    setInterval(() => {
        welcomeElement.textContent = welcomeMessages[currentIndex];
        currentIndex = (currentIndex + 1) % welcomeMessages.length;
    }, 1000); 
}

window.onload = rotateWelcome;

 
/* Contact Form */
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    document.querySelector('.contact-section').classList.add('message-sent');
    document.querySelector('.feedback-message').textContent = 'Your message has been sent!';
  });
  

  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.form-feedback').innerHTML = 'Form Submitted';
    document.querySelector('.form-feedback').style.display = 'block';
});

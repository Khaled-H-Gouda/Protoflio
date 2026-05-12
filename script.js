const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const email = document.querySelector('#btn-em');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

// --- Typewriter Effect ---
const typewriterText = document.querySelector('#typewriter');
const roles = ["AI Engineer", "ML Specialist", "Data Scientist"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;



function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {

        typewriterText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {

        typewriterText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }


    let typeSpeed = isDeleting ? 100 : 200;


    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}


document.addEventListener('DOMContentLoaded', type);




const themeIcon = document.querySelector('#theme-icon');
themeIcon.onclick = () => {

    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
};



const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});


sr.reveal('.info-box', { delay: 100 });
sr.reveal('.about img', { origin: 'left', delay: 200 });
sr.reveal('.section-title', { delay: 50 });
sr.reveal('.grid-card', { interval: 100 });
sr.reveal('.project-card', { interval: 100 });
sr.reveal('.input-box', { origin: 'bottom' }); 
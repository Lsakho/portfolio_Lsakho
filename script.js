// Menu hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
// Smooth scrolling pour les liens de navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observer les cartes de compétences et projets
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Effet parallaxe léger sur les éléments flottants
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Gestion du formulaire de contact
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Animation de succès
    const button = this.querySelector('.cta-button');
    const originalText = button.textContent;
    button.textContent = 'Message envoyé! ✅';
    button.style.background = 'linear-gradient(45deg, #4CAF50, #66BB6A)';

    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(45deg, #ffd700, #ffed4e)';
        this.reset();
    }, 3000);
});

// Effet de hover dynamique sur les cartes
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
        // Éléments
        const certificationsBtn = document.getElementById('certificationsBtn');
        const certificationsPopup = document.getElementById('certificationsPopup');
        const closeCertificationsBtn = document.getElementById('closeCertificationsBtn');

        // Ouvrir le popup Certifications
        certificationsBtn.addEventListener('click', () => {
            certificationsPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Fermer le popup Certifications (fonction spécifique)
        function closeCertificationsPopup() {
            certificationsPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeCertificationsBtn.addEventListener('click', closeCertificationsPopup);

        // Fermer en cliquant sur l'overlay
        certificationsPopup.addEventListener('click', (e) => {
            if (e.target === certificationsPopup) {
                closeCertificationsPopup();
            }
        });

        // Fermer avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && certificationsPopup.classList.contains('active')) {
                closeCertificationsPopup();
            }
        });

        // Fonctions pour les certifications
        function downloadCertifications() {
            alert('Téléchargement des certifications en PDF...');
            // Ici vous pourriez implémenter la logique de téléchargement
        }

        function printCertifications() {
            const printContent = document.querySelector('.certifications-content').innerHTML;
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                <head>
                    <title>Mes Certifications</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        .certifications-content { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
                        .certification-card { border: 2px solid #4CAF50; border-radius: 10px; padding: 15px; text-align: center; }
                        .certification-icon { display: none; }
                        h4 { color: #333; margin: 10px 0; }
                        p { margin: 5px 0; }
                        .certification-date { color: #4CAF50; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <h1>🏆 Mes Certifications</h1>
                    <div class="certifications-content">${printContent}</div>
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }

        console.log('Certifications Popup chargé avec succès ! 🏆');
       // Gestion du popup CV
        const cvBtn = document.getElementById('cvBtn');
        const cvPopup = document.getElementById('cvPopup');
        const closeBtn = document.getElementById('closeBtn');
        const pdfFrame = document.getElementById('pdfFrame');
        const fallback = document.getElementById('fallback');

        // Ouvrir le popup
        cvBtn.addEventListener('click', () => {
            cvPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Vérifier si l'iframe se charge correctement après 3 secondes
            setTimeout(() => {
                try {
                    // Test si le PDF s'affiche dans l'iframe
                    const iframe = pdfFrame.contentWindow;
                    if (!iframe || iframe.location.href === 'about:blank') {
                        showFallback();
                    }
                } catch (e) {
                    // Erreur CORS ou autre - afficher le fallback
                    showFallback();
                }
            }, 3000);
        });

        function showFallback() {
            pdfFrame.style.display = 'none';
            fallback.classList.add('active');
            console.log('PDF iframe ne fonctionne pas - affichage du fallback');
        }

        // Fermer le popup
        function closePopup() {
            cvPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Reset pour le prochain affichage
            pdfFrame.style.display = 'block';
            fallback.classList.remove('active');
        }

        closeBtn.addEventListener('click', closePopup);

        // Fermer en cliquant sur l'overlay
        cvPopup.addEventListener('click', (e) => {
            if (e.target === cvPopup) {
                closePopup();
            }
        });

        // Fermer avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cvPopup.classList.contains('active')) {
                closePopup();
            }
        });

        // Animation du bouton CV
        setInterval(() => {
            cvBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                if (!cvBtn.matches(':hover')) {
                    cvBtn.style.transform = 'scale(1)';
                }
            }, 200);
        }, 3000);

        console.log('CV Popup chargé avec succès ! 🎉');
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
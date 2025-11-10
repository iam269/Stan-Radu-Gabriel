// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navbarMenu = document.getElementById('navbar-menu');
const cvModal = document.getElementById('cv-modal');
const currentYearSpan = document.getElementById('current-year');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initNavbarScroll();
    initCurrentYear();
    initImageCarousels();
});

// Navbar scroll effect
function initNavbarScroll() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    navbarMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');

    // Animate hamburger menu
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (navbarMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Close mobile menu if open
    if (navbarMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// CV Modal functions
function openCVModal() {
    cvModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCVModal() {
    cvModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
cvModal.addEventListener('click', function(e) {
    if (e.target === cvModal) {
        closeCVModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cvModal.style.display === 'block') {
        closeCVModal();
    }
});

// Image carousel functionality
const imageSets = {
    eco: ['assets/project1.jpg', 'assets/project12.jpg'],
    ornare: ['assets/project21.jpg', 'assets/project22.jpg', 'assets/project23.jpg'],
    bal: ['assets/project31.jpg', 'assets/project32.jpg', 'assets/project33.jpg']
};

let currentIndices = {
    eco: 0,
    ornare: 0,
    bal: 0
};

function initImageCarousels() {
    // Add event listeners to carousel buttons
    document.querySelectorAll('.carousel-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
}

function changeImage(project, direction) {
    const images = imageSets[project];
    const imageElement = document.getElementById(`${project}-image`);

    currentIndices[project] = (currentIndices[project] + direction + images.length) % images.length;
    imageElement.src = images[currentIndices[project]];
}

// Set current year in footer
function initCurrentYear() {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .contact-card, .about-content').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card, .contact-card, .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .project-card.animate-in, .contact-card.animate-in, .about-content.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .navbar-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 20px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 769px) {
        .navbar-menu.active {
            display: flex !important;
            flex-direction: row !important;
            position: static !important;
            background: transparent !important;
            padding: 0 !important;
            box-shadow: none !important;
        }
    }
`;
document.head.appendChild(style);

// Add responsive navbar menu styles
const responsiveStyle = document.createElement('style');
responsiveStyle.textContent = `
    @media (max-width: 768px) {
        .navbar-menu {
            display: none;
        }

        .navbar-menu.active {
            display: flex;
        }
    }
`;
document.head.appendChild(responsiveStyle);
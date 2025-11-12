// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(isActive));
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
    })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 220;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(15, 23, 42, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 12px rgba(15, 23, 42, 0.06)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedSelectorList = [
        '.service-card',
        '.event-card',
        '.team-card',
        '.news-card',
        '.highlight',
        '.newsletter-card',
        '.contact-directory'
    ].join(',');

    const animateElements = document.querySelectorAll(animatedSelectorList);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form handling
function handleNewsletterSignup(event) {
    event.preventDefault();
    const email = event.target.email.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        event.target.email.focus();
        return false;
    }

    alert('Thank you for subscribing to our newsletter!');
    event.target.reset();
    return false;
}

// Lazy loading for images with data-src
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Back to top button functionality
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="sr-only">Back to top</span>';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('type', 'button');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 54px;
        height: 54px;
        background: #1d4ed8;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 10px 25px rgba(29, 78, 216, 0.35);
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Typing animation for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    (function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i += 1;
            setTimeout(type, speed);
        }
    })();
}

document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.dataset.original = heroTitle.textContent;
        // Enable the line below to activate typing effect
        // typeWriter(heroTitle, heroTitle.dataset.original, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * -0.15}px)`;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

const loadingCSS = `
    body:not(.loaded) {
        overflow: hidden;
    }

    body:not(.loaded)::before {
        content: '';
        position: fixed;
        inset: 0;
        background: linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%);
        z-index: 9999;
    }

    body:not(.loaded)::after {
        content: 'RUSCA';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        font-size: 3rem;
        font-weight: 700;
        z-index: 10000;
        animation: pulse 2s infinite;
        letter-spacing: 0.2em;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;

const style = document.createElement('style');
style.textContent = loadingCSS;
document.head.appendChild(style);

// Debounce utility
function debounce(func, wait = 10) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// News filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    if (!filterButtons.length || !newsCards.length) return;

    const handleFilter = category => {
        newsCards.forEach(card => {
            const matches = category === 'all' || card.dataset.category === category;
            card.style.display = matches ? 'grid' : 'none';
        });
    };

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            handleFilter(btn.dataset.filter);
        });
    });
});

// Close mobile menu on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
    }
});

// Focus outlines for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('focus', () => {
        link.style.outline = '2px solid #1d4ed8';
        link.style.outlineOffset = '2px';
    });

    link.addEventListener('blur', () => {
        link.style.outline = 'none';
    });
});

// Console welcome message
console.log(`
🚀 Welcome to the RUSCA digital experience!
📧 Contact: rusca@rutgers.edu
🔗 LinkedIn: https://www.linkedin.com/in/rusupplychain/
📸 Instagram: https://www.instagram.com/rutgersrusca/
`);

// Export functions for potential use in other scripts
window.RUSCA = {
    handleNewsletterSignup,
    typeWriter,
    createBackToTopButton
};



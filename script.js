// Floating papers animation
function createFloatingPaper() {
    const papers = ['📄', '📜', '📃', '🗞️', '📰'];
    const paper = document.createElement('div');
    paper.className = 'paper';
    paper.innerHTML = papers[Math.floor(Math.random() * papers.length)];
    paper.style.left = Math.random() * 100 + 'vw';
    paper.style.fontSize = (Math.random() * 20 + 15) + 'px';
    paper.style.animationDuration = (Math.random() * 10 + 15) + 's';
    paper.style.animationDelay = Math.random() * 2 + 's';
    
    document.getElementById('floating-papers').appendChild(paper);
    
    setTimeout(() => {
        paper.remove();
    }, 25000);
}

// Create floating papers periodically
setInterval(createFloatingPaper, 3000);

// Initial papers
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingPaper, i * 1000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.background = 'rgba(20, 20, 20, 0.9)';
    }
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Show success modal
        document.getElementById('success-modal').style.display = 'block';
        
        // Reset form
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Modal functionality
const modal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Mobile menu toggle (basic functionality)
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 10, 10, 0.95)';
        navLinks.style.padding = '1rem';
    }
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
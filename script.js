document.addEventListener('DOMContentLoaded', () => {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
        
        // Show success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = '#10B981';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitBtn.textContent = 'Send Message';
            submitBtn.style.backgroundColor = '';
        }, 3000);
    });

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

    // Add scroll animation for contact section
    const contactSection = document.querySelector('.contact-section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to contact box
    const contactBox = document.querySelector('.contact-box');
    contactBox.style.opacity = '0';
    contactBox.style.transform = 'translateY(20px)';
    contactBox.style.transition = 'all 0.8s ease';
    observer.observe(contactBox);
}); 
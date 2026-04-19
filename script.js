document.addEventListener("DOMContentLoaded", () => {
    // --- Scroll Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    // --- Simple Form Submission Mocks ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn') || form.querySelector('button[type="submit"]');
            if(btn) {
                const originalText = btn.innerText;
                btn.innerText = "Processing...";
                btn.style.opacity = '0.7';
                
                setTimeout(() => {
                    btn.innerText = "Success!";
                    btn.style.backgroundColor = "#10b981"; // Success green
                    
                    setTimeout(() => {
                        form.reset();
                        btn.innerText = originalText;
                        btn.style.backgroundColor = "";
                        btn.style.opacity = '1';
                    }, 2000);
                }, 1500);
            }
        });
    });

    // Mobile Menu Mock (Just an alert for this simple version)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            alert('Mobile menu navigation toggled!');
        });
    }
});

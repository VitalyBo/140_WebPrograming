// Scroll to top button functionality
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Popup modal functionality
const learnMoreBtn = document.getElementById('learn-more-btn');
const modal = document.getElementById('popup-modal');
const closeBtn = document.getElementsByClassName('close')[0];

learnMoreBtn.onclick = function() {
    modal.style.display = "block";
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Form submission (for demonstration purposes)
const contactForm = document.getElementById('contact-form');
contactForm.onsubmit = function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
};

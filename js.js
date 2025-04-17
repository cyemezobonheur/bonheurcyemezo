// Dark Mode Toggle
const darkToggle = document.getElementById('darkmode-toggle');
const body = document.body;
darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('darkmode', body.classList.contains('dark') ? '1' : '0');
});
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkmode') === '1') {
        body.classList.add('dark');
    }
});

// Tabs Logic
const tablinks = document.querySelectorAll('.tablink');
const tabcontents = document.querySelectorAll('.tabcontent');
tablinks.forEach(btn => {
    btn.addEventListener('click', () => {
        tablinks.forEach(b => b.classList.remove('active'));
        tabcontents.forEach(tab => tab.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        window.scrollTo({top: 0, behavior: "smooth"});
    });
});

// Contact Form (Demo)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
        contactForm.reset();
    });
}
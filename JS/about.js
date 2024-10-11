//navbar
const links = document.querySelectorAll('.navbar a');
const highlight = document.querySelector('.highlight');

links.forEach(link => {
    link.addEventListener('click', function() {
        highlight.style.width = this.offsetWidth + 'px';
        highlight.style.left = this.offsetLeft + 'px';
        highlight.style.top = this.offsetTop + this.offsetHeight + 'px';
    });
});

//about
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    alert(`Message Sent!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`);

    document.getElementById('contact-form').reset();
});
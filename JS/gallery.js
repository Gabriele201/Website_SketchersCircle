const links = document.querySelectorAll('.navbar a');
const highlight = document.querySelector('.highlight');

links.forEach(link => {
    link.addEventListener('click', function() {
        highlight.style.width = this.offsetWidth + 'px';
        highlight.style.left = this.offsetLeft + 'px';
        highlight.style.top = this.offsetTop + this.offsetHeight + 'px';
    });
});
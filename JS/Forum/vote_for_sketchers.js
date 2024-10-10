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

//side bar
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebarLinks.forEach(link => link.classList.remove('active')); 
        this.classList.add('active'); 
    });
});

//votes
const voteButtons = document.querySelectorAll('.vote-btn');

voteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const totalVoted = button.previousElementSibling; 
        let currentVotes = parseInt(totalVoted.innerText.split(': ')[1]);
        currentVotes++;
        totalVoted.innerText = `Total voted: ${currentVotes}`;
        alert('Thank you for voting!');
    });
});
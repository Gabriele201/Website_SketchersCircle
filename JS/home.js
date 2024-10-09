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

//number increment
const counters = document.querySelectorAll('.counter');
let hasAnimated = false; 

const updateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    const currentValue = +counter.dataset.currentValue || 0;

    const increment = Math.ceil(target / 500); 
    if (currentValue < target) {
        counter.dataset.currentValue = currentValue + increment; 
        counter.innerText = Math.ceil(counter.dataset.currentValue).toLocaleString('id-ID') + '+';
        setTimeout(() => updateCount(counter), 30); 
    } else {
        counter.innerText = target.toLocaleString('id-ID') + '+'; 
    }
};

const handleScroll = () => {
    const statsContainer = document.querySelector('.stats-container');
    const rect = statsContainer.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (!hasAnimated) { 
            hasAnimated = true; 
            counters.forEach(counter => {
                counter.dataset.currentValue = 0; 
                updateCount(counter); 
            });
        }
    } else if (hasAnimated && (rect.top > window.innerHeight || rect.bottom < 0)) {
        hasAnimated = false;
        counters.forEach(counter => {
            counter.dataset.currentValue = 0; 
            counter.innerText = '0'; 
        });
    }
};

window.addEventListener('scroll', handleScroll);

//gallery card
let currentIndex = 0;
const boxes = document.querySelectorAll('.highlight-box');
const totalBoxes = boxes.length;
const boxesToShow = 5;

function updateBoxes() {
    boxes.forEach((box, index) => {
        if (index >= currentIndex && index < currentIndex + boxesToShow) {
            box.style.display = 'block'; 
        } else {
            box.style.display = 'none'; 
        }
    });

    document.querySelector('.prev-btn').style.opacity = currentIndex === 0 ? '0.5' : '1';
    document.querySelector('.prev-btn').style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';

    document.querySelector('.next-btn').style.opacity = currentIndex >= totalBoxes - boxesToShow ? '0.5' : '1';
    document.querySelector('.next-btn').style.pointerEvents = currentIndex >= totalBoxes - boxesToShow ? 'none' : 'auto';
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateBoxes();
    }
});

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < totalBoxes - boxesToShow) {
        currentIndex++;
        updateBoxes();
    }
});

updateBoxes();
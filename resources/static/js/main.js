const slides = document.querySelectorAll('.slideshow img');

if (slides.length > 1) {
    let current = 0;
    slides[current].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 6000);
}

const overlay = document.querySelector('.panel-overlay');
const leftHeader = document.querySelector('.panel-header-left');
const rightHeader = document.querySelector('.panel-header-right');

function activateLeft() {
    overlay.classList.add('left-active');
    overlay.classList.remove('right-active');
}

function activateRight() {
    overlay.classList.add('right-active');
    overlay.classList.remove('left-active');
}

function clearActive() {
    overlay.classList.remove('left-active', 'right-active');
}

leftHeader.addEventListener('mouseenter', activateLeft);
rightHeader.addEventListener('mouseenter', activateRight);

leftHeader.addEventListener('mouseleave', clearActive);
rightHeader.addEventListener('mouseleave', clearActive);
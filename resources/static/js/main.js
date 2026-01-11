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

function runHoverHint(el) {
    const text = el.querySelector('h1');
    const r = text.getBoundingClientRect();
    const pad = 12;
    const w = r.width + pad * 2;
    const h = r.height + pad * 2;
    const bias = 4;

    const hint = document.createElement('div');
    hint.className = 'hover-hint';
    hint.style.top = `${r.top - pad}px`;
    hint.style.left = `${r.left - pad + bias}px`;
    hint.style.width = `${w}px`;
    hint.style.height = `${h}px`;

    hint.innerHTML = `
        <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
            <rect
                x="1"
                y="1"
                width="${w - 2}"
                height="${h - 2}"
                rx="10"
                ry="10"
                pathLength="1"
                class="trace"
            />
        </svg>
    `;

    document.body.appendChild(hint);
    setTimeout(() => hint.remove(), 2500);
}

window.addEventListener('load', () => {
    setTimeout(() => {
        runHoverHint(leftHeader);
        setTimeout(() => runHoverHint(rightHeader), 0);
    }, 1000);
});
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
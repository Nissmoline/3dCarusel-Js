const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const totalSlides = slides.length;
const angle = 360 / totalSlides;
let currentRotation = 0; 
const radius = Math.round((slides[0].offsetWidth / 2) / Math.tan(Math.PI / totalSlides));

// Position slides in 3D space
slides.forEach((slide, index) => {
    const rotateY = angle * index;
    const translateZ = radius;
    slide.style.transform = `translate(-50%, -50%) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
});

function updateCarousel() {
    // Apply the current rotation to the carousel
    carousel.style.transform = `rotateY(${currentRotation}deg)`;
}

nextButton.addEventListener('click', () => {
    currentRotation -= angle; // Rotate to the right
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentRotation += angle; // Rotate to the left
    updateCarousel();
});

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextButton.click();
    if (e.key === 'ArrowLeft') prevButton.click();
});

// Initial position
updateCarousel(); 
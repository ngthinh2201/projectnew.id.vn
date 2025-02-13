document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let slideshowInterval;
    let isHovered = false;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'exit');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + totalSlides) % totalSlides) {
                slide.classList.add('exit');
            }
        });
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % totalSlides;
        showSlide(nextIndex);
    }

    function startSlideshow() {
        if (!isHovered) {
            slideshowInterval = setInterval(nextSlide, 5000);
        }
    }

    function pauseSlideshow() {
        clearInterval(slideshowInterval);
    }

    const slideshow = document.querySelector('.slideshow');
    const slideshowDescription = document.querySelector('.slideshow-description');

    slideshow.addEventListener('mouseenter', () => {
        isHovered = true;
        pauseSlideshow();
    });

    slideshow.addEventListener('mouseleave', () => {
        isHovered = false;
        startSlideshow();
    });

    slideshowDescription.addEventListener('mouseenter', () => {
        isHovered = true;
        pauseSlideshow();
    });

    slideshowDescription.addEventListener('mouseleave', () => {
        isHovered = false;
        startSlideshow();
    });

    const topList = document.querySelectorAll('#top-list li');
    topList.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('bounce-effect');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('bounce-effect');
        });

        item.addEventListener('click', () => {
            item.classList.add('pop-effect');
            setTimeout(() => {
                item.classList.remove('pop-effect');
                showSlide(index);
            }, 500);
        });
    });

    startSlideshow();
    showSlide(currentIndex);
});

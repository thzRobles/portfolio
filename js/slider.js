const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

async function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove('slide-active');
        slide.classList.remove('slide-inactive');
    });


    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('slide-active');
        } else {
            slide.classList.add('slide-inactive');
        }
    });
}

function handleSwipe(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (direction === 'right') {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    showSlide(currentIndex);
}

function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
}

function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].pageX;
    const direction = startX > endX ? 'left' : 'right';
    handleSwipe(direction);
}

function handleClick(e) {
    const url = e.currentTarget.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    }
}

slides.forEach(slide => {
    slide.addEventListener('mousedown', startDrag);
    slide.addEventListener('touchstart', startDrag);
    slide.addEventListener('mouseup', endDrag);
    slide.addEventListener('touchend', endDrag);

    // Añadir eventos de click y touchend para la redirección
    slide.addEventListener('click', handleClick);
    slide.addEventListener('touchend', function(e) {
        if (!isDragging) {
            handleClick(e);
        }
    });
});

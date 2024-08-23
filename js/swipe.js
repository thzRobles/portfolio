// Swipe
let initialX = null;
let initialY = null;
let finalX = null;
let finalY = null;

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.getElementById("slides");

    slides.addEventListener("touchstart", function (e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    });

    slides.addEventListener("touchend", function (e) {
        if (initialX === null || initialY === null) {
            return;
        }

        finalX = e.changedTouches[0].clientX;
        finalY = e.changedTouches[0].clientY;

        let diffX = initialX - finalX;
        let diffY = initialY - finalY;

        if (Math.abs(diffX) > Math.abs(diffY)) {

            // Sliding horizontally
            if (diffX > 30) {
                // Swiped left
                // console.log("Swiped left");
                // Aquí puedes agregar la lógica para la acción al deslizar hacia la izquierda
                handleSwipe("left");
            }
            // else {
            //     // Swiped right
            //     console.log("Swiped right?");
            //     // Aquí puedes agregar la lógica para la acción al deslizar hacia la derecha
            //     handleSwipe("right")
            // }
            else if (diffX < -30) {
                // Swiped right
                // console.log("swiped right")
                // Aquí puedes agregar la lógica para la acción al deslizar hacia la derecha
                handleSwipe("right")
            }

            showSlide(currentIndex);
        } else {
            // Sliding vertically
            if (diffY > 1) {
                // Swiped up
                // console.log("Swiped up");
                // Aquí puedes agregar la lógica para la acción al deslizar hacia arriba
            } else if (diffY < -1) {
                // Swiped down
                // console.log("Swiped down");
                // Aquí puedes agregar la lógica para la acción al deslizar hacia abajo
            } else {
                // No swipe
                // console.log("No swiped")
                // Aquí puedes agregar la lógica para la acción de no deslizar
                handleSwipe("search")

            }
        }

        // Reset values
        initialX = null;
        initialY = null;
        finalX = null;
        finalY = null;
    });
});

// Slide
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
    else if (direction === 'search') {
        const url = slides[currentIndex].getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
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
    // slide.addEventListener('mousedown', startDrag);
    // slide.addEventListener('touchstart', startDrag);
    // slide.addEventListener('mouseup', endDrag);
    // slide.addEventListener('touchend', endDrag);

    // Añadir eventos de click y touchend para la redirección
    // slide.addEventListener('click', handleClick);
    // slide.addEventListener('touchend', function (e) {
    //     if (!isDragging) {
    //         handleClick(e);
    //     }
    // });

    slide.addEventListener('touchend', endDrag);
});
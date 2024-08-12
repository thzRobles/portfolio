// scripts.js
$(document).ready(function () {
    // Inicializar Isotope
    var $gallery = $('.gallery').isotope({
        itemSelector: '.gallery-item',
        layoutMode: 'fitRows'
    });

    // Filtrar items al presionar los botones
    $('.filter-buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });

        // Cambiar la clase activa en los botones
        $('.filter-buttons button').removeClass('active');
        $(this).addClass('active');
    });
});

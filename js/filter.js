
function filterImages(category) {
    // Obtener todas las imágenes de la galería
    var images = document.querySelectorAll('.gallery img');

    // Recorrer cada imagen
    images.forEach(function(img) {
        // Obtener las categorías de la imagen como array
        var categories = img.getAttribute('data-categories').split(',');

        // Mostrar la imagen si pertenece a la categoría seleccionada o si la categoría es "all"
        if (category === 'all' || categories.includes(category)) {
            img.style.display = 'block'; // Mostrar la imagen
        } else {
            img.style.display = 'none'; // Ocultar la imagen
        }
    });
}

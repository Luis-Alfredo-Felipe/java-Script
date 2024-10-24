document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.link-logo').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.logo').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.link-Galeria').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.Galeria').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.link-Deportes').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.Deportes').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.link-Pasatiempos').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.Pasatiempos').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.link-Contacto').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.Contacto').scrollIntoView({ behavior: 'smooth' });
    });
});
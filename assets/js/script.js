$(() => {
    // JS Bootstrap para tootips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    $("#enviarCorreo").on('click', (e) =>{
        alert("El correo fue enviado correctamente");
    })
    // cambia rojo al hacer click sobre los titulos receta y preparacion.Uno a la vez
    $("h3").on('dblclick', (event) => {
        $(event.currentTarget).addClass('text-danger');
    })
    // Esconde y muestra el texto al hacer doble click en el titulo de los cards en la section de recetas
    $(".card-body h5").on("dblclick",() => {
        $("p").toggle();
    })
    //smooth-scroll
    $("a").on('click',(event) => {
        if (event.currentTarget.hash !== "") {
            event.preventDefault();
            let hash = event.currentTarget.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                window.location.hash = hash;
                });
            }
        });
})
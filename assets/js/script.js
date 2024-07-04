$(() => {
    $("#enviarCorreo").on('click', (e) =>{
        alert("El correo fue enviado correctamente");
    })
    $("h3").on('dblclick', (event) => {
        $(event.currentTarget).addClass('text-danger');
    })
    $(".card-body h5").on("dblclick",() => {
        $("p").toggle();

    })

})
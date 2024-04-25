document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe normalmente

        // Captura el valor del tipo de arte seleccionado
        var tipoArteSeleccionado = formulario.querySelector('input[name="tipo-arte"]:checked');
        var tipoArteValor = tipoArteSeleccionado ? tipoArteSeleccionado.value : null;

        // Captura los estilos de arte seleccionados
        var estilosArteSeleccionados = [];
        var checkboxesEstilosArte = formulario.querySelectorAll('input[name="estilos-arte"]:checked');
        checkboxesEstilosArte.forEach(function(checkbox) {
            estilosArteSeleccionados.push(checkbox.value);
        });

        // Muestra los valores capturados en la consola
        console.log("Tipo de arte seleccionado:", tipoArteValor);
        console.log("Estilos de arte seleccionados:", estilosArteSeleccionados);

        // Aquí podrías enviar los datos a un servidor, guardarlos en localStorage, etc.
    });
});



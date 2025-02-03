$(function(){

    interface Objeto {
        marca:string;
        modelo:string;
    }
    
    function funAjax(e:any) {
        e.preventDefault(); // Para no abandonar la página al enviar formulario.

        const marca = $("#marca").val() as string;
        const modelo = $("#modelo").val() as string;
        //--------------------- Ajax Con Promesas --------------------------------------------------------
        
        fetch('Ensayo_examen1_2Eva_25.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ marca, modelo })
        })
        .then(response => {
            if (!response.ok) throw new Error('Error en la red.');
            return response.json();
        })
        .then((data: Objeto) => {
            const mensaje = `<h1>El coche es un ${data.marca} ${data.modelo}</h1>`;
            $("#datos").html(mensaje);
        })
        .catch(error => console.error('Error en Fetch:', error));

        //-----------------------------------------------------------------------------------
/*
        // ----------------------Ajax Con jQuery-------------------------------------------------
      
        $.post('Ensayo_examen1_2Eva_25.php', { marca, modelo }, (data: Objeto) => {
            const mensaje = `<h1>El coche es un ${data.marca} ${data.modelo}</h1>`;
            $("#datos").html(mensaje);
        }, 'json')
        .fail(error => console.error('Error en jQuery $.post:', error));

        //---------------------------------------------------------------------------------------

         // -------------Enviando el formulario usando FormData-------------------------
      
         const formData = new FormData($("form")[0] as HTMLFormElement); 
                 console.log("Datos enviados al servidor:", Array.from(formData.entries())); // Muestra los datos enviados.
                 $.ajax({
                     url: 'Ensayo_examen1_2Eva_25.php',
                     type: 'POST',
                     data: formData,
                     processData: false,
                     contentType: false,
                     dataType: 'json',
                     success: function(data) {
                         console.log("Respuesta del servidor:", data); // Muestra la respuesta del servidor.
                         if (data && data.marca && data.modelo) {
                             const mensaje = `<h1>El coche es un ${data.marca} ${data.modelo}</h1>`;
                             $("#datos").html(mensaje);
                         } else {
                             const mensaje = `<h1>Datos incompletos del servidor en FormData.</h1>`;
                             $("#datos").html(mensaje);
                             console.error('Datos incompletos del servidor en FormData:', data);
                         }
                     },
                     error: function(_, __, error) {
                         console.error('Error en la solicitud con FormData:', error);
                     }
                 });

        //----------------------------------------------------------------------------------

        // ----------------------Usando Async/Await-------------------------
      
        (async () => {
            try {
                const response = await fetch('Ensayo_examen1_2Eva_25.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ marca, modelo })
                });
                if (!response.ok) throw new Error('Error en la red.');
                const data: Objeto = await response.json();
                const mensaje = `<h1>El coche es un ${data.marca} ${data.modelo}</h1>`;
                $("#datos").html(mensaje);
            } catch (error) {
                console.error('Error en Async/Await:', error);
            }
        })();
    

        //----------------------------------------------------------------------------------
*/
     }
    $('form').on('submit',funAjax);
})
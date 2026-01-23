console.log("SALECAR cargado correctamente");

const formCotizar = document.getElementById('formCotizar');

if (formCotizar) {
    formCotizar.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        // 1. Capturar datos
        const marca = this.querySelector('[name="marca"]').value;
        const modelo = this.querySelector('[name="modelo"]').value;
        const version = this.querySelector('[name="version"]').value;
        const anio = this.querySelector('[name="anio"]').value;
        const km = this.querySelector('[name="kilometros"]').value;
        const nombre = this.querySelector('[name="nombre"]').value;
        const apellido = this.querySelector('[name="apellido"]').value;
        const email = this.querySelector('[name="email"]').value;
        const telefono = this.querySelector('[name="telefono"]').value;
        const descripcion = this.querySelector('[name="descripcion"]').value;

        // 2. CONFIGURACIÓN DE DESTINO (Aquí es donde van tus datos)
        const miTelefono = "5491123193091"; 
        const miEmail = "josephn651@gmail.com"; 

        // 3. Armar WhatsApp detallado
        const mensajeWA = `Hola SALECAR! Quiero vender mi auto 🚗\n\n` +
            `Marca: ${marca}\n` +
            `Modelo: ${modelo}\n` +
            `Versión: ${version}\n` +
            `Año: ${anio}\n` +
            `KM: ${km}\n\n` +
            `Cliente: ${nombre} ${apellido}\n` +
            `Email: ${email}\n` +
            `Tel: ${telefono}\n\n` +
            `Descripción: ${descripcion}`;

        // CORRECCIÓN DE URL WHATSAPP (Añadida la barra y el número)
        const urlWA = "https://wa.me" + miTelefono + "?text=" + encodeURIComponent(mensajeWA);

        // 4. Enviar por Mail (con la foto)
        const formData = new FormData(this);

        // CORRECCIÓN DE URL MAIL (Añadido /ajax/ y tu correo)
        fetch("https://formsubmit.co" + miEmail, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            window.open(urlWA, '_blank');
            window.location.href = "gracias.html";
        })
        .catch(error => {
            console.error("Error:", error);
            window.open(urlWA, '_blank');
            window.location.href = "gracias.html";
        });
    });
}

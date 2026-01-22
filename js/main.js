console.log("SALECAR cargado correctamente");

function enviarWhatsApp() {
  const marca = document.querySelector('[name="marca"]').value;
  const modelo = document.querySelector('[name="modelo"]').value;
  const version = document.querySelector('[name="version"]').value;
  const anio = document.querySelector('[name="anio"]').value;
  const km = document.querySelector('[name="kilometros"]').value;
  const nombre = document.querySelector('[name="nombre"]').value;
  const apellido = document.querySelector('[name="apellido"]').value;
  const email = document.querySelector('[name="email"]').value;
  const telefono = document.querySelector('[name="telefono"]').value;
  const descripcion = document.querySelector('[name="descripcion"]').value;

  const mensaje =
`Hola, quiero vender mi auto 🚗

Marca: ${marca}
Modelo: ${modelo}
Versión: ${version}
Año: ${anio}
Kilómetros: ${km}

Nombre: ${nombre} ${apellido}
Email: ${email}
Teléfono: ${telefono}

Descripción:
${descripcion}`;

  window.open(
    "https://wa.me/5491165510412?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}

/* =========================
   DATA
========================= */

const autos = [
    { modelo: "Citroen Berlingo 1.6 HDI", year: 2020, km: "175000", precio: "$22.300.000", img: "auto1.jpg" },
    { modelo: "Toyota Hilux SW4 2.8 SRX", year: 2018, km: "112000", precio: "U$S 44.000", img: "auto2.jpg" },
    { modelo: "Volkswagen Golf", year: 2019, km: "95000", precio: "$18.500.000", img: "auto3.jpg" },
    { modelo: "Ford Focus", year: 2021, km: "40000", precio: "$20.800.000", img: "auto4.jpg" },
    { modelo: "Chevrolet Cruze", year: 2020, km: "60000", precio: "$19.300.000", img: "auto5.jpg" },
    { modelo: "Peugeot 208", year: 2022, km: "30000", precio: "$16.900.000", img: "auto6.jpg" },
    { modelo: "Renault Megane", year: 2019, km: "85000", precio: "$14.500.000", img: "auto7.jpg" },
    { modelo: "Fiat Cronos", year: 2023, km: "15000", precio: "$17.800.000", img: "auto8.jpg" },

    { modelo: "Toyota Corolla", year: 2021, km: "45000", precio: "$21.900.000", img: "auto9.jpg" },
    { modelo: "Nissan Frontier", year: 2020, km: "70000", precio: "$26.500.000", img: "auto10.jpg" },
    { modelo: "Jeep Compass", year: 2019, km: "65000", precio: "$23.000.000", img: "auto11.jpg" },
    { modelo: "Honda Civic", year: 2018, km: "90000", precio: "$19.200.000", img: "auto12.jpg" },
    { modelo: "BMW X1", year: 2017, km: "110000", precio: "U$S 32.000", img: "auto13.jpg" },
    { modelo: "Audi A3", year: 2019, km: "55000", precio: "U$S 29.000", img: "auto14.jpg" },
    { modelo: "Mercedes GLA", year: 2020, km: "48000", precio: "U$S 38.000", img: "auto15.jpg" },
    { modelo: "VW Amarok", year: 2022, km: "25000", precio: "U$S 42.000", img: "auto16.jpg" },

    { modelo: "Toyota Etios", year: 2020, km: "80.000", precio: "$13.200.000", img: "auto17.jpg" },
    { modelo: "Ford Ranger", year: 2021, km: "50.000", precio: "U$S 41.000", img: "auto18.jpg" }, 
    { modelo: "Chevrolet Onix", year: 2022, km: "20.000", precio: "$15.900.000", img: "auto19.jpg" }, 
    { modelo: "Peugeot 2008", year: 2021, km: "45.000", precio: "$18.700.000", img: "auto20.jpg" }
];

/* =========================
   STATE
========================= */

const autosPorPagina = 6;
let paginaActual = 1;
let autosFiltrados = [...autos];

/* =========================
   RENDER AUTOS
========================= */

function renderAutos() {
    const container = document.getElementById("autosContainer");
    container.innerHTML = "";

    const inicio = (paginaActual - 1) * autosPorPagina;
    const visibles = autosFiltrados.slice(inicio, inicio + autosPorPagina);

    visibles.forEach((auto, index) => {
        container.innerHTML += `
        <div class="col-md-4">
            <div class="car-card">
                <img src="assets/img/${auto.img}" class="main-img" alt="${auto.modelo}">
                <div class="car-body">
                    <div class="car-title">${auto.modelo}</div>
                    <div class="car-meta">
                        <span>${auto.year}</span>
                        <span>${auto.km} km</span>
                    </div>
                    <div class="price">${auto.precio}</div>

                    <button class="btn btn-warning w-100 mt-2"
                        onclick="abrirModal(autosFiltrados[${inicio + index}])">
                        Más Info
                    </button>
                </div>
            </div>
        </div>`;
    });
}

/* =========================
   PAGINACIÓN
========================= */

function renderPagination() {
    const total = Math.ceil(autosFiltrados.length / autosPorPagina);
    const pag = document.getElementById("pagination");
    pag.innerHTML = "";

    for (let i = 1; i <= total; i++) {
        pag.innerHTML += `
        <li class="page-item ${i === paginaActual ? 'active' : ''}">
            <button class="page-link" onclick="cambiarPagina(${i})">${i}</button>
        </li>`;
    }
}

function cambiarPagina(p) {
    paginaActual = p;
    renderAutos();
    renderPagination();
}

/* =========================
   FILTROS
========================= */

function aplicarFiltros() {
    const marca = document.getElementById("filtroMarca").value.toLowerCase();
    const anio = document.getElementById("filtroAnio").value;
    const kmMax = document.getElementById("filtroKm").value;
    const texto = document.getElementById("filtroTexto").value.toLowerCase();

    autosFiltrados = autos.filter(auto => {
        return (
            (!marca || auto.modelo.toLowerCase().includes(marca)) &&
            (!anio || auto.year >= anio) &&
            (!kmMax || auto.km <= kmMax) &&
            (!texto || auto.modelo.toLowerCase().includes(texto))
        );
    });

    paginaActual = 1;
    renderAutos();
    renderPagination();
}

/* =========================
   MODAL
========================= */

function abrirModal(auto) {
    document.getElementById("autoModalTitle").innerText = auto.modelo;
    document.getElementById("modalMainImg").src = `assets/img/${auto.img}`;
    document.getElementById("modalPrecio").innerText = auto.precio;
    document.getElementById("modalAnio").innerText = auto.year;
    document.getElementById("modalKm").innerText = auto.km;

    new bootstrap.Modal(document.getElementById("autoModal")).show();
}

/* =========================
   INIT
========================= */

renderAutos();
renderPagination();
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

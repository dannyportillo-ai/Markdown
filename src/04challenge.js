// Datos de la empresa

let empresa = "  Tech Store  ";
let propietario = "Danny";
let ciudad = "Bogota";
let activa = true;

// Estos son los productos que se venden

let productos = ["Teclado", "Mouse", "Audifonos", "Monitor"];
let codigos = ["TEC-001", "MOU-002", "AUD-003", "MON-004"];
let precios = [80000, 45000, 120000, 650000];
let cantidades = [10, 15, 5, 4];


// Estas son las ventas

let unidadesVendidas = [3, 5, 2, 1];

// Organizacion de la informacion

let nombreEmpresa = empresa.trim().toUpperCase();
let listaProductos = productos.join(" | ");
let categorias = "Perifericos - Accesorios - Monitores";
let listaCategorias = categorias.split(" - ");
let categoriasOrganizadas = listaCategorias.join(", ");
let codigoAnalizado = codigos[0].trim();
let codigoValido = codigoAnalizado.startsWith("TEC");
let codigoTermina = codigoAnalizado.endsWith("001");

// Esta es la cantidad de productos que hay

let valorTeclados = precios[0] * cantidades[0];
let valorMouse = precios[1] * cantidades[1];
let valorAudifonos = precios[2] * cantidades[2];
let valorMonitores = precios[3] * cantidades[3];

let valorInventario =
    valorTeclados +
    valorMouse +
    valorAudifonos +
    valorMonitores;

// Calular las ventas de cada producto 

let ventaTeclados = precios[0] * unidadesVendidas[0];
let ventaMouse = precios[1] * unidadesVendidas[1];
let ventaAudifonos = precios[2] * unidadesVendidas[2];
let ventaMonitores = precios[3] * unidadesVendidas[3];

let totalVentas =
    ventaTeclados +
    ventaMouse +
    ventaAudifonos +
    ventaMonitores;

// Cuantos productos quedan

let cantidadTeclados = cantidades[0] - unidadesVendidas[0];
let cantidadMouse = cantidades[1] - unidadesVendidas[1];
let cantidadAudifonos = cantidades[2] - unidadesVendidas[2];
let cantidadMonitores = cantidades[3] - unidadesVendidas[3];

let cantidadTotal =
    cantidadTeclados +
    cantidadMouse +
    cantidadAudifonos +
    cantidadMonitores;


// Analisis de la información

let productosRegistrados = productos.length;

let unidadesVendidasTotal =
    unidadesVendidas[0] +
    unidadesVendidas[1] +
    unidadesVendidas[2] +
    unidadesVendidas[3];

let productosDisponibles = cantidadTotal > 0;
let empresaActiva = activa === true;


// Reporte final

let reporte = `


BUSINESS MANAGER
TECH STORE
            

INFORMACION DE LA EMPRESA

Empresa: ${nombreEmpresa}
Propietario: ${propietario}
Ciudad: ${ciudad}
Empresa activa: ${empresaActiva}


CATALOGO DE PRODUCTOS

${listaProductos}

Productos registrados: ${productosRegistrados}

Categorias: ${categoriasOrganizadas}


CONTROL DE INVENTARIO

Teclados: ${cantidadTeclados} unidades
Mouse: ${cantidadMouse} unidades
Audifonos: ${cantidadAudifonos} unidades
Monitores: ${cantidadMonitores} unidades

Valor del inventario inicial: $${valorInventario}

Productos actuales: ${cantidadTotal} unidades


REPORTE DE VENTAS

Teclados: $${ventaTeclados}
Mouse: $${ventaMouse}
Audifonos: $${ventaAudifonos}
Monitores: $${ventaMonitores}

Unidades vendidas: ${unidadesVendidasTotal}

INGRESOS TOTALES: $${totalVentas}


ANALISIS DE CODIGOS

Codigo analizado: ${codigoAnalizado}
Empieza con TEC: ${codigoValido}
Termina en 001: ${codigoTermina}


ESTADO DEL NEGOCIO

Productos disponibles: ${productosDisponibles}
Empresa activa: ${empresaActiva}


FIN DEL REPORTE

`;

console.log(reporte);

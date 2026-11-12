
// Variables de entrada

let entrada_nombre = "  cARLOS aLBERTO  ";
let entrada_correo = "carlos.alberto@DOMINIO.COM";
let entrada_edad = "24";
let entrada_codigo_promo = "DESC-2026-X";

//Limpieza de los datos

 let limpieza = entrada_nombre.trim().toLowerCase().split(" ");

limpieza[0] = limpieza[0].slice(0, 1).toUpperCase() + limpieza[0].slice(1);
limpieza[1] = limpieza[1].slice(0, 1).toUpperCase() + limpieza[1].slice(1); 
limpieza = limpieza.join(" ");

//Validacion de correo

let validar_correo = entrada_correo.toLowerCase();
let correo_validado = validar_correo.includes("@") && validar_correo.endsWith(".com");

//Validacion de codigo

let validar_codigo = entrada_codigo_promo.startsWith("DESC");
let validar_numero =  entrada_codigo_promo.slice(5, 9);

//Convertir string a numeros enteros

let edad = Number(entrada_edad);
let año = Number(entrada_codigo_promo.slice(5, 9));

//Mayor o igual a 18 años

let mayor_edad = edad >= 18;

//Año aproximado de nacimiento

let año_nacimiento = 2026 - edad;

//Asignacion de puntos promocionales

let puntos = (mayor_edad && año == 2026) ? 10.5 : 0.0;

console.log(`
    ==================================================
        FICHA DE USUARIO PROCESADA
    ==================================================
    Nombre Formateado   : ${limpieza}
    Correo Validado     : ${validar_correo}
    ¿Correo valido?     : ${correo_validado}
    Edad Registrada     : ${edad} (Tipo: int)
    ¿Mayor de edad?     : ${mayor_edad}
    Año Estimado Nto    : ${año_nacimiento}
    Codigo Cupon Valido : ${validar_codigo}
    Puntos Asignados    : ${puntos}
    =================================================
    `)
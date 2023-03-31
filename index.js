const nombre = "enzo";
const apellido = "marin";
const objeto = {
    nombre: "enzo",
    apellido: "marin"
};
//guardar objeto en sessionStorage
sessionStorage.setItem("datos", JSON.stringify(objeto));
//guardar objeto en localStorage
localStorage.setItem("datos-local", JSON.stringify(objeto));
//Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = `datos-pers=${JSON.stringify(objeto)};expires=`+ new Date(Date.now() + 2 * 60 * 1000).toUTCString();

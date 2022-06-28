let btnEnviar = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");

rotulo.innerHTML = "Indique puesto: ";

btnEnviar.addEventListener("click", () => {
  let puesto1: number = "1";
  let puesto2: number = "2";
  let puesto3: number = "3";
  let ingreso: number = Number(dato.value);

  if (ingreso == puesto1) {
    console.log("Ganador medalla de oro");
  } else {
    if (ingreso == puesto2) {
      console.log("Ganador medalla de Plata");
    } else {
      if (ingreso == puesto3) {
        console.log("Ganador medalla de Bronce");
      } else {
        console.log("Se entrega certificado de participacion");
      }
    }
  }
});

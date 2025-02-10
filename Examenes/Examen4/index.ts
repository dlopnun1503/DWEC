interface Art {
    id: number;
    cod: string;
    color: string;
    piel: string;
  }
  
  class Articulos {
    constructor() {
      this.iniciar();
    }
  
    /**
     *  Método para inicializar el evento del formulario y cargar artículos al inicio
     */ 
    private iniciar() {
      const form = document.getElementById("f1") as HTMLFormElement;
      form.addEventListener("submit", (e) => this.pushArticulo(e));
      this.getArticulos(); // Cargamos artículos al inicio
    }
  
    /**
     * Método para agregar un artículo mediante una llamada AJAX 
     */ 
    private async pushArticulo(event: Event) {
      event.preventDefault();
  
      let cod = (document.getElementById("cod") as HTMLInputElement).value;
      let color = (document.getElementById("color") as HTMLInputElement).value;
      let piel = (document.getElementById("piel") as HTMLInputElement).value;
  
      // Realizamos la solicitud fetch para agregar el artículo
      const response = await fetch(`/pushArticulos?cod=${cod}&color=${color}&piel=${piel}`);
      const data = await response.json();
   
      // Recargamos los artículos
      this.getArticulos();
      
      // Limpiamos el formulario
      (document.getElementById("f1") as HTMLFormElement).reset();
    }
  
    /**
     * Método para cargar y mostrar los artículos
     */
    private async getArticulos() {
      const response = await fetch("/getArticulos");
      const data = await response.json();
  
      let tbody = document.getElementById("carteras") as HTMLTableSectionElement;
      tbody.innerHTML = ""; // Limpiamos la tabla antes de volver a llenarla
  
      // Creamos las filas para la tabla dinamicamente
      data.forEach((art: Art) => {
        const row = document.createElement("tr");
  
        let idCell = document.createElement("td");
        idCell.textContent = art.id.toString();
        row.appendChild(idCell);
  
        let codCell = document.createElement("td");
        codCell.textContent = art.cod;
        row.appendChild(codCell);
  
        let colorCell = document.createElement("td");
        colorCell.textContent = art.color;
        row.appendChild(colorCell);
  
        let pielCell = document.createElement("td");
        pielCell.textContent = art.piel;
        row.appendChild(pielCell);
  
        tbody.appendChild(row);
      });
    }
  }
  
  /**
   * Instanciamos la clase
   */ 
  document.addEventListener("DOMContentLoaded", () => {
    new Articulos();
  });
  
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Articulos {
    constructor() {
        this.iniciar();
    }
    /**
     *  Método para inicializar el evento del formulario y cargar artículos al inicio
     */
    iniciar() {
        const form = document.getElementById("f1");
        form.addEventListener("submit", (e) => this.pushArticulo(e));
        this.getArticulos(); // Cargamos artículos al inicio
    }
    /**
     * Método para agregar un artículo mediante una llamada AJAX
     */
    pushArticulo(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            let cod = document.getElementById("cod").value;
            let color = document.getElementById("color").value;
            let piel = document.getElementById("piel").value;
            // Realizamos la solicitud fetch para agregar el artículo
            const response = yield fetch(`/pushArticulos?cod=${cod}&color=${color}&piel=${piel}`);
            const data = yield response.json();
            // Recargamos los artículos
            this.getArticulos();
            // Limpiamos el formulario
            document.getElementById("f1").reset();
        });
    }
    /**
     * Método para cargar y mostrar los artículos
     */
    getArticulos() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("/getArticulos");
            const data = yield response.json();
            let tbody = document.getElementById("carteras");
            tbody.innerHTML = ""; // Limpiamos la tabla antes de volver a llenarla
            // Creamos las filas para la tabla dinamicamente
            data.forEach((art) => {
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
        });
    }
}
/**
 * Instanciamos la clase
 */
document.addEventListener("DOMContentLoaded", () => {
    new Articulos();
});

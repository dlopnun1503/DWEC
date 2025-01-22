"use strict";
class GrupoBot {
    constructor() {
        this.contador = 0;
        $("#botonAnadir").on("click", () => this.add());
        $("#botonQuitar").on("click", () => this.rest());
    }
    add() {
        this.contador++;
        const newButton = $(`<button class='botonDinamico'> ${this.contador}</button>`);
        newButton.on("click", () => {
            alert(`Hola desde ${newButton.text()}`);
        });
        $("#botones").append(newButton);
    }
    rest() {
        if (this.contador > 0) {
            $(`#botones button:last-child`).remove();
            this.contador--;
        }
    }
}
window.onload = () => {
    new GrupoBot();
};

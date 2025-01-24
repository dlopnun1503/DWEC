"use strict";
class GrupoBot {
    constructor() {
        this.contador = 0;
        this.initializeEventListeners();
    }
    initializeEventListeners() {
        $("#botonAnadir").on("click", () => this.add());
        $("#botonQuitar").on("click", () => this.rest());
    }
    add() {
        this.contador++;
        const newButton = $(`<button class='botonDinamico'>${this.contador}</button>`);
        newButton.on("click", () => this.handleDynamicButtonClick(newButton));
        $("#botones").append(newButton);
    }
    handleDynamicButtonClick(button) {
        alert(`Hola desde ${button.text()}`);
    }
    rest() {
        if (this.contador > 0) {
            $("#botones button:last-child").remove();
            this.contador--;
        }
    }
}
$(document).ready(() => {
    new GrupoBot();
});

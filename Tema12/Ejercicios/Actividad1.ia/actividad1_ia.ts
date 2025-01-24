interface Botones {
    add(): void;
    rest(): void;
}

class GrupoBot implements Botones {
    private contador: number = 0;

    constructor() {
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        $("#botonAnadir").on("click", () => this.add());
        $("#botonQuitar").on("click", () => this.rest());
    }

    public add(): void {
        this.contador++;
        const newButton = $(`<button class='botonDinamico'>${this.contador}</button>`);
        newButton.on("click", () => this.handleDynamicButtonClick(newButton));
        $("#botones").append(newButton);
    }

    private handleDynamicButtonClick(button: JQuery<HTMLElement>): void {
        alert(`Hola desde ${button.text()}`);
    }

    public rest(): void {
        if (this.contador > 0) {
            $("#botones button:last-child").remove();
            this.contador--;
        }
    }
}

$(document).ready(() => {
    new GrupoBot();
});
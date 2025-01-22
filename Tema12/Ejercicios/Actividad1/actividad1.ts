interface Botones {
    add(): void;
    rest(): void;
  }
  
  class GrupoBot implements Botones {
    private contador: number = 0;
  
    constructor() {
      $("#botonAnadir").on("click", () => this.add());
      $("#botonQuitar").on("click", () => this.rest());
    }
  
    add(): void {
      this.contador++;
      const newButton = $(`<button class='botonDinamico'> ${this.contador}</button>`);
      newButton.on("click", () => {
        alert(`Hola desde ${newButton.text()}`);
      });
      $("#botones").append(newButton);
    }
  
    rest(): void {
      if (this.contador > 0) {
        $(`#botones button:last-child`).remove();
        this.contador--;
      }
    }
  }
  
  window.onload = () => {
    new GrupoBot();
  }
  
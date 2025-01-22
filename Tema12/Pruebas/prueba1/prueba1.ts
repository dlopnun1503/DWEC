interface Figura {
    a: number;
    b: number;
    c?:number; // Opcional
    area (): number;
}
class Cuadrado implements Figura {
    readonly a: number; // De solo lectura
    b: number;
    constructor (a: number,b:number){
        this.a=a;
        this.b=b;
    }
    area (): number{return this.a*this.b};
}



export default class Fecha{
    constructor(dia,mes,año){
  
        this.fecha=new Date(año,mes -1, dia);
        this.mesAño=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"]
        this.diaSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
        this.difFecha= new Date (Date.now() - this.fecha)
    }
    getAños(){
        let canAños = 1000 * 60 * 60 * 24 * 365;
        let totalAños = Math.trunc(this.difFecha/canAños);
        return (`${totalAños}`);
    }
    getMeses(){
        let canMeses = (1000 * 60 * 60 * 24 * 365)/12;
        let totalMeses = Math.trunc(this.difFecha/canMeses);
        return (`${totalMeses}`);
    }
    getSemanas(){
        let canSemanas = (1000 * 60 * 60 * 24 * 365)/52;
        let totalSemanas = Math.trunc(this.difFecha/canSemanas);
        return (`${totalSemanas}`);
    }
    getDias(){
        let canDias = 1000 * 60 * 60 * 24;
        let totalDias = Math.trunc(this.difFecha/canDias);
        return (`${totalDias}`);
    }
    getFecha(){
        return(`${this.fecha.getDate()}/${this.mesAño[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`);
    }
    getDiaFecha(){
        return(`${this.diaSemana[this.fecha.getDay()]}`);

    }
    
}
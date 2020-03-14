const mesAño =["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"]
const diaSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

export default class Fecha{
    constructor(dia,mes,año){
  
        this._fecha=new Date(año,mes -1, dia);
        this._difFecha= new Date (Date.now() - this._fecha)
    }
    getAños(){
        let canAños = 1000 * 60 * 60 * 24 * 365;
        let totalAños = Math.trunc(this._difFecha/canAños);
        return (`${totalAños}`);
    }
    getMeses(){
        let canMeses = (1000 * 60 * 60 * 24 * 365)/12;
        let totalMeses = Math.trunc(this._difFecha/canMeses);
        return (`${totalMeses}`);
    }
    getSemanas(){
        let canSemanas = (1000 * 60 * 60 * 24 * 365)/52;
        let totalSemanas = Math.trunc(this._difFecha/canSemanas);
        return (`${totalSemanas}`);
    }
    getDias(){
        let canDias = 1000 * 60 * 60 * 24;
        let totalDias = Math.trunc(this._difFecha/canDias);
        return (`${totalDias}`);
    }
    getFecha(){
        let mes = mesAño[this._fecha.getMonth()]
        return(`${this._fecha.getDate()}/${mes}/${this._fecha.getFullYear()}`);
    }
    getDiaFecha(){
        let dia = diaSemana[this._fecha.getDay()]
        return(`${dia}`);

    }
    
}
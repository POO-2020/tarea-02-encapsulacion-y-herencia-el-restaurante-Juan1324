export default class Direccion{
    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio){
        this.calle=calle;
        this.numeroExterior=numeroExterior;
        this.numeroInterior=numeroInterior;
        this.colonia=colonia;
        this.codigoPostal=codigoPostal;
        this.ciudad=ciudad;
        this.municipio=municipio;
    }
    getFormatoCorto(){
        return(`${this.calle} ${this.numeroExterior}`);

    }
    getFormatoExtendido(){
        return(`${this.calle} ${this.numeroExterior},  Núemro interior ${this.numeroInterior}, Colonia ${this.colonia}, Código postal ${this.codigoPostal}, Ciudad ${this.ciudad}, Municipio ${this.municipio}`);

        
    }
}
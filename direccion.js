export default class Direccion{
    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio){
        this._calle=calle;
        this._numeroExterior=numeroExterior;
        this._numeroInterior=numeroInterior;
        this._colonia=colonia;
        this._codigoPostal=codigoPostal;
        this._ciudad=ciudad;
        this._municipio=municipio;
    }
    getFormatoCorto(){
        return(`${this._calle} ${this._numeroExterior}`);

    }
    getFormatoExtendido(){
        return(`${this._calle} ${this._numeroExterior},  Núemro interior ${this._numeroInterior}, Colonia ${this._colonia}, Código postal ${this._codigoPostal}, Ciudad ${this._ciudad}, Municipio ${this._municipio}`);

    }
}
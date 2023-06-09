import { createHash } from 'crypto';
import { IDatosBasicosModel } from './interface/datos-basicos.interface';

export class PersonaDomainEntity  implements IDatosBasicosModel{
 
  nombre: string;
  mail: string;
  clave: string;

  constructor(_dato?: IDatosBasicosModel) {

    if (_dato?.nombre)
        this.nombre= _dato.nombre;

    if (_dato?.mail)
        this.mail = _dato.mail;

    if (_dato?.clave)
        this.clave = _dato.clave;
  }

  public setPassword(clave: string): void {
    const hash = createHash('sha256');
    hash.update(clave);
    this.clave = hash.digest('hex');
  }
}

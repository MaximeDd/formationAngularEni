import {Operation} from './operation';

export class Compte {
  private static num = 10;
  public id: number = ++Compte.num;
  public operations: Operation[];
  public numero: string;
  public intitule?: string;

  constructor(_numero: string, _intitule?: string) {
    this.numero = _numero;
    this.intitule = _intitule ? _intitule : '';
  }
}


export class Cidade {
  id: number;
  cidade: string;
  uf: string;

  constructor(cidade?: Cidade | number) {
    if (cidade !== undefined && cidade !== null) {
      if (typeof cidade === 'number') {
        this.id = cidade;
      } else {
        this.id = cidade.id;
        this.cidade = cidade.cidade;
        this.uf =  cidade.uf;
      }
    }
  }

}

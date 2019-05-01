import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams  } from '@angular/http';
import * as moment from 'moment';
import { CidadesPesquisaComponent } from './cidade-pesquisa/cidades-pesquisa.component';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidadesUrl = 'http://localhost:8080/api/cadastro';
  constructor(private http: Http) { }

  getCidades() {
          return this.http.get(`${this.cidadesUrl}`,
          )
        .toPromise()
        .then(response => {
          const responseJson = response.json();
         return responseJson;

        });

  }
}

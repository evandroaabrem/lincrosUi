import { Cidade } from 'src/app/model/cidade.model';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams  } from '@angular/http';

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

salvar(cidade: Cidade) {
        this.http.post(`${this.cidadesUrl}`, cidade
        ).toPromise().then(response => {
            const responseJson = response.json();
          return responseJson;
      });
}


delete(id: any) {
  this.http.delete(`${this.cidadesUrl}/` + id,
  ).toPromise().then(response => {
});

}

}

import { Component, OnInit } from '@angular/core';
import { CidadeService, LancamentoFiltro } from '../cidade.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent   implements OnInit {
  cidades: Array<any> = new Array();

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.pesquisar();
  }
  pesquisar() {
    this.cidadeService.getCidades()
    .then(resultado => {

      this.cidades = resultado;
    });
  }

}

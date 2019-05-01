import { Component, OnInit } from '@angular/core';
import { CidadeService, LancamentoFiltro } from '../cidade.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent   implements OnInit {
  totalRegistros = 0;

  filtro = new LancamentoFiltro();
  lancamentos = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.pesquisar();
  }
  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
   /* this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      });*/
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}

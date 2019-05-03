import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/model/cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidades-cadastro',
  templateUrl: './cidades-cadastro.component.html',
  styleUrls: ['./cidades-cadastro.component.css']
})
export class CidadesCadastroComponent implements OnInit {

  cidade = new Cidade();
  cidades: Array<any> = new Array();

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.pesquisar();
  }

  salvar() {
    this.cidadeService.salvar(this.cidade);
    this.cidade = new Cidade();
    this.pesquisar();
  }

  novo() {
    this.cidade = new Cidade();
  }

  exluirItemListaGrid(rowValue: any) {
    if (confirm('Deseja excluir este item?')) {
      this.cidadeService.delete(rowValue.id);
      this.pesquisar();
     }

  }

  pesquisar() {
    this.cidadeService.getCidades()
    .then(resultado => {

      this.cidades = resultado;
    });
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidades-cadastro',
  templateUrl: './cidades-cadastro.component.html',
  styleUrls: ['./cidades-cadastro.component.css']
})
export class CidadesCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];


  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
  ];

  pessoas = [
    { label: 'João da Silva', value: 4 },
    { label: 'Sebastião Souza', value: 9 },
    { label: 'Maria Abadia', value: 3 },
  ];


  constructor() { }

  ngOnInit() {
  }

}

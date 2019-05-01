import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesPesquisaComponent } from './cidade-pesquisa/cidades-pesquisa.component';
import { CidadesCadastroComponent } from './cidade-cadastro/cidades-cadastro.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CidadesCadastroComponent,
    CidadesPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,

    CurrencyMaskModule,

    SharedModule
  ],
  exports: [
    CidadesCadastroComponent,
    CidadesPesquisaComponent
  ]
})
export class CidadeModule { }

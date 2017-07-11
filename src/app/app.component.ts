import { Component, OnInit } from '@angular/core';

import { Estoria } from "./estoria";
import { EstoriaService } from "./estoria.service";

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
    <ul class="estorias">
      <li *ngFor="let estoria of estorias" (click)="onSelect(estoria)" [class.selected]="estoria === selectedEstoria">
        <span class="badge">{{estoria.nome}}</span>
      </li>
    </ul>
    <div *ngIf="selectedEstoria">
      <h2>Detalhes da {{selectedEstoria.nome}}</h2>
      <div><label>id: </label>{{selectedEstoria.id}}</div>
      <div><label>nome: </label>{{selectedEstoria.nome}}</div>
      <div><label>pontos: </label>{{selectedEstoria.pontos}}</div>
      <div><label>descrição: </label>{{selectedEstoria.descricao}}</div>
    </div>
    `,
  providers: [EstoriaService]
})
export class AppComponent implements OnInit {
  title = 'Taskboard';
  subtitle = 'Estórias de usuário';
  estorias: Estoria[];
  selectedEstoria: Estoria;

  constructor(private estoriaService: EstoriaService) { }

  getEstorias(): void {
    this.estoriaService.getEstorias().then(estorias => this.estorias = estorias);
  }

  ngOnInit(): void {
    this.getEstorias();
  }

  onSelect(estoria: Estoria): void {
    this.selectedEstoria = estoria;
  }
};


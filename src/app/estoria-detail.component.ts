import { Component, Input } from "@angular/core";

import { Estoria } from "./estoria";

@Component({
    selector: 'estoria-detail',
    template: `
    <div *ngIf="Estoria">
    <h2>{{estoria.nome}} detalhes!</h2>
    <div><label>id: </label>{{estoria.id}}</div>
    <div>
    <label>nome: </label>
    <input [(ngModel)]="estoria.nome" placeholder="nome"/>
    </div>
    </div>
    `
})
export class EstoriaDetailComponent {
    @Input() estoria: Estoria;
}
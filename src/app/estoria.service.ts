import { Injectable } from "@angular/core";

import { Estoria } from "./estoria";
import { ESTORIAS } from "./mock-estorias";

@Injectable()
export class EstoriaService {
    getEstorias(): Promise<Estoria[]> {
        return Promise.resolve(ESTORIAS);
    }
}
import { BaseEntity } from "./base/base-entity";

export class Usuario extends BaseEntity {
   
    nome: string;
    email: string;
    login: string;
    senha: string;    
    resumo: string
    

    constructor() {
        super();
    }        
}
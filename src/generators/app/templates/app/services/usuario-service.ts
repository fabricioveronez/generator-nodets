import { BaseService } from "./base/base-service";
import { Usuario } from "../model/usuario";

export class UsuarioService extends BaseService<Usuario> {

    constructor() {
        super('Usuario');
    }

    
}
import { Request, Response } from 'express'
import { UsuarioService } from "../services/usuario-service";
import { Usuario } from "../model/usuario";

export class ValueController {
    /**
     * obterUsuario
     */
    public async value(req: Request, res: Response) { 
        let service: UsuarioService = new UsuarioService();        
        let lista: Array<Usuario> = await service.FindAll();        
        res.render('usuario/lista', { usuarios : lista });       
    }    
    
}
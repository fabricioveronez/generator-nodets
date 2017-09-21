import { Router } from 'express'
import { Usuario } from '../model/usuario'
import { Request, Response } from 'express';
import { UsuarioService } from "../services/usuario-service";
import { ObjectId } from "bson";
import { UsuarioController } from "../controllers/usuario";

export const router = Router();

let controller: UsuarioController = new UsuarioController();

router.get('/usuario/cadastro', (req, res) => {
    res.render('usuario/cadastro', { usuario : new Usuario() });
});

router.get('/usuario/lista', controller.listarUsuario);

router.post('/usuario/cadastro', async (req: Request, res: Response) => {
    let oUsuario: Usuario = req.body;    

    console.log(oUsuario);

    let service: UsuarioService = new UsuarioService();

    if (req.body._id === "") {
        await service.Save(oUsuario);
    } else {
        oUsuario._id = new ObjectId(req.body._id);        
        await service.Update(oUsuario);
    }    

    res.redirect('/usuario/lista');
});

router.get('/usuario/cadastro/:idUsuario', async (req: Request, res: Response) => {        
    let service: UsuarioService = new UsuarioService();

    let parametro: string = req.param('idUsuario')

    let oUsuario: Usuario = await service.FindID(parametro);   
    
    res.render('usuario/cadastro', { usuario: oUsuario });
});

import { request, response, Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsControllers";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController;
const usersController = new UsersController;
const messagesController = new MessagesController;

/**
 * Tipos de Parâmetros:
 * 
 * Routes Params => Parâmetros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params => Filtros ou Buscas
 * http://localhost:3333/settings/1?nome:algumacoisa
 * 
 * Body Params => Passando Objetos (ex: json)
 * {}
 */

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
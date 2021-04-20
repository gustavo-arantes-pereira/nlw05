import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepositories";

const routes = Router();

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

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    return response.json(settings);
});

export { routes };
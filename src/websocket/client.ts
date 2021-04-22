import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UserService } from "../services/UsersService";

io.on("connect", (socket) => {
    const connectionService = new ConnectionsService();
    const usersService = new UserService();

    socket.on("client_first_access", async (params) => {
        const socket_id = socket.id;
        const { text, email } = params;

        const userExists = await usersService.findByEmail(email);

        await connectionService.create({
            socket_id,
            user_id
        })
        // Salvar a conexão com o socket_id, user_id,
    });
});

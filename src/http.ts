/*
    GET = Buscas
    POST = Criação
    PUT = Alteração
    DELETE = Deletar
    PATCH = Alterar uma informação específica
*/

import express, { request, response } from "express";
import "./database";
import { routes } from "./routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
})

const http = createServer(app); // Criando o protocolo HTTP
const io = new Server(http); // Criando o protocolo WS

io.on("connection", (socket: Socket) => {
    // console.log("Se conectou", socket.id);
});

app.use(express.json());

app.use(routes);

export {http, io};
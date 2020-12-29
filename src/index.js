/**
 * Implementación del servidor WebSocket
 * Infraestructura Computacional
 * Universidad de los Andes
 *
 * Version 1.0
 * @author Geovanny González-Rodríguez
 * @license MIT
 * @since Diciembre 2020
 */

// Cargar las variables de entorno
import "dotenv/config";

// Cargar la libreria de WebSockets
import * as WebSocket from "ws";

// Instancia del servidor
const wsServer = new WebSocket.Server({
  port: process.env.PORT,
});

// A continuación vamos a definir algunas funciones para manejar los eventos
// del servidor. Luego vamos a configurarlas

/**
 * Procesa la petición del nuevo cliente entrante
 * @param {*} client WebSocket Client - Cliente de una nueva conexión
 * @param {*} request Petición realizada al servidor.
 */
const clientReceived = (client, request) => {
  // Datos del cliente
  console.log(`Dirección IP del Cliente: ${request.socket.remoteAddress}`);

  // Respuesta al evento de un nuevo mensaje
  client.on("message", (messageData) => {
    console.log(`Mensaje recibido por parte del cliente: ${messageData}`);
    const messageToSend = messageReceived(messageData);
    client.send(messageToSend);
  });
};

/**
 * Procesa el mensaje recibido por un cliente de
 * acuerdo al protocolo establecido
 * @param {*} data Mensaje enviado por el cliente
 */
const messageReceived = (data) => {
  return "Hola Mundo por parte del Servidor";
};

// Configuración de las funciones de eventos.
wsServer.addListener("connection", clientReceived);

// Información
console.log(`Puerto: ${process.env.PORT}`);

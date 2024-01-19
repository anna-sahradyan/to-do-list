const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const fastifyCors = require("@fastify/cors");
const configureDatabase = require("./config/databaseDB");
require("dotenv").config();
const databaseConfig = {
    uri: process.env.MONGODB_URI,
    options: {},
};
const startServer = async () => {
    try {
        fastify.register(fastifyCors, {
            origin: "*", // You can customize the allowed origin(s) here
            methods: ["GET", "POST", "PUT", "DELETE"],
        });
        await fastify.listen({
            port: process.env.PORT || 8000,
        });
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch (err) {
        console.log(err);
    }

};

const start = async () => {
    try {
        await configureDatabase(databaseConfig);
        await startServer();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
process.on("SIGINT", async () => {
    try {
        await mongoose.connection.close();
        process.exit(0);//!Если соединение с базой данных успешно закрывается, процесс завершается с кодом состояния 0. Код состояния 0 обычно указывает на успешный и чистый выход.
    } catch (err) {
        console.error("Error closing Mongoose connection", err);
        process.exit(1);//! При возникновении ошибки процесс завершается с кодом состояния 1. Ненулевой код состояния обычно указывает на ошибку или ненормальный выход.
    }
});

start();
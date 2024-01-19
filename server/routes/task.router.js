const taskController = require("../controller/task.controller");



async function routes(fastify, options) {

    fastify.get("/", taskController.getTasks);
    // fastify.get("/:id", taskController.getTask);
    fastify.post("/", taskController.createTask);
    // fastify.put("/:id", taskController.updateTask);
    // fastify.delete("/:id", taskController.deleteTask);


}

module.exports = routes;
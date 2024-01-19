const Task = require("../model/Task");

async function createTask(request, reply) {
    const { title, status, body, priority } = request.body;
    try {
        const newTask = new Task({
            title,
            status,
            body,
            priority
        });
        const savedTask = await newTask.save();
        reply.send(savedTask);

    } catch (err) {
        console.log(err);
        reply.status(500).send({ error: "Internal Server Error" });
    }
}
//?GetTasks
async function getTasks(req, reply) {
    try {
        const tasks = await Task.find();
        reply.send(tasks);
    } catch (err) {
        console.error(err);
        reply.status(500).send({ error: "Internal Server Error" });
    }

}
module.exports = {
    createTask,
    getTasks
};

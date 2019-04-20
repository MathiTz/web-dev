const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 00 * * 6", () => {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(() => {
  tarefa1.cancel();
  console.log("Cancelando a tarefa 1!");
}, 20000);

// setImmediate -> executar função imediatamente
// setInterval -> função de tempos em tempos

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 6)];
regra.hour = 00;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});

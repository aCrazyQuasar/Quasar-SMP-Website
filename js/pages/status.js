const response = await fetch(
  "https://minecraft-server-status-ping.acrazyquasar.workers.dev/status?server=smp.acrazyquasar.dev"
);

const status = await response.json();

console.log(status);
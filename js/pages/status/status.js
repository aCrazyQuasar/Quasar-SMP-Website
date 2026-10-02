async function getStatus() {
  const response = await fetch(
    "https://minecraft-server-status-ping.acrazyquasar.workers.dev/status?server=smp.acrazyquasar.dev",
     { cache: 'no-store' }
  );
  const status = await response.json();
  console.log("Status:", status);

  return status;
}

async function setUIStatus() {
  const status = await getStatus();

  if (status.online) {
    document.getElementById('status-server-img').src = status.icon;
    document.getElementById('status-server-address').innerText = status.server;
    document.getElementById('status-plugin-loader').innerText = status.software;
    document.getElementById('status-server-version').innerText = status.version;
    document.getElementById('status-current-players').innerText = status.players.online;
    document.getElementById('status-max-players').innerText = status.players.max;
    document.getElementById('status-status').classList.add("online");
    document.getElementById('status-status').classList.remove("offline");
    document.getElementById('status-text').innerText = "Online";
  }
}

setUIStatus();
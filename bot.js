const bedrock = require('bedrock-protocol');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot attivo');
});

app.listen(3000, () => {
  console.log('Web server attivo');
});

function startBot() {
  console.log('Avvio bot...');

  const client = bedrock.createClient({
    host: 'enim40.aternos.me',
    port: 64663,
    username: 'Luke4316',
    offline: true,
    raknetBackend: "jsp-raknet",
    skipPing: true
  });

  client.on('join', () => {
    console.log('Bot connesso!');

    // movimento leggero (anti-AFK intelligente)
    setInterval(() => {
      try {
        client.queue('player_action', {
          action: 0,
          position: { x: 0, y: 0, z: 0 },
          result_position: { x: 0, y: 0, z: 0 },
          face: 1
        });
        console.log('movimento');
      } catch {}
    }, 30000); // ogni 30 sec (non sospetto)
  });

  client.on('disconnect', () => {
    console.log('Kick → retry tra 30s');
    setTimeout(startBot, 30000);
  });

  client.on('error', (err) => {
    console.log('Errore:', err.message);
  });
}

startBot();

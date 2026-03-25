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
    username: 'Steve' + Math.floor(Math.random()*1000),
    offline: true,
    raknetBackend: "jsp-raknet",
    skipPing: true
  });

  client.on('join', () => {
    console.log('Bot connesso!');
  });

  client.on('disconnect', (packet) => {
    console.log('Disconnesso:', packet);
    setTimeout(startBot, 20000); // più lento = meno ban
  });

  client.on('error', (err) => {
    console.log('Errore:', err.message);
  });
}

startBot();

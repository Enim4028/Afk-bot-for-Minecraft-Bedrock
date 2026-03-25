const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'enim40.aternos.me',
  port: 64663,
  username: 'Steve' + Math.floor(Math.random()*1000),
  offline: true,
  raknetBackend: "jsp-raknet",
  skipPing: true
});

  client.on('join', () => {
    console.log('Bot online!');
  });

  client.on('disconnect', () => {
    console.log('Disconnesso, riconnessione...');
    setTimeout(startBot, 5000);
  });

  client.on('error', () => {
    console.log('Errore, riavvio...');
    setTimeout(startBot, 5000);
  });
}

startBot();


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot attivo');
});

app.listen(3000, () => {
  console.log('Web server attivo');
});

const bedrock = require('bedrock-protocol');

function startBot() {
  const client = bedrock.createClient({
    host: 'enim40.aternos.me',
    port: 64663,
    username: 'BotAFK',
    offline: true
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

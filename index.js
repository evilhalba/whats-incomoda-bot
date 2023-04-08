const venom = require('venom-bot');
var http = require('http');
const {execSync} = require('child_process');

let extclient;
venom
  .create({
    session: 'session-namea',
    headless: true //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

 
  function start(client) {
    extclient = client;
    client.onMessage((message) => {
      console.log(message);
      if(message.from === "5555984429743@c.us"){
        exit(1);
      }
      if (message.body === 'Hi' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Welcome Venom 🕷')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
    });
  }
  http.createServer(async function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const naoAcaba = 1;
    while(naoAcaba === 1){
    for(var i = 0; i < 3; i++){
      
    extclient.sendText("5555984429743@c.us", `${greetingMessage()}, conseguiu ver o contrato?`);
    extclient.sendText("5555984429743@c.us", `${greetingMessage()}, conseguiu ver o contrato?`);
    extclient.sendText("5555984429743@c.us", `${greetingMessage()}, conseguiu ver o contrato?`);
    extclient.sendText("5555984429743@c.us", `${greetingMessage()}, conseguiu ver o contrato?`);
    extclient.sendText("5555984429743@c.us", `${greetingMessage()}, conseguiu ver o contrato?`);
    extclient.sendText("5555984429743@c.us", `${greetingMessage()}, conseguiu ver o contrato?`);
    await delay(600000);
  }
  }
    res.end('Hello World!');
  }).listen(8080);

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  } 

  const greetingMessage = () => {
    //let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false });
    let h = new Date().getHours();
    if (h <= 5) return 'Boa madrugada';
    if (h < 12) return 'Bom dia';
    if (h < 18) return 'Boa tarde';
    return 'Boa noite';
  }
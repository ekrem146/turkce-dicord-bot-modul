    const Discord = require('discord.js');
    const client = new Discord.Client();  
  client.on('ready', () => {
   console.log(`Bot Giriş Yaptı ${client.user.tag}!`);
 });
    module.exports.soru_cevap = function(soru,cevap){

    client.on('message', msg => {
      if (msg.content === soru) {
        msg.reply(cevap);
      }
    });  

    
  
    

}

module.exports.token = function(token){
 client.login(token);   
}


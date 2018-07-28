const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("for CryptoStudios")
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}games`){
    return message.channel.send("```Currently our games our: Highway Runner```");
  }

  if(cmd === `${prefix}support`){
    return message.channel.send("```Please contact an Administrator or Moderator for support. Do not contact any other roles.```")
  }

});

bot.login(botconfig.token);

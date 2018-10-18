const Discord = require("discord.js");

exports.run = async(bot, message, args) => {
//This whole command explains itself/.

  let modEmbed = new Discord.RichEmbed()
  .setColor("#FFCC4D")
  .addField("Moderation Commands", "None yet!")

  let pollEmbed = new Discord.RichEmbed()
  .setColor("#FFCC4D")
  .addField("Poll Commands", "!qp <question> - Adds poll reactions to your message \n!poll <question> - Sends your poll as a nice embed and reacts")

  let infoEmbed = new Discord.RichEmbed()
  .setColor("#FFCC4D")
  .addField("Info Commands", "None yet!")

  let funEmbed = new Discord.RichEmbed()
  .setColor("#FFCC4D")
  .addField("Fun Commands", "None yet!")

  let allCmds = new Discord.RichEmbed()
  .setColor("#FFCC4D")
  .addField("All Commands", "None yet!")

let ecoEmbed = new Discord.RichEmbed()
  .setColor("#FFCC4D")
.addField("Economy Commands", "!coins - Check coin amount \n!gamble <1-200> - Gamble for a chance to win! \n!shop - Buy roles & other stuff")

if(args[0] == "moderation"){
   message.author.send(modEmbed);
   let msg = message
   await msg.react('👍')
   return;
 }
 if(args[0] == "polls"){
    message.author.send(pollEmbed);
    let msg = message
    await msg.react('👍')
    return;
  }
  if(args[0] == "info"){
   message.author.send(infoEmbed);
   let msg = message
   await msg.react('👍')
   return;
 }
 if(args[0] == "fun"){
  message.author.send(funEmbed);
  let msg = message
  await msg.react('👍')
  return;
}
if(args[0] == "economy"){
 message.author.send(ecoEmbed);
 let msg = message
 await msg.react('👍')
 return;
}
if(args[0] == "all"){



  let msg = message
  await msg.react('👍')
  return;
}

let choiceEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.addField("Moderation Commands", "!help moderation")
.addField("Poll Commands", "!help polls")
.addField("Information Commands", "!help info")
.addField("Fun Commands", "!help fun")
.addField("Economy", "!help economy")

message.channel.send(choiceEmbed);

}

module.exports.help = {
  name: "help"
}

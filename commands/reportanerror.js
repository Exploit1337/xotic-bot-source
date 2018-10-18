const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bugArgs = args.join(" "); //The issue the user reports

let sEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.setTitle("Your bug/error has been reported!")
.setDescription("Spamming this command will get you blocked from using any of the bots commands!")
.addField("Message: ", `${bugArgs}`)
.addField("Reported by: ",  `${message.author}`)

message.channel.send(sEmbed);

let bEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.setTitle("A bug/error has been reported!")
.addField("Message: ", `${bugArgs}`)
.addField("Reported by: ", `${message.author} \nAuthor ID: ${message.author.id}`)
.addField("Reported in: ", `Guild name: ${message.guild.name} \nGuild ID: ${message.guild.id} \n \n Channel name: ${message.channel.name}\nChannel ID: ${message.channel.id}`)

bot.guilds.get("454538064056811530").channels.get("501925219078897674").send(bEmbed).catch(console.error);
//REPLACE THE FIRST ID WITH YOUR GUILD ID AND THE SECOND WITH THE CHANNEL TO SEND REPORTS TO!!!!!
}

module.exports.help = {
  name:"reportbug"
}

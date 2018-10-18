const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let guildArg = args[0]
let chanArg = args[1]
let repArg = args.slice(2).join(" ");

if(!guildArg) return message.reply("Incorrect Usage!")
if(!chanArg) return message.reply("Incorrect Usage!")
if(!repArg) return message.reply("Incorrect  Usage!")
// Since this bot is open source I'm only going to handle these errors.

let rEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.setTitle("Update On Reported Bug: ")
.addField("Reply From:", `${message.author.tag} [Developer]`)
.addField("Reply Message", `${repArg}`)


  bot.guilds.get(guildArg).channels.get(chanArg).send(rEmbed).catch(console.error);
message.delete()

let sEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.setTitle(`Sent reply to: ${guildArg} in ${chanArg} with reply: ${repArg}`)

//Respond like !respond <guild ID> <channel ID> <message>

message.channel.send(sEmbed)
}

module.exports.help = {
  name:"respond"
}

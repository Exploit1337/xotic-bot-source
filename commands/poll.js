const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

// Poll with an embed

let logarg = args.join(" ")


let msgEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.addField("Error:", "Please enter an actual poll question!");


if(logarg < 1) return message.channel.send(msgEmbed)

let pollEmbed = new Discord.RichEmbed()
.setDescription("Poll:")
.setColor("#FFCC4D")
.addField("Poll Question: ", logarg + "\n")
.addField("Poll Creator: ", `${message.author}`);


message.delete()
 let msg = await message.channel.send(pollEmbed)
 await msg.react("487040380773072937")
await msg.react('487040365183107082')  //Reacts using custom emojis. Use \:emojiname: and copy the output into this to use regular emojis

}

module.exports.help = {
  name: "poll"
}

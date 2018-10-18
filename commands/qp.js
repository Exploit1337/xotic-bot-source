const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// Quick Poll.

  let msg = message
  await msg.react('487040380773072937') //Reacts with custom emojis on original message.
 await msg.react('487040365183107082')
}

module.exports.help = {
  name:"qp"
}

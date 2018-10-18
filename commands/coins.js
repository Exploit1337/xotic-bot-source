const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
let coins = require("../coins.json");
  //!coins
  
  let uCoins = coins[message.author.id].coins;

  let coinEmbed = new Discord.RichEmbed()
  .setColor("#FFCC4D")
  .addField(`${message.author.username}`, uCoins + " coins")

  message.channel.send(coinEmbed); // .then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "coins"
}

const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {


  let sCoins = coins[message.author.id].coins;

if(args[0] == 1){
    let gRole = message.guild.roles.find(r => r.name === "Pumpkin Kids 🎃");
    if (message.member.roles.has(gRole.id)) return message.reply("You already have this item!");
  if(sCoins < 1500) return message.reply("You don't have enough coins to do this.");
  if(!coins[message.author.id]){
    return message.reply("You don't have enough coins to do this.")
  }
    if(sCoins === 0) return message.reply("You don't have enough coins to do this.");

  await (message.member.addRole(gRole.id));

    coins[message.author.id] = {
      coins: sCoins - 1500
    };
    return message.channel.send("You have purchased the Pumpkin role!")

}
if(args[0] == 2){
    let gRole = message.guild.roles.find(r => r.name === "Premium");
    if (message.member.roles.has(gRole.id)) return message.reply("You already have this item!");
  if(sCoins < 5000) return message.reply("You don't have enough coins to do this.");
  if(!coins[message.author.id]){
    return message.reply("You don't have enough coins to do this.")
  }
    if(sCoins === 0) return message.reply("You don't have enough coins to do this.");

  await (message.member.addRole(gRole.id));

    coins[message.author.id] = {
      coins: sCoins - 5000
    };
    return message.channel.send("You have purchased the Premium role!")

}
if(args[0] == 3){
    let gRole = message.guild.roles.find(r => r.name === "Best Coder");
    if(gRole.members.size == 1) return message.channel.send("There is no more of this item in stock!");
    if (message.member.roles.has(gRole.id)) return message.reply("You already have this item!");
  if(sCoins < 50000) return message.reply("You don't have enough coins to do this.");
  if(!coins[message.author.id]){
    return message.reply("You don't have enough coins to do this.")
  }
    if(sCoins === 0) return message.reply("You don't have enough coins to do this.");

  await (message.member.addRole(gRole.id));

    coins[message.author.id] = {
      coins: sCoins - 50000
    };
    return message.channel.send("You have purchased the Best Coder role!")

}

let sEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.addField("Pumpkin Kids Role: 1500 Coins", "`!shop 1` to buy [Limited Time]")
.addField("Premium Role: 5000 Coins", "`!shop 2` to buy")
.addField(`Best Coder Role: 50000 Coins | Stock: 1`, "`!shop 3` to buy")

message.channel.send(sEmbed)
}

module.exports.help = {
  name:"shop"
}

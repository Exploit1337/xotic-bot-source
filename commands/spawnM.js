const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let coins = require("../coins.json");

  let permission = message.member.hasPermission("ADMINISTRATOR");

 if(!permission) return message.channel.send("Only Admins can spawn coins!")

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!pUser) return message.channel.send("Couldn't find that user!")

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;


  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has spawned ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "spawncoins"
}

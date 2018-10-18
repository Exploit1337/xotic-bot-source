const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let coins = require("../coins.json");
  //!pay @isatisfied 59345

  if(!coins[message.author.id]){
    return message.reply("You don't have enough coins to do this.")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!pUser) return message.channel.send("Couldn't find that user!")
  if(message.author.id == pUser.id) return message.channel.send("You can't pay yourself coins!");
  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(parseInt(args[1]) > sCoins) return message.reply("You don't have enough coins to do this.");
  if(sCoins === 0) return message.reply("You don't have enough coins to do this.");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}

const Discord = require("discord.js");
const talkedRecently = new Set();
const dtimeout = {};
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
let coins = require("../coins.json");

if(!args[0]) return message.channel.send("Specify an amount to gamble!")

  let sCoins = coins[message.author.id].coins;

if(parseInt(args[0]) > 200) return message.reply("You can't gamble more than 200 coins at a time!");

  if(parseInt(args[0]) > sCoins) return message.reply("You don't have enough coins to do this.");


  if(!coins[message.author.id]){
    return message.reply("You don't have enough coins to do this.")
  }
    if(sCoins === 0) return message.reply("You don't have enough coins to do this.");

if (talkedRecently.has(message.author.id)) {
             message.channel.send("Wait 5 minutes before doing gamble again - " + message.author);
            return;
    } else {

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 300000);
    }

let replies = ["w", "l"];

let result = Math.floor((Math.random() * replies.length))

if(replies[result] == "w"){

  coins[message.author.id] = {
    coins: sCoins + Math.floor(parseInt(args[0]) * 2)
  };

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });

  message.channel.send("You won! Your coins have been doubled!")

return;
}
if(replies[result] == "l")

coins[message.author.id] = {
  coins: sCoins - parseInt(args[0])
};

fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if (err) console.log(err)
});

message.channel.send("You lost")

return;
}

module.exports.help = {
  name: "gamble"
}

const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let coins = require("./coins.json");
bot.commands = new Discord.Collection();
let xp = require("./xp.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
let jsfile = files.filter(f => f.split(".").pop() === "js");
if(jsfile.length <= 0){
  console.log("Couldn't find commands.");
  return;
}

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});
});

var servers = {};

bot.on("ready", async () => {
    bot.user.setActivity("with code.", {type: "PLAYING"}); //VBot Activity



    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
});





// bot.on("guildMemberAdd", member => {

// let eEmbed = new Discord.RichEmbed()
// .setColor("")
// .setTitle(`Hello ${member.user.tag}`)

// let logChannel = member.guild.channels.find(c => c.name === "genrel")
// logChannel.send(eEmbed)
// });



 bot.on('guildCreate', guild => {

//   if (guild.guild.channels.find(c => c.name === "general")){
//code
//   } elseif(guild.guild.channels.find(c => c.name === "chat")) {

//   } elseif(guild.guild.channels.find(c => c.name === "main-chat")) {

//   } elseif(guild.guild.channels.find(c => c.name === "genrel")) {
let tEmbed = new Discord.RichEmbed()
.setColor("#FFCC4D")
.addField("Thank You!", "Thank you for inviting XoTic Bot to your server! to get started the prefix is !, Just do `!help` in chat and I will show you all of the commands!")

  guild.channels.find(c => c.name === "general" || c.name === "chat" || c.name === "genrel" || c.name === "main-chat" || c.name === "off-topic" && c.type === "text").send(tEmbed)

//guild.channels.find(c =>( c.name === "str" || c.name === "str2") && c.type === "text")
// }

// || guild.guild.channels.find(c => c.name === "chat") || guild.guild.channels.find(c => c.name === "main-chat") || guild.guild.channels.find(c => c.name === "genrel")
// let SendChannel = guild.channels.find(c => c.name === "general"  || c.name === "chat"  || c.name === "main-chat"  || c.name === "genrel")

 // if(SendChannel) SendChannel.send(`Hello, this is a test welcome message!`);

});

// bot.on("messageDelete", (messageDelete) => {
  //  messageDelete.channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
// let nEmbed = new Discord.RichEmbed()
// .setColor("#FFCC4D")
// .setTitle("User Message Deleted")
// .addField("Sender: ", `${messageDelete.author.tag}`)
// .addField("Message: ", `${messageDelete.content}`)

//  let ooF = messageDelete.guild.channels.find(c => c.name === "punishment-log")
// if(messageDelete.author.id == "285149851572895744") return ooF.send(nEmbed)
// });



bot.on("message", async message => {

  if(message.author.bot) return;
  if (message.channel.type === "dm") return;

  if(!coins[message.author.id]){
     coins[message.author.id] = {
       coins: 100
     };
   }

   let coinAmt = Math.floor(Math.random() * 15) + 1;
   let baseAmt = Math.floor(Math.random() * 15) + 1;

   if(coinAmt === baseAmt){
     coins[message.author.id] = {
       coins: coins[message.author.id].coins + coinAmt
     };
   fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
     if (err) console.log(err)
   });
   let coinEmbed = new Discord.RichEmbed()
   .setColor("#FFCC4D")
   .setDescription(`${message.author.username}, you have received ${coinAmt} coins!`)

   message.channel.send(coinEmbed).then(msg => {msg.delete(10000)});
   }
   let xpAdd = Math.floor(Math.random() * 7) + 8;


   if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
       level: 1
     };
   }


   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvl = xp[message.author.id].level * 300;
   xp[message.author.id].xp =  curxp + xpAdd;
   if(nxtLvl <= xp[message.author.id].xp){
     xp[message.author.id].level = curlvl + 1;
     let leveL = Math.floor(curlvl + 1)

     message.channel.send(`${message.author} you reached level ` + Math.floor(curlvl + 1));
if(leveL == 25){
  let gRole = message.guild.roles.find(r => r.name === "VIP");
  if (message.member.roles.has(gRole.id)) return message.reply("You already have the VIP role?");

    await (message.member.addRole(gRole.id));
}
if(leveL == 50){
  let gRole = message.guild.roles.find(r => r.name === "VIP+");
  if (message.member.roles.has(gRole.id)) return message.reply("You already have the VIP+ role?");

    await (message.member.addRole(gRole.id));
}

   }
   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
     if(err) console.log(err)
   });

if(!message.content.startsWith(botconfig.prefix)) return;



let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);


});




bot.login(tokenfile.token);

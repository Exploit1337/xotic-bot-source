const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
//DONT GIVE THIS COMMAND TO ANYONE BUT YOURSELF. THIS IS DANGEROUS

if(message.author.id !== '285149851572895744') return; //Owner ID
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

let argresult = args.join(' ');
  if (message.author.id !== '285149851572895744') { //Owner ID
         // Check if user have Permissions to use the command
        message.channel.send('You Don\'t Have Permissions To Use This Command !'); // Send Message to the channel if they dont have permissions
        return; // Returns the code so the rest doesn't run
      }
      if (!argresult) {
        return message.channel.send("Please Specify a Code To Run!");
      }

      try {

        var evaled = eval(argresult);

        if (typeof evaled !== "string")
       evaled = require("util").inspect(evaled);
       if (evaled.includes(bot.token)) {
      return message.channel.send("", {
           embed: {
              color: 0xFF5733,
              title: '<:warningSymbol:500907898118078505> Access Denied <:warningSymbol:500907898118078505>',
              description: `You can't eval the bots token!`
           }
          });
        }

        let embed = new Discord.RichEmbed()
        .addField(`${bot.user.username} - JavaScript Eval Success:`, `** **`)
        .addField(":inbox_tray: **INPUT**", "```" + args.join(" ") + "```")
        .addField(":outbox_tray: **OUTPUT**", "```" + clean(evaled) + "```")
        .setColor(0xFF5733)
        .setFooter(message.createdAt, message.author.avatarURL)
        message.channel.send({embed})

      } catch (err){

        message.channel.send(new Discord.RichEmbed()
        .addField(`${bot.user.username} - JavaScript Eval Error:`, "There Was a Problem With The Code That You Are Trying To Run!")
        .addField(":no_entry: ERROR", "```" + clean(err) + "```")
        .setColor(0xFF5733)
        .setFooter(message.createdAt, message.author.avatarURL))

            .catch( error => message.channel.send(`**ERROR:** ${error.message}`))
      }

}

module.exports.help = {
  name:"eval"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let permission = message.member.hasPermission("MANAGE_MESSAGES");

 if(!permission) return message.channel.send("You need the permission `MANAGE_MESSAGES` to view a users permissions!")

    let Discord = require("discord.js")
    let string = '```md\n';
    let user = message.mentions.members.first()//client.GA(message, args)
    message.channel.permissionsFor(user).toArray().map(p => string += `+ ${p.charAt(0) + p.toLowerCase().replace(/_/g, ' ').slice(1).replace(`vad`, `VAD`)}\n`)
    let finalStr = string + "```"
    let embed = new Discord.RichEmbed()
       .setTitle(`Permissions for ${user.user.tag}`)
       .setDescription(finalStr)
       .setColor("#FFCC4D")
    message.channel.send(embed)
  }

  module.exports.help = {
    name: "permissions"
  }

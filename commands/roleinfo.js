const { RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

//First role thats mentioned or is found by name.
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

     // If bot can't find any role, then just default to the author's highest role
     if (!role) role = message.member.highestRole;

     const embed = new RichEmbed()
       .setColor(role.hexColor)
       .setTitle(`Role: ${role.name}`)
       .addField('Members', role.members.size, true)
       .addField('Hex Color', role.hexColor, true)
       .addField('Creation Date', role.createdAt.toDateString(), true)
       .addField('Editable', role.editable.toString(), true)
       .addField('Managed', role.managed.toString(), true)
       .addField('ID', role.id, true);
   return message.channel.send({
       embed: embed
   });

}

module.exports.help = {
  name:"roleinfo"
}

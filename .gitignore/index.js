const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!"

client.on('message', message => {

  if (message.content.startsWith(prefix + 'mpall')){
    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);

                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(MpMessage)
    })
 }
});

client.on('message', msg => {
  if (msg.content === '!nitro') {
    msg.reply('MP un fondateur si tu as les invitations requises !');
  }
});

client.once('message', msg => {
    console.log(`${client.user.tag} est connecté`)
    client.user.setActivity('👉 https://discord.gg/UdAJAVN', {type: "PLAYING"})
})

client.login(process.env.TOKEN)

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

client.on('message', message => {
  console.log("Ready");
  client.user.setGame("💎 | 𝔹𝕒𝕔𝕜𝕦𝕡");
}

client.login(process.env.TOKEN)

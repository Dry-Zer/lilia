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

client.user.setActivity("𝗟’𝗘𝗺𝗽𝗶𝗿𝗲 :performing_arts: ==> https://discord.gg/UdAJAVN", {
        type: 'STREAMING',
        url: "https://www.twitch.tv/ADMonZouk"
    });
});

client.login(process.env.TOKEN)

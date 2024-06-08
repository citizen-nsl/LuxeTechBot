import { Client, EmbedBuilder, Events, IntentsBitField} from 'discord.js'

const client = new Client({ intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'GuildVoiceStates'] })

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// weclome message
client.on(Events.GuildMemberAdd, (member) => {
    const channel = member.guild.channels.cache.find(ch => ch.id == '1249004920158290033')
    if (!channel) return

    // channel.send(`Welcome to the server, ${member}`)

    const emned = new EmbedBuilder()
    .setAuthor({name: member.user.tag})
    .setImage('https://cdn.discordapp.com/attachments/1242038785445728331/1248998018729115649/LukeTech-Banner.png?ex=6665b38c&is=6664620c&hm=b3f0d1aae1cca036154019338af31d023f36f19bcabb6afba0b100c36b586522&')
    .setThumbnail('https://cdn.dribbble.com/users/948184/screenshots/14123034/4_potato_space_db.gif')
    .setColor('White')
    .setTitle('ˋˏ<a:38270cutebow:1249002313033580646>﹒÷﹒ Welcome To LuxeTech Solutions !')
    .setDescription([
        '﹒<:1124458589856223302:1248999198603612280> ติดต่อเราได้ที่ <#1126892774004887563>',
        '﹒<:72953tardisdrink:1249002302849945662> กฏ <#1127659687832211510> !',
        '﹒<:81935frogcan:1249002296386261082> บริการอื่นๆ มากมาย !',
    ].join('\n'))
    .setFooter({
        text: 'we now have ' + member.guild.memberCount + ' members! <3'
    })

    member.roles.add('1126598273562574918')

    channel.send({content: `<@${member.id}>`, embeds: [emned]})
    
})

client.login('')
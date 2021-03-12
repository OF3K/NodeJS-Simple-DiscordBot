/**
 Please open How.txt first!
 
 useful links:
 IlDevsV2: https://discord.gg/PU6GNEnrXg
 DiscordJSOfficelServer: https://discord.gg/bRCvFy9
 discordjs guide: https://discordjs.guide
 discordjs web: https://discord.js.org/

 please give to github.com/OF3K credit

**/
const Discord = require('discord.js') //Defines Discord
const client = new Discord.Client() //Defines client
const config = require('./config.json') //Defines config file

client.on('ready', () => { //If the bot is online... 
    console.log(`The Bot is ready! With ${client.users.cache.size} member's and ${client.guilds.cache.size} guilds. The bot by github.com/OF3K`) //console.log, only you can see that
    client.user.setActivity(`The bot by github.com/OF3K | ${client.users.cache.size} member's!`); // simple status
});

client.on('message', async message => { //Defines `message`
    if (message.author.bot) return;
    if(!message.content.startsWith('config.prefix')) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'ping') // if the command start with: config.prefix+ping 
    {
        const g = await message.channel.send("Ping?"); // Defines `g` and send "Ping?" 
        g.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`); //`g` ( ="Ping?") edit to `Pong! Latency is...` and the ping
        
    }

    if(command === 'clear') {
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Please select a number from 2 to 100 to delete");
        message.channel.bulkDelete(deleteCount)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
      }
      
// please give to github.com/OF3K credit
      if(command === "kick") {
        if(!member.hasPermission['KICK_MEMBERS']) //if member do not have `KICK_MEMBERS` permmision so:
          return message.reply("Sorry, you don't have permissions to use this!"); 
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); //check the member exist
        if(!member) // if member Does not exist
          return message.reply("Please mention a exist member of this server");
        if(!member.kickable) // check if the bot have permmision
          return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
            //reason
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason provided";
        
        //kick the member or not!
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    
      }
})

client.login(config.token)

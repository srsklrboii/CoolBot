const Discord = require("discord.js");
const PREFIX = "]";
const fs = require('fs');
const YTDL = require("ytdl-core")
const getYoutubeID = require("get-youtube-id")
const fetchVideoInfo = require("youtube-info")
const ffmpeg = require("ffmpeg-binaries")
const ms = require("ms")

var ball = [
    "Yes.",
    "No.",
    "I don't know.",
    "You're asking a bot this.",
    "What?",
]

var sixsided = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
]

var eightsided = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
]

var tensided = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
]

var rudeball = [
    "no u",
    "go fuck urself",
    "go die in a hole",
    "fuck off",
    "you dont deserve to live",
    "fuck you i dont want no ravioli nigga",
    "die... just die...",
]

var gayrate = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
]

var lesbianrate = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
]

var straightrate = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
]

var incestrate= [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
]

var waifurater = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
]

var dankrate = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
]

var roasts = [
    "Damn dude, grow a pair... of anything.",
    "Taking a selfie in your office (the toilets). I see.",
    "You look like the kind of guy who wouldn't know who he was even after he was told who he was.",
]

var bot = new Discord.Client;

let queue = {}

bot.on('ready', () => {
    console.log("CoolBot is up and running!")
    bot.user.setActivity("online")
    bot.user.setActivity(`]help | CoolBot`)
});

bot.on("message", function(message) {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(PREFIX.length).split(" ");
    let hey = cont.slice(1);
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    if (message.channel.type === "dm") return message.author.send("Please use this command in a server!")

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.send(':ping_pong: Pong! It took `' + bot.ping + ' ` ms to sent this message!')
        break;

        case "pong":
        message.channel.send('Why did you say pong?????')
        break;

        case "cookie":
        message.channel.send(":cookie:")
        break;

        case "help":
        var author = message.author
        message.channel.send(`${author}, check your DM's for help!`)
        author.send("Normal commands:\n``]help``: sends this message to you in DM's.\n``]ping``: give's you a really precise overview of the bot's latency.\n``]pong``: what?!.\n``]cookie``: gives you a cookie.\n``]say <whatever you want the bot to say>``: deletes the message and sends what you specified as the bot.\n\nInfo commands:\n``]userinfo <optional user>``: gives you the Discord account info of the user you mention. If there is no one mentioned, it will default to you.\n``]serverinfo``: info about the server you are running this command in.\n``]getavatar <optional user>``: gets the avatar of the user you mention. If there is no one mentioned, then it will default to you.\n\n8ball commands:\n``]8ball <question>``: answers your question.\n``]rudeball <question>``: rudely answers your question. WARNING: this contains insults and answers that may hurt someone emotionally.\n\nDice roll:\n``]6sided``: rolls a six-sided dice.\n``]8sided``: rolls an eight-sided dice.\n``]10sided``: rolls a ten-sided dice.\n\nGay commands :gay_pride_flag::\n``]gayrate <optional user>``: rates the mentioned user based on their gayness. If there is no one mentioned, it will default to you.\n``]lesbianrate <optional user>``: rates the mentioned user based on their lesbianness. If there is no one mentioned, it will default to you.\n``]straightrate <optional user>``: rates the mentioned user based on their straightness. If there is no one mentioned, it will default to you.\n``]incestrate <optional user>``: rates the mentioned user based on their incest. If there is no one mentioned, it will default to you.\n``]waifurate <optional user>``: rates the mentioned user based on their waifu. If there is no one mentioned, it will default to you.")
        author.send("Fun commands:\n``]punch <user>``: punches the mentioned user.\n``]stab <user>``: stabs the mentioned user.\n``]shoot <user>``: shoots the mentioned user.\n``]roast <user>``: roasts the mentioned user in DM's.\n``]bomb <user>``: bombs the mentioned user.\n``]annihilate <user>``: annihilates the mentioned user.\n\nNSFW commands:\n``]nsfwcheck``: checks if the channel you are executing the command in is nsfw (in beta).\n\nAdmin commands:\n``]kick <user> <reason>``: kicks the specified user for the reason.\n``]ban <user> <reason>``: bans the user for the specified reason (in beta).\n``]purge <number>``: deletes the amount of messages specified.\n\nMiscellaneous commands:\n``]botinfo``: info about me!\n``]invite``: sends a link to invite me to your Discord server!\n``]credits``: shows the person of who made me!\n\n\nCreated by srsklrboii#5784.")
        break;

        case "8ball":
        if (args[1]) {
            message.channel.send(ball[Math.floor(Math.random() * ball.length)]);
            return;
        } else {
            message.channel.send("There is no question for me to answer!");
            return;
        }
        
        case "userinfo":
            var userCreated = message.author.createdAt.toString().split(" ");
            var userinfotoget = message.mentions.users.first()
            if (!userinfotoget) {
                var embed = new Discord.RichEmbed()
                    .setAuthor(`User info for you`)
                    .addField("Discord name", `${message.author.username}`)
                    .addField("Discord ID", `${message.author.id}`)
                    .addField("Date of creation", "**" + userCreated[0] + '**, **' + userCreated[1] + ' ' + userCreated[2] + ' ' + userCreated[3] + '**, at **' + userCreated[4] + "**")
                    .addField("Highest role", message.member.highestRole.name)
                    .setThumbnail(message.author.avatarURL)
                    .setFooter("Credits: made by srsklrboii#5784")
                    .setColor("RANDOM")
                message.channel.send(embed).catch(e => {
                    console.error(e);
                });
                return
            }
            var userinfoembed = new Discord.RichEmbed()
                .setAuthor(`User info for ${userinfotoget.username}`)
                .addField("Discord name", `${userinfotoget.username}`)
                .addField("Discord ID", `${userinfotoget.id}`)
                .setThumbnail(userinfotoget.avatarURL)
                .setFooter("Credits: made by srsklrboii#5784")
                .setColor("RANDOM")
            message.channel.send(userinfoembed).catch(e => {
                console.error(e);
            });
        break;

        case "":
        message.channel.send("Please input a command after the prefix.")
        break;

        case "credits":
        message.channel.send("I was created by srsklrboii#5784!")
        break;
        
        case "serverinfo":
        var serverCreated = message.guild.createdAt.toString().split(" ");
        var embed = new Discord.RichEmbed()
            .setAuthor("Info about this Discord Server:")
            .addField("Server name", `${message.guild}`)
            .addField("Creation date", serverCreated[0] + ', ' + serverCreated[1] + ' ' + serverCreated[2] + ' ' + serverCreated[3] + ' at ' + serverCreated[4])
            .addField("Server ID", `${message.guild.id}`)
            .addField("Members", message.guild.memberCount)
            .setColor("RANDOM")
            .setFooter("Credits: created by srsklrboii#5784")
            message.channel.send(embed).catch(e => {
                console.error(e);
            });
        break;

        case "botinfo":
        var botCreated = bot.user.createdAt.toString().split(" ")
        var embed = new Discord.RichEmbed()
            .setAuthor("Info about me!")
            .addField("Username", `${bot.user}`)
            .addField("ID", `${bot.user.id}`)
            .addField("Created Date", '**' + botCreated[0] + ', ' + botCreated[1] + ' ' + botCreated[2] + ' ' + botCreated[3] + '** at **' + botCreated[4] + '**.')
            .addField("Uptime since restart", "``" + bot.uptime + "`` ms")
            .setThumbnail(bot.avatarURL)
            .setColor("RANDOM")
            .setFooter("Credits: created by srsklrboii#5784")
            message.channel.send(embed).catch(e => {
                console.error(e);
            });
        break;

        case "kick":
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have the permission to do this!");
        var kickedmember = message.mentions.members.first()
        if (!kickedmember) return message.reply("Please mention a valid member of this server!")
        if (kickedmember.hasPermission("KICK_MEMBERS")) return message.reply("I cannot kick this member because he/she is a mod/admin!")
        var kickreasondelete = 10 + kickedmember.user.id.length
        var kickreason = message.content.substring(kickreasondelete).split(" ");
        var kickreason = kickreason.join(" ");
        if (!kickreason) return message.reply("Please indicate a reason for the kick!")
        kickedmember.send(`You have been kicked from ${message.guild} for the following reason: ${kickreason}.`)
        kickedmember.kick(kickreason)
            .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`);
        break;

        case "invite":
        var embed = new Discord.RichEmbed()
            .setAuthor("Invite me to your Discord server!")
            .addField("Thanks for wanting me to add you into your Discord server! The link is below:", "https://discordapp.com/api/oauth2/authorize?client_id=416496004699783190&permissions=268696759&scope=bot")
            .setFooter("Credits: created by srsklrboii#5784")
            .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                console.error(e);
            });
        break;

        case "6sided":
        message.channel.send("You rolled a **" + sixsided[Math.floor(Math.random() * sixsided.length)] + "**!");
        break;

        case "getavatar":
        var avatartoget = message.mentions.users.first()
        if (!avatartoget) return message.channel.send(`${message.author}, your avatar is here: ${message.author.displayAvatarURL}`)
        message.channel.send(`${message.author}, here is the avatar of ${avatartoget}: ${avatartoget.displayAvatarURL}`)
        break;

        case "8sided":
        message.channel.send("You rolled a **" + eightsided[Math.floor(Math.random() * eightsided.length)] + "**!");
        break;

        case "10sided":
        message.channel.send("You rolled a **" + tensided[Math.floor(Math.random() * tensided.length)] + "**!");
        break;

        case "rudeball":
        if (args[1]) {
            message.channel.send(rudeball[Math.floor(Math.random() * rudeball.length)]);
            return;
        } else {
            message.channel.send("ask a fucking question you fucking retard");
            return;
        }

        case "purge":
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the permission to do this!")
            if (!args[1]) return message.channel.send("Please specify a number!")
            if (isNaN(args[1])) return message.channel.send("Please specify a vaild number!")
            message.delete();
            message.channel.bulkDelete(args[1]).catch(e => {
                console.error(e)
            })
            message.channel.send(`Purged **${args[1]}** messages!`)
        break;

        case "ban":
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have the permission to do this!");
        var banmember = message.mentions.members.first()
        if (!banmember) return message.reply("Please mention a valid member of this server!")
        if (banmember.hasPermission("BAN_MEMBERS")) return message.reply("I cannot ban this member because he/she is a mod/admin!")
        var banreasondelete = 10 + banmember.user.id.length
        var banreason = message.content.substring(banreasondelete).split(" ");
        var banreason = banreason.join(" ");
        if (!banreason) return message.reply("Please indicate a reason for the ban!")
        banmember.send(`You have been banned from ${message.guild} for the following reason: ${kickreason}.`)
        banmember.ban(banreason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${kickedmember} has been kicked by ${message.author.username} because: ${kickreason}`);
        break;

        case "say":
        var author = message.author
        message.delete()
        
        message.channel.send(args.join(" "))
        break;

        case "gayrate":
        var gaymember = message.mentions.users.first()
        if (!gaymember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Gay Rater")
                .addField(`Gay rate below :gay_pride_flag:`, `You are ${gayrate[Math.floor(Math.random() * gayrate.length)]}% gay.`)
                .setFooter("Created by srsklrboii#5784")
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                console.error(e)
            })
            return
        }
        var gayembed = new Discord.RichEmbed()
            .setAuthor("Gay Rater")
            .addField(`Gay rate below :gay_pride_flag:`, `${gaymember.username} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% gay.`)
            .setFooter("Created by srsklrboii#5784")
            .setColor("RANDOM")
        message.channel.send(gayembed).catch(e => {
            console.error(e)
        })
        break;

        case "lesbianrate":
        var lesbianmember = message.mentions.users.first()
        if (!lesbianmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Lesbian Rater")
                .addField("Lesbian rate below :gay_pride_flag:", `You are ${lesbianrate[Math.floor(Math.random() * lesbianrate.length)]}% lesbian.`)
                .setFooter("Created by srsklrboii#5784")
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                console.error(e)
            })
            return
        }
        var lesbianembed = new Discord.RichEmbed()
            .setAuthor("Lesbian Rater")
            .addField("Lesbian rate below :gay_pride_flag:", `${lesbianmember.username} is ${lesbianrate[Math.floor(Math.random() * lesbianrate.length)]}% lesbian.`)
            .setFooter("Created by srsklrboii#5784")
            .setColor("RANDOM")
        message.channel.send(lesbianembed).catch(e => {
            console.error(e)
        })
        break;

        case "straightrate":
        var straightmember = message.mentions.users.first()
        if (!straightmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Straight Rater")
                .addField("Straight rate below :gay_pride_flag:", `You are ${straightrate[Math.floor(Math.random() * straightrate.length)]}% straight.`)
                .setFooter("Created by srsklrboii#5784")
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                console.error(e)
            })
            return
        }
        var straightembed = new Discord.RichEmbed()
            .setAuthor("Straight Rate")
            .addField("Straight rate below :gay_pride_flag:", `${straightmember.username} is ${straightrate[Math.floor(Math.random() * straightrate.length)]}% straight.`)
            .setFooter("Created by srsklrboii#5784")
            .setColor("RANDOM")
        message.channel.send(straightembed).catch(e => {
            console.error(e)
        })
        break;

        case "incestrate":
        var incestmember = message.mentions.users.first()
        if (!incestmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Incest Rate")
                .addField("Incest rate below :regional_indicator_w: :regional_indicator_o: :regional_indicator_w:", `You are ${incestrate[Math.floor(Math.random() * incestrate.length)]}% incest.`)
                .setFooter("Created by srsklrboii#5784")
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                console.error(e)
            })
            return
        }
        var incestembed = new Discord.RichEmbed()
            .setAuthor("Incest Rate")
            .addField("Incest rate below :regional_indicator_w: :regional_indicator_o: :regional_indicator_w:", `${incestmember.username} is ${incestrate[Math.floor(Math.random() * incestrate.length)]}% incest.`)
            .setFooter("Created by srsklrboii#5784")
            .setColor("RANDOM")
        message.channel.send(incestembed).catch(e => {
            console.error(e)
        })
        break;

        case "waifurate":
        var waifumember = message.mentions.users.first()
        if (!waifumember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Waifu Rate")
                .addField("Waifu rate below :shrug:", `You are ${waifurater[Math.floor(Math.random() * waifurater.length)]}/100 waifu.`)
                .setFooter("Created by srsklrboii#5784")
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                console.error(e)
            })
            return
        }
        var waifuembed = new Discord.RichEmbed()
            .setAuthor("Waifu Rate")
            .addField("Waifu rate below :shrug:", `${waifumember.username} is ${waifurater[Math.floor(Math.random() * waifurater.length)]}/100 waifu.`)
            .setFooter("Created by srsklrboii#5784")
            .setColor("RANDOM")
        message.channel.send(waifuembed).catch(e => {
            console.error(e)
        })
        break;

        case "dankrate":
        var dankmember = message.mentions.users.first()
        if (!dankmember) {
            var embed = new Discord.RichEmbed()
                .setAuthor("Dank Rate")
                .addField("Dank rate below", `You are ${dankrate[Math.floor(Math.random() * dankrate.length)]}% dank.`)
                .setFooter("Created by srsklrboii#5784")
                .setColor("RANDOM")
            message.channel.send(embed).catch(e => {
                console.error(e)
            })
            return
        }
        var dankembed = new Discord.RichEmbed()
            .setAuthor("Dank Rate")
            .addField("Dank rate below", `${dankmember.username} is ${dankrate[Math.floor(Math.random() * dankrate.length)]}% dank.`)
            .setFooter("Created by srsklrboii#5784")
            .setColor("RANDOM")
        message.channel.send(dankembed).catch(e => {
            console.error(e)
        })
        break;

        case "shoot":
        var shootmember = message.mentions.users.first()
        if (!shootmember) return message.channel.send("You need to mention a person you want to shoot!")
        message.channel.send(`${message.author}, you just shot **${shootmember.username}**! :gun: :scream:`)
        break;

        case "stab":
        var stabmember = message.mentions.users.first()
        if (!stabmember) return message.channel.send("You need to mention a person you want to stab!")
        message.channel.send(`${message.author}, you just stabbed **${stabmember.username}**! :knife: :dagger: :scream:`)
        break;

        case "punch":
        var punchmember = message.mentions.users.first()
        if (!punchmember) return message.channel.send("You need to mention a person you want to punch!")
        message.channel.send(`${message.author}, you just punched **${punchmember.username}**! :punch: :scream:`)
        break;

        case "roast":
        var roastmember = message.mentions.users.first()
        if (!roastmember) return message.channel.send("You need to mention a person you want to roast!")
        message.channel.send(`A roast was sent to **${roastmember.username}**!`)
        roastmember.send(`You received a roast from **${message.author.username}**:`)
        roastmember.send(roasts[Math.floor(Math.random() * roasts.length)])
        break;

        case "nsfwcheck":
        if (!message.channel.nsfw) return message.channel.send("This channel isn't nsfw :cry:")
        message.channel.send("This channel is nsfw! :smirk:")
        break;

        case "bomb":
        var bombmember = message.mentions.users.first()
        if (!bombmember) return message.channel.send("You need to mention a person you want to bomb!")
        message.channel.send(`${message.author}, you just bombd **${bombmember.username}**! :bomb: :scream:`)
        break;

        case "annihilate":
        var annihilatemember = message.mentions.users.first()
        if (!annihilatemember) return message.channel.send("You need to mention someone you want to annihilate!")
        message.channel.send(`${message.author}, you just annihilated **${annihilatemember.username}**! :gun: :knife: :dagger: :punch: :bomb: :scream:`)
        break;

        default:
            message.channel.send("This command doesn't exist!");
        break;
    };
})
bot.login(env.TOKEN)

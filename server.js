const dbd = require("dbd.js")
const fs = require("fs")
const bot = new dbd.Bot({
token: (process.env.TOKEN), 
prefix: "~",
})

bot.status({
      text: "~help",
      type: "STREAMING",
      time: 12
})
bot.onMessage()
bot.loadCommands(`./commands/`)

//commands
bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})
 
bot.command({
 name: "$alwaysExecute",
 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})

bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]` 
})

//bot variables
bot.variables({
   rch: "",
 rmsg: "congrats {username}🎊, you've just advanced to level {level} :D",
 lvl: "0",
 exp: "0",
 rexp: "40",
 rsystem: "0"
})
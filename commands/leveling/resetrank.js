module.exports = {
   name: "resetrank",
 usage: "resetrank",
 description: "resets the levelup channel",
 code: `$description[rank channel has been reseted and is now set up to <#$mentionedChannels[1;yes]>]
$color[#2f3136]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:woops ! leveling system is __disabled__ on this server D:}{color:#2f3136}]
$onlyBotPerms[mentioneveryone;{description:looks liked i dont have the \`MENTION_EVERYONE\` permission}{color:#2f3136}]
$onlyPerms[manageserver;{description:woops , you need the \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;chill , please wait **%time%** !]`
}
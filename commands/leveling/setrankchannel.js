module.exports = {
   name: "setrankchannel",
 usage: "setrankchannel <channel>",
 description: "sets the levelup channel",
 code: `$description[rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[#2f3136]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:looks like i dont have permission :( \`MENTION_EVERYONE\`}{color:#2f3136}]
$onlyPerms[manageserver;{description:you are needed the \`MANAGE_SERVER\` permission !}{color:#2f3136}]
$cooldown[5s;woops , please wait **%time%** !]`
}
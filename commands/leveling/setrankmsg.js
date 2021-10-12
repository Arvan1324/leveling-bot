module.exports = {
   name: "setrankmsg",
 usage: "setrankmsg <message>",
 description: "sets the message for the leveled up message",
 code: `$description[you've setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;feeling kinda lazy? dont worry, we've already setted a message and a variable:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:woops , i need the \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\` permission}{color:ff2050}]
$onlyPerms[manageserver;{description:you are needed the \`MANAGE_SERVER\` permission}{color:#2f3136}]
$cooldown[5s;woops , please wait **%time%** !]`
}
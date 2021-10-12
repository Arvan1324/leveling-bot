module.exports = {
   name: "rank",
 aliases: ["level"],
 usage: "rank (user)",
 description: "inserts the user's current level and exp",
 code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://data.whicdn.com/images/3749962/original.png&xpcolor=ffffff&isboosting=true]
$color[#2f3136]
$onlyIf[$getServerVar[rsystem]>=1;{description:oh no, leveling system is __disabled__ D:}{color:#2f3136}]
$cooldown[5s;]`
}

require('dotenv').config();
const firstMessage = require('./first-message')

module.exports = client => {
  const channelId = process.env.CHANNEL_ID;

  const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)

  const emojis = {
    Attending: 'Attending',
    no: 'no',
  }

  const reactions = [];

  let emojiText = 'Add a reaction to claim a role\n\n';
  for (const key in emojis){

    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key];
    emojiText += `${emoji} = ${role}\n`
  }

  firstMessage(client, channelId, emojiText, reactions)


  const handleReaction = (reaction, user, add) => {
    if (user.id === process.env.BOT_ID){
      return
    }
    console.log(reaction);
    const emoji = reaction._emoji.name
    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find(role => role.name === roleName)
    const member = guild.members.cache.find(member => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      members.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    console.log('add')
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    console.log('remove')
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}
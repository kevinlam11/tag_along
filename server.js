const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const path = require('path');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const roleClaim = require('./utils/role-claim.js')
// const { Client, Intents, CommandInteractionOptionResolver } = require('discord.js');
require('dotenv').config(); //initialize dotenv

const app = express();
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// const client = new Client({
//   intents: [
//     Intents.FLAGS.GUILDS,
//     Intents.FLAGS.GUILD_MEMBERS,
//     Intents.FLAGS.GUILD_BANS,
//     Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
//     Intents.FLAGS.GUILD_INTEGRATIONS,
//     Intents.FLAGS.GUILD_WEBHOOKS,
//     Intents.FLAGS.GUILD_INVITES,
//     Intents.FLAGS.GUILD_VOICE_STATES,
//     Intents.FLAGS.GUILD_MESSAGES,
//     Intents.FLAGS.GUILD_PRESENCES,
//     Intents.FLAGS.GUILD_MESSAGES,
//     Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
//     Intents.FLAGS.GUILD_MESSAGE_TYPING,
//     Intents.FLAGS.DIRECT_MESSAGES,
//     Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
//     Intents.FLAGS.DIRECT_MESSAGE_TYPING,
//     Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
//   ],
// });

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);

//   const guildId = '960969855538974730';
//   const guild = client.guilds.cache.get(guildId);

//   let commands;
//   if (guild) {
//     commands = guild.commands;
//   } else {
//     commands = client.application.commands;
//   }

//   commands.create({
//     name: 'ping',
//     description: 'replies with pong',
//   });
//   roleClaim(client);
// });

// client.on('interactionCreate', async (interaction) => {
//   if (!interaction.isCommand()) {
//     return;
//   }

//   const { commandName, options } = interaction;

//   if (commandName === 'ping') {
//     interaction.reply({
//       content: 'pong',
//       ephemeral: true,
//     });
//   }
// });

//make sure this line is the last line
// client.login(process.env.CLIENT_TOKEN); //login bot using token

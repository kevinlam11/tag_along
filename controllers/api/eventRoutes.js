const router = require('express').Router();
const { Event } = require('../../models');
const { DateTime } = require('luxon');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
(async () => {
  await client.login(process.env.CLIENT_TOKEN);
})();

// Get all Events
router.get('/', async (req, res) => {
  try {
    const eventData = await Event.findAll({ sort: [day_and_time, descending] });
    // const eventData = await Event.findAll();
    // console.log(eventData);
    res.json(eventData);
  } catch (err) {
    res.json(err);
  }
});

// Get event by id
router.get('/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);
    res.json(eventData);
  } catch (err) {
    res.json(err);
  }
});

// Create new event
router.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create({
      title: req.body.title,
      description: req.body.description,
      day_and_time: req.body.day_and_time,
    });
    const thing = await client.channels.fetch('963429654570623056');
    const dateInstance =  DateTime.fromISO(req.body.day_and_time);
    const formatted = dateInstance.toLocaleString(DateTime.DATETIME_MED);
    console.log('THING', thing);
    thing.send(`${req.body.title}\n${req.body.description}\n${formatted}`);
    res.status(200).json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Update an event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedEvent);
  } catch (err) {
    res.json(err);
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

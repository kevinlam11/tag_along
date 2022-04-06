const router = require('express').Router();
const { Event } = require('../../models');

// Get all Events
router.get('/', async (req, res) => {
  try {
    const eventData = await Event.findAll();
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
    const newEvent = await Event.create(req.body);

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update an event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.update(req.body, {
      where: {
        id: req.params.id,
      }
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

const router = require('express').Router();
const { User, Event } = require('../models');

router.get('/', async (req, res) => {
  const eventData = await Event.findAll({
    include: [User],
  });

  const events = eventData.map((event) => {
    return event.get({ plain: true });
  });
  console.log(events);

  res.render('all', { events });
});

module.exports = router;

const router = require('express').Router();
const { User, Event } = require('../models');

// Sign Up
router.get('/signup', (req, res) => {
  // Render handlebars sign up page.
  res.render('signup');
});

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

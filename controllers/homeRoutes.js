const router = require('express').Router();
const { User, Event } = require('../models');

// login
router.get('/login', async (req, res) => {
  // render login
  res.render('login');
});

// Sign Up
router.get('/signup', async (req, res) => {
  // Render handlebars sign up page.
  res.render('signup');
});

// // dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);
    const user = userData.get({ plain: true });
    res.render('dash', { user });
  } catch (err) {
    console.log(err);
  }
  // render login
});

// Add Events
router.get('/newevent', async (req, res) => {
  // Render handlebars add events page.
  res.render('newevent');
});

// View All Events
router.get('/events', async (req, res) => {
  // Render handlebars view events page.
  res.render('events');
});

router.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  }
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

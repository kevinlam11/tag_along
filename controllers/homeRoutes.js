const router = require('express').Router();
const { User, Event } = require('../models');
const { format_time, format_date } = require('../utils/helpers');

// Login
router.get('/login', async (req, res) => {
  // render login
  res.render('login', { loggedIn: req.session.loggedIn });
});

// Sign Up
router.get('/signup', async (req, res) => {
  // Render handlebars sign up page.
  res.render('signup', { loggedIn: req.session.loggedIn });
});

// Dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);
    const user = userData ? userData.get({ plain: true }) : null;
    // Only if there is user data events will render to the page.
    if (userData) {
      // Render events to dashboard
      const eventData = await Event.findAll({
        include: [User],
        order: [['day_and_time', 'ASC']],
      });
      const events = eventData.map((event) => {
        return event.get({ plain: true });
      });
      events.forEach((event) => {
        event.format_time = format_time(event.day_and_time);
        event.format_date = format_date(event.day_and_time);
      });

      res.render('dash', { user, events, loggedIn: req.session.loggedIn });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    res.redirect('/dashboard');
  }
});

module.exports = router;

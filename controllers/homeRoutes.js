const router = require('express').Router();
const { User, Event } = require('../models');

// Login
router.get('/login', async (req, res) => {
  // render login
  res.render('login');
});

// Sign Up
router.get('/signup', async (req, res) => {
  // Render handlebars sign up page.
  res.render('signup');
});

// Dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);
    const user = userData.get({ plain: true });
    // Only if there is user data events will render to the page.
    if(userData) {
      // Render events to dashboard
      const eventData = await Event.findAll({
        include: [User],
      });
      const events = eventData.map((event) => {
        return event.get({ plain: true });
      });
  
      res.render('dash', { user, events });
      
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  }
});

module.exports = router;

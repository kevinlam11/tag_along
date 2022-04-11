const router = require('express').Router();
// const { User } = require('../models');

// If not logged in, redirect to login page
router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  // else go to dashboard page.
  return res.redirect('/dashboard', { posts });
});

module.exports = router;

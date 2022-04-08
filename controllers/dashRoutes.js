const router = require('express').Router();
// const { User } = require('../models');

router.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect('/login');
  }

  return res.redirect('/dashboard', { posts });
});

module.exports = router;

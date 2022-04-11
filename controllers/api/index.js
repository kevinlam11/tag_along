const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');

// router.use("/images", express.static(path.join(__dirname, "/public/images")));
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;

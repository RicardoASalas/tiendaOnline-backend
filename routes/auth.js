var express = require('express');
const {
  authorizationMiddleware,
} = require('../middlewares/auth');

var router = express.Router();
const {
  registerController,
  loginController,
  logoutController,
} = require('../controllers/auth.js');

/* GET users listing. */

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/logout', authorizationMiddleware, logoutController);

module.exports = router;

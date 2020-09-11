const express = require('express');
const userController = require('../controllers/user.controller');

const app = express();
const router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

module.exports = router;

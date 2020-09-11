const express = require('express');
const appController = require('../controllers/app.controller');
const verifyToken = require('../middlewares/auth.middleware')

const app = express();
const router = express.Router();

router.post('/getUser', verifyToken, appController.getUser);
router.post('/editUser', verifyToken, appController.editUser);
router.get('/testAuth', verifyToken, appController.testAuth);

module.exports = router;

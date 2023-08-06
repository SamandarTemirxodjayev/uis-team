const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);
router.post('/', userController.AddEmail);
router.get('/contact', userController.contact);
router.post('/contact', userController.contactPost);
router.get('/about', userController.about);

module.exports = router;
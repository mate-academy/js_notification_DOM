const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHome);
router.get('/api/status', homeController.getStatus);
router.get('/api/projects', homeController.getProjects);
router.get('/api/skills', homeController.getSkills);

module.exports = router;

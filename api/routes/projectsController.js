const express = require('express');
const router = express.Router();

const projects = require('../apiData/projectsData.json');

router.get('/', (req,res) => {
    res.json(projects);
});

module.exports = router;
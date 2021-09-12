const express = require('express');
const cors = require('cors');
const Config = require('./config/config');

const emailController = require('./routes/emailController');
const projectsController = require('./routes/projectsController');
const studiesController = require('./routes/studiesController');
const experienceController = require('./routes/experienceController');

const { port } = Config;

const app = express();

app.use(cors());

app.use(express.json());


app.use("/", express.static('public'));
app.use('/email', emailController);
app.use('/projects', projectsController);
app.use('/studies', studiesController);
app.use('/experience', experienceController);
app.use('*', express.static('public'));

app.listen(port, () => console.log("Listening on port " + port));
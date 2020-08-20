//Server
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require ("./pages");

const nunjucks = require ('nunjucks');

//Nunjucks configuration (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

//Server star and configuration
server
//Receive data from req.body
.use(express.urlencoded({ extended: true }))
//Configuring static files (CSS, scripts, images)
.use(express.static("public"))
//Application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start server
.listen(5500);
const express = require("express");
const cors = require('cors');
const app = express();
const { failedStatus, errorStatus, failureCode } = require("./helpers");
const path = require('path');

require("dotenv").config();
const port = process.env.PORT || 4000;
const passport = require('passport');
const Response = require('./helpers/ResponseClass');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize())



const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/index')

// general error handling
app.use((err, req, res, next) => {
    if (err) {
        const response = new Response(failedStatus, errorStatus, failureCode, "An error occured");
        return res.status(500).send(response)
    }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
});

// serve static frontend app
app.use(express.static(path.resolve(__dirname, '../ui/build')));

// import routes
const authRoutes = require('./routes/Auth');
const postRoutes = require('./routes/Post');
const userRoutes = require('./routes/User');

// use routes
app.use('/auth', authRoutes)
app.use('/post', postRoutes)
app.use('/user', userRoutes)

app.get("/swagger", (req, res) => {
    return res.redirect("/api-docs")
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../ui/build', 'index.html'));
  });

app.listen(port, () => {
    console.log(`App is running on http://${process.env.IP}:${port}`)
})
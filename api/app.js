const express = require("express");
const cors = require('cors');
const app = express();
const { failedStatus, errorStatus, failureCode } = require("./helpers");

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
        console.log(err)
        const response = new Response(failedStatus, errorStatus, failureCode, "An error occured");
        return res.status(500).send(response)
    }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
});

// import routes
const authRoutes = require('./routes/Auth');
const postRoutes = require('./routes/Post');

// use routes
app.use('/auth', authRoutes)
app.use('/post', postRoutes)

app.get("*", (req, res) => {
    return res.redirect("/api-docs")
})

app.listen(port, () => {
    console.log(`App is running on http://${process.env.IP}:${port}`)
})
const express = require("express");
const { failedStatus, errorStatus, failureCode } = require("./helpers");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;
const Response = require('./helpers/ResponseClass');

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

app.get("*", (req, res) => {
    return res.redirect("/api-docs")
})

app.listen(port, () => {
    console.log(`App is running on http://${process.env.IP}:${port}`)
})
const express = require("express");
const { failedStatus, errorStatus, failureCode } = require("./helpers");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;
const Response = require('./helpers/ResponseClass');


// general error handling
app.use((err, req, res, next) => {
    if (err) {
        let response = new Response(failedStatus, errorStatus, failureCode, "An error occured")
        return res.status(500).send(response)
    }
});

app.get('/', (req, res) => {
    return res.send("running")
})
app.listen(port, () => {
    console.log(`App is running on http://${process.env.IP}:${port}`)
})
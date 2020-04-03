const express = require("express");
const app = express();
const fs = require('fs');

const port = 8000;

// Setup path used for mocking REST API calls
app.get("/:path", (req, res) => {
    let path = req.params.path;
    let file = `${path}.json`;
    let filePath = `${__dirname}/responses/${file}`;
    let response = require(filePath);

    res.json(response);
});

// Start server on port
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
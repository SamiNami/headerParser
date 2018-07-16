const express = require('express');

const app = express();

app.get('/api/whoami', (req, res) => {
    const ipaddress =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    res.json({
        ipaddress,
        language,
        software
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

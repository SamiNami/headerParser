const express = require('express');

const app = express();

app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    res.json({
        ipaddress: ip,
        language: 'en-US,en;q=0.5',
        software:
            'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0'
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

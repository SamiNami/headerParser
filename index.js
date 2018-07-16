const express = require('express');

const app = express();

// if not timestamp is provided use the time of right now
app.get('/api/whoami', (req, res) => {
    const date = new Date();
    console.log(req.headers);
    res.json({
        ipaddress: req.connection.remoteAddress,
        language: 'en-US,en;q=0.5',
        software:
            'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0'
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

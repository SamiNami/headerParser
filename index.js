const express = require('express');

const app = express();
const requestIp = require('request-ip');

// middleware to hanlde request IP
app.use(requestIp.mw());
// app.use((req, res) => {
//     const ip = req.clientIp;
//     res.end(ip);
// });
// if not timestamp is provided use the time of right now
app.get('/api/whoami', (req, res) => {
    var ip = req.clientIp;
    console.log(ip);

    res.json({
        ipaddress: req.ip,
        language: 'en-US,en;q=0.5',
        software:
            'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0'
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

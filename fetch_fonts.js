const https = require('https');
https.get('https://www.novactech.in', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/family=([^&"']+)/g);
        console.log("Fonts found:", matches);
    });
}).on('error', err => console.log(err));

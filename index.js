const fs = require('fs');
const http = require('http');
var requests = require('requests');

const homeFile = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');

const replaceVal = (tempValu, orgValu) => {
    let tempreture = tempValu.replace('{#tempValu#}', orgValu.main.temp);
    tempreture = tempreture.replace('{#location#}', orgValu.name);
    tempreture = tempreture.replace('{#country#}', orgValu.sys.country);
    tempreture = tempreture.replace('{#minTemp#}', orgValu.main.temp_min);
    tempreture = tempreture.replace('{#maxTemp#}', orgValu.main.temp_max);
    tempreture = tempreture.replace('{#tempStatus#}', orgValu.weather[0].main);
    return tempreture;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=ad72c3b81aa17339ebcbea49660b3388")
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                const realtimeData = arrData.map((val) => replaceVal(homeFile, val)).join('');
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(realtimeData);
                console.log(realtimeData);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
            });
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening from server');
});
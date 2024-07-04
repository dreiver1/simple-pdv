import app from "./app";
import https from 'https'
import fs from 'fs'

const options = {
    key: fs.readFileSync('cert/localhost+2-key.pem'),
    cert: fs.readFileSync('cert/localhost+2.pem')
  };

https.createServer(options, app).listen(3000, () => {
    console.log('server is running at https://127.0.0.1:3000/')
});

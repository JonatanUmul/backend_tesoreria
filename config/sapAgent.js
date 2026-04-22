import fs from 'fs';
import https from 'https';

const httpsAgent= new https.Agent({
    rejectUnauthorized: true,
    ca: fs.readFileSync('./certs/sap_cert.pem'),
})

export default httpsAgent;
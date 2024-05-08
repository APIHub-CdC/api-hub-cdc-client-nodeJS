const https = require('https');
const config = require('../../config/config')

class ApiRequest {

    static peticionHtpp(response, apiKey, username, password, hostname, path) {

        const options = {
            hostname: hostname,
            path: path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'x-signature': response.headers['x-signature'],
                'username': username,
                'password': password
            }
        };
        const postData = response.body;


        const req = https.request(options, (res) => {
            let data = '';

            // Recibir los datos en chunks
            res.on('data', (chunk) => {
                data += chunk;
            });

            // Una vez que se recibe toda la respuesta
            return res.on('end', async () => {
                console.log('TEST', data);
                return await data// Aquí puedes hacer lo que quieras con los datos recibidos
            });
        });

        // Manejar errores
        req.on('error', (error) => {
            console.error(error);
        });
        // Enviar el cuerpo de la solicitud
        req.write(postData);

        // Finalizar la solicitud
        req.end();
    }
}

module.exports = ApiRequest;

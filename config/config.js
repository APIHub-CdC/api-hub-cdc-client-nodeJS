const fs = require('fs');
const path = require('path');


// Objeto para almacenar las variables de configuración
let enveiroments = {};
// Función para cargar las variables de configuración
function loadProperties() {
    console.log("inicia loadProperties...");

    const filePath = path.join('./', 'config.properties');
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const configArray = fileContent.split('\n');

        configArray.forEach(line => {
            const [key, value] = line.split('=');
            enveiroments[key] = value;
        });
        //console.log(JSON.stringify(config, null, 4));
        //  console.log((JSON.stringify(fileContent, null, 4)));

        enveiroments = JSON.parse(JSON.stringify(enveiroments, null, 4));
        //console.log(config)
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

// Llama a la función para cargar las variables de configuración al inicializar el módulo
loadProperties();

// Exporta un objeto con las variables de configuración
module.exports = enveiroments;


const fs = require('fs');
const crypto = require('crypto');
const config = require("../../config/config")

class Signer {
    constructor() {
        this.logger = console;
        this.privateKey = null;
        this.publicKey = null;
        //this.prop = this.loadProperties();
        this.loadKeys();
    }

    static getInstance() {


        if (!Signer.instance) {
            Signer.instance = new Signer();
        }
        return Signer.instance;
    }

    loadKeys() {
        this.logger.info("inicia loadKeys...");

        try {
            this.privateKey = this.readPrivateKeyFromKeystore();
            this.publicKey = this.readPublicCDC();
        } catch (error) {
            this.logger.error(error.message);
            process.exit(1);
        }
    }

    readPrivateKeyFromKeystore() {
        this.logger.info("inicia readPrivateKeyFromKeystore...");
        //this.logger.info("" + this.prop.keystore_file);
        // Obtiene la clave privada del archivo .p12
        const privateKey = readPrivateKey(config.keystore_file, config.key_password);
        if (privateKey) {
            console.log('Clave privada obtenida');
            return privateKey;
        } else {
            console.log('No se pudo obtener la clave privada.');
            return privateKey;
        }
    }

    readPublicCDC() {
        this.logger.info("inicia readPublicCDC...");
        let pubKey = null;
        try {
            // Lee el contenido del archivo PEM
            const pemData = fs.readFileSync(config.cdc_cert_file, 'utf8');
            // Parsea el contenido PEM
            const publicKey = crypto.createPublicKey(pemData);
            //console.log('Clave pública obtenida:', publicKey.export({type: 'spki', format: 'pem'}));
            return publicKey.export({type: 'spki', format: 'pem'});
        } catch (error) {
            console.error('Error al leer el archivo PEM:', error.message);
            return null;
        }
    }

    signPayload(payload) {
        try {

            // Crear un objeto de firma utilizando la clave privada
            const sign = crypto.createSign('sha256');
            sign.update(payload);
            // Firmar los datos utilizando la clave privada
            const signature = sign.sign(this.privateKey, 'hex');
            // // Convierte la clave privada a formato CryptoJS SHA256withECDSA
            // const privateKey = CryptoJS.SHA256(this.privateKey);
            // // Firma los datos utilizando la clave privada
            // const signature = CryptoJS.HmacSHA256(payload, privateKey).toString(CryptoJS.enc.SHA256withECDSA);
            console.log("Signature:", signature);
            return signature;
        } catch (error) {
            this.logger.error(error.message);
            process.exit(1);
        }
    }

    verifyPayload(payload, signature) {

        try {
            // Datos originales
            const originalData = payload;
            //console.log(payload)
            // Firma recibida
            const signatureReceived = signature; // Aquí debes colocar la firma recibida que deseas verificar
            // Crear un objeto de verificación utilizando la clave pública
            const verify = crypto.createVerify('sha256');
            verify.update(originalData);
            // Verificar la firma utilizando la clave pública
            const isVerified = verify.verify(this.publicKey, signatureReceived, 'hex');

            if (isVerified) {
                console.log('La firma es válida.');
                return isVerified;
            } else {
                console.log('La firma no es válida.');
                return isVerified;
            }
        } catch (error) {
            console.error('Error al verificar la firma:', error);
            return false;
        }
    }
}
function readPrivateKey(filePath) {

    try {
        // Lee la clave privada desde un archivo PEM
        const privateKeyPEM = fs.readFileSync(filePath, "utf8");

        return privateKeyPEM;
    } catch (error) {
        console.error('Error al leer el archivo PEM:', error.message);
        return null;
    }
}

module.exports = Signer;

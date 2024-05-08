const fetch = require('node-fetch');
var KJUR = require('jsrsasign');
var express = require('express');
const config = require('../../config/config');
const ApiRequest = require("../apiRequest/ApiRequest");
const Signer = require('./Signer')

class SignerInterceptorBasic {
    constructor() {
        // Constructor de la clase
    }

    static async main(request, privKey, apiKey, username, password, hostname, path) {

        this.signer = Signer.getInstance();
        // Crear un UUID
        let uuid = SignerInterceptorBasic.createUUID();
        // Realizar la solicitud HTTP para obtener la biblioteca jsrsasign
        let jsrsasign = await this.getJsrsasignLibrary();
        // Ejecutar la función doHttpSig
        return await this.doHttpSig(jsrsasign, uuid,request, privKey,  apiKey, username, password, hostname, path)
    }

    static createUUID() {
        let dt = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    static async getJsrsasignLibrary() {
        let response = await fetch("https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/8.0.12/jsrsasign-all-min.js");
        if (response.ok) {
            return await response.text();
        } else {
            throw new Error("Error al obtener la biblioteca jsrsasign");
        }
    }
    static async doHttpSig(jsrsasign, uuid, request, privKey, apiKey, username, password, hostname, path) {
        console.log('doHttpSig')
        // Crear un objeto de firma
        let sig = new KJUR.crypto.Signature({"alg": "SHA256withECDSA", "prov": "cryptojs/jsrsa"});
        sig.init({
            d: privKey,
            curve: "secp384r1"
        });

        // Reemplazar el UUID en los datos a firmar
        let singnatureData = request;
        let newRequest = singnatureData.replace("{{uuid}}", uuid);
        sig.updateString(newRequest);

        // Firmar los datos
        let signature =  sig.sign();
        console.log(signature);
         newRequest = {
            body: newRequest,
            headers: {
                "x-signature": signature
            },
            code : 200
        };

        if (newRequest.code === 200) {
            if (this.signer.verifyPayload(newRequest.body, signature)) {
                console.log("Verificación satisfactoria");
                return  ApiRequest.peticionHtpp(newRequest, apiKey, username, password, hostname, path);
            } else {
                this.logger.error("No se pudo verificar la firma");
            }
        } else if (signature === null) {
            return this.buildResponseBody(500, "No se recibió la firma", response, contentType, null);
        } else {
            return this.buildResponseBody(response.code(), null, response, contentType, content);
        }
        return   signer;
    }

}
module.exports = SignerInterceptorBasic;
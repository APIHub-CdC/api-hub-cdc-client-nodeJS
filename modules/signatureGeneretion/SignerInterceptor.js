const { Buffer } = require('buffer');
const Signer = require('./Signer')
const ApiRequest = require('../apiRequest/ApiRequest');
const SignerInterceptorBasic = require('./SignerInterceptorBasic')
class SignerInterceptor {
    constructor() {
        this.logger = console;
        this.newRequest = null;
    }

    static intercept(originalRequest) {
        console.log("inicia intercept...");

        this.signer = Signer.getInstance();
        let uuid = SignerInterceptorBasic.createUUID();
        originalRequest = originalRequest.replace("{{uuid}}", uuid);
        //const originalRequest = chain.request();
        return this.newRequest = this.procesarFirmado(originalRequest);

    }

    bodyToString(request) {
        try {
            const copy = request.newBuilder().build();
            const buffer = new Buffer();
            copy.body().writeTo(buffer);
            return buffer.toString('utf8');
        } catch (error) {
            return null;
        }
    }

    static procesarFirmado(originalRequest) {
        console.log("Generando firmado...");
        // const payload = this.bodyToString(originalRequest);
        const signature = this.signer.signPayload(originalRequest);
        if (signature === null) {
            console.log("Could not sign the payload");
            process.exit(1);
        }
        //console.log("Firma: " + signature);
        const newRequest = {
            body: originalRequest,
            headers: {
                "x-signature": signature
            },
            code : 200
        };

        return newRequest;
    }
    static procesarVerificado(response, apiKey, username, password, hostname, path) {
        console.log("Verificando firmado...");
        let bodyAsStream = null;
        let outResponse = null;
        let contentType = null;
        let signature = null;
        let payload = null;
        let content = null;
        try {
            console.log("Payload recibido");
            contentType = response.body;

            const values = response.headers['x-signature'];
            signature = values;
        } catch (error) {
            if (error instanceof IndexOutOfBoundsException) {
                console.log("No se pudo recuperar la firma");
            } else {
                console.log("Error inesperado");
                console.log(error.message);
            }
        } finally {
            if (bodyAsStream !== null) {
                bodyAsStream.close();
            }
        }
        if (response.code === 200) {
            if (this.signer.verifyPayload(contentType, signature)) {
                console.log("Verificación satisfactoria");
                return  ApiRequest.peticionHtpp(response, apiKey, username, password, hostname, path);
            } else {
                console.log("No se pudo verificar la firma");
            }
        } else if (signature === null) {
            outResponse = this.buildResponseBody(500, "No se recibió la firma", response, contentType, null);
        } else {
            outResponse = this.buildResponseBody(response.code(), null, response, contentType, content);
        }
    }

    generateError(code, message) {
        console.log("Generando error");
        const errs = new Errors();
        const err = new Error();
        err.setCode(code);
        err.setMessage(message);
        errs.addErrorsItem(err);

        const gson = new Gson();

        return gson.toJson(errs);
    }

    buildResponseBody(statusCode, message, response, contentType, content) {
        let responseBody = null;
        const responseMessage = HttpStatus.getStatusText(statusCode);
        if (message !== null) {
            responseBody = ResponseBody.create(contentType, this.generateError(String.valueOf(statusCode), message));
        } else {
            responseBody = ResponseBody.create(contentType, content);
        }
        const newResponse = new Builder()
            .code(statusCode)
            .protocol(Protocol.HTTP_1_1)
            .message(responseMessage)
            .request(this.newRequest)
            .body(responseBody)
            .headers(response.headers())
            .build();

        return newResponse;
    }


}
module.exports = SignerInterceptor;

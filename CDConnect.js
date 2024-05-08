const SignerInterceptorBasic = require("./modules/signatureGeneretion/SignerInterceptorBasic");
const SignerInterceptor = require("./modules/signatureGeneretion/SignerInterceptor");
const config = require("./config/config");
const ApiRequest = require("./modules/apiRequest/ApiRequest");
const configurationFile = require("./modules/configuration/configurationFile")

/*
    REQUEST O BODY A MANDAR A NUESTRA API
    PRIVKEY SE CONFIGURA EN EL ARCHIVO config.properties en la carperta config
    APIKEY SE CONFIGURA EN EL ARCHIVO config.properties en la carperta config
    USERNAME SE CONFIGURA EN EL ARCHIVO config.properties en la carperta config
    PASSWORD SE CONFIGURA EN EL ARCHIVO config.properties en la carperta config
    HOSTNAME SE CONFIGURA EN EL ARCHIVO configurationFile.js en la carpeta modules/configuration
    PATH SE CONFIGURA EN EL ARCHIVO configurationFile.js en la carpeta modules/configuration
 */
var REQUEST = 'Esto es un mensaje de prueba'.toString();
var PRIVKEY = config.PRIV_KEY;
var APIKEY = config.API_KEY;
var USERNAME =  config.USERNAME;
var PASSWORD = config.PASSWORD;
var HOSTNAME = configurationFile.apihub[0]["securityTest"]["hostName"];
var PATH = configurationFile.apihub[0]["securityTest"].endpoints[0]["postSecurity"];
/*
SELECCIONE EL QUE TIPO DE CIFRADO REQUIERE , POR ARCHIVOS .CER O CON LA LLAVE PRIVADA

   TIPO DE CIFRADO POR LLAVE PRIVADA
 */
var resp = SignerInterceptorBasic.main(REQUEST, PRIVKEY, APIKEY, USERNAME, PASSWORD, HOSTNAME, PATH);

// TIPO DE CIFRADO POR ARCHIVOS DE CERTIFICADOS

var requestBody =  SignerInterceptor.intercept(REQUEST);
var response = SignerInterceptor.procesarVerificado(requestBody, APIKEY, USERNAME, PASSWORD, HOSTNAME, PATH);

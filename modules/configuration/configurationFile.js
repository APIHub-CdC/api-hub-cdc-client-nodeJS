


/*
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
APIS                                                                            |                   URL Endpoint                                                                                               |             URL Documentacion
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Auditoria de firmas                                                             |                           https://services.circulodecredito.com.mx/v1/auth-nip/                                              |                      https://developer.circulodecredito.com.mx/producto/auditoria-de-firmas-simulacion
* *****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
API SAT Personas Morales                                                        |                           https://services.circulodecredito.com.mx/v1/sat/login                                              |
                                                                                |                           https://services.circulodecredito.com.mx/v1/sat/taxpayers/{{rfc}}/invoices                         |
                                                                                |                           https://services.circulodecredito.com.mx/v1/sat/taxpayers/{{rfc}}/tax-returns                      |
                                                                                |                           https://services.circulodecredito.com.mx/v1/sat/tax-returns/{{rfc}}/data                           |
                                                                                |                           https://services.circulodecredito.com.mx/v1/sat/taxpayers/{{rfc}}/tax-compliance-checks            |
                                                                                |                           https://services.circulodecredito.com.mx/v1/sat/taxpayers/{{rfc}}/tax-status                       |
                                                                                |                           https://services.circulodecredito.com.mx/v1/sat/rfc/validate/{{rfc}}                               |                       https://developer.circulodecredito.com.mx/producto/sat-pm
 *****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Bank Account Verification                                                       |                          https://services.circulodecredito.com.mx/v1/bavs/accountValidator/{inquiryId}                       |
                                                                                |                          https://services.circulodecredito.com.mx/v1/bavs/accountValidator                                   |                       https://developer.circulodecredito.com.mx/producto/bavs
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Employment Verification                                                         |                          https://services.circulodecredito.com.mx/v1/eva/employmentverifications/{inquiryId}                 |
                                                                                |                          https://services.circulodecredito.com.mx/v1/eva/employmentverifications/withPrivacyNotice           |
                                                                                |                          https://services.circulodecredito.com.mx/v2/eva/employmentverifications/withPrivacyNotice           |
                                                                                |                          https://services.circulodecredito.com.mx/v2/eva/employmentverifications/{inquiryId}"                |                       https://developer.circulodecredito.com.mx/producto/eva
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Extended Score                                                                  |                          https://services.circulodecredito.com.mx/v2/ficoextended                                            |                       https://developer.circulodecredito.com.mx/producto/extended-score
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Fico Score                                                                      |                          https://services.circulodecredito.com.mx/v2/ficoscore                                               |                       https://developer.circulodecredito.com.mx/producto/fico-score
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Financial Inclusion Score v1                                                    |                          https://services.circulodecredito.com.mx/v1/fis/persona                                             |                       https://developer.circulodecredito.com.mx/producto/financial-inclusion-score-v1
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Financial Inclusion Score v1.1                                                  |                          https://services.circulodecredito.com.mx/v1-1/fis/persona                                           |                       https://developer.circulodecredito.com.mx/producto/financial-inclusion-score-v1.1
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
FinTech Score                                                                   |                          https://services.circulodecredito.com.mx/v1/fintechscore
                                                                                                           https://services.circulodecredito.com.mx/folio                                                      |                       https://developer.circulodecredito.com.mx/producto/fintech-score
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
GuardIAn Fraud Score                                                            |                          https://services.circulodecredito.com.mx/v1/guardian-score                                          |                       https://developer.circulodecredito.com.mx/producto/guardian-fraud-score
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Loan Amount Estimator                                                           |                          https://services.circulodecredito.com.mx/v1/lae/persona
                                                                                                           https://services.circulodecredito.com.mx/v1/lae/folioConsulta                                       |                       https://developer.circulodecredito.com.mx/producto/loan-amount-estimator
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Open Banking                                                                    |                          https://services.circulodecredito.com.mx/bankdataaggregations/{inquiryId}                           |
                                                                                |                          https://services.circulodecredito.com.mx/bankdataaggregations                                       |
                                                                                |                          https://services.circulodecredito.com.mx/configurations                                             |
                                                                                |                          https://services.circulodecredito.com.mx/configurations/{subscriptionId}                            |                       https://services.circulodecredito.com.mx/v2/rcc
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
PLD Check® Personas Físicas                                                     |                          https://services.circulodecredito.com.mx/v2/pld                                                     |                       https://developer.circulodecredito.com.mx/producto/pld-checkr-personas-fisicas
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
PLD Check® Personas Morales                                                     |                          https://services.circulodecredito.com.mx/v1/pld-pm                                                  |                       https://developer.circulodecredito.com.mx/producto/pld-check-personas-morales
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito + FICO® Score Personas Físicas                               |                          https://services.circulodecredito.com.mx/v1/rcficoscore                                             |                       https://developer.circulodecredito.com.mx/producto/reporte-de-credito-ficor-score-personas-fisicas
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito Consolidado + FICO® Score Personas Físicas v1                |                          https://services.circulodecredito.com.mx/v1/rccficoscore                                            |                       https://developer.circulodecredito.com.mx/producto/v1/reporte-de-credito-consolidado-fico-score-personas-fisicas
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito Consolidado + FICO® Score Personas Físicas v2                |                          https://services.circulodecredito.com.mx/v2/rccficoscore                                            |                       https://developer.circulodecredito.com.mx/producto/v2/reporte-de-credito-consolidado-fico-score-personas-fisicas
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito Consolidado + FICO® Score y PLD Check® Personas Físicas      |                          https://services.circulodecredito.com.mx/v1/rcc-ficoscore-pld                                       |                       https://developer.circulodecredito.com.mx/producto/rcc_fico_score_pld_check_pf
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito Consolidado Personas Físicas v1                              |                          https://services.circulodecredito.com.mx/v1/rcc                                                     |                       https://developer.circulodecredito.com.mx/producto/v1/rcc_pf
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito Consolidado Personas Físicas v2                              |                          https://services.circulodecredito.com.mx/v2/rcc                                                     |                       https://developer.circulodecredito.com.mx/producto/v2/rcc_pf
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito Consolidado Personas Morales                                 |                          https://services.circulodecredito.com.mx/v1/rcc-pm                                                  |                       https://developer.circulodecredito.com.mx/producto/rcc_pm
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Reporte de Crédito de Personas Físicas                                          |                          https://services.circulodecredito.com.mx/v1/rc                                                      |                       https://developer.circulodecredito.com.mx/producto/reporte-de-credito-personas-fisicas
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Smart Collection Score                                                          |                          https://services.circulodecredito.com.mx/v1/smartcollection                                         |                       https://developer.circulodecredito.com.mx/producto/smart-collection-score
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Vant/Age                                                                        |                          https://services.circulodecredito.com.mx/v2/vantage/aportantes
                                                                                                           https://services.circulodecredito.com.mx/v2/vantage/noAportantes                                    |                       https://developer.circulodecredito.com.mx/producto/vantage
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
API Actualiza Datos Generales                                                   |                          https://services.circulodecredito.com.mx/v1/adg/por-cuenta                                          |                       https://developer.circulodecredito.com.mx/producto/actualiza-datos-generales
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Identity Data                                                                   |                          https://services.circulodecredito.com.mx/v1/identity-data/validations                               |                       https://developer.circulodecredito.com.mx/producto/identity-data-api
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Address Verification                                                            |                          https://services.circulodecredito.com.mx/address-verification/v1/verifications
                                                                                                           https://services.circulodecredito.com.mx/address-verification/v1/verifications/{requestId}          |                       https://developer.circulodecredito.com.mx/producto/address-verification
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

 */

const apiHub =
    [
        { "securityTest": {
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "postSecurity": "/v1/securitytest"
            }
            ],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/prueba-de-seguridad"
        }},
        {"auditoriaDeFirmas": {
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "auth-nip": "/v1/auth-nip"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/auditoria-de-firmas-simulacion"
        }},
        {"apiSatPersonasMorales" :{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "login": "/v1/sat/login",
                "invoices": "/v1/sat/taxpayers/{{rfc}}/invoices",
                "tax-returns":"/v1/sat/taxpayers/{{rfc}}/tax-returns",
                "data":"/v1/sat/tax-returns/{{rfc}}/data",
                "tax-compliance-checks":"/v1/sat/taxpayers/{{rfc}}/tax-compliance-checks",
                "tax-status":"/v1/sat/taxpayers/{{rfc}}/tax-status",
                "validate":"/v1/sat/rfc/validate/{{rfc}}"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/sat-pm"
        }},
        {"bankAccountVerification":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "accountValidatorByInquiryId": "/v1/bavs/accountValidator/{inquiryId}",
                "accountValidator": "/v1/bavs/accountValidator"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/bavs"
        }},
        {"employmentVerification":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "getV1Employmentverifications": "/v1/eva/employmentverifications/{inquiryId}",
                "postV1WithPrivacyNotice": "/v1/eva/employmentverifications/withPrivacyNotice",
                "getV2Employmentverifications": "/v2/eva/employmentverifications/{inquiryId}",
                "postV2WithPrivacyNotice": "/v2/eva/employmentverifications/withPrivacyNotice"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/eva"
        }},
        {"Extended Score":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "ficoextended": "/v2/ficoextended"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/extended-score"
        }},
        {"ficoScore":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "ficoscore": "/v2/ficoscore"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/fico-score"
        }},
        {"financialInclusionScorev1":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "persona": "/v1/fis/persona"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/financial-inclusion-score-v1"
        }},
        {"financialInclusionScorev1.1":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "persona": "/v1-1/fis/persona"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/financial-inclusion-score-v1.1"
        }},
        {"finTechScore":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "fintechscore": "/v1/fintechscore",
                "folio": "/folio"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/fintech-score"
        }},
        {"guardIAnFraudScore":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "guardian-score": "/v1/guardian-score"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/guardian-fraud-score"
        }},
        {"loanAmountEstimator":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "laePersona": "/v1/lae/persona",
                "laeFolioConsulta": "/v1/lae/folioConsulta"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/loan-amount-estimator"
        }},
        {"openBanking":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "bankdataaggregationsByInquiryId": "/bankdataaggregations/{inquiryId}",
                "bankdataaggregations": "/bankdataaggregations",
                "configurationsBySubscriptionId": "/configurations/{subscriptionId}",
                "configurations": "/configurations"
            }],
            "informationApi": "https://services.circulodecredito.com.mx/v2/rcc"
        }},
        {"pldCheck®PersonasFísicas":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "pld": "/v2/pld"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/pld-checkr-personas-fisicas"
        }},
        {"pldCheck®PersonasMorales":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "pld-pm": "/v1/pld-pm"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/pld-check-personas-morales"
        }},
        {"reporteDeCréditoFICO®ScorePersonasFísicas":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "rcficoscore": "/v1/rcficoscore"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/reporte-de-credito-ficor-score-personas-fisicas"
        }},
        {"reporteDeCréditoConsolidadoFICO®ScorePersonasFísicasv1":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "rccficoscore": "/v1/rccficoscore"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/v1/reporte-de-credito-consolidado-fico-score-personas-fisicas"
        }},
        {"reporteDeCréditoConsolidadoFICO®ScorePersonasFísicasv2":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "v2Rccficoscore": "/v2/rccficoscore"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/v2/reporte-de-credito-consolidado-fico-score-personas-fisicas"
        }},
        {"reporteDeCréditoConsolidadoFICO®ScoreYPLDCheck®PersonasFísicas":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "rcc-ficoscore-pld": "/v1/rcc-ficoscore-pld"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/rcc_fico_score_pld_check_pf"
        }},
        {"reporteDeCréditoConsolidadoPersonasFísicasv1":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "rcc": "/v1/rcc"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/v1/rcc_pf"
        }},
        {"reporteDeCréditoConsolidadoPersonasFísicasv2":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "v2RCC": "/v2/rcc"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/v2/rcc_pf"
        }},
        {"reporteDeCréditoConsolidadoPersonasMorales":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "RccPm": "/v1/rcc-pm"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/rcc_pm"
        }},
        {"reporteDeCréditoDePersonasFísicas":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "v1rc": "/v1/rc"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/reporte-de-credito-personas-fisicas"
        }},
        {"smartCollectionScore":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "smartcollection": "/v1/smartcollection"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/smart-collection-score"
        }},
        {"vantAge":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "aportantes": "/v2/vantage/aportantes",
                "noAportantes": "/v2/vantage/noAportantes"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/vantage"
        }},
        {"apiActualizaDatosGenerales":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "porCuenta": "/v1/adg/por-cuenta"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/actualiza-datos-generales"
        }},
        {"identityData":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "validations": "/v1/identity-data/validations"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/identity-data-api"
        }},
        {"addressVerification":{
            "hostName": "circulodecredito-dev.apigee.net",
            "endpoints": [{
                "verifications": "/v1/verifications",
                "verificationsByRequestId": "/v1/verifications/{requestId}"
            }],
            "informationApi": "https://developer.circulodecredito.com.mx/producto/address-verification"
        }}
    ];

module.exports = {
    "apihub": apiHub
};

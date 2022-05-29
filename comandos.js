const consultaCep = require('./modulos/consulta-cep/index.js')
const covid = require ('./modulos/api-covid/index.js')
const play = require('./modulos/playMusic/index.js')
const clima = require('./modulos/clima/index.js')
const sticker = require('./modulos/sticker/index.js')

const comandos = {
    '!cep': {
        'pasta': consultaCep,
        'status': true
    },
    '!covid': {
        'pasta': covid,
        'status': true
    },
    '!play':{
        'pasta': play,
        'status': true
    },
    '!clima':{
        'pasta': clima,
        'status': true
    },
    '!s':{
        'pasta': sticker,
        'status': true
    }
}

module.exports = comandos;
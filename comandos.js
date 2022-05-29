const consultaCep = require('./modulos/consulta-cep/index.js')

const comandos = {
    '!boanoite': {
        'pasta': consultaCep,
        'status': true
    },
    '!bomdia': {
        'pasta': consultaCep,
        'status': false
    }
}

module.exports = comandos;
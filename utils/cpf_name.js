const {generate} = require('gerador-validador-cpf')

const cpfName = () => {
    var cpf = generate( {format: true})
    var cpfAndName = cpf + ' - Lucas Rosa'
    return cpfAndName
}

const soma = (num1, num2) => {
    var somatorio = num1 + num2
    return somatorio
}

exports.cpfName = cpfName
exports.soma = soma
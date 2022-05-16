const cpf = 'Ruído valor 009.339.321-03'
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')

console.log(cpf.match(regex ))
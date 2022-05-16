let lista = [1, 2, 5]
let listIncl = [3, 4]

for (let i = 0; i < listIncl.length; i++) {
  for (let j = 0; j < lista.length; j++) {
   if (lista[j] >= listIncl[i]) {
    lista.splice(j, 0, listIncl[i])
    j++
   } 
  }
}
console.log(lista)

// Spread
const listRes = [1,2, ...listIncl, 5]

console.log(listRes)

let arr = [ 'a', 'b', 'c']
let arr2 = [...arr]

arr2.push('d')

console.log(`Arr = ${arr}`)
console.log(`Arr2 = ${arr2}`)


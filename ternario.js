// sem ternário
let isValid = true

function verify(isValid) {
  if (isValid) {
    return true 
  } else {
    return false
  }
}

console.log(verify(isValid))

// com ternário
const result = isValid ? true : false
let zero = 0
const nRes = zero == 0 ? 0 : -1

console.log(nRes)
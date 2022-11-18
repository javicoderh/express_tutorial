const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(request, response) => {
 response.send({
  message: 'never ever skip the daily code session' 
 })
})

app.post('/sum',(request, response) => {
 const { num1, num2 } = request.body
 const resultSum = num1 + num2
 response.send(
  {result: resultSum})
})

app.post('/decrease',(request, response) => {
 const { num1, num2 } = request.body
 const resultDec = num1 - num2
 response.send(
  {result: resultDec})
})

app.post('/mult',(request, response) => {
 const { num1, num2 } = request.body
 const resultMult = num1 * num2
 response.send(
  {result: resultMult})
})

app.post('/div',(request, response) => {
 const { num1, num2 } = request.body
 const resultDiv = num1 / num2
 response.send(
  {result: resultDiv})
})

app.listen(3001, () => {
 console.log('this seems like logic but it is magic on port:3001')
 })


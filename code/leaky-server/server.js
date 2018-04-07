/* 
  Run a load test for this with:
  npm install -g loadtest
  loadtest -c 100 --rps 100 http://localhost:3000
*/

const express = require('express')

const app = express()

let cryptoWallet = {}
const generateAddress = () => {
  const initialCryptoWallet = cryptoWallet
  const tempCryptoWallet = () => {
    if (initialCryptoWallet) console.log('We received initial cryptoWallet')
  }
  cryptoWallet = {
    key: new Array(1e7).join('.'),
    address: () => {
      // ref to tempCryptoWallet ???
      console.log('address returned')
    }
  }

}

app.get('*', (req, res) => {
  generateAddress()
  console.log(process.memoryUsage())
  return res.json({msg: 'ok'})
})
app.listen(3000)

/*

  Memory leak mitigation:

  - Reproduce the error/leak consistently
  - Check for variables and function arguments, pure fns are better
  - Take heap dumps and compare (with debug and DevTools or heapdump modules)
  - Update Node
  - Get rid of extra npm modules
  - Trial and error: remove code you think is leaky
  - Modularize and refactor

  Useful libraries:

  - memwatch-next
    * special event, leak, is triggered when gc increases 5-fold
  - systeminformation
    * has some memory functions
  - heapdump
    * creates heapdump files that can be analyzed in Chrome's memory tab

*/
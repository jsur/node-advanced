const {spawn} = require('child_process')
const str = 'React Quickly: Painless web apps with React, JSX, Redux, and GraphQL'.repeat(100)
console.time('launch encryption')

const rubyEncrypt = spawn('ruby', ['encrypt.rb'], {
  env: {STR: str},
  detached: true,
  stdio: 'ignore'
})
// This will finish this node.js process, but the ruby encryption will still be running
rubyEncrypt.unref()

console.timeEnd('launch encryption')


/*

  Spawn notes:

    - Use params to pass data around
    - Offload work to other processes, especially when they are in other languages
    - Compare timing (load testing, console.time, etc.)

*/

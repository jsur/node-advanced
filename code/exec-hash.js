
const {exec} = require('child_process')
console.time('hashing')
const str = 'React Quickly: Painless web apps with React, JSX, Redux, and GraphQL'.repeat(100)
// anything can be run with exec in a child process, all the output will be
// output to stdout!!
exec(`STR="${str}" python ${__dirname}/py-hash.py`, (error, stdout, stderr) => {
  if (error) return console.error(error)
  console.timeEnd('hashing')
  console.log(stdout)
})

console.log('could be doing something else')

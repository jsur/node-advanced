// count files with this
const {spawn} = require('child_process')
const path = process.argv[2] || '$HOME/Downloads'
// launch pretty much anything that is supported in the shell
spawn(`cd ${path} && find . -type f | wc -l`, {
  stdio: 'inherit',
  shell: true
})

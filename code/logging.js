const axios = require('axios');

const name = 'Julius';
const city = 'Barcelona';

console.log('Hello %s from %s', name, city);

// console.dir(global, { depth:0 });

console.log('Started');
console.time('GET');
axios.get('http://www.mocky.io/v2/5ac8c6763200004f0012fca1')
  .then((res) => {
    console.timeEnd('GET');
    console.log(res.data);
  });

'use strict';

const fs = require('fs');

const stdin = '/dev/stdin';
const stdout = '/dev/stdout';

//
let inFile = process.argv[2] === '-' ? stdin : process.argv[2];
let outFile = process.argv[3] ? process.argv[3] : stdout;
let outFileFlag = outFile === stdout ? 'a' : 'w';

// 1. Read file / stdin
// 2. Parse JSON
// 3. Add key/value
// 4. Stringify
// 5. Output to file / STDOUT

new Promise((resolve, reject) => {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    if(error) { reject(error); }
    resolve(data);
  });
})
.then(JSON.parse)
.then((pojo) => {
  pojo.promises = 'awesome';
  return pojo;
})
.then((awesomePojo) => {
  return JSON.stringify(awesomePojo, null, 2);
})
.then((json) => {
  fs.writeFile(outFile, json, { flag: outFileFlag }, (error) => {
    if (error) { return error; }
    console.log('\ncopied');
  });
})
.catch((error) => {
  console.error(error.stack);
  return 23;
});

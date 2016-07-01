'use strict';

const fs = require('fs');

let inFile = process.argv[2];

new Promise((resolve, reject) => {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    if (error) { reject(error); }
    resolve(data);
  });
})
// .then((data) => {
//   let lines = data.split('\n');
//   lines.pop();
//   lines.forEach((line) => {
//     console.log('Hello, ' + line + '!');
//   });
// });
.then((data) => {
  return data.split('\n');
})
.then((data) => {
  data.pop();
  return data;
})
.then((lines) => {
  lines.forEach((data) => {
    console.log('Hello, ' + data + '!');
  });
})
.catch((error) => {
  console.error(error.stack);
});

'use strict';
const fs = require('fs');

let inFile = process.argv[2];

new Promise((resolve, reject) => {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    if (error) { reject(error); }
    resolve(data);
  });
})
.then((data) => {
  return data.split('\n');
})
.then((lines) => {
  lines.pop();
  return lines;
})
.then((lines) => {
  let randomLines = lines.sort(function () {
    return 0.5 - Math.random();
  });
  return randomLines;
})
.then((randomLines) => {
  randomLines.forEach((line) => {
    console.log(line);
  });
})
.catch((error) => {
  console.error(error.stack);
});

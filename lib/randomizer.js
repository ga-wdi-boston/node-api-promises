'use strict';
const fs = require('fs');

const randomizer = function (inFile) {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
    //first thing is check error
    if (error) {
      console.error(error);
    }

    let lines = content.split('\n');

    //clean up the array
    lines.pop();

    let randomLines = lines.sort(function () {
      const n = 0.5 - Math.random();
      const randomSorter = n < 0 ? Math.floor(n) : Math.ceil(n);
      return randomSorter;
    });

    randomLines.forEach((line) => {
      console.log(line);
    });
  });
};

module.exports = randomizer;

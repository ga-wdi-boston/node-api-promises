'use strict';

const fs = require('fs');

const heyYall = function (inFile) {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
    if (error) {
      console.error(error);
    }

    // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']

    let lines = content.split('\n');

    // clean up the array by removing the empty line
    lines.pop();

    lines.forEach((line) => {
      console.log(`Hello, ${line}!`);
    });
  });
};

module.exports = heyYall;

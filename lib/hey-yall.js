'use strict';

const fs = require('fs');

const heyYall = function (inFile) {

  const promiseReadFile = function (fileName, options) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, options, (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      });
    });
  };

  const splitIntoLines = function (data) {
    return data.split('\n');
  };

  const removeTrailingNewLine = function (array) {
    array.pop();
    return array;
  };

  const logLines = function (array) {
    array.forEach((name) => {
      console.log(`Hey ${name}!`);
    });
  };

  promiseReadFile(inFile, { encoding: 'utf8' })
    .then(splitIntoLines)
    .then(removeTrailingNewLine)
    .then(logLines)
    .catch((error) => console.error(error.stack));
};

module.exports = heyYall;

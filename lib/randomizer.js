'use strict';
const fs = require('fs');

const randomizer = function (inFile) {

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

  const randomizeArray = function (array) {
    return array.sort(function () {
      const n = 0.5 - Math.random();
      const randomSorter = n < 0 ? Math.floor(n) : Math.ceil(n);
      return randomSorter;
    });
  };

  const logLines = function (array) {
    array.forEach((line) => {
      console.log(line);
    });
  };

  promiseReadFile(inFile, { encoding: 'utf8' })
    .then(splitIntoLines)
    .then(removeTrailingNewLine)
    .then(randomizeArray)
    .then(logLines)
    .catch(error => console.error(error.stack));
};

module.exports = randomizer;

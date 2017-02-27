'use strict';

const fs = require('fs');

const copyJson = function (inFile, outFile, outFileFlag) {

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

  const promiseWriteFile = function (fileName, data, options) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, options, (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      });
    });
  };

  promiseReadFile(inFile, { encoding: 'utf8' })
    .then(JSON.parse)
    .then(pojo => pojo)
    .then(pojo => JSON.stringify(pojo, null, 2))
    .then(json => promiseWriteFile(outFile, json, { flag: outFileFlag }))
    .then(() => console.log('\ncopied!'))
    .catch(err => console.error(err));
};

module.exports = copyJson;

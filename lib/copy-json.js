'use strict';

const fs = require('fs');

const copyJson = function (inFile, outFile, outFileFlag) {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    let json, pojo;
    if (error) {
      console.error(error.stack);
      return;
    }

    // parse the data into JSON
    try {
      pojo = JSON.parse(data);
    } catch (error) {
      console.error(error.stack);
      return;
    }

    // do something with the pojo

    // make a string out of the pojo
    json = JSON.stringify(pojo, null, 2);

    // save it
    fs.writeFile(outFile, json, { flag: outFileFlag }, error => {
      if (error) {
        console.error(error.stack);
        return;
      }

      console.error('\ncopied');
    });
  });
};

module.exports = copyJson;

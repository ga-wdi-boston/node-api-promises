'use strict';

const randomizer = require('../lib/randomizer.js');

let inFile = process.argv[2];

if (!inFile) {
  throw('Script requires one argument, an input file');
}

randomizer(inFile);

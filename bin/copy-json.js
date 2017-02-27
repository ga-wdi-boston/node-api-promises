'use strict';

const copyJson = require('../lib/copy-json.js');

const stdin = '/dev/stdin';
const stdout = '/dev/stdout';

let inFile = process.argv[2] === '-' ? stdin : process.argv[2];
let outFile = process.argv[3] ? process.argv[3] : stdout;

let outFileFlag = outFile === stdout ? 'a' : 'w';

copyJson(inFile, outFile, outFileFlag);

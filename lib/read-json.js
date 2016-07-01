'use strict';
const fs = require('fs');

const readJSON = function (filename, callback){
  new Promise(function(resolve, reject)){ // Step 1: Read the file
    fs.readFile(filename, {encoding: 'utf8'}, function (err, res){
      if(err){ reject(err); }
      resolve(res);
  })


  // .then(function(data){ // Step 2: Parse JSON
  //   JSON.parse(data);
  // })

  .then(JSON.parse)


  .then(function(data){ // Step 3: Run the given callback
    callback(null, data);
  })
  .catch(function(error){
    callback(error);
  });
};

// 1. Read a file
// 2. Parse JSON
// 3. Run another callback      // error handling using passed in CB




// const readJSON = function (filename, callback){
//   fs.readFile(filename, 'utf8', function (err, res){
//     let json;
//     if (err) {
//       return callback(err); // what's going on here?
//     }
//
//     try {
//       json = JSON.parse(res);
//     } catch(err){
//       return json;
//     }
//
//     callback(null, json); // what if JSON.parse errors out?
//   });
// };

module.exports = readJSON;

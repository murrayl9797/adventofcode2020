const fs = require('fs');


const run = (path) => {

  const groups = fs.readFileSync(path, 'utf-8').split('\n\n');



  return result;
}

//console.log(`Answer:`, run('input.txt'));
console.log(`Test:`, run('test.txt'));
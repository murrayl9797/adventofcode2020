const fs = require('fs');


const run = (path) => {
  let found = {};
  let noDupes = [];
  // Parse the file
  const groups = fs.readFileSync(path, 'utf-8').split('\n').sort((a, b) => (
    a - b
  ));


}



console.log(`Test:`, run('test.txt'));
console.log(`Answer:`, run('input.txt'));


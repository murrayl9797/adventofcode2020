const fs = require('fs');



const run = (path) => {


  // Parse intial input
  const groups = fs.readFileSync(path, 'utf-8').split('\n\n');

  return groups;
}



console.log(`Test:`, run('./inputs/test.txt'));
console.log(`Answer:`, run('./inputs/mine.txt'));


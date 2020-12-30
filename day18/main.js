const fs = require('fs');



const run = (path) => {

  // Parse intial input
  const lines = fs.readFileSync(path, 'utf-8').split('\n').map(line => {
    return line.replace(/ /g, '').split('');
  });

  return lines;
}



console.log(`Test:`, run('./inputs/test.txt'));
//console.log(`Answer:`, run('./inputs/mine.txt'));
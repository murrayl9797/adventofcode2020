const fs = require('fs');


const run = (path) => {

  // Parse the file
  const instructions = fs.readFileSync(path, 'utf-8')
  .split('\n')
  .map(a => {
    return [a[0], a.slice(1)];
  }
  );


  // Init variables
  let currRow = 0;
  let currCol = 0;
  let currDir = 'E';

  // Loop over instructions
  for (var [action, value] of instructions) {
    console.log(`Action: ${action}, Value:${value}`);
  }

  //return instructions;
}



console.log(`Test:`, run('test.txt'));
//console.log(`Answer:`, run('input.txt'));


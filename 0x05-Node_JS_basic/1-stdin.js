console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  if (input) {
    console.log(`Your name is: ${input}`);
  }
});
process.stdin.on('close', () => {
  console.log('This important software is now closing');
});

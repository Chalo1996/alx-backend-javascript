console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  if (input) {
    process.stdout.write(`Your name is: ${input.toString().trim()}\n`);
    process.exit(0);
  }
});
process.stdin.on('close', () => {
  console.log('This important software is now closing');
});

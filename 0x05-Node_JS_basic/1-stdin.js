console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input) {
    console.log(`Your name is: ${input.toString().trim()}`);
  }
});
process.stdin.on('close', () => {
  console.log('This important software is now closing');
});

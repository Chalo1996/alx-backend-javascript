console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  console.log(`Your name is: ${input.toString().trim()}`);
  console.log('This important software is now closing');
  process.exit();
});

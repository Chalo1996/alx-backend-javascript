console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  process.stdout.write(`Your name is: ${input.toString().trim()}\n`);
  console.log('This important software is now closing');
  process.exit();
});
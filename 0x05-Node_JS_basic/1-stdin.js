process.stdin.setEncoding('UTF8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

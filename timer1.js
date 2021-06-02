const args = process.argv.slice(2);

const timer = input => {
  const checkLength = input.filter(element => !isNaN(element));
  if (checkLength.length === 0) {
    process.exit();
  }

  for (const arg of input) {
    setTimeout(() => {
      if (arg >= 0) {
        process.stdout.write('\x07');
        console.log(`${arg} second(s)`);
      }
    }, 1000 * arg);
  }
};
timer(args);

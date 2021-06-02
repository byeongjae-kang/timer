const args = process.argv.slice(2);

const timer = () => {
  for (const arg of args) {
    setTimeout(() => {
      if (arg >= 0) {
        process.stdout.write('\x07');
        console.log(`${arg} second(s)`);
      }
    }, 100 * arg);
  }
};
timer();
const args = process.argv.slice(2);

const timer = () => {
  for (const arg of args) {
    setTimeout(() => {
      if (!isNaN(arg) && arg >= 0) {
        process.stdout.write('\x07');
        console.log(`${arg} second(s)`);
      }
    }, 1000 * arg);
  }
};
timer();
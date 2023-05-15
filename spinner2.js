const spin = "|/-\\|/-\\|";
let i = 0;

const spinner = function(spin, index) {
  if (i < spin.length) {
    process.stdout.write(`\r${spin.charAt(index)}   `);
    setTimeout(() => spinner(spin,++i), 200);
    }
    if (i === spin.length) {
      process.stdout.write('\n');
  }
};
spinner(spin, i);
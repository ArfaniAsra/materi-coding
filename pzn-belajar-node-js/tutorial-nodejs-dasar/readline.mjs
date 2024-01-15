import processs from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa nama anda? : ", (nama) => {
  console.info(`Hello, ${nama}!`);
  input.close();
});

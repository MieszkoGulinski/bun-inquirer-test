import { input, select, confirm, checkbox, password } from "@inquirer/prompts";

const name = await input({ message: "What's your name?" });

const language = await select({
  message: "What's your favorite programming language?",
  choices: [
    { name: "Erlang", value: "erlang" },
    { name: "Haskell", value: "haskell" },
    { name: "Prolog", value: "prolog" },
    { name: "COBOL", value: "cobol" },
  ],
});

const canHack = await confirm({
  message: "Can you hack NASA using HTML?",
});

const colors = await checkbox({
  message: "Which colors would you like to have your room painted?",
  choices: [
    { name: "Pink", value: "pink" },
    { name: "Salmon", value: "salmon" },
    { name: "Magenta", value: "magenta" },
    { name: "Purple", value: "purple" },
    { name: "Mauve", value: "mauve" },
    { name: "Violet", value: "violet" },
  ],
});

const enteredPassword = await password({ message: "Enter your password" });
const hashedPassword = await Bun.password.hash(enteredPassword);

console.log("Congratulations!");
console.log("Your name is " + name);
console.log("Your room will be painted" + colors.join(" and "));
console.log("Hash of your password is " + hashedPassword);

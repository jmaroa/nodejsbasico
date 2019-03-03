const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q = ["Cual es tu nombre? ", "Cual es tu edad? "];

const AskQuestion = (rl, question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      if (!answer) {
        reject(answer);
      }

      resolve(answer);
    });
  });
};

const Ask = questions => {
  return new Promise(async resolve => {
    let results = [];
    for (let i = 0; i < questions.length; i++) {
      const result = await AskQuestion(rl, questions[i]);
      results = [...results, result];
    }
    rl.close();
    resolve(results);
  });
};

Ask(q).then(q => {
  console.log(`Hola ${[...q]}`);
});

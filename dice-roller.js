if (process.argv.length !== 3) {
  console.error('Usage: node dice.js <number>');
  process.exit(1);
}

const numDice = parseInt(process.argv[2]);

if (isNaN(numDice) || numDice <= 0) {
  console.error('Error: Invalid number');
  process.exit(1);
}

for (let i = 0; i < numDice; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Die ${i + 1} rolled a ${roll}`);
}

export default (input) =>
  input
    .split("\n")
    .map(cardValue)
    .reduce((a, b) => a + b);

const cardValue = (card) => {
  const [_, numbers] = card.split(": ");
  let [winning, cardNumbers] = numbers.split(" | ").map((n) => n.split(/\s+/));
  winning = new Set(winning);

  const match = [...cardNumbers].filter((c) => winning.has(c)).length;
  return match > 0 ? Math.pow(2, match - 1) : 0;
};

export const description =
  "Take a seat in the large pile of colorful cards. How many points are they worth in total?";
export const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
export const output = 13;


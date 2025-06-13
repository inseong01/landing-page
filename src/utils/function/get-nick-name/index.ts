import { adjectives } from "./constants/adjectives";
import { data } from "./constants/data";

function getRandomInteger(max: number) {
  return Math.floor(Math.random() * max);
}

export const getRandomNickname = (type: "animals") => {
  const adjective = adjectives[getRandomInteger(adjectives.length)];
  const noun = data[type][getRandomInteger(data[type].length)];

  return `${adjective} ${noun}`;
};

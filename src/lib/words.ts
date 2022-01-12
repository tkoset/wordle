import { WORDS } from "../constants/wordlist";

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word.toLowerCase());
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getWordOfDay = () => {
  const index = Math.floor(Math.random() * 5507);
  
  return WORDS[index].toUpperCase();
};

export const solution = getWordOfDay();

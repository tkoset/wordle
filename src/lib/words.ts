import { WORDS } from "../constants/wordlist";

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word.toLowerCase());
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000;
  const now = Date.now();
  const msInDay = 86400000;
  const mod = ((Math.floor((now - epochMs) / msInDay),5);
  
  return WORDS[mod].toUpperCase();
};

export const solution = getWordOfDay();

import { Writable, writable } from 'svelte/store';

const WORK_DEFAULT = 25;
const BREAK_DEFAULT = 5;
const LIMIT = 60;

export const workSession = writable(WORK_DEFAULT);
export const breakSession = writable(BREAK_DEFAULT);

export const increment = (value: Writable<number>) => {
  value.update(($value) => ($value < LIMIT ? $value + 1 : LIMIT));
};

export const decrement = (value: Writable<number>) => {
  value.update(($value) => ($value > 1 ? $value - 1 : 1));
};

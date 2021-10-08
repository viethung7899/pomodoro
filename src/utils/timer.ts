import { Writable, writable } from "svelte/store";

const WORK_DEFAULT = 25;
const BREAK_DEFAULT = 5;
const LIMIT = 60;

class Timer {
  workSession = writable(WORK_DEFAULT);
  breakSession = writable(BREAK_DEFAULT);

  increment(value: Writable<number>) {
    value.update($value => $value < LIMIT ? $value + 1 : LIMIT)
  }

  decrement(value: Writable<number>) {
    value.update($value => $value > 1 ? $value - 1 : 1)
  }
}

export const timer = new Timer();

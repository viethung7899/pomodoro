<script lang="ts">
import type { Writable } from "svelte/store";

  import { timer } from "../utils/timer";
  export let title: string;
  export let session: Writable<number>;
  const {increment, decrement} = timer;
</script>

<div class="flex flex-col flex-grow items-center w-full h-full">
  <div class="font-bold text-2xl">{title}</div>
  <div class="flex flex-col items-center">
    <button class="my-4 hover:bg-gray-800 rounded-full hover:text-fill dark:hover:text-gray-800 dark:hover:bg-fill"
    on:click="{() => increment(session)}"
      ><i class="fas fa-chevron-up p-auto" /></button
    >
    <div
      class="p-4 text-6xl border-2 rounded-md border-gray-800 dark:border-fill"
    >
      {$session}
    </div>
    <button class="my-4 hover:bg-gray-800 rounded-full hover:text-fill dark:hover:text-gray-800 dark:hover:bg-fill"
    on:click="{() => decrement(session)}"
      ><i class="fas fa-chevron-down p-auto" /></button
    >
  </div>
  <p>minutes</p>
</div>

<style lang="postcss">
  button {
    width: 24px;
    height: 24px;
  }
</style>

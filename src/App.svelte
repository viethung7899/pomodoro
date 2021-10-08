<script lang="ts">
  import Pomodoro from './Pomodoro.svelte';
  import { dark } from './utils/store';

  let darkMode: string;

  $: darkMode = $dark ? 'dark' : '';
</script>

<div class={darkMode}>
  <Pomodoro />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  div {
    transition-property: background-color, border-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }
</style>

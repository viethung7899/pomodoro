<script lang="ts">
  import Selection from './Selection.svelte';
import ThemeOption from './ThemeOption.svelte';
  import Timer from './Timer.svelte';

  let running = false;
</script>


<div class="flex-grow flex flex-col items-center">
  <ThemeOption />
  {#if running}
    <Timer
      resetTimer={() => {
        running = false;
      }}
    />
  {:else}
    <Selection
      runTimer={() => {
        running = true;
      }}
    />
  {/if}
</div>

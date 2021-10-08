<script lang="ts">
  import { theme, themes } from '../utils/theme';
</script>

<div>
  <p class="py-2">Choose your theme...</p>
  <select
    class="border-black dark:border-fill bg-transparent
      border-2 rounded-md p-1 focus:outline-none text-center"
    bind:value={$theme}
  >
    {#each [...themes] as [key, theme]}
      <option value={key}>{theme.display}</option>
    {/each}
  </select>
</div>

<style lang="postcss">
  select {
    min-width: 200px;
    @apply text-center;
  }
</style>

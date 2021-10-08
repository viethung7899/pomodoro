<script lang="ts">
  import { colors } from '../utils/constant';
  import { theme } from '../utils/store';
</script>

<div>
  <p class="py-2">Choose your theme...</p>
  <select
    class="border-black {colors.get($theme).darkBorder} bg-transparent
      border-2 rounded-md p-1 focus:outline-none text-center"
    bind:value={$theme}
  >
    {#each [...colors] as [key, color]}
      <option value={key}>{color.icon} {key}</option>
    {/each}
  </select>
</div>

<style lang="postcss">
  select {
    min-width: 200px;
    @apply text-center;
  }
</style>

<script lang="ts">
  import ThemeOption from './ThemeOption.svelte';
  import TimeSelector from './TimeSelector.svelte';
  import { colors } from '../utils/constant';
  import { theme } from '../utils/store';
</script>

<div class="flex-grow flex flex-col items-center">
  <ThemeOption />
  <div class="flex flex-row w-full mt-8">
    <TimeSelector title="Work session" />
    <TimeSelector title="Break session" />
  </div>
  <button class="{colors.get($theme).darkBorder}"><i class="fas fa-play mr-2"/>START</button>
</div>

<style lang="postcss">
  button {
    @apply mt-4 rounded-md border-2 border-black p-2;
  }
</style>

<script lang="ts">
  import { colors } from '../utils/constant';
  import { theme } from '../utils/store';
  export let title: string;
</script>

<div class="flex flex-col flex-grow items-center w-full h-full">
  <div class="font-bold text-2xl">{title}</div>
  <div class="flex flex-col items-center">
    <button><i class="fas fa-chevron-up" /></button>
    <div
      class="p-4 text-6xl border-2 rounded-md border-black 
      {colors.get($theme).darkBorder}"
    >
      0
    </div>
    <button><i class="fas fa-chevron-down" /></button>
  </div>
  <p>minutes</p>
</div>

<style lang="postcss">
  button {
    width: 20px;
    height: 20px;
    @apply rounded-full my-4;
  }
</style>

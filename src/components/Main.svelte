<script lang="ts">
  import ThemeOption from './ThemeOption.svelte';
  import TimeSelector from './TimeSelector.svelte';
</script>

<div class="flex-grow flex flex-col items-center">
  <ThemeOption />
  <div class="flex flex-row w-full mt-8">
    <TimeSelector title="Work session" />
    <TimeSelector title="Break session" />
  </div>
  <button class="mt-4 rounded-md border-2 p-2 border-gray-800 dark:border-fill hover:bg-gray-800
  hover:text-fill dark:hover:text-gray-800 dark:hover:bg-fill">
    <i class="fas fa-play mr-2" />
    START
  </button>
</div>

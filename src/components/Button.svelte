<script lang="ts">
  export let icon: string;
  export let title: string;
</script>

<button
  class="mt-4 rounded-md border-2 p-2 border-gray-800 dark:border-fill hover:bg-gray-800
  hover:text-fill dark:hover:text-gray-800 dark:hover:bg-fill"
>
  <i class="{icon} mr-2" />
  {title}
</button>

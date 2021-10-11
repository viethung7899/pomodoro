<script lang="ts">
  import Main from './components/Main.svelte';
import Nav from './components/Nav.svelte';
  import Selection from './components/Selection.svelte';
  import Timer from './components/Timer.svelte';
</script>

<div
  class="flex flex-col 
    w-screen min-h-screen 
    text-gray-800 dark:text-fill 
    bg-fill dark:bg-gray-800"
>
  <Nav />
  <Main />

  <!-- Footer -->
  <div class="text-center py-2">Developed by Viet Hung Nguyen</div>
</div>

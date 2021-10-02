<script lang="ts">
import Main from "./components/Main.svelte";
import Nav from "./components/Nav.svelte";

export let background = 'red-400';

</script>
<div class="flex flex-col w-screen h-screen bg-{background}">
  <Nav />
  <Main />

  <!-- Footer -->
  <div class="text-center py-2">
    Developed by Viet Hung Nguyen
  </div>
</div>
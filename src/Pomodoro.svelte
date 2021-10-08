<script lang="ts">
  import Main from './components/Main.svelte';
  import Nav from './components/Nav.svelte';
  
  import {theme} from './utils/store';
  import {colors} from './utils/constant';

  let backGroundColor: string;
  $: backGroundColor = colors.get($theme).background;
</script>

<div class="flex flex-col w-screen h-screen {backGroundColor} text-black {colors.get($theme).darkText} dark:bg-gray-800">
  <Nav />
  <Main />

  <!-- Footer -->
  <div class="text-center py-2">Developed by Viet Hung Nguyen</div>
</div>
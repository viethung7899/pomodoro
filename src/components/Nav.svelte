<script lang="ts">
  import Switch from './Switch.svelte';
</script>

<nav class="flex justify-between p-2 bg-transparent">
  <div class="text-4xl font-bold">Pomodoro</div>
  <div class="flex items-center gap-x-2">
    <Switch />
    <a
      id="github"
      class="regular-button"
      href="https://github.com/viethung7899/pomodoro"
      target="_blank"><i class="fab fa-github text-2xl" /></a
    >
  </div>
</nav>

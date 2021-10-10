<script>
  import Button from './Button.svelte';
</script>

<div class="flex-grow flex flex-col items-center justify-center space-y-4">
  <div
    class="round flex items-center justify-center border-gray-800 dark:border-fill rounded-full"
  >
    <div class="timer items-center">00:00</div>
  </div>
  <div class="flex flex-row space-x-2">
    <Button title="PAUSE" icon="fa fa-pause" />
    <Button title="RESET" icon="fa fa-refresh" />
  </div>
</div>

<style lang="postcss">
  .round {
    width: 80%;
    border-width: 0.5em;
  }

  .round::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .timer {
    font-size: 5rem;
  }

  @screen sm {
    .timer {
      font-size: 10em;
    }
  }

  @screen xl {
    .timer {
      font-size: 20em;
    }
  }
</style>

<script>
  import Button from './Button.svelte';
  import CircularProgress from './CircularProgress.svelte';
  
</script>

<div class="flex-grow flex flex-col items-center justify-center space-y-4">
  <p class="session">WORK</p>
  <div class="square">
    <CircularProgress progress="1.0" />
    <p>00:00</p>
  </div>
  <div class="flex flex-row space-x-2">
    <Button title="PAUSE" icon="fa fa-pause" />
    <Button title="RESET" icon="fa fa-refresh" />
  </div>
</div>

<style lang="postcss">
  .session {
    font-size: max(2rem, 5vw);
    
  }

  .square {
    width: 80%;
    position: relative;
  }

  .square p {
    font-size: 20vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

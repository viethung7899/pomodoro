<script lang="ts">
  import { onMount } from 'svelte';
  import { breakSession, workSession } from '../utils/timer';
  import Button from './Button.svelte';
  import CircularProgress from './CircularProgress.svelte';
  export let resetTimer: () => void;

  let working = true,
    pause = false;
  let remaining = $workSession * 60;
  let timer;

  const updateTimer = () => {
    if (remaining == 0) {
      working = !working;
      if (working) {
        remaining = $workSession * 60;
      } else {
        remaining = $breakSession * 60;
      }
      console.log(remaining);
    } else {
      remaining--;
    }
  };

  const startTimer = () => {
    pause = false;
    timer = setInterval(updateTimer, 1000);
  };

  const pauseTimer = () => {
    pause = true;
    clearInterval(timer);
  };

  const toString = (remaining) => {
    const minute = Math.floor(remaining / 60)
      .toString()
      .padStart(2, '0');
    const second = (remaining % 60).toString().padStart(2, '0');
    return `${minute}:${second}`;
  };

  $: progress = () => {
    if (working) {
      return remaining / ($workSession * 60);
    }
    return remaining / ($breakSession * 60);
  };

  onMount(() => {
    startTimer();
  });
</script>

<p class="session font-bold my-6">{working ? 'WORK' : 'BREAK'}</p>
<div class="square">
  <CircularProgress progress={progress()} />
  <p>{toString(remaining)}</p>
</div>
<div class="flex flex-row space-x-2">
  <Button
    title={pause ? 'RESUME' : 'PAUSE'}
    icon="fa {pause ? 'fa-play' : 'fa-pause'}"
    on:click={pause ? startTimer : pauseTimer}
  />
  <Button title="RESET" icon="fa fa-refresh" on:click={resetTimer} />
</div>

<style lang="postcss">
  .session {
    font-size: min(10vw, 5vh);
  }

  .square {
    width: min(80%, 50vh);
    position: relative;
  }

  .square p {
    font-size: min(20vw, 10vh);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

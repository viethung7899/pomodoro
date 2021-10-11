<script lang="ts">
  import { breakSession, workSession } from '../utils/timer';
  import Button from './Button.svelte';
  import TimeSelector from './TimeSelector.svelte';
  export let runTimer: () => void;
</script>

<div class="flex flex-row w-full mt-8">
  <TimeSelector title="Work session" session={workSession} />
  <TimeSelector title="Break session" session={breakSession} />
</div>
<Button title="START" icon="fas fa-play" on:click={runTimer} />

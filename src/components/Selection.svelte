<script lang="ts">
  import { timer } from '../utils/timer';
  import Button from './Button.svelte';
  import ThemeOption from './ThemeOption.svelte';
  import TimeSelector from './TimeSelector.svelte';

  let { workSession, breakSession } = timer;
</script>

<div class="flex-grow flex flex-col items-center">
  <ThemeOption />
  <div class="flex flex-row w-full mt-8">
    <TimeSelector title="Work session" session={workSession} />
    <TimeSelector title="Break session" session={breakSession} />
  </div>
  <Button title="START" icon="fas fa-play" />
</div>

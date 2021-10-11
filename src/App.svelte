<script lang="ts">
  import Pomodoro from './Pomodoro.svelte';
  import { dark, theme, themes } from './utils/theme';

  $: darkMode = $dark ? 'dark' : '';
</script>

<div class="{darkMode} {themes.get($theme).class}">
  <Pomodoro />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  div {
    transition-property: background-color, border-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }

  /* Theme */
  @layer base {
    :root {
      --main-color: #EF9A9A;
    }

    .theme-pomodoro {
      --main-color: #EF9A9A;
    }

    .theme-arancia {
      --main-color: #FFCC80;
    }

    .theme-limone {
      --main-color: #FFF59D;
    }

    .theme-kiwi {
      --main-color: #A5D6A7;
    }

    .theme-mirtillo {
      --main-color: #9FA8DA;
    }

    .theme-cocco {
      --main-color: #EEEEEE;
    }
  }
</style>

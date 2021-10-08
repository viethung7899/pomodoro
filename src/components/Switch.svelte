<script lang="ts">
  import {dark, theme} from '../utils/store';
  import { colors } from '../utils/constant';
</script>
<span>
  <input type="checkbox" id="switch" bind:checked={$dark} >
  <label for="switch" class="border-black {colors.get($theme).darkBorder}">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <div class="toggle rounded-full bg-black {colors.get($theme).darkBackground}"></div>
  </label>
</span>

<style lang="postcss">
  input {
    display: none;
  }

  label {
    position: relative;
    width: 55px;
    @apply flex items-center justify-between p-1 rounded-full border-2;
  }

  .toggle {
    width: 22px;
    height: 22px;
    left: 1px;
    position: absolute;
    transition: transform 0.2s linear;
  }

  input:checked + label .toggle {
    transform: translate(27px);
  }
</style>
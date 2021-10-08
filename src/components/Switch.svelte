<script lang="ts">
  import { dark } from '../utils/theme';
</script>

<span>
  <input type="checkbox" id="switch" bind:checked={$dark} />
  <label for="switch" class="border-gray-800 dark:border-fill">
    <i class="fas fa-moon" />
    <i class="fas fa-sun" />
    <div class="toggle rounded-full bg-black dark:bg-fill" />
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

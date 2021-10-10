<script lang="ts">
  export let progress = 0.5;
  let radius = 120, stroke = 4;
  let normalizedR = radius - stroke * 2;
  let circumference = normalizedR * 2 * Math.PI;
  let offset = circumference - progress * circumference;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-gray-800 dark:text-fill" width="100%" height="100%" viewBox="0 0 {radius * 2} {radius * 2}">
  <circle
    fill="transparent"
    stroke-width={stroke}
    stroke-dasharray="{circumference} {circumference}"
    stroke-dashoffset="{offset}"
    style="stroke-dashoffset:${circumference}"
    r={normalizedR}
    cx="{radius}"
    cy="{radius}">
  </circle>
</svg>

<style>
  circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
</style>
<template>
  <div>
    <svg
      id="Layer_1"
      :class="{ checked: checked }"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 78 58"
      style="enable-background:new 0 0 78 58;"
      xml:space="preserve"
    >
      <style type="text/css">
        .st0 {
          fill: #ffffff;
        }
        .st1 {
          fill: none;
          stroke: #ccb55f;
          stroke-width: 11;
          stroke-miterlimit: 10;
        }
      </style>
      <g>
        <path d="M61.5,9v45h-45V9H61.5 M65.5,5h-53v53h53V5L65.5,5z" />
      </g>
      <path d="M61.5,9v45h-45V9H61.5 M65.5,5h-53v53h53V5L65.5,5z" />
      <g class="check-group">
        <polygon
          class="st0"
          points="65.5,0 65.5,9 59.5,9 59.5,21 65.5,21 65.5,58 78,58 78,0 	"
        />
        <path
          class="st1 check-path"
          d="M21.5,24c8,6,14.5,12.5,19.5,17.5c11-17,21.5-28,33.5-37"
        />
        <path
          class="st0"
          d="M65.5,0v4.5c-2.1,1.5-4.1,3-6,4.5h-43v45h45V26.4c2.2-2.9,4.6-5.9,7.1-8.8l9.4,0V0H65.5z M71.3,8.9
          c-0.3,0.3-0.6,0.6-0.9,0.9c-0.8,0.8-1.5,1.6-2.3,2.4c-0.3,0.3-0.6,0.6-0.9,1c-0.8,0.9-1.5,1.7-2.3,2.6c-0.2,0.2-0.4,0.5-0.6,0.7
          c-1,1.1-1.9,2.2-2.8,3.4c-9,11.2-15.8,22.7-18.9,29.8L21.1,27.8c1.3-1.2,3.4-3.1,4.7-4l13.4,10.5l1.1-1.3c3.6-4.2,12-13.5,24-22.5
          c0,0,0,0,0,0c0.9-0.7,1.8-1.3,2.7-2c0.1-0.1,0.2-0.1,0.2-0.2c0.8-0.6,1.7-1.2,2.6-1.8c0.2-0.1,0.3-0.2,0.5-0.3c1-0.7,2.1-1.4,3.1-2
          c0.3,0.4,0.7,1,1.2,1.7C73.4,6.8,72.4,7.8,71.3,8.9z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    checked: Boolean
  }
}
</script>

<style scoped lang="scss">
svg {
  width: 32px;
  cursor: pointer;

  .check-group {
    opacity: 0;
    transition: opacity 0.2s 0.2s;

    .check-path {
      stroke-dasharray: 0 76;
      transition: stroke-dasharray 0.4s;
    }
  }

  &.checked {
    .check-group {
      opacity: 1;
      transition: opacity 0.2s;

      .check-path {
        stroke-dasharray: 76 76;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
const clickCount = ref(0)
const announcePresence = () => {
  window.alert(`Button Clicked! #${clickCount.value} Times`)
  clickCount.value = clickCount.value + 1
}
</script>

<template>
  <div>
    <div class="green_background">
      <p>I'm a div with a Button:</p>
      <nys-button
        id="button1"
        name="button1"
        label="Window Alert"
        prefixIcon="chevron_left"
        suffixIcon="chevron_right"
        @click="announcePresence()"
      />
      <p>This Requests:</p>
      <ul>
        <li>http://localhost:5173/node_modules/.vite/deps/icons/chevron_left.svg</li>
        <li>http://localhost:5173/node_modules/.vite/deps/icons/chevron_right.svg</li>
      </ul>
    </div>
    <br />
    <nys-divider />
    <div class="red_background">
      <p>I'm a div with an Icon</p>
      <nys-icon name="upload_file" />
      <p>This requests:</p>
      <ul>
        <li>http://localhost:5173/node_modules/.vite/deps/icons/upload_file.svg</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.green_background {
  background-color: var(--nys-color-green-400);
}
.red_background {
  background-color: var(--nys-color-red-400);
}
</style>

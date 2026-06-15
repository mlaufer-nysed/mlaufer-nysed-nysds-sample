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
    </div>
    <br />
    <nys-divider />
    <div class="red_background">
      <p>I'm a div with an Icon</p>
      <nys-icon name="upload_file" size="5xl" />
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

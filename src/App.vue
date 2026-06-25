<script setup lang="ts">
import { ref, type Ref } from 'vue'

const eventsFired = ref(0)
const dateValue: Ref<Date | undefined> = ref(undefined)
const onInputEvent = (e: CustomEvent) => {
  const { id, value } = e.detail
  dateValue.value = value
  eventsFired.value++
}

const windowAlert = (s: string) => {
  window.alert(s)
}
</script>

<template>
  <div>
    <p>Events Fired: {{ eventsFired }}</p>
    <nys-datepicker @nys-input="onInputEvent" />
    <nys-button @click="windowAlert(`Model Value: ${dateValue}`)" label="Alert Model Value" />
  </div>
</template>

<style scoped></style>

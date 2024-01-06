<script setup>
const version = window.__APP_VERSION__
</script>

<template>
  <footer
    mt-32 flex flex-col items-center justify-between gap-3
    un-lg="flex-row gap-0"
  >
    <small
      font-semibold uppercase
      un-text="sm center foreground/70"
      un-max-md="order-1"
    >
      ©
      <span text-accent-10>2023</span>
      Ashtrath. All rights reserved.
    </small>
    <small font-semibold uppercase un-text="sm foreground/70">
      <span text-accent-10>Version</span>
      {{ version }}
    </small>
  </footer>
</template>

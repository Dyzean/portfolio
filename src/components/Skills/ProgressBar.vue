<script setup>
defineProps({
  progress: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div h-2 w-full overflow-hidden rounded-full bg-secondary>
    <div
      h-full rounded-full bg-accent-10 transition-width duration-300
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

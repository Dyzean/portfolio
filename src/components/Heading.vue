<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div mb-10 flex items-end gap-5>
    <h2
      font-display font-bold
      un-text="5xl foreground"
    >
      {{ text }}
    </h2>
    <div
      w-full
      un-border="b-2 dashed accent-10"
    />
  </div>
</template>

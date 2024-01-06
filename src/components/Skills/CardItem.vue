<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    v-for="(item, index) in category.items" :key="index"
    flex items-center gap-2 rounded-md bg-primary p-3
  >
    <i
      h-6 w-6
      :class="item.icon"
      :style="{ color: item.color }"
    />
    <span
      text-sm font-semibold uppercase
      :style="{ color: item.color }"
    >
      {{ item.name }}
    </span>
  </div>
</template>

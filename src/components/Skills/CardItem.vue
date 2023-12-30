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
    w-full gap-3 rounded-md bg-primary p-3
    un-flex="~ col"
  >
    <div flex items-center justify-between>
      <div flex items-center gap-2>
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
      <span text-sm text-foreground font-semibold>{{ item.progress }}%</span>
    </div>
    <SkillsProgressBar :progress="item.progress" :color="item.color" />
  </div>
</template>

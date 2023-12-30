<script setup>
defineProps({
  type: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: value => ['left', 'right'].includes(value),
  },
  buttonText: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a
    btn
    :href="link"
  >
    <i
      h-6 w-6
      :style="{ order: iconPosition === 'right' ? 2 : 0 }"
      :class="[icon]"
    />
    <span font-bold>{{ buttonText }}</span>
  </a>
</template>

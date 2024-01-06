<script setup>
import { skills } from '~/composables/constants/skills'

const midIndex = Math.ceil(skills.length / 2) - 1
const leftHalfSkills = skills.slice(0, midIndex)
const rightHalfSkills = skills.slice(midIndex)

// Sort items based on progress
function sortSkills(categories) {
  return categories.map(category => ({
    ...category,
    items: category.items.slice().sort((a, b) => b.progress - a.progress),
  }))
}

const sortedLeftHalfSkills = sortSkills(leftHalfSkills)
const sortedRightHalfSkills = sortSkills(rightHalfSkills)
</script>

<template>
  <div
    v-for="(categories, index) in [sortedLeftHalfSkills, sortedRightHalfSkills]" :key="index"
    gap-4 un-flex="~ 1 col"
  >
    <div
      v-for="category in categories" :key="category.category"
      flex-1 rounded-md bg-secondary p-4 transition duration-150
      un-border="~ foreground/30 hover:accent-10"
    >
      <h3 font-bold font-display uppercase un-text="xl foreground">
        {{ category.category }}
      </h3>

      <div mt-5 gap-2 un-flex="~ wrap">
        <SkillsCardItem
          :category="category"
        />
      </div>
    </div>
  </div>
</template>

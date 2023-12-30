<script setup>
import { projects } from '~/composables/constants/projects'
</script>

<template>
  <div
    v-for="(project, index) in projects" :key="index"
    rounded-md
    un-border="~ foreground/30 hover:accent-10"
    un-flex="~ col"
    un-xl="flex-row gap-3 rounded-none border-none"
  >
    <div
      h-full overflow-hidden rounded-t-md xl:max-w-md
      un-xl="shadow-xl rounded-md"
      :class="{ 'xl:order-2': index % 2 !== 0 }"
    >
      <img
        aspect-video rounded-t-md object-cover
        un-xl="rounded-md"
        :src="`/images/${project.image}`"
        :alt="`Image Preview of ${project.name}`"
      >
    </div>
    <a
      w-full gap-4 rounded-b-md bg-secondary p-4 transition duration-150
      un-flex="~ col"
      un-xl="border border-foreground/30 hover:border-accent-10 rounded-md"
      :href="project.link"
    >
      <div flex items-center justify-between>
        <h3 font-bold font-display uppercase un-text="xl foreground">
          {{ project.name }}
        </h3>
        <i i-carbon-launch h-6 w-6 text-foreground />
      </div>

      <p leading-7 un-text="foreground/80">
        {{ project.description }}
      </p>

      <div mt-auto flex items-center justify-end justify-between>
        <p font-semibold tracking-wide uppercase un-text="xs foreground">
          <span v-for="stack in project.tech_stacks.join(', ')" :key="stack">{{ stack }}</span>
        </p>
        <div flex items-center gap-2 text-foreground>
          <i i-carbon-calendar h-5 w-5 />
          <span text-xs font-semibold tracking-wide uppercase>
            {{ project.date_created }}
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

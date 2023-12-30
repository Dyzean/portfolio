<script setup>
const isSidebarOpen = ref(false)
</script>

<template>
  <nav
    fixed z-999 w-full flex items-center justify-between px-12 py-6 backdrop-blur-lg
    un-md="relative flex-col h-screen w-auto p-12"
  >
    <a href="/">
      <div i-carbon-campsite h-12 w-12 text-accent-20 un-md="h-16 w-16" />
    </a>

    <ul
      hidden
      un-md="flex flex-col items-center gap-8 text-foreground"
    >
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#home">Home</a>
      </li>
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#skills">Skills</a>
      </li>
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#projects">Projects</a>
      </li>
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#contact">Contact</a>
      </li>
    </ul>

    <button
      hidden rounded-full p-3 transition duration-200
      un-md="block"
      un-bg="secondary hover:accent-10"
      un-text="foreground hover:primary"
    >
      <div i-carbon-moon h-6 w-6 />
    </button>

    <button
      block rounded-full p-3 text-foreground transition duration-200 ease-in-out
      un-md="hidden"
      :class="{ 'rotate-180': isSidebarOpen }"
      @click="isSidebarOpen = !isSidebarOpen"
    >
      <div
        :class="isSidebarOpen ? 'i-carbon-close-large' : 'i-carbon-menu'"
        h-6 w-6
      />
    </button>
  </nav>

  <div
    absolute left-0 z-998 h-screen w-screen flex items-center justify-center text-foreground backdrop-blur-lg transition-bottom duration-300
    un-bg="primary/70"
    un-md="hidden"
    :class="isSidebarOpen ? 'bottom-0' : 'bottom-full'"
  >
    <ul
      flex flex-col items-center justify-center gap-8 text-foreground
      un-md="hidden"
    >
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#home" @click="isSidebarOpen = false">Home</a>
      </li>
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#skills" @click="isSidebarOpen = false">Skills</a>
      </li>
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#projects" @click="isSidebarOpen = false">Projects</a>
      </li>
      <li un-md="rotate-180 vertical-writing-rl">
        <a font-semibold transition duration-200 hover:text-accent-10 href="#contact" @click="isSidebarOpen = false">Contact</a>
      </li>
    </ul>
  </div>
</template>

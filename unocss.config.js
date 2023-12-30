import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

import {
  presetScrollbar,
} from 'unocss-preset-scrollbar'

export default defineConfig({
  theme: {
    colors: {
      primary: '#121212',
      secondary: '#1e1e1e',
      foreground: '#d4cfbf',
      accent: {
        10: '#4d9375',
        20: '#1c6b48',
      },
    },
  },

  shortcuts: {
    'btn': 'max-w-fit flex items-center gap-2 rounded-md bg-accent-10 font-display text-primary transition duration-300 px-6 py-4 hover:shadow-xl shadow-accent-10/50',
    'input-text': 'w-full rounded-sm border border-foreground/30 bg-secondary p-4 text-sm text-foreground duration-150 placeholder:text-foreground/80 hover:border-accent-10 focus:border-accent-10',
  },

  rules: [
    ['vertical-writing-rl', { 'writing-mode': 'vertical-rl' }],
    ['scrollbar-thin', { 'scrollbar-width': 'thin' }],
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        display: 'Red Hat Display:400,600,700',
        text: 'Red Hat Text:400,600,700',
      },
    }),
    presetScrollbar(),
  ],
})

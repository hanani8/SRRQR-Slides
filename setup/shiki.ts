/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      'fortran-free-form',
      'fortran-fixed-form',
      'python',
      'md',
      'matlab'
    ],
  }
})
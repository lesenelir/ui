import type { Preview } from '@storybook/nextjs-vite'
import { DarkModeDocsContainer } from '@storybook-community/storybook-dark-mode/docs'
import type { ThemeVars } from 'storybook/theming'
import { themes } from 'storybook/theming'

import '@lesenelir/ui/styles/main.css'

const brandMeta = {
  brandTitle: 'lesenelir/ui',
  brandUrl: 'https://ui.lesenelir.me',
  brandTarget: '_self',
} as const satisfies Partial<ThemeVars>

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },

    tags: ['autodocs'],
    docs: {
      container: DarkModeDocsContainer,
    },

    // https://github.com/storybook-community/storybook-dark-mode
    darkMode: {
      current: 'light',
      classTarget: 'html',
      stylePreview: true,
      dark: {
        ...themes.dark,
        ...brandMeta,
        brandImage: '/storybook-dark.svg',
        appBg: 'oklch(17.85% 0.0041 285.98)',
        appContentBg: 'oklch(21.32% 0.0042 264.48)',
        appPreviewBg: 'oklch(21.32% 0.0042 264.48)',
        barBg: 'oklch(17.85% 0.0041 285.98)',
      },
      light: {
        ...themes.light,
        ...brandMeta,
        brandImage: '/storybook-light.svg',
        appBg: 'oklch(97.82% 0.0034 247.86)',
        appContentBg: 'oklch(100% 0 0)',
        appPreviewBg: 'oklch(100% 0 0)',
        barBg: 'oklch(97.82% 0.0034 247.86)',
      },
    },
  },
}

export default preview

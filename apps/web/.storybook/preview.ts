import type { Preview } from '@storybook/nextjs-vite'
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

    // https://github.com/storybook-community/storybook-dark-mode
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      dark: {
        ...themes.dark,
        ...brandMeta,
        brandImage: '/storybook-dark.svg',
      },
      light: {
        ...themes.light,
        ...brandMeta,
        brandImage: '/storybook-light.svg',
      },
    },
  },
}

export default preview

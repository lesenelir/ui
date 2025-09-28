// https://storybook.js.org/docs/configure/user-interface/theming
import { create } from 'storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'lesenelir/ui',
  brandImage: './storybook-logo.svg',
  brandTarget: '_self',
})

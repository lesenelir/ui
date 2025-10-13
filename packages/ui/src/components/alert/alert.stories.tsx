import type { Meta, StoryObj } from '@storybook/react'

import { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle } from './alert'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertIcon>
        <span className={'i-tabler-info-circle size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert with an icon, title, and description.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const Info: Story = {
  render: () => (
    <Alert className={'border-blue-500 bg-blue-50 text-blue-900'}>
      <AlertIcon className={'text-blue-500'}>
        <span className={'i-tabler-info-circle size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational alert. It provides helpful context or additional details.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert className={'border-green-500 bg-green-50 text-green-900'}>
      <AlertIcon className={'text-green-500'}>
        <span className={'i-tabler-circle-check size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully. Everything is working as expected.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert className={'border-yellow-500 bg-yellow-50 text-yellow-900'}>
      <AlertIcon className={'text-yellow-500'}>
        <span className={'i-tabler-alert-triangle size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review this warning carefully. Some action may be required on your part.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const ErrorExample: Story = {
  render: () => (
    <Alert className={'border-red-500 bg-red-50 text-red-900'}>
      <AlertIcon className={'text-red-500'}>
        <span className={'i-tabler-circle-x size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred while processing your request. Please try again later.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Alert>
      <AlertIcon>
        <span className={'i-tabler-info-circle size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Alert with title only</AlertTitle>
      </AlertContent>
    </Alert>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertContent>
        <AlertTitle>No Icon Alert</AlertTitle>
        <AlertDescription>
          This alert doesn't have an icon. The content takes up the full width.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Alert className={'max-w-md'}>
      <AlertIcon>
        <span className={'i-tabler-info-circle size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>
          This is a very long title that might wrap to multiple lines depending on the container
          width
        </AlertTitle>
        <AlertDescription>
          This is a longer description that demonstrates how the alert component handles extensive
          text content. The description can span multiple lines and will wrap naturally. It includes
          various sentences to show the text flow and spacing behavior within the alert component.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <Alert className='border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg'>
      <AlertIcon className='text-purple-600'>
        <span className={'i-tabler-star size-5'} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle className='text-purple-900 text-lg'>Custom Styled Alert</AlertTitle>
        <AlertDescription className='text-purple-700'>
          This alert demonstrates custom styling with gradient background and custom colors.
        </AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

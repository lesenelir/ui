import { Button } from '@lesenelir/ui/button'
import { Input } from '@lesenelir/ui/input'
import { Progress } from '@lesenelir/ui/progress'
import type { Meta, StoryObj } from '@storybook/react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here with additional details.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content area of the card. You can place any content here including text,
          images, forms, or other components.
        </p>
      </CardContent>
      <CardFooter>
        <Button type={'button'} variant={'default'} tint={'default'}>
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button type={'button'} variant={'link'} tint={'default'}>
            Mark all read
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className={'space-y-2'}>
          <div className={'rounded border p-3'}>
            <p className={'font-medium'}>New message from John</p>
            <p className={'text-sm opacity-60'}>2 minutes ago</p>
          </div>
          <div className={'rounded border p-3'}>
            <p className={'font-medium'}>System update available</p>
            <p className={'text-sm opacity-60'}>1 hour ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const TitleWithContent: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A minimal card with just a title and content. Perfect for basic use cases.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Project Status</CardTitle>
        <CardDescription>Current development progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={'space-y-2'}>
          <div className={'flex justify-between'}>
            <span>Completed</span>
            <span className={'font-semibold'}>75%</span>
          </div>
          <Progress value={75} tint={'green'} />
        </div>
      </CardContent>
      <CardFooter className='gap-2'>
        <Button type={'button'} variant={'outline'} tint={'default'}>
          View Details
        </Button>
        <Button type={'button'} variant={'default'} tint={'default'}>
          Continue
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Card className={'w-[400px] cursor-pointer transition-shadow hover:shadow-lg'}>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Click anywhere on this card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This card demonstrates how you can make cards interactive by adding hover effects and
          cursor styles.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your accountt</CardDescription>
        <CardAction>
          <Button variant={'link'}>Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form className={'space-y-4'}>
          <div>
            <label htmlFor={'name'} className={'mb-1 block text-sm font-medium'}>
              Name
            </label>
            <Input type={'text'} id={'name'} placeholder={'Enter your name'} />
          </div>
          <div>
            <label htmlFor={'password'} className={'mb-1 block text-sm font-medium'}>
              Password
            </label>
            <Input type={'password'} id={'password'} placeholder={'Enter your password'} />
          </div>
        </form>
      </CardContent>
      <CardFooter className={'gap-2 flex-col'}>
        <Button type={'button'} variant={'default'} tint={'default'} className={'w-full'}>
          Create
        </Button>
        <Button type={'button'} variant={'outline'} tint={'default'} className={'w-full'}>
          Cancel
        </Button>
      </CardFooter>
    </Card>
  ),
}

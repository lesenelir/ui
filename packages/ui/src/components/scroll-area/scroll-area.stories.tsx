'use client'

import type { Meta, StoryObj } from '@storybook/react'

import { ScrollArea, ScrollBar } from './scroll-area'

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className={'h-72 w-[400px] rounded-md border p-4'}>
      <h4 className={'mb-4 text-sm font-medium leading-none'}>Tags</h4>
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className={'text-sm'}>
          Tag {i + 1}
        </div>
      ))}
    </ScrollArea>
  ),
}

export const WithContent: Story = {
  render: () => (
    <ScrollArea className={'h-[400px] w-[500px] rounded-md border p-6'}>
      <h3 className={'mb-4 text-lg font-semibold'}>The Principles of Design</h3>
      <div className={'space-y-4 text-sm leading-relaxed'}>
        <p>
          Design is not just what it looks like and feels like. Design is how it works. When you're
          a carpenter making a beautiful chest of drawers, you're not going to use a piece of
          plywood on the back, even though it faces the wall and nobody will see it.
        </p>
        <p>
          You'll know it's there, so you're going to use a beautiful piece of wood on the back. For
          you to sleep well at night, the aesthetic, the quality, has to be carried all the way
          through. Great design is about making other designers feel like idiots because that idea
          wasn't theirs.
        </p>
        <p>
          The details are not the details. They make the design. Design is where science and art
          break even. Recognizing the need is the primary condition for design. Good design is
          obvious. Great design is transparent.
        </p>
        <p>
          Design creates culture. Culture shapes values. Values determine the future. The function
          of design is letting design function. Simplicity is not the goal. It is the by-product of
          a good idea and modest expectations.
        </p>
        <p>
          Design is intelligence made visible. Good design is all about making other designers feel
          like idiots because that idea wasn't theirs. The role of the designer is that of a good,
          thoughtful host anticipating the needs of their guests.
        </p>
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className={'w-[400px] rounded-md border'}>
      <div className={'flex w-max space-x-4 p-4'}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={
              'flex size-32 shrink-0 items-center justify-center rounded-md border bg-fg text-sm font-medium'
            }
          >
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation={'horizontal'} />
    </ScrollArea>
  ),
}

export const BothDirections: Story = {
  render: () => (
    <ScrollArea className={'h-[300px] w-[500px] rounded-md border'}>
      <div className={'w-[800px] p-4'}>
        <h4 className={'mb-4 text-sm font-medium'}>Wide and Tall Content</h4>
        <div className={'space-y-2'}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={'text-sm'}>
              This is a very long line of text that extends beyond the container width, requiring
              horizontal scrolling - Row {i + 1}
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation={'horizontal'} />
    </ScrollArea>
  ),
}

export const ChatMessages: Story = {
  render: () => (
    <ScrollArea className={'h-[400px] w-[400px] rounded-md border p-4'}>
      <div className={'space-y-4'}>
        {[
          { user: 'Alice', message: 'Hey, how are you?', time: '10:30 AM' },
          { user: 'Bob', message: "I'm good, thanks! How about you?", time: '10:31 AM' },
          {
            user: 'Alice',
            message: 'Doing great! Working on some new features.',
            time: '10:32 AM',
          },
          { user: 'Bob', message: 'Nice! What kind of features?', time: '10:33 AM' },
          {
            user: 'Alice',
            message: 'Adding scroll areas to our component library.',
            time: '10:34 AM',
          },
          { user: 'Bob', message: 'That sounds really useful!', time: '10:35 AM' },
          {
            user: 'Alice',
            message: 'Yeah, it helps with long content lists.',
            time: '10:36 AM',
          },
          { user: 'Bob', message: 'Looking forward to trying it out.', time: '10:37 AM' },
          { user: 'Alice', message: "I'll send you the link when it's ready.", time: '10:38 AM' },
          { user: 'Bob', message: 'Perfect, thanks!', time: '10:39 AM' },
        ].map((msg, i) => (
          <div key={i} className={'space-y-1'}>
            <div className={'flex items-baseline gap-2'}>
              <span className={'text-sm font-semibold'}>{msg.user}</span>
              <span className={'text-xs text-muted-foreground'}>{msg.time}</span>
            </div>
            <div className={'rounded-lg bg-muted p-3 text-sm'}>{msg.message}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className={'h-[300px] w-[500px] rounded-md border'}>
      <pre className={'p-4 font-mono text-xs'}>
        <code>{`function fibonacci(n: number): number {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const result = exampleArray.map(num => fibonacci(num)).filter(val => val > 100)

console.log('Fibonacci values greater than 100:', result)

// This is a very long comment that extends beyond the typical screen width to demonstrate horizontal scrolling in a code block

export default function Component() {
  return <div>Hello World with a very long string that extends beyond normal viewport width</div>
}`}</code>
      </pre>
      <ScrollBar orientation={'horizontal'} />
    </ScrollArea>
  ),
}

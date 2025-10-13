import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from './avatar'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom className for styling the avatar',
    },
    ref: {
      control: false,
      description: 'Forwarded ref to the root element',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
        alt={'User avatar'}
      />
      <AvatarFallback>LZ</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallbackText: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={'invalid-url'} alt={'User avatar'} />
      <AvatarFallback>LZ</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallbackIcon: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src={'invalid-url'} alt={'User avatar'} />
      <AvatarFallback>
        <span className={'i-tabler-user text-lg'} />
      </AvatarFallback>
    </Avatar>
  ),
}

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

// Size Variants
export const CustomSizes: Story = {
  render: () => (
    <div className={'flex gap-3 items-center'}>
      <Avatar className={'size-6'}>
        <AvatarImage
          src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
          alt={'User avatar'}
        />
        <AvatarFallback className={'text-xs'}>SM</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage
          src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
          alt={'User avatar'}
        />
        <AvatarFallback className={'text-xs'}>Base</AvatarFallback>
      </Avatar>

      <Avatar className={'size-10'}>
        <AvatarImage
          src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
          alt={'User avatar'}
        />
        <AvatarFallback className={'text-sm'}>MD</AvatarFallback>
      </Avatar>

      <Avatar className={'size-16'}>
        <AvatarImage
          src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
          alt={'User avatar'}
        />
        <AvatarFallback className={'text-xl'}>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
}

// Use Cases
export const UserProfile: Story = {
  render: () => (
    <div className={'flex items-center gap-3'}>
      <Avatar>
        <AvatarImage
          src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
          alt={'Lesenelir Zhou'}
        />
        <AvatarFallback>LZ</AvatarFallback>
      </Avatar>
      <div className={'flex flex-col'}>
        <span className={'text-sm font-medium'}>Lesenelir Zhou</span>
        <span className={'text-xs text-fg-rev/60'}>hi@lesenelir.me</span>
      </div>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div className={'flex items-center gap-3'}>
      <div className={'relative inline-block'}>
        <Avatar>
          <AvatarImage
            src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
            alt={'User avatar'}
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span
          className={
            'absolute bottom-0 right-0 block size-2 rounded-full bg-green-500 ring-2 ring-bg'
          }
        />
      </div>

      <div className={'relative inline-block'}>
        <Avatar>
          <AvatarImage
            src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
            alt={'User avatar'}
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span
          className={
            'absolute bottom-0 right-0 block size-2 rounded-full bg-yellow-500 ring-2 ring-bg'
          }
        />
      </div>

      <div className={'relative inline-block'}>
        <Avatar>
          <AvatarImage
            src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
            alt={'User avatar'}
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span
          className={
            'absolute bottom-0 right-0 block size-2 rounded-full bg-gray-400 ring-2 ring-bg'
          }
        />
      </div>
    </div>
  ),
}

export const AvatarGroup: Story = {
  // -space-x-* is used to create overlapping effect
  // ring-2 ring-bg is used to create a border around each avatar
  render: () => (
    <div className={'flex -space-x-3'}>
      <Avatar className={'ring-2 ring-bg'}>
        <AvatarImage src={'https://avatars.githubusercontent.com/u/47740312?v=4'} alt={'User 1'} />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className={'ring-2 ring-bg'}>
        <AvatarImage src={'https://avatars.githubusercontent.com/u/47740312?v=4'} alt={'User 2'} />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className={'ring-2 ring-bg'}>
        <AvatarImage src={'https://avatars.githubusercontent.com/u/47740312?v=4'} alt={'User 3'} />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className={'ring-2 ring-bg'}>
        <AvatarFallback>+2</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const AvatarGroupLarge: Story = {
  render: () => (
    <div className={'flex -space-x-4'}>
      <Avatar className={'size-12 ring-2 ring-bg'}>
        <AvatarImage src={'https://avatars.githubusercontent.com/u/47740312?v=4'} alt={'User 1'} />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className={'size-12 ring-2 ring-bg'}>
        <AvatarImage src={'https://avatars.githubusercontent.com/u/47740312?v=4'} alt={'User 2'} />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className={'size-12 ring-2 ring-bg'}>
        <AvatarImage src={'https://avatars.githubusercontent.com/u/47740312?v=4'} alt={'User 3'} />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className={'size-12 ring-2 ring-bg'}>
        <AvatarImage src={'https://avatars.githubusercontent.com/u/47740312?v=4'} alt={'User 4'} />
        <AvatarFallback>U4</AvatarFallback>
      </Avatar>
      <Avatar className={'size-12 ring-2 ring-bg'}>
        <AvatarFallback className={'text-sm'}>+5</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const TeamMembers: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <h3 className={'text-base font-semibold'}>Team Members</h3>
      <div className={'grid grid-cols-2 gap-4'}>
        <div className={'flex flex-col items-center gap-2 p-4 border rounded-lg'}>
          <div className={'relative'}>
            <Avatar className={'size-16'}>
              <AvatarImage
                src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
                alt={'Lesenelir Zhou 1'}
              />
              <AvatarFallback className={'text-xl'}>LZ</AvatarFallback>
            </Avatar>
            <span
              className={
                'absolute bottom-0 right-0 block size-4 rounded-full bg-green-500 ring-2 ring-bg'
              }
            />
          </div>
          <div className={'text-center'}>
            <div className={'text-sm font-medium'}>Lesenelir Zhou 1</div>
            <div className={'text-xs text-fg-rev/60'}>Designer</div>
          </div>
        </div>
        <div className={'flex flex-col items-center gap-2 p-4 border rounded-lg'}>
          <div className={'relative'}>
            <Avatar className={'size-16'}>
              <AvatarImage
                src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
                alt={'Lesenelir Zhou 2'}
              />
              <AvatarFallback className={'text-xl'}>LZ</AvatarFallback>
            </Avatar>
            <span
              className={
                'absolute bottom-0 right-0 block size-4 rounded-full bg-green-500 ring-2 ring-bg'
              }
            />
          </div>
          <div className={'text-center'}>
            <div className={'text-sm font-medium'}>Lesenelir Zhou 2</div>
            <div className={'text-xs text-fg-rev/60'}>Engineer</div>
          </div>
        </div>
        <div className={'flex flex-col items-center gap-2 p-4 border rounded-lg'}>
          <div className={'relative'}>
            <Avatar className={'size-16'}>
              <AvatarImage
                src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
                alt={'Lesenelir Zhou 3'}
              />
              <AvatarFallback className={'text-xl'}>LZ</AvatarFallback>
            </Avatar>
            <span
              className={
                'absolute bottom-0 right-0 block size-4 rounded-full bg-gray-400 ring-2 ring-bg'
              }
            />
          </div>
          <div className={'text-center'}>
            <div className={'text-sm font-medium'}>Lesenelir Zhou 3</div>
            <div className={'text-xs text-fg-rev/60'}>Manager</div>
          </div>
        </div>
        <div className={'flex flex-col items-center gap-2 p-4 border rounded-lg'}>
          <div className={'relative'}>
            <Avatar className={'size-16'}>
              <AvatarImage
                src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
                alt={'Lesenelir Zhou 4'}
              />
              <AvatarFallback className={'text-xl'}>LZ</AvatarFallback>
            </Avatar>
            <span
              className={
                'absolute bottom-0 right-0 block size-4 rounded-full bg-yellow-500 ring-2 ring-bg'
              }
            />
          </div>
          <div className={'text-center'}>
            <div className={'text-sm font-medium'}>Lesenelir Zhou 4</div>
            <div className={'text-xs text-fg-rev/60'}>Developer</div>
          </div>
        </div>
      </div>
    </div>
  ),
}

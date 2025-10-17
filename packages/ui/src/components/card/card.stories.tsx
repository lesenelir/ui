import { Button } from '@lesenelir/ui/button'
import { Input } from '@lesenelir/ui/input'
import { Progress } from '@lesenelir/ui/progress'
import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
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
        <CardDescription>Enter your email below to login to your account</CardDescription>
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

export const WithTopImage: Story = {
  render: () => (
    <Card className={'w-[400px] overflow-hidden pt-0'}>
      <img
        src={'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80'}
        alt={'Mountain landscape'}
        className={'h-48 w-full object-cover'}
      />
      <CardHeader>
        <CardTitle>Mountain Adventure</CardTitle>
        <CardDescription>Explore the beautiful peaks and valleys</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Discover breathtaking views and unforgettable experiences in the heart of nature. Perfect
          for hiking enthusiasts and adventure seekers.
        </p>
      </CardContent>
      <CardFooter>
        <Button type={'button'} variant={'default'} tint={'default'}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <div className={'flex items-start gap-4'}>
          <Avatar className={'size-12'}>
            <AvatarImage
              src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
              alt={'Lesenelir Zhou'}
            />
            <AvatarFallback className={'text-lg'}>LZ</AvatarFallback>
          </Avatar>
          <div className={'flex-1'}>
            <CardTitle>Lesenelir Zhou</CardTitle>
            <CardDescription>Software Engineer at Home</CardDescription>
          </div>
        </div>
        <CardAction>
          <Button type={'button'} variant={'outline'} tint={'default'}>
            Follow
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          Passionate about building scalable web applications and exploring new technologies.
          Builder and Trader.
        </p>
      </CardContent>
    </Card>
  ),
}

export const UserProfileCard: Story = {
  render: () => (
    <Card className={'w-[400px] overflow-hidden pt-0'}>
      <div className={'relative'}>
        <img
          src={'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80'}
          alt={'Cover'}
          className={'h-32 w-full object-cover'}
        />
        <Avatar className={'absolute -bottom-12 left-6 size-24 rounded-full border-4 border-bg'}>
          <AvatarImage
            src={'https://avatars.githubusercontent.com/u/47740312?v=4'}
            alt={'Lesenelir Zhou'}
          />
          <AvatarFallback className={'text-lg'}>LZ</AvatarFallback>
        </Avatar>
      </div>
      <CardHeader className={'mt-14'}>
        <CardTitle>Lesenelir Zhou</CardTitle>
        <CardDescription>Software Engineer | Trader | Overwatch Gamer</CardDescription>
        <CardAction>
          <Button type={'button'} variant={'default'} tint={'default'}>
            Message
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className={'space-y-4'}>
          <p>
            Creating beautiful and intuitive user experiences. Based in Mars, working remotely the
            whole universe.
          </p>
          <div className={'flex gap-4 text-sm'}>
            <div>
              <span className={'font-semibold'}>1.2K</span> Followers
            </div>
            <div>
              <span className={'font-semibold'}>456</span> Following
            </div>
            <div>
              <span className={'font-semibold'}>89</span> Posts
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const WithThumbnail: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Latest Article</CardTitle>
        <CardDescription>Published 2 days ago</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={'flex gap-4'}>
          <img
            src={'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80'}
            alt={'Article thumbnail'}
            className={'h-24 w-24 flex-shrink-0 rounded-lg object-cover'}
          />
          <div className={'flex-1'}>
            <h3 className={'mb-2 font-semibold'}>Building Modern Web Applications</h3>
            <p className={'text-sm opacity-60'}>
              Learn the best practices for creating fast, responsive, and maintainable web
              applications in 2024.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button type={'button'} variant={'link'} tint={'default'}>
          Read Article →
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <Card className={'w-[350px] overflow-hidden pt-0'}>
      <div className={'relative'}>
        <img
          src={'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80'}
          alt={'Product'}
          className={'h-56 w-full object-cover'}
        />
        <div
          className={'absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-sm text-white'}
        >
          -20%
        </div>
      </div>
      <CardHeader>
        <CardTitle>Premium Headphones</CardTitle>
        <CardDescription>High-quality wireless audio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={'flex items-baseline gap-2'}>
          <span className={'text-2xl font-bold'}>$159.99</span>
          <span className={'text-sm text-gray-500 line-through'}>$199.99</span>
        </div>
        <div className={'mt-2 flex items-center gap-1'}>
          <span className={'text-yellow-500'}>★★★★★</span>
          <span className={'text-sm opacity-60'}>(124 reviews)</span>
        </div>
      </CardContent>
      <CardFooter className={'gap-2'}>
        <Button type={'button'} variant={'outline'} tint={'default'} className={'flex-1'}>
          Add to Cart
        </Button>
        <Button type={'button'} variant={'default'} tint={'default'} className={'flex-1'}>
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const ImageGallery: Story = {
  render: () => (
    <Card className={'w-[400px]'}>
      <CardHeader>
        <CardTitle>Photo Gallery</CardTitle>
        <CardDescription>Recent uploads from your collection</CardDescription>
        <CardAction>
          <Button type={'button'} variant={'link'} tint={'default'}>
            View All
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className={'grid grid-cols-3 gap-2'}>
          <img
            src={'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80'}
            alt={'Gallery 1'}
            className={'aspect-square rounded-lg object-cover'}
          />
          <img
            src={'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80'}
            alt={'Gallery 2'}
            className={'aspect-square rounded-lg object-cover'}
          />
          <img
            src={'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80'}
            alt={'Gallery 3'}
            className={'aspect-square rounded-lg object-cover'}
          />
          <img
            src={'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80'}
            alt={'Gallery 4'}
            className={'aspect-square rounded-lg object-cover'}
          />
          <img
            src={'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80'}
            alt={'Gallery 5'}
            className={'aspect-square rounded-lg object-cover'}
          />
          <img
            src={'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&q=80'}
            alt={'Gallery 6'}
            className={'aspect-square rounded-lg object-cover'}
          />
        </div>
      </CardContent>
    </Card>
  ),
}

export const PricingCard: Story = {
  render: () => (
    <Card className={'w-[350px]'}>
      <CardHeader>
        <CardTitle>Professional</CardTitle>
        <CardDescription>Perfect for growing teams and businesses</CardDescription>
      </CardHeader>
      <CardContent className={'space-y-6'}>
        <div>
          <div className={'flex items-baseline gap-1'}>
            <span className={'text-4xl font-bold'}>$29</span>
            <span className={'text-sm opacity-60'}>/month</span>
          </div>
          <p className={'mt-1 text-sm opacity-60'}>Billed annually or $35 month-to-month</p>
        </div>
        <div className={'space-y-3'}>
          <div className={'flex items-start gap-3'}>
            <span className={'text-green-500'}>✓</span>
            <span className={'text-sm'}>Unlimited projects</span>
          </div>
          <div className={'flex items-start gap-3'}>
            <span className={'text-green-500'}>✓</span>
            <span className={'text-sm'}>Advanced analytics</span>
          </div>
          <div className={'flex items-start gap-3'}>
            <span className={'text-green-500'}>✓</span>
            <span className={'text-sm'}>24/7 priority support</span>
          </div>
          <div className={'flex items-start gap-3'}>
            <span className={'text-green-500'}>✓</span>
            <span className={'text-sm'}>Custom integrations</span>
          </div>
          <div className={'flex items-start gap-3'}>
            <span className={'text-green-500'}>✓</span>
            <span className={'text-sm'}>Team collaboration tools</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button type={'button'} variant={'default'} tint={'default'} className={'w-full'}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const PricingTiers: Story = {
  render: () => (
    <div className={'flex gap-6'} style={{ alignItems: 'stretch' }}>
      <Card className={'w-[320px]'}>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>Essential features for individuals</CardDescription>
        </CardHeader>
        <CardContent className={'space-y-6'}>
          <div>
            <div className={'flex items-baseline gap-1'}>
              <span className={'text-4xl font-bold'}>$9</span>
              <span className={'text-sm opacity-60'}>/month</span>
            </div>
            <p className={'mt-1 text-sm opacity-60'}>Billed annually</p>
          </div>
          <div className={'space-y-3'}>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Up to 5 projects</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Basic analytics</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Email support</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>1 GB storage</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type={'button'} variant={'outline'} tint={'default'} className={'w-full'}>
            Get Started
          </Button>
        </CardFooter>
      </Card>

      <Card className={'w-[320px] relative border-2 border-blue-500'}>
        <div className={'absolute -top-3 left-1/2 -translate-x-1/2'}>
          <span className={'rounded-full bg-blue-500 px-3 py-1 text-xs text-white'}>
            Most Popular
          </span>
        </div>
        <CardHeader>
          <CardTitle>Professional</CardTitle>
          <CardDescription>Perfect for growing teams</CardDescription>
        </CardHeader>
        <CardContent className={'space-y-6'}>
          <div>
            <div className={'flex items-baseline gap-1'}>
              <span className={'text-4xl font-bold'}>$29</span>
              <span className={'text-sm opacity-60'}>/month</span>
            </div>
            <p className={'mt-1 text-sm opacity-60'}>Billed annually</p>
          </div>
          <div className={'space-y-3'}>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Unlimited projects</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Advanced analytics</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Priority support</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>50 GB storage</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Team collaboration</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type={'button'} variant={'default'} tint={'default'} className={'w-full'}>
            Get Started
          </Button>
        </CardFooter>
      </Card>

      <Card className={'w-[320px]'}>
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>Advanced features for large teams</CardDescription>
        </CardHeader>
        <CardContent className={'space-y-6'}>
          <div>
            <div className={'flex items-baseline gap-1'}>
              <span className={'text-4xl font-bold'}>$99</span>
              <span className={'text-sm opacity-60'}>/month</span>
            </div>
            <p className={'mt-1 text-sm opacity-60'}>Billed annually</p>
          </div>
          <div className={'space-y-3'}>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Everything in Pro</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Dedicated support</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Custom integrations</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>Unlimited storage</span>
            </div>
            <div className={'flex items-start gap-3'}>
              <span className={'text-green-500'}>✓</span>
              <span className={'text-sm'}>SLA guarantee</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type={'button'} variant={'outline'} tint={'default'} className={'w-full'}>
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

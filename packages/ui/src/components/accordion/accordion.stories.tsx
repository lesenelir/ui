import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'split', 'shadow'],
      description: 'The visual style variant of the accordion',
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether single or multiple items can be opened',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether items can be collapsed (only for single type)',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'default',
  },
  render: args => (
    <div className={'w-[450px]'}>
      <Accordion {...args}>
        <AccordionItem value={'item-1'}>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and uses Radix UI primitives for
            accessibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-2'}>
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that you can customize with Tailwind CSS classes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-3'}>
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It uses smooth animations for opening and closing content with CSS transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Split: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'split',
  },
  render: args => (
    <div className={'w-[450px]'}>
      <Accordion {...args}>
        <AccordionItem value={'item-1'}>
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces. It lets you create reusable
            components and manage state efficiently.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-2'}>
          <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
          <AccordionContent>
            Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to
            build custom designs directly in your markup.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-3'}>
          <AccordionTrigger>What is Radix UI?</AccordionTrigger>
          <AccordionContent>
            Radix UI is a collection of unstyled, accessible components for building high-quality
            design systems and web apps in React.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Shadow: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'shadow',
  },
  render: args => (
    <div className={'w-[450px]'}>
      <Accordion {...args}>
        <AccordionItem value={'item-1'}>
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            Install the package using your preferred package manager and import the components you
            need into your project.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-2'}>
          <AccordionTrigger>Customization</AccordionTrigger>
          <AccordionContent>
            Customize the appearance using Tailwind CSS classes or by passing custom className props
            to any component.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-3'}>
          <AccordionTrigger>API Reference</AccordionTrigger>
          <AccordionContent>
            Check the documentation for detailed information about all available props and their
            types.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    variant: 'default',
  },
  render: args => (
    <div className={'w-[450px]'}>
      <Accordion {...args}>
        <AccordionItem value={'item-1'}>
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            Multiple items can be opened at the same time when using the 'multiple' type prop.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-2'}>
          <AccordionTrigger>Flexibility</AccordionTrigger>
          <AccordionContent>
            Choose between single and multiple modes based on your use case and user experience
            needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-3'}>
          <AccordionTrigger>Use Cases</AccordionTrigger>
          <AccordionContent>
            Perfect for FAQ sections, settings panels, and content-heavy interfaces that need
            organization.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const SingleItem: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'split',
  },
  render: args => (
    <div className={'w-[450px]'}>
      <Accordion {...args}>
        <AccordionItem value={'item-1'}>
          <AccordionTrigger>Can I use this in production?</AccordionTrigger>
          <AccordionContent>
            Yes! This component is production-ready and has been tested across different browsers
            and devices. It follows accessibility best practices and provides a great user
            experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Nested: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'shadow',
  },
  render: args => (
    <div className={'w-[600px]'}>
      <Accordion {...args}>
        <AccordionItem value={'item-1'}>
          <AccordionTrigger>Frontend Technologies</AccordionTrigger>
          <AccordionContent>
            <div className={'mb-4'}>
              Modern frontend development encompasses various technologies and frameworks. Explore
              the details below:
            </div>
            {/* Nested accordion */}
            <Accordion type={'single'} collapsible variant={'default'}>
              <AccordionItem value={'nested-1-1'}>
                <AccordionTrigger>JavaScript Frameworks</AccordionTrigger>
                <AccordionContent>
                  Popular frameworks include React, Vue, Angular, and Svelte. Each offers unique
                  approaches to building user interfaces.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={'nested-1-2'}>
                <AccordionTrigger>CSS Solutions</AccordionTrigger>
                <AccordionContent>
                  From traditional CSS to preprocessors like Sass, and modern solutions like
                  Tailwind CSS and CSS-in-JS libraries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={'nested-1-3'}>
                <AccordionTrigger>Build Tools</AccordionTrigger>
                <AccordionContent>
                  Tools like Vite, Webpack, and Turbopack help optimize and bundle your application
                  for production.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-2'}>
          <AccordionTrigger>Backend Technologies</AccordionTrigger>
          <AccordionContent>
            <div className={'mb-4'}>
              Backend development powers the server-side logic and data management:
            </div>
            <Accordion type={'single'} collapsible variant={'split'}>
              <AccordionItem value={'nested-2-1'}>
                <AccordionTrigger>Node.js Ecosystem</AccordionTrigger>
                <AccordionContent>
                  Express, Fastify, NestJS, and other frameworks provide robust server-side
                  solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={'nested-2-2'}>
                <AccordionTrigger>Databases</AccordionTrigger>
                <AccordionContent>
                  Choose between SQL databases like PostgreSQL, MySQL, or NoSQL options like MongoDB
                  and Redis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'item-3'}>
          <AccordionTrigger>DevOps & Deployment</AccordionTrigger>
          <AccordionContent>
            Cloud platforms like AWS, Vercel, and Netlify make deployment easy. Container
            technologies like Docker and orchestration with Kubernetes help manage complex
            applications at scale.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

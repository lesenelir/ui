import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'underline', 'bordered', 'light'],
      description: 'The visual style variant of the tabs',
    },
    defaultValue: {
      control: 'text',
      description: 'The default active tab value',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    variant: 'solid',
    defaultValue: 'tab1',
  },
  render: args => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value={'tab1'}>Account</TabsTrigger>
        <TabsTrigger value={'tab2'}>Password</TabsTrigger>
        <TabsTrigger value={'tab3'}>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>
        <div className={'p-4 text-sm'}>Manage your account settings and preferences.</div>
      </TabsContent>
      <TabsContent value={'tab2'}>
        <div className={'p-4 text-sm'}>Change your password and security settings.</div>
      </TabsContent>
      <TabsContent value={'tab3'}>
        <div className={'p-4 text-sm'}>Configure application settings.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const Underline: Story = {
  args: {
    variant: 'underline',
    defaultValue: 'tab1',
  },
  render: args => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value={'tab1'}>Overview</TabsTrigger>
        <TabsTrigger value={'tab2'}>Analytics</TabsTrigger>
        <TabsTrigger value={'tab3'}>Reports</TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>
        <div className={'p-4 text-sm'}>Dashboard overview and key metrics.</div>
      </TabsContent>
      <TabsContent value={'tab2'}>
        <div className={'p-4 text-sm'}>Detailed analytics and insights.</div>
      </TabsContent>
      <TabsContent value={'tab3'}>
        <div className={'p-4 text-sm'}>Generate and view reports.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    defaultValue: 'tab1',
  },
  render: args => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value={'tab1'}>Profile</TabsTrigger>
        <TabsTrigger value={'tab2'}>Notifications</TabsTrigger>
        <TabsTrigger value={'tab3'}>Privacy</TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>
        <div className={'p-4 text-sm'}>Update your profile information.</div>
      </TabsContent>
      <TabsContent value={'tab2'}>
        <div className={'p-4 text-sm'}>Manage notification preferences.</div>
      </TabsContent>
      <TabsContent value={'tab3'}>
        <div className={'p-4 text-sm'}>Control your privacy settings.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const Light: Story = {
  args: {
    variant: 'light',
    defaultValue: 'tab1',
  },
  render: args => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value={'tab1'}>General</TabsTrigger>
        <TabsTrigger value={'tab2'}>Billing</TabsTrigger>
        <TabsTrigger value={'tab3'}>Team</TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>
        <div className={'p-4 text-sm'}>General settings and preferences.</div>
      </TabsContent>
      <TabsContent value={'tab2'}>
        <div className={'p-4 text-sm'}>Manage billing and subscriptions.</div>
      </TabsContent>
      <TabsContent value={'tab3'}>
        <div className={'p-4 text-sm'}>Invite and manage team members.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 p-8'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Solid</h3>
        <Tabs defaultValue={'tab1'} variant={'solid'}>
          <TabsList>
            <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
            <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
            <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Underline</h3>
        <Tabs defaultValue={'tab1'} variant={'underline'}>
          <TabsList>
            <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
            <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
            <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Bordered</h3>
        <Tabs defaultValue={'tab1'} variant={'bordered'}>
          <TabsList>
            <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
            <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
            <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Light</h3>
        <Tabs defaultValue={'tab1'} variant={'light'}>
          <TabsList>
            <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
            <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
            <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue={'bold'} variant={'solid'}>
      <TabsList>
        <TabsTrigger value={'bold'}>
          <span className={'i-tabler-bold'} />
          Bold
        </TabsTrigger>
        <TabsTrigger value={'italic'}>
          <span className={'i-tabler-italic'} />
          Italic
        </TabsTrigger>
        <TabsTrigger value={'underline'}>
          <span className={'i-tabler-underline'} />
          Underline
        </TabsTrigger>
        <TabsTrigger value={'strikethrough'}>
          <span className={'i-tabler-strikethrough'} />
          Strike
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'bold'}>
        <div className={'p-4 text-sm'}>
          <strong>Bold text</strong> formatting options.
        </div>
      </TabsContent>
      <TabsContent value={'italic'}>
        <div className={'p-4 text-sm'}>
          <em>Italic text</em> formatting options.
        </div>
      </TabsContent>
      <TabsContent value={'underline'}>
        <div className={'p-4 text-sm'}>
          {/* u tag */}
          <u>Underlined text</u> formatting options.
        </div>
      </TabsContent>
      <TabsContent value={'strikethrough'}>
        <div className={'p-4 text-sm'}>
          {/* s tag */}
          <s>Strikethrough text</s> formatting options.
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue={'tab1'} variant={'solid'}>
      <TabsList>
        <TabsTrigger value={'tab1'}>Active</TabsTrigger>
        <TabsTrigger value={'tab2'} disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value={'tab3'}>Available</TabsTrigger>
      </TabsList>
      <TabsContent value={'tab1'}>
        <div className={'p-4 text-sm'}>This tab is active and interactive.</div>
      </TabsContent>
      <TabsContent value={'tab2'}>
        <div className={'p-4 text-sm'}>This tab is disabled.</div>
      </TabsContent>
      <TabsContent value={'tab3'}>
        <div className={'p-4 text-sm'}>This tab is available.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const NavigationTabs: Story = {
  render: () => (
    <Tabs defaultValue={'home'} variant={'underline'}>
      <TabsList>
        <TabsTrigger value={'home'}>
          <span className={'i-tabler-home'} />
          Home
        </TabsTrigger>
        <TabsTrigger value={'about'}>
          <span className={'i-tabler-info-circle'} />
          About
        </TabsTrigger>
        <TabsTrigger value={'services'}>
          <span className={'i-tabler-briefcase'} />
          Services
        </TabsTrigger>
        <TabsTrigger value={'contact'}>
          <span className={'i-tabler-mail'} />
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'home'}>
        <div className={'p-4 text-sm'}>Welcome to our homepage.</div>
      </TabsContent>
      <TabsContent value={'about'}>
        <div className={'p-4 text-sm'}>Learn more about our company.</div>
      </TabsContent>
      <TabsContent value={'services'}>
        <div className={'p-4 text-sm'}>Explore our professional services.</div>
      </TabsContent>
      <TabsContent value={'contact'}>
        <div className={'p-4 text-sm'}>Get in touch with us.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const SettingsTabs: Story = {
  render: () => (
    <Tabs defaultValue={'account'} variant={'bordered'}>
      <TabsList>
        <TabsTrigger value={'account'}>
          <span className={'i-tabler-user'} />
          Account
        </TabsTrigger>
        <TabsTrigger value={'privacy'}>
          <span className={'i-tabler-lock'} />
          Privacy
        </TabsTrigger>
        <TabsTrigger value={'notifications'}>
          <span className={'i-tabler-bell'} />
          Notifications
        </TabsTrigger>
        <TabsTrigger value={'appearance'}>
          <span className={'i-tabler-palette'} />
          Appearance
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'account'}>
        <div className={'p-4 text-sm'}>Manage your account details and preferences.</div>
      </TabsContent>
      <TabsContent value={'privacy'}>
        <div className={'p-4 text-sm'}>Control who can see your information.</div>
      </TabsContent>
      <TabsContent value={'notifications'}>
        <div className={'p-4 text-sm'}>Choose what notifications you receive.</div>
      </TabsContent>
      <TabsContent value={'appearance'}>
        <div className={'p-4 text-sm'}>Customize the look and feel.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const DashboardTabs: Story = {
  render: () => (
    <Tabs defaultValue={'overview'} variant={'light'}>
      <TabsList>
        <TabsTrigger value={'overview'}>
          <span className={'i-tabler-layout-dashboard'} />
          Overview
        </TabsTrigger>
        <TabsTrigger value={'analytics'}>
          <span className={'i-tabler-chart-line'} />
          Analytics
        </TabsTrigger>
        <TabsTrigger value={'reports'}>
          <span className={'i-tabler-file-text'} />
          Reports
        </TabsTrigger>
        <TabsTrigger value={'settings'}>
          <span className={'i-tabler-settings'} />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value={'overview'}>
        <div className={'p-4 text-sm'}>Key metrics and dashboard overview.</div>
      </TabsContent>
      <TabsContent value={'analytics'}>
        <div className={'p-4 text-sm'}>Detailed analytics and data insights.</div>
      </TabsContent>
      <TabsContent value={'reports'}>
        <div className={'p-4 text-sm'}>Generate and download reports.</div>
      </TabsContent>
      <TabsContent value={'settings'}>
        <div className={'p-4 text-sm'}>Configure dashboard settings.</div>
      </TabsContent>
    </Tabs>
  ),
}

export const FullShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-8 p-8'}>
      <div>
        <h2 className={'text-2xl font-bold mb-6'}>Tabs Component Showcase</h2>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-4'}>Variants</h3>
        <div className={'flex flex-col gap-6'}>
          <div>
            <p className={'text-sm text-fg/70 mb-2'}>Solid</p>
            <Tabs defaultValue={'tab1'} variant={'solid'}>
              <TabsList>
                <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
                <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
                <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div>
            <p className={'text-sm text-fg/70 mb-2'}>Underline</p>
            <Tabs defaultValue={'tab1'} variant={'underline'}>
              <TabsList>
                <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
                <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
                <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div>
            <p className={'text-sm text-fg/70 mb-2'}>Bordered</p>
            <Tabs defaultValue={'tab1'} variant={'bordered'}>
              <TabsList>
                <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
                <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
                <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div>
            <p className={'text-sm text-fg/70 mb-2'}>Light</p>
            <Tabs defaultValue={'tab1'} variant={'light'}>
              <TabsList>
                <TabsTrigger value={'tab1'}>Tab 1</TabsTrigger>
                <TabsTrigger value={'tab2'}>Tab 2</TabsTrigger>
                <TabsTrigger value={'tab3'}>Tab 3</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-4'}>With Icons</h3>
        <Tabs defaultValue={'code'} variant={'solid'}>
          <TabsList>
            <TabsTrigger value={'code'}>
              <span className={'i-tabler-code'} />
              Code
            </TabsTrigger>
            <TabsTrigger value={'preview'}>
              <span className={'i-tabler-eye'} />
              Preview
            </TabsTrigger>
            <TabsTrigger value={'diff'}>
              <span className={'i-tabler-git-compare'} />
              Diff
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-4'}>States</h3>
        <Tabs defaultValue={'enabled'} variant={'solid'}>
          <TabsList>
            <TabsTrigger value={'enabled'}>Enabled</TabsTrigger>
            <TabsTrigger value={'disabled'} disabled>
              Disabled
            </TabsTrigger>
            <TabsTrigger value={'active'}>Active</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
}

import type { Meta, StoryObj } from '@storybook/react'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable'

const meta = {
  title: 'UI/Resizable',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The direction of the resizable panel group',
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'horizontal'}
      className={'max-w-md rounded-lg border md:min-w-[450px]'}
    >
      <ResizablePanel defaultSize={50}>
        <div className={'flex h-[200px] items-center justify-center p-6'}>
          <span className={'font-semibold'}>One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction={'vertical'}>
          <ResizablePanel defaultSize={25}>
            <div className={'flex h-full items-center justify-center p-6'}>
              <span className={'font-semibold'}>Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className={'flex h-full items-center justify-center p-6'}>
              <span className={'font-semibold'}>Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'horizontal'}
      className={'min-h-[200px] max-w-md rounded-lg border'}
    >
      <ResizablePanel defaultSize={50}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Left</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Right</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'vertical'}
      className={'min-h-[200px] max-w-md rounded-lg border'}
    >
      <ResizablePanel defaultSize={50}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Top</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Bottom</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithoutHandle: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'horizontal'}
      className={'min-h-[200px] max-w-md rounded-lg border'}
    >
      <ResizablePanel defaultSize={50}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Left</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle={false} />
      <ResizablePanel defaultSize={50}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Right</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithMinMax: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'horizontal'}
      className={'min-h-[200px] max-w-md rounded-lg border'}
    >
      <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'text-center text-sm font-semibold'}>
            Min: 20%
            <br />
            Max: 40%
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Flexible</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'horizontal'}
      className={'min-h-[200px] max-w-md rounded-lg border'}
    >
      <ResizablePanel defaultSize={33}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Left</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={34}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Center</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={33}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Right</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const NestedComplex: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'horizontal'}
      className={'min-h-[400px] max-w-2xl rounded-lg border'}
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction={'vertical'}>
          <ResizablePanel defaultSize={60}>
            <div className={'flex h-full items-center justify-center p-6'}>
              <span className={'font-semibold'}>Main Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <ResizablePanelGroup direction={'horizontal'}>
              <ResizablePanel defaultSize={50}>
                <div className={'flex h-full items-center justify-center p-6'}>
                  <span className={'font-semibold'}>Panel A</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle={false} />
              <ResizablePanel defaultSize={50}>
                <div className={'flex h-full items-center justify-center p-6'}>
                  <span className={'font-semibold'}>Panel B</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Inspector</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const CodeEditor: Story = {
  render: () => (
    <ResizablePanelGroup
      direction={'horizontal'}
      className={'min-h-[400px] max-w-3xl rounded-lg border'}
    >
      <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
        <div className={'flex h-full flex-col gap-2 p-4'}>
          <span className={'text-sm font-semibold'}>Explorer</span>
          <div className={'flex flex-col gap-1 text-xs'}>
            <div>src/</div>
            <div className={'pl-2'}>components/</div>
            <div className={'pl-4'}>Button.tsx</div>
            <div className={'pl-4'}>Input.tsx</div>
            <div className={'pl-2'}>utils/</div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction={'vertical'}>
          <ResizablePanel defaultSize={70}>
            <div className={'flex h-full items-center justify-center p-6'}>
              <span className={'font-semibold'}>Code Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <div className={'flex h-full items-center justify-center p-6'}>
              <span className={'font-semibold'}>Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
        <div className={'flex h-full items-center justify-center p-6'}>
          <span className={'font-semibold'}>Properties</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Showcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-8 p-4'}>
      <div>
        <h3 className={'mb-4 text-sm font-semibold'}>Horizontal Layout</h3>
        <ResizablePanelGroup
          direction={'horizontal'}
          className={'min-h-[150px] max-w-md rounded-lg border'}
        >
          <ResizablePanel defaultSize={50}>
            <div className={'flex h-full items-center justify-center p-4'}>
              <span className={'text-sm font-semibold'}>Left</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className={'flex h-full items-center justify-center p-4'}>
              <span className={'text-sm font-semibold'}>Right</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div>
        <h3 className={'mb-4 text-sm font-semibold'}>Vertical Layout</h3>
        <ResizablePanelGroup
          direction={'vertical'}
          className={'min-h-[150px] max-w-md rounded-lg border'}
        >
          <ResizablePanel defaultSize={50}>
            <div className={'flex h-full items-center justify-center p-4'}>
              <span className={'text-sm font-semibold'}>Top</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className={'flex h-full items-center justify-center p-4'}>
              <span className={'text-sm font-semibold'}>Bottom</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div>
        <h3 className={'mb-4 text-sm font-semibold'}>Without Handle Grip</h3>
        <ResizablePanelGroup
          direction={'horizontal'}
          className={'min-h-[150px] max-w-md rounded-lg border'}
        >
          <ResizablePanel defaultSize={50}>
            <div className={'flex h-full items-center justify-center p-4'}>
              <span className={'text-sm font-semibold'}>Left</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle={false} />
          <ResizablePanel defaultSize={50}>
            <div className={'flex h-full items-center justify-center p-4'}>
              <span className={'text-sm font-semibold'}>Right</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div>
        <h3 className={'mb-4 text-sm font-semibold'}>Nested Layout</h3>
        <ResizablePanelGroup
          direction={'horizontal'}
          className={'min-h-[200px] max-w-md rounded-lg border'}
        >
          <ResizablePanel defaultSize={50}>
            <div className={'flex h-full items-center justify-center p-4'}>
              <span className={'text-sm font-semibold'}>One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction={'vertical'}>
              <ResizablePanel defaultSize={50}>
                <div className={'flex h-full items-center justify-center p-4'}>
                  <span className={'text-sm font-semibold'}>Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className={'flex h-full items-center justify-center p-4'}>
                  <span className={'text-sm font-semibold'}>Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  ),
}

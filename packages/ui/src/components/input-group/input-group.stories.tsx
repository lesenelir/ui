import type React from 'react'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@lesenelir/ui/button'
import { Label } from '@lesenelir/ui/label'
import type { Meta, StoryObj } from '@storybook/react'
import { useHotkeys } from 'react-hotkeys-hook'

import { cn } from '../../lib/utils'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group'

const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'The content of the input group, including InputGroupAddon and InputGroupInput',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the input group',
    },
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className={'w-[320px]'}>
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-search'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'Search...'} />
      </InputGroup>
    </div>
  ),
}

export const WithRightAddon: Story = {
  render: () => (
    <div className={'w-[320px]'}>
      <InputGroup>
        <InputGroupInput placeholder={'Enter your email'} type={'email'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithBothAddons: Story = {
  render: () => (
    <div className={'w-[320px]'}>
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-currency-dollar'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'0.00'} type={'number'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const BlockStartAddon: Story = {
  render: () => (
    <div className={'w-[320px]'}>
      <InputGroup>
        <InputGroupAddon align={'block-start'}>
          <InputGroupText>Email address</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'you@example.com'} type={'email'} />
      </InputGroup>
    </div>
  ),
}

export const BlockEndAddon: Story = {
  render: () => (
    <div className={'w-[400px]'}>
      <InputGroup>
        <InputGroupInput placeholder={'Enter your message'} />
        <InputGroupAddon align={'block-end'}>
          <InputGroupText>
            <span className={'i-tabler-info-circle'} />
            Maximum 200 characters
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <div className={'w-[400px]'}>
      <InputGroup>
        <InputGroupAddon align={'block-start'}>
          <InputGroupText>Comments</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder={'Write your comments here...'} rows={4} />
      </InputGroup>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-mail'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'Email'} type={'email'} />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-lock'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'Password'} type={'password'} />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-phone'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'Phone number'} type={'tel'} />
      </InputGroup>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'example.com'} />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder={'username'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupText>@gmail.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'0.00'} type={'number'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupText>.00</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithButtons: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      {/* Extra small button */}
      <InputGroup>
        <InputGroupInput placeholder={'Search...'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'xs'}>
            <span className={'i-tabler-search'} />
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {/* Small button */}
      <InputGroup>
        <InputGroupInput placeholder={'Enter URL'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'sm'}>
            <span className={'i-tabler-copy'} />
            Copy
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {/* Icon only button */}
      <InputGroup>
        <InputGroupInput placeholder={'Password'} type={'password'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'icon-xs'}>
            <span className={'i-tabler-eye'} />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const MixedContent: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      {/* Icon + Input + Button */}
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-search'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'Search products...'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'xs'}>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {/* Text + Input + Icon Button */}
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'example.com'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'icon-xs'}>
            <span className={'i-tabler-external-link'} />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {/* Multiple buttons */}
      <InputGroup>
        <InputGroupInput placeholder={'Enter amount'} type={'number'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'icon-xs'}>
            <span className={'i-tabler-minus'} />
          </InputGroupButton>
          <InputGroupButton size={'icon-xs'}>
            <span className={'i-tabler-plus'} />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <InputGroup data-disabled={true}>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-search'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput disabled placeholder={'Search...'} />
      </InputGroup>

      <InputGroup data-disabled={true}>
        <InputGroupInput disabled placeholder={'Email'} type={'email'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton disabled size={'xs'}>
            Subscribe
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-mail'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          aria-invalid={true}
          placeholder={'Email'}
          type={'email'}
          defaultValue={'invalid-email'}
        />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align={'block-start'}>
          <InputGroupText>Username</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-invalid={true} placeholder={'Enter username'} defaultValue={'a'} />
        <InputGroupAddon align={'block-end'}>
          <InputGroupText>
            <span className={'i-tabler-alert-circle'} />
            Username must be at least 3 characters
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className={'flex flex-col gap-4 w-[400px]'}>
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>ID</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput readOnly defaultValue={'USR-12345'} />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-link'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput readOnly defaultValue={'https://example.com/share/abc123'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'icon-xs'}>
            <span className={'i-tabler-copy'} />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const AllAlignments: Story = {
  render: () => (
    <div className={'flex flex-col gap-6 w-[400px]'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Inline Start</h3>
        <InputGroup>
          <InputGroupAddon align={'inline-start'}>
            <InputGroupText>
              <span className={'i-tabler-search'} />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder={'Search...'} />
        </InputGroup>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Inline End</h3>
        <InputGroup>
          <InputGroupInput placeholder={'Email'} type={'email'} />
          <InputGroupAddon align={'inline-end'}>
            <InputGroupText>@example.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Block Start</h3>
        <InputGroup>
          <InputGroupAddon align={'block-start'}>
            <InputGroupText>Label</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder={'Enter value'} />
        </InputGroup>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Block End</h3>
        <InputGroup>
          <InputGroupInput placeholder={'Enter value'} />
          <InputGroupAddon align={'block-end'}>
            <InputGroupText>Helper text</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className={'overflow-hidden p-4'}>
        <h3 className={'text-lg font-semibold mb-3'}>Combined</h3>

        <div
          className={cn(
            'rounded-lg border',
            'transition-[color,box-shadow]',
            'has-[[data-slot=input-group-control]:focus-visible]:border-ac has-[[data-slot=input-group-control]:focus-visible]:ring-ac/30 has-[[data-slot=input-group-control]:focus-visible]:ring-2'
          )}
        >
          <InputGroup
            className={
              'border-0 rounded-none shadow-none has-[[data-slot=input-group-control]:focus-visible]:ring-0'
            }
          >
            <InputGroupAddon align={'inline-start'}>
              <InputGroupText>
                <span className={'i-tabler-search'} />
              </InputGroupText>
            </InputGroupAddon>

            <InputGroupInput placeholder={'search'} type={'text'} />

            <InputGroupAddon align={'inline-end'}>
              <InputGroupText>
                <span className={'i-tabler-send'} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <div className={'px-3 py-2 border-t text-sm'}>
            <span>suggestions</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const FullShowcase: Story = {
  render: () => (
    <div className={'flex flex-col gap-8 w-[500px]'}>
      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Basic Inputs</h3>
        <div className={'flex flex-col gap-3'}>
          <InputGroup>
            <InputGroupAddon align={'inline-start'}>
              <InputGroupText>
                <span className={'i-tabler-user'} />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder={'Username'} />
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder={'Email'} type={'email'} />
            <InputGroupAddon align={'inline-end'}>
              <InputGroupButton size={'xs'}>Verify</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>With Labels</h3>
        <div className={'flex flex-col gap-3'}>
          <InputGroup>
            <InputGroupAddon align={'block-start'}>
              <InputGroupText>First name</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder={'John'} />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon align={'block-start'}>
              <InputGroupText>Last name</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder={'Doe'} />
          </InputGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>States</h3>
        <div className={'flex flex-col gap-3'}>
          <InputGroup data-disabled={true}>
            <InputGroupAddon align={'inline-start'}>
              <InputGroupText>Disabled</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput disabled placeholder={'Disabled input'} />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon align={'inline-start'}>
              <InputGroupText>Error</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput aria-invalid={true} placeholder={'Invalid input'} />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon align={'inline-start'}>
              <InputGroupText>Read-only</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput readOnly defaultValue={'Read-only value'} />
          </InputGroup>
        </div>
      </div>

      <div>
        <h3 className={'text-lg font-semibold mb-3'}>Textarea</h3>
        <InputGroup>
          <InputGroupAddon align={'block-start'}>
            <InputGroupText>Description</InputGroupText>
          </InputGroupAddon>
          <InputGroupTextarea placeholder={'Write something...'} rows={4} />
        </InputGroup>
      </div>
    </div>
  ),
}

export const SearchWithButton: Story = {
  render: () => (
    <div className={'w-[500px]'}>
      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-search'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'Search for products, categories, or brands...'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'sm'}>
            <span className={'i-tabler-arrow-right'} />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const UrlInput: Story = {
  render: () => (
    <div className={'w-[500px] flex flex-col gap-4 p-6 border rounded-lg'}>
      <div>
        <Label htmlFor={'website'}>Website URL</Label>
        <p className={'text-sm text-fg-rev/60 mb-2'}>Enter your website address</p>
      </div>

      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id={'website'} placeholder={'www.example'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <div className={'flex gap-2'}>
        <InputGroup>
          <InputGroupAddon align={'inline-start'}>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder={'example.com'} />
          <InputGroupAddon align={'inline-end'}>
            <InputGroupButton size={'icon-xs'}>
              <span className={'i-tabler-external-link'} />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  ),
}

export const PasswordWithToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={'w-[400px] flex flex-col gap-4 p-6 border rounded-lg'}>
        <div>
          <Label htmlFor={'password'}>Password</Label>
          <p className={'text-sm text-fg-rev/60 mb-2'}>Enter a secure password</p>
        </div>

        <InputGroup>
          <InputGroupAddon align={'inline-start'}>
            <InputGroupText>
              <span className={'i-tabler-lock'} />
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            id={'password'}
            type={showPassword ? 'text' : 'password'}
            placeholder={'Enter password'}
          />
          <InputGroupAddon align={'inline-end'}>
            <InputGroupButton
              size={'icon-xs'}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <span className={showPassword ? 'i-tabler-eye-off' : 'i-tabler-eye'} />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  },
}

export const EmailSubscription: Story = {
  render: () => (
    <div className={'w-[500px] flex flex-col gap-4 p-8 border rounded-lg bg-fg-rev/[0.02]'}>
      <div className={'text-center'}>
        <h2 className={'text-2xl font-bold mb-2'}>Subscribe to our newsletter</h2>
        <p className={'text-fg-rev/60'}>Get the latest updates delivered to your inbox</p>
      </div>

      <InputGroup>
        <InputGroupAddon align={'inline-start'}>
          <InputGroupText>
            <span className={'i-tabler-mail'} />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder={'you@example.com'} type={'email'} />
        <InputGroupAddon align={'inline-end'}>
          <InputGroupButton size={'sm'}>Subscribe</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <p className={'text-xs text-fg-rev/50 text-center'}>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  ),
}

const autoCompletionSuggestions = [
  '123 apple',
  '123 banana',
  '123 orange',
  '123 grape',
  '123 watermelon',
  '123 pineapple',
  '123 mango',
]

export const SearchWithAutoComplete: Story = {
  render: () => {
    const [query, setQuery] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(-1)

    const suggestions = autoCompletionSuggestions.filter(s =>
      s.toLowerCase().includes(query.toLowerCase())
    )

    const showSuggestions = isFocused && query.trim() !== '' && suggestions.length > 0

    // Keyboard navigation for suggestions
    useHotkeys(
      'ArrowDown',
      (e: KeyboardEvent) => {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % suggestions.length)
      },
      {
        enabled: showSuggestions,
        enableOnFormTags: ['INPUT'],
      }
    )

    useHotkeys(
      'ArrowUp',
      (e: KeyboardEvent) => {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + suggestions.length) % suggestions.length)
      },
      {
        enabled: showSuggestions,
        enableOnFormTags: ['INPUT'],
      }
    )

    const performSearch = (value: string) => {
      const trimmed = value.trim()
      if (trimmed === '') return

      setQuery(trimmed)
      setSelectedIndex(-1)
      // setIsFocused(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        // Don't submit if IME composition is in progress
        if (e.nativeEvent.isComposing) return

        // Allow newline with Shift+Enter
        if (e.shiftKey) return

        // Submit on Enter (without Shift)
        e.preventDefault()

        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          // Use selected suggestion if any
          performSearch(suggestions[selectedIndex] ?? query)
        } else {
          // Otherwise, use current query
          performSearch(query)
        }
      }
    }

    return (
      <div className={'size-[380px]'}>
        <p className={'text-xs mb-4'}>Type "123" to see auto-completion suggestions.</p>
        <p className={'text-xs mb-4'}>SelectIndex = {selectedIndex}</p>

        <div
          className={cn(
            'rounded-3xl border overflow-hidden',
            'has-[[data-slot=input-group-control]:focus-visible]:border-ac',
            'has-[[data-slot=input-group-control]:focus-visible]:ring-ac/30',
            'has-[[data-slot=input-group-control]:focus-visible]:ring-2'
          )}
        >
          <InputGroup
            className={
              'border-0 rounded-none shadow-none has-[[data-slot=input-group-control]:focus-visible]:ring-0'
            }
          >
            <InputGroupAddon align={'inline-start'}>
              <InputGroupText>
                <span className={'i-tabler-search'} />
              </InputGroupText>
            </InputGroupAddon>

            <InputGroupInput
              placeholder={'search for something...'}
              className={'min-h-fit'}
              value={query}
              onChange={e => {
                setQuery(e.target.value)
                setSelectedIndex(-1) // Reset selection when typing
              }}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 100)}
            />

            <InputGroupAddon align={'inline-end'}>
              <InputGroupText>
                <span className={'i-tabler-send'} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          {showSuggestions && (
            <div className={'py-1 border-t overflow-y-auto flex flex-col'}>
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant={'ghost'}
                  className={cn(
                    'active:scale-100 hover:bg-ac/10 rounded-none justify-start px-4 py-2 cursor-pointer transition-colors',
                    selectedIndex === index && 'bg-ac/10'
                  )}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => performSearch(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
}

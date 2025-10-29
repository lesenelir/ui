import React from 'react'

import { Avatar, AvatarFallback } from '@lesenelir/ui/avatar'
import { Badge } from '@lesenelir/ui/badge'
import { Checkbox } from '@lesenelir/ui/checkbox'
import type { Meta, StoryObj } from '@storybook/react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
]

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the table',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table className={'w-[600px]'}>
      <TableCaption>A simple table displaying user information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Viewer</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className={'text-left font-bold'}>3 users</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const WithFooterCaption: Story = {
  render: () => (
    <Table className={'w-[700px]'}>
      <TableCaption>Order Summary - Purchased on January 15, 2025</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className={'text-right'}>Price</TableHead>
          <TableHead className={'text-right'}>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Premium Plan</TableCell>
          <TableCell>2</TableCell>
          <TableCell className={'text-right'}>$29.99</TableCell>
          <TableCell className={'text-right'}>$59.98</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Add-on Features</TableCell>
          <TableCell>5</TableCell>
          <TableCell className={'text-right'}>$9.99</TableCell>
          <TableCell className={'text-right'}>$49.95</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Support Package</TableCell>
          <TableCell>1</TableCell>
          <TableCell className={'text-right'}>$99.99</TableCell>
          <TableCell className={'text-right'}>$99.99</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className={'text-right font-bold'}>$209.92</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const InvoiceExample: Story = {
  render: () => (
    <Table className={'w-[750px]'}>
      <TableCaption>Invoice #INV-2025-001 - Due Date: January 31, 2025</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Description</TableHead>
          <TableHead className={'text-center'}>Qty</TableHead>
          <TableHead className={'text-right'}>Unit Price</TableHead>
          <TableHead className={'text-right'}>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className={'font-medium'}>Website Design</div>
            <div className={'text-xs opacity-60'}>Custom responsive design with modern UI</div>
          </TableCell>
          <TableCell className={'text-center'}>1</TableCell>
          <TableCell className={'text-right'}>$2,500.00</TableCell>
          <TableCell className={'text-right'}>$2,500.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className={'font-medium'}>Frontend Development</div>
            <div className={'text-xs opacity-60'}>React + TypeScript implementation</div>
          </TableCell>
          <TableCell className={'text-center'}>40</TableCell>
          <TableCell className={'text-right'}>$150.00</TableCell>
          <TableCell className={'text-right'}>$6,000.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className={'font-medium'}>Backend API</div>
            <div className={'text-xs opacity-60'}>RESTful API with authentication</div>
          </TableCell>
          <TableCell className={'text-center'}>30</TableCell>
          <TableCell className={'text-right'}>$150.00</TableCell>
          <TableCell className={'text-right'}>$4,500.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className={'font-medium'}>Testing & QA</div>
            <div className={'text-xs opacity-60'}>Unit tests and integration tests</div>
          </TableCell>
          <TableCell className={'text-center'}>20</TableCell>
          <TableCell className={'text-right'}>$120.00</TableCell>
          <TableCell className={'text-right'}>$2,400.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Subtotal</TableCell>
          <TableCell className={'text-right'}>$15,400.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3}>Tax (10%)</TableCell>
          <TableCell className={'text-right'}>$1,540.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3} className={'font-bold'}>
            Total
          </TableCell>
          <TableCell className={'text-right font-bold text-lg'}>$16,940.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const UserDataExample: Story = {
  render: () => (
    <Table className={'w-[800px]'}>
      <TableCaption>Team members directory - Last updated: January 2025</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className={'text-right'}>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className={'flex items-center gap-2'}>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className={'font-medium'}>John Doe</div>
                <div className={'text-xs opacity-60'}>Senior Developer</div>
              </div>
            </div>
          </TableCell>
          <TableCell>john.doe@company.com</TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>
            <Badge variant={'solid'} tint={'green'}>
              Active
            </Badge>
          </TableCell>
          <TableCell className={'text-right'}>
            <button type={'button'} className={'text-sm underline'}>
              Edit
            </button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className={'flex items-center gap-2'}>
              <Avatar>
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <div className={'font-medium'}>Jane Smith</div>
                <div className={'text-xs opacity-60'}>Product Designer</div>
              </div>
            </div>
          </TableCell>
          <TableCell>jane.smith@company.com</TableCell>
          <TableCell>Design</TableCell>
          <TableCell>
            <Badge variant={'solid'} tint={'green'}>
              Active
            </Badge>
          </TableCell>
          <TableCell className={'text-right'}>
            <button type={'button'} className={'text-sm underline'}>
              Edit
            </button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className={'flex items-center gap-2'}>
              <Avatar>
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <div>
                <div className={'font-medium'}>Bob Johnson</div>
                <div className={'text-xs opacity-60'}>Marketing Manager</div>
              </div>
            </div>
          </TableCell>
          <TableCell>bob.johnson@company.com</TableCell>
          <TableCell>Marketing</TableCell>
          <TableCell>
            <Badge variant={'solid'} tint={'amber'}>
              On Leave
            </Badge>
          </TableCell>
          <TableCell className={'text-right'}>
            <button type={'button'} className={'text-sm underline'}>
              Edit
            </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([])

    const toggleRow = (id: string) => {
      setSelectedRows(prev =>
        prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
      )
    }

    return (
      <Table className={'w-[720px]'}>
        <TableCaption>Interactive table with selectable rows.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className={'w-10'}></TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className={'text-right'}>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => (
            <TableRow
              key={invoice.invoice}
              data-state={selectedRows.includes(invoice.invoice) ? 'selected' : undefined}
              onClick={() => toggleRow(invoice.invoice)}
              className={'cursor-pointer'}
            >
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(invoice.invoice)}
                  onChange={() => toggleRow(invoice.invoice)}
                />
              </TableCell>
              <TableCell className={'font-medium'}>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className={'text-right'}>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

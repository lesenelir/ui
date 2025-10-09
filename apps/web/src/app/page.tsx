import Link from 'next/link'

import { T } from '@/components/t'

export default function Home() {
  return (
    <div className={'p-4 text-center mt-24'}>
      <Link href='/storybook' className={'underline text-ac'}>
        View Storybook
      </Link>

      <T />
    </div>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className={'p-4 text-center mt-24'}>
      <div>
        <Link href='/storybook' className={'underline text-ac'}>
          View Storybook
        </Link>
      </div>
    </div>
  )
}

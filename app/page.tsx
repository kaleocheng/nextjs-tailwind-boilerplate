import PhHeartFill from '~icons/ph/heart-fill'

import Link from 'next/link'

export default function Index() {
  return (
    <div className="h-screen mt-20 space-y-10">
      <h1 className="flex text-4xl gap-6">
        <p>Welcome to</p>
        <Link href="https://nextjs.org" color="primary" className="text-4xl">
          Next.JS
        </Link>
        <p> + </p>
        <Link
          href="https://tailwindcss.com"
          color="primary"
          className="text-4xl"
        >
          Tailwind CSS
        </Link>
        <p>!</p>
      </h1>
      <footer>
        <Link
          className="flex flex-row justify-center text-lg p-6"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          <PhHeartFill />
        </Link>
      </footer>
    </div>
  )
}

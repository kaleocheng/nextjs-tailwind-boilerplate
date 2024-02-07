import { Divider, Link } from '@nextui-org/react'
import { FaHeart } from 'react-icons/fa'

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
        <Divider />
        <Link
          className="flex flex-row justify-center text-lg p-6"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          <FaHeart />
        </Link>
      </footer>
    </div>
  )
}

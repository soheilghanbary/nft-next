import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>this is my home page</h1>
      <Link href={'/users'}>go to users</Link>
    </div>
  )
}
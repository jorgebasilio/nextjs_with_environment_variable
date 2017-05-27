import Link from 'next/link'
import Router from 'next/router'

export default () => {
  return(
    <div>
      <h1>Example Next.js</h1>
      <Link prefetch
            href='/post'>
        <a>Post</a>
      </Link>
    </div>
  )
}

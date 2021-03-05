import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = React.memo(({ path }) => {
  ;<>
    {path === '/' ? (
      <h1>
        <a href={siteMeta.siteUrl}>{siteMeta.title}</a>
      </h1>
    ) : (
      <p>
        <Link href='/'>
          <a rel='me'>{siteMeta.title}</a>
        </Link>
      </p>
    )}
  </>
})

export default Title

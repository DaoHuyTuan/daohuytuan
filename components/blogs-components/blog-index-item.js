import Link from 'next/link'
import PublishedAt from './published-at'

const Post = ({ title, summary, date, path }) => (
  <article>
    <header>
      <h2>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </h2>

      <PublishedAt link={path} date={date} />
    </header>
    <div className="post-summary">{summary}</div>
  </article>
)

export default Post

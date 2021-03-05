import Link from 'next/link'
import PublishedAt from './published-at'
import { BlogItem, BlogItemTitle } from './blog.style'
function Post({ title, summary, date, path }) {
  return (
    <BlogItem>
      <Link href={path}>
        <BlogItemTitle>{title}</BlogItemTitle>
      </Link>

      <PublishedAt link={path} date={date} />
      <div className='post-summary' style={{ fontFamily: 'Merriweather', fontSize: '20px' }}>
        {summary}
      </div>
    </BlogItem>
  )
}

export default Post

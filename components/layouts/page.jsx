import Layout from './default'

function Page({ meta, children }) {
  return (
    <>
      <article>
        <header>
          <h1>{meta.title}</h1>
        </header>
        <div>{children}</div>
      </article>
      <style jsx>{`
        header {
          margin-bottom: 2em;
        }
      `}</style>
    </>
  )
}

export default Page

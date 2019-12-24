import Head from "next/head";
import Link from "next/link";
export default function HomePage({}) {
  let limit;

  return (
    <>
      <Head>
        <title>Hotel | A react next listing template</title>
      </Head>
    </>
  );
}

HomePage.getInitialProps = async ({ req }) => {
  return {};
};

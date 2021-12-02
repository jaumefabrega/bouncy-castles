import Head from "next/head";
import Link from "next/link";
import Layout from "../../src/modules/general/Layout";
import { getSortedPostsData } from "../../src/services/postsClient";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Purchase({ allPostsData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>Blog | Castillos Hinchables Online</title>
      </Head>
      <section>
        <h1>Blog</h1>
        <p>Blah blah blah</p>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{/* <Date dateString={date} /> */}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

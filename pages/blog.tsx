import Head from "next/head";
import Link from "next/link";
import Layout from "../src/modules/general/Layout";

export default function Purchase() {
  return (
    <Layout home={false}>
      <Head>
        <title>Blog | Castillos Hinchables Online</title>
      </Head>
      <section>
        <h1>Blog</h1>
        <p>Blah blah blah</p>
      </section>
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import Layout from "../src/modules/general/Layout";

export default function Rental() {
  return (
    <Layout home>
      <Head>
        <title>Alquila un castillo hinchable en 2 clicks</title>
      </Head>
      <section>
        <p>Alquila un castillo hinchable</p>
        <p>Blah blah blah todos garantía etc</p>
      </section>
    </Layout>
  );
}

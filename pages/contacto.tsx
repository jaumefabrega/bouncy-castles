import Head from "next/head";
import Link from "next/link";
import Layout from "../src/modules/general/Layout";

export default function Contact() {
  return (
    <Layout home={false}>
      <Head>
        <title>Contacto | Castillos Hinchables Online</title>
      </Head>
      <section>
        <h1>Contacto</h1>
        <p>Blah blah blah</p>
      </section>
    </Layout>
  );
}

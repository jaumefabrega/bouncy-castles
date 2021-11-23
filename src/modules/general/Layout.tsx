import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { urls } from "../../constants";
import styles from "./layout.module.scss";

const name = "Jaume Fàbrega";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alquila y compra castillos hinchables para todo tipo de eventos y fiestas"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Alquila un Castillo Hinchable" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <div>Castillos Hinchables</div>
        <nav className={styles.nav}>
          <Link href={urls.ALQUILER}>
            <a>Alquiler</a>
          </Link>
          <Link href={urls.COMPRA}>
            <a>Compra</a>
          </Link>
          <Link href={urls.BLOG}>
            <a>Blog</a>
          </Link>
          <Link href={urls.CONTACTO}>
            <a>Contacto</a>
          </Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

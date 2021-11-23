import Head from "next/head";
import Link from "next/link";
import Layout from "../src/modules/general/Layout";
import CastleCard from "../src/components/CastleCard/CastleCard";
import styles from "../styles/rental.module.scss";

export default function Rental() {
  return (
    <Layout home>
      <Head>
        <title>
          Alquila un Castillo Hinchable en 2 clicks | Castillos Hinchables
          Online
        </title>
      </Head>
      <section className={styles.section}>
        <div className={styles.filters}>
          <h3>FILTROS</h3>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </div>
        <div className={styles.content}>
          <div>
            <h1>Alquila un Castillo Hinchable</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam quas vitae provident deserunt voluptatibus doloremque
              temporibus ipsam tenetur inventore. Hic, animi illum minima
              nostrum molestiae unde amet ratione sed ab?
            </p>
          </div>
          <CastleCard />
        </div>
      </section>
    </Layout>
  );
}

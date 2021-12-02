import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../src/modules/general/Layout";
import CastleCard from "../src/components/CastleCard/CastleCard";
import SearchFilters from "../src/components/SearchFilters/SearchFilters";
import styles from "../styles/rental.module.scss";
import api from "../src/services/apiClient";

export default function Rental() {
  const [castles, setCastles] = useState([]);

  // for testing only. Will actually be in redux state and called every time location is updated
  useEffect(() => {
    const apiCastles = api.getCastles(1, 2);
    setCastles(apiCastles);
  }, []);

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
          <SearchFilters />
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
          <div className={styles.resultsGrid}>
            {castles.map((castle) => (
              <CastleCard
                key={castle.id}
                name={castle.name}
                description={castle.description}
                dimensions={castle.dimensions}
                personsCapacity={castle.personsCapacity}
                minimumAge={castle.minimumAge}
                price={castle.price.fixed} // FIX: calculate actual final price with services, VAT, etc
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

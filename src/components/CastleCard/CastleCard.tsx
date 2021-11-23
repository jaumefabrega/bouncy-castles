import Head from "next/head";
import Link from "next/link";
import styles from "./castleCard.module.scss";

export default function CastleCard() {
  return (
    <div className={styles.card}>
      <img src="images/default-bouncy-castle.jpg" />
      <div className={styles.content}>
        <h3>Patrulla Canina</h3>
        <p>Precioso castillo con tobogán y muñecos</p>
        <div className={styles.info}>
          <div>
            <img src="images/icons/grid.svg" />
            <p>4x5x7</p>
          </div>
          <div>
            <img src="images/icons/people.svg" />
            <p>4 pers</p>
          </div>
          <div>
            <img src="images/icons/face.svg" />
            <p>&#62;8 años</p>
          </div>
        </div>
        <div className={styles.CTA}>
          <div className={styles.price}>183€</div>
          <button className={styles.CTAButton}>
            <span>Alquilar</span>
            <img src="images/icons/chevron_right.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

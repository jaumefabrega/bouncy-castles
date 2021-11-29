import Head from "next/head";
import Link from "next/link";
import styles from "./castleCard.module.scss";

export default function CastleCard({
  name,
  description,
  dimensions,
  personsCapacity,
  minimumAge,
  price,
}) {
  return (
    <div className={styles.card}>
      <img src="images/default-bouncy-castle.jpg" />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.info}>
          <div>
            <img src="images/icons/grid.svg" />
            <p>
              {dimensions.width}x{dimensions.length}x{dimensions.height}
            </p>
          </div>
          <div>
            <img src="images/icons/people.svg" />
            <p>{personsCapacity} pers</p>
          </div>
          <div>
            <img src="images/icons/face.svg" />
            <p>&#62;{minimumAge} años</p>
          </div>
        </div>
        <div className={styles.CTA}>
          <div className={styles.price}>{price}€</div>
          <button className={styles.CTAButton}>
            <span>Alquilar</span>
            <img src="images/icons/chevron_right.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

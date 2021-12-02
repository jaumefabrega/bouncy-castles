import Head from "next/head";
import Link from "next/link";
import styles from "./searchFilters.module.scss";
import AddressInput from "../../modules/rental/AddressInput/AddressInput";

export default function SearchFilters() {
  return (
    <div className={styles.container}>
      <h3>FILTROS</h3>
      <div className={styles.inputsSection}>
        <div className={styles.field}>
          <AddressInput />
        </div>
        <div className={styles.field}>
          <label htmlFor="capacity">Capacidad</label>
          <select name="capacity" id="capacity">
            <option value="4">4 +</option>
            <option value="6">6 +</option>
            <option value="8">8 +</option>
            <option value="10">10 +</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="">Precio</label>
          <div className={styles.priceWrapper}>
            <input type="number" id="price_min" placeholder="Min" />
            <span>&#8212;</span>
            <input type="number" id="price_max" placeholder="Max" />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="date">Fecha</label>
          <input type="date" id="date" />
        </div>
        <div className={styles.field}>
          <label htmlFor="time_from">Hora</label>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="time_from">desde</label>
                </td>
                <td></td>
                <td>
                  <label htmlFor="time_from">hasta</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="time" id="time_from" />
                </td>
                <td>
                  <span>&#8212;</span>
                </td>
                <td>
                  <input type="time" id="time_to" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.field}>
          <input type="checkbox" id="include_instructor" />
          <label htmlFor="include_instructor">Incluir monitor</label>
        </div>
        <div className={styles.field}>
          <input type="checkbox" id="light_source" />
          <label htmlFor="light_source">Dispongo de punto de luz</label>
        </div>
        <div className={styles.field}>
          <input type="checkbox" id="include_vat" />
          <label htmlFor="include_vat">Incluir IVA</label>
        </div>
      </div>
    </div>
  );
}

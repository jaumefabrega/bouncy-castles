import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import GoogleMapReact from "google-map-react";
import styles from "./addressInput.module.scss";
import api from "../../../services/apiClient";

export default function AddressInput() {
  const geocodingApiKey =
    process.env.NEXT_PUBLIC_GEOCODING_API_KEY || "dumbKey";

  const [addressInput, setAddressInput] = useState("");
  const [formattedAddress, setFormattedAddress] = useState();
  const [location, setLocation] = useState();

  const updateLocation = async (event) => {
    event.preventDefault();
    if (addressInput) {
      const bestMatch = await api.getGeocode(addressInput);
      setFormattedAddress(bestMatch.formattedAddress);
      setLocation(bestMatch.location);
    }
  };

  const defaultMapProps = {
    center: {
      lat: 40.4460805016006,
      lng: -3.171580333435828,
    },
    zoom: 4,
  };

  return (
    <div className={styles.container}>
      Dirección
      <input
        type="text"
        id="address"
        placeholder="Calle, número y Población"
        value={addressInput}
        onChange={(e) => setAddressInput(e.target.value)}
      />
      <button type="button" onClick={updateLocation}>
        Buscar
      </button>
      <br />
      Resultado
      <br />
      Dirección: {formattedAddress}
      <br />
      Localización: {location && `${location?.lat} , ${location?.lng}`}
      <div className={styles.mapWrapper}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: geocodingApiKey }}
          defaultCenter={defaultMapProps.center}
          defaultZoom={defaultMapProps.zoom}
        >
          {location && <Marker lat={location.lat} lng={location.lng} />}
        </GoogleMapReact>
      </div>
    </div>
  );
}

function Marker({ lat, lng }) {
  return (
    <div>
      <img
        src="images/icons/google_maps_marker.png"
        width="35px"
        height="48px"
        style={{ position: "absolute", top: "-48px", left: "-17.5px" }}
      />
    </div>
  );
}

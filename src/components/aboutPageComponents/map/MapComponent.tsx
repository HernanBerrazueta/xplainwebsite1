import React from "react";
import { MapContainer } from "./MapComponent.styled";

const MapComponent: React.FC = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.918360554552!2d-0.12758692245376932!3d51.533057208827614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3c68c07809%3A0x1f810007fbcd81c2!2sFora%20-%20Gridiron%20Building!5e0!3m2!1sen!2suk!4v1718023559744!5m2!1sen!2suk"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapContainer>
  );
};

export default MapComponent;

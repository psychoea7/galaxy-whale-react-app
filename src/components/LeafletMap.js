import React from "react";
import "./LeafletMap.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet"; // Import the Icon component
import "leaflet/dist/leaflet.css";

// Import your custom marker icon image
import customMarkerIcon from "../assets/images/4.png";

function LeafletMap() {
  // Create a custom marker icon
  const customIcon = new Icon({
    iconUrl: customMarkerIcon, // Specify the path to your marker icon image
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32], // Adjust the anchor point if necessary
  });

  return (
    <MapContainer
      attributionControl={false}
      className="contactScreen__map"
      center={[23.59258402943304, 58.3805206462269]}
      zoom={13}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Use the custom icon for the Marker */}
      <Marker position={[23.59258402943304, 58.3805206462269]} icon={customIcon} />
    </MapContainer>
  );
}

export default LeafletMap;

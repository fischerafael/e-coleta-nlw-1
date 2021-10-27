import { LeafletMouseEvent } from "leaflet";
import { useEffect } from "react";
import { MapContainer, MapContainerProps, Marker, Popup } from "react-leaflet";
import { TileLayer } from "./TileLayer";

interface Props extends MapContainerProps {
  latitude: number;
  longitude: number;
}

export const Map = ({ latitude, longitude, ...props }: Props) => {
  useEffect(() => {}, []);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      {...props}
    >
      <TileLayer />
      <Marker position={[latitude, longitude]}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
// export { Map };

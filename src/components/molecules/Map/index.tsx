import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "./TileLayer";

interface Props {
  latitude: number;
  longitude: number;
}

export const Map = ({ latitude = 0, longitude = 0 }: Props) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
// export { Map };

import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "./TileLayer";

// interface Props extends MapContainerProps {
//   initialPosition: { latitude: number; longitude: number };
// }

export const Map = ({ ...props }) => {
  const [isLoading, setLoading] = useState(true);

  const [initialPosition, setInitialPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setInitialPosition({ latitude, longitude });
      setLoading(false);
    });
  }, []);

  if (isLoading) return null;

  return (
    <MapContainer
      center={[initialPosition.latitude || 0, initialPosition.longitude || 0]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      whenCreated={() => {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude, longitude } = pos.coords;
          setInitialPosition({ latitude, longitude });
        });
      }}
      {...props}
    >
      <TileLayer />
      <Marker
        position={[
          initialPosition.latitude || 0,
          initialPosition.longitude || 0,
        ]}
      >
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
// export { Map };

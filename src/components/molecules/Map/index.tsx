import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const mapBoxAPIToken = process.env.NEXT_PUBLIC_MAP_BOX;

const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapBoxAPIToken}`;

export const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url={tileLayerUrl} />
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

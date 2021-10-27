import { TileLayer as LeafletTileLayer } from "react-leaflet";

const mapBoxAPIToken = process.env.NEXT_PUBLIC_MAP_BOX;
const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapBoxAPIToken}`;

export const TileLayer = () => {
  return <LeafletTileLayer url={tileLayerUrl} />;
};

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface CoordsProps {
  latitude: number;
  longitude: number;
}

export const useGetCurrentPosition = () => {
  const { asPath } = useRouter();

  const [coords, setCoords] = useState<CoordsProps>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setCoords({ latitude, longitude });
    });
  }, [asPath]);

  return { coords };
};

import { useEffect, useState } from "react";

export const useGetCurrentPosition = () => {
  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const coords = navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setCoords({ latitude, longitude });
    });

    console.log(coords);
  }, []);

  return { coords };
};

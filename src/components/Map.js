'use client';

import mapboxgl from 'mapbox-gl';
import { useEffect, useContext } from 'react';
import { useRef } from 'react'; 
import { CryptoCommuteContext } from '../../context/cryptocommuteContext';

const style = {
  wrapper: `flex-1 h-full w-full`,
}

const Map = () => {

  const mapContainerRef = useRef(null);

  const { pickupCoordinates, dropoffCoordinates } = useContext(CryptoCommuteContext)

  console.log({pickupCoordinates, dropoffCoordinates})

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/shah1011/clsg5xu99019n01qq02fabk0v',
      center: [77.53911, 12.98172],
      zoom: 11,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }
  
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }
    
    if (pickupCoordinates && dropoffCoordinates){
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 60,
      })
    }

    return () => {
      map.remove();
    }
  }, []);


  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return (
    <div ref={mapContainerRef} className={style.wrapper} id='map'/>
  )
}

export default Map 
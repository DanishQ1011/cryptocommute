import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';

const style = {
  wrapper: `flex-1 h-full w-full`,
}

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/shah1011/clsg5xu99019n01qq02fabk0v',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  }, [])

  return <div className={style.wrapper} id='map'/>
  
}

export default Map 
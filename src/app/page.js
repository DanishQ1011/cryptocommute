import Map from "@/components/Map";
import Navbar from "../components/Navbar";
import LocationSelector from "../components/LocationSelector";
import Confirm from "../components/Confirm";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-[600px] w-[400px] ml-[4rem] mt-[6rem] absolute shadow-xl top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar/>
      <div className={style.main}>
        <Map/>  
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector/>
          <Confirm/>
        </div>
      </div>
    </div>
  );
}

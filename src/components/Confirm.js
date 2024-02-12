'use client';

import RideSelector from '../components/RideSelector'

const style ={
    wrapper: `flex-1 h-full flex flex-col justify-between overflow-scroll`,
    rideSelectorContainer: `pt-2 h-full flex flex-col `,
    confirmButtonContainer: ` mt-6 cursor-pointer z-10`,
    confirmButton: `bg-black text-white m-2 p-2 text-center text-md`,
}

const Confirm = () => {
    const storeTripDetails = async () => {

    }

  return (
    <div className={style.wrapper}>
        <div className={style.rideSelectorContainer}>
            <RideSelector/>
        </div>
        <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
            <div 
                className={style.confirmButton}
                onClick={() => storeTripDetails()}
            >
                Confirm Ride
            </div>
        </div>
        </div>
    </div>
  )
}

export default Confirm
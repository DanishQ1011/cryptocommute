import car1 from '../../public/assets/car1.png'
import car2 from '../../public/assets/car2.png'
import car3 from '../../public/assets/car3.png'
import auto from '../../public/assets/auto.png'
import Ethereum from '../../public/assets/Ethereum.png'
import Image from 'next/image'

const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1`,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    service: `font-medium`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.8rem]`
}

const carList = [
    {
        service: 'CommuteX',
        image: car1,
        priceMultiplier: 1,
    },
    {
        service: 'CommutePremium',
        image: car3,
        priceMultiplier: 1.5,
    },
    {
        service: 'CommuteXL',
        image: car2,
        priceMultiplier: 1.5,
    },
    {
        service: 'CommuteMini',
        image: auto,
        priceMultiplier: 1.5,
    },
]

const basePrice = 154

const RideSelector = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.title}>Choose a ride, or swipe up for more</div>
        <div className={style.carList}>
            {carList.map((car, index) => (
                <div className={style.car}>
                <Image
                    src={car.iconUrl}
                    className={style.carImage}
                    height={50}
                    width={50}
                />
                    <div className={style.carDetails}>
                        <div className={style.service}>{car.service}</div> 
                        <div className={style.time}>5 min away</div>
                    </div>
                    <div className={style.priceContainer}>
                        <div className={style.price}>
                            {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
                        </div>
                        <Image src={Ethereum} alt='ethlogo' height={50} width={50}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RideSelector
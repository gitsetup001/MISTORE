import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"

const HotAccessories = ({ music, Cover, smartDevice, home, lifeStyle, mobileAccessories }) => {
    return (
        <div className="HotAccessories">
            <div>
                <img src={Cover} alt="Cover" />
            </div>

            {/* -----------2nd */}
            <div>
                {music && music.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

                {smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

                {home && home.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

                {lifeStyle && lifeStyle.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

                {mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                ))}

            </div>

        </div>
    )
}

export default HotAccessories
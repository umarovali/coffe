import React from 'react'
import ChooseItem from './ChooseItem/ChooseItem'
import chooseOne from "../../../assets/images/chooseimg/choose_img_1.png"
import chooseTwo from "../../../assets/images/chooseimg/choose_img_2.png"
import chooseThree from "../../../assets/images/chooseimg/choose_img_3.png"

export default function Choose() {
    return (
        <section className='choose'>
            <div className="container">
                <div className="choose_why">Why choose us?</div>
                <div className="choose_a_large">A large part of our role is choosing which particular coffees will be featured <br />
                    in our range. This means working closely with the best coffee growers to give <br />
                    you a more impactful experience on every level.</div>

                <div className="choose_flex">
                    <ChooseItem
                        imageSrc={chooseOne}
                        bestQualityText="Best quality"
                        discoverText="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
                    />
                    <ChooseItem
                        imageSrc={chooseTwo}
                        bestQualityText=" Exclusive benefits"
                        discoverText="Special offers and swag when you subscribe, including 30% off your first shipment."
                    />
                    <ChooseItem
                        imageSrc={chooseThree}
                        bestQualityText="Free shipping"
                        discoverText="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
                    />
                </div>

            </div>
        </section>
    )
}

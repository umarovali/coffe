import React from 'react'
import Card from './Card/Card'

export default function Plan() {
    return (
        <div className='plan_wrapper'>
            <div className="plan_mini">
                <div className="plan_square"></div>
                <div className="plan_dashed"></div>
                <div className="plan_square"></div>
                <div className="plan_dashed"></div>
                <div className="plan_square"></div>
            </div>

            <ul className="plan_box">
                <Card num="01" title="Pick your coffee" suptitle="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out." />
                <Card num="02" title="Choose the frequency" suptitle="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal." />
                <Card num="03" title="Receive and enjoy!" suptitle="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience." />
            </ul>
        </div>
    )
}

import React, { useState } from 'react';
import QuesList from './QuesList/QuesList';
import QuesItem from './QuesItem/QuesItem';
import QuesOrder from './QuesOrder/QuesOrder';

export default function Ques() {

    const [select1, setSelect1] = useState(null);
    const [select2, setSelect2] = useState(null);
    const [select3, setSelect3] = useState(null);
    const [select4, setSelect4] = useState(null);
    const [select5, setSelect5] = useState(null);

    const ques1 = [
        {
            id: 1,
            active: select1 === 1 ? "ques_card_active" : "ques_card",
            title: "Capsule",
            suptitle: "Compatible with Nespresso systems and similar brewers"
        },
        {
            id: 2,
            active: select1 === 2 ? "ques_card_active" : "ques_card",
            title: "Filter",
            suptitle: "For pour over or drip methods like Aeropress, Chemex, and V60"
        },
        {
            id: 3,
            active: select1 === 3 ? "ques_card_active" : "ques_card",
            title: "Espresso",
            suptitle: "Dense and finely ground beans for an intense, flavorful experience"
        }
    ]

    const ques2 = [
        {
            id: 1,
            active: select2 === 1 ? "ques_card_active" : "ques_card",
            title: "Single Origin",
            suptitle: "Distinct, high quality coffee from a specific family-owned farm"
        },
        {
            id: 2,
            active: select2 === 2 ? "ques_card_active" : "ques_card",
            title: "Decaf",
            suptitle: "Just like regular coffee, except the caffeine has been removed"
        },
        {
            id: 3,
            active: select2 === 3 ? "ques_card_active" : "ques_card",
            title: "Blended",
            suptitle: "Combination of two or three dark roasted beans of organic coffees"
        }
    ]

    const ques3 = [
        {
            id: 1,
            active: select3 === 1 ? "ques_card_active" : "ques_card",
            title: "250g",
            suptitle: "Perfect for the solo drinker. Yields about 12 delicious cups."
        },
        {
            id: 2,
            active: select3 === 2 ? "ques_card_active" : "ques_card",
            title: "500g",
            suptitle: "Perfect option for a couple. Yields about 40 delectable cups."
        },
        {
            id: 3,
            active: select3 === 3 ? "ques_card_active" : "ques_card",
            title: "1000g",
            suptitle: "Perfect for offices and events. Yields about 90 delightful cups."
        }
    ]

    const ques4 = [
        {
            id: 1,
            active: select4 === 1 ? "ques_card_active" : "ques_card",
            title: "Wholebean",
            suptitle: "Best choice if you cherish the full sensory experience"
        },
        {
            id: 2,
            active: select4 === 2 ? "ques_card_active" : "ques_card",
            title: "Filter",
            suptitle: "For drip or pour-over coffee methods such as V60 or Aeropress"
        },
        {
            id: 3,
            active: select4 === 3 ? "ques_card_active" : "ques_card",
            title: "Cafetiére",
            suptitle: "Course ground beans specially suited for french press coffee"
        }
    ]

    const ques5 = [
        {
            id: 1,
            active: select5 === 1 ? "ques_card_active" : "ques_card",
            title: "Every week",
            suptitle: "$7.20 per shipment. Includes free first-class shipping."
        },
        {
            id: 2,
            active: select5 === 2 ? "ques_card_active" : "ques_card",
            title: "Every 2 weeks",
            suptitle: "$9.60 per shipment. Includes free priority shipping."
        },
        {
            id: 3,
            active: select5 === 3 ? "ques_card_active" : "ques_card",
            title: "Every month",
            suptitle: "$12.00 per shipment. Includes free priority shipping."
        }
    ]




    return (
        <section className='ques'>
            <div className="container">
                <div className="ques_left_right">
                    <ul className="ques_left">
                        <QuesList num="01" text="Preferences" />
                        <QuesList num="02" text="Bean Type" />
                        <QuesList num="03" text="Quantity" />
                        <QuesList num="04" text="Grind Option" />
                        <QuesList num="05" text="Deliveries" />
                    </ul>

                    <div className='ques_right'>
                        <ul className="ques_right_wrapper">

                            <QuesItem
                                name="How do you drink your coffee?"
                                content={ques1}
                                setSelect={setSelect1}
                            />
                            <QuesItem
                                name="What type of coffee?"
                                content={ques2}
                                setSelect={setSelect2}
                            />
                            <QuesItem
                                name="How much would you like?"
                                content={ques3}
                                setSelect={setSelect3}
                            />
                            <QuesItem
                                name="Want us to grind them?"
                                content={ques4}
                                setSelect={setSelect4}
                            />
                            <QuesItem
                                name="How often should we deliver?"
                                content={ques5}
                                setSelect={setSelect5}
                            />
                        </ul>

                        <QuesOrder />
                    </div>
                </div>
            </div>
        </section>
    )
}

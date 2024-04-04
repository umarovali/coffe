import React from 'react';

export default function QuesOrder() {
    return (
        <div className='ques_order'>
            <div className="ques_order_bg">
                <h5 className='ques_order_title'>Order Summary</h5>
                <p className='ques_order_suptitle'>
                    “I drink my coffee as <span>Filter</span>, with a <span>Decaf</span> type of bean. <span>250g</span> ground ala <span>Cafetiére</span>, sent to me <span>Every Week.</span>”
                </p>
            </div>

            <button className="ques_btn">Create me plan</button>
        </div>
    )
}

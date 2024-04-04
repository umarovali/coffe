import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

export default function QuesItem({ name, content, setSelect }) {
    const [navigation, setNavigation] = useState(false);

    const displayNavigation = {
        display: (navigation) ? "flex" : "none",
    }

    const clickDisplay = () => {
        setNavigation(!navigation)
    }

    const handleCardClick = (id) => {
        setSelect(id);
    };

    return (
        <li className='ques_item'>
            <h5 onClick={clickDisplay} className='ques_name'>{name}<FaAngleDown className="ques_arrow" /></h5>

            <ul style={displayNavigation} className='ques_block'>

                {content.map((e) => (
                    <li
                        onClick={() => handleCardClick(e.id)}
                        className={e.active}>
                        <h5 className='ques_title'>{e.title}</h5>
                        <p className='ques_suptitle'>{e.suptitle}</p>
                    </li>
                ))}
            </ul>
        </li>
    )
}

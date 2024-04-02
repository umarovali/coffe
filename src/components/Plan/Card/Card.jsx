import React from 'react';

export default function Card({num, title, suptitle}) {
    return (
        <li className='card'>
            <span className='card_num'>{num}</span>
            <h5 className='card_title'>{title}</h5>
            <p className='card_suptitle'>{suptitle}</p>
        </li>
    )
}

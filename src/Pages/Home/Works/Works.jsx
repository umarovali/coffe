import React from 'react';
import Plan from '../../../components/Plan/Plan';

export default function Works() {
    return (
        <section className='works'>
            <h4 className='works_title'>How it works</h4>
            <div className="container">
                <Plan />
            </div>

            <center><button className='work_btn'>Create your plan</button></center>
        </section>
    )
}

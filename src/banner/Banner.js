import React from 'react';
import './banner.css'

export default function Banner(){
    return(
        <>
            <section className='banner'>
                <div className='container'>
                    <img src={require('../img/banner.png')} alt="..." />
                </div>
            </section>
        </>
    )
}
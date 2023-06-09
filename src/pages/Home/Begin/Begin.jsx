import React from 'react';
import computer from '../../../assets/images/computer.png'
import Aside from "../../../components/Aside/Aside";
const Begin = () => {
    return (
        <div className="begin">
            <Aside/>
            <section className="sale">
                <h2 className="sale__title">
                    BIG SALE 20%
                </h2>
                <div className="sale__wrapper">
                    <div className="sale__info">
                        <p className="sale__info-subtitle">
                            the bestseller of 2022
                        </p>
                        <h3 className="sale__info-title">
                            LENNON r2d2 <br/>
                            with NVIDIA 5090 TI
                        </h3>
                        <button className="sale__info-btn btn">
                            Shop Now
                        </button>
                    </div>
                    <img src={computer} alt="" className="sale__img"/>
                </div>
            </section>
        </div>
    );
};

export default Begin;
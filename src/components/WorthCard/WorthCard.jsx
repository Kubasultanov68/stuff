import React from 'react';
import product from "../../assets/images/product.png";

const WorthCard = () => {
    return (
        <div className="trending__card worth__card">
            <img src={product} alt="" className="trending__card-img"/>
            <h3 className="worth__card-title">
                Sneakers
            </h3>
        </div>
    );
};

export default WorthCard;
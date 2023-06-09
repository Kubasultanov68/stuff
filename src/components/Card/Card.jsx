import React from 'react';
import product from '../../assets/images/product.png'
import {Link} from "react-router-dom";
const Card = ({item}) => {
    return (
        <div className="trending__card">
            <Link to={`/product/${item.id}`}>
                <img src={item?.images[0]} alt="" className="trending__card-img"/>
            </Link>
            <div className="trending__card-info">
                <h3 className="trending__card-title">
                    {item.title}
                </h3>
                <p className="trending__card-category">
                    {item.category.name}
                </p>
                <div className="trending__card-bottom">
                    <p className="trending__card-price">
                        {item.price - (item.price / 10)}$
                        <span className="trending__card-oldPrice">
                                    {item.price}$
                                </span>
                    </p>
                    <div className="trending__card-purchased">
                        19 people purchased
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper";
import {useDispatch} from "react-redux";
import {addCart, addFavorite, deleteCart} from "../../redux/reducers/user";

const Product = ({data}) => {

    const dispatch = useDispatch()


    return (
        <div className="product">
            <div className="product__left">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={5}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                >
                    {
                        data?.images?.map((item) => (
                            <SwiperSlide>
                                <img src={item} alt=""/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="product__right">
                <div className="product__info">
                    <h2 className="product__title">
                        {data?.title}
                    </h2>
                    <h2 className="product__price">
                        {data?.price} $
                    </h2>
                    <p className="product__color">
                        Color:  <span>Blanc</span>
                    </p>
                    <p className="product__sizes">
                        Sizes:  <div className="product__sizes-btns">
                        <button className="product__sizes-btn">4.5</button>
                        <button className="product__sizes-btn active">5</button>
                        <button className="product__sizes-btn">5.5</button>
                    </div>
                    </p>
                    <p className="product__desc">
                        {data?.description}
                    </p>
                    <div className="product__btns">
                        <button
                            onClick={() => dispatch(addCart(data))}
                            className="product__btn cart">
                            Add to cart
                        </button>
                        <button
                            onClick={() => dispatch(addFavorite(data))}
                            className="product__btn favorite">
                            Add to favorites
                        </button>
                    </div>
                </div>
                <div className="product__addinfo">
                    <p className="product__addinfo-desc">19 people purchased</p>
                    <p className="product__addinfo-desc">Find in a store</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
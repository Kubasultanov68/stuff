import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../redux/reducers/api";
import {getProduct} from "../../redux/reducers/product";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../Card/Card";


const SimilarSlider = ({dataProduct}) => {

    const dispatch = useDispatch()
    const id = dataProduct?.category?.id

    const defaultParams = {
        "category.id": id,
    }

    const [params, setParams] = useState(defaultParams)
    const {data} = useGetProductsQuery(params)

    useEffect(() => {
        setParams((prevParams) => ({
            ...prevParams,
            "category.id": id
        }))
    }, [id])

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <>
            <div className="similar">
                <h2 className="similar__title">
                    similar products
                </h2>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    slidesPerView={5}
                    spaceBetween={30}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {
                        data?.map((item, idx) => (
                            <SwiperSlide>
                                <Card item={item} key={item.id || idx}/>
                            </SwiperSlide>
                        ))
                    }
                    {
                        data?.map((item, idx) => (
                            <SwiperSlide>
                                <Card item={item} key={item.id || idx}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
};

export default SimilarSlider;
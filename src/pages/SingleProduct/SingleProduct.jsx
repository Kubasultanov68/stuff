import React from 'react';
import {useGetProductQuery} from "../../redux/reducers/api";
import {useParams} from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import Product from "../../components/Product/Product";
import SimilarSlider from "../../components/SimilarSlider/SimilarSlider";

const SingleProduct = () => {

    const {id} = useParams()
    const {data} = useGetProductQuery({id})

    return (
        <section className="single">
            <div className="container">
                <div className="single__row">
                    <Aside/>
                    <Product data={data}/>
                </div>
                <SimilarSlider id={id} dataProduct={data}/>
            </div>
        </section>
    );
};

export default SingleProduct;
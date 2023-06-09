import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../redux/reducers/api";
import {getProduct} from "../../redux/reducers/product";
import Begin from "../Home/Begin/Begin";
import Card from "../../components/Card/Card";

const Categories = () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    const defaultParams = {
        price_gte: 0,
        price_lte: 2000,
        "category.id": id,
        title_like: ''
    }

    const [params, setParams] = useState(defaultParams)
    const {data} = useGetProductsQuery(params)

    useEffect(() => {
        setParams((prevParams) => ({
            ...prevParams,
            "category.id": id,
            _limit: 5
        }))
    }, [id])

    useEffect(() => {
        dispatch(getProduct())
    }, [])


    const handleChange = ({target: {value}}) => {
        setParams({...params, title_like: value})
    }

    const priceChange = ({target: {value}}) => {
        setParams({...params, price_gte: value})
    }

    const priceMax = ({target: {value}}) => {
        setParams({...params, price_lte: value})
    }

    return (
        <section className="categores">
            <div className="container">
                <Begin/>
                <div className="trending">
                    <h2 className="trending__title title">
                        {data && data[0] && data[0].category?.name}
                    </h2>
                    <form action="" className="categories__form">
                        <div className="categories__form-filter">
                            <input
                                type="text"
                                className="categories__form-input"
                                name={"title__like"}
                                placeholder={"Product name"}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                className="categories__form-input"
                                name={"price_gte"}
                                placeholder={"Цена ($)"}
                                onChange={priceChange}
                            />
                        </div>
                    </form>
                    <div className="trending__row">
                        {
                            data?.map((item, idx) => (
                                <Card item={item} key={item.id || idx}/>
                            ))
                        }
                    </div>
                    {
                        data?.length >= params._limit ?
                            <button
                                className="new__btn btn"
                                onClick={() => setParams(prev => ({
                                    ...prev,
                                    _limit: prev._limit + 5
                                }))}
                            >
                                See more
                            </button> : ''
                    }
                </div>
            </div>
        </section>
    );
};

export default Categories;
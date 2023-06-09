import React, {useEffect} from 'react';
import Begin from "./Begin/Begin";
import Trending from "./Trending/Trending";
import Worth from "./Worth/Worth";
import New from "./New/New";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/reducers/product";

const Home = () => {

    const {data} = useSelector(store => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    },[])


    return (
        <div className="container">
            <Begin/>
            <Trending data={data} title={'Trending'}/>
            <Worth/>
            <New/>
            <Trending less={'Less than 100$'}/>
        </div>
    );
};

export default Home;
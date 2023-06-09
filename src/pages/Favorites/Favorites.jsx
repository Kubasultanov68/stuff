import React from 'react';
import {useSelector} from "react-redux";
import Trending from "../Home/Trending/Trending";
import Begin from "../Home/Begin/Begin";

const Favorites = () => {

    const {favorite} = useSelector(store => store.user)

    return (
        <div className="container">
            <Begin/>
            <Trending data={favorite} title={'Favorites'}/>
        </div>
    );
};

export default Favorites;
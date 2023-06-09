import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../redux/reducers/category";
import {NavLink} from "react-router-dom";

const Aside = () => {

    const {data} = useSelector(store => store.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [])
    return (
        <aside className="aside">
            <div className="aside__top">
                <h2 className="aside__title">
                    CATEGORIES
                </h2>
                <ul className="aside__list">
                    {
                        data.map((item) => (
                            <NavLink to={`/categories/${item.id}`} className="aside__item">
                                {item.name}
                            </NavLink>
                        ))
                    }
                </ul>
            </div>

            <div className="aside__bottom">
                <a href="" className="aside__bottom-link">Help</a>
                <a href="" className="aside__bottom-link">Terms & Conditions</a>
            </div>
        </aside>
    );
};

export default Aside;
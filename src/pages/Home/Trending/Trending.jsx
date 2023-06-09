import React, {useEffect} from 'react';
import Card from "../../../components/Card/Card";


const Trending = ({title, less, data}) => {



    return (
        <section className="trending">
            <h2 className="trending__title title">
                {title || less}
            </h2>
            <div className="trending__row">
                {
                    data?.map((item) => (
                        <Card item={item}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Trending;
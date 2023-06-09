import React from 'react';
import WorthCard from "../../../components/WorthCard/WorthCard";

const Worth = () => {
    return (
        <section className="worth">
            <h2 className="trending__title title">
                Worth seeing
            </h2>
            <div className="trending__row worth__row">
                <WorthCard/>
            </div>
        </section>
    );
};

export default Worth;
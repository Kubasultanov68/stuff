import React from 'react';

const New = () => {
    return (
        <section className="new">
            <div className="new__content">
                <div className="new__left">
                    <h2 className="new__title">
                        NEW YEAR
                        <span className="new__title-big">
                            SALE
                        </span>
                    </h2>
                    <button className="new__btn btn">
                        See more
                    </button>
                </div>
                <div className="new__right">
                    <p className="new__right-text">
                        save up to <span>50%</span> off
                    </p>
                </div>
            </div>
        </section>
    );
};

export default New;
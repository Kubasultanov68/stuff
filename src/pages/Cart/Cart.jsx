import React, {useEffect} from 'react';
import Aside from "../../components/Aside/Aside";
import img from '../../assets/images/product.png'
import {useDispatch, useSelector} from "react-redux";
import {addCount, deleteCart, deleteCount} from "../../redux/reducers/user";


const Cart = () => {

    const {cart} = useSelector(store => store.user)
    const dispatch = useDispatch()




    return (

        <section className="cart">
            <div className="container">
                <div className="cart__content">
                    <Aside/>
                    <div className="cart__cart-content">
                    {
                        cart.length ?
                            <>
                                <h2 className="cart__title">
                                    Your cart
                                </h2>
                                <div className="cart__row">
                                    {
                                        cart.map((item) =>(
                                            <div className="cart__card">
                                                <div className="cart__card-info">
                                                    <img src={item?.images[0]} alt=""/>
                                                    <div>
                                                        <h3 className="cart__card-title">
                                                            {item.title}
                                                        </h3>
                                                        <p className="cart__card-category">
                                                            {item.category.name}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="cart__card-sale">
                                                    <h3 className="cart__card-price">
                                                        {item.price}$
                                                    </h3>
                                                    <div className="cart__card-counter">
                                                        <button
                                                            onClick={() => dispatch(deleteCount(item))}
                                                            className="cart__card-btn">
                                                            -
                                                        </button>
                                                        <span>
                                            {item.count}
                                        </span>
                                                        <button
                                                            onClick={() => dispatch(addCount(item))}
                                                            className="cart__card-btn plus">
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart__card-end">
                                                    <h3 className="cart__card-price">
                                        <span>
                                            {item.price * item.count}$
                                        </span>
                                                    </h3>
                                                    <button
                                                        onClick={() => dispatch(deleteCart(item))}
                                                        className="cart__card-delete">
                                                        x
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="cart__bottom">
                                    <h2 className="cart__bottom-price">
                                        TOTAL PRICE: <span>{cart.reduce((acc, rec) => acc += rec.price * rec.count, 0)}$</span>
                                    </h2>
                                    <button className="btn">
                                        Proceed to checkout
                                    </button>
                                </div>
                            </> :
                            <h2 className="cart__no">Ваша корзина пуста!</h2>
                    }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
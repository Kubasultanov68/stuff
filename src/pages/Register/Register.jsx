import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask'
import {useDispatch} from "react-redux";
import axios from "axios";
import {instance} from "../../utils/axios";
import {loginUser} from "../../redux/reducers/user";



const Register = () => {


    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})

    const onSubmit = (data) => {
        axios.post(`${instance}/register`, data)
            .then((res) => {
                navigate('/')
                dispatch(loginUser({
                        ...res.data.user,
                        token: res.data.accessToken
                    },
                    localStorage.setItem('user', JSON.stringify({
                        ...res.data.user,
                        token: res.data.user.accessToken
                    }))
                ))
            })
            .catch((err) => alert(err))
    }


    return (
        <section className="login">
            <div className="login__block">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form" >
                    <h2>Регистрация</h2>
                    <div className="login__form-block">
                        <input {...register('email',{
                            required: {
                                message: 'Email обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символа',
                                value: 10
                            },
                            pattern: {
                                message: 'Напишите правильно свой email',
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })} type="email" className="login__form-input" placeholder="Введите email"/>
                        <p className='register__form-error'>
                            {errors.email && errors.email?.message}
                        </p>
                    </div>
                    <div className="login__form-block">
                        <input {...register('avatar', {
                            required: {
                                message: 'заполните аватрку',
                                value: true
                            },
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа"
                            }
                        })}  type="text" className="login__form-input" placeholder="Введите url аватарки!"/>
                        <p className='register__form-error'>
                            {errors.login && errors.login?.message}
                        </p>
                    </div>
                    <div className="login__form-block">
                        <input {...register('name', {
                            required: {
                                message: 'заполните имя пользователя',
                                value: true
                            },
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа"
                            }
                        })}  type="text" className="login__form-input" placeholder="Введите имя!"/>
                        <p className='register__form-error'>
                            {errors.login && errors.login?.message}
                        </p>
                    </div>
                    <div className="login__form-block">
                        <input {...register('password', {
                            required: {
                                message: "Пароль обязателен к заполнению",
                                value: true
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                            }
                        })} type={show ? 'text' : 'password'} className="login__form-input" placeholder="Ввдите пароль"/>
                        <p className='register__form-error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </div>

                    <label className='register__form-label register__form-label_checkbox'>
                        <input checked={show} onChange={() => setShow(!show)}  className='register__form-input register__form-input_checkbox' type="checkbox"/>
                        <span className='register__form-show'>Показать пароль</span>
                    </label>

                    <div className="login__form-block">
                        <button className="login__form-btn" type={"submit"}>
                            Зарегистрироваться
                        </button>
                    </div>
                    <p className="login__reg">
                        Уже есть профиль ?
                        <Link className="login__reg-link" to={'/login'}>
                            Войти
                        </Link>
                    </p>

                </form>
                <div className="login__route">
                    <BiHomeSmile className="login__route-icon"/>
                    <Link className="login__route-link" to={'/'}>
                        Вернуться на главную страницу
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Register;
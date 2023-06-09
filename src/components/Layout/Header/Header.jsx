import React, {useState} from 'react';
import logo from "../../../assets/images/logo.svg"
import avatar from "../../../assets/images/avatar.svg"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useGetProductsQuery} from "../../../redux/reducers/api";
const Header = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : ''

    const {data, isLoading} = useGetProductsQuery({title_like: search})

    const handleSearch = ({target: {value}}) => {
        setSearch(value)
    }

    const {cart} = useSelector(store => store.user)
    const {favorite} = useSelector(store => store.user)


    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__title">
                        <Link to={''}>
                            <img src={logo} alt=""/>
                        </Link>
                    </h1>
                    <Link to={'/register'} className="header__user">
                        <div className="header__user-circle">
                            <img className="header__user-avatar" src={user.avatar} alt=""/>
                        </div>
                        {user.name}
                    </Link>

                    <div className="header__search">
                        <span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M12.8416 12.0758L9.60783 8.84204C10.4886 7.76481 10.9216 6.39027 10.8173 5.00273C10.7131 3.61519 10.0795 2.3208 9.04763 1.3873C8.01577 0.453803 6.66459 -0.0473866 5.27357 -0.0126007C3.88255 0.0221852 2.55811 0.590285 1.57421 1.57419C0.5903 2.5581 0.0222005 3.88254 -0.0125854 5.27356C-0.0473713 6.66458 0.453818 8.01576 1.38732 9.04761C2.32081 10.0795 3.6152 10.7131 5.00274 10.8173C6.39029 10.9216 7.76483 10.4886 8.84205 9.60782L12.0758 12.8416C12.1791 12.9339 12.3139 12.9832 12.4524 12.9793C12.5909 12.9754 12.7227 12.9186 12.8207 12.8207C12.9187 12.7227 12.9754 12.5909 12.9793 12.4524C12.9832 12.3139 12.9339 12.1791 12.8416 12.0758ZM5.41737 9.75001C4.55987 9.75041 3.72153 9.49647 3.00838 9.02033C2.29523 8.54418 1.73933 7.86721 1.411 7.07507C1.08266 6.28293 0.996649 5.4112 1.16384 4.57016C1.33103 3.72913 1.74391 2.95657 2.35025 2.35023C2.95659 1.74389 3.72914 1.33101 4.57018 1.16382C5.41121 0.996633 6.28294 1.08265 7.07509 1.41098C7.86723 1.73931 8.5442 2.29522 9.02034 3.00836C9.49649 3.72151 9.75042 4.55986 9.75002 5.41735C9.74841 6.56595 9.29142 7.66704 8.47924 8.47922C7.66705 9.2914 6.56596 9.74839 5.41737 9.75001Z"
    fill="#576067"/>
</svg>

                </span>
                        <input
                            type="search"
                            className="header__search-field"
                            placeholder="Search for anything..."
                            value={search}
                            onChange={handleSearch}
                        />
                        <div
                            className={`header__search-result ${search ? 'active' : ''}`}
                        >
                            {
                                isLoading ? 'Loading' :
                                    !data.length ? "No result" :
                                        data.map((item, idx) => (
                                            <div className="header__search-item"
                                                 key={item.id || idx}
                                                 onClick={() => {
                                                     navigate(`/products/${item.id}`)
                                                     setSearch('')
                                                 }}
                                            >
                                                <img src={item.images[0]} alt=""/>
                                                <p>{item.title}</p>
                                            </div>
                                        ))
                            }
                        </div>
                    </div>

                    <div className="header__right">
                        <Link to={'/favorites'} href="" className="header__right-link">
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 11C0.75 8 1.5 3.5 5.25 2C9 0.5 11.25 3.5 12 5C12.75 3.5 15.75 0.5 19.5 2C23.25 3.5 23.25 8 21 11C18.75 14 12 20 12 20C12 20 5.25 14 3 11Z"
                                    stroke="#B8B8B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="header__amount">
                                {favorite.length}
                            </p>
                        </Link>
                        <Link to={'/cart'} href="" className="header__right-link">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.94 17.06L17.26 7.31C17.1453 6.47997 16.7404 5.71734 16.1172 5.15725C15.4939 4.59716 14.6926 4.27576 13.855 4.25H13.75C13.75 3.25544 13.3549 2.30161 12.6517 1.59835C11.9484 0.895088 10.9946 0.5 10 0.5C9.00546 0.5 8.05163 0.895088 7.34837 1.59835C6.64511 2.30161 6.25002 3.25544 6.25002 4.25H6.14502C5.30749 4.27576 4.50611 4.59716 3.88287 5.15725C3.25963 5.71734 2.85477 6.47997 2.74002 7.31L1.06002 17.06C0.956834 17.6256 0.979262 18.2071 1.12572 18.7631C1.27217 19.3191 1.53907 19.8361 1.90752 20.2775C2.21796 20.6565 2.60803 20.9625 3.05003 21.1738C3.49204 21.385 3.97513 21.4964 4.46502 21.5H15.535C16.0249 21.4964 16.508 21.385 16.95 21.1738C17.392 20.9625 17.7821 20.6565 18.0925 20.2775C18.461 19.8361 18.7279 19.3191 18.8743 18.7631C19.0208 18.2071 19.0432 17.6256 18.94 17.06ZM10 2C10.5968 2 11.1691 2.23705 11.591 2.65901C12.013 3.08097 12.25 3.65326 12.25 4.25H7.75002C7.75002 3.65326 7.98707 3.08097 8.40903 2.65901C8.83099 2.23705 9.40328 2 10 2ZM16.945 19.31C16.7755 19.522 16.5612 19.6938 16.3174 19.8131C16.0736 19.9325 15.8064 19.9963 15.535 20H4.46502C4.19362 19.9963 3.92643 19.9325 3.68263 19.8131C3.43883 19.6938 3.2245 19.522 3.05502 19.31C2.82646 19.0365 2.66149 18.7157 2.57199 18.3707C2.4825 18.0257 2.47073 17.6651 2.53752 17.315L4.21752 7.565C4.27335 7.08382 4.49737 6.63782 4.85004 6.30574C5.20271 5.97365 5.66135 5.77683 6.14502 5.75H13.855C14.3387 5.77683 14.7973 5.97365 15.15 6.30574C15.5027 6.63782 15.7267 7.08382 15.7825 7.565L17.4625 17.315C17.5293 17.6651 17.5175 18.0257 17.428 18.3707C17.3386 18.7157 17.1736 19.0365 16.945 19.31Z"
                                    fill="#B8B8B8"/>
                            </svg>
                            <p className="header__amount">
                                {cart.length}
                            </p>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
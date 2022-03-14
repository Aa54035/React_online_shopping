import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
 

const Header = () => {
    return (
        <div className="header">

            <div className="header__logo">
                <StoreIcon fontSize="large" className="header__logoImage" />
                <h2 className="header__logoTitle"> Amazone shop</h2>
            </div>

            <div className="header__search">
                <input type="text" className="header__searchInput" name="Search" id="SearchID" />
                <SearchIcon fontSize="large" className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne"> Hello Guest   </span>
                    <span className="nav__itemLineTwo"> sign IN </span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne"> Your</span>
                    <span className="nav__itemLineTwo"> Shopping </span>

                </div>
                <div className="nav__itemBasket">
                    <ShoppingBasketIcon fontSize="large" className="nav__itemBasket"/>
                    <span className="nav__itemLineTwo nav__basketCount"> 00</span>
                </div>

            </div>


        </div>
    )
}

export default Header